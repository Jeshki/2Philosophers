import React from "react";

export default function BioModal({ philosopher, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl max-w-2xl w-full max-h-screen p-6 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        {/* Name & Years */}
        <h3 className="text-3xl font-bold mb-1">{philosopher.name}</h3>
        {philosopher.years && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {philosopher.years}
          </p>
        )}

        {/* Full Bio */}
        <div className="text-base leading-relaxed whitespace-pre-line">
          {philosopher.bio}
        </div>
      </div>
    </div>
  );
}
