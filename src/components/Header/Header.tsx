import { SVG } from "../../constants/images";
import "./Header.scss";

type HeaderProps = {
  score: number;
};

export default function Header({ score }: HeaderProps) {
  return (
    <header className="header" data-testid="header">
      <img className="header__logo" src={SVG.LOGO} alt="Logo" />
      <div className="header__score">
        <p className="header__score__title">score</p>
        <p className="header__score__count">{score}</p>
      </div>
    </header>
  );
}
