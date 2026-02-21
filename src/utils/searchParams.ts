export enum SearchParams {
  MARKDOWN = "markdown",
}

/**
 * Retrieves the search parameters from the current URL.
 * @returns An object containing the search parameters as key-value pairs.
 */
export const getSearchParams = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};

  for (const [key, value] of searchParams) {
    params[key] = value;
  }
  return params;
};
