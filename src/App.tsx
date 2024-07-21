import RpsButton from "./components/RpsButton/RpsButton";
import "./App.scss";

function App() {
  return (
    <main className="app">
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
    </main>
  );
}

export default App;
