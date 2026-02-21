import { getSearchParams, SearchParams } from "./searchParams";

/**
 * Retrieves the local state value.
 * If a markdown param exists in the URL, prompts the user to restore it.
 *
 * @returns The local state value.
 */
export const getLocalState = () => {
  const urlParams = getSearchParams();
  const markdownParam = urlParams[SearchParams.MARKDOWN];

  if (markdownParam) {
    const userAccepted = window.confirm(
      "Do you want to restore the previous state? This will replace the current content."
    );

    if (userAccepted) {
      try {
        const binary = window.atob(markdownParam.replace(/\s/g, "+"));
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        const decodedMarkdown = new TextDecoder().decode(bytes);
        localStorage.setItem("markdown", decodedMarkdown);
      } catch {
        localStorage.setItem("markdown", "");
      }
    }

    window.history.pushState({}, "", window.location.pathname);
  }

  return localStorage.getItem("markdown") || "";
};
