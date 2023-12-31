import ApiConfig from "@/config/api";
import {
  QueryFunction,
  QueryKey,
  useInfiniteQuery
} from "@tanstack/react-query";
import { AxiosError } from "axios";

interface Props<T> {
  qKey: QueryKey;
  qFn: QueryFunction<T, QueryKey, unknown>;
  moreConfig?: object;
}

const useInfiniteData = <T>({ qKey, qFn, moreConfig }: Props<T>) => {
  return useInfiniteQuery<T, AxiosError>({
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
      /**
       * The code below is not perfect, but this is the best we can do.
       * The problem here is that this code depends on the definition of `T`.
       * TypeScript (TS) doesn't know `T`, so it throws an error when calling `.next()`.
       * We could have placed this code outside, but we can't because `useInfiniteQuery` requires `getNextPageParam` to be defined.
       * Thus, attempting to solve one issue creates a problem elsewhere.
       * As this is not a Project-of-Interest, we can leave this as it is and try a better approach later.
       */
      return (lastPage as { next: unknown }).next
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
    ...moreConfig,
  });
};

export default useInfiniteData;
