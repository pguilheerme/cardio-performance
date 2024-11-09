import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Presentation />
        </div>
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
