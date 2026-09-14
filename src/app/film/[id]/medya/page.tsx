"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Play, Image as ImageIcon, Video, Download, ExternalLink, Maximize2 } from "lucide-react";

// Mock Data
const MEDIA_DATA = {
  videos: [
    { id: 1, title: "Resmi Fragman 3", type: "Fragman", duration: "2:45", thumbnail: "https://image.tmdb.org/t/p/w780/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" },
    { id: 2, title: "Karakter Tanıtımı: Paul", type: "Teaser", duration: "1:10", thumbnail: "https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547TJqqQ.jpg" },
    { id: 3, title: "Kamera Arkası: Çöl Çekimleri", type: "Featurette", duration: "4:20", thumbnail: "https://image.tmdb.org/t/p/w780/5qHooy8d9q15X7Q7E1zJ6k8I4.jpg" },
    { id: 4, title: "TV Spot - Savaş", type: "TV Spot", duration: "0:30", thumbnail: "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" },
  ],
  backdrops: [
    "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vREc0547TJqqQ.jpg",
    "https://image.tmdb.org/t/p/original/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
    "https://image.tmdb.org/t/p/original/5qHooy8d9q15X7Q7E1zJ6k8I4.jpg",
    "https://image.tmdb.org/t/p/original/cnqVS5Vn9is67V7k2Q5D6x8M5V.jpg"
  ],
  posters: [
    "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    "https://image.tmdb.org/t/p/original/cDj3L4d9a5b6k2l.jpg",
    "https://image.tmdb.org/t/p/original/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg",
    "https://image.tmdb.org/t/p/original/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg"
  ]
};

export default function FilmMediaPage() {
  const [activeTab, setActiveTab] = useState<"all" | "videos" | "images">("all");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans">
      
      {/* 1. MINI HERO */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" 
            alt="Backdrop" 
            fill 
            className="object-cover opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-cinesos-dark" />
        </div>
        <div className="container mx-auto px-4 md:px-6 h-full flex items-end pb-8 relative z-10">
          <div className="flex items-center gap-6">
            <Link href="/film/dune-2" className="flex-shrink-0 w-24 h-36 rounded-lg shadow-lg overflow-hidden border-2 border-white dark:border-white/10 group relative">
               <Image 
                 src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" 
                 alt="Poster" 
                 fill 
                 className="object-cover group-hover:scale-105 transition-transform"
               />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <ChevronLeft className="text-white" />
               </div>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">
                Dune: Part Two
              </h1>
              <Link href="/film/dune-2" className="flex items-center gap-1 text-cinesos-yellow hover:underline text-sm font-bold">
                <ChevronLeft className="w-4 h-4" /> Filme Dön
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STICKY TABS */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-cinesos-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 mb-8">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                <Link href="/film/dune-2" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Genel Bakış
                </Link>
                <Link href="/film/dune-2/kadro" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Kadro & Ekip
                </Link>
                <button className="py-4 border-b-2 border-cinesos-yellow text-cinesos-yellow font-bold text-sm whitespace-nowrap">
                    Medya (12)
                </button>
                <Link href="/film/dune-2/haberler" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Haberler (3)
                </Link>
                <Link href="/film/dune-2/incelemeler" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    İncelemeler (45)
                </Link>
            </div>
        </div>
      </div>

      {/* 3. MEDIA CONTENT */}
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Filtreler */}
        <div className="flex items-center gap-2 mb-8">
            <button 
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${activeTab === "all" ? "bg-slate-900 dark:bg-white text-white dark:text-black" : "bg-gray-200 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10"}`}
            >
                Tümü
            </button>
            <button 
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${activeTab === "videos" ? "bg-slate-900 dark:bg-white text-white dark:text-black" : "bg-gray-200 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10"}`}
            >
                <Video className="w-4 h-4" /> Videolar
            </button>
            <button 
                onClick={() => setActiveTab("images")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${activeTab === "images" ? "bg-slate-900 dark:bg-white text-white dark:text-black" : "bg-gray-200 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10"}`}
            >
                <ImageIcon className="w-4 h-4" /> Görseller
            </button>
        </div>

        {/* VİDEOLAR */}
        {(activeTab === "all" || activeTab === "videos") && (
            <section className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Video className="w-5 h-5 text-cinesos-yellow" />
                    Fragmanlar & Klipler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MEDIA_DATA.videos.map((video) => (
                        <div key={video.id} className="group cursor-pointer">
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm group-hover:shadow-xl transition-all">
                                <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="mt-3">
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1 group-hover:text-cinesos-yellow transition-colors">
                                    {video.title}
                                </h4>
                                <span className="text-xs text-slate-500 dark:text-gray-400">{video.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )}

        {/* GÖRSELLER */}
        {(activeTab === "all" || activeTab === "images") && (
            <section className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-cinesos-yellow" />
                    Duvar Kağıtları & Arkaplanlar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {MEDIA_DATA.backdrops.map((img, i) => (
                        <div key={i} className="group relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 cursor-zoom-in">
                            <Image src={img} alt={`Backdrop ${i}`} fill className="object-cover" />
                            {/* Overlay Actions */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition">
                                    <Maximize2 className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Afişler</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {MEDIA_DATA.posters.map((img, i) => (
                        <div key={i} className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 cursor-zoom-in shadow-md">
                            <Image src={img} alt={`Poster ${i}`} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition">
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )}

      </div>
    </div>
  );
}