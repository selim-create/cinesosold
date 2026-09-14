"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  TrendingUp, Calendar, Clock, ChevronRight, 
  Flame, Hash, MessageSquare, Share2 
} from "lucide-react";

// Slug oluşturucu yardımcı fonksiyon
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Boşlukları tireye çevir
    .replace(/[ğĞ]/g, 'g')          // Türkçe karakterleri düzelt
    .replace(/[üÜ]/g, 'u')
    .replace(/[şŞ]/g, 's')
    .replace(/[ıİ]/g, 'i')
    .replace(/[öÖ]/g, 'o')
    .replace(/[çÇ]/g, 'c');
};

// Mock Data: Manşet Haberleri
const HEADLINES = [
  {
    id: 1,
    title: "Marvel Sinematik Evreni'nde Yeni Dönem: Kang Hanedanlığı İptal mi?",
    excerpt: "Stüdyo içinden sızan bilgilere göre Marvel, Phase 6 planlarını tamamen değiştiriyor. İşte yeni teoriler.",
    image: "https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vREc0547TJqqQ.jpg", // Dune backdrop placeholder
    category: "Özel Haber",
    author: "Emre Çelik",
    date: "10 dk önce"
  },
  {
    id: 2,
    title: "Christopher Nolan'ın Yeni Projesi Belli Oldu: Casusluk Gerilimi Geliyor",
    excerpt: "Oppenheimer'ın başarısının ardından ünlü yönetmen, köklerine dönerek bir casusluk filmi için hazırlıklara başladı.",
    image: "https://image.tmdb.org/t/p/original/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg", // Blade Runner placeholder
    category: "Sinema",
    author: "Zeynep K.",
    date: "1 saat önce"
  }
];

// Mock Data: Akış (Haberler & Tartışmalar)
const AGENDA_ITEMS = [
  {
    id: 101,
    type: "news",
    title: "The Last of Us 2. Sezon Çekimleri Tamamlandı",
    image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg",
    content: "Pedro Pascal ve Bella Ramsey setten ayrıldı. Post-prodüksiyon süreci resmen başladı. HBO, vizyon tarihi için 2025 başını işaret ediyor.",
    interactions: { likes: 1240, comments: 345 },
    tags: ["HBO", "The Last of Us", "Dizi"],
    category: "Dizi",
    time: "2 saat önce"
  },
  {
    id: 102,
    type: "discussion",
    title: "Haftanın Tartışması: Süper Kahraman Yorgunluğu Gerçek mi?",
    image: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg", // Civil War placeholder
    content: "Son dönemde gişede yaşanan düşüşler ve eleştirmen notları, izleyicinin süper kahraman filmlerine doyduğunu mu gösteriyor? Gelin tartışalım.",
    interactions: { likes: 856, comments: 1204 },
    tags: ["Marvel", "DC", "Sinema"],
    category: "Tartışma",
    time: "4 saat önce"
  },
  {
    id: 103,
    type: "news",
    title: "Netflix, Türkiye Yapımı 3 Yeni Dizi Duyurdu",
    image: "https://image.tmdb.org/t/p/w500/9gk7admal4zlE013GXCYRnRCqOd.jpg", // Inception placeholder
    content: "Berkun Oya'nın yeni projesi dahil olmak üzere, önümüzdeki yıl yayınlanacak yerli yapımlar tanıtıldı.",
    interactions: { likes: 540, comments: 89 },
    tags: ["Netflix", "Yerli Dizi", "Haber"],
    category: "Yerli Yapım",
    time: "6 saat önce"
  }
];

// Mock Data: Vizyon Takvimi
const UPCOMING = [
  { id: "dune-2", title: "Dune: Part Two", date: "1 Mart", type: "Film" },
  { id: "fallout", title: "Fallout", date: "12 Nisan", type: "Dizi" },
  { id: "furiosa", title: "Furiosa: Mad Max Saga", date: "24 Mayıs", type: "Film" },
  { id: "house-of-the-dragon", title: "House of the Dragon S2", date: "Haziran", type: "Dizi" },
];

export default function GundemPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cinesos-yellow rounded-xl shadow-lg shadow-cinesos-yellow/20">
                <Flame className="w-8 h-8 text-black" />
            </div>
            <div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    Gündem
                </h1>
                <p className="text-slate-600 dark:text-gray-300">
                    Sinema dünyasında bugün neler oluyor? En sıcak haberler ve tartışmalar.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL KOLON: MANŞET & AKIŞ (8/12) */}
            <div className="lg:col-span-8 space-y-12">
                
                {/* Manşet Slider (Basit Grid) */}
                <section>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-red-500" />
                        Öne Çıkanlar
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {HEADLINES.map((news) => (
                            <Link 
                                key={news.id} 
                                href={`/gundem/${slugify(news.category)}/${news.id}`} 
                                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="bg-cinesos-yellow text-black text-xs font-bold px-2 py-1 rounded mb-3 inline-block shadow-md">
                                        {news.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-cinesos-yellow transition-colors line-clamp-2">
                                        {news.title}
                                    </h3>
                                    <div className="flex items-center gap-3 text-xs text-gray-300">
                                        <span>{news.author}</span>
                                        <span>•</span>
                                        <span>{news.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Haber Akışı */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-500" />
                            Son Dakika
                        </h2>
                    </div>
                    
                    <div className="space-y-6">
                        {AGENDA_ITEMS.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/50 transition-colors shadow-sm group">
                                <Link 
                                    href={`/gundem/${slugify(item.category)}/${item.id}`} 
                                    className="relative w-full md:w-48 aspect-video rounded-xl overflow-hidden flex-shrink-0 bg-gray-200 shadow-md"
                                >
                                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </Link>
                                
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            {item.tags.map((tag, i) => (
                                                <Link 
                                                    key={i} 
                                                    href={`/etiket/${slugify(tag)}`}
                                                    className="text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-cinesos-yellow transition cursor-pointer"
                                                >
                                                    #{tag}
                                                </Link>
                                            ))}
                                            <span className="text-xs text-slate-400 ml-auto">{item.time}</span>
                                        </div>
                                        <Link 
                                            href={`/gundem/${slugify(item.category)}/${item.id}`}
                                            className="block"
                                        >
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-cinesos-yellow transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-gray-300 line-clamp-2">
                                                {item.content}
                                            </p>
                                        </Link>
                                    </div>
                                    
                                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                                        <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-red-500 transition group/action">
                                            <Flame className="w-4 h-4 group-hover/action:scale-110 transition-transform" /> {item.interactions.likes}
                                        </button>
                                        <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-blue-500 transition group/action">
                                            <MessageSquare className="w-4 h-4 group-hover/action:scale-110 transition-transform" /> {item.interactions.comments}
                                        </button>
                                        <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-green-500 transition ml-auto group/action">
                                            <Share2 className="w-4 h-4 group-hover/action:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* SAĞ KOLON: SIDEBAR (4/12) */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Vizyon Takvimi */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 sticky top-24 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-cinesos-yellow" />
                        Yakında Gelecekler
                    </h3>
                    <div className="space-y-4">
                        {UPCOMING.map((item, i) => (
                            <Link 
                                key={i} 
                                href={`/${item.type === 'Film' ? 'film' : 'dizi'}/${item.id}`} 
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="flex flex-col items-center justify-center w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-xl text-slate-900 dark:text-white font-bold border border-gray-200 dark:border-white/5 group-hover:border-cinesos-yellow transition-colors shadow-sm">
                                    <span className="text-xs uppercase opacity-70">{item.date.split(" ")[1]}</span>
                                    <span className="text-lg leading-none">{item.date.split(" ")[0]}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-cinesos-yellow transition-colors line-clamp-1">
                                        {item.title}
                                    </h4>
                                    <span className="text-xs text-slate-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full mt-1 inline-block">
                                        {item.type}
                                    </span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-cinesos-yellow transition-all" />
                            </Link>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-slate-600 dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition hover:shadow-md">
                        Tam Takvimi Gör
                    </button>
                </div>

                {/* Trend Etiketler */}
                <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 border border-white/10 text-white relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 blur-[80px] rounded-full" />
                    <h3 className="font-bold text-lg mb-4 relative z-10 flex items-center gap-2">
                        <Hash className="w-5 h-5 text-pink-400" />
                        Konuşulanlar
                    </h3>
                    <div className="flex flex-wrap gap-2 relative z-10">
                        {["#DuneMessiah", "#OscarPredictions", "#SupermanLegacy", "#QuentinTarantino", "#YeniSezon"].map((tag, i) => (
                            <Link 
                                key={i} 
                                href={`/etiket/${slugify(tag.replace('#', ''))}`} 
                                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium transition cursor-pointer border border-white/10 hover:border-cinesos-yellow hover:text-cinesos-yellow"
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}