import React from "react";
import { FaQuoteLeft, FaFeatherAlt, FaRegLightbulb } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed font-serif">
        <p className="flex items-start gap-3">
          <FaQuoteLeft className="mt-1 text-black text-xl shrink-0" />
          This website was created from a desire to share timeless wisdom — words that inspire, encourage reflection, and offer new perspectives.
        </p>
        <p className="flex items-start gap-3">
          <FaFeatherAlt className="mt-1 text-black text-xl shrink-0" />
          At the heart of this journey is Socrates, one of history’s greatest philosophers, whose famous quote, “I know that I know nothing,” captures the essence of humility and lifelong learning.
        </p>
        <p className="flex items-start gap-3">
          <FaRegLightbulb className="mt-1 text-black text-xl shrink-0" />
          This platform brings together the voices of influential thinkers, past and present, offering a space where their insights can spark inspiration and guide us forward.
        </p>
      </div>
    </section>
  );
}
