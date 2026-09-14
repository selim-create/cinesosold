import DiscoverHero from "@/components/discover/DiscoverHero";
import FilterBar from "@/components/discover/FilterBar";
import MoodSection from "@/components/discover/MoodSection";
import ContentRow from "@/components/discover/ContentRow";
import { DISCOVER_ROWS } from "@/lib/discoverData";
import { Crown, Sparkles } from "lucide-react";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark pb-20 transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <DiscoverHero />

      {/* 2. STICKY FILTER BAR */}
      <FilterBar />

      <main className="container mx-auto px-4 md:px-6 space-y-8 md:space-y-12">
        
        {/* 3. MOOD SECTION */}
        <MoodSection />

        {/* 4. CURATED ROWS */}
        <div className="space-y-4">
            {DISCOVER_ROWS.map((row, index) => (
                <ContentRow key={index} title={row.title} items={row.items} />
            ))}
            
            {/* Doluluk İçin Ekstra Satırlar */}
            <ContentRow title="Bu Hafta Gündemde" items={[...DISCOVER_ROWS[0].items].reverse()} />
        </div>

        {/* 5. PREMIUM BANNER - YENİLENMİŞ TASARIM */}
        <section className="relative w-full rounded-3xl overflow-hidden my-16 shadow-2xl group">
            {/* Arkaplan */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black z-0"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cinesos-yellow/20 blur-[120px] rounded-full mix-blend-screen opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>

            {/* İçerik */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 text-center md:text-left">
                <div className="max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
                        <Crown className="w-4 h-4 text-cinesos-yellow" />
                        <span className="text-cinesos-yellow font-bold text-xs uppercase tracking-wider">Cinesos Premium</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        Kararsızlığı <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinesos-yellow to-orange-400">Yapay Zeka ile Çöz.</span>
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                        Sadece sana özel, izleme alışkanlıklarına göre eğitilmiş AI küratör ile tanış. Reklamsız, limitsiz ve nokta atışı öneriler.
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <button className="group/btn relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(250,204,21,0.5)] transition-all transform hover:scale-105">
                        <span className="relative z-10 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-indigo-600" />
                            <span>Ücretsiz Dene</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cinesos-yellow to-orange-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <p className="text-gray-400 text-xs mt-3 text-center">7 gün ücretsiz, istediğin zaman iptal et.</p>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}