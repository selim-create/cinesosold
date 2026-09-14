"use client";

import { useState } from "react";
import { FilterState } from "@/app/ara/page";
import { 
  ChevronDown, ChevronUp, Check, RotateCcw, 
  MonitorPlay, Calendar, Star, Film, Tv, Globe, 
  Users, Trophy, Tag, Building2, LayoutGrid 
} from "lucide-react";

interface SearchFiltersProps {
  filters: FilterState;
  updateFilter: (key: keyof FilterState, value: any) => void;
  resetFilters: () => void;
}

// Filtre Grupları (Accordion için)
const SECTIONS = {
  sort: { title: "Sırala", isOpen: true },
  type: { title: "İçerik Tipi", isOpen: true },
  platform: { title: "Platformlar", isOpen: true },
  genre: { title: "Türler", isOpen: true },
  score: { title: "Puanlar", isOpen: false },
  year: { title: "Yayın Yılı", isOpen: false },
  details: { title: "Detaylar (Dil, Ülke)", isOpen: false },
  people: { title: "Kadro (Oyuncu, Yönetmen)", isOpen: false },
};

const SORT_OPTIONS = [
  { value: "popularity_desc", label: "Popülerlik" },
  { value: "release_date_desc", label: "Yayın Tarihi (Yeni)" },
  { value: "vote_average_desc", label: "Cinesos Puanı" },
  { value: "imdb_score_desc", label: "IMDb Puanı" },
  { value: "vote_count_desc", label: "Oy Sayısı" },
];

const CONTENT_TYPES = [
  { id: "movie", label: "Film" },
  { id: "tv", label: "Dizi" },
  { id: "tv_movie", label: "TV Filmi" },
  { id: "miniseries", label: "Mini Dizi" },
];

const PLATFORMS = [
  { id: "netflix", name: "Netflix", color: "bg-[#E50914]" },
  { id: "prime", name: "Prime Video", color: "bg-[#00A8E1]" },
  { id: "disney", name: "Disney+", color: "bg-[#113CCF]" },
  { id: "blutv", name: "BluTV", color: "bg-[#1F2937]" },
  { id: "mubi", name: "MUBI", color: "bg-[#AD8C3F]" },
  { id: "appletv", name: "Apple TV", color: "bg-[#000000]" },
  { id: "gain", name: "GAİN", color: "bg-[#FF0000]" },
  { id: "exxen", name: "Exxen", color: "bg-[#FFCC00] text-black" },
];

const GENRES = [
  "Aksiyon", "Macera", "Animasyon", "Komedi", "Suç", 
  "Belgesel", "Dram", "Aile", "Fantastik", "Tarih", 
  "Korku", "Müzik", "Gizem", "Romantik", "Bilim Kurgu",
  "Gerilim", "Savaş", "Western"
];

export default function SearchFilters({ filters, updateFilter, resetFilters }: SearchFiltersProps) {
  // Accordion State
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.keys(SECTIONS).reduce((acc, key) => ({ ...acc, [key]: SECTIONS[key as keyof typeof SECTIONS].isOpen }), {})
  );

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    const current = filters[key] as string[];
    if (current.includes(value)) {
      updateFilter(key, current.filter(item => item !== value));
    } else {
      updateFilter(key, [...current, value]);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* BAŞLIK VE RESET */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
        <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Filtreleme Seçenekleri</span>
        <button 
            onClick={resetFilters}
            className="text-xs font-bold text-slate-500 hover:text-red-500 flex items-center gap-1 transition-colors"
        >
            <RotateCcw className="w-3 h-3" /> Temizle
        </button>
      </div>

      {/* 1. SIRALAMA */}
      <FilterSection title="Sırala" isOpen={openSections.sort} onToggle={() => toggleSection('sort')}>
        <div className="space-y-2">
            {SORT_OPTIONS.map((opt) => (
                <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${filters.sortBy === opt.value ? "border-cinesos-yellow" : "border-gray-300 dark:border-white/20 group-hover:border-cinesos-yellow"}`}>
                        {filters.sortBy === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-cinesos-yellow" />}
                    </div>
                    <span className={`text-sm font-medium transition-colors ${filters.sortBy === opt.value ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white"}`}>
                        {opt.label}
                    </span>
                    <input 
                        type="radio" 
                        name="sort" 
                        value={opt.value} 
                        checked={filters.sortBy === opt.value} 
                        onChange={(e) => updateFilter("sortBy", e.target.value)} 
                        className="hidden" 
                    />
                </label>
            ))}
        </div>
      </FilterSection>

      {/* 2. İÇERİK TİPİ */}
      <FilterSection title="İçerik Tipi" isOpen={openSections.type} onToggle={() => toggleSection('type')}>
        <div className="space-y-2">
            {CONTENT_TYPES.map((type) => (
                <label key={type.id} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${filters.types.includes(type.id) ? "bg-cinesos-yellow border-cinesos-yellow text-black" : "border-gray-300 dark:border-white/20 group-hover:border-cinesos-yellow"}`}>
                        {filters.types.includes(type.id) && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {type.label}
                    </span>
                    <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={filters.types.includes(type.id)} 
                        onChange={() => toggleArrayFilter("types", type.id)} 
                    />
                </label>
            ))}
        </div>
      </FilterSection>

      {/* 3. PLATFORMLAR (Görsel Seçim) */}
      <FilterSection title="Dijital Platformlar" isOpen={openSections.platform} onToggle={() => toggleSection('platform')}>
        <div className="grid grid-cols-2 gap-2">
            {PLATFORMS.map((p) => {
                const isActive = filters.platforms.includes(p.id);
                return (
                    <button
                        key={p.id}
                        onClick={() => toggleArrayFilter("platforms", p.id)}
                        className={`
                            relative h-10 rounded-lg flex items-center justify-center text-[10px] font-bold uppercase tracking-wider transition-all
                            ${isActive ? `ring-2 ring-cinesos-yellow scale-[1.02] z-10 opacity-100` : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0"}
                            ${p.color} text-white shadow-sm
                        `}
                    >
                        {p.name}
                        {isActive && (
                            <div className="absolute -top-1.5 -right-1.5 bg-cinesos-yellow text-black rounded-full p-0.5 shadow-md">
                                <Check className="w-2.5 h-2.5" />
                            </div>
                        )}
                    </button>
                );
            })}
        </div>
      </FilterSection>

      {/* 4. TÜRLER (Tag Seçimi) */}
      <FilterSection title="Türler" isOpen={openSections.genre} onToggle={() => toggleSection('genre')}>
        <div className="flex flex-wrap gap-2">
            {GENRES.map((genre) => (
                <button
                    key={genre}
                    onClick={() => toggleArrayFilter("genres", genre)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        filters.genres.includes(genre)
                        ? "bg-cinesos-yellow border-cinesos-yellow text-black"
                        : "bg-transparent border-gray-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-cinesos-yellow hover:text-cinesos-yellow"
                    }`}
                >
                    {genre}
                </button>
            ))}
        </div>
      </FilterSection>

      {/* 5. PUANLAR (Range Slider) */}
      <FilterSection title="Puan Aralığı" isOpen={openSections.score} onToggle={() => toggleSection('score')}>
        <div className="space-y-4">
            {/* IMDb */}
            <div>
                <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold flex items-center gap-1 text-slate-700 dark:text-gray-300">
                        <span className="text-yellow-500 font-black">IMDb</span>
                    </span>
                    <span className="text-xs font-mono text-slate-500">{filters.imdbRange[0]} - {filters.imdbRange[1]}</span>
                </div>
                <input 
                    type="range" min="0" max="10" step="0.1"
                    value={filters.imdbRange[0]} // Basitlik için sadece min değer
                    onChange={(e) => updateFilter("imdbRange", [Number(e.target.value), 10])}
                    className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cinesos-yellow"
                />
            </div>
            {/* Cinesos */}
            <div>
                <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold flex items-center gap-1 text-slate-700 dark:text-gray-300">
                        Cinesos Puanı
                    </span>
                    <span className="text-xs font-mono text-slate-500">{filters.cinesosRange[0]} - {filters.cinesosRange[1]}</span>
                </div>
                <input 
                    type="range" min="0" max="100" step="5"
                    value={filters.cinesosRange[0]}
                    onChange={(e) => updateFilter("cinesosRange", [Number(e.target.value), 100])}
                    className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
            </div>
        </div>
      </FilterSection>

      {/* 6. YIL ARALIĞI */}
      <FilterSection title="Yayın Yılı" isOpen={openSections.year} onToggle={() => toggleSection('year')}>
        <div className="flex items-center gap-2">
            <select 
                value={filters.yearRange[0]}
                onChange={(e) => updateFilter("yearRange", [Number(e.target.value), filters.yearRange[1]])}
                className="flex-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-2 text-xs font-bold text-slate-900 dark:text-white outline-none focus:border-cinesos-yellow"
            >
                {Array.from({length: 66}, (_, i) => 1960 + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <span className="text-gray-400 font-bold">-</span>
            <select 
                value={filters.yearRange[1]}
                onChange={(e) => updateFilter("yearRange", [filters.yearRange[0], Number(e.target.value)])}
                className="flex-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-2 text-xs font-bold text-slate-900 dark:text-white outline-none focus:border-cinesos-yellow"
            >
                {Array.from({length: 67}, (_, i) => 1960 + i).reverse().map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
      </FilterSection>

      {/* 7. KADRO (Kişi Arama) - Placeholder */}
      <FilterSection title="Oyuncu & Yönetmen" isOpen={openSections.people} onToggle={() => toggleSection('people')}>
        <div className="relative">
            <input 
                type="text" 
                placeholder="Kişi ara..."
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg py-2 px-3 pl-9 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cinesos-yellow"
            />
            <Users className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" />
        </div>
        <p className="text-[10px] text-gray-500 mt-2">Örn: Christopher Nolan, Zendaya</p>
      </FilterSection>

    </div>
  );
}

// Yardımcı Accordion Bileşeni
function FilterSection({ title, isOpen, onToggle, children }: { title: string, isOpen: boolean, onToggle: () => void, children: React.ReactNode }) {
    return (
        <div className="border-b border-gray-100 dark:border-white/5 pb-4 last:border-0">
            <button 
                onClick={onToggle}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900 dark:text-white hover:text-cinesos-yellow transition-colors group"
            >
                {title}
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-cinesos-yellow" /> : <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cinesos-yellow" />}
            </button>
            {isOpen && <div className="mt-3 animate-in slide-in-from-top-2 fade-in duration-200">{children}</div>}
        </div>
    )
}