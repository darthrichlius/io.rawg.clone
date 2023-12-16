import API_CONFIG from "@/config/api";
import useData from "./useData";
import { ApiGamePlatform } from "@/typing/api";

const usePlatforms = () => {
  const { data: platforms, ...rest } = useData<ApiGamePlatform>(
    API_CONFIG.endpoints.parentPlatforms.getAll,
    undefined,
    undefined
  );

  return { platforms, ...rest };
};

export default usePlatforms;
