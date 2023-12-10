

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

    if(searchParams.has(key)){
      params[key] = value;
    }
  }
  return params;
};

/**
 * Updates the specified search parameter with the given value and updates the browser's URL.
 * @param param - The search parameter to update.
 * @param value - The new value for the search parameter.
 */
export const updateSearchParam = (param: SearchParams, value: unknown) => {

  const searchParams = new URLSearchParams(param);

  window.history.pushState(
    {},
    "",
    `${window.location.pathname}?${searchParams}=${value}`
  );
};
