"use client";

// ... (Diğer importlar aynı)
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, MessageSquare, Share2, MoreHorizontal, 
  Star, Trophy, TrendingUp, UserPlus, 
  Film, List, Radio, Radar as RadarIcon, Activity 
} from "lucide-react";

// Mock Data: Aktiviteler (Feed)
const FEED_ACTIVITIES = [
  {
    id: 1,
    user: { name: "SinemaGurmesi", username: "sinemagurmesi", avatar: "https://i.pravatar.cc/150?img=33", badge: "Sinefil" },
    action: "inceledi",
    target: { type: "Film", title: "Dune: Part Two", id: "dune-2", image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" },
    content: "Denis Villeneuve, Frank Herbert'in karmaşık dünyasını o kadar ustalıkla beyazperdeye aktarmış ki, her karesi bir tablo gibi. Kesinlikle IMAX'te izlenmeli.",
    rating: 10,
    time: "2 saat önce",
    likes: 45,
    comments: 12
  },
  {
    id: 2,
    user: { name: "ZeynepK", username: "zeynepk", avatar: "https://i.pravatar.cc/150?img=5", badge: "Eleştirmen" },
    action: "izledi",
    target: { type: "Dizi", title: "The Last of Us", id: "the-last-of-us", image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg" },
    rating: 9,
    time: "4 saat önce",
    likes: 28,
    comments: 3
  },
  {
    id: 3,
    user: { name: "AliVeli", username: "aliveli", avatar: "https://i.pravatar.cc/150?img=12", badge: "Üye" },
    action: "liste oluşturdu",
    target: { type: "Liste", title: "2024 Oscar Adayları", id: "oscar-2024", image: "https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwvk4XTHYBPq.jpg" },
    content: "Bu seneki favorilerim ve tahminlerim. Sizce kim kazanır?",
    time: "6 saat önce",
    likes: 156,
    comments: 42
  },
  {
    id: 4,
    user: { name: "KorkuFan", username: "korkufan", avatar: "https://i.pravatar.cc/150?img=60", badge: "Küratör" },
    action: "puanladı",
    target: { type: "Film", title: "Talk to Me", id: "talk-to-me", image: "https://image.tmdb.org/t/p/w500/19g1b965o4k512CqNqF9aNn5u7L.jpg" },
    rating: 8,
    time: "8 saat önce",
    likes: 12,
    comments: 0
  }
];

const TOP_USERS = [
  { rank: 1, name: "FilmArşivi", username: "filmarsivi", avatar: "https://i.pravatar.cc/150?img=68", points: "12.5k XP", badge: "Üstat" },
  { rank: 2, name: "DiziKolik", username: "dizikolik", avatar: "https://i.pravatar.cc/150?img=44", points: "10.2k XP", badge: "Küratör" },
  { rank: 3, name: "SinemaGurmesi", username: "sinemagurmesi", avatar: "https://i.pravatar.cc/150?img=33", points: "9.8k XP", badge: "Sinefil" },
  { rank: 4, name: "ElifIzliyor", username: "elifizliyor", avatar: "https://i.pravatar.cc/150?img=22", points: "8.5k XP", badge: "Eleştirmen" },
  { rank: 5, name: "Caner", username: "caner", avatar: "https://i.pravatar.cc/150?img=11", points: "7.1k XP", badge: "Sinefil" },
];

export default function RadarPage() {
  const [activeTab, setActiveTab] = useState<"global" | "following">("global");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header: RADAR Konsepti */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight flex items-center gap-3">
                    <RadarIcon className="w-10 h-10 md:w-12 md:h-12 text-cinesos-yellow animate-pulse" />
                    Radar
                </h1>
                <p className="text-lg text-slate-600 dark:text-gray-300 max-w-xl">
                    Sinefil ağındaki anlık sinyalleri yakala. Kim ne izliyor, ne konuşuyor?
                </p>
            </div>
            
            {/* Feed Tabs */}
            <div className="flex bg-white dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <button 
                    onClick={() => setActiveTab("global")}
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                        activeTab === "global" 
                        ? "bg-slate-900 dark:bg-white text-white dark:text-black shadow-md" 
                        : "text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                >
                    <GlobeIcon className="w-4 h-4" /> Global
                </button>
                <button 
                    onClick={() => setActiveTab("following")}
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                        activeTab === "following" 
                        ? "bg-slate-900 dark:bg-white text-white dark:text-black shadow-md" 
                        : "text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                >
                    <Activity className="w-4 h-4" /> Takip Ettiklerim
                </button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* SOL KOLON: AKIŞ */}
            <div className="lg:col-span-8 space-y-6">
                {FEED_ACTIVITIES.map((activity) => (
                    <div key={activity.id} className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow relative">
                        
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                {/* Link Güncellemesi: Root Level */}
                                <Link href={`/${activity.user.username}`} className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-white/10 hover:ring-2 hover:ring-cinesos-yellow transition">
                                    <Image src={activity.user.avatar} alt={activity.user.name} fill className="object-cover" />
                                </Link>
                                <div>
                                    <div className="flex items-center gap-2">
                                        {/* Link Güncellemesi: Root Level */}
                                        <Link href={`/${activity.user.username}`} className="font-bold text-slate-900 dark:text-white text-sm hover:text-cinesos-yellow transition-colors">
                                            {activity.user.name}
                                        </Link>
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cinesos-yellow/20 text-yellow-700 dark:text-yellow-400 font-bold border border-cinesos-yellow/30">
                                            {activity.user.badge}
                                        </span>
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1">
                                        <span>{activity.action}</span>
                                        <Link 
                                            href={
                                                activity.target.type === 'Liste' 
                                                ? `/listeler/${activity.target.id}` 
                                                : `/${activity.target.type === 'Dizi' ? 'dizi' : 'film'}/${activity.target.id}`
                                            }
                                            className="font-bold text-slate-700 dark:text-gray-300 hover:text-cinesos-yellow transition-colors"
                                        >
                                            {activity.target.type === 'Film' ? 'Film' : activity.target.type === 'Dizi' ? 'Dizi' : 'Liste'}
                                        </Link>
                                        <span>• {activity.time}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content: Film/Liste Kartı ve Yorum */}
                        <div className="flex flex-col md:flex-row gap-4 mb-4 pl-14"> {/* pl-14 ile avatar hizasından içerik başlar */}
                            {/* Poster / Thumbnail */}
                            <Link 
                                href={
                                    activity.target.type === 'Liste' 
                                    ? `/listeler/${activity.target.id}` 
                                    : `/${activity.target.type === 'Dizi' ? 'dizi' : 'film'}/${activity.target.id}`
                                }
                                className="relative w-full md:w-32 aspect-video md:aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 dark:border-white/10 group cursor-pointer shadow-sm hover:shadow-lg transition-all"
                            >
                                <Image src={activity.target.image} alt={activity.target.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                                {activity.target.type === 'Liste' && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <List className="w-8 h-8 text-white opacity-80" />
                                    </div>
                                )}
                            </Link>

                            <div className="flex-1">
                                <Link 
                                    href={
                                        activity.target.type === 'Liste' 
                                        ? `/listeler/${activity.target.id}` 
                                        : `/${activity.target.type === 'Dizi' ? 'dizi' : 'film'}/${activity.target.id}`
                                    }
                                    className="text-lg font-bold text-slate-900 dark:text-white hover:text-cinesos-yellow transition-colors block mb-1"
                                >
                                    {activity.target.title}
                                </Link>
                                
                                {activity.rating && (
                                    <div className="flex items-center gap-1 text-yellow-500 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-4 h-4 ${i < Math.round(activity.rating / 2) ? "fill-current" : "text-gray-300 dark:text-gray-600"}`} 
                                            />
                                        ))}
                                        <span className="text-xs font-bold text-slate-500 dark:text-gray-400 ml-1">{activity.rating}/10</span>
                                    </div>
                                )}

                                {activity.content && (
                                    <div className="bg-gray-50 dark:bg-black/20 p-3 rounded-lg border border-gray-100 dark:border-white/5 text-sm text-slate-600 dark:text-gray-300 italic mb-2 relative">
                                        <span className="absolute top-2 left-2 text-4xl text-gray-200 dark:text-white/5 font-serif leading-3 select-none">“</span>
                                        <p className="relative z-10">{activity.content}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5 pl-14">
                            <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-red-500 transition group">
                                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                {activity.likes} Beğeni
                            </button>
                            <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-blue-500 transition group">
                                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                {activity.comments} Yorum
                            </button>
                            <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-green-500 transition group ml-auto">
                                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Paylaş
                            </button>
                        </div>

                    </div>
                ))}
                
                <div className="text-center py-8">
                    <button className="px-8 py-3 rounded-full border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition flex items-center justify-center gap-2 mx-auto">
                        <Radio className="w-4 h-4 animate-pulse text-cinesos-yellow" />
                        Daha Fazla Sinyal Yükle
                    </button>
                </div>
            </div>

            {/* SAĞ KOLON: SIDEBAR */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Liderlik Tablosu */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm sticky top-24">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            Ayın Yıldızları
                        </h3>
                        <Link href="/liderlik" className="text-xs font-bold text-cinesos-yellow hover:underline">Tümü</Link>
                    </div>
                    
                    <div className="space-y-4">
                        {TOP_USERS.map((user) => (
                            // Link Güncellemesi: Root Level
                            <Link key={user.rank} href={`/${user.username}`} className="flex items-center justify-between group p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 flex items-center justify-center font-black text-xs rounded-full ${user.rank === 1 ? "bg-yellow-500 text-black" : user.rank === 2 ? "bg-gray-300 text-black" : user.rank === 3 ? "bg-orange-400 text-black" : "bg-gray-100 dark:bg-white/10 text-slate-500"}`}>
                                        {user.rank}
                                    </div>
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-white/10">
                                        <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-cinesos-yellow transition-colors">{user.name}</span>
                                        <span className="text-[10px] text-slate-500 dark:text-gray-400">{user.badge}</span>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                    {user.points}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Gündem / Trending */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                        Radar'a Takılanlar
                    </h3>
                    <div className="space-y-3">
                        {["#DunePartTwo", "#Oscar2024", "#TheLastOfUs", "#ChristopherNolan", "#YeniÇıkanlar"].map((tag, i) => (
                            <Link key={i} href={`/etiket/${tag.replace('#', '').toLowerCase()}`} className="block p-3 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition group">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cinesos-yellow transition-colors">{tag}</span>
                                    <span className="text-[10px] text-slate-400">{10 - i}k post</span>
                                </div>
                                <div className="h-1 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: `${80 - (i * 15)}%` }}></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Önerilen Kullanıcılar */}
                <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full" />
                    <h3 className="relative z-10 font-bold text-white mb-4">Takip Önerileri</h3>
                    <div className="space-y-4 relative z-10">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Link href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden border border-white/20">
                                        <Image src={`https://i.pravatar.cc/150?img=${i + 40}`} alt="User" width={40} height={40} />
                                    </Link>
                                    <div>
                                        <Link href="#" className="block text-sm font-bold text-white hover:text-cinesos-yellow transition">FilmKurdu</Link>
                                        <span className="text-[10px] text-indigo-200">Benzer zevklere sahip</span>
                                    </div>
                                </div>
                                <button className="p-2 rounded-full bg-white/10 hover:bg-cinesos-yellow hover:text-black text-white transition">
                                    <UserPlus className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}

// Helper component for Icons that might not be in Lucide
function GlobeIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}