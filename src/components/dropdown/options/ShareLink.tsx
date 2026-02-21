import { useState } from "react";
import { ShareLinkSVG } from "../../../assets/ShareLink";
import { useEditorContext } from "../../../hooks/useEditorContext";

const MAX_URL_LENGTH = 2000;

export const ShareLink = () => {
  const { markdown } = useEditorContext();
  const [copied, setCopied] = useState(false);
  const label = copied ? "Copied!" : "Copy share link";

  const handleOnClick = async () => {
    const encodeMarkdown = window.btoa(
      new TextEncoder()
        .encode(markdown)
        .reduce((acc, byte) => acc + String.fromCharCode(byte), "")
    );
    const url = `${window.location.origin}/?markdown=${encodeMarkdown}`;

    if (url.length > MAX_URL_LENGTH) {
      alert("The document is too large to share via URL. Try shortening it.");
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch {
      alert("Failed to copy link to clipboard.");
    }
  };

  return (
    <button
      role="menuitem"
      className="dropdown__content__option"
      onClick={handleOnClick}
      aria-label="Copy share link"
    >
      <ShareLinkSVG />
      <span>{label}</span>
    </button>
  );
};
