"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Info, ChevronRight } from "lucide-react";
import { FEATURED_CONTENT } from "@/lib/discoverData";

export default function DiscoverHero() {
  const [index, setIndex] = useState(0);

  // Otomatik Slider Geçişi
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % FEATURED_CONTENT.length);
    }, 8000); // 8 saniyede bir değişir
    return () => clearInterval(timer);
  }, []);

  const content = FEATURED_CONTENT[index];

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={content.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Arkaplan Görseli */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${content.poster})` }}
          />
          {/* Gradyan Katmanları */}
          <div className="absolute inset-0 bg-gradient-to-t from-cinesos-dark via-cinesos-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-cinesos-dark via-cinesos-dark/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* İçerik Bilgileri */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-24 z-10 flex flex-col justify-end h-full">
        <div className="max-w-3xl space-y-4">
          <motion.div 
            key={`badge-${content.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
             <span className="bg-cinesos-yellow text-black text-xs font-bold px-2 py-1 rounded">GÜNÜN ÖNERİSİ</span>
             <span className="text-gray-300 text-sm font-medium">{content.genre} • {content.year}</span>
          </motion.div>

          <motion.h1 
            key={`title-${content.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl"
          >
            {content.title}
          </motion.h1>

          <motion.p 
            key={`desc-${content.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-base md:text-xl line-clamp-3 md:line-clamp-2 max-w-2xl drop-shadow-md"
          >
            {content.description}
          </motion.p>

          <motion.div 
            key={`btns-${content.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 pt-4"
          >
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-bold hover:bg-gray-200 transition transform hover:scale-105">
              <Play className="w-5 h-5 fill-current" />
              <span>Hemen İzle</span>
            </button>
            <button className="flex items-center gap-2 bg-white/10 text-white backdrop-blur-md px-6 py-3.5 rounded-full font-bold hover:bg-white/20 transition">
              <Info className="w-5 h-5" />
              <span>Detaylar</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slider İndikatörleri */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {FEATURED_CONTENT.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-cinesos-yellow" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}