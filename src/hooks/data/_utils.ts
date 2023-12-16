import { ApiGamePlatform, ApiGameGenre } from "@/typing/api";

/**
 * We could have used a 'type' declaration,
 * ... but we preferred an interface to maintain coherence with the existing codebase
 */
interface Props extends Record<string, ApiGameGenre[] | ApiGamePlatform[]> {}

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
export const buildDeps = (filters: Props): string => {
  return Object.values(filters)
    .flat()
    .map((filter) => filter.id)
    .join(",");
};
