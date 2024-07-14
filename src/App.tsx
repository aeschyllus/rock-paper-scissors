import RpsButton from "./components/RpsButton/RpsButton";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <RpsButton type="ROCK" onClick={() => console.log("hi")} />
      <RpsButton type="PAPER" onClick={() => console.log("hi")} />
      <RpsButton type="SCISSORS" onClick={() => console.log("hi")} />
    </div>
  );
}

export default App;
