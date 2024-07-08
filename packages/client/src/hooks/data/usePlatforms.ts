import ApiConfig from "@/config/api";
import useData from "./useData";
import { ApiDefaultResponse, ApiGamePlatformParent } from "@/types/api";
import PlatformsStaticData from "@/data/static/parent_platforms";
import ApiService from "@/services/ApiClient";
import { UseQueryOptions } from "@tanstack/react-query";

const usePlatforms = () => {
  const { data, ...rest } = useData<ApiDefaultResponse<ApiGamePlatformParent>>({
    qKey: ApiConfig.resources["parent_platforms"].default.CACHE_KEY,
    qFn: () =>
      ApiService.get<ApiDefaultResponse<ApiGamePlatformParent>>({
        resource: "parent_platforms",
      }),
    moreConfig: {
      /**
       * There is a very low probability "Platforms" data to change
       * Therefore we can rely on static data then update them afterwards
       * The possibility of enabling fetch anyway make the process 100% reliable and consistent with the remote data
       */
      initialData: {
        results: PlatformsStaticData,
      },
    } as UseQueryOptions,
  });

  return { ...rest, platforms: data && data.results ? data.results : [] };
};

export default usePlatforms;
