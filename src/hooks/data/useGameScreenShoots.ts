import { ApiClient } from "@/services";
import useData from "./useData";
import { ApiDefaultResponse, ApiGameScreenShoot } from "@/types/api";

const useGameScreenshots = (id: number | string) => {
  const resource = "games";
  const URL = `/games/${id}/screenshots`;

  const { data, ...rest } = useData<ApiDefaultResponse<ApiGameScreenShoot>>({
    qKey: ["game_screenshots", `id: ${id}`],
    qFn: () =>
      ApiClient.get<ApiDefaultResponse<ApiGameScreenShoot>>({
        resource,
        URL,
      }),
  });

  return {
    ...rest,
    images: data?.results ?? [],
    loading: rest.isLoading,
  };
};

export default useGameScreenshots;
