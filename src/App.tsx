import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Food from "./components/Food";
import About from "./components/About";
import Footer from "./components/Footer";
import Deseases from "./components/diseases";
import Workouts from "./components/Wokouts";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Presentation />
        </div>
        <Deseases />
        <Workouts />
        <Food />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
