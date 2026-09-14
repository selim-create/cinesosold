"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ContentItem {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: number;
  type?: string; // movie | series
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
}

export default function ContentRow({ title, items }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-emerald-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section className="py-8 relative group/row">
      <div className="container mx-auto px-4 md:px-6 mb-5 flex items-end justify-between">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h3>
        <Link href="#" className="text-xs font-bold text-cinesos-yellow hover:text-yellow-600 dark:hover:text-yellow-400 transition uppercase tracking-wide">Tümünü Gör</Link>
      </div>

      <div className="relative">
        <button 
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-xl shadow-xl flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-0 -ml-6 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white"
        >
            <ChevronLeft className="w-6 h-6" />
        </button>

        <div 
            ref={rowRef}
            className="flex gap-4 overflow-x-auto px-4 md:px-6 pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
            {items.map((item) => {
                const cinesosScore = Math.round(item.rating * 10);
                const scoreColor = getScoreColor(cinesosScore);
                
                // Dinamik Link Oluşturma
                // Eğer type belirtilmemişse varsayılan olarak 'film' kabul edilebilir veya 'movie' ise '/film', 'series' ise '/dizi'
                const itemType = item.type === 'series' ? 'dizi' : 'film';
                const linkHref = `/${itemType}/${item.id}`;

                return (
                    <Link 
                        key={item.id} 
                        href={linkHref}
                        className="flex-none w-[160px] md:w-[220px] snap-start group cursor-pointer relative"
                    >
                        <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-black/20 dark:group-hover:shadow-cinesos-yellow/10 transition-all duration-300 group-hover:-translate-y-2 bg-slate-200 dark:bg-slate-800 ring-1 ring-black/5 dark:ring-white/10">
                            <Image 
                                src={item.poster} 
                                alt={item.title} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 160px, 220px"
                            />
                            
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="transform scale-50 group-hover:scale-100 transition-transform duration-300 bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                                    <Play className="w-8 h-8 fill-white text-white ml-1" />
                                </div>
                            </div>

                            <div className={`absolute top-3 right-3 ${scoreColor} text-white text-xs font-black px-2 py-1 rounded-lg shadow-lg border border-white/20 z-10 flex flex-col items-center justify-center min-w-[32px]`}>
                                <span>{cinesosScore}</span>
                            </div>
                        </div>

                        <div className="mt-3 px-1">
                            <h4 className="font-bold text-base text-slate-800 dark:text-slate-100 truncate group-hover:text-cinesos-yellow transition-colors">{item.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                                <span>{item.year}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                <span>{item.type === 'series' ? 'Dizi' : 'Film'}</span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>

        <button 
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-xl shadow-xl flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:scale-110 -mr-6 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white"
        >
            <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}