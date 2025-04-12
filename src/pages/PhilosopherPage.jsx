import React from 'react'; // Pridėtas React importas
import { useParams } from "react-router-dom";
import { philosophers } from "../data"; // Importuojame filosofų duomenis

export default function PhilosopherPage() {
  const { id } = useParams(); // Gauname :id parametrą iš URL

  // Ieškome filosofo pagal ID.
  // useParams grąžina string'ą, todėl konvertuojame id į skaičių palyginimui.
  // Naudojame '===' griežtam palyginimui, bet prieš tai konvertuojame gautą id.
  const philosopher = philosophers.find(p => p.id === parseInt(id, 10));

  // Jei filosofas nerastas pagal ID, rodomas pranešimas
  if (!philosopher) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center text-xl text-gray-600 dark:text-gray-400">
        Philosopher not found.
      </div>
    );
  }

  // Jei filosofas rastas, atvaizduojame jo informaciją
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Vardas ir gyvenimo metai */}
      <h2 className="text-4xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">{philosopher.name}</h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 text-center">{philosopher.years}</p>

      {/* Paveikslėlis */}
      <div className="w-full flex justify-center mb-8">
        <img
          src={philosopher.img} // Kelias iki paveikslėlio
          alt={philosopher.name} // Alternatyvus tekstas
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[512px] lg:h-[512px] object-cover rounded-xl shadow-lg border border-gray-200 dark:border-gray-700" // Stiliai
          loading="lazy" // Įkėlimo optimizavimas
        />
      </div>

      {/* Biografija arba aprašymas */}
      <div className="text-xl leading-relaxed text-gray-800 dark:text-gray-300 space-y-4">
        {/* Naudojame turimą tekstą (bio arba about) */}
        {/* Galima formatuoti kaip paragrafus, jei tekstas ilgesnis */}
        {(philosopher.bio || philosopher.about || "No detailed biography available.").split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}