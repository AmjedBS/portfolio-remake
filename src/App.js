import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import About from "./pages/About/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <About />
      </Router>
    </div>
  );
}

export default App;
