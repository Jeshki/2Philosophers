import React from "react";

export default function MobileToggle({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden text-2xl"
    >
      {isOpen ? "❌" : "☰"}
    </button>
  );
}
