import classnames from "classnames";
import { SVG } from "../../constants/images";
import "./RpsButton.scss";

type RpsButtonProps = {
  type: "ROCK" | "PAPER" | "SCISSORS";
  onClick: () => void;
  disabled?: boolean;
};

export default function RpsButton({ type, onClick, disabled }: RpsButtonProps) {
  const image = SVG[type].toString();

  return (
    <button
      className={classnames("rps-container", {
        "rps-container--red": type === "ROCK",
        "rps-container--blue": type === "PAPER",
        "rps-container--yellow": type === "SCISSORS",
      })}
      onClick={onClick}
      disabled={disabled}
      aria-label="rps-button"
    >
      <div className="rps-button">
        <img src={image} alt={type} />
      </div>
    </button>
  );
}
