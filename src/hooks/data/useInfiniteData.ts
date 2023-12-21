import ApiConfig from "@/config/api";
import { ApiDefaultResponse } from "@/types/api";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface Props<T> {
  qKey: unknown[];
  qFn: (props: QueryFunctionContext) => Promise<ApiDefaultResponse<T>>;
  moreConfig?: object;
}

const useInfiniteData = <T>({ qKey, qFn, moreConfig }: Props<T>) => {
  return useInfiniteQuery<ApiDefaultResponse<T>, AxiosError>({
    queryKey: qKey,
    queryFn: qFn,
    staleTime: ApiConfig.staleTime,
    /**
     * Compute the next page
     * Is called when getchNextPage() is used
     * We should return "undefined" when we reach the last page
     *
     * A page contains a set of TData
     * @param lastPage The latest "page" fetched by the API
     * @param allPages A collection of all the "pages" we fetched so far
     * @returns
     */
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    ...moreConfig,
  });
};

export default useInfiniteData;
