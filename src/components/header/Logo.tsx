import { ArrowDownSVG } from "../../assets/ArrowDown";

export const Logo = () => {
  return (
    <div className="logo-container" role="button">
      <span role="img"># </span>
      <span role="img">
        M
        <ArrowDownSVG />
      </span>
      <span role="img">Vim</span>
    </div>
  );
};
