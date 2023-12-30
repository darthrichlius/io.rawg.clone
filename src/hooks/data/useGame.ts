import ApiConfig from "@/config/api";
import { ApiClient } from "@/services";
import { useGameQueryStore } from "@/stores";
import {
  ApiDefaultResponse,
  ApiGame,
  ApiGameGameSort,
  ApiGameGenre,
  ApiGamePlatformParent,
} from "@/types/api";
import { AxiosRequestConfig } from "axios";
import {
  compact as _compact,
  flatten as _flatten,
  isEmpty as _isEmpty,
  map as _map,
  some as _some,
} from "lodash";
import { buildDeps } from "./_utils";
import useData from "./useData";

const useGame = (
  slug: string
): {
  game?: ApiGame;
  loading: boolean;
  [key: string]: unknown;
} => {
  const resource = "games";
  const URL = `${ApiConfig.resources[resource].default.endpoint}/${slug}`;
  const { data, ...rest } = useData<ApiGame>({
    qKey: [...ApiConfig.resources[resource].default.CACHE_KEY, `slug: ${slug}`],
    qFn: () =>
      ApiClient.getOne<ApiGame>({
        resource: resource,
        URL,
      }),
  });

  return {
    game: data,
    loading: rest.isLoading,
    ...rest,
  };
};

export default useGame;
