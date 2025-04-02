import React from "react";
import whiteLogo from "../pages/img/white-logo.svg";


export default function HeroSection() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 uppercase tracking-wide">
            DISCOVER QUOTES<br />FROM PHILOSOPHY<br />INFLUENTIAL FIGURES
          </h2>
          <p className="text-lg text-gray-300">Unlock Wisdom and Inspiration</p>
        </div>
        <img
  src={whiteLogo}
  alt="Philosopher Logo"
  className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] object-contain"
/>

      
      </div>
    </section>
  );
}
