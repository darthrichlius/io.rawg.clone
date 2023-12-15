export interface ApiConfig {
  baseUrl: string;
  endpoints: Record<"games" | "genres", Record<string, string>>;
}

const API_CONFIG: ApiConfig = {
  baseUrl: "https://api.rawg.io/api",
  endpoints: {
    games: {
      getAll: "/games",
    },
    genres: {
      getAll: "/genres",
    },
  },
};

export default API_CONFIG;
