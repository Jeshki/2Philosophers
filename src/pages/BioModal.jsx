import React from "react";

export default function BioModal({ philosopher, onClose }) {
  // Apsauga, jei philosopher objektas būtų null arba undefined
  if (!philosopher) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm" // Pridėtas backdrop blur
      onClick={onClose} // Uždaroma paspaudus fone
    >
      {/* Stop propagation, kad paspaudus ant modal'o turinio jis neužsidarytų */}
      <div
        className="bg-white dark:bg-very-dark-gray text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] p-6 md:p-8 relative overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700" // Pridėtas scrollbar track dark mode
        onClick={(e) => e.stopPropagation()}
      >
        {/* Uždarymo mygtukas */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 text-3xl leading-none transition-colors" // Padidintas, pakoreguotas leading
          aria-label="Close modal" // Pridėta aria-label
        >
          &times; {/* Naudojamas times simbolis */}
        </button>

        {/* Vardas ir metai */}
        <h3 className="text-3xl font-bold mb-1 text-gray-800 dark:text-gray-50 pr-8"> {/* Pridėta padding dešinėje dėl mygtuko */}
          {philosopher.name}
        </h3>
        {philosopher.years && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {philosopher.years}
          </p>
        )}

        {/* Pilna biografija arba aprašymas */}
        <div className="prose prose-lg dark:prose-invert max-w-none mt-4 text-base leading-relaxed">
          {/* PATAISYTA: Tikrina abu laukus - bio ir about */}
          {philosopher.bio || philosopher.about || "No biography available."}
        </div>
      </div>
    </div>
  );
}