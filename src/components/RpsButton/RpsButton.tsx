import classnames from "classnames";
import { SVG } from "../../constants/images";
import "./RpsButton.scss";

export type RpsType = "ROCK" | "PAPER" | "SCISSORS";

type RpsButtonProps = {
  type: RpsType;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function RpsButton({
  type,
  onClick,
  disabled,
  className,
  ariaLabel = "rps-button",
}: RpsButtonProps) {
  const image = SVG[type];

  return (
    <button
      className={classnames(
        "rps-container",
        {
          "rps-container--red": type === "ROCK",
          "rps-container--blue": type === "PAPER",
          "rps-container--yellow": type === "SCISSORS",
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <div className="rps-button">
        <img src={image} alt={type} />
      </div>
    </button>
  );
}
