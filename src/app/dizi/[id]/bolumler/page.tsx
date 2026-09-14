"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Check, Star, Play, Calendar, Clock, ListVideo } from "lucide-react";
import { SERIES_DETAIL } from "@/lib/seriesDetailData";

export default function SeriesEpisodesPage() {
  const series = SERIES_DETAIL;
  const [activeSeason, setActiveSeason] = useState(1);
  const currentSeason = series.seasons.find(s => s.seasonNumber === activeSeason) || series.seasons[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans">
      
      {/* 1. MINI HERO */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={series.backdrop}
            alt="Backdrop" 
            fill 
            className="object-cover opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-cinesos-dark" />
        </div>
        <div className="container mx-auto px-4 md:px-6 h-full flex items-end pb-8 relative z-10">
          <div className="flex items-center gap-6">
            <Link href={`/dizi/${series.id}`} className="flex-shrink-0 w-24 h-36 rounded-lg shadow-lg overflow-hidden border-2 border-white dark:border-white/10 group relative">
               <Image 
                 src={series.poster} 
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
                {series.title}
              </h1>
              <Link href={`/dizi/${series.id}`} className="flex items-center gap-1 text-cinesos-yellow hover:underline text-sm font-bold">
                <ChevronLeft className="w-4 h-4" /> Diziye Dön
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STICKY TABS */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-cinesos-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 mb-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                <Link href={`/dizi/${series.id}`} className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Genel Bakış
                </Link>
                <button className="py-4 border-b-2 border-cinesos-yellow text-cinesos-yellow font-bold text-sm whitespace-nowrap flex items-center gap-2">
                    <ListVideo className="w-4 h-4" />
                    Bölümler ({series.totalEpisodes})
                </button>
                <Link href={`/dizi/${series.id}/kadro`} className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Kadro & Ekip
                </Link>
                <Link href={`/dizi/${series.id}/medya`} className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Medya (24)
                </Link>
                <Link href={`/dizi/${series.id}/haberler`} className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Haberler (5)
                </Link>
                <Link href={`/dizi/${series.id}/incelemeler`} className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    İncelemeler (120)
                </Link>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL KOLON: SEZON VE BÖLÜMLER (9/12) */}
            <div className="lg:col-span-9 space-y-8">
                
                {/* Sezon Seçici */}
                <div className="flex items-center gap-4 mb-8 overflow-x-auto no-scrollbar">
                    {series.seasons.map((season) => (
                        <button
                            key={season.seasonNumber}
                            onClick={() => setActiveSeason(season.seasonNumber)}
                            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                                activeSeason === season.seasonNumber
                                ? "bg-slate-900 dark:bg-white text-white dark:text-black shadow-lg"
                                : "bg-white dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                            }`}
                        >
                            {season.name}
                        </button>
                    ))}
                </div>

                {/* Aktif Sezon Özeti */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 flex gap-6 items-start">
                     <div className="relative w-24 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 shadow-md hidden sm:block">
                        <Image src={currentSeason.poster} alt={currentSeason.name} fill className="object-cover" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{currentSeason.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
                            {currentSeason.overview}
                        </p>
                        <div className="flex gap-4 text-xs font-bold text-slate-500 dark:text-gray-400">
                            <span>{currentSeason.airDate}</span>
                            <span>{currentSeason.episodeCount} Bölüm</span>
                        </div>
                     </div>
                </div>

                {/* Bölüm Listesi */}
                <div className="space-y-6">
                    {currentSeason.episodes.length > 0 ? (
                        currentSeason.episodes.map((episode) => (
                            <div key={episode.episodeNumber} className="group bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden hover:border-cinesos-yellow/50 transition-colors flex flex-col md:flex-row">
                                {/* Thumbnail */}
                                <div className="relative w-full md:w-64 aspect-video bg-gray-200 dark:bg-gray-800 flex-shrink-0">
                                    <Image src={episode.image} alt={episode.title} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <Play className="w-10 h-10 text-white fill-white" />
                                    </div>
                                </div>
                                
                                {/* Info */}
                                <div className="p-5 flex flex-col justify-center flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cinesos-yellow transition-colors">
                                                {episode.episodeNumber}. {episode.title}
                                            </h4>
                                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400 mt-1">
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {episode.airDate}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {episode.runtime}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm bg-yellow-500/10 px-2 py-1 rounded">
                                            <Star className="w-3 h-3 fill-current" /> {episode.rating}
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-slate-600 dark:text-gray-300 line-clamp-2 mb-4">
                                        {episode.overview}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                                        <button className="text-xs font-bold text-cinesos-yellow hover:underline">Detaylar & Yorumlar</button>
                                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition text-xs font-bold text-slate-600 dark:text-gray-300">
                                            <Check className="w-3 h-3" /> İzledim
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl">
                            <p className="text-slate-500 dark:text-gray-400">Bu sezon henüz yayınlanmadı veya bölüm bilgileri eklenmedi.</p>
                        </div>
                    )}
                </div>

            </div>

            {/* SAĞ KOLON (3/12) */}
            <div className="lg:col-span-3 space-y-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-500/20">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Takip Durumu</h4>
                    <div className="h-2 bg-blue-200 dark:bg-blue-900/50 rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-blue-500 w-[60%]"></div>
                    </div>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                        1. Sezon, 6. Bölümdesin. <br/>
                        Kalan: 10 Bölüm
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}