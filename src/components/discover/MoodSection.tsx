"use client";

import { MOOD_CATEGORIES } from "@/lib/discoverData";
import { motion } from "framer-motion";

export default function MoodSection() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6 px-4 md:px-0">
        {/* RENK DÜZELTMESİ: text-white yerine dinamik renk */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Mood'un Nasıl?</h2>
        <span className="text-xs text-gray-500 font-medium tracking-wider">HİSSETTİĞİN GİBİ SEÇ</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-0">
        {MOOD_CATEGORIES.map((mood, i) => (
          <motion.div
            key={mood.id}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative h-32 rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
          >
            {/* Arkaplan Gradyanı */}
            <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
            
            {/* Gürültü Efekti (Texture) */}
            <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay" />

            {/* İçerik */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 z-10">
              <mood.icon className="w-8 h-8 text-white mb-2 drop-shadow-md" />
              <h3 className="text-white font-bold text-lg leading-tight drop-shadow-sm">{mood.name}</h3>
              <p className="text-white/90 text-[10px] font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {mood.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}