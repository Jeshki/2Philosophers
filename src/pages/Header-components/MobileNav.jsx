import React from "react";
import { Link } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function MobileNav({ isOpen, setIsOpen, darkMode, setDarkMode }) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul
        className="flex flex-col gap-4 px-6 pb-6 pt-2 text-lg font-medium uppercase tracking-wide"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        <li>
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">
            Philosophers
          </Link>
        </li>
        <li>
          <Link to="/biographies" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">
            Biographies
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">
            Contact
          </Link>
        </li>
        <li className="mt-2">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setIsOpen(false);
            }}
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
    </div>
  );
}
