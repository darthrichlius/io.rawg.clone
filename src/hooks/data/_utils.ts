import {
  ApiGameFiltersQuery,
  ApiGameGenre,
  ApiGamePlatformParent,
  ApiGameQuery,
} from "@/types/api";
import { isEmpty as _isEmpty, map as _map } from "lodash";

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
export const buildDeps = ({
  filters,
  ordering,
  search,
}: ApiGameQuery): string => {
  let deps = "";
  const _filters: { [key in keyof ApiGameFiltersQuery]: string } = {};

  if (filters) {
    Object.keys(filters).map((k) => {
      const _k = k as keyof ApiGameFiltersQuery; // Type assertion for k
      if (!_isEmpty(filters[_k])) {
        _filters[_k] = _map<ApiGameGenre | ApiGamePlatformParent>(
          filters[_k],
          "slug"
        ).join(",");
        deps += `${k}: ${_filters[_k]};`;
      }
    });
  }

  if (ordering?.slug) deps += `orderBy: ${ordering?.slug};`;
  if (search) deps += `search: ${search}`;

  return deps;
};
