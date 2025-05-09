import { BrowserRouter } from "react-router-dom";
import Presentation from "./components/Presentation";
import Food from "./components/Food";
import About from "./components/About";
import Workouts from "./components/Wokouts";
import Diseases from "./components/Diseases";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Presentation />
        </div>
        <Diseases />
        <Workouts />
        <Food />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
