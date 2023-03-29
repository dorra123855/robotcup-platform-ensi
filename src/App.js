import "./App.css";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "../src/components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
