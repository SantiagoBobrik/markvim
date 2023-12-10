import { useState } from "react";
import { ShareLinkSVG } from "../../../assets/ShareLink";
import { useEditorContext } from "../../../hooks/useEditorContext";
import { encode } from "js-base64";

export const ShareLink = () => {
  const { markdown } = useEditorContext();
  const [copied, setCopied] = useState(false);
  const label = copied ? "Copied!" : "Copy share link";

  const handleOnClick = () => {
    setCopied(true);
    const encodeMarkdown = encode(markdown);
    const url = `${window.location.origin}/?markdown=${encodeMarkdown}`;
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <button className="dropdown__content__option" onClick={handleOnClick}>
      <ShareLinkSVG />
      <span>{label}</span>
    </button>
  );
};
