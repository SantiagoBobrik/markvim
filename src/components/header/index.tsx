import { GitHub } from "../../assets/GitHub";
import { DropDown } from "../dropdown";
import { Logo } from "./Logo";
import "./index.css";

export const Header = () => {
  return (
    <header className="main-header">
      <Logo />
      <div className="header-actions">
        <a
          href="https://github.com/SantiagoBobrik/markvim"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          aria-label="GitHub repository"
        >
          <GitHub width={20} height={20} />
        </a>
        <DropDown />
      </div>
    </header>
  );
};
