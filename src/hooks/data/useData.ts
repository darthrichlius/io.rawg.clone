import ApiConfig from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface Props<T> {
  qKey: unknown[];
  qFn: () => Promise<T[]>;
  moreConfig?: object;
}

const useData = <T>({ qKey, qFn, moreConfig }: Props<T>) => {
  console.debug("USE_DATA", qKey);
  return useQuery<T[], AxiosError>({
    queryKey: qKey,
    queryFn: qFn,
    staleTime: ApiConfig.staleTime,
    ...moreConfig,
  });
};

export default useData;
