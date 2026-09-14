"use client";

import Image from "next/image";
import { ExternalLink, MonitorPlay } from "lucide-react";

interface Platform {
  name: string;
  type: string;
  price: string;
  quality: string;
  url: string;
}

export default function WhereToWatch({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-white/5 sticky top-24">
      <div className="flex items-center gap-2 mb-4">
        <MonitorPlay className="w-5 h-5 text-cinesos-yellow" />
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Nerede İzlenir?</h3>
      </div>

      <div className="space-y-3">
        {platforms.map((p, i) => (
          <a 
            key={i} 
            href={p.url}
            className="group flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {/* Platform Logosu (Temsili Renk Kutusu yerine gerçek logo gelecek) */}
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                {p.name.substring(0, 3)}
              </div>
              
              <div>
                <p className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-cinesos-yellow transition-colors">
                  {p.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {p.type} • <span className="text-green-600 dark:text-green-400 font-medium">{p.quality}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
               <span className="text-sm font-bold text-slate-900 dark:text-white">{p.price}</span>
               <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cinesos-yellow" />
            </div>
          </a>
        ))}
      </div>
      
      <p className="text-[10px] text-gray-400 mt-4 text-center">
        Fiyatlar ve kullanılabilirlik anlık olarak güncellenmektedir.
      </p>
    </div>
  );
}