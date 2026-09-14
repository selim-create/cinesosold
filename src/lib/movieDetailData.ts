// Film Detayları için Mock Data
export const MOVIE_DETAIL = {
  id: "dune-2",
  title: "Dune: Part Two",
  originalTitle: "Dune: Part Two",
  tagline: "Uzun yaşa savaşçılar.",
  overview: "Paul Atreides, ailesini yok eden komploculara karşı intikam savaşı başlatırken Chani ve Fremenlerle birleşir. Hayatının aşkı ile bilinen evrenin kaderi arasında bir seçim yapmak zorunda kalan Paul, yalnızca kendisinin öngörebileceği korkunç bir geleceği engellemeye çalışır.",
  poster: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
  rating: 8.8, // 10 üzerinden
  cinesosScore: 92, // 100 üzerinden
  year: 2024,
  runtime: "2s 46dk",
  genres: ["Bilim Kurgu", "Macera", "Aksiyon"],
  director: { name: "Denis Villeneuve", image: "https://image.tmdb.org/t/p/w200/qpUE7X5jE6Udfb975Gg48zU61fI.jpg" },
  cast: [
    { name: "Timothée Chalamet", role: "Paul Atreides", image: "https://image.tmdb.org/t/p/w200/BE2sdjpgEHrT5l8lIi6JApJu0.jpg" },
    { name: "Zendaya", role: "Chani", image: "https://image.tmdb.org/t/p/w200/cbCibOAns4QQClDfpLn4FGTqDLR.jpg" },
    { name: "Rebecca Ferguson", role: "Lady Jessica", image: "https://image.tmdb.org/t/p/w200/lJloTOheuQSirSLXcB3JsLPmLys.jpg" },
    { name: "Javier Bardem", role: "Stilgar", image: "https://image.tmdb.org/t/p/w200/gGeT01s8kP60q3567dG0Wf24V2V.jpg" },
    { name: "Austin Butler", role: "Feyd-Rautha", image: "https://image.tmdb.org/t/p/w200/2Ig176FD50qI51T2j6f3aZq3wX.jpg" },
  ],
  platforms: [
    { name: "HBO Max", type: "Abonelik", price: "Dahil", quality: "4K Dolby", icon: "https://image.tmdb.org/t/p/original/cDj3L4d9a5b6k2l.jpg", url: "#" }, // Placeholder icon url
    { name: "Apple TV", type: "Kiralık", price: "19.99₺", quality: "4K", icon: "https://image.tmdb.org/t/p/original/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg", url: "#" },
  ],
  facts: {
    status: "Vizyonda",
    budget: "$190,000,000",
    revenue: "$711,000,000",
    originalLanguage: "İngilizce"
  }
};