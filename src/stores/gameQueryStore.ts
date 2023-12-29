import {
  ApiGameGameSort,
  ApiGameGenre,
  ApiGamePlatformParent,
} from "@/types/api";
import { create } from "zustand";

interface GameQueryStore {
  /**
   * Unlike for setters, we don't need to destructure "filters".
   * We can specifically target one of them.
   * However, this approach needs to be tested and validated.
   * My concern is that when "filters" change, all "filters" clients will change regardless of which one.
   */
  filters: {
    genre?: ApiGameGenre;
    parent_platform?: ApiGamePlatformParent;
  };
  ordering: ApiGameGameSort;
  search: string;
  /**
   * ! IMPORTANT
   * We intentionally avoid using "setFilters" for the following reasons:
   * - It would have required replacing the entire value, thereby:
   *    - (A) Forcing the client to (1) Fetch the state, (2) Build the object, and (3) Set the filters
   *    - (B) Requiring us to guess the nature of the filter before correctly updating the store
   * - Both solutions add unnecessary complexity.
   */
  setGenresFilter: (genre: ApiGameGenre) => void;
  setPlatformsFilter: (platform: ApiGamePlatformParent) => void;
  setOrdering: (orders: ApiGameGameSort) => void;
  setSearch: (searchQuery: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  filters: {},
  ordering: {} as ApiGameGameSort,
  search: "",
  setGenresFilter: (genre) =>
    set((store) => ({
      filters: {
        ...store.filters,
        genre,
      },
    })),
  setPlatformsFilter: (parent_platform) =>
    set((store) => ({
      filters: {
        ...store.filters,
        parent_platform,
      },
    })),
  setOrdering: (orders) =>
    set(() => ({
      ordering: orders,
    })),
  setSearch: (searchQuery) =>
    set(() => ({
      search: searchQuery,
    })),
}));

export default useGameQueryStore;
