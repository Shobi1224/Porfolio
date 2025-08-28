import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import AdminPanel from "./admin/AdminPanel.jsx"; // 👈 new page

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Portfolio main page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
