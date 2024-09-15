import { Footer, Header, Rps, RpsButton } from "./components";
import { useRps } from "./hooks/useRps";
import "./App.scss";

function App() {
  const { userPick, setUserPick } = useRps();

  return (
    <main className="app">
      <Header />
      <Rps setUserPick={setUserPick} hasUserPicked={!!userPick} />

      <section data-testid="rps-result">
        <RpsButton type="ROCK" disabled />
      </section>

      <Footer />
    </main>
  );
}

export default App;
