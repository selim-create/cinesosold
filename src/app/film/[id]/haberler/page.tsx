import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, User, TrendingUp, Tag } from "lucide-react";

// Mock Data
const NEWS_DATA = [
  {
    id: 1,
    title: "Dune: Part Three İçin Vizyon Tarihi Belli Oldu! Denis Villeneuve Geri Dönüyor",
    excerpt: "Legendary Pictures, serinin üçüncü filmi Dune: Messiah için resmi onay verdi. Çekimlerin 2026'da başlaması bekleniyor.",
    image: "https://image.tmdb.org/t/p/w780/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    author: "Emre Çelik",
    date: "24 Ocak 2026",
    category: "Özel Haber"
  },
  {
    id: 2,
    title: "Hans Zimmer, Dune Müzikleriyle Bir Kez Daha Oscar'a Göz Kırpıyor",
    excerpt: "Efsanevi besteci, Part Two için yarattığı yeni ses paletiyle şimdiden eleştirmenlerin favorisi haline geldi.",
    image: "https://image.tmdb.org/t/p/w780/tpQnDeHY15szIXvpnhlprufz4d.jpg",
    author: "Sinema Günlüğü",
    date: "20 Ocak 2026",
    category: "Müzik"
  },
  {
    id: 3,
    title: "Zendaya ve Timothée Chalamet Set Anılarını Anlattı: 'Kum Fırtınasında Çekim Yapmak'",
    excerpt: "Ürdün çöllerinde geçen zorlu çekim süreci ve oyuncuların fiziksel dönüşümleri hakkında samimi açıklamalar.",
    image: "https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547TJqqQ.jpg",
    author: "Röportaj",
    date: "15 Ocak 2026",
    category: "Röportaj"
  }
];

export default function FilmNewsPage() {
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
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-cinesos-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 mb-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                <Link href="/film/dune-2" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Genel Bakış
                </Link>
                <Link href="/film/dune-2/kadro" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Kadro & Ekip
                </Link>
                <Link href="/film/dune-2/medya" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Medya (12)
                </Link>
                <button className="py-4 border-b-2 border-cinesos-yellow text-cinesos-yellow font-bold text-sm whitespace-nowrap">
                    Haberler (3)
                </button>
                <Link href="/film/dune-2/incelemeler" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    İncelemeler (45)
                </Link>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL KOLON: HABER LİSTESİ (8/12) */}
            <div className="lg:col-span-8 space-y-8">
                {NEWS_DATA.map((news) => (
                    <article key={news.id} className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-white/5 rounded-2xl p-4 md:p-6 border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/50 transition-all shadow-sm hover:shadow-md">
                        <div className="relative w-full md:w-64 h-48 md:h-auto rounded-xl overflow-hidden flex-shrink-0">
                            <Image 
                                src={news.image} 
                                alt={news.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute top-2 left-2 bg-cinesos-yellow text-black text-xs font-bold px-2 py-1 rounded shadow-md">
                                {news.category}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center flex-1">
                            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-gray-400 mb-2">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {news.date}</span>
                                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {news.author}</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-cinesos-yellow transition-colors cursor-pointer">
                                {news.title}
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-gray-300 line-clamp-2 mb-4">
                                {news.excerpt}
                            </p>
                            <Link href={`/haber/${news.id}`} className="text-sm font-bold text-cinesos-yellow hover:underline self-start">
                                Devamını Oku
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* SAĞ KOLON: SIDEBAR (4/12) */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Trend Konular */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-cinesos-yellow" />
                        Gündemdekiler
                    </h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <Link key={i} href="#" className="flex gap-3 group">
                                <span className="text-2xl font-black text-slate-200 dark:text-white/10 group-hover:text-cinesos-yellow transition-colors">0{i}</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-cinesos-yellow transition-colors line-clamp-2">
                                        Warner Bros. Yeni Vizyon Takvimini Açıkladı: Büyük Ertelemeler Var
                                    </h4>
                                    <span className="text-xs text-gray-500">2 saat önce</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Etiketler */}
                <div>
                     <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Tag className="w-4 h-4 text-cinesos-yellow" />
                        İlgili Konular
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {["Denis Villeneuve", "Frank Herbert", "Bilim Kurgu", "Oscar 2026", "IMAX"].map((tag, i) => (
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