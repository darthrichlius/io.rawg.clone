import { useState, useEffect } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import { ApiDefaultResponse } from "@/typing/api";
import { ApiClient } from "@/services";

/**
 * Fetches a list of data from the API endpoint.
 * @returns {T[]} data - List of data fetched from the API.
 * @returns {string} loading - Loading state
 * @returns {string} error - Error message resulting from the API operation, if any.
 */
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: string
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      /**
       * The AbortController provides a way to abort (cancel) a request or a fetch operation.
       */
      const controller = new AbortController();

      setLoading(true);

      /**
       * The signal option in the "fetch" or "axios" request allows to associate an AbortController's signal with the request.
       */
      ApiClient.get<ApiDefaultResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      /*
      .finally(() => {
        // Might not work in strict mode
        setLoading(false);
      })
      //*/

      /**
       * In this case, the cleanup function is aimed at avoiding unnecessary operations
       * When the Component is unmounted, we cancel the ongoing HTTP request
       * For example, that means, if the component unmounts before the request is completed,
       * ... the cleanup function is triggered, calling controller.abort() to cancel the request.
       */
      return () => controller.abort();
    },
    /**
     * We're not using "endpoint" as a dependency at this stage as it is unnecessary.
     * We're not using "requestConfig" as a dependency since, as an object, it is not reliable.
     */
    [deps]
  );

  return {
    data,
    loading,
    error,
  };
};

export default useData;
