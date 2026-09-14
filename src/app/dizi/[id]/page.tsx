"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, Plus, Share2, Clock, Calendar, 
  TrendingUp, ChevronRight, Star, ThumbsUp, 
  MessageSquare, Newspaper, Image as ImageIcon, Video, User,
  Eye, Check, MonitorPlay, Layers, ListVideo
} from "lucide-react";
import { SERIES_DETAIL } from "@/lib/seriesDetailData";
import WhereToWatch from "@/components/movie/WhereToWatch";
import CastList from "@/components/movie/CastList";
import ContentRow from "@/components/discover/ContentRow";
import { DISCOVER_ROWS } from "@/lib/discoverData";

export default function SeriesDetailPage() {
  const series = SERIES_DETAIL;
  const [isWatched, setIsWatched] = useState(false);

  // Cinesos Puan Rengi Hesaplayıcı
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-emerald-500 shadow-emerald-500/30";
    if (score >= 60) return "bg-yellow-500 shadow-yellow-500/30";
    return "bg-red-500 shadow-red-500/30";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans">
      
      {/* 1. HERO SECTION (Film sayfasıyla aynı yapı) */}
      <div className="relative w-full h-[85vh] lg:h-[80vh] group">
        {/* Backdrop Image */}
        <div className="absolute inset-0 z-0">
             <Image 
                src={series.backdrop} 
                alt={series.title} 
                fill 
                className="object-cover"
                priority
             />
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-cinesos-dark dark:via-cinesos-dark/90 dark:to-transparent opacity-100" />
             <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 via-gray-50/40 to-transparent dark:from-cinesos-dark dark:via-cinesos-dark/60 dark:to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full container mx-auto px-4 md:px-6 pb-8 md:pb-12 flex flex-col md:flex-row items-end gap-8 z-10">
            
            {/* Poster */}
            <div className="hidden md:block relative w-72 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 flex-shrink-0 group-hover:scale-[1.02] transition-transform duration-500">
                <Image src={series.poster} alt={series.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-cinesos-yellow text-black text-xs font-black px-2 py-1 rounded shadow-md uppercase">
                    {series.status}
                </div>
            </div>

            {/* Bilgiler */}
            <div className="flex-1 space-y-6">
                
                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium animate-fade-in-up">
                     <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-500 border border-rose-500/30 backdrop-blur-md">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-bold">Trend #3</span>
                    </div>

                    {series.genres.map((g, i) => (
                        <Link key={i} href={`/tur/${g.toLowerCase()}`} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 hover:bg-cinesos-yellow hover:text-black dark:hover:bg-cinesos-yellow dark:hover:text-black backdrop-blur-md text-slate-700 dark:text-gray-200 border border-black/5 dark:border-white/10 transition-colors">
                            {g}
                        </Link>
                    ))}
                    {/* Yıl Linki (Tıklanabilir) */}
                    <Link href={`/yil/${series.firstAirDate}`} className="flex items-center gap-1 text-slate-600 dark:text-gray-400 hover:text-cinesos-yellow transition ml-1">
                        <Calendar className="w-4 h-4" /> {series.firstAirDate}
                    </Link>
                    <span className="flex items-center gap-1 text-slate-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" /> {series.runtime}
                    </span>
                    {/* Diziye Özel: Sezon Sayısı */}
                    <span className="flex items-center gap-1 text-slate-600 dark:text-gray-400 border-l border-slate-300 dark:border-white/20 pl-3 ml-1">
                        <Layers className="w-4 h-4" /> {series.totalSeasons} Sezon
                    </span>
                </div>

                {/* Başlık */}
                <div>
                     <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-3 drop-shadow-xl">
                        {series.title}
                     </h1>
                     
                     {/* Hızlı Platform Erişimi */}
                     <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider bg-white/20 dark:bg-black/20 px-2 py-1 rounded backdrop-blur-md">Hemen İzle:</span>
                        <div className="flex gap-2">
                            {series.platforms.map((p, i) => (
                                <Link 
                                    key={i} 
                                    href={p.url} 
                                    className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/20 hover:border-cinesos-yellow hover:scale-110 transition shadow-lg group/platform"
                                    title={p.name}
                                >
                                    <div className="absolute inset-0 bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">
                                        {p.name.substring(0, 3).toUpperCase()}
                                    </div>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover/platform:opacity-100 transition pointer-events-none whitespace-nowrap">
                                        {p.name}'da İzle
                                    </div>
                                </Link>
                            ))}
                        </div>
                     </div>

                     <p className="text-xl md:text-2xl text-slate-700 dark:text-gray-200 font-light italic opacity-90 max-w-3xl">
                        "{series.tagline}"
                     </p>
                </div>

                {/* Puanlar, Butonlar ve İzleyen/Takipçi Sayacı */}
                <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8 pt-2">
                    
                    {/* Skor Kartları */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 group/score cursor-help relative">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg ${getScoreColor(series.cinesosScore)} transform group-hover/score:scale-110 transition-transform`}>
                                <span className="text-2xl font-black">{series.cinesosScore}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">Cinesos</span>
                                <span className="text-xs text-slate-500 dark:text-gray-400">Puanı</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 border-l border-slate-300 dark:border-white/10 pl-6">
                             <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                             <div className="flex flex-col">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xl font-bold text-slate-900 dark:text-white">{series.rating}</span>
                                    <span className="text-xs text-slate-400">/10</span>
                                </div>
                                <span className="text-xs text-slate-500 dark:text-gray-400">IMDb</span>
                             </div>
                        </div>
                    </div>

                    {/* Buton Grubu */}
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="flex items-center gap-2 bg-cinesos-yellow text-black px-8 py-3.5 rounded-full font-bold hover:bg-yellow-400 hover:shadow-[0_0_20px_-5px_rgba(250,204,21,0.5)] transition transform hover:scale-105 active:scale-95 shadow-xl">
                            <Play className="w-5 h-5 fill-black" />
                            <span>Son Bölüm</span>
                        </button>
                        
                        <button className="flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 px-6 py-3.5 rounded-full font-bold hover:bg-white dark:hover:bg-white/20 transition">
                            <Plus className="w-5 h-5" />
                            <span>Liste</span>
                        </button>

                        {/* Takipçi / İzledim Butonu */}
                        <div className="flex items-center gap-3 bg-white/80 dark:bg-black/30 backdrop-blur-md rounded-full p-1.5 border border-slate-200 dark:border-white/10 pl-5">
                            <div className="flex flex-col items-end leading-tight mr-1">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">42.5k</span>
                                <span className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-wide">Takipçi</span>
                            </div>
                            <button 
                                onClick={() => setIsWatched(!isWatched)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all shadow-sm ${
                                    isWatched 
                                    ? "bg-emerald-500 text-white shadow-emerald-500/30" 
                                    : "bg-white dark:bg-white/10 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20"
                                }`}
                            >
                                {isWatched ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                <span className="text-xs">{isWatched ? "Takipte" : "Takip Et"}</span>
                            </button>
                        </div>
                        
                        <button className="p-3.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/20 transition text-slate-900 dark:text-white group relative">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 2. TAB NAVIGATION (Diziye Özel Tablar) */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-cinesos-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 mb-8">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                <button className="py-4 border-b-2 border-cinesos-yellow text-cinesos-yellow font-bold text-sm whitespace-nowrap">
                    Genel Bakış
                </button>
                <Link href={`/dizi/${series.id}/bolumler`} className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2">
                    <ListVideo className="w-4 h-4" />
                    Bölümler ({series.totalEpisodes})
                </Link>
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

      {/* 3. MAIN CONTENT GRID */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL KOLON (8/12) */}
            <div className="lg:col-span-8 space-y-12">
                
                {/* Puanlama ve Değerlendirme Alanı (Film sayfasındaki gibi) */}
                <section className="bg-gradient-to-r from-gray-100 to-white dark:from-white/5 dark:to-transparent rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cinesos-yellow/10 blur-[80px] rounded-full group-hover:bg-cinesos-yellow/20 transition-colors duration-500" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Bu diziyi nasıl buldun?</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-300">
                                Cinesos topluluğuna katkıda bulunmak için puan ver veya detaylı inceleme yaz.
                            </p>
                        </div>
                        
                        <div className="flex-1 w-full md:w-auto">
                            <div className="relative h-3 bg-gray-200 dark:bg-white/10 rounded-full mb-6 cursor-pointer group/slider">
                                <div className="absolute top-0 left-0 h-full w-[88%] bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                <div className="absolute top-1/2 -translate-y-1/2 left-[88%] w-8 h-8 bg-white border-4 border-emerald-500 rounded-full shadow-lg transform scale-100 group-hover/slider:scale-110 transition-transform flex items-center justify-center z-20">
                                    <span className="text-[10px] font-black text-emerald-700">88</span>
                                </div>
                                <div className="absolute -bottom-6 left-0 text-[10px] text-gray-400 font-bold uppercase">Berbat</div>
                                <div className="absolute -bottom-6 right-0 text-[10px] text-gray-400 font-bold uppercase">Efsane</div>
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-1 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm shadow-lg">
                                    <Star className="w-4 h-4 fill-current" />
                                    Puanla
                                </button>
                                <button className="flex-1 py-3 rounded-xl bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20 transition flex items-center justify-center gap-2 text-sm">
                                    <MessageSquare className="w-4 h-4" />
                                    İncele
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hikaye */}
                <section>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        Hikaye
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-8">
                        {series.overview}
                    </p>

                    {/* Diziye Özel: Son Sezon Kartı */}
                    <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 flex gap-6 items-start">
                        <div className="relative w-32 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 shadow-lg hidden sm:block">
                            <Image src={series.seasons[0].poster} alt={series.seasons[0].name} fill className="object-cover" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{series.seasons[0].name}</h4>
                            <p className="text-sm text-cinesos-yellow font-bold mb-3">{series.seasons[0].airDate} • {series.seasons[0].episodeCount} Bölüm</p>
                            <p className="text-sm text-slate-600 dark:text-gray-400 line-clamp-3 mb-4">
                                {series.seasons[0].overview}
                            </p>
                            <Link href={`/dizi/${series.id}/bolumler`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-cinesos-yellow underline">
                                Tüm Bölümleri Gör
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Oyuncular */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Oyuncular</h3>
                        <Link href={`/dizi/${series.id}/kadro`} className="text-sm font-semibold text-cinesos-yellow hover:underline flex items-center">
                            Tüm Kadro <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <CastList cast={series.cast} />
                </section>

                {/* Haberler */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Newspaper className="w-5 h-5 text-cinesos-yellow" />
                            İlgili Haberler
                        </h3>
                         <Link href={`/dizi/${series.id}/haberler`} className="text-sm font-semibold text-slate-500 dark:text-gray-400 hover:text-white">Tümü</Link>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[1, 2].map((news) => (
                            <Link key={news} href="#" className="group flex gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/50 transition-colors">
                                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image src={series.backdrop} fill className="object-cover group-hover:scale-110 transition-transform" alt="News" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-xs text-cinesos-yellow font-bold mb-1">2. SEZON</span>
                                    <h4 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-cinesos-yellow transition-colors line-clamp-2">
                                        2. Sezon çekimleri başladı! İşte setten ilk görüntüler.
                                    </h4>
                                    <span className="text-xs text-gray-500 mt-2">2 gün önce</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Medya */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                         <h3 className="text-xl font-bold text-slate-900 dark:text-white">Medya</h3>
                         <div className="flex gap-4 text-sm font-medium">
                            <Link href="#" className="flex items-center gap-1 text-slate-900 dark:text-white"><Video className="w-4 h-4" /> 4 Fragman</Link>
                            <Link href="#" className="flex items-center gap-1 text-slate-500 dark:text-gray-400 hover:text-white"><ImageIcon className="w-4 h-4" /> 28 Görsel</Link>
                         </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-slate-200 dark:bg-white/5 hover:opacity-80 transition cursor-pointer group">
                                <Image 
                                    src={`https://image.tmdb.org/t/p/w500/${i === 0 ? "8rpDcsfLJypbO6vREc0547TJqqQ.jpg" : i === 1 ? "1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" : "xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"}`}
                                    alt="Scene"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                                        <Play className="w-5 h-5 text-white fill-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* SAĞ KOLON (4/12) */}
            <div className="lg:col-span-4 space-y-8">
                
                <WhereToWatch platforms={series.platforms} />

                <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5">
                    <div className="p-4 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/5">
                         <h3 className="font-bold text-slate-900 dark:text-white">Dizi Künyesi</h3>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                        <div>
                            <span className="block text-xs text-gray-500 mb-0.5">Yayın Ağı</span>
                            <span className="font-medium text-slate-900 dark:text-white">{series.facts.network}</span>
                        </div>
                         <div>
                            <span className="block text-xs text-gray-500 mb-0.5">Ülke</span>
                            <span className="font-medium text-slate-900 dark:text-white">{series.facts.country}</span>
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 mb-0.5">Tür</span>
                            <span className="font-medium text-slate-900 dark:text-white">{series.facts.type}</span>
                        </div>
                         <div>
                            <span className="block text-xs text-gray-500 mb-0.5">Orijinal Dil</span>
                            <span className="font-medium text-slate-900 dark:text-white">{series.facts.originalLanguage}</span>
                        </div>
                        <div className="col-span-2 border-t border-gray-200 dark:border-white/5 pt-3 mt-1">
                             <span className="block text-xs text-gray-500 mb-1">Yaratıcı</span>
                             <Link href="#" className="font-medium text-cinesos-yellow hover:underline block">{series.creator.name}</Link>
                        </div>
                    </div>
                </div>

                <div>
                     <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <User className="w-4 h-4 text-cinesos-yellow" />
                        Anahtar Kelimeler
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {["Kıyamet Sonrası", "Zombi", "Hayatta Kalma", "Yolculuk", "Baba Kız İlişkisi"].map((tag, i) => (
                            <Link key={i} href={`/etiket/${tag.toLowerCase()}`} className="px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-white/5 text-xs font-medium text-slate-700 dark:text-gray-300 hover:bg-cinesos-yellow hover:text-black dark:hover:bg-cinesos-yellow dark:hover:text-black transition-colors">
                                #{tag}
                            </Link>
                        ))}
                     </div>
                </div>
            </div>

        </div>
      </div>

      {/* 4. BENZER DİZİLER */}
      <div className="mt-16 pt-12 border-t border-gray-200 dark:border-white/5 bg-gray-100/50 dark:bg-black/20">
        <div className="container mx-auto px-0">
            <ContentRow title="Bunu Sevenler Şunları da İzledi" items={DISCOVER_ROWS[0].items} />
        </div>
      </div>

    </div>
  );
}