import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import HappeningNow from "./components/HappeningNow/HappeningNow";

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <HappeningNow />
    </>
  );
}

export default App;
