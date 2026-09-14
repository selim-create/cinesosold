// src/components/header/HybridHeader.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Menu, Bell, User, Settings, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "@/hooks/use-scrolled";

import NavDock from "./NavDock";
import SearchCommand from "./SearchCommand";
import ThemeToggle from "../ThemeToggle";
import SOSModal from "./SOSModal";

// ✅ yeni hook’lar
import { useOnClickOutside } from "@/hooks/use-onclick-outside";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";

export default function HybridHeader() {
  const scrolled = useScrolled(20);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [sosOpen, setSosOpen] = useState(false);

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // ✅ dışarı tıklama
  useOnClickOutside(userMenuRef, () => setUserMenuOpen(false), userMenuOpen);

  // ✅ body scroll lock (mobile drawer varsa)
  useLockBodyScroll(mobileMenuOpen);

  // ✅ Escape ile kapat
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setUserMenuOpen(false);
      setMobileMenuOpen(false);
      setSosOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Menü çakışma kontrolü (opsiyonel ama temiz)
  useEffect(() => {
    if (mobileMenuOpen) setUserMenuOpen(false);
  }, [mobileMenuOpen]);

  const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "dark";
  const logoSrc = currentTheme === "dark" ? "/cinesos-white.svg" : "/cinesos.svg";

  const outerContainerClasses = `fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
    scrolled ? "top-4" : "top-0"
  }`;

  const innerCapsuleClasses = `relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
    scrolled
      ? "w-[95%] md:w-[90%] max-w-7xl h-16 rounded-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/40 dark:border-white/10 px-6"
      : "w-full h-24 bg-transparent border-transparent px-6 md:px-12 pt-4"
  }`;

  const logoContainerClasses = `relative flex items-center justify-center transition-all duration-300 ${
    !scrolled ? "bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-sm" : ""
  }`;

  const sosBtnClasses =
    "flex items-center gap-2 bg-cinesos-yellow hover:bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-bold text-xs lg:text-sm shadow-lg shadow-cinesos-yellow/20 hover:shadow-cinesos-yellow/40 transition-all hover:-translate-y-0.5 active:translate-y-0";

  return (
    <>
      <AnimatePresence>
        {sosOpen && <SOSModal isOpen={sosOpen} onClose={() => setSosOpen(false)} />}
      </AnimatePresence>

      <header className={outerContainerClasses} role="banner">
        <div className={innerCapsuleClasses}>
          {/* SOL */}
          <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
            <Link href="/" className="relative z-50 flex-shrink-0 block group" aria-label="Cinesos ana sayfa">
              <div className={logoContainerClasses}>
                <div className={`relative transition-all duration-300 ${scrolled ? "w-24 h-7" : "w-28 h-8"}`}>
                  {mounted && (
                    <Image src={logoSrc} alt="Cinesos" fill className="object-contain drop-shadow-sm" priority />
                  )}
                </div>
              </div>
            </Link>

            <div className={`${scrolled ? "scale-95" : "scale-100"} transition-transform origin-left`}>
              <NavDock scrolled={scrolled} />
            </div>
          </div>

          {/* ORTA */}
          <div className="hidden md:flex flex-1 justify-center px-4 lg:px-8">
            <SearchCommand scrolled={mounted ? scrolled : false} />
          </div>

          {/* SAĞ */}
          <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
            <button onClick={() => setSosOpen(true)} className={sosBtnClasses} aria-label="SOS: Ne izlesem?">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">SOS</span>
            </button>

            <div className={`w-px h-5 mx-1 hidden sm:block transition-colors ${scrolled ? "bg-slate-300 dark:bg-white/10" : "bg-white/30"}`} />

            <ThemeToggle />

            <button
              className={`relative p-2 rounded-full transition ${
                scrolled
                  ? "hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300"
                  : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
              }`}
              aria-label="Bildirimler"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white dark:border-black" />
            </button>

            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen((v) => !v)}
                aria-expanded={userMenuOpen}
                aria-haspopup="menu"
                className={`hidden sm:block w-9 h-9 lg:w-10 lg:h-10 rounded-full p-[2px] cursor-pointer hover:ring-2 hover:ring-cinesos-yellow/50 transition border ${
                  scrolled ? "border-transparent" : "border-white/30"
                }`}
              >
                {/* ✅ local placeholder önerisi */}
                <Image
                  src="/avatar-placeholder.png"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full object-cover shadow-sm"
                  alt="Profil"
                />
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-3 w-64 rounded-2xl shadow-xl p-2 z-[60] border overflow-hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-slate-200 dark:border-white/10 ring-1 ring-black/5"
                    role="menu"
                  >
                    <div className="px-4 py-3 border-b border-slate-200/50 dark:border-white/5 mb-1">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Selim Altınkaynak</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Premium Üye ✨</p>
                    </div>

                    <div className="space-y-1">
                      <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition text-left">
                        <User className="w-4 h-4" /> Profilim
                      </button>
                      <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition text-left">
                        <Settings className="w-4 h-4" /> Ayarlar
                      </button>
                    </div>

                    <div className="border-t border-slate-200/50 dark:border-white/5 mt-2 pt-2">
                      <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition text-left font-bold">
                        <LogOut className="w-4 h-4" /> Çıkış Yap
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-label="Mobil menü"
              className={`md:hidden p-2 rounded-full ${
                scrolled ? "text-slate-700 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/10" : "text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
