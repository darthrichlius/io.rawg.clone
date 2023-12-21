import ApiConfig from "@/config/api";
import useData from "./useData";
import { ApiGamePlatformParent } from "@/typing/api";
import PlatformsStaticData from "@/data/static/parent_platforms";
import ApiService from "@/services/ApiClient";
import { UseQueryOptions } from "@tanstack/react-query";

const usePlatforms = () => {
  const { data: platforms, ...rest } = useData<ApiGamePlatformParent>({
    qKey: ApiConfig.resources["parent_platforms"].default.CACHE_KEY,
    qFn: () =>
      ApiService.getAll<ApiGamePlatformParent>({ resource: "parent_platforms" }),
    moreConfig: {
      /**
       * There is a very low probability "Platforms" data to change
       * Therefore we can rely on static data then update them afterwards
       * The possibility of enabling fetch anyway make the process 100% reliable and consistent with the remote data
       */
      initialData: PlatformsStaticData,
    } as UseQueryOptions,
  });

  return { ...rest, platforms };
};

export default usePlatforms;
