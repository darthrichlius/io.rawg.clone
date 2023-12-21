import { AxiosRequestConfig } from "axios";
import {
  compact as _compact,
  some as _some,
  isEmpty as _isEmpty,
  map as _map,
  flatten as _flatten,
} from "lodash";
import ApiConfig from "@/config/api";
import { ApiClient } from "@/services";
import {
  ApiGame,
  ApiGameGameSort,
  ApiGameGenre,
  ApiGamePlatformParent,
} from "@/types/api";
import { buildDeps } from "./_utils";
import useInfiniteData from "./useInfiniteData";

/**
 * ! IMPORTANT
 * @todo This should be refactored to use ApiGameQuery
 * I acknowledge it will have an impact as it means refactor the code to make sure to always have an array | undefined
 * Doesn't seen incredible but need to be done carefully
 */
interface Props {
  filters?: {
    // As of this version, if we have filters, we have "genres"
    genres?: ApiGameGenre[] | [];
    parent_platforms?: ApiGamePlatformParent[] | [];
  };
  ordering?: ApiGameGameSort;
  search?: string;
  page?: number;
}

/**
 * Fetches a list of games from the API endpoint.
 * @returns {ApiGame[]} games - List of games fetched from the API.
 * @returns {string} error - Error message resulting from the API operation, if any.
 */
const useGames = ({
  filters = undefined,
  ordering = undefined,
  search = undefined,
}: Props) => {
  const { data, ...rest } = useInfiniteData<ApiGame>({
    qKey:
      (filters && _some(filters, (v) => !_isEmpty(v))) || ordering || search
        ? [
            ...ApiConfig.resources["games"].default.CACHE_KEY,
            buildDeps({ filters, ordering, search }),
          ]
        : ApiConfig.resources["games"].default.CACHE_KEY,
    qFn: ({ pageParam }) =>
      ApiClient.getAll<ApiGame>({
        resource: "games",
        config: {
          params: {
            page: pageParam,
            search,
            ordering,
            page_size: ApiConfig.resources.games.default.limit || undefined,
            ...(filters || ordering ? buildFilterParams({ filters }) : {}),
          },
        },
      }),
  });

  return {
    games: data ? _flatten(_map(data?.pages, "results")) : [],
    loading: rest.isLoading,
    ...rest,
  };
};

/**
 * Build a AxiosRequestConfig with the different filers
 * @param filters
 * @returns
 */
const buildFilterParams = (props: Props): AxiosRequestConfig["params"] => {
  const params: {
    genres?: string;
    parent_platforms?: string;
  } = {};

  if (props.filters?.genres && props.filters?.genres.length) {
    params["genres"] = _compact(props.filters?.genres)
      .map((genre) => genre.id)
      .join(",");
  }
  if (
    props.filters?.parent_platforms &&
    props.filters?.parent_platforms.length
  ) {
    params["parent_platforms"] = _compact(props.filters?.parent_platforms)
      .map((platform) => platform.id)
      .join(",");
  }

  return params;
};

export default useGames;
