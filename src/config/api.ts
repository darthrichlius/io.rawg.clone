import ms from "ms";
export type ApiResource = "games" | "genres" | "parent_platforms";

export interface ApiConfig {
  baseUrl: string;
  staleTime: number;
  resources: Record<
    ApiResource,
    Record<
      string,
      {
        endpoint: string;
        limit?: number;
        CACHE_KEY: Array<string>;
      }
    >
  >;
}

const ApiConfig: ApiConfig = {
  baseUrl: "https://api.rawg.io/api",
  /**
   * The game library is not a data that changes regularely
   * Setting a 24H staletime  (the time data is considered as fresh, no need to refresh)
   * .. is
   *
   * ! IMPORTANT
   * We could have simply used a manuam calculation like 24 * 3_600_000
   * This is just a "choice" for better readibility (and fun... don't blame me :/)
   * The lib is 6kb so ...
   */
  staleTime: ms("24h"),
  resources: {
    games: {
      /**
       * @see https://api.rawg.io/docs/#operation/games_list
       */
      default: {
        endpoint: "/games",
        limit: 12,
        CACHE_KEY: ["games"],
      },
    },
    genres: {
      /**
       * @see https://api.rawg.io/docs/#operation/genres_list
       */
      default: {
        endpoint: "/genres",
        CACHE_KEY: ["genres"],
      },
    },
    parent_platforms: {
      /**
       * @see https://api.rawg.io/docs/#operation/platforms_lists_parents_list
       */
      default: {
        endpoint: "/platforms/lists/parents",
        CACHE_KEY: ["platforms_lists_parents"],
      },
    },
  },
};

export default ApiConfig; // Declaring a real variable helps for the IDE
