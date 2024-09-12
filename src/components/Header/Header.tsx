import { SVG } from "../../constants/images";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header" data-testid="header">
      <img className="header__logo" src={SVG.LOGO} alt="Logo" />
      <div className="header__score">
        <p className="header__score__title">score</p>
        <p className="header__score__count">12</p>
      </div>
    </header>
  );
}
