import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, User, Share2, Facebook, Twitter, Link as LinkIcon } from "lucide-react";

// Mock Data
const CAST_DATA = [
  { id: 1, name: "Timothée Chalamet", role: "Paul Atreides", image: "https://image.tmdb.org/t/p/w500/BE2sdjpgEHrT5l8lIi6JApJu0.jpg" },
  { id: 2, name: "Zendaya", role: "Chani", image: "https://image.tmdb.org/t/p/w500/cbCibOAns4QQClDfpLn4FGTqDLR.jpg" },
  { id: 3, name: "Rebecca Ferguson", role: "Lady Jessica", image: "https://image.tmdb.org/t/p/w500/lJloTOheuQSirSLXcB3JsLPmLys.jpg" },
  { id: 4, name: "Javier Bardem", role: "Stilgar", image: "https://image.tmdb.org/t/p/w500/gGeT01s8kP60q3567dG0Wf24V2V.jpg" },
  { id: 5, name: "Josh Brolin", role: "Gurney Halleck", image: "https://image.tmdb.org/t/p/w500/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg" },
  { id: 6, name: "Austin Butler", role: "Feyd-Rautha", image: "https://image.tmdb.org/t/p/w500/2Ig176FD50qI51T2j6f3aZq3wX.jpg" },
  { id: 7, name: "Florence Pugh", role: "Princess Irulan", image: "https://image.tmdb.org/t/p/w500/fhEsn35uAwUZy37RKpLJSbwpvDv.jpg" },
  { id: 8, name: "Dave Bautista", role: "Beast Rabban", image: "https://image.tmdb.org/t/p/w500/n70J37YOBYEvLOtdfSFXOCmicuv.jpg" },
  { id: 9, name: "Christopher Walken", role: "Emperor Shaddam IV", image: "https://image.tmdb.org/t/p/w500/Apg37784HL5Q70YRE5N4QoG6WjE.jpg" },
  { id: 10, name: "Léa Seydoux", role: "Lady Margot", image: "https://image.tmdb.org/t/p/w500/19g1b965o4k512CqNqF9aNn5u7L.jpg" },
];

const CREW_DATA = {
  directing: [
    { name: "Denis Villeneuve", job: "Director", image: "https://image.tmdb.org/t/p/w200/qpUE7X5jE6Udfb975Gg48zU61fI.jpg" },
    { name: "Jon Spaihts", job: "Screenplay", image: null },
  ],
  production: [
    { name: "Mary Parent", job: "Producer", image: null },
    { name: "Cale Boyter", job: "Producer", image: null },
    { name: "Tanya Lapointe", job: "Executive Producer", image: null },
  ],
  sound: [
    { name: "Hans Zimmer", job: "Original Music Composer", image: "https://image.tmdb.org/t/p/w200/tpQnDeHY15szIXvpnhlprufz4d.jpg" },
    { name: "Theo Green", job: "Sound Designer", image: null },
  ],
  camera: [
    { name: "Greig Fraser", job: "Director of Photography", image: null },
  ],
  art: [
    { name: "Patrice Vermette", job: "Production Design", image: null },
    { name: "Shane Vieau", job: "Set Decoration", image: null },
  ]
};

export default function MovieCastPage() {
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
                <button className="py-4 border-b-2 border-cinesos-yellow text-cinesos-yellow font-bold text-sm whitespace-nowrap">
                    Kadro & Ekip
                </button>
                <Link href="/film/dune-2/medya" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Medya (12)
                </Link>
                <Link href="/film/dune-2/haberler" className="py-4 border-b-2 border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm whitespace-nowrap transition-colors">
                    Haberler (3)
                </Link>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* SOL KOLON: OYUNCULAR (3/4 Genişlik) */}
            <div className="lg:col-span-3 space-y-12">
                
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-cinesos-yellow rounded-full"></span>
                            Oyuncu Kadrosu
                            <span className="text-sm font-normal text-slate-500 dark:text-gray-400 ml-2">({CAST_DATA.length})</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {CAST_DATA.map((person) => (
                            <Link key={person.id} href={`/kisi/${person.id}`} className="group relative bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-cinesos-yellow/50 transition-all shadow-sm hover:shadow-xl">
                                <div className="aspect-[3/4] relative overflow-hidden bg-gray-200 dark:bg-gray-800">
                                    <Image 
                                        src={person.image} 
                                        alt={person.name} 
                                        fill 
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-cinesos-yellow transition-colors">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-gray-400">
                                        {person.role}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="h-px bg-gray-200 dark:bg-white/5 my-8" />

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                         <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                         Prodüksiyon Ekibi
                    </h2>

                    <div className="space-y-10">
                        <CrewGroup title="Yönetim & Senaryo" items={CREW_DATA.directing} />
                        <CrewGroup title="Prodüksiyon" items={CREW_DATA.production} />
                        <div className="grid md:grid-cols-2 gap-10">
                            <CrewGroup title="Kamera & Işık" items={CREW_DATA.camera} />
                            <CrewGroup title="Sanat Yönetimi" items={CREW_DATA.art} />
                        </div>
                         <CrewGroup title="Ses & Müzik" items={CREW_DATA.sound} />
                    </div>
                </section>

            </div>

            {/* SAĞ KOLON */}
            <div className="space-y-8">
                 <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 sticky top-24">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Kadro İstatistikleri</h3>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Toplam Oyuncu</span>
                            <span className="font-bold text-slate-900 dark:text-white">42 Kişi</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Toplam Ekip</span>
                            <span className="font-bold text-slate-900 dark:text-white">1,205 Kişi</span>
                        </div>
                        <div className="w-full h-px bg-gray-200 dark:bg-white/10" />
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Yönetmen</span>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-gray-300 overflow-hidden relative">
                                     <Image src={CREW_DATA.directing[0].image || ""} alt="Dir" fill className="object-cover" />
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white">D. Villeneuve</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Listeyi Paylaş</h4>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-lg bg-[#1877F2] text-white hover:opacity-90 transition">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-lg bg-[#1DA1F2] text-white hover:opacity-90 transition">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-lg bg-gray-200 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition">
                                <LinkIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </div>
  );
}

// Helper Component for Crew Groups
function CrewGroup({ title, items }: { title: string, items: any[] }) {
    return (
        <div>
            <h4 className="font-bold text-lg text-slate-800 dark:text-gray-200 mb-4 border-b border-gray-200 dark:border-white/10 pb-2">
                {title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((person, i) => (
                    <Link key={i} href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition group">
                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0 relative overflow-hidden border border-gray-200 dark:border-white/5">
                            {person.image ? (
                                <Image src={person.image} alt={person.name} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <User className="w-6 h-6" />
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white group-hover:text-cinesos-yellow transition-colors">
                                {person.name}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-gray-400">
                                {person.job}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}