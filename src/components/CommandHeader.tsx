"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Bell, ChevronDown, Monitor, Clock, Filter, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const [mood, setMood] = useState("Modunu Seç");
  const [dragActive, setDragActive] = useState(false); // Sürükle-Bırak durumu için

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mood Seçenekleri
  const moods = [
    { label: "Hızlı bir şey (30dk)", icon: "⚡" },
    { label: "Film Gecesi", icon: "🍿" },
    { label: "Diziye Başla", icon: "📺" },
    { label: "Kafa Dağıtmalık", icon: "🤪" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center px-2 md:px-0 ${scrolled ? "pt-2" : "pt-6"}`}>
        
        {/* THE CAPSULE CONTAINER */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            relative flex items-center justify-between
            transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            backdrop-blur-xl border border-white/10 shadow-2xl
            ${scrolled 
              ? "w-full md:w-[60%] h-14 bg-cinesos-dark/80 rounded-full px-4" 
              : "w-full md:w-[85%] h-20 bg-cinesos-blue/60 rounded-2xl px-6"
            }
          `}
        >
          {/* --- SOL: MOOD SWITCH --- */}
          <div className="flex items-center gap-4">
            {/* Logo (Sadece mobilde veya scroll olmadığında gösterelim) */}
            <Link href="/" className={`relative flex-shrink-0 transition-all ${scrolled ? "w-8 h-8" : "w-10 h-10"}`}>
               <Image src="/cinesos-icon.svg" alt="Logo" fill className="object-contain" />
            </Link>

            {/* Desktop Mood Selector */}
            <div className="hidden md:block relative group">
                <button className="flex items-center gap-2 text-white/90 hover:text-cinesos-yellow transition font-medium text-sm bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <span>{mood}</span>
                    <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-cinesos-dark border border-white/10 rounded-xl shadow-xl overflow-hidden hidden group-hover:block">
                    {moods.map((m, i) => (
                        <button key={i} onClick={() => setMood(m.label)} className="w-full text-left px-4 py-3 hover:bg-white/10 text-sm text-gray-300 hover:text-white flex items-center gap-2 transition">
                            <span>{m.icon}</span> {m.label}
                        </button>
                    ))}
                </div>
            </div>
          </div>

          {/* --- ORTA: 3-PART SEARCH SENTENCE (The Core) --- */}
          <div className={`
             hidden md:flex items-center justify-center flex-1 mx-6 transition-all duration-500
             ${scrolled ? "opacity-100" : "opacity-100"}
          `}>
             <div className={`
                flex items-center bg-black/40 rounded-full border border-white/10 overflow-hidden w-full max-w-2xl
                focus-within:ring-2 focus-within:ring-cinesos-yellow/50 transition-all
                ${scrolled ? "h-10 text-sm" : "h-12"}
             `}>
                
                {/* PART 1: NE? */}
                <div className="flex-1 flex items-center px-4 border-r border-white/10 group hover:bg-white/5 transition">
                    <Search className="w-4 h-4 text-gray-500 mr-2 group-focus-within:text-cinesos-yellow" />
                    <input type="text" placeholder="Ne arıyorsun?" className="bg-transparent w-full text-white placeholder:text-gray-500 outline-none" />
                </div>

                {/* PART 2: NEREDE? */}
                <div className="w-1/4 flex items-center px-4 border-r border-white/10 cursor-pointer hover:bg-white/5 transition relative">
                    <Monitor className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-400 truncate">Platform</span>
                    <ChevronDown className="w-3 h-3 text-gray-600 ml-auto" />
                </div>

                {/* PART 3: KISIT? */}
                <div className="w-1/4 flex items-center px-4 cursor-pointer hover:bg-white/5 transition relative">
                    <Filter className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-400 truncate">Filtreler</span>
                </div>

             </div>
          </div>

          {/* --- SAĞ: RADAR & USER --- */}
          <div className="flex items-center gap-3">
            {/* Mobil Arama İkonu */}
            <button className="md:hidden p-2 text-white">
                <Search className="w-5 h-5" />
            </button>

            {/* Radar (Notifications) */}
            <div className="hidden md:flex flex-col items-end mr-2 cursor-pointer group">
                <div className="flex items-center gap-1 text-xs text-cinesos-yellow font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    RADAR
                </div>
                <span className="text-[10px] text-gray-400 group-hover:text-white transition">2 yeni bölüm</span>
            </div>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-700 to-black p-[1px] cursor-pointer">
                <img src="https://i.pravatar.cc/150?img=11" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          
          {/* --- DROP ZONE (Sürükle Bırak Alanı) --- */}
          {/* Burası normalde gizli, kullanıcı bir film kartını sürüklemeye başladığında alttan çıkacak */}
          <AnimatePresence>
            {dragActive && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 60, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="absolute -bottom-16 left-0 right-0 bg-cinesos-yellow/10 backdrop-blur-md border border-cinesos-yellow/30 rounded-xl flex items-center justify-center text-cinesos-yellow font-bold gap-2 dashed-border"
                >
                    <Plus className="w-5 h-5" />
                    BU AKŞAM İÇİN EKLE
                </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </header>
    </>
  );
}