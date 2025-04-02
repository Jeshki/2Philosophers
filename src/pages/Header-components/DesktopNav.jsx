import React from "react";
import { Link } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function DesktopNav({ darkMode, setDarkMode }) {
  return (
    <ul
      className="hidden md:flex gap-6 items-center text-lg font-medium uppercase tracking-wide"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <li><Link to="/" className="hover:text-indigo-600 transition-colors">Philosophers</Link></li>
      <li><Link to="/biographies" className="hover:text-indigo-600 transition-colors">Biographies</Link></li>
      <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About Me</Link></li>
      <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
      <li>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 bg-zinc-300 dark:bg-zinc-700"
          aria-label="Toggle dark mode"
        >
          <div
            className={`transform transition-transform duration-300 ${
              darkMode ? "translate-x-6" : "translate-x-0"
            }`}
          >
            {darkMode ? (
              <BsSunFill className="text-yellow-400" />
            ) : (
              <BsMoonStarsFill className="text-indigo-800" />
            )}
          </div>
        </button>
      </li>
    </ul>
  );
}
