import Link from "next/link";
import { 
  Zap, Laugh, Skull, Heart, Rocket, Ghost, 
  Sword, Music, Search, Microscope, 
  Drama, Clapperboard, Globe 
} from "lucide-react";

// Tür Listesi Mock Data
const GENRES = [
  { slug: "aksiyon", name: "Aksiyon", count: "1.2k+", color: "from-red-500 to-orange-600", icon: Zap, desc: "Adrenalin ve heyecan dolu." },
  { slug: "bilim-kurgu", name: "Bilim Kurgu", count: "850+", color: "from-emerald-400 to-teal-600", icon: Rocket, desc: "Gelecek, uzay ve teknoloji." },
  { slug: "komedi", name: "Komedi", count: "2.4k+", color: "from-yellow-400 to-amber-600", icon: Laugh, desc: "Eğlence ve kahkaha garantili." },
  { slug: "dram", name: "Dram", count: "3.1k+", color: "from-blue-400 to-indigo-600", icon: Clapperboard, desc: "Derin hikayeler ve duygular." },
  { slug: "korku", name: "Korku", count: "600+", color: "from-gray-700 to-black", icon: Ghost, desc: "Gerilim ve ürperti." },
  { slug: "romantik", name: "Romantik", count: "1.5k+", color: "from-pink-400 to-rose-600", icon: Heart, desc: "Aşk ve ilişkiler." },
  { slug: "macera", name: "Macera", count: "900+", color: "from-orange-400 to-red-500", icon: Sword, desc: "Keşif ve yolculuk." },
  { slug: "suc", name: "Suç & Gizem", count: "750+", color: "from-slate-600 to-slate-800", icon: Search, desc: "Dedektiflik ve yeraltı dünyası." },
  { slug: "belgesel", name: "Belgesel", count: "1.1k+", color: "from-lime-500 to-green-700", icon: Globe, desc: "Gerçek hayat hikayeleri." },
  { slug: "animasyon", name: "Animasyon", count: "950+", color: "from-purple-400 to-fuchsia-600", icon: Microscope, desc: "Çizgi dünyaların büyüsü." }, // İkon temsili
  { slug: "muzik", name: "Müzikal", count: "400+", color: "from-cyan-400 to-blue-600", icon: Music, desc: "Ritim ve dans." },
];

export default function GenresPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                Kategorileri Keşfet
            </h1>
            <p className="text-lg text-slate-600 dark:text-gray-300">
                Moduna en uygun içerikleri bulmak için türler arasında gezintiye çık.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GENRES.map((genre) => (
                <Link 
                    key={genre.slug} 
                    href={`/tur/${genre.slug}`}
                    className="group relative h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    {/* Arkaplan Gradyanı */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Desen (Noise Texture) */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    
                    {/* İçerik */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                        <div className="flex justify-between items-start">
                            <genre.icon className="w-8 h-8 drop-shadow-md" />
                            <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                                {genre.count}
                            </span>
                        </div>
                        
                        <div>
                            <h2 className="text-2xl font-bold mb-1 drop-shadow-sm">{genre.name}</h2>
                            <p className="text-xs font-medium opacity-90 line-clamp-2">
                                {genre.desc}
                            </p>
                        </div>
                    </div>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                </Link>
            ))}
        </div>

      </div>
    </div>
  );
}