"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Calendar, Clock, Film, Tv, Frown, Plus, Check } from "lucide-react";
import { FilterState } from "@/app/ara/page";

// Kapsamlı Mock Data (Test için)
const MOCK_RESULTS = [
  { id: "dune-2", title: "Dune: Part Two", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", rating: 8.8, year: 2024, type: "movie", platform: "netflix", genres: ["Bilim Kurgu", "Aksiyon"] },
  { id: "the-last-of-us", title: "The Last of Us", poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg", rating: 9.2, year: 2023, type: "series", platform: "blutv", genres: ["Dram", "Korku"] },
  { id: "shogun", title: "Shōgun", poster: "https://image.tmdb.org/t/p/w500/7O4iVfM8jY3f7w7w7w7w7w7w7w.jpg", rating: 9.0, year: 2024, type: "series", platform: "disney", genres: ["Tarih", "Dram"] },
  { id: "oppenheimer", title: "Oppenheimer", poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", rating: 8.5, year: 2023, type: "movie", platform: "appletv", genres: ["Biyografi", "Dram"] },
  { id: "fallout", title: "Fallout", poster: "https://image.tmdb.org/t/p/w500/8cOa83N7576f7f2Z7w8w27776.jpg", rating: 8.5, year: 2024, type: "series", platform: "prime", genres: ["Bilim Kurgu", "Aksiyon"] },
  { id: "poor-things", title: "Poor Things", poster: "https://image.tmdb.org/t/p/w500/kCGlIMVn6MjcveAc3oUXqF60UCAL.jpg", rating: 8.0, year: 2023, type: "movie", platform: "disney", genres: ["Komedi", "Fantastik"] },
  { id: "the-bear", title: "The Bear", poster: "https://image.tmdb.org/t/p/w500/xF8P3O9vY1p6n6qJ6a4z9l5.jpg", rating: 8.6, year: 2022, type: "series", platform: "disney", genres: ["Dram", "Komedi"] },
  { id: "succession", title: "Succession", poster: "https://image.tmdb.org/t/p/w500/7bWmKlbSwWj698s998789.jpg", rating: 8.9, year: 2018, type: "series", platform: "blutv", genres: ["Dram"] },
];

export default function ResultsGrid({ filters }: { filters: FilterState }) {
  
  // Client-Side Filtering Logic
  const filteredResults = MOCK_RESULTS.filter(item => {
    // 1. Text Search
    if (filters.query && !item.title.toLowerCase().includes(filters.query.toLowerCase())) return false;
    
    // 2. Type Filter
    if (filters.types.length > 0 && !filters.types.includes(item.type)) return false;

    // 3. Platform Filter
    if (filters.platforms.length > 0 && !filters.platforms.includes(item.platform)) return false;

    // 4. Genre Filter
    if (filters.genres.length > 0 && !item.genres.some(g => filters.genres.includes(g))) return false;

    // 5. Year Filter
    if (item.year < filters.yearRange[0] || item.year > filters.yearRange[1]) return false;

    // 6. Score Filter
    if (item.rating < filters.imdbRange[0]) return false;

    return true;
  });

  // Sorting Logic
  const sortedResults = [...filteredResults].sort((a, b) => {
    if (filters.sortBy === "vote_average_desc") return b.rating - a.rating;
    if (filters.sortBy === "release_date_desc") return b.year - a.year;
    return 0; // Default
  });

  if (sortedResults.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center min-h-[50vh]">
            <div className="w-24 h-24 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Frown className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Sonuç Bulunamadı</h3>
            <p className="text-slate-500 dark:text-gray-400 max-w-md">
                Aradığınız kriterlere uygun içerik bulamadık. Filtreleri biraz gevşetmeyi deneyin.
            </p>
        </div>
    );
  }

  return (
    <div>
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
            <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Sonuçlar</h2>
                <span className="text-sm font-medium text-slate-500 dark:text-gray-400">
                    {sortedResults.length} içerik bulundu
                </span>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedResults.map((item) => (
                <Link 
                    key={item.id} 
                    href={`/${item.type === 'series' ? 'dizi' : 'film'}/${item.id}`}
                    className="group flex flex-col gap-3"
                >
                    {/* Poster */}
                    <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm group-hover:shadow-2xl group-hover:shadow-cinesos-yellow/10 transition-all duration-300 group-hover:-translate-y-2">
                        <Image 
                            src={item.poster} 
                            alt={item.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Platform Badge */}
                        <div className="absolute top-2 left-2">
                            <span className="text-[10px] font-black uppercase bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-md border border-white/10 shadow-sm">
                                {item.platform}
                            </span>
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute top-2 right-2 bg-cinesos-yellow text-black px-1.5 py-0.5 rounded-lg text-xs font-black shadow-lg flex items-center gap-0.5">
                            <Star className="w-3 h-3 fill-current" />
                            {item.rating}
                        </div>

                        {/* Quick Action (Watchlist) */}
                        <button className="absolute bottom-2 right-2 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-cinesos-yellow hover:text-black transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Bilgi */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white leading-tight truncate group-hover:text-cinesos-yellow transition-colors text-base mb-1">
                            {item.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400 font-medium">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.year}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600"></span>
                            <span className="flex items-center gap-1 capitalize">
                                {item.type === 'movie' ? <Film className="w-3 h-3" /> : <Tv className="w-3 h-3" />}
                                {item.type === 'movie' ? 'Film' : 'Dizi'}
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
}