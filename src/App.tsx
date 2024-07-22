import RpsButton from "./components/RpsButton/RpsButton";
import { SVG } from "./constants/images";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <img className="app__header__logo" src={SVG.LOGO} alt="Logo" />
        <div className="app__header__score">
          <p className="app__header__score__title">score</p>
          <p className="app__header__score__count">12</p>
        </div>
      </header>
      <div className="rps">
        <img
          className="rps__triangle"
          src={SVG.BG_TRIANGLE}
          alt="background triangle"
        />
        <RpsButton
          className="rps__button rps__button--rock"
          type="ROCK"
          onClick={() => console.log("hi")}
        />
        <RpsButton
          className="rps__button rps__button--paper"
          type="PAPER"
          onClick={() => console.log("hi")}
        />
        <RpsButton
          className="rps__button rps__button--scissors"
          type="SCISSORS"
          onClick={() => console.log("hi")}
        />
      </div>
      <footer className="app__footer">
        <button
          className="app__footer__rules"
          onClick={() => console.log("rules")}
        >
          rules
        </button>
      </footer>
    </main>
  );
}

export default App;
