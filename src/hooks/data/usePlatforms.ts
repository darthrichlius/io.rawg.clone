import API_CONFIG from "@/config/api";
import useData from "./useData";
import { ApiGamePlatformParent } from "@/typing/api";
import PlatformsStaticData from "@/data/static/platforms";

const usePlatforms = () => {
  const { data: platforms, ...rest } = useData<ApiGamePlatformParent>(
    API_CONFIG.endpoints.platformParents.getAll,
    undefined,
    undefined
  );
  /**
   * There is a very low probability "Platforms" data to change
   * Therefore we can rely on static data then update them afterwards
   * The possibility of enabling fetch anyway make the process 100% reliable and consistent with the remote data
   */
  const data = platforms && !rest.loading ? platforms : PlatformsStaticData;

  return { ...rest, platforms: data, loading: false };
};

export default usePlatforms;
