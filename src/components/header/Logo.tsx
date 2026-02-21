import { LogoIcon } from "../../assets/LogoIcon";

export const Logo = () => {
  return (
    <div className="logo-container" aria-label="Markvim">
      <LogoIcon />
      <span className="logo-text">
        <span className="logo-mark">mark</span>
        <span className="logo-vim">vim</span>
      </span>
    </div>
  );
};
