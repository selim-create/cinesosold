"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Bell, Menu, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hangi logoyu göstereceğimize karar verelim
  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSrc = mounted && currentTheme === "dark" 
    ? "/cinesos-white.svg" 
    : "/cinesos.svg";

// src/components/Header.tsx içindeki return kısmı:

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      {/* THE CAPSULE 
         - Scrolled: Genişlik azalır, arkaplan gelir, blur artar, shadow gelir.
         - Top: Genişlik full, arkaplan şeffaf, shadow yok.
      */}
      <div
        className={`relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-between px-6 
        ${
          scrolled
            ? "w-[90%] md:w-[70%] bg-black/60 backdrop-blur-xl border border-white/10 rounded-full h-16 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            : "w-full md:w-[95%] bg-transparent border-transparent h-20 shadow-none"
        }`}
      >
        {/* SOL: LOGO */}
        <div className="flex items-center gap-8">
            <Link href="/" className="relative w-32 h-8 flex-shrink-0">
               {mounted && (
                <Image
                  src={logoSrc}
                  alt="Cinesos Logo"
                  fill
                  className="object-contain"
                  priority
                />
               )}
            </Link>
            
            {/* Desktop Menü - Scroll edilince gizleyelim ki kapsül sade olsun */}
            <nav className={`hidden md:flex items-center gap-6 text-sm font-medium transition-opacity duration-300 ${scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
               {/* Menü linkleri burada... */}
               <Link href="/kesfet" className="text-white hover:text-cinesos-yellow transition">Keşfet</Link>
               <Link href="/listeler" className="text-white hover:text-cinesos-yellow transition">Listeler</Link>
            </nav>
        </div>

        {/* ORTA: Search */}
        {/* Scroll edilince search bar küçülür */}
        <div className={`hidden md:block transition-all duration-500 ${scrolled ? "w-48" : "w-1/3"}`}>
             <div className="relative group">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${scrolled ? "text-white" : "text-gray-400"}`} />
                <input 
                    type="text" 
                    placeholder={scrolled ? "Ara..." : "Bugün ne izlemek istersin?"}
                    className={`w-full bg-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-400 outline-none focus:bg-black/50 transition-all ${scrolled ? "bg-transparent border border-white/20" : ""}`}
                />
             </div>
        </div>

        {/* SAĞ: Actions */}
        <div className="flex items-center gap-3">
             <button className="bg-cinesos-yellow hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                SOS
             </button>
             {/* Diğer butonlar (Theme toggle vs) */}
             <ThemeToggle />
             {/* Avatar */}
             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cinesos-yellow to-orange-500 p-[2px]">
                <img src="https://i.pravatar.cc/150?img=11" className="rounded-full w-full h-full border-2 border-black" />
             </div>
        </div>

      </div>
    </header>
  );
}