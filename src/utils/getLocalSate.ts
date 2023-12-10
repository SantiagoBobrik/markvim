import { decode } from "js-base64";
import { getSearchParams, SearchParams } from "./searchParams";


/**
 * Retrieves the local state value.
 * 
 * @returns The local state value.
 */
export const getLocalState = () => {
    const urlParams = getSearchParams();
    const markdownStorage = localStorage.getItem("markdown");
    const markdownParam = urlParams[SearchParams.MARKDOWN];
    const value = markdownParam ? decode(markdownParam) : markdownStorage || "";
    return value;
}
