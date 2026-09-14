"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Facebook, Twitter, Instagram, 
  MapPin, Calendar, Star, ChevronRight, 
  Film, Tv, ArrowDownWideNarrow, 
  Bell, BellRing, CheckCircle2 
} from "lucide-react";
import ContentRow from "@/components/discover/ContentRow";

// Mock Data: Timothée Chalamet
const PERSON_DETAIL = {
  id: "timothee-chalamet",
  name: "Timothée Chalamet",
  biography: "Timothée Hal Chalamet (d. 27 Aralık 1995), Amerikalı ve Fransız oyuncudur. Kariyerine kısa filmlerde rol alarak başladı, ardından Homeland dizisinde yer aldı. Luca Guadagnino'nun Beni Adınla Çağır (2017) filmindeki Elio Perlman rolüyle uluslararası üne kavuştu ve En İyi Erkek Oyuncu Akademi Ödülü'ne aday gösterildi.",
  birthday: "27 Aralık 1995",
  age: 28,
  place_of_birth: "New York City, New York, ABD",
  known_for_department: "Oyunculuk",
  profile_path: "https://image.tmdb.org/t/p/original/BE2sdjpgEHrT5l8lIi6JApJu0.jpg",
  images: [
    "https://image.tmdb.org/t/p/w500/8qBylAdQTMd5i5SMqIqp8TOZpXl.jpg",
    "https://image.tmdb.org/t/p/w500/2157d77f95de2153597371bd131551f6.jpg",
    "https://image.tmdb.org/t/p/w500/z3sLuRKP7hQVrvSTsqdLjGSXw/400x600.jpg",
    "https://image.tmdb.org/t/p/w500/q3lI1bY8qQW7z9Q581597463.jpg" 
  ],
  social: {
    instagram: "tchalamet",
    twitter: "RealChalamet",
    facebook: null,
    imdb: "nm3154303"
  },
  stats: {
    total_credits: 48,
    awards: 35,
    nominations: 89
  },
  known_for: [
    { id: "dune-2", title: "Dune: Part Two", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", rating: 8.8, year: 2024 },
    { id: "wonka", title: "Wonka", poster: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQz9jtRcmwXJ8.jpg", rating: 7.2, year: 2023 },
    { id: "dune", title: "Dune", poster: "https://image.tmdb.org/t/p/w500/d5NxsKlAkeq2jy842tGH2c896.jpg", rating: 7.8, year: 2021 },
    { id: "call-me", title: "Call Me by Your Name", poster: "https://image.tmdb.org/t/p/w500/m8tG44qY9e2v2r78.jpg", rating: 8.2, year: 2017 },
    { id: "interstellar", title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8z1dY4wKyM8Jm4rNb.jpg", rating: 8.6, year: 2014 },
  ],
  filmography: [
    { year: 2024, title: "Dune: Part Two", role: "Paul Atreides", type: "Film" },
    { year: 2023, title: "Wonka", role: "Willy Wonka", type: "Film" },
    { year: 2022, title: "Bones and All", role: "Lee", type: "Film" },
    { year: 2021, title: "Don't Look Up", role: "Yule", type: "Film" },
    { year: 2021, title: "Dune", role: "Paul Atreides", type: "Film" },
    { year: 2021, title: "The French Dispatch", role: "Zeffirelli", type: "Film" },
    { year: 2019, title: "Little Women", role: "Theodore 'Laurie' Laurence", type: "Film" },
    { year: 2019, title: "The King", role: "King Henry V", type: "Film" },
    { year: 2017, title: "Call Me by Your Name", role: "Elio Perlman", type: "Film" },
    { year: 2014, title: "Interstellar", role: "Tom Cooper (Young)", type: "Film" },
    { year: 2012, title: "Homeland", role: "Finn Walden", type: "Dizi", episodes: 8 },
  ]
};

export default function PersonDetailPage() {
  const person = PERSON_DETAIL;
  const [isFollowing, setIsFollowing] = useState(false);
  const [userRating, setUserRating] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SOL KOLON: KİŞİSEL BİLGİLER (3/12) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Profil Resmi */}
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 group">
              <Image 
                src={person.profile_path} 
                alt={person.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* AKSİYON ALANI: TAKİP VE PUANLAMA (YENİ) */}
            <div className="flex flex-col gap-4">
                {/* Takip Butonu */}
                <div className="relative">
                    <button
                        onClick={() => setIsFollowing(!isFollowing)}
                        className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-md active:scale-95 ${
                        isFollowing
                            ? "bg-cinesos-yellow text-black shadow-cinesos-yellow/20 ring-2 ring-cinesos-yellow/50"
                            : "bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-cinesos-yellow hover:text-black dark:hover:bg-cinesos-yellow dark:hover:text-black"
                        }`}
                    >
                        {isFollowing ? (
                            <>
                                <BellRing className="w-5 h-5 fill-current animate-pulse" />
                                <span>Takip Ediliyor</span>
                            </>
                        ) : (
                            <>
                                <Bell className="w-5 h-5" />
                                <span>Takip Et</span>
                            </>
                        )}
                    </button>
                    {/* Bildirim İpucu */}
                    {isFollowing && (
                        <div className="absolute top-full left-0 right-0 mt-2 flex items-center justify-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 py-1 rounded-md animate-in fade-in slide-in-from-top-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Yeni proje bildirimleri açık
                        </div>
                    )}
                </div>

                {/* Puanlama Alanı */}
                <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5 flex flex-col items-center gap-2 shadow-sm mt-2">
                    <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Kişi Puanın</span>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((score) => (
                            <button
                                key={score}
                                onClick={() => setUserRating(score)}
                                className="p-1 hover:scale-110 transition-transform group"
                            >
                                <Star 
                                    className={`w-6 h-6 transition-colors ${
                                        score <= userRating 
                                        ? "fill-cinesos-yellow text-cinesos-yellow drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" 
                                        : "text-gray-300 dark:text-gray-600 group-hover:text-cinesos-yellow"
                                    }`} 
                                />
                            </button>
                        ))}
                    </div>
                    {userRating > 0 ? (
                        <span className="text-xs font-medium text-slate-900 dark:text-white animate-in fade-in">
                            {userRating}/5 puan verdin
                        </span>
                    ) : (
                        <span className="text-[10px] text-gray-400">Puanlamak için dokun</span>
                    )}
                </div>
            </div>

            {/* Sosyal Medya */}
            <div className="flex justify-center gap-4 border-t border-gray-200 dark:border-white/10 pt-6">
              {person.social.instagram && (
                <Link href={`https://instagram.com/${person.social.instagram}`} target="_blank" className="p-3 bg-white dark:bg-white/5 rounded-full shadow-sm hover:shadow-md hover:text-pink-600 transition border border-gray-200 dark:border-white/10 text-slate-700 dark:text-gray-300 group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              )}
              {person.social.twitter && (
                <Link href={`https://twitter.com/${person.social.twitter}`} target="_blank" className="p-3 bg-white dark:bg-white/5 rounded-full shadow-sm hover:shadow-md hover:text-blue-400 transition border border-gray-200 dark:border-white/10 text-slate-700 dark:text-gray-300 group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              )}
              <Link href={`https://imdb.com/name/${person.social.imdb}`} target="_blank" className="p-3 bg-white dark:bg-white/5 rounded-full shadow-sm hover:shadow-md hover:text-yellow-500 transition border border-gray-200 dark:border-white/10 text-slate-700 dark:text-gray-300 font-black text-xs flex items-center justify-center w-11 h-11 group">
                IMDb
              </Link>
            </div>

            {/* Kişisel Bilgiler Kartı */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 space-y-6">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white border-b border-gray-100 dark:border-white/5 pb-2">
                Kişisel Bilgiler
              </h3>
              
              <div className="space-y-4">
                <div>
                  <span className="block text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1">Bilinen İş</span>
                  <span className="text-slate-900 dark:text-white font-medium">{person.known_for_department}</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1">Doğum Tarihi</span>
                  <span className="text-slate-900 dark:text-white font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cinesos-yellow" />
                    {person.birthday} ({person.age})
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1">Doğum Yeri</span>
                  <span className="text-slate-900 dark:text-white font-medium flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cinesos-yellow flex-shrink-0 mt-0.5" />
                    {person.place_of_birth}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-1">Toplam Yapım</span>
                  <span className="text-slate-900 dark:text-white font-medium">{person.stats.total_credits} Film / Dizi</span>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ KOLON: ANA İÇERİK (9/12) */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Başlık ve Biyografi */}
            <section>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                {person.name}
              </h1>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                <p>{person.biography}</p>
              </div>
            </section>

            {/* Bilinen Yapımlar (Yatay Liste) */}
            <section className="bg-white/50 dark:bg-white/5 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-white/5">
                <ContentRow title="Bilinen En İyi Yapımları" items={person.known_for} />
            </section>

            {/* Medya / Fotoğraflar */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Fotoğraflar</h3>
                    <Link href="#" className="text-sm font-semibold text-cinesos-yellow hover:underline flex items-center">
                        Tümünü Gör <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {person.images.map((img, i) => (
                        <div key={i} className="aspect-[2/3] relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all">
                            <Image 
                                src={img} 
                                alt={`${person.name} photo ${i}`} 
                                fill 
                                className="object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Filmografi (Tablo/Liste) */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        Filmografi
                        <span className="text-base font-normal text-slate-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md">
                            {person.filmography.length} Yapım
                        </span>
                    </h3>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition text-slate-700 dark:text-gray-200">
                            <ArrowDownWideNarrow className="w-4 h-4" />
                            Yeniden Eskiye
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-sm">
                    {person.filmography.map((item, i) => (
                        <div key={i} className="group flex items-center gap-6 p-4 md:p-5 border-b border-gray-100 dark:border-white/5 last:border-0 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <span className="text-slate-500 dark:text-gray-400 font-mono font-bold w-12 text-center flex-shrink-0">
                                {item.year}
                            </span>
                            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                <Link href="#" className="font-bold text-slate-900 dark:text-white text-lg hover:text-cinesos-yellow transition-colors">
                                    {item.title}
                                </Link>
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-white/20"></div>
                                <span className="text-slate-600 dark:text-gray-300 flex items-center gap-2 text-sm">
                                    {item.type === "Film" ? <Film className="w-3.5 h-3.5" /> : <Tv className="w-3.5 h-3.5" />}
                                    <span className="text-slate-400 dark:text-gray-500">olarak</span> 
                                    {item.role}
                                </span>
                            </div>
                            {item.episodes && (
                                <span className="text-xs text-slate-400 dark:text-gray-500 font-medium whitespace-nowrap hidden sm:block">
                                    {item.episodes} Bölüm
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}