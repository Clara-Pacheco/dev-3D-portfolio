import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <main className="bg-slate-300/20">
        <Router>
          <Navbar />
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
