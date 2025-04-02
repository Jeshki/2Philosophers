import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhilosopherCard from "./PhilosopherCard";
import BioModal from "./BioModal";
import HeroSection from "./pages/HeroSection";
import IntroSection from "./pages/IntroSection";
import { philosophers } from "./data";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Biographies from "./pages/Biographies";
import PhilosopherPage from "./pages/PhilosopherPage";
import Footer from "./pages/Footer";
import Header from "./pages/Header-components/Header";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <main className="p-0 space-y-20">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <IntroSection />
                    <section id="philosophers" className="max-w-7xl mx-auto px-6">
                      <h2 className="text-3xl font-bold mb-6 text-center uppercase font-serif">Philosophers</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {philosophers.map((p) => (
                          <PhilosopherCard key={p.name} philosopher={p} onClick={setSelected} />
                        ))}
                      </div>
                    </section>
                  </>
                }
              />
              <Route path="/biographies" element={<Biographies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/philosopher/:name" element={<PhilosopherPage />} />
            </Routes>
          </main>

          {selected && (
            <BioModal philosopher={selected} onClose={() => setSelected(null)} />
          )}

          <Footer />
        </div>
      </div>
    </Router>
  );
}
