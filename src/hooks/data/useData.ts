import ApiConfig from "@/config/api";
import { ApiDefaultResponse } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface Props<T> {
  qKey: unknown[];
  qFn: () => Promise<ApiDefaultResponse<T>>;
  moreConfig?: object;
}

const useData = <T>({ qKey, qFn, moreConfig }: Props<T>) => {
  return useQuery<ApiDefaultResponse<T>, AxiosError>({
    queryKey: qKey,
    queryFn: qFn,
    staleTime: ApiConfig.staleTime,
    ...moreConfig,
  });
};

export default useData;
