"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, ChevronRight, Star, Video, Clapperboard } from "lucide-react";

// Mock Data: Kişiler Listesi
const PEOPLE_DATA = [
  {
    id: "timothee-chalamet",
    name: "Timothée Chalamet",
    department: "Oyunculuk",
    image: "https://image.tmdb.org/t/p/w500/BE2sdjpgEHrT5l8lIi6JApJu0.jpg",
    knownFor: [
      { title: "Dune", type: "Film" },
      { title: "Wonka", type: "Film" }
    ],
    popularity: 98
  },
  {
    id: "zendaya",
    name: "Zendaya",
    department: "Oyunculuk",
    image: "https://image.tmdb.org/t/p/w500/cbCibOAns4QQClDfpLn4FGTqDLR.jpg",
    knownFor: [
      { title: "Euphoria", type: "Dizi" },
      { title: "Spider-Man", type: "Film" }
    ],
    popularity: 95
  },
  {
    id: "denis-villeneuve",
    name: "Denis Villeneuve",
    department: "Yönetim",
    image: "https://image.tmdb.org/t/p/w500/qpUE7X5jE6Udfb975Gg48zU61fI.jpg",
    knownFor: [
      { title: "Dune: Part Two", type: "Film" },
      { title: "Arrival", type: "Film" }
    ],
    popularity: 92
  },
  {
    id: "christopher-nolan",
    name: "Christopher Nolan",
    department: "Yönetim",
    image: "https://image.tmdb.org/t/p/w500/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg",
    knownFor: [
      { title: "Oppenheimer", type: "Film" },
      { title: "Inception", type: "Film" }
    ],
    popularity: 96
  },
  {
    id: "florence-pugh",
    name: "Florence Pugh",
    department: "Oyunculuk",
    image: "https://image.tmdb.org/t/p/w500/fhEsn35uAwUZy37RKpLJSbwpvDv.jpg",
    knownFor: [
      { title: "Midsommar", type: "Film" },
      { title: "Black Widow", type: "Film" }
    ],
    popularity: 88
  },
  {
    id: "austin-butler",
    name: "Austin Butler",
    department: "Oyunculuk",
    image: "https://image.tmdb.org/t/p/w500/2Ig176FD50qI51T2j6f3aZq3wX.jpg",
    knownFor: [
      { title: "Elvis", type: "Film" },
      { title: "Dune: Part Two", type: "Film" }
    ],
    popularity: 85
  },
  {
    id: "greta-gerwig",
    name: "Greta Gerwig",
    department: "Yönetim",
    image: "https://image.tmdb.org/t/p/w500/2dw9m9uYd63Q1QJ8yE2GkX9r.jpg", // Placeholder link
    knownFor: [
      { title: "Barbie", type: "Film" },
      { title: "Little Women", type: "Film" }
    ],
    popularity: 90
  },
  {
    id: "pedro-pascal",
    name: "Pedro Pascal",
    department: "Oyunculuk",
    image: "https://image.tmdb.org/t/p/w500/9fkNofgUflE15M5uQJ27pZp6C8.jpg",
    knownFor: [
      { title: "The Last of Us", type: "Dizi" },
      { title: "Mandalorian", type: "Dizi" }
    ],
    popularity: 94
  }
];

const DEPARTMENTS = ["Tümü", "Oyunculuk", "Yönetim", "Senaryo", "Prodüksiyon"];

export default function PeoplePage() {
  const [activeTab, setActiveTab] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtreleme Mantığı
  const filteredPeople = PEOPLE_DATA.filter(person => {
    const matchesTab = activeTab === "Tümü" || person.department === activeTab;
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                    Yıldızlar & Yaratıcılar
                </h1>
                <p className="text-lg text-slate-600 dark:text-gray-300 max-w-xl">
                    Favori oyuncularını, yönetmenleri ve kamera arkasındaki dehaları keşfet.
                </p>
            </div>
            
            {/* Arama Kutusu */}
            <div className="relative w-full md:w-80 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-cinesos-yellow transition-colors" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cinesos-yellow/50 focus:border-cinesos-yellow transition-all text-slate-900 dark:text-white"
                    placeholder="İsim ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>

        {/* Filtreler */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 pb-2">
            {DEPARTMENTS.map((dept) => (
                <button
                    key={dept}
                    onClick={() => setActiveTab(dept)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
                        activeTab === dept 
                        ? "bg-slate-900 dark:bg-white text-white dark:text-black border-slate-900 dark:border-white shadow-md" 
                        : "bg-transparent border-gray-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-cinesos-yellow hover:text-cinesos-yellow"
                    }`}
                >
                    {dept}
                </button>
            ))}
        </div>

        {/* Kişi Listesi Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredPeople.map((person) => (
                <Link key={person.id} href={`/kisi/${person.id}`} className="group bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/50 transition-all shadow-sm hover:shadow-xl flex flex-col">
                    
                    {/* Görsel */}
                    <div className="aspect-[3/4] relative overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <Image 
                            src={person.image} 
                            alt={person.name} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Popülarite Badge */}
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-cinesos-yellow flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Star className="w-3 h-3 fill-current" />
                            {person.popularity}
                        </div>
                    </div>

                    {/* Bilgi */}
                    <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1 group-hover:text-cinesos-yellow transition-colors truncate">
                            {person.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-gray-400 mb-4 font-medium uppercase tracking-wide">
                            {person.department}
                        </p>
                        
                        {/* Bilinen İşler (Mini Liste) */}
                        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-white/5">
                            <span className="text-[10px] font-bold text-slate-400 block mb-1.5">BİLİNEN İŞLERİ</span>
                            <div className="space-y-1">
                                {person.knownFor.map((work, i) => (
                                    <div key={i} className="flex items-center justify-between text-xs text-slate-700 dark:text-gray-300">
                                        <span className="truncate pr-2">{work.title}</span>
                                        {work.type === 'Film' ? <Video className="w-3 h-3 text-slate-400 flex-shrink-0" /> : <Clapperboard className="w-3 h-3 text-slate-400 flex-shrink-0" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {/* Empty State */}
        {filteredPeople.length === 0 && (
            <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sonuç Bulunamadı</h3>
                <p className="text-slate-500 dark:text-gray-400">
                    "{searchQuery}" araması için herhangi bir kişi bulunamadı.
                </p>
            </div>
        )}

        {/* Pagination */}
        {filteredPeople.length > 0 && (
            <div className="mt-16 text-center">
                <button className="px-8 py-3 rounded-full border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition shadow-sm hover:shadow-md">
                    Daha Fazla Göster
                </button>
            </div>
        )}

      </div>
    </div>
  );
}