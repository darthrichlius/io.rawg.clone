import { ApiClient } from "@/services";
import useData from "./useData";
import { ApiDefaultResponse, ApiGameTrailer } from "@/types/api";

const useGameTrailers = (id: number | string) => {
  const resource = "games";
  const URL = `/games/${id}/movies`;

  const { data, ...rest } = useData<ApiDefaultResponse<ApiGameTrailer>>({
    qKey: ["game_trailer", `id: ${id}`],
    qFn: () =>
      ApiClient.get<ApiDefaultResponse<ApiGameTrailer>>({
        resource,
        URL,
      }),
  });

  return { ...rest, trailers: data?.results ?? [], loading: rest.isLoading };
};

export default useGameTrailers;
