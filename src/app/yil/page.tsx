import Link from "next/link";
import { 
  Calendar, Clock, History, Hourglass, 
  FastForward, Rewind, Sparkles 
} from "lucide-react";

// Dönem Listesi Mock Data
const DECADES = [
  { slug: "2020s", name: "2020'ler", count: "Yeni Çağ", color: "from-indigo-500 to-purple-600", icon: Sparkles, desc: "Modern sinemanın ve dijital platformların yükselişi." },
  { slug: "2010s", name: "2010'lar", count: "Blockbuster", color: "from-blue-500 to-cyan-600", icon: FastForward, desc: "Süper kahramanlar ve sinematik evrenler." },
  { slug: "2000s", name: "2000'ler", count: "Milenyum", color: "from-emerald-500 to-teal-600", icon: Calendar, desc: "Dijital efekt devrimi ve fantastik seriler." },
  { slug: "1990s", name: "90'lar", count: "Nostalji", color: "from-pink-500 to-rose-600", icon: Rewind, desc: "Bağımsız sinema ve kült klasikler." },
  { slug: "1980s", name: "80'ler", count: "Neon", color: "from-violet-600 to-fuchsia-700", icon: MusicIcon, desc: "Bilim kurgu, aksiyon ve synthwave." },
  { slug: "1970s", name: "70'ler", count: "Yeni Dalga", color: "from-orange-500 to-amber-700", icon: History, desc: "Gerçekçilik ve modern Hollywood'un doğuşu." },
];

// Tekil Popüler Yıllar
const RECENT_YEARS = [2025, 2024, 2023, 2022, 2021, 2020];

// Icon helper (Music ikonunu lucide'den import etmediysek diye)
function MusicIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

export default function YearsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                Zamanda Yolculuk
            </h1>
            <p className="text-lg text-slate-600 dark:text-gray-300">
                Sinema tarihinin en unutulmaz yıllarına göz at. Geçmişten günümüze bir keşif rotası.
            </p>
        </div>

        {/* Hızlı Erişim: Son Yıllar */}
        <div className="mb-16">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cinesos-yellow" />
                Popüler Yıllar
            </h3>
            <div className="flex flex-wrap gap-3">
                {RECENT_YEARS.map((year) => (
                    <Link 
                        key={year} 
                        href={`/yil/${year}`}
                        className="px-6 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-700 dark:text-white font-bold hover:bg-cinesos-yellow hover:text-black dark:hover:bg-cinesos-yellow dark:hover:text-black transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                        {year}
                    </Link>
                ))}
                <Link 
                    href="/yil/arsiv" 
                    className="px-6 py-3 rounded-xl border border-dashed border-gray-300 dark:border-white/20 text-slate-500 dark:text-gray-400 font-medium hover:border-cinesos-yellow hover:text-cinesos-yellow transition-colors"
                >
                    Tüm Arşiv
                </Link>
            </div>
        </div>

        {/* Onyıllar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DECADES.map((decade) => (
                <Link 
                    key={decade.slug} 
                    href={`/yil/${decade.slug}`} // Bu slug yapısı (2020s) için detay sayfasında mantık kurabiliriz
                    className="group relative h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                    {/* Arkaplan Gradyanı */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${decade.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Desen (Grain) */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    
                    {/* Dekoratif Tarih (Büyük Arka Plan) */}
                    <span className="absolute -bottom-4 -right-4 text-9xl font-black text-white opacity-10 select-none group-hover:scale-110 transition-transform duration-500">
                        {decade.name.substring(0, 2)}
                    </span>

                    {/* İçerik */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                            <decade.icon className="w-6 h-6" />
                        </div>
                        
                        <div>
                            <span className="text-xs font-bold bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm mb-2 inline-block">
                                {decade.count}
                            </span>
                            <h2 className="text-4xl font-black mb-2 drop-shadow-md">{decade.name}</h2>
                            <p className="text-sm font-medium opacity-90 line-clamp-2 leading-relaxed">
                                {decade.desc}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

      </div>
    </div>
  );
}