"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, Twitter, Instagram, Youtube, 
  Mail, ArrowRight, Heart, Send 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-black text-slate-600 dark:text-gray-400 pt-20 pb-10 overflow-hidden font-sans border-t border-gray-200 dark:border-white/5">
      
      {/* Dekoratif Arkaplan Efektleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cinesos-yellow/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 1. NEWSLETTER & CTA SECTION */}
        <div className="bg-slate-900 dark:bg-white/5 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl">
            {/* Arkaplan Deseni */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            
            <div className="relative z-10 max-w-lg text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                    Sinema Dünyasından Kopma.
                </h3>
                <p className="text-slate-300">
                    Haftalık öneriler, özel incelemeler ve sektör haberleri için bültenimize katıl. Spam yok, sadece sinema.
                </p>
            </div>

            <div className="relative z-10 w-full max-w-md">
                <form className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="email" 
                            placeholder="E-posta adresin" 
                            className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinesos-yellow/50 focus:border-cinesos-yellow transition-all"
                        />
                    </div>
                    <button className="px-6 py-3.5 bg-cinesos-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition flex items-center justify-center gap-2 shadow-lg shadow-cinesos-yellow/20">
                        Abone Ol <Send className="w-4 h-4" />
                    </button>
                </form>
                <p className="text-xs text-slate-400 mt-3 text-center md:text-left">
                    Abone olarak <Link href="/gizlilik" className="underline hover:text-white">Gizlilik Politikamızı</Link> kabul etmiş olursun.
                </p>
            </div>
        </div>

        {/* 2. LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-16">
            
            {/* Kolon 1: Marka */}
            <div className="col-span-2 lg:col-span-2">
                <Link href="/" className="inline-block mb-6 relative w-32 h-10">
                    <Image 
                        src="/cinesos.svg" 
                        alt="Cinesos Logo" 
                        fill 
                        className="object-contain"
                    />
                </Link>
                <p className="text-slate-500 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
                    Binlerce film ve dizi arasında kaybolma. Ne izleyeceğine karar vermeni sağlayan yeni nesil keşif ve topluluk platformu.
                </p>
                <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                        <Link key={i} href="#" className="p-2.5 bg-gray-100 dark:bg-white/5 rounded-full text-slate-600 dark:text-gray-400 hover:bg-cinesos-yellow hover:text-black transition-all group">
                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Kolon 2: Keşfet */}
            <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">Keşfet</h4>
                <ul className="space-y-4">
                    {["Vizyondakiler", "Yakında Gelecekler", "Popüler Diziler", "Top 250 Film", "Editör Listeleri"].map((item) => (
                        <li key={item}>
                            <Link href="#" className="hover:text-cinesos-yellow transition-colors text-sm font-medium">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Kolon 3: Topluluk & Yardım */}
            <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">Topluluk</h4>
                <ul className="space-y-4">
                    {["Radar Akışı", "Liderlik Tablosu", "İncelemeler", "Gündem", "Yardım Merkezi"].map((item) => (
                        <li key={item}>
                            <Link href="#" className="hover:text-cinesos-yellow transition-colors text-sm font-medium">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Kolon 4: Mobil App */}
            <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">Mobil Uygulama</h4>
                <p className="text-xs text-slate-500 mb-4">Cinesos deneyimini cebine taşı. Çok yakında mağazalarda.</p>
                <div className="space-y-3">
                    <button className="flex items-center gap-3 w-full bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 text-white p-3 rounded-xl transition border border-white/10">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.1 1.88-2.5 5.75.1 6.74-.24.77-.58 1.53-1.05 2.33-.5.81-.89 1.43-1.1 1.98zm-2.43-15.3c.3.93.12 2.22-.68 3.06-.93.93-2.29.98-3.03.1-.78-.97-.53-2.31.35-3.21.95-.9 2.45-.98 3.36.05z"/></svg>
                        <div className="text-left leading-none">
                            <div className="text-[9px] uppercase font-bold opacity-60">Download on the</div>
                            <div className="text-sm font-bold">App Store</div>
                        </div>
                    </button>
                    <button className="flex items-center gap-3 w-full bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 text-white p-3 rounded-xl transition border border-white/10">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.048 2.048 0 01-.664-1.512V3.326c0-.601.246-1.154.664-1.512zm11.517 11.515l3.229 3.229-9.529 5.409L15.126 13.33zM15.126 10.67l-6.299-8.627 9.529 5.409-3.229 3.218zm4.618 1.944l2.422-1.375c.876-.497.876-1.981 0-2.478l-2.422-1.375-3.32 3.32 3.32 3.908z"/></svg>
                        <div className="text-left leading-none">
                            <div className="text-[9px] uppercase font-bold opacity-60">GET IT ON</div>
                            <div className="text-sm font-bold">Google Play</div>
                        </div>
                    </button>
                </div>
            </div>

        </div>

        {/* 3. BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
                &copy; {currentYear} Hipmedya. Tüm hakları saklıdır.
            </p>
            
            <div className="flex gap-6 text-sm font-medium">
                <Link href="/kullanim-sartlari" className="hover:text-cinesos-yellow transition">Kullanım Şartları</Link>
                <Link href="/gizlilik" className="hover:text-cinesos-yellow transition">Gizlilik Politikası</Link>
                <Link href="/cerezler" className="hover:text-cinesos-yellow transition">Çerezler</Link>
            </div>

            <div className="flex items-center gap-1 text-sm text-slate-500">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                <span>in İstanbul</span>
            </div>
        </div>

      </div>
    </footer>
  );
}