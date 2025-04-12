import React from "react";
import { Link } from "react-router-dom";

export default function PhilosopherCard({ philosopher, onClick }) {
  // Apsauga, jei philosopher objektas neperduotas
  if (!philosopher) return null;

  return (
    <div
      className="bg-gray-100 dark:bg-stone-950 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 group border border-gray-300 dark:border-stone-700 flex flex-col" // Pridėtas flex flex-col
      // tabIndex="0" // Galima palikti, jei norima, kad visa kortelė būtų fokusuojama
    >
      {/* Image container */}
      <div className="w-full aspect-[4/3] bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
        <img
          src={philosopher.img}
          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          alt={philosopher.name}
          loading="lazy"
        />
      </div>

      {/* Content container - flex-grow leidžia užimti likusią vietą */}
      <div className="px-5 pb-5 pt-3 text-center flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 truncate">
          {philosopher.name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{philosopher.years}</p>

        {/* Quote - flex-grow leidžia citatai užimti vietą prieš mygtukus */}
        <p className="mt-2 italic text-sm text-gray-600 dark:text-gray-300 text-left relative flex-grow">
          “{philosopher.quote}”
        </p>

        {/* Button container - mt-auto stumia mygtukus į apačią */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 mt-auto">
          <button
            onClick={() => onClick(philosopher)} // Kviečiama modalo atidarymo funkcija
            className="flex-1 text-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white transition-colors duration-200 text-sm font-medium"
            aria-label={`About ${philosopher.name}`} // Geresnis aria-label
          >
            About
          </button>
          {/* Atnaujintas Link */}
          <Link
            to={`/philosopher/${philosopher.id}`} // Naudojamas ID nuorodoje
            className="flex-1 text-center bg-white text-black border border-black dark:bg-black dark:text-white dark:border-white px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-200 text-sm font-medium"
            aria-label={`Biography of ${philosopher.name}`} // Geresnis aria-label
          >
            Bio
          </Link>
        </div>
      </div>
    </div>
  );
}