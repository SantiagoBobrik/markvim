import { DotsSVG } from "../../assets/Dots";
import "./index.css";
import { useState, useRef, useEffect } from "react";
import { DowloadFile } from "./options/DowloadFile";
import { CopyToClipBoard } from "./options/CopyToClipBoard";
import { ShareLink } from "./options/ShareLink";

export const DropDown = () => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const className = active ? "dropdown__content--active" : "";

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown__button" onClick={handleClick}>
        <DotsSVG />
      </button>
      <div className={`dropdown__content ${active && className}`}>
        <DowloadFile />
        <CopyToClipBoard />
        <ShareLink />
      </div>
    </div>
  );
};
