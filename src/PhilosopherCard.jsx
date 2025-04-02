import React from "react";
import { Link } from "react-router-dom";

export default function PhilosopherCard({ philosopher, onClick }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition hover:scale-105">
      <div className="w-full aspect-square bg-white flex items-center justify-center">
        <img
          src={philosopher.img}
          className="w-full h-full object-contain"
          alt={philosopher.name}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {philosopher.name} {philosopher.years}
        </h3>
        <p className="mt-2 italic text-sm">“{philosopher.quote}”</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => onClick(philosopher)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            About
          </button>
          <Link
            to={`/philosopher/${philosopher.name}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Bio
          </Link>
        </div>
      </div>
    </div>
  );
}
