"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Play, Info, ChevronRight, TrendingUp, 
  Search, List, Flame, ArrowRight, Star 
} from "lucide-react";
import ContentRow from "@/components/discover/ContentRow";

// --- MOCK DATA ---

// Hero Slider Verisi
const HERO_SLIDES = [
  {
    id: "dune-2",
    title: "Dune: Part Two",
    description: "Paul Atreides, ailesini yok eden komploculara karşı intikam savaşı başlatırken Chani ve Fremenlerle birleşir.",
    image: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    logo: "https://image.tmdb.org/t/p/original/5Aii5J9315E39E272827721.jpg", // Temsili Logo (yoksa title text kullanılır)
    type: "Film",
    rating: 8.8,
    year: 2024,
    link: "/film/dune-2"
  },
  {
    id: "the-last-of-us",
    title: "The Last of Us",
    description: "Modern uygarlığın yok edilmesinden 20 yıl sonra, hayatta kalan Joel, 14 yaşındaki Ellie'yi karantina bölgesinden kaçırmak için tutulur.",
    image: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    type: "Dizi",
    rating: 9.2,
    year: 2023,
    link: "/dizi/the-last-of-us"
  },
  {
    id: "shogun",
    title: "Shōgun",
    description: "1600 yılında Japonya'da, Lord Yoshii Toranaga, düşmanlarının birleşip ona karşı harekete geçmesiyle hayatı için savaşırken, gizemli bir Avrupa gemisi karaya oturur.",
    image: "https://image.tmdb.org/t/p/original/7O4iVfM8jY3f7w7w7w7w7w7w7w.jpg",
    type: "Dizi",
    rating: 9.0,
    year: 2024,
    link: "/dizi/shogun"
  }
];

// Vitrin Listeleri
const TRENDING_MOVIES = [
  { id: "dune-2", title: "Dune: Part Two", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", rating: 8.8, year: 2024, type: "movie" },
  { id: "civil-war", title: "Civil War", poster: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg", rating: 7.6, year: 2024, type: "movie" },
  { id: "challengers", title: "Challengers", poster: "https://image.tmdb.org/t/p/w500/H6vke7zGiuLwtYLPAs103SLl2o.jpg", rating: 7.4, year: 2024, type: "movie" },
  { id: "oppenheimer", title: "Oppenheimer", poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", rating: 8.5, year: 2023, type: "movie" },
  { id: "poor-things", title: "Poor Things", poster: "https://image.tmdb.org/t/p/w500/kCGlIMVn6MjcveAc3oUXqF60UCAL.jpg", rating: 8.0, year: 2023, type: "movie" },
];

const TRENDING_SERIES = [
  { id: "fallout", title: "Fallout", poster: "https://image.tmdb.org/t/p/w500/8cOa83N7576f7f2Z7w8w27776.jpg", rating: 8.5, year: 2024, type: "series" },
  { id: "the-bear", title: "The Bear", poster: "https://image.tmdb.org/t/p/w500/xF8P3O9vY1p6n6qJ6a4z9l5.jpg", rating: 8.6, year: 2022, type: "series" },
  { id: "succession", title: "Succession", poster: "https://image.tmdb.org/t/p/w500/7bWmKlbSwWj698s998789.jpg", rating: 8.9, year: 2018, type: "series" },
  { id: "shogun", title: "Shōgun", poster: "https://image.tmdb.org/t/p/w500/7O4iVfM8jY3f7w7w7w7w7w7w7w.jpg", rating: 9.0, year: 2024, type: "series" },
  { id: "house-of-dragon", title: "House of the Dragon", poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg", rating: 8.4, year: 2022, type: "series" },
];

const POPULAR_LISTS = [
  { id: "mindfuck", title: "Beyin Yakan Filmler", user: "SinemaGurmesi", items: 42, likes: 1240, cover: "https://image.tmdb.org/t/p/w500/9gk7admal4zlE013GXCYRnRCqOd.jpg" },
  { id: "oscar-2024", title: "2024 Oscar Adayları", user: "CinesosEditör", items: 15, likes: 856, cover: "https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwvk4XTHYBPq.jpg" },
  { id: "horror-nights", title: "Uykusuz Bırakanlar", user: "KorkuFan", items: 66, likes: 2100, cover: "https://image.tmdb.org/t/p/w500/w2R9ClleF7HtKYwbncE5DS82tOl.jpg" },
];

const LATEST_NEWS = [
  { id: 101, title: "The Last of Us 2. Sezon Çekimleri Tamamlandı", category: "Dizi", time: "2 saat önce" },
  { id: 102, title: "Christopher Nolan'ın Yeni Projesi Belli Oldu", category: "Sinema", time: "4 saat önce" },
  { id: 103, title: "Netflix, Türkiye Yapımı 3 Yeni Dizi Duyurdu", category: "Yerli", time: "6 saat önce" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans">
      
      {/* 1. CINEMATIC HERO SLIDER */}
      <section className="relative w-full h-[85vh] overflow-hidden group">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image 
                src={slide.image} 
                alt={slide.title} 
                fill 
                className="object-cover"
                priority={index === 0}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-black/30 dark:from-cinesos-dark dark:via-transparent dark:to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 via-gray-50/20 to-transparent dark:from-cinesos-dark/90 dark:via-cinesos-dark/20 dark:to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full container mx-auto px-4 md:px-6 pb-24 md:pb-32 flex flex-col justify-end h-full">
                <div className="max-w-2xl animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-cinesos-yellow text-black text-xs font-black px-2 py-1 rounded uppercase tracking-wider">
                            Günün Önerisi
                        </span>
                        <div className="flex items-center gap-1 text-white text-sm font-bold shadow-sm">
                            <Star className="w-4 h-4 text-cinesos-yellow fill-cinesos-yellow" />
                            {slide.rating}
                        </div>
                        <span className="text-white/80 text-sm font-medium">{slide.year} • {slide.type}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-none mb-4 drop-shadow-lg">
                        {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-700 dark:text-gray-200 line-clamp-2 md:line-clamp-3 mb-8 font-medium max-w-xl leading-relaxed">
                        {slide.description}
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <Link href={slide.link} className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition shadow-xl">
                            <Play className="w-5 h-5 fill-current" />
                            <span>Hemen İzle</span>
                        </Link>
                        <Link href={slide.link} className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-slate-900 dark:text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/30 transition">
                            <Info className="w-5 h-5" />
                            <span>Detaylar</span>
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-12 right-8 z-20 flex gap-2">
            {HERO_SLIDES.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                    i === currentSlide ? "w-8 bg-cinesos-yellow" : "w-2 bg-white/50 hover:bg-white"
                    }`}
                />
            ))}
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 -mt-12">
        
        {/* Hızlı Erişim & Arama Teaser */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Ne izleyeceğine karar veremedin mi?
                </h3>
                <p className="text-slate-600 dark:text-gray-400">
                    Gelişmiş arama motorumuz ile moduna, platformuna ve zevkine en uygun içeriği saniyeler içinde bul.
                </p>
            </div>
            <Link href="/ara" className="w-full md:w-auto flex items-center justify-center gap-3 bg-cinesos-yellow text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition shadow-lg shadow-cinesos-yellow/20 group">
                <Search className="w-5 h-5" />
                <span>Gelişmiş Arama'yı Dene</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* Bölüm: Popüler Filmler */}
        <div className="mb-12">
            <ContentRow title="Haftanın Popüler Filmleri" items={TRENDING_MOVIES} />
        </div>

        {/* Bölüm: Popüler Diziler */}
        <div className="mb-16">
            <ContentRow title="Haftanın Popüler Dizileri" items={TRENDING_SERIES} />
        </div>

        {/* İkili Grid: Listeler ve Haberler */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            
            {/* Popüler Listeler */}
            <div className="bg-gray-100 dark:bg-white/5 rounded-3xl p-8 border border-gray-200 dark:border-white/5">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <List className="w-6 h-6 text-cinesos-yellow" />
                        Editörün Seçimi Listeler
                    </h3>
                    <Link href="/listeler" className="text-sm font-bold text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">Tümü</Link>
                </div>
                <div className="space-y-4">
                    {POPULAR_LISTS.map((list) => (
                        <Link key={list.id} href={`/listeler/${list.id}`} className="group flex items-center gap-4 bg-white dark:bg-black/20 p-3 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/5 shadow-sm">
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                <Image src={list.cover} alt={list.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-cinesos-yellow transition-colors line-clamp-1">{list.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-gray-400 mb-2">Hazırlayan: {list.user}</p>
                                <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                                    <span>{list.items} Film</span>
                                    <span>{list.likes} Beğeni</span>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-300 dark:text-gray-600 group-hover:text-cinesos-yellow" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Gündem Özeti */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Flame className="w-6 h-6 text-red-500" />
                            Gündemden Başlıklar
                        </h3>
                        <Link href="/gundem" className="text-sm font-bold text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">Tümü</Link>
                    </div>
                    <div className="space-y-6">
                        {LATEST_NEWS.map((news, i) => (
                            <Link key={news.id} href={`/gundem/${news.category.toLowerCase()}/${news.id}`} className="block group">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl font-black text-slate-200 dark:text-white/10 group-hover:text-cinesos-yellow transition-colors leading-none">0{i+1}</span>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-bold uppercase bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-gray-300 px-2 py-0.5 rounded">
                                                {news.category}
                                            </span>
                                            <span className="text-xs text-slate-400">{news.time}</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cinesos-yellow transition-colors">
                                            {news.title}
                                        </h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Link href="/gundem" className="mt-8 block w-full py-3 bg-slate-50 dark:bg-white/5 text-center text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition border border-slate-200 dark:border-white/5">
                        Tüm Haberleri Oku
                    </Link>
                </div>
            </div>

        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cinesos-blue to-black p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-cinesos-yellow/20 blur-[100px] rounded-full group-hover:bg-cinesos-yellow/30 transition-colors duration-700" />
            
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                    Sinefil Kimliğini <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinesos-yellow to-orange-500">Oluştur.</span>
                </h2>
                <p className="text-lg text-indigo-100 mb-8">
                    İzlediklerini kaydet, listeler oluştur, arkadaşlarınla paylaş ve yapay zeka destekli öneriler al.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link href="/kayit" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition shadow-lg transform hover:scale-105 active:scale-95">
                        Ücretsiz Kayıt Ol
                    </Link>
                    <Link href="/giris" className="px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition backdrop-blur-md">
                        Giriş Yap
                    </Link>
                </div>
            </div>
            
            <div className="relative z-10 hidden md:block w-64 h-64 flex-shrink-0">
                {/* 3D veya İllüstrasyon Gelebilir, şimdilik dekoratif */}
                <div className="w-full h-full bg-gradient-to-tr from-cinesos-yellow to-orange-600 rounded-full blur-3xl opacity-20 animate-pulse" />
            </div>
        </div>

      </div>
    </div>
  );
}