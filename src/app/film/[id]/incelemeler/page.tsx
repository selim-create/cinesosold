"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, Star, ThumbsUp, MessageSquare, 
  MoreHorizontal, Filter, ArrowDownWideNarrow, Flag 
} from "lucide-react";

// Mock Data
const REVIEWS_DATA = [
  {
    id: 1,
    author: "Ahmet Yılmaz",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 10,
    date: "24 Ocak 2026",
    content: "Sinema tarihinin en büyük bilim kurgu epiklerinden biri. Görsel efektler, ses tasarımı ve Hans Zimmer'ın müzikleri inanılmaz. Kesinlikle IMAX'te izlenmeli. Denis Villeneuve, Frank Herbert'in karmaşık dünyasını o kadar ustalıkla beyazperdeye aktarmış ki, her karesi bir tablo gibi.",
    likes: 245,
    replies: 12,
    spoilers: false
  },
  {
    id: 2,
    author: "Zeynep Kaya",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 9,
    date: "25 Ocak 2026",
    content: "İlk filme göre çok daha tempolu ve aksiyon dolu. Oyunculuklar şahane, özellikle Austin Butler Feyd-Rautha rolünde parlıyor. Tek eleştirim, bazı yan karakterlerin hikayesinin biraz hızlı geçiştirilmesi oldu ama genel deneyimi bozmuyor.",
    likes: 189,
    replies: 5,
    spoilers: false
  },
  {
    id: 3,
    author: "Mehmet Demir",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 8,
    date: "26 Ocak 2026",
    content: "Görsel bir şölen olduğu kesin, ancak kitabın bazı felsefi derinliklerinin aksiyon uğruna feda edildiğini düşünüyorum. Yine de sinemada izlenebilecek en iyi deneyimlerden biri.",
    likes: 56,
    replies: 2,
    spoilers: true
  },
  {
    id: 4,
    author: "Elif Sönmez",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 10,
    date: "22 Ocak 2026",
    content: "Sadece bir film değil, bir deneyim. Dune evrenine bu kadar sadık kalınması ve aynı zamanda sinematik dilin bu denli güçlü kullanılması takdire şayan. Zendaya ve Chalamet kimyası harika.",
    likes: 312,
    replies: 24,
    spoilers: false
  }
];

export default function FilmReviewsPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans">
      
      {/* 1. MINI HERO */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" 
            alt="Backdrop" 
            fill 
            className="object-cover opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-cinesos-dark" />
        </div>
        <div className="container mx-auto px-4 md:px-6 h-full flex items-end pb-8 relative z-10">
          <div className="flex items-center gap-6">
            <Link href="/film/dune-2" className="flex-shrink-0 w-24 h-36 rounded-lg shadow-lg overflow-hidden border-2 border-white dark:border-white/10 group relative">
               <Image 
                 src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" 
                 alt="Poster" 
                 fill 
                 className="object-cover group-hover:scale-105 transition-transform"
               />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <ChevronLeft className="text-white" />
               </div>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">
                Dune: Part Two
              </h1>
              <Link href="/film/dune-2" className="flex items-center gap-1 text-cinesos-yellow hover:underline text-sm font-bold">
                <ChevronLeft className="w-4 h-4" /> Filme Dön
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STICKY TABS */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-cinesos-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 mb-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                <Link href="/film/dune-2" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Genel Bakış
                </Link>
                <Link href="/film/dune-2/kadro" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Kadro & Ekip
                </Link>
                <Link href="/film/dune-2/medya" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Medya (12)
                </Link>
                <Link href="/film/dune-2/haberler" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Haberler (3)
                </Link>
                <button className="py-4 border-b-2 border-cinesos-yellow text-cinesos-yellow font-bold text-sm whitespace-nowrap">
                    İncelemeler (45)
                </button>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL KOLON: İNCELEMELER (8/12) */}
            <div className="lg:col-span-8 space-y-8">
                
                {/* Filtreleme Başlığı */}
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        Kullanıcı İncelemeleri
                        <span className="text-base font-normal text-slate-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md">
                            45 Yorum
                        </span>
                    </h3>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition text-slate-700 dark:text-gray-200"
                        >
                            <ArrowDownWideNarrow className="w-4 h-4" />
                            En Popüler
                        </button>
                        <button className="p-2 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition">
                            <Filter className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* İnceleme Listesi */}
                <div className="space-y-6">
                    {REVIEWS_DATA.map((review) => (
                        <div key={review.id} className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 dark:border-white/10">
                                    <Image src={review.avatar} alt={review.author} width={48} height={48} className="object-cover" />
                                </div>
                                
                                <div className="flex-1">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">{review.author}</h4>
                                            <span className="text-xs text-slate-500 dark:text-gray-400">{review.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {review.spoilers && (
                                                <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
                                                    SPOILER
                                                </span>
                                            )}
                                            <div className="flex items-center gap-1 bg-yellow-500/10 px-3 py-1 rounded-lg text-yellow-600 dark:text-yellow-500 font-black text-sm border border-yellow-500/20">
                                                <Star className="w-4 h-4 fill-current" />
                                                {review.rating}/10
                                            </div>
                                        </div>
                                    </div>

                                    {/* İçerik */}
                                    <p className={`text-slate-700 dark:text-gray-200 leading-relaxed mb-4 ${review.spoilers ? 'blur-sm select-none hover:blur-0 hover:select-auto transition-all cursor-pointer' : ''}`}>
                                        {review.content}
                                    </p>

                                    {/* Aksiyonlar */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                                        <div className="flex gap-4">
                                            <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-cinesos-yellow transition group">
                                                <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                {review.likes}
                                            </button>
                                            <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-white transition group">
                                                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                {review.replies} Yanıt
                                            </button>
                                        </div>
                                        <button className="text-slate-400 hover:text-white transition p-1 rounded-full hover:bg-white/10">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <button className="w-full py-4 rounded-xl border border-gray-300 dark:border-white/10 text-slate-600 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition">
                    Daha Fazla Göster
                </button>
            </div>

            {/* SAĞ KOLON: İSTATİSTİKLER & KENDİ PUANIN (4/12) */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Puan Özeti Kartı */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Puan Dağılımı</h3>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-20 h-20 bg-cinesos-yellow text-black rounded-2xl flex flex-col items-center justify-center font-black shadow-lg shadow-cinesos-yellow/20">
                            <span className="text-3xl leading-none">9.2</span>
                            <span className="text-xs opacity-80">Ortalama</span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-slate-500 dark:text-gray-400">Toplam Oy</p>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">12,450</p>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="space-y-2">
                        {[10, 9, 8, 7, 6].map((score, i) => (
                            <div key={score} className="flex items-center gap-3 text-xs font-medium">
                                <span className="w-3 text-slate-500 dark:text-gray-400">{score}</span>
                                <div className="flex-1 h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-cinesos-yellow rounded-full" 
                                        style={{ width: `${[60, 25, 10, 3, 2][i]}%` }}
                                    />
                                </div>
                                <span className="w-8 text-right text-slate-500 dark:text-gray-400">{[60, 25, 10, 3, 2][i]}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Kullanıcı Aksiyonu */}
                <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cinesos-yellow/20 blur-[60px] rounded-full" />
                    
                    <h3 className="relative z-10 font-bold text-white text-lg mb-2">Senin Düşüncelerin?</h3>
                    <p className="relative z-10 text-indigo-200 text-sm mb-6">Bu filmi izledin mi? Toplulukla fikirlerini paylaş.</p>
                    
                    <button className="relative z-10 w-full py-3 rounded-xl bg-cinesos-yellow text-black font-bold hover:bg-yellow-400 transition shadow-lg shadow-black/20 flex items-center justify-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        İnceleme Yaz
                    </button>
                </div>

                {/* Kurallar / Bilgi */}
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs leading-relaxed flex gap-3">
                    <Flag className="w-5 h-5 flex-shrink-0" />
                    <p>
                        Spoiler içeren yorumlarınızı işaretlemeyi unutmayın. Topluluk kurallarına uymayan yorumlar moderatörler tarafından kaldırılabilir.
                    </p>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}