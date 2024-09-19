import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
