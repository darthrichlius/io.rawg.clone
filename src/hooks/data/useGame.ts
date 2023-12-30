import ApiConfig from "@/config/api";
import { ApiClient } from "@/services";
import {
  ApiGame
} from "@/types/api";
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
