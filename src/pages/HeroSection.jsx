// src/pages/HeroSection.jsx
import React from "react";
import whiteLogo from "./img/white-logo.svg"; // Ensure path is correct relative to HeroSection.jsx

export default function HeroSection() {
  return (
    // Using very-dark-gray instead of zinc-950
    <section className="bg-very-dark-gray text-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"> {/* Adjusted max-width and gap */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 uppercase tracking-wide font-serif"> {/* Changed to h1, added font-serif */}
            Discover Quotes<br />From Philosophy's<br />Influential Figures
          </h1>
          <p className="text-lg text-gray-300">Unlock Wisdom and Inspiration</p>
        </div>
        {/* Ensure the image path is correct */}
        <img
          src={whiteLogo}
          alt="2Philosophers Logo"
          className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-contain" // Slightly smaller logo
          loading="lazy" // Added lazy loading
        />
      </div>
    </section>
  );
}