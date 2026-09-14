"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Sparkles, Film, Tv, Shuffle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Minimal body scroll lock (modal açılınca sayfa scroll olmasın)
 */
function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

interface SOSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SOSModal({ isOpen, onClose }: SOSModalProps) {
  useLockBodyScroll(isOpen);

  const firstActionRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Açılınca ilk butona focus
  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => firstActionRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  // ESC ile kapat
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Dışarı tıklayınca kapat (panel dışı)
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const el = panelRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" aria-modal="true" role="dialog">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Panel */}
        <motion.div
          ref={panelRef}
          initial={{ scale: 0.95, opacity: 0, y: 18 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 14 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-cinesos-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-cinesos-yellow" />
            </div>

            <h2 className="text-2xl font-extrabold text-white mb-2">Acil Durum: Ne İzlesem?</h2>
            <p className="text-gray-400 mb-8">
              Kararsız kaldın mı? Bırak Cinesos senin yerine seçsin.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button
                ref={firstActionRef}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition group outline-none focus:ring-2 focus:ring-cinesos-yellow/50"
                onClick={() => {
                  // TODO: random movie action
                  onClose();
                }}
              >
                <Film className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
                <span className="text-sm font-semibold text-gray-200">Rastgele Film</span>
              </button>

              <button
                className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition group outline-none focus:ring-2 focus:ring-cinesos-yellow/50"
                onClick={() => {
                  // TODO: random tv action
                  onClose();
                }}
              >
                <Tv className="w-6 h-6 text-green-400 group-hover:scale-110 transition" />
                <span className="text-sm font-semibold text-gray-200">Rastgele Dizi</span>
              </button>

              {/* AI mood */}
              <Link
                href="/kesfet?mode=ai"
                className="col-span-2 flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-r from-cinesos-yellow/20 to-orange-500/20 hover:from-cinesos-yellow/30 hover:to-orange-500/30 border border-cinesos-yellow/20 rounded-xl transition group outline-none focus:ring-2 focus:ring-cinesos-yellow/50"
                onClick={onClose}
              >
                <Shuffle className="w-6 h-6 text-cinesos-yellow group-hover:rotate-180 transition duration-500" />
                <span className="text-sm font-extrabold text-cinesos-yellow">Moduma Göre Öner (AI)</span>
              </Link>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white rounded-full p-2 hover:bg-white/5 transition outline-none focus:ring-2 focus:ring-cinesos-yellow/50"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
