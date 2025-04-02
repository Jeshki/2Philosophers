import { useParams } from "react-router-dom";
import { philosophers } from "../data";

export default function PhilosopherPage() {
  const { name } = useParams();
  const philosopher = philosophers.find(p => p.name.toLowerCase() === name.toLowerCase());

  if (!philosopher) return <div className="max-w-3xl mx-auto">Philosopher not found.</div>;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-4">{philosopher.name}</h2>
      <p className="text-lg text-gray-500 mb-4">{philosopher.years}</p>

      <div className="w-full flex justify-center mb-6">
        <img
          src={philosopher.img}
          alt={philosopher.name}
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[512px] lg:h-[512px] object-cover rounded-xl shadow-lg"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>

      <p className="text-xl leading-relaxed">{philosopher.bio}</p>
    </section>
  );
}
