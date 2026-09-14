export interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: number;
  platform: string[];
  description: string;
  category: string;
}

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    // Poster yerine renkli ve isimli kutular kullanıyoruz, kırılma ihtimali yok
    poster: "https://placehold.co/500x750/0F172A/FACC15?text=Dune+Part+Two",
    rating: 8.8,
    year: 2024,
    platform: ["HBO Max", "Apple TV"],
    description: "Paul Atreides, ailesini yok eden komploculara karşı intikam savaşı başlatırken Chani ve Fremenlerle birleşir.",
    category: "Bilim Kurgu"
  },
  {
    id: "2",
    title: "The Bear",
    poster: "https://placehold.co/500x750/1e293b/FFFFFF?text=The+Bear",
    rating: 8.6,
    year: 2023,
    platform: ["Disney+", "Hulu"],
    description: "Genç bir şef, ailesinin sandviç dükkanını yönetmek için Chicago'ya döner.",
    category: "Dizi"
  },
  {
    id: "3",
    title: "Oppenheimer",
    poster: "https://placehold.co/500x750/3f3f46/FFFFFF?text=Oppenheimer",
    rating: 8.5,
    year: 2023,
    platform: ["Amazon Prime", "Apple TV"],
    description: "Amerikalı bilim adamı J. Robert Oppenheimer'ın atom bombasını geliştirme sürecindeki rolü.",
    category: "Dram"
  },
  {
    id: "4",
    title: "Succession",
    poster: "https://placehold.co/500x750/000000/FFFFFF?text=Succession",
    rating: 9.0,
    year: 2023,
    platform: ["HBO Max"],
    description: "Medya devi Roy ailesinin güç savaşları.",
    category: "Dizi"
  }
];

export const categories = ["Popüler", "Gündemdekiler", "Sadece Netflix", "Oscar Adayları"];