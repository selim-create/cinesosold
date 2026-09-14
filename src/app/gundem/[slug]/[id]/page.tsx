"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, Calendar, Clock, 
  Share2, MessageSquare, Facebook, Twitter, Link as LinkIcon, 
  ThumbsUp, User, Film, Tv, Star, Bookmark 
} from "lucide-react";

// Mock Data: Zenginleştirilmiş Tekil Haber
const NEWS_DETAIL = {
  id: 101,
  title: "The Last of Us 2. Sezon Çekimleri Tamamlandı: İşte İlk Detaylar ve Vizyon Tarihi",
  excerpt: "HBO'nun hit dizisi The Last of Us'ın merakla beklenen ikinci sezonu için prodüksiyon süreci sona erdi. Setten gelen ilk fotoğraflar ve yapımcıların açıklamaları haberimizde.",
  content: `
    <p>Pedro Pascal ve Bella Ramsey'nin başrollerini paylaştığı HBO'nun fenomen dizisi <strong>The Last of Us</strong>'ın 2. sezon çekimleri resmen tamamlandı. Dizinin yaratıcılarından Craig Mazin, Instagram hesabından yaptığı paylaşımla çekimlerin sona erdiğini ve ekibin "Wrap Party"de bir araya geldiğini duyurdu.</p>
    
    <h3>Ne Zaman Yayınlanacak?</h3>
    <p>HBO, dizinin yeni sezonunun <strong>2025'in ilk çeyreğinde</strong> izleyiciyle buluşacağını doğruladı. Post-prodüksiyon sürecinin yaklaşık 6-8 ay sürmesi bekleniyor. Bu sezon, ilk oyunun devamı olan "The Last of Us Part II"nun hikayesini konu alacak, ancak tüm oyun tek bir sezonda işlenmeyecek.</p>
    
    <h3>Yeni Karakterler ve Oyuncular</h3>
    <p>İkinci sezonda kadroya dahil olan isimler arasında Kaitlyn Dever (Abby), Isabela Merced (Dina) ve Young Mazino (Jesse) bulunuyor. Özellikle Abby karakterinin hikayeye dahil olmasıyla dizinin tonunun çok daha karanlık ve tartışmalı bir hal alması bekleniyor.</p>
    
    <blockquote>
      "İkinci sezon, ilkinden çok daha büyük, çok daha karmaşık ve duygusal olarak çok daha yıkıcı olacak." - Neil Druckmann
    </blockquote>

    <p>Çekimlerin büyük bir kısmı Vancouver'da gerçekleşti ve oyunun ikonik mekanlarının birebir replikaları inşa edildi. Sızan set fotoğrafları, Jackson yerleşkesinin detaylı bir şekilde oluşturulduğunu gösteriyor.</p>
  `,
  image: "https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg",
  author: { 
    name: "Zeynep K.", 
    avatar: "https://i.pravatar.cc/150?img=5", 
    role: "Editör", 
    bio: "Bilim kurgu ve drama tutkunu. Cinesos'ta 3 yıldır dizi ve sinema haberleri editörlüğü yapıyor."
  },
  date: "24 Ocak 2026",
  readTime: "4 dk okuma",
  tags: ["HBO", "The Last of Us", "Dizi", "Pedro Pascal", "Bella Ramsey"],
  
  // İlişkili Varlıklar (Dizi, Film, Kişi)
  relatedEntities: [
    { type: "Dizi", id: "the-last-of-us", title: "The Last of Us", image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg", rating: 9.2, subtext: "HBO Max" },
    { type: "Kişi", id: "pedro-pascal", title: "Pedro Pascal", image: "https://image.tmdb.org/t/p/w500/9fkNofgUflE15M5uQJ27pZp6C8.jpg", rating: null, subtext: "Oyuncu (Joel)" },
    { type: "Kişi", id: "bella-ramsey", title: "Bella Ramsey", image: "https://image.tmdb.org/t/p/w500/2q2rN60jS5gX9p7x5fXl9x6j9.jpg", rating: null, subtext: "Oyuncu (Ellie)" }
  ],

  // İlgili Haberler
  relatedNews: [
    { id: 102, title: "House of the Dragon 2. Sezon Fragmanı Yayınlandı", image: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg", date: "20 Ocak 2026" },
    { id: 103, title: "Netflix'in Yeni Bilim Kurgu Dizisi Rekor Kırdı", image: "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYkJu64MILb.jpg", date: "22 Ocak 2026" }
  ],

  // Yorumlar
  comments: [
    { id: 1, user: "Ali Veli", avatar: "https://i.pravatar.cc/150?img=12", date: "2 saat önce", text: "Abby rolü için Kaitlyn Dever harika bir seçim olmuş. Sabırsızlıkla bekliyorum!" },
    { id: 2, user: "FilmKurdu", avatar: "https://i.pravatar.cc/150?img=33", date: "5 saat önce", text: "Umarım oyunun hikayesine sadık kalırlar. İlk sezon çok iyiydi." }
  ]
};

export default function NewsDetailPage({ params }: { params: Promise<{ slug: string, id: string }> }) {
  const { slug, id } = use(params);
  const news = NEWS_DETAIL; 

  // Slug formatlama
  const categoryTitle = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="min-h-screen bg-white dark:bg-cinesos-dark transition-colors duration-300 pb-20 font-sans pt-24">
      
      {/* Article Container */}
      <article className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Breadcrumb & Meta */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 font-medium">
                <Link href="/" className="hover:text-cinesos-yellow transition">Anasayfa</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/gundem" className="hover:text-cinesos-yellow transition">Gündem</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/gundem/${slug}`} className="hover:text-cinesos-yellow transition text-cinesos-yellow">{categoryTitle}</Link>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {news.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {news.readTime}</span>
            </div>
        </div>

        {/* Başlık Alanı */}
        <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                {news.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 font-medium leading-relaxed max-w-4xl">
                {news.excerpt}
            </p>
        </div>

        {/* Yazar & Paylaşım Barı */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-y border-gray-100 dark:border-white/10 py-6 mb-10">
            <div className="flex items-center gap-4">
                <Link href={`/${news.author.name.toLowerCase().replace(" ", "")}`} className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 dark:border-white/10 hover:border-cinesos-yellow transition-colors">
                    <Image src={news.author.avatar} alt={news.author.name} fill className="object-cover" />
                </Link>
                <div>
                    <Link href={`/${news.author.name.toLowerCase().replace(" ", "")}`} className="block text-base font-bold text-slate-900 dark:text-white hover:text-cinesos-yellow transition-colors">
                        {news.author.name}
                    </Link>
                    <span className="text-sm text-slate-500 dark:text-gray-400">{news.author.role}</span>
                </div>
            </div>
            
            <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition">
                    <Facebook className="w-4 h-4" /> <span className="hidden sm:inline">Paylaş</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-600 transition">
                    <Twitter className="w-4 h-4" /> <span className="hidden sm:inline">Tweetle</span>
                </button>
                <button className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition">
                    <LinkIcon className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image src={news.image} alt={news.title} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* SOL KOLON: İÇERİK (8/12) */}
            <div className="lg:col-span-8">
                
                {/* Content Body */}
                <div className="prose dark:prose-invert prose-lg max-w-none mb-12 text-slate-800 dark:text-gray-300
                    prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white 
                    prose-p:text-slate-800 dark:prose-p:text-gray-300 prose-p:leading-8
                    prose-a:text-cinesos-yellow prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-cinesos-yellow prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-slate-800 dark:prose-blockquote:text-gray-200 prose-blockquote:font-medium prose-blockquote:not-italic
                    prose-strong:text-slate-900 dark:prose-strong:text-white">
                    <div dangerouslySetInnerHTML={{ __html: news.content }} />
                </div>

                {/* Etkileşim Butonları */}
                <div className="flex items-center gap-4 mb-12">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-slate-700 dark:text-white font-bold hover:bg-cinesos-yellow hover:text-black transition-all group">
                        <ThumbsUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Beğen (124)
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-slate-700 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-all">
                        <Bookmark className="w-5 h-5" />
                        Kaydet
                    </button>
                </div>

                {/* Yazar Hakkında */}
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/5 mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white dark:border-white/10 shadow-md flex-shrink-0">
                        <Image src={news.author.avatar} alt={news.author.name} fill className="object-cover" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{news.author.name}</h3>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                            {news.author.bio}
                        </p>
                        <Link href={`/${news.author.name.toLowerCase().replace(" ", "")}`} className="text-sm font-bold text-cinesos-yellow hover:underline">
                            Yazarın diğer yazıları &rarr;
                        </Link>
                    </div>
                </div>

                {/* Yorumlar */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <MessageSquare className="w-6 h-6 text-cinesos-yellow" />
                        Yorumlar ({news.comments.length})
                    </h3>
                    
                    {/* Yorum Yap */}
                    <div className="flex gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
                        <div className="flex-1">
                            <textarea 
                                placeholder="Düşüncelerini paylaş..." 
                                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cinesos-yellow/50 min-h-[100px] resize-none"
                            ></textarea>
                            <div className="flex justify-end mt-2">
                                <button className="px-6 py-2 bg-cinesos-yellow text-black font-bold rounded-lg hover:bg-yellow-400 transition">
                                    Gönder
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Yorum Listesi */}
                    <div className="space-y-6">
                        {news.comments.map((comment) => (
                            <div key={comment.id} className="flex gap-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 dark:border-white/10">
                                    <Image src={comment.avatar} alt={comment.user} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-slate-900 dark:text-white text-sm">{comment.user}</span>
                                        <span className="text-xs text-slate-400">• {comment.date}</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {comment.text}
                                    </p>
                                    <div className="flex gap-4 mt-2">
                                        <button className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition">Yanıtla</button>
                                        <button className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition">Beğen</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* SAĞ KOLON: SIDEBAR (4/12) */}
            <div className="lg:col-span-4 space-y-10">
                
                {/* 1. İLİŞKİLİ VARLIKLAR (Film/Dizi/Kişi) */}
                <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Haberde Bahsedilenler</h3>
                    <div className="space-y-4">
                        {news.relatedEntities.map((entity, i) => (
                            <Link 
                                key={i} 
                                href={`/${entity.type === 'Dizi' ? 'dizi' : entity.type === 'Film' ? 'film' : 'kisi'}/${entity.id}`} 
                                className="flex gap-4 items-center group"
                            >
                                <div className="relative w-16 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                                    <Image src={entity.image} alt={entity.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-cinesos-yellow transition-colors leading-tight mb-1">
                                        {entity.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400">
                                        <span className="bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold">{entity.type}</span>
                                        {entity.rating && (
                                            <span className="flex items-center gap-0.5 text-yellow-500"><Star className="w-3 h-3 fill-current" /> {entity.rating}</span>
                                        )}
                                    </div>
                                    <span className="text-xs text-slate-400 block mt-1">{entity.subtext}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 2. Etiketler */}
                <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Etiketler</h3>
                    <div className="flex flex-wrap gap-2">
                        {news.tags.map((tag, i) => (
                            <Link key={i} href={`/etiket/${tag.toLowerCase().replace(" ", "-")}`} className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-gray-300 hover:bg-cinesos-yellow hover:text-black dark:hover:bg-cinesos-yellow dark:hover:text-black transition-colors">
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 3. İlgili Haberler */}
                <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Bunları da Oku</h3>
                    <div className="space-y-4">
                        {news.relatedNews.map((item) => (
                            <Link key={item.id} href={`/gundem/${slug}/${item.id}`} className="group block">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-2 shadow-sm">
                                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-cinesos-yellow transition-colors leading-snug">
                                    {item.title}
                                </h4>
                                <span className="text-xs text-slate-500 mt-1 block">{item.date}</span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

        </div>
      </article>
    </div>
  );
}