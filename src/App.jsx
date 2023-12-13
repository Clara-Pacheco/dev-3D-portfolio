import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <>
      <main className="bg-slate-300/20">
        <Router>
          Navbar
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};
