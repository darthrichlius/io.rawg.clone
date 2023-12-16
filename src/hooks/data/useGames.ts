import { AxiosRequestConfig } from "axios";
import { compact as _compact } from "lodash";
import ApiConfig from "@/config/api";
import { ApiGame, ApiGamePlatform, ApiGameGenre } from "@/typing/api";
import { buildDeps } from "./_utils";
import useData from "./useData";

interface Props {
  filters?: {
    // As of this version, if we have filters, we have "genres"
    genres?: ApiGameGenre[] | [];
    platforms?: ApiGamePlatform[] | [];
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

/**
 * Build a AxiosRequestConfig with the different filers
 * @param filters
 * @returns
 */
const buildParams = (filters: Props["filters"]): AxiosRequestConfig => {
  const params: { genres?: string; platforms?: string } = {};

  if (filters!.genres && filters!.genres.length) {
    params["genres"] = _compact(filters!.genres)
      .map((genre) => genre.id)
      .join(",");
  }
  if (filters!.platforms && filters!.platforms.length) {
    params["platforms"] = _compact(filters!.platforms)
      .map((platform) => platform.id)
      .join(",");
  }

  return {
    params: params,
  };
};

export default useGames;
