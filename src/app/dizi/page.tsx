"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Star, Calendar, Layers, Tv } from "lucide-react";

// Mock Data: Diziler
const SERIES_DATA = [
  {
    id: "the-last-of-us",
    title: "The Last of Us",
    originalTitle: "The Last of Us",
    poster: "https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg",
    rating: 9.2,
    year: 2023,
    seasons: 2,
    genre: "Dram",
    category: "Popüler"
  },
  {
    id: "shogun",
    title: "Shōgun",
    originalTitle: "Shōgun",
    poster: "https://image.tmdb.org/t/p/w500/7O4iVfM8jY3f7w7w7w7w7w7w7w.jpg",
    rating: 9.0,
    year: 2024,
    seasons: 1,
    genre: "Tarih",
    category: "Gündem"
  },
  {
    id: "fallout",
    title: "Fallout",
    originalTitle: "Fallout",
    poster: "https://image.tmdb.org/t/p/w500/8cOa83N7576f7f2Z7w8w27776.jpg",
    rating: 8.5,
    year: 2024,
    seasons: 1,
    genre: "Bilim Kurgu",
    category: "Popüler"
  },
  {
    id: "the-bear",
    title: "The Bear",
    originalTitle: "The Bear",
    poster: "https://image.tmdb.org/t/p/w500/xF8P3O9vY1p6n6qJ6a4z9l5.jpg",
    rating: 8.6,
    year: 2022,
    seasons: 3,
    genre: "Dram",
    category: "Ödüllü"
  },
  {
    id: "succession",
    title: "Succession",
    originalTitle: "Succession",
    poster: "https://image.tmdb.org/t/p/w500/7bWmKlbSwWj698s998789.jpg",
    rating: 8.9,
    year: 2018,
    seasons: 4,
    genre: "Dram",
    category: "Final Yapan"
  },
  {
    id: "house-of-the-dragon",
    title: "House of the Dragon",
    originalTitle: "House of the Dragon",
    poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    rating: 8.4,
    year: 2022,
    seasons: 2,
    genre: "Fantastik",
    category: "Popüler"
  },
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    originalTitle: "Breaking Bad",
    poster: "https://image.tmdb.org/t/p/w500/3xnWaGQjayE2Xat6FV5fCpt3pEt.jpg",
    rating: 9.5,
    year: 2008,
    seasons: 5,
    genre: "Suç",
    category: "Top 250"
  },
  {
    id: "stranger-things",
    title: "Stranger Things",
    originalTitle: "Stranger Things",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    rating: 8.7,
    year: 2016,
    seasons: 5,
    genre: "Bilim Kurgu",
    category: "Popüler"
  },
  {
    id: "squid-game",
    title: "Squid Game",
    originalTitle: "Squid Game",
    poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    rating: 8.0,
    year: 2021,
    seasons: 2,
    genre: "Gerilim",
    category: "Yeni Sezon"
  },
  {
    id: "the-penguin",
    title: "The Penguin",
    originalTitle: "The Penguin",
    poster: "https://image.tmdb.org/t/p/w500/k7eYUIT5c7w7w7w7w7w7w7w.jpg",
    rating: 8.8,
    year: 2024,
    seasons: 1,
    genre: "Suç",
    category: "Gündem"
  }
];

const CATEGORIES = ["Tümü", "Popüler", "Gündem", "Yeni Sezon", "Ödüllü", "Final Yapan", "Top 250"];

export default function SeriesPage() {
  const [activeTab, setActiveTab] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtreleme Mantığı
  const filteredSeries = SERIES_DATA.filter(serie => {
    const matchesTab = activeTab === "Tümü" || serie.category === activeTab;
    const matchesSearch = serie.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          serie.originalTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getScoreColor = (score: number) => {
    if (score >= 8.0) return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    if (score >= 6.0) return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
    return "text-red-500 bg-red-500/10 border-red-500/20";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight flex items-center gap-3">
                    <Tv className="w-10 h-10 md:w-12 md:h-12 text-cinesos-yellow" />
                    Diziler
                </h1>
                <p className="text-lg text-slate-600 dark:text-gray-300 max-w-xl">
                    Maraton yapmalık seriler, mini diziler ve heyecanla beklenen yeni sezonlar.
                </p>
            </div>
            
            {/* Arama Kutusu */}
            <div className="relative w-full md:w-80 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-cinesos-yellow transition-colors" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cinesos-yellow/50 focus:border-cinesos-yellow transition-all text-slate-900 dark:text-white"
                    placeholder="Dizi ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>

        {/* Filtreler */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 pb-2">
            {CATEGORIES.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
                        activeTab === category 
                        ? "bg-slate-900 dark:bg-white text-white dark:text-black border-slate-900 dark:border-white shadow-md" 
                        : "bg-transparent border-gray-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-cinesos-yellow hover:text-cinesos-yellow"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        {/* Dizi Listesi Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredSeries.map((serie) => (
                <Link key={serie.id} href={`/dizi/${serie.id}`} className="group relative flex flex-col gap-3">
                    
                    {/* Poster */}
                    <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm group-hover:shadow-2xl group-hover:shadow-cinesos-yellow/10 transition-all duration-300 group-hover:-translate-y-2">
                        <Image 
                            src={serie.poster} 
                            alt={serie.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                                <Tv className="w-5 h-5 text-white fill-white ml-1" />
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <div className={`absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-black border backdrop-blur-md shadow-lg ${getScoreColor(serie.rating)}`}>
                            {serie.rating}
                        </div>
                    </div>

                    {/* Bilgi */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white leading-tight truncate group-hover:text-cinesos-yellow transition-colors text-base mb-1">
                            {serie.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400 font-medium">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {serie.year}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600"></span>
                            <span className="flex items-center gap-1">
                                <Layers className="w-3 h-3" /> {serie.seasons} Sezon
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-gray-500 mt-1 truncate">{serie.genre}</p>
                    </div>
                </Link>
            ))}
        </div>

        {/* Empty State */}
        {filteredSeries.length === 0 && (
            <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sonuç Bulunamadı</h3>
                <p className="text-slate-500 dark:text-gray-400">
                    "{searchQuery}" araması için herhangi bir dizi bulunamadı.
                </p>
            </div>
        )}

        {/* Pagination */}
        {filteredSeries.length > 0 && (
            <div className="mt-16 text-center">
                <button className="px-8 py-3 rounded-full border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition shadow-sm hover:shadow-md">
                    Daha Fazla Göster
                </button>
            </div>
        )}

      </div>
    </div>
  );
}