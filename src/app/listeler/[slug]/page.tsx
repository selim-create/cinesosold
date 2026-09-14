"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, Share2, MoreHorizontal, Play, Plus, 
  Calendar, Star, Clock, User 
} from "lucide-react";

// Mock Data
const LIST_DETAIL = {
  id: "akil-almaz-filmler",
  title: "Beyin Yakan Filmler (Mindfuck)",
  description: "Sonunda 'Ne izledim ben?' dedirtecek, kurgusuyla ters köşe yapan, psikolojik gerilimi yüksek filmler. İzlemeden önce spoiler yememeye dikkat edin!",
  user: { name: "SinemaGurmesi", avatar: "https://i.pravatar.cc/150?img=33", followers: "12.5k" },
  likes: 1240,
  itemCount: 42,
  updatedAt: "2 gün önce",
  items: [
    { id: "inception", title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7admal4zlE013GXCYRnRCqOd.jpg", rating: 8.8, year: 2010, type: "Film", director: "Christopher Nolan", runtime: "2s 28dk" },
    { id: "fight-club", title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Gr7YA2sMhFOiUo.jpg", rating: 8.8, year: 1999, type: "Film", director: "David Fincher", runtime: "2s 19dk" },
    { id: "memento", title: "Memento", poster: "https://image.tmdb.org/t/p/w500/lxM6kqilAdyVxXH23xJidwJ8292.jpg", rating: 8.4, year: 2000, type: "Film", director: "Christopher Nolan", runtime: "1s 53dk" },
    { id: "shutter-island", title: "Shutter Island", poster: "https://image.tmdb.org/t/p/w500/6y25e4t2uIK5MvY584gLdo1r7n.jpg", rating: 8.2, year: 2010, type: "Film", director: "Martin Scorsese", runtime: "2s 18dk" },
    { id: "interstellar", title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8z1dY4wKyM8Jm4rNb.jpg", rating: 8.6, year: 2014, type: "Film", director: "Christopher Nolan", runtime: "2s 49dk" },
    { id: "arrival", title: "Arrival", poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", rating: 7.9, year: 2016, type: "Film", director: "Denis Villeneuve", runtime: "1s 56dk" },
  ]
};

export default function ListDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const list = LIST_DETAIL; // Normalde slug ile veri çekilir

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL KOLON: LİSTE BİLGİLERİ (Sticky Sidebar) */}
            <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                    
                    {/* Liste Kapağı (Kolaj) */}
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-900 grid grid-cols-2 gap-0.5 border-4 border-white dark:border-white/10">
                        {list.items.slice(0, 4).map((item, i) => (
                            <div key={i} className="relative w-full h-full">
                                <Image src={item.poster} alt={item.title} fill className="object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Liste Detayları */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
                            {list.title}
                        </h1>
                        
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-white/10">
                                <Image src={list.user.avatar} alt={list.user.name} fill className="object-cover" />
                            </div>
                            <div>
                                <span className="block text-sm font-bold text-slate-900 dark:text-white">{list.user.name}</span>
                                <span className="block text-xs text-slate-500 dark:text-gray-400">{list.user.followers} takipçi</span>
                            </div>
                            <button className="ml-auto px-4 py-1.5 rounded-full border border-gray-300 dark:border-white/20 text-xs font-bold text-slate-700 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                                Takip Et
                            </button>
                        </div>

                        <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                            {list.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 pt-4">
                            <span>{list.itemCount} Film</span>
                            <span>Güncellendi: {list.updatedAt}</span>
                        </div>
                    </div>

                    {/* Aksiyon Butonları */}
                    <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-cinesos-yellow text-black py-3 rounded-xl font-bold hover:bg-yellow-400 transition shadow-lg shadow-cinesos-yellow/20">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">Beğen ({list.likes})</span>
                        </button>
                        <button className="p-3 rounded-xl bg-white dark:bg-white/10 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 transition border border-gray-200 dark:border-white/5">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-xl bg-white dark:bg-white/10 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 transition border border-gray-200 dark:border-white/5">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </div>

            {/* SAĞ KOLON: FİLMLER (Liste) */}
            <div className="lg:col-span-8">
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-white/10">
                    <span className="text-sm font-bold text-slate-500 dark:text-gray-400">SIRALAMA</span>
                    <select className="bg-transparent text-sm font-bold text-slate-900 dark:text-white outline-none cursor-pointer">
                        <option>Özel Sıralama</option>
                        <option>Puan (Yüksekten Düşüğe)</option>
                        <option>Yıl (Yeniden Eskiye)</option>
                    </select>
                </div>

                <div className="space-y-4">
                    {list.items.map((item, index) => (
                        <div key={item.id} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/50 transition-all shadow-sm hover:shadow-md">
                            
                            {/* Sıra Numarası */}
                            <div className="hidden sm:flex flex-col items-center justify-center w-8 text-2xl font-black text-gray-200 dark:text-white/10 group-hover:text-cinesos-yellow transition-colors">
                                {index + 1}
                            </div>

                            {/* Poster */}
                            <Link href={`/film/${item.id}`} className="relative w-full sm:w-24 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                                <Image src={item.poster} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                            </Link>

                            {/* Detaylar */}
                            <div className="flex-1 flex flex-col justify-center">
                                <Link href={`/film/${item.id}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-cinesos-yellow transition-colors mb-1">
                                    {item.title}
                                </Link>
                                
                                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-gray-400 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.year}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.runtime}</span>
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {item.director}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1 text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded text-xs font-bold">
                                        <Star className="w-3 h-3 fill-current" /> {item.rating}
                                    </div>
                                    <button className="flex items-center gap-1 text-xs font-bold text-slate-600 dark:text-gray-300 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded hover:bg-emerald-500 hover:text-white transition">
                                        <Plus className="w-3 h-3" /> İzledim
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </div>

      </div>
    </div>
  );
}