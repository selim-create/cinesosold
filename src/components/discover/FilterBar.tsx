"use client";

import { SlidersHorizontal } from "lucide-react";

const FILTERS = ["Tümü", "Filmler", "Diziler", "Netflix", "Prime", "Disney+", "BluTV", "2024", "Oscar Adayları", "IMDb 8+"];

export default function FilterBar() {
  return (
    <div className="sticky top-20 z-30 py-4 bg-cinesos-dark/80 backdrop-blur-xl border-b border-white/5 mb-8">
      <div className="container mx-auto px-4 flex items-center gap-4 overflow-x-auto no-scrollbar">
        <button className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-white/20 transition border border-white/10 flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filtrele</span>
        </button>

        <div className="w-px h-6 bg-white/10 flex-shrink-0" />

        {FILTERS.map((filter, i) => (
            <button 
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-medium transition whitespace-nowrap border ${
                    i === 0 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
            >
                {filter}
            </button>
        ))}
      </div>
    </div>
  );
}