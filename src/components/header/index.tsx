import { DropDown } from "../dropdown";
import { Logo } from "./Logo";
import "./index.css";

export const Header = () => {
  return (
    <header className="main-header">
      <Logo />
      <DropDown />
    </header>
  );
};
