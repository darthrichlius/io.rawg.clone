export interface ApiConfig {
  baseUrl: string;
  endpoints: Record<
    "games" | "genres" | "platformParents",
    Record<string, string>
  >;
}

const API_CONFIG: ApiConfig = {
  baseUrl: "https://api.rawg.io/api",
  endpoints: {
    games: {
      /**
       * @see https://api.rawg.io/docs/#operation/games_list
       */
      getAll: "/games",
    },
    genres: {
      /**
       * @see https://api.rawg.io/docs/#operation/genres_list
       */
      getAll: "/genres",
    },
    platformParents: {
      /**
       * @see https://api.rawg.io/docs/#operation/platforms_lists_parents_list
       */
      getAll: "/platforms/lists/parents",
    },
  },
};

export default API_CONFIG;
