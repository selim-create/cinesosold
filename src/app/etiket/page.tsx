import Link from "next/link";
import { Hash, TrendingUp, Sparkles, Zap, Heart, Ghost, Globe } from "lucide-react";

// Mock Data: Kategorize Edilmiş Etiketler
const TAG_CATEGORIES = [
  {
    title: "Trend Olanlar",
    icon: TrendingUp,
    tags: [
      { slug: "yapay-zeka", name: "Yapay Zeka", count: 120, color: "bg-blue-500" },
      { slug: "post-apokaliptik", name: "Post-Apokaliptik", count: 85, color: "bg-orange-500" },
      { slug: "super-kahraman", name: "Süper Kahraman", count: 240, color: "bg-red-600" },
      { slug: "oscar-2024", name: "Oscar 2024", count: 45, color: "bg-cinesos-yellow text-black" },
      { slug: "gercek-suc", name: "Gerçek Suç", count: 150, color: "bg-purple-600" },
    ]
  },
  {
    title: "Atmosfer & Mod",
    icon: Sparkles,
    tags: [
      { slug: "karanlik", name: "Karanlık", count: 320 },
      { slug: "feel-good", name: "İyi Hisset", count: 210 },
      { slug: "gerilimli", name: "Gerilimli", count: 180 },
      { slug: "nostaljik", name: "Nostaljik", count: 140 },
      { slug: "epik", name: "Epik", count: 95 },
      { slug: "surreal", name: "Sürreal", count: 60 },
    ]
  },
  {
    title: "Konular",
    icon: Hash,
    tags: [
      { slug: "uzay-yolculugu", name: "Uzay Yolculuğu", count: 110 },
      { slug: "zaman-yolculugu", name: "Zaman Yolculuğu", count: 90 },
      { slug: "lise-hayati", name: "Lise Hayatı", count: 300 },
      { slug: "seri-katil", name: "Seri Katil", count: 130 },
      { slug: "intikam", name: "İntikam", count: 220 },
      { slug: "yasak-ask", name: "Yasak Aşk", count: 175 },
      { slug: "savas", name: "Savaş", count: 200 },
      { slug: "teknoloji", name: "Teknoloji", count: 150 },
    ]
  }
];

export default function TagsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                Etiketleri Keşfet
            </h1>
            <p className="text-lg text-slate-600 dark:text-gray-300">
                Filmleri ve dizileri konularına, atmosferlerine ve spesifik temalarına göre bul.
            </p>
        </div>

        {/* 1. Kategori: Trend Olanlar (Büyük Kartlar) */}
        <div className="mb-16">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cinesos-yellow" />
                Popüler Etiketler
            </h3>
            <div className="flex flex-wrap gap-4">
                {TAG_CATEGORIES[0].tags.map((tag) => (
                    <Link 
                        key={tag.slug} 
                        href={`/etiket/${tag.slug}`}
                        className={`group relative px-6 py-8 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex-1 min-w-[150px] md:min-w-[200px] ${tag.color}`}
                    >
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        <div className="relative z-10 flex flex-col items-start justify-between h-full text-white">
                            <Hash className="w-6 h-6 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <div>
                                <span className="text-2xl font-black block leading-tight mb-1">
                                    {tag.name}
                                </span>
                                <span className="text-xs font-medium opacity-80 bg-black/20 px-2 py-1 rounded-full">
                                    {tag.count} İçerik
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* 2. Kategori: Atmosfer & Mod (Orta Boy Liste) */}
            <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    Atmosfer & Mod
                </h3>
                <div className="flex flex-wrap gap-3">
                    {TAG_CATEGORIES[1].tags.map((tag) => (
                        <Link 
                            key={tag.slug} 
                            href={`/etiket/${tag.slug}`}
                            className="px-5 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-700 dark:text-gray-200 font-medium hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-colors shadow-sm flex items-center gap-2 group"
                        >
                            <span className="group-hover:scale-110 transition-transform">#</span>
                            {tag.name}
                            <span className="text-xs text-slate-400 dark:text-gray-500 ml-1">({tag.count})</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* 3. Kategori: Konular (Bulut Görünümü) */}
            <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Konular & Temalar
                </h3>
                <div className="flex flex-wrap gap-2">
                    {TAG_CATEGORIES[2].tags.map((tag) => (
                        <Link 
                            key={tag.slug} 
                            href={`/etiket/${tag.slug}`}
                            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 text-sm hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors"
                        >
                            #{tag.name}
                        </Link>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </div>
  );
}