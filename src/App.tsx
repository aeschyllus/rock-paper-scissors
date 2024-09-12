import { useState } from "react";
import { Footer, Header, RpsButton } from "./components";
import { SVG } from "./constants/images";
import "./App.scss";

function App() {
  const [userPick, setUserPick] = useState("");

  return (
    <main className="app">
      <Header />
      <div className="rps">
        <img
          className="rps__triangle"
          src={SVG.BG_TRIANGLE}
          alt="background triangle"
        />
        <RpsButton
          className="rps__button rps__button--rock"
          type="ROCK"
          onClick={() => setUserPick("ROCK")}
        />
        <RpsButton
          className="rps__button rps__button--paper"
          type="PAPER"
          onClick={() => setUserPick("PAPER")}
        />
        <RpsButton
          className="rps__button rps__button--scissors"
          type="SCISSORS"
          onClick={() => setUserPick("SCISSORS")}
        />
      </div>
      <Footer />
    </main>
  );
}

export default App;
