// Dizi Detayları için Mock Data
export const SERIES_DETAIL = {
  id: "the-last-of-us",
  title: "The Last of Us",
  originalTitle: "The Last of Us",
  tagline: "Karanlıkta kaybolduğunda, ışığı ara.",
  overview: "Modern uygarlığın yok edilmesinden 20 yıl sonra, hayatta kalan sert bir adam olan Joel, 14 yaşındaki Ellie'yi baskıcı bir karantina bölgesinden kaçırmak için tutulur. Küçük bir iş olarak başlayan bu görev, ikisi de hayatta kalmak için ABD'yi baştan başa geçerken acımasız ve yürek burkan bir yolculuğa dönüşür.",
  poster: "https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
  rating: 9.2, // 10 üzerinden
  cinesosScore: 96, // 100 üzerinden
  firstAirDate: "2023",
  lastAirDate: "2025",
  status: "Devam Ediyor", // Returning Series
  totalSeasons: 2,
  totalEpisodes: 16,
  runtime: "50dk", // Ortalama süre
  genres: ["Dram", "Bilim Kurgu", "Aksiyon"],
  creator: { name: "Craig Mazin", image: "https://image.tmdb.org/t/p/w200/uX2xVf6pMmPepxnvFWyBtjexR81.jpg" },
  cast: [
    { name: "Pedro Pascal", role: "Joel Miller", image: "https://image.tmdb.org/t/p/w200/9fkNofgUflE15M5uQJ27pZp6C8.jpg" },
    { name: "Bella Ramsey", role: "Ellie Williams", image: "https://image.tmdb.org/t/p/w200/2q2rN60jS5gX9p7x5fXl9x6j9.jpg" },
    { name: "Gabriel Luna", role: "Tommy Miller", image: "https://image.tmdb.org/t/p/w200/z3sLuRKP7hQVrvSTsqdLjGSXw.jpg" },
    { name: "Anna Torv", role: "Tess", image: "https://image.tmdb.org/t/p/w200/torv.jpg" },
  ],
  platforms: [
    { name: "BluTV", type: "Abonelik", price: "Dahil", quality: "1080p", url: "#" },
    { name: "HBO Max", type: "Orijinal", price: "Dahil", quality: "4K Dolby", url: "#" },
  ],
  facts: {
    network: "HBO",
    originalLanguage: "İngilizce",
    type: "Scripted",
    country: "ABD"
  },
  // Sezon ve Bölüm Verileri
  seasons: [
    {
      seasonNumber: 1,
      name: "1. Sezon",
      episodeCount: 9,
      airDate: "2023",
      overview: "Joel ve Ellie, insanlığı yok eden mantar enfeksiyonunun gölgesinde hayatta kalmaya çalışırken birbirlerine güvenmeyi öğrenmek zorundadır.",
      poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg",
      episodes: [
        { 
            episodeNumber: 1, 
            title: "Karanlıkta Kaybolduğunda", 
            runtime: "81dk", 
            airDate: "15 Oca 2023", 
            rating: 9.1, 
            image: "https://image.tmdb.org/t/p/w500/aSnmG2y2Wf67sQ2q7Q1x5x.jpg",
            overview: "Joel ve Tess, Ellie'yi karantina bölgesi dışına çıkarmak için bir anlaşma yapar." 
        },
        { 
            episodeNumber: 2, 
            title: "Enfekte", 
            runtime: "53dk", 
            airDate: "22 Oca 2023", 
            rating: 8.9, 
            image: "https://image.tmdb.org/t/p/w500/bKx2x2x.jpg", // Placeholder
            overview: "Grup, terk edilmiş bir otelde enfekte olanlarla ilk büyük karşılaşmasını yaşar." 
        },
        // ... diğer bölümler
      ]
    },
    {
      seasonNumber: 2,
      name: "2. Sezon",
      episodeCount: 7,
      airDate: "2025",
      overview: "Olaylardan 5 yıl sonra, geçmişin hayaletleri Joel ve Ellie'nin peşini bırakmaz.",
      poster: "https://image.tmdb.org/t/p/w500/season2poster.jpg",
      episodes: [] // Henüz yayınlanmadı
    }
  ]
};