import { ApiGameQuery } from "@/typing/api";

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
export const buildDeps = ({ filters, ordering, search }: ApiGameQuery): string => {
  let checksum = filters
    ? Object.values(filters)
        .flat()
        .map((filter) => filter.id)
        .join(",")
    : "";
  checksum += ordering?.slug ?? "";
  checksum += search ?? "";

  return checksum;
};
