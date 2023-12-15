import { ApiGenre } from "@/typing/api";
import useData from "./useData";
import ApiConfig from "@/config/api";

/**
 * Fetches a list of genres from the API endpoint.
 * @returns {ApiGenre[]} genress - List of genress fetched from the API.
 * @returns {string} error - Error message resulting from the API operation, if any.
 */
const useGenress = () => {
  const { data: genres, ...rest } = useData<ApiGenre>(
    ApiConfig.endpoints.genres.getAll
  );

  return { genres, ...rest };
};

export default useGenress;
