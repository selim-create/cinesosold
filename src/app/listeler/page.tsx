import Link from "next/link";
import Image from "next/image";
import { Heart, List, Plus, TrendingUp, Sparkles, User, Globe } from "lucide-react";

// Mock Data
const FEATURED_LISTS = [
  {
    id: 1,
    slug: "akil-almaz-filmler",
    title: "Beyin Yakan Filmler (Mindfuck)",
    description: "Sonunda 'Ne izledim ben?' dedirtecek, kurgusuyla ters köşe yapan filmler.",
    user: { name: "SinemaGurmesi", avatar: "https://i.pravatar.cc/150?img=33" },
    likes: 1240,
    itemCount: 42,
    color: "from-purple-600 to-indigo-700",
    posters: [
      "https://image.tmdb.org/t/p/w500/9gk7admal4zlE013GXCYRnRCqOd.jpg", // Inception
      "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Gr7YA2sMhFOiUo.jpg", // Fight Club
      "https://image.tmdb.org/t/p/w500/lxM6kqilAdyVxXH23xJidwJ8292.jpg", // Memento
      "https://image.tmdb.org/t/p/w500/6y25e4t2uIK5MvY584gLdo1r7n.jpg"  // Shutter Island
    ]
  },
  {
    id: 2,
    slug: "oscar-2024",
    title: "2024 Oscar Adayları ve Kazananlar",
    description: "Bu yılın akademi ödüllerine damga vuran yapımların tam listesi.",
    user: { name: "CinesosEditör", avatar: "https://i.pravatar.cc/150?img=12" },
    likes: 856,
    itemCount: 15,
    color: "from-yellow-500 to-orange-600",
    posters: [
      "https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwvk4XTHYBPq.jpg", // Oppenheimer
      "https://image.tmdb.org/t/p/w500/kCGlIMVn6MjcveAc3oUXqF60UCAL.jpg", // Poor Things
      "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", // Barbie
      "https://image.tmdb.org/t/p/w500/qhcwrnnCnN8NE1N6XXKcFQlwePf.jpg"  // Killers of the Flower Moon
    ]
  },
  {
    id: 3,
    slug: "korku-gecesi",
    title: "Uykusuz Bırakan Korku Filmleri",
    description: "Işıkları kapatmadan izlemeniz gereken, gerilimi yüksek yapımlar.",
    user: { name: "KorkuKulübü", avatar: "https://i.pravatar.cc/150?img=60" },
    likes: 2100,
    itemCount: 66,
    color: "from-red-600 to-rose-800",
    posters: [
      "https://image.tmdb.org/t/p/w500/w2R9ClleF7HtKYwbncE5DS82tOl.jpg", // Hereditary
      "https://image.tmdb.org/t/p/w500/b4gYVcl8pParX8AjkN90iQrWrWO.jpg", // The Conjuring
      "https://image.tmdb.org/t/p/w500/3979kR1eZ24g7u1mL99zMksByAq.jpg", // Talk to Me
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"  // Midsommar
    ]
  }
];

const POPULAR_LISTS = [
  ...FEATURED_LISTS,
  {
    id: 4,
    slug: "romantik-komedi",
    title: "İçinizi Isıtacak Romantik Komediler",
    description: "Hafta sonu kafa dağıtmalık, mutlu sonlu filmler.",
    user: { name: "Selin", avatar: "https://i.pravatar.cc/150?img=9" },
    likes: 430,
    itemCount: 28,
    color: "from-pink-500 to-rose-500",
    posters: [
      "https://image.tmdb.org/t/p/w500/4j0P78k0z5JEG2s5CD13E7L6J9D.jpg",
      "https://image.tmdb.org/t/p/w500/9yBXq9758v1eN4g1v83e34313.jpg",
      "https://image.tmdb.org/t/p/w500/8cOa83N7576f7f2Z7w8w27776.jpg",
      "https://image.tmdb.org/t/p/w500/6KErczPBROUzfYWBVxKj7994Hl.jpg"
    ]
  },
  {
    id: 5,
    slug: "bilim-kurgu-klasikleri",
    title: "Mutlaka İzlenmesi Gereken Sci-Fi",
    description: "Bilim kurgu tarihine yön veren başyapıtlar.",
    user: { name: "SpaceBoy", avatar: "https://i.pravatar.cc/150?img=11" },
    likes: 1560,
    itemCount: 50,
    color: "from-blue-600 to-cyan-600",
    posters: [
      "https://image.tmdb.org/t/p/w500/gEU2QniL6C8z1dY4wKyM8Jm4rNb.jpg",
      "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "https://image.tmdb.org/t/p/w500/5aGhaI4YOA2xZv474qGTcpQyGSy.jpg"
    ]
  }
];

export default function ListsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                    Koleksiyonlar
                </h1>
                <p className="text-lg text-slate-600 dark:text-gray-300 max-w-xl">
                    Kullanıcılar tarafından özenle hazırlanan film ve dizi listelerini keşfet veya kendi koleksiyonunu oluştur.
                </p>
            </div>
            
            <button className="flex items-center gap-2 bg-cinesos-yellow text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 hover:shadow-lg hover:shadow-cinesos-yellow/20 transition transform hover:scale-105 active:scale-95">
                <Plus className="w-5 h-5" />
                Liste Oluştur
            </button>
        </div>

        {/* Featured Lists (Vitrin) */}
        <div className="mb-16">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cinesos-yellow" />
                Editörün Seçimi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURED_LISTS.map((list) => (
                    <Link 
                        key={list.id} 
                        href={`/listeler/${list.slug}`}
                        className="group relative h-72 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-slate-900"
                    >
                        {/* Arkaplan ve Gradyan */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${list.color} opacity-90 z-0`} />
                        <div className="absolute inset-0 bg-black/20 z-0" />
                        
                        {/* Poster Kolajı (2x2 Grid) */}
                        <div className="absolute top-4 right-4 w-32 h-48 grid grid-cols-2 gap-1 transform rotate-6 group-hover:rotate-3 transition-transform duration-500 shadow-2xl opacity-80 group-hover:opacity-100">
                            {list.posters.map((poster, i) => (
                                <div key={i} className="relative w-full h-full rounded-md overflow-hidden">
                                    <Image src={poster} alt="Poster" fill className="object-cover" />
                                </div>
                            ))}
                        </div>

                        {/* İçerik */}
                        <div className="absolute inset-0 p-6 z-10 flex flex-col justify-between pointer-events-none">
                            <div className="flex items-start">
                                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                                    {list.itemCount} İçerik
                                </span>
                            </div>
                            
                            <div className="pr-12">
                                <h3 className="text-2xl font-black text-white mb-2 leading-tight drop-shadow-md group-hover:text-cinesos-yellow transition-colors">
                                    {list.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/30">
                                        <Image src={list.user.avatar} alt={list.user.name} fill className="object-cover" />
                                    </div>
                                    <span className="text-sm text-white/80 font-medium">{list.user.name}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        {/* Popüler Listeler Grid */}
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-cinesos-yellow" />
                    Haftanın Popüler Listeleri
                </h2>
                
                {/* Filtreler */}
                <div className="flex gap-2">
                    <button className="px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-bold">
                        Tümü
                    </button>
                    <button className="px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-600 dark:text-gray-400 text-xs font-bold hover:bg-gray-100 dark:hover:bg-white/10">
                        Sana Özel
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {POPULAR_LISTS.map((list) => (
                    <Link 
                        key={list.id} 
                        href={`/listeler/${list.slug}`}
                        className="group flex flex-col gap-3"
                    >
                        {/* Poster Kolajı (Kare) */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                            <div className="grid grid-cols-2 h-full">
                                {list.posters.map((poster, i) => (
                                    <div key={i} className="relative w-full h-full border-r border-b border-white/10 last:border-0">
                                        <Image src={poster} alt="Poster" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white font-bold text-sm">
                                    İncele
                                </div>
                            </div>
                        </div>

                        {/* Bilgi */}
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-cinesos-yellow transition-colors line-clamp-1">
                                {list.title}
                            </h3>
                            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400">
                                <div className="flex items-center gap-1.5">
                                    <div className="relative w-4 h-4 rounded-full overflow-hidden bg-gray-300">
                                        <Image src={list.user.avatar} alt={list.user.name} fill className="object-cover" />
                                    </div>
                                    <span>{list.user.name}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1"><List className="w-3 h-3" /> {list.itemCount}</span>
                                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-red-500 fill-red-500" /> {list.likes}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}