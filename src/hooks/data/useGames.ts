import { ApiGame } from "@/typing/api";
import useData from "./useData";
import ApiConfig from "@/config/api";

/**
 * Fetches a list of games from the API endpoint.
 * @returns {ApiGame[]} games - List of games fetched from the API.
 * @returns {string} error - Error message resulting from the API operation, if any.
 */
const useGames = () => {
  const { data: games, ...rest } = useData<ApiGame>(
    ApiConfig.endpoints.games.getAll
  );

  return { games, ...rest };
};

export default useGames;
