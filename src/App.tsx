import { Footer, Header, Rps } from "./components";
import { useRps } from "./hooks/useRps";
import "./App.scss";

function App() {
  const { userPick, setUserPick } = useRps();

  return (
    <main className="app">
      <Header />
      <Rps setUserPick={setUserPick} hasUserPicked={!!userPick} />
      <Footer />
    </main>
  );
}

export default App;
