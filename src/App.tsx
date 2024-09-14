import { Footer, Header, Rps } from "./components";
import { useRps } from "./hooks/useRps";
import "./App.scss";

function App() {
  const { setUserPick } = useRps();

  return (
    <main className="app">
      <Header />
      <Rps setUserPick={setUserPick} />
      <Footer />
    </main>
  );
}

export default App;
