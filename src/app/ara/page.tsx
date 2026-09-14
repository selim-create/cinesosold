"use client";

import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X, ArrowUpCircle } from "lucide-react";
import SearchFilters from "@/components/search/SearchFilters";
import ResultsGrid from "@/components/search/ResultsGrid";

// Kapsamlı Filtre Tipi
export interface FilterState {
  query: string;
  sortBy: "popularity_desc" | "release_date_desc" | "vote_average_desc" | "vote_count_desc";
  // İçerik Tipi
  types: string[]; // movie, tv, tv_movie, miniseries
  // Görünürlük
  visibility: "all" | "watchlist" | "not_watchlist";
  // Temel Filtreler
  genres: string[];
  platforms: string[];
  countries: string[];
  languages: string[];
  // Aralık Filtreleri
  yearRange: [number, number];
  imdbRange: [number, number];
  cinesosRange: [number, number];
  // Detaylı Filtreler
  tags: string[];
  companies: string[];
  networks: string[];
  // Kişiler (ID veya İsim olarak tutulabilir)
  cast: string[];
  crew: string[]; // Director/Writer karışık
  // Ödüller
  awards: string[];
}

const INITIAL_FILTERS: FilterState = {
  query: "",
  sortBy: "popularity_desc",
  types: [],
  visibility: "all",
  genres: [],
  platforms: [],
  countries: [],
  languages: [],
  yearRange: [1970, 2026],
  imdbRange: [0, 10],
  cinesosRange: [0, 100],
  tags: [],
  companies: [],
  networks: [],
  cast: [],
  crew: [],
  awards: [],
};

export default function SearchPage() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll dinleyici
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => setFilters(INITIAL_FILTERS);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 font-sans pt-20">
      
      {/* 1. ÜST ARAMA BAR (STICKY) - Z-Index artırıldı (z-40) */}
      <div className={`sticky top-20 z-40 bg-white/90 dark:bg-cinesos-dark/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 transition-all duration-300 ${isScrolled ? "py-3 shadow-md" : "py-6"}`}>
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex gap-4 items-center">
                {/* Arama Inputu */}
                <div className="relative flex-1 group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-cinesos-yellow transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-4 py-3.5 bg-gray-100 dark:bg-white/5 border-transparent focus:bg-white dark:focus:bg-black/40 border border-gray-200 dark:border-white/10 rounded-2xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cinesos-yellow/50 focus:border-cinesos-yellow transition-all text-slate-900 dark:text-white"
                        placeholder="Film, dizi, oyuncu, yönetmen veya liste ara..."
                        value={filters.query}
                        onChange={(e) => updateFilter("query", e.target.value)}
                    />
                    {filters.query && (
                        <button 
                            onClick={() => updateFilter("query", "")}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    )}
                </div>

                {/* Mobil Filtre Butonu */}
                <button 
                    onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                    className="lg:hidden p-3.5 bg-cinesos-yellow text-black rounded-xl hover:bg-yellow-400 transition shadow-lg shadow-cinesos-yellow/20 relative"
                >
                    <SlidersHorizontal className="h-6 w-6" />
                    {/* Aktif filtre sayısı badge'i eklenebilir */}
                </button>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* 2. SIDEBAR FILTERS (GELİŞMİŞ) - Z-Index Fix: lg:z-10 */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 lg:z-10 w-80 bg-white dark:bg-[#0B1121] lg:bg-transparent lg:dark:bg-transparent transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-72 lg:flex-shrink-0 lg:block border-r lg:border-none border-gray-200 dark:border-white/10 overflow-y-auto lg:overflow-visible
                ${isMobileFilterOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
            `}>
                <div className="p-5 lg:p-0 lg:sticky lg:top-44 h-full overflow-y-auto lg:overflow-visible custom-scrollbar pb-20 lg:pb-0">
                    <div className="flex items-center justify-between lg:hidden mb-6">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Filtrele & Sırala</h2>
                        <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                            <X className="w-6 h-6 dark:text-white" />
                        </button>
                    </div>

                    <SearchFilters 
                        filters={filters} 
                        updateFilter={updateFilter} 
                        resetFilters={resetFilters} 
                    />
                </div>
            </aside>

            {/* Overlay for Mobile Sidebar */}
            {isMobileFilterOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMobileFilterOpen(false)}
                />
            )}

            {/* 3. RESULTS GRID - Relative Z-0 to ensure stacking context */}
            <main className="flex-1 min-w-0 relative z-0">
                <ResultsGrid filters={filters} />
            </main>

        </div>
      </div>
      
      {/* Scroll to Top (Uzun listeler için) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-cinesos-yellow text-black shadow-xl hover:scale-110 transition-transform z-40 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <ArrowUpCircle className="w-6 h-6" />
      </button>

    </div>
  );
}