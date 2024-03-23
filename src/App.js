import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import HappeningNow from "./components/HappeningNow/HappeningNow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <HappeningNow /> */}
      <Footer />
    </>
  );
}

export default App;
