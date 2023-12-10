import { decode } from "js-base64";
import { getSearchParams, SearchParams } from "./searchParams";


/**
 * Retrieves the local state value.
 * 
 * @returns The local state value.
 */
export const getLocalState = () => {
    const urlParams = getSearchParams();
    const markdownParam = urlParams[SearchParams.MARKDOWN];


    if (markdownParam) {
        const userAccepted = window.confirm(`
        Do you want to restore the previous state?  
        This will replace the current content.
        `);
        
        if (userAccepted) {
            localStorage.setItem("markdown", decode(markdownParam));
        }
        
        window.history.pushState({}, "", window.location.pathname);
    }

    return  localStorage.getItem("markdown") || "";
}
