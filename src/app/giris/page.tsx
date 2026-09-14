"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-white dark:bg-cinesos-dark font-sans">
      
      {/* SOL KOLON: SİNEMATİK GÖRSEL (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black overflow-hidden">
        <Image 
            src="https://image.tmdb.org/t/p/original/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg" // Blade Runner 2049
            alt="Login Cover" 
            fill 
            className="object-cover opacity-60"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cinesos-dark" />
        
        <div className="relative z-10 p-16 flex flex-col justify-end h-full">
            <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                Sinema Evrenine <br/>
                <span className="text-cinesos-yellow">Geri Dön.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                Kaldığın yerden devam et, listelerini güncelle ve toplulukla etkileşime geç.
            </p>
        </div>
      </div>

      {/* SAĞ KOLON: FORM */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-12 lg:px-24 py-12 relative">
        
        {/* Mobil/Tablet için Logo */}
        <div className="lg:hidden absolute top-8 left-8">
            <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter">
                cine<span className="text-cinesos-yellow">sos</span>
            </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
            <div className="mb-10">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Hoş Geldin! 👋</h1>
                <p className="text-slate-500 dark:text-gray-400">
                    Hesabına giriş yap ve keşfetmeye başla.
                </p>
            </div>

            <form className="space-y-6">
                
                {/* Email Input */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1">E-posta Adresi</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-cinesos-yellow transition-colors" />
                        </div>
                        <input 
                            type="email" 
                            placeholder="ornek@cinesos.com" 
                            className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinesos-yellow/50 focus:border-cinesos-yellow transition-all"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                        <label className="text-sm font-bold text-slate-700 dark:text-gray-300">Şifre</label>
                        <Link href="#" className="text-xs font-bold text-cinesos-yellow hover:underline">Şifremi Unuttum?</Link>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-cinesos-yellow transition-colors" />
                        </div>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••" 
                            className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinesos-yellow/50 focus:border-cinesos-yellow transition-all"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-4 bg-cinesos-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-lg shadow-cinesos-yellow/20 flex items-center justify-center gap-2 group">
                    Giriş Yap
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

            </form>

            {/* Divider */}
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white dark:bg-cinesos-dark text-gray-500">veya şununla devam et</span>
                </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition font-bold text-slate-700 dark:text-white text-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition font-bold text-slate-700 dark:text-white text-sm">
                    <svg className="w-5 h-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.1 1.88-2.5 5.75.1 6.74-.24.77-.58 1.53-1.05 2.33-.5.81-.89 1.43-1.1 1.98zm-2.43-15.3c.3.93.12 2.22-.68 3.06-.93.93-2.29.98-3.03.1-.78-.97-.53-2.31.35-3.21.95-.9 2.45-.98 3.36.05z"/></svg>
                    Apple
                </button>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-slate-500 dark:text-gray-400 mt-8">
                Henüz hesabın yok mu?{" "}
                <Link href="/kayit" className="font-bold text-slate-900 dark:text-white hover:text-cinesos-yellow transition-colors">
                    Kayıt Ol
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
}