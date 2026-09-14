"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, Calendar, User, 
  Flame, ArrowRight, Tag 
} from "lucide-react";

// Mock Data: Kategoriye Özel Haberler
const CATEGORY_NEWS = [
  {
    id: 101,
    title: "The Last of Us 2. Sezon Çekimleri Tamamlandı: İşte İlk Detaylar",
    excerpt: "Pedro Pascal ve Bella Ramsey setten ayrıldı. Post-prodüksiyon süreci resmen başladı. HBO, vizyon tarihi için 2025 başını işaret ediyor.",
    image: "https://image.tmdb.org/t/p/w780/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg",
    author: "Zeynep K.",
    date: "24 Ocak 2026",
    readTime: "4 dk okuma",
    tags: ["HBO", "Dizi"]
  },
  {
    id: 102,
    title: "Netflix'in Yeni Bilim Kurgu Dizisi '3 Cisim Problemi' Rekor Kırdı",
    excerpt: "D.B. Weiss ve David Benioff imzalı yapım, ilk haftasında 100 milyon saat izlenmeyi geçti.",
    image: "https://image.tmdb.org/t/p/w780/56v2KjBlU4XaOv9rVYkJu64MILb.jpg", // 3 Body Problem placeholder
    author: "Emre Çelik",
    date: "22 Ocak 2026",
    readTime: "3 dk okuma",
    tags: ["Netflix", "Sci-Fi"]
  },
  {
    id: 103,
    title: "House of the Dragon 2. Sezon Fragmanı Yayınlandı: Ejderhaların Dansı Başlıyor",
    excerpt: "Westeros tarihinin en kanlı iç savaşını konu alan dizinin yeni sezonundan nefes kesen görüntüler.",
    image: "https://image.tmdb.org/t/p/w780/z2yahl2uefxDCl0nogcRBstwruJ.jpg", // HOTD placeholder
    author: "Caner Y.",
    date: "20 Ocak 2026",
    readTime: "5 dk okuma",
    tags: ["HBO", "Fantastik"]
  },
  {
    id: 104,
    title: "Stranger Things Final Sezonu Hakkında Bildiğimiz Her Şey",
    excerpt: "Duffer Kardeşler, Hawkins kasabasının sonunu nasıl getirecek? Oyuncu kadrosundan ipuçları.",
    image: "https://image.tmdb.org/t/p/w780/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", 
    author: "Selin Demir",
    date: "18 Ocak 2026",
    readTime: "6 dk okuma",
    tags: ["Netflix", "Final"]
  },
  {
    id: 105,
    title: "Squid Game 2. Sezon: Yeni Oyunlar, Yeni Yüzler",
    excerpt: "Gi-hun intikam için geri dönüyor. İşte oyuncu kadrosuna katılan yeni isimler ve teoriler.",
    image: "https://image.tmdb.org/t/p/w780/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    author: "Zeynep K.",
    date: "15 Ocak 2026",
    readTime: "4 dk okuma",
    tags: ["Netflix", "Kore"]
  }
];

// Mock Data: Popüler (Sidebar)
const POPULAR_NEWS = [
  { id: 201, title: "Christopher Nolan'ın Yeni Filmi Belli Oldu" },
  { id: 202, title: "Marvel'da Kang Krizi: Yeni Kötü Kim Olacak?" },
  { id: 203, title: "Joker: Folie à Deux Erken Gösterim Yorumları" },
];

export default function AgendaCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Slug'ı başlığa çevir (örn: ozel-haber -> Özel Haber)
  const formatTitle = (str: string) => {
    return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  
  const title = formatTitle(slug);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      
      {/* 1. HEADER */}
      <div className="bg-white dark:bg-white/5 border-b border-gray-200 dark:border-white/5 pb-12 pt-8 mb-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 mb-4 font-medium">
                        <Link href="/" className="hover:text-cinesos-yellow transition">Anasayfa</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/gundem" className="hover:text-cinesos-yellow transition">Gündem</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 dark:text-white">{title}</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                        {title}
                    </h1>
                    <p className="text-slate-600 dark:text-gray-300 max-w-2xl text-lg">
                        Sinema ve dizi dünyasından en güncel {title.toLowerCase()} gelişmeleri, analizler ve özel dosyalar.
                    </p>
                </div>

                {/* Kategori Etiketleri (Opsiyonel Alt Filtreler) */}
                <div className="flex flex-wrap gap-2">
                    {["Röportaj", "İnceleme", "Duyuru", "Söylenti"].map((sub, i) => (
                        <button key={i} className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/10 text-slate-700 dark:text-white text-sm font-bold hover:bg-cinesos-yellow hover:text-black transition-colors">
                            {sub}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL KOLON: HABER LİSTESİ (8/12) */}
            <div className="lg:col-span-8 space-y-8">
                {CATEGORY_NEWS.map((news) => (
                    <article key={news.id} className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/50 transition-all shadow-sm hover:shadow-md">
                        {/* Görsel */}
                        <Link href={`/gundem/${slug}/${news.id}`} className="relative w-full md:w-64 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                            <Image 
                                src={news.image} 
                                alt={news.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                        </Link>
                        
                        {/* İçerik */}
                        <div className="flex flex-col justify-between flex-1 py-1">
                            <div>
                                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-gray-400 mb-3">
                                    <span className="text-cinesos-yellow font-bold uppercase tracking-wider">{news.tags[0]}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {news.date}</span>
                                </div>
                                
                                <Link href={`/gundem/${slug}/${news.id}`}>
                                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-cinesos-yellow transition-colors">
                                        {news.title}
                                    </h2>
                                </Link>
                                
                                <p className="text-slate-600 dark:text-gray-300 text-sm line-clamp-2 leading-relaxed mb-4">
                                    {news.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-4 mt-auto">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">
                                        <User className="w-3 h-3 text-slate-500 dark:text-gray-400" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 dark:text-gray-300">{news.author}</span>
                                    <span className="text-xs text-slate-400">• {news.readTime}</span>
                                </div>
                                <Link href={`/gundem/${slug}/${news.id}`} className="flex items-center gap-1 text-xs font-bold text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">
                                    Oku <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}

                {/* Pagination */}
                <div className="pt-8 flex justify-center">
                    <button className="px-8 py-3 rounded-full border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition shadow-sm">
                        Daha Fazla Yükle
                    </button>
                </div>
            </div>

            {/* SAĞ KOLON: SIDEBAR (4/12) */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Popüler Haberler */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm sticky top-24">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <Flame className="w-5 h-5 text-red-500" />
                        Bu Kategoride Popüler
                    </h3>
                    <div className="space-y-5">
                        {POPULAR_NEWS.map((item, i) => (
                            <Link key={item.id} href="#" className="flex gap-4 group">
                                <span className="text-3xl font-black text-gray-200 dark:text-white/10 group-hover:text-cinesos-yellow transition-colors leading-none">
                                    {i + 1}
                                </span>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug group-hover:text-cinesos-yellow transition-colors line-clamp-2">
                                        {item.title}
                                    </h4>
                                    <span className="text-xs text-slate-500 mt-1 block">2.5k okunma</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Reklam / Promo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-center p-6 group cursor-pointer">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    <div className="relative z-10">
                        <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">CINESOS PREMIUM</span>
                        <h3 className="text-2xl font-black text-white mb-2">Sınırsız Haber, Sıfır Reklam.</h3>
                        <p className="text-indigo-100 text-xs mb-4">Gündemi reklamsız takip et, özel dosyalara eriş.</p>
                        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                            Abone Ol
                        </button>
                    </div>
                </div>

                {/* Etiket Bulutu */}
                <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Tag className="w-4 h-4 text-cinesos-yellow" />
                        İlgili Etiketler
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Netflix", "HBO", "Disney+", "Marvel", "DC", "Yerli Dizi", "Festival", "Ödül Töreni"].map((tag, i) => (
                            <Link key={i} href={`/etiket/${tag.toLowerCase()}`} className="px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-white/5 text-xs font-medium text-slate-700 dark:text-gray-300 hover:bg-cinesos-yellow hover:text-black dark:hover:bg-cinesos-yellow dark:hover:text-black transition-colors">
                                #{tag}
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