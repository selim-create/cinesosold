"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, Filter, ArrowDownWideNarrow, 
  Star, Calendar, Play 
} from "lucide-react";

// Mock Data (Gerçek senaryoda API'den filtrelenerek gelecek)
const MOCK_MOVIES = [
  { id: "dune-2", title: "Dune: Part Two", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", rating: 8.8, year: 2024, type: "Film" },
  { id: "the-last-of-us", title: "The Last of Us", poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg", rating: 9.2, year: 2023, type: "Dizi" },
  { id: "interstellar", title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8z1dY4wKyM8Jm4rNb.jpg", rating: 8.6, year: 2014, type: "Film" },
  { id: "blade-runner-2049", title: "Blade Runner 2049", poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", rating: 8.0, year: 2017, type: "Film" },
  { id: "arrival", title: "Arrival", poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", rating: 7.9, year: 2016, type: "Film" },
  { id: "mandalorian", title: "The Mandalorian", poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg", rating: 8.7, year: 2019, type: "Dizi" },
  { id: "inception", title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7admal4zlE013GXCYRnRCqOd.jpg", rating: 8.8, year: 2010, type: "Film" },
  { id: "avatar-2", title: "Avatar: The Way of Water", poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", rating: 7.6, year: 2022, type: "Film" },
];

export default function GenreDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Slug'ı başlığa çevir (örn: bilim-kurgu -> Bilim Kurgu)
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  // Puan Rengi
  const getScoreColor = (score: number) => {
    if (score >= 8.0) return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    if (score >= 6.0) return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
    return "text-red-500 bg-red-500/10 border-red-500/20";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      
      {/* 1. HERO & HEADER */}
      <div className="container mx-auto px-4 md:px-6 mb-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 mb-4 font-medium">
            <Link href="/" className="hover:text-cinesos-yellow transition">Anasayfa</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tur" className="hover:text-cinesos-yellow transition">Türler</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-white">{title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200 dark:border-white/10">
            <div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                    {title}
                </h1>
                <p className="text-slate-600 dark:text-gray-300 max-w-2xl">
                    En popüler ve en yeni {title.toLowerCase()} içeriklerini keşfet. Cinesos topluluğunun oylarıyla sıralanmıştır.
                </p>
            </div>

            {/* Filtre Butonları */}
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition text-slate-700 dark:text-gray-200 shadow-sm">
                    <ArrowDownWideNarrow className="w-4 h-4" />
                    Önerilen
                </button>
                <button className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition shadow-sm">
                    <Filter className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>

      {/* 2. İÇERİK GRID */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
            {MOCK_MOVIES.map((item) => (
                <Link 
                    key={item.id} 
                    href={`/${item.type === 'Dizi' ? 'dizi' : 'film'}/${item.id}`}
                    className="group relative flex flex-col gap-3"
                >
                    {/* Poster Alanı */}
                    <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm group-hover:shadow-2xl group-hover:shadow-cinesos-yellow/10 transition-all duration-300 group-hover:-translate-y-2">
                        <Image 
                            src={item.poster} 
                            alt={item.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                                <Play className="w-5 h-5 text-white fill-white ml-1" />
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <div className={`absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-black border backdrop-blur-md shadow-lg ${getScoreColor(item.rating)}`}>
                            {item.rating}
                        </div>
                    </div>

                    {/* Bilgi Alanı */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white leading-tight truncate group-hover:text-cinesos-yellow transition-colors">
                            {item.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {item.year}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600"></span>
                            <span>{item.type}</span>
                        </div>
                    </div>
                </Link>
            ))}
            
            {/* Dolu Görünmesi İçin Mock Data Tekrarı (Demo Amaçlı) */}
            {MOCK_MOVIES.map((item, i) => (
                <Link 
                    key={`${item.id}-${i}`} 
                    href={`/${item.type === 'Dizi' ? 'dizi' : 'film'}/${item.id}`}
                    className="group relative flex flex-col gap-3"
                >
                    <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm group-hover:shadow-2xl group-hover:shadow-cinesos-yellow/10 transition-all duration-300 group-hover:-translate-y-2">
                        <Image src={item.poster} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                                <Play className="w-5 h-5 text-white fill-white ml-1" />
                            </div>
                        </div>
                        <div className={`absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-black border backdrop-blur-md shadow-lg ${getScoreColor(item.rating)}`}>
                            {item.rating}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white leading-tight truncate group-hover:text-cinesos-yellow transition-colors">{item.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.year}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600"></span>
                            <span>{item.type}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {/* Pagination (Daha Fazla Yükle) */}
        <div className="mt-16 text-center">
            <button className="px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition shadow-sm hover:shadow-md">
                Daha Fazla Göster
            </button>
        </div>

      </div>
    </div>
  );
}