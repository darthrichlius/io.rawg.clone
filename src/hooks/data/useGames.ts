import { ApiGame, ApiGenre } from "@/typing/api";
import useData from "./useData";
import ApiConfig from "@/config/api";
import { AxiosRequestConfig } from "axios";

interface Props {
  filters?: {
    // As of this version, if we have filters, we have "genres"
    genres: ApiGenre[];
  };
}

/**
 * Fetches a list of games from the API endpoint.
 * @returns {ApiGame[]} games - List of games fetched from the API.
 * @returns {string} error - Error message resulting from the API operation, if any.
 */
const useGames = ({ filters = undefined }: Props) => {
  const { data: games, ...rest } = useData<ApiGame>(
    ApiConfig.endpoints.games.getAll,
    filters ? buildParams(filters) : undefined,
    filters ? buildDeps(filters) : ""
  );

  return { games, ...rest };
};

const buildParams = (filters: Props["filters"]): AxiosRequestConfig => {
  return {
    params: {
      genres: filters!.genres.map((genre) => genre.id).join(","),
    },
  };
};

/**
 * Create a form of checksum to indicate changes to `useEffect()`.
 *
 * The goal is to construct a string that will signify any change to `useEffect()`.
 * It is crucial to pass stable values or primitive types as they are passed as values and not as pointers.
 * Passing a pointer to `useEffect()` can have severe effects as its value can change and trigger a loop.
 *
 * @param filters
 * @returns
 */
const buildDeps = (filters: Props["filters"]): string => {
  return [filters!.genres.map((genre) => genre.id).join(",")].join(";");
};

export default useGames;
