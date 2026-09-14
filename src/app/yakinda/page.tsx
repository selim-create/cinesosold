"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Bell, Filter, ChevronRight, 
  MonitorPlay, Film, Tv, Check 
} from "lucide-react";

// Mock Data: Yakında Gelecekler
const UPCOMING_RELEASES = [
  {
    id: 1,
    title: "Avatar: The Last Airbender",
    image: "https://image.tmdb.org/t/p/original/kC7a2I9h5Z5z6qJ1z6jX2z3z1.jpg", // Placeholder
    date: "22 Şubat 2026",
    platform: { name: "Netflix", color: "bg-red-600" },
    type: "Dizi",
    genre: "Fantastik",
    reminders: 15400
  },
  {
    id: 2,
    title: "Dune: Prophecy",
    image: "https://image.tmdb.org/t/p/original/6XjJ6qJ1z6jX2z3z1.jpg", // Placeholder
    date: "1 Mart 2026",
    platform: { name: "HBO Max", color: "bg-purple-700" },
    type: "Dizi",
    genre: "Bilim Kurgu",
    reminders: 22100
  },
  {
    id: 3,
    title: "Mickey 17",
    image: "https://image.tmdb.org/t/p/original/9XjJ6qJ1z6jX2z3z1.jpg", // Placeholder
    date: "15 Mart 2026",
    platform: { name: "Sinema", color: "bg-cinesos-yellow text-black" },
    type: "Film",
    genre: "Bilim Kurgu",
    reminders: 8900
  },
  {
    id: 4,
    title: "Fallout",
    image: "https://image.tmdb.org/t/p/original/8cOa83N7576f7f2Z7w8w27776.jpg",
    date: "12 Nisan 2026",
    platform: { name: "Prime Video", color: "bg-blue-500" },
    type: "Dizi",
    genre: "Aksiyon",
    reminders: 18500
  },
  {
    id: 5,
    title: "Furiosa: A Mad Max Saga",
    image: "https://image.tmdb.org/t/p/original/wXjJ6qJ1z6jX2z3z1.jpg", // Placeholder
    date: "24 Mayıs 2026",
    platform: { name: "Sinema", color: "bg-cinesos-yellow text-black" },
    type: "Film",
    genre: "Aksiyon",
    reminders: 32000
  },
  {
    id: 6,
    title: "House of the Dragon S2",
    image: "https://image.tmdb.org/t/p/original/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    date: "Haziran 2026",
    platform: { name: "BluTV", color: "bg-cyan-600" },
    type: "Dizi",
    genre: "Fantastik",
    reminders: 45000
  }
];

const PLATFORMS = [
  { name: "Tümü", id: "all" },
  { name: "Netflix", id: "netflix" },
  { name: "Prime Video", id: "prime" },
  { name: "Disney+", id: "disney" },
  { name: "BluTV", id: "blutv" },
  { name: "Sinema", id: "cinema" },
];

export default function UpcomingPage() {
  const [activePlatform, setActivePlatform] = useState("all");
  // Hatırlatıcı durumu için basit state (gerçekte user ID ile tutulur)
  const [reminders, setReminders] = useState<number[]>([]);

  const toggleReminder = (id: number) => {
    if (reminders.includes(id)) {
      setReminders(reminders.filter(r => r !== id));
    } else {
      setReminders([...reminders, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight flex items-center gap-3">
                    <Calendar className="w-10 h-10 md:w-12 md:h-12 text-cinesos-yellow" />
                    Yakında
                </h1>
                <p className="text-lg text-slate-600 dark:text-gray-300 max-w-xl">
                    Hangi platforma ne zaman, ne geliyor? Vizyon takvimi ve yeni sezon tarihleri.
                </p>
            </div>
            
            {/* Platform Filter */}
            <div className="flex bg-white dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm overflow-x-auto no-scrollbar">
                {PLATFORMS.map((p) => (
                    <button 
                        key={p.id}
                        onClick={() => setActivePlatform(p.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                            activePlatform === p.id 
                            ? "bg-slate-900 dark:bg-white text-white dark:text-black shadow-md" 
                            : "text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                        }`}
                    >
                        {p.name}
                    </button>
                ))}
            </div>
        </div>

        {/* Featured (Hero Slider gibi düşünülebilir ama liste olarak daha temiz) */}
        <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Bell className="w-5 h-5 text-red-500" />
                En Çok Beklenenler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {UPCOMING_RELEASES.slice(0, 3).map((item) => (
                    <div key={item.id} className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="flex justify-between items-end mb-2">
                                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${item.platform.color} text-white`}>
                                    {item.platform.name}
                                </span>
                                <span className="text-xs font-bold text-gray-300 bg-white/10 backdrop-blur-md px-2 py-1 rounded">
                                    {item.date}
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-white leading-tight mb-1 group-hover:text-cinesos-yellow transition-colors">
                                {item.title}
                            </h3>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-gray-400 font-medium">{item.genre} • {item.type}</span>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); toggleReminder(item.id); }}
                                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                                        reminders.includes(item.id) 
                                        ? "bg-cinesos-yellow text-black" 
                                        : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md"
                                    }`}
                                >
                                    {reminders.includes(item.id) ? <Check className="w-3 h-3" /> : <Bell className="w-3 h-3" />}
                                    {reminders.includes(item.id) ? "Eklendi" : "Hatırlat"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Timeline Listesi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL: LİSTE */}
            <div className="lg:col-span-8 space-y-8">
                {/* Ayraç: Bu Ay */}
                <div className="flex items-center gap-4">
                    <span className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">Şubat 2026</span>
                    <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
                </div>

                <div className="space-y-4">
                    {UPCOMING_RELEASES.map((item) => (
                        <div key={item.id} className="group flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/50 transition-all shadow-sm">
                            {/* Tarih Kutusu */}
                            <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-100 dark:bg-white/10 rounded-xl text-slate-900 dark:text-white border border-gray-200 dark:border-white/5 flex-shrink-0 group-hover:bg-cinesos-yellow group-hover:text-black transition-colors">
                                <span className="text-xs font-bold uppercase opacity-70">{item.date.split(" ")[1].substring(0, 3)}</span>
                                <span className="text-2xl font-black leading-none">{item.date.split(" ")[0]}</span>
                            </div>

                            {/* Görsel & Bilgi */}
                            <Link href={`/${item.type === 'Film' ? 'film' : 'dizi'}/1`} className="flex-1 flex items-center gap-4">
                                <div className="relative w-16 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${item.platform.name === 'Netflix' ? 'bg-red-600 text-white' : item.platform.name === 'Prime Video' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>
                                            {item.platform.name}
                                        </span>
                                        <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">• {item.type}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cinesos-yellow transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="text-sm text-slate-600 dark:text-gray-400">{item.genre}</span>
                                </div>
                            </Link>

                            {/* Aksiyon */}
                            <button 
                                onClick={() => toggleReminder(item.id)}
                                className={`p-3 rounded-full border transition-all ${
                                    reminders.includes(item.id)
                                    ? "bg-cinesos-yellow border-cinesos-yellow text-black"
                                    : "border-gray-200 dark:border-white/10 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-900 dark:hover:border-white"
                                }`}
                                title="Takvime Ekle"
                            >
                                {reminders.includes(item.id) ? <Check className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* SAĞ: SIDEBAR */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Platform Filtresi (Detaylı) */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <MonitorPlay className="w-5 h-5 text-cinesos-yellow" />
                        Platformlar
                    </h3>
                    <div className="space-y-2">
                        {PLATFORMS.filter(p => p.id !== 'all').map((p) => (
                            <button key={p.id} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition group">
                                <span className="font-medium text-slate-700 dark:text-gray-200 group-hover:text-cinesos-yellow transition-colors">{p.name}</span>
                                <span className="text-xs font-bold bg-gray-100 dark:bg-white/10 px-2 py-1 rounded text-slate-500">12</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tür Filtresi */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Filter className="w-5 h-5 text-blue-500" />
                        Türler
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Bilim Kurgu", "Korku", "Komedi", "Dram", "Aksiyon", "Belgesel"].map((genre) => (
                            <button key={genre} className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-gray-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                                {genre}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}