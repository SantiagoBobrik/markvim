import { DotsSVG } from "../../assets/Dots";
import "./index.css";
import { useState, useRef, useEffect, useCallback } from "react";
import { DownloadFile } from "./options/DownloadFile";
import { CopyToClipBoard } from "./options/CopyToClipBoard";
import { ShareLink } from "./options/ShareLink";
import { ResetEditor } from "./options/ResetEditor";

export const DropDown = () => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActive(!active);
  };

  const close = useCallback(() => setActive(false), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown__button"
        onClick={handleClick}
        aria-label="Toggle options menu"
        aria-expanded={active}
        aria-controls="dropdown-menu"
      >
        <DotsSVG />
      </button>
      <div
        id="dropdown-menu"
        role="menu"
        className={`dropdown__content ${active ? "dropdown__content--active" : ""}`}
      >
        <DownloadFile />
        <CopyToClipBoard />
        <ShareLink />
        <ResetEditor />
      </div>
    </div>
  );
};
