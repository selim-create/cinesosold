"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, Link as LinkIcon, Calendar, UserPlus, 
  MessageCircle, MoreHorizontal, Grid, List, 
  Heart, Clock, Star, Play, Settings 
} from "lucide-react";
import ContentRow from "@/components/discover/ContentRow";

// Mock Data
const USER_PROFILE = {
  username: "sinemagurmesi",
  name: "Sinema Gurmesi",
  badge: "Sinefil", // Üyelik tipi
  bio: "Bilim kurgu ve psikolojik gerilim bağımlısı. Nolan ve Villeneuve hayranı. Genelde puanlarım acımasızdır. 🎬",
  location: "İstanbul, TR",
  website: "cinesos.com",
  joinDate: "Ocak 2024",
  avatar: "https://i.pravatar.cc/150?img=33",
  banner: "https://image.tmdb.org/t/p/original/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg", // Blade Runner 2049 backdrop
  stats: {
    watched: 1245,
    lists: 24,
    followers: "12.5k",
    following: 340,
    thisYear: 42 // Bu yıl izlediği
  },
  favorites: [
    { id: "interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8z1dY4wKyM8Jm4rNb.jpg" },
    { id: "arrival", poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg" },
    { id: "dune-2", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" },
    { id: "fight-club", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Gr7YA2sMhFOiUo.jpg" }
  ],
  recentActivity: [
    { id: "dune-2", title: "Dune: Part Two", rating: 10, poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", type: "izledi", date: "Dün" },
    { id: "civil-war", title: "Civil War", rating: 7, poster: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg", type: "izledi", date: "3 gün önce" },
    { id: "shogun", title: "Shōgun", rating: 9, poster: "https://image.tmdb.org/t/p/w500/7O4iVfM8jY3f7w7w7w7w7w7w7w.jpg", type: "inceledi", date: "1 hafta önce" },
  ]
};

export default function UserProfilePage({ params }: { params: { username: string } }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans">
      
      {/* 1. HEADER & BANNER */}
      <div className="relative w-full h-64 md:h-80 group">
        <Image 
            src={USER_PROFILE.banner} 
            alt="Cover" 
            fill 
            className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-cinesos-dark to-transparent opacity-90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative -mt-32 z-10">
        <div className="flex flex-col md:flex-row items-end gap-6 mb-8">
            
            {/* Avatar */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-cinesos-dark shadow-2xl overflow-hidden bg-gray-200">
                <Image src={USER_PROFILE.avatar} alt={USER_PROFILE.name} fill className="object-cover" />
            </div>

            {/* User Info */}
            <div className="flex-1 pb-2 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white">{USER_PROFILE.name}</h1>
                    {USER_PROFILE.badge && (
                        <span className="bg-cinesos-yellow text-black text-xs font-bold px-2 py-1 rounded w-fit mx-auto md:mx-0">
                            {USER_PROFILE.badge}
                        </span>
                    )}
                </div>
                <p className="text-slate-500 dark:text-gray-400 font-medium mb-4">@{USER_PROFILE.username}</p>
                
                {/* Stats Row */}
                <div className="flex items-center justify-center md:justify-start gap-6 text-sm">
                    <div className="text-center md:text-left">
                        <span className="block font-bold text-slate-900 dark:text-white text-lg">{USER_PROFILE.stats.watched}</span>
                        <span className="text-slate-500 dark:text-gray-400">İzledi</span>
                    </div>
                    <div className="text-center md:text-left">
                        <span className="block font-bold text-slate-900 dark:text-white text-lg">{USER_PROFILE.stats.lists}</span>
                        <span className="text-slate-500 dark:text-gray-400">Liste</span>
                    </div>
                    <div className="w-px h-8 bg-gray-300 dark:bg-white/10 mx-2 hidden md:block"></div>
                    <div className="text-center md:text-left cursor-pointer hover:text-cinesos-yellow transition">
                        <span className="block font-bold text-slate-900 dark:text-white text-lg">{USER_PROFILE.stats.followers}</span>
                        <span className="text-slate-500 dark:text-gray-400">Takipçi</span>
                    </div>
                    <div className="text-center md:text-left cursor-pointer hover:text-cinesos-yellow transition">
                        <span className="block font-bold text-slate-900 dark:text-white text-lg">{USER_PROFILE.stats.following}</span>
                        <span className="text-slate-500 dark:text-gray-400">Takip</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 w-full md:w-auto">
                <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
                        isFollowing 
                        ? "bg-transparent border-2 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white" 
                        : "bg-cinesos-yellow text-black hover:bg-yellow-400 shadow-lg shadow-cinesos-yellow/20"
                    }`}
                >
                    {isFollowing ? "Takip Ediliyor" : "Takip Et"}
                    {!isFollowing && <UserPlus className="w-4 h-4" />}
                </button>
                <button className="p-3 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-slate-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/20 transition">
                    <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-slate-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/20 transition">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Bio & Details */}
        <div className="mb-8">
            <p className="text-slate-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-4 text-center md:text-left mx-auto md:mx-0">
                {USER_PROFILE.bio}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500 dark:text-gray-400">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {USER_PROFILE.location}</span>
                <Link href="#" className="flex items-center gap-1 hover:text-cinesos-yellow transition"><LinkIcon className="w-4 h-4" /> {USER_PROFILE.website}</Link>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Katıldı {USER_PROFILE.joinDate}</span>
            </div>
        </div>

        {/* FAVORITES SHOWCASE (Letterboxd Style) */}
        <div className="mb-12">
            <h3 className="text-sm font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest mb-4">Favori Yapımlar</h3>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
                {USER_PROFILE.favorites.map((film, i) => (
                    <Link key={i} href={`/film/${film.id}`} className="relative aspect-[2/3] rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                        <Image src={film.poster} alt="Fav" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors border-2 border-transparent group-hover:border-cinesos-yellow" />
                    </Link>
                ))}
            </div>
        </div>

        {/* 2. CONTENT TABS */}
        <div className="flex items-center gap-1 border-b border-gray-200 dark:border-white/10 mb-8 overflow-x-auto no-scrollbar">
            {[
                { id: "overview", label: "Genel Bakış", icon: Grid },
                { id: "diary", label: "Günlük", icon: Clock },
                { id: "lists", label: "Listeler", icon: List },
                { id: "likes", label: "Beğeniler", icon: Heart },
                { id: "watchlist", label: "İzleme Listesi", icon: Play },
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                        activeTab === tab.id 
                        ? "border-cinesos-yellow text-slate-900 dark:text-white" 
                        : "border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-200"
                    }`}
                >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                </button>
            ))}
        </div>

        {/* 3. TAB CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* SOL: RECENT ACTIVITY (Günlük Akışı) */}
            <div className="lg:col-span-2">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cinesos-yellow" />
                    Son Aktiviteler
                </h3>
                
                <div className="space-y-4">
                    {USER_PROFILE.recentActivity.map((activity, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/30 transition-colors group">
                            <Link href={`/film/${activity.id}`} className="relative w-16 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                                <Image src={activity.poster} alt={activity.title} fill className="object-cover" />
                            </Link>
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-cinesos-yellow transition-colors">
                                        {activity.title}
                                    </h4>
                                    <span className="text-xs text-slate-400">{activity.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300">
                                    <span className={`capitalize ${activity.type === 'inceledi' ? 'text-blue-500' : 'text-emerald-500'}`}>
                                        {activity.type}
                                    </span>
                                    {activity.rating && (
                                        <div className="flex items-center gap-1 text-cinesos-yellow">
                                            <Star className="w-3 h-3 fill-current" />
                                            <span className="font-bold">{activity.rating}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <button className="w-full mt-6 py-3 rounded-xl border border-gray-300 dark:border-white/10 text-slate-600 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition text-sm">
                    Tüm Geçmişi Gör
                </button>
            </div>

            {/* SAĞ: İSTATİSTİK & BADGE */}
            <div className="space-y-8">
                
                {/* Yıllık Özet */}
                <div className="bg-gradient-to-br from-slate-900 to-black rounded-2xl p-6 border border-white/10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cinesos-yellow/20 blur-[60px] rounded-full" />
                    <h4 className="font-bold text-lg mb-2 relative z-10">2026 Özeti</h4>
                    <div className="flex items-baseline gap-2 mb-4 relative z-10">
                        <span className="text-4xl font-black text-cinesos-yellow">{USER_PROFILE.stats.thisYear}</span>
                        <span className="text-sm opacity-70">film/dizi izlendi</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-cinesos-yellow w-[35%]"></div>
                    </div>
                    <p className="text-xs mt-2 opacity-50 relative z-10">Hedef: 100 içerik (%35)</p>
                </div>

                {/* Favori Türler */}
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">Favori Türler</h4>
                    <div className="flex flex-wrap gap-2">
                        {["Bilim Kurgu", "Psikolojik", "Gerilim", "Dram"].map((genre) => (
                            <span key={genre} className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-white/5 text-xs font-medium text-slate-700 dark:text-gray-300">
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
}