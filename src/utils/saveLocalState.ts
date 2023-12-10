import { encode } from "js-base64";
import { SearchParams, getSearchParams, updateSearchParam } from "./searchParams";

/**
 * Saves the provided value to the local storage and updates the search parameters if necessary.
 * @param value - The value to be saved to the local storage.
 */
export const saveLocalState = (value: string) => {
    localStorage.setItem(SearchParams.MARKDOWN, value);
    const searchParams = getSearchParams();

    if (Object.keys(searchParams).length !== 0) {
      updateSearchParam(SearchParams.MARKDOWN, encode(value));
    }

}
