"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Star, Calendar, Clock, Film } from "lucide-react";

// Mock Data: Filmler
const MOVIES_DATA = [
  {
    id: "dune-2",
    title: "Dune: Part Two",
    originalTitle: "Dune: Part Two",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    rating: 8.8,
    year: 2024,
    duration: "2s 46dk",
    genre: "Bilim Kurgu",
    category: "Popüler"
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    originalTitle: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    rating: 8.5,
    year: 2023,
    duration: "3s 0dk",
    genre: "Biyografi",
    category: "Popüler"
  },
  {
    id: "civil-war",
    title: "Civil War",
    originalTitle: "Civil War",
    poster: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    rating: 7.6,
    year: 2024,
    duration: "1s 49dk",
    genre: "Aksiyon",
    category: "Vizyonda"
  },
  {
    id: "challengers",
    title: "Challengers",
    originalTitle: "Challengers",
    poster: "https://image.tmdb.org/t/p/w500/H6vke7zGiuLwtYLPAs103SLl2o.jpg",
    rating: 7.4,
    year: 2024,
    duration: "2s 11dk",
    genre: "Dram",
    category: "Vizyonda"
  },
  {
    id: "poor-things",
    title: "Poor Things",
    originalTitle: "Poor Things",
    poster: "https://image.tmdb.org/t/p/w500/kCGlIMVn6MjcveAc3oUXqF60UCAL.jpg",
    rating: 8.0,
    year: 2023,
    duration: "2s 21dk",
    genre: "Komedi",
    category: "Ödüllü"
  },
  {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    originalTitle: "Furiosa: A Mad Max Saga",
    poster: "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    rating: 0, // Henüz çıkmadı
    year: 2024,
    duration: "2s 28dk",
    genre: "Aksiyon",
    category: "Yakında"
  },
  {
    id: "interstellar",
    title: "Interstellar",
    originalTitle: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8z1dY4wKyM8Jm4rNb.jpg",
    rating: 8.6,
    year: 2014,
    duration: "2s 49dk",
    genre: "Bilim Kurgu",
    category: "Top 250"
  },
  {
    id: "inception",
    title: "Inception",
    originalTitle: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/9gk7admal4zlE013GXCYRnRCqOd.jpg",
    rating: 8.8,
    year: 2010,
    duration: "2s 28dk",
    genre: "Aksiyon",
    category: "Top 250"
  },
  {
    id: "the-godfather",
    title: "The Godfather",
    originalTitle: "The Godfather",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: 9.2,
    year: 1972,
    duration: "2s 55dk",
    genre: "Suç",
    category: "Top 250"
  },
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    originalTitle: "Deadpool & Wolverine",
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    rating: 0,
    year: 2024,
    duration: "TBA",
    genre: "Aksiyon",
    category: "Yakında"
  }
];

const CATEGORIES = ["Tümü", "Popüler", "Vizyonda", "Yakında", "Top 250", "Ödüllü"];

export default function MoviesPage() {
  const [activeTab, setActiveTab] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtreleme Mantığı
  const filteredMovies = MOVIES_DATA.filter(movie => {
    const matchesTab = activeTab === "Tümü" || movie.category === activeTab;
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          movie.originalTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getScoreColor = (score: number) => {
    if (score === 0) return "text-gray-400 bg-gray-100 dark:bg-white/10";
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
                    <Film className="w-10 h-10 md:w-12 md:h-12 text-cinesos-yellow" />
                    Filmler
                </h1>
                <p className="text-lg text-slate-600 dark:text-gray-300 max-w-xl">
                    Vizyondakiler, klasikler ve keşfedilmeyi bekleyen binlerce film.
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
                    placeholder="Film ara..."
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

        {/* Film Listesi Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
                <Link key={movie.id} href={`/film/${movie.id}`} className="group relative flex flex-col gap-3">
                    
                    {/* Poster */}
                    <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm group-hover:shadow-2xl group-hover:shadow-cinesos-yellow/10 transition-all duration-300 group-hover:-translate-y-2">
                        <Image 
                            src={movie.poster} 
                            alt={movie.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                                <Film className="w-5 h-5 text-white fill-white ml-1" />
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <div className={`absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-black border backdrop-blur-md shadow-lg ${getScoreColor(movie.rating)}`}>
                            {movie.rating > 0 ? movie.rating : "-"}
                        </div>
                    </div>

                    {/* Bilgi */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white leading-tight truncate group-hover:text-cinesos-yellow transition-colors text-base mb-1">
                            {movie.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400 font-medium">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {movie.year}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600"></span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {movie.duration}
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-gray-500 mt-1 truncate">{movie.genre}</p>
                    </div>
                </Link>
            ))}
        </div>

        {/* Empty State */}
        {filteredMovies.length === 0 && (
            <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sonuç Bulunamadı</h3>
                <p className="text-slate-500 dark:text-gray-400">
                    "{searchQuery}" araması için herhangi bir film bulunamadı.
                </p>
            </div>
        )}

        {/* Pagination */}
        {filteredMovies.length > 0 && (
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