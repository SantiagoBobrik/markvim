import { useState } from "react";
import { CopyToClipBoardSVG } from "../../../assets/CopyToClipBoard";
import { useEditorContext } from "../../../hooks/useEditorContext";
import { CopyToClipBoardCheckSVG } from "../../../assets/CopyToClipBoardCheck";

export const CopyToClipBoard = () => {
  const { markdown } = useEditorContext();
  const [copied, setCopied] = useState(false);
  const SVG = copied ? CopyToClipBoardCheckSVG : CopyToClipBoardSVG;
  const label = copied ? "Copied!" : "Copy to clipboard";

  const handleOnClick = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className="dropdown__content__option"
      onClick={handleOnClick}
      aria-label="Copy to clipboard"
    >
      <SVG />
      <span>{label}</span>
    </button>
  );
};
