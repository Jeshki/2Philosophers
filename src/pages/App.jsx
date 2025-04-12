import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BioModal from "./BioModal";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Biographies from "./pages/Biographies";
import PhilosopherPage from "./pages/PhilosopherPage";
import Footer from "./pages/Footer";
import Header from "./pages/Header-components/Header";
import { philosophers } from "./data";
import { IdeologicalGroups } from "./enums";

const getStartYear = (yearsString) => {
  if (!yearsString || typeof yearsString !== 'string') return Infinity;

  const str = yearsString.toLowerCase().trim();
  if (str.includes('unknown')) return Infinity;
  if (str.includes('bc') || str.includes('bce')) {
    const matches = str.match(/(\d+)/g);
    return matches ? -parseInt(matches[0], 10) : -9999;
  }
  const centuryMatch = str.match(/(\d+)(st|nd|rd|th)\s+century(\s+bc)?/);
  if (centuryMatch) {
    const century = parseInt(centuryMatch[1], 10);
    const isBC = !!centuryMatch[3];
    return isBC ? -(century * 100) : (century - 1) * 100 + 1;
  }
  const matches = str.match(/(\d{3,4})/g);
  return matches ? parseInt(matches[0], 10) : Infinity;
};

const getEndYear = (yearsString) => {
  if (!yearsString || typeof yearsString !== 'string') return -Infinity;

  const str = yearsString.toLowerCase().trim();
  if (str.includes('unknown')) return -Infinity;
  if (str.includes('bc') || str.includes('bce')) {
    const matches = str.match(/(\d+)/g);
    return matches && matches.length > 1 ? -parseInt(matches[1], 10) : -9999;
  }
  const centuryMatch = str.match(/(\d+)(st|nd|rd|th)\s+century(\s+bc)?/);
  if (centuryMatch) {
    const century = parseInt(centuryMatch[1], 10);
    const isBC = !!centuryMatch[3];
    return isBC ? -((century - 1) * 100 + 1) : century * 100;
  }
  const matches = str.match(/(\d{3,4})/g);
  return matches && matches.length > 1 ? parseInt(matches[1], 10) : matches ? parseInt(matches[0], 10) : -Infinity;
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const [selectedPhilosopher, setSelectedPhilosopher] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const processedPhilosophers = useMemo(() => {
    return philosophers.map(p => ({
      ...p,
      startYear: getStartYear(p.years),
      endYear: getEndYear(p.years)
    }));
  }, []);

  const filteredAndSortedPhilosophers = useMemo(() => {
    let result = [...processedPhilosophers];

    if (selectedGroup) {
      const groupIdeologies = IdeologicalGroups[selectedGroup];
      if (groupIdeologies && Array.isArray(groupIdeologies)) {
        result = result.filter(p => p.IdeologicalOrder && groupIdeologies.includes(p.IdeologicalOrder));
      }
    }

    if (selectedRegion) {
      result = result.filter(p => p.geographicalOrder === selectedRegion);
    }

    if (sortBy === 'chronological') {
      result.sort((a, b) => a.startYear - b.startYear);
    } else if (sortBy === 'youngest_first') {
      result.sort((a, b) => b.startYear - a.startYear);
    } else if (sortBy === 'newest_by_death') {
      result.sort((a, b) => b.endYear - a.endYear);
    } else {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [processedPhilosophers, selectedGroup, selectedRegion, sortBy]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={<HomePage
              filteredPhilosophers={filteredAndSortedPhilosophers}
              handleCardClick={setSelectedPhilosopher}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/biographies" element={<Biographies />} />
          <Route path="/philosopher/:id" element={<PhilosopherPage />} />
        </Routes>
        {selectedPhilosopher && (
          <BioModal philosopher={selectedPhilosopher} onClose={() => setSelectedPhilosopher(null)} />
        )}
        <Footer />
      </div>
    </Router>
  );
}
