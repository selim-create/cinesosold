import { Film, Ghost, Heart, Laugh, Rocket, Skull, Zap, Clapperboard, MonitorPlay } from "lucide-react";

// Mood (Ruh Hali) Kategorileri
export const MOOD_CATEGORIES = [
  { id: "excitement", name: "Adrenalin", icon: Zap, color: "from-amber-400 to-orange-600", desc: "Aksiyon dolu" },
  { id: "chill", name: "Kafa Dağıt", icon: Laugh, color: "from-sky-400 to-indigo-600", desc: "Komedi & Hafif" },
  { id: "dark", name: "Gerilim", icon: Skull, color: "from-purple-600 to-slate-900", desc: "Gizem & Suç" },
  { id: "love", name: "Romantik", icon: Heart, color: "from-rose-400 to-pink-600", desc: "Duygusal" },
  { id: "scifi", name: "Gelecek", icon: Rocket, color: "from-emerald-400 to-teal-600", desc: "Bilim Kurgu" },
  { id: "fear", name: "Korku", icon: Ghost, color: "from-red-600 to-red-900", desc: "Ürpertici" },
];

// Featured (Vitrindeki) İçerikler
export const FEATURED_CONTENT = [
  {
    id: "dune-2",
    title: "Dune: Part Two",
    description: "Paul Atreides, ailesini yok eden komploculara karşı intikam savaşı başlatırken Chani ve Fremenlerle birleşir.",
    poster: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    rating: 8.8,
    year: 2024,
    genre: "Bilim Kurgu",
    platforms: ["Max"],
    type: "movie" // Vitrin için de tip ekledik
  },
  {
    id: "the-last-of-us", // ID'yi dizi sayfasına uyumlu yaptık
    title: "The Last of Us",
    description: "Modern uygarlığın yok edilmesinden 20 yıl sonra, hayatta kalan Joel, 14 yaşındaki Ellie'yi karantina bölgesinden kaçırmak için tutulur.",
    poster: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    rating: 9.2,
    year: 2023,
    genre: "Dram, Korku",
    platforms: ["BluTV"],
    type: "series"
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    description: "Amerikalı bilim adamı J. Robert Oppenheimer'ın atom bombasını geliştirme sürecindeki rolü.",
    poster: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwvk4XTHYBPq.jpg",
    rating: 8.5,
    year: 2023,
    genre: "Dram, Biyografi",
    platforms: ["Apple TV"],
    type: "movie"
  }
];

// Yatay Listeler İçin İçerikler (Type Eklendi)
export const DISCOVER_ROWS = [
  {
    title: "Netflix'te Popüler Diziler",
    items: [
      { id: "stranger-things", title: "Stranger Things", poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", rating: 8.7, year: 2022, type: "series" },
      { id: "black-mirror", title: "Black Mirror", poster: "https://image.tmdb.org/t/p/w500/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg", rating: 8.8, year: 2023, type: "series" },
      { id: "wednesday", title: "Wednesday", poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", rating: 8.1, year: 2022, type: "series" },
      { id: "the-crown", title: "The Crown", poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg", rating: 8.6, year: 2023, type: "series" },
      { id: "squid-game", title: "Squid Game", poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", rating: 8.0, year: 2021, type: "series" },
      { id: "dark", title: "Dark", poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXkFbk1Z8.jpg", rating: 8.7, year: 2017, type: "series" },
    ]
  },
  {
    title: "IMDb 8.5+ Efsane Diziler",
    items: [
      { id: "breaking-bad", title: "Breaking Bad", poster: "https://image.tmdb.org/t/p/w500/3xnWaGQjayE2Xat6FV5fCpt3pEt.jpg", rating: 9.5, year: 2013, type: "series" },
      { id: "chernobyl", title: "Chernobyl", poster: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT66gVIvMWBVUwiqhSX.jpg", rating: 9.4, year: 2019, type: "series" },
      { id: "the-sopranos", title: "The Sopranos", poster: "https://image.tmdb.org/t/p/w500/rweIrveL43TaxUN0akQEaAXL6x0.jpg", rating: 9.2, year: 2007, type: "series" },
      { id: "the-wire", title: "The Wire", poster: "https://image.tmdb.org/t/p/w500/4lbclUyRgE5JuwWGe1586esbDau.jpg", rating: 9.3, year: 2008, type: "series" },
      { id: "game-of-thrones", title: "Game of Thrones", poster: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg", rating: 9.2, year: 2011, type: "series" },
      { id: "the-last-of-us", title: "The Last of Us", poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyho4nmw5Ts.jpg", rating: 9.2, year: 2023, type: "series" },
    ]
  },
  {
    title: "Vizyondaki Filmler",
    items: [
      { id: "wonka", title: "Wonka", poster: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQz9jtRcmwXJ8.jpg", rating: 7.2, year: 2023, type: "movie" },
      { id: "poor-things", title: "Poor Things", poster: "https://image.tmdb.org/t/p/w500/kCGlIMVn6MjcveAc3oUXqF60UCAL.jpg", rating: 8.0, year: 2023, type: "movie" },
      { id: "aquaman-2", title: "Aquaman 2", poster: "https://image.tmdb.org/t/p/w500/4m1Au3YkjMZOjlAuQM243U4snbO.jpg", rating: 6.9, year: 2023, type: "movie" },
      { id: "dune-2", title: "Dune: Part Two", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", rating: 8.8, year: 2024, type: "movie" },
      { id: "anyone-but-you", title: "Anyone But You", poster: "https://image.tmdb.org/t/p/w500/yRt7MGBElkLxNS3fzqnjq8JgO0n.jpg", rating: 6.5, year: 2023, type: "movie" },
    ]
  }
];