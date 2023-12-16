import { AxiosRequestConfig } from "axios";
import { compact as _compact } from "lodash";
import ApiConfig from "@/config/api";
import {
  ApiGame,
  ApiGamePlatform,
  ApiGameGenre,
  ApiGameGameSort,
} from "@/typing/api";
import { buildDeps } from "./_utils";
import useData from "./useData";

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
    platforms?: ApiGamePlatform[] | [];
  };
  ordering?: ApiGameGameSort;
}

/**
 * Fetches a list of games from the API endpoint.
 * @returns {ApiGame[]} games - List of games fetched from the API.
 * @returns {string} error - Error message resulting from the API operation, if any.
 */
const useGames = ({ filters = undefined, ordering = undefined }: Props) => {
  const { data: games, ...rest } = useData<ApiGame>(
    ApiConfig.endpoints.games.getAll,
    filters || ordering ? buildParams({ filters, ordering }) : undefined,
    filters || ordering ? buildDeps({ filters, ordering }) : ""
  );

  return { games, ...rest };
};

/**
 * Build a AxiosRequestConfig with the different filers
 * @param filters
 * @returns
 */
const buildParams = (props: Props): AxiosRequestConfig => {
  const params: { genres?: string; platforms?: string; ordering?: string } = {};

  if (props.filters?.genres && props.filters?.genres.length) {
    params["genres"] = _compact(props.filters?.genres)
      .map((genre) => genre.id)
      .join(",");
  }
  if (props.filters?.platforms && props.filters?.platforms.length) {
    params["platforms"] = _compact(props.filters?.platforms)
      .map((platform) => platform.id)
      .join(",");
  }

  if (props.ordering) {
    params["ordering"] = props.ordering.slug;
  }

  return {
    params: params,
  };
};

export default useGames;
