import Link from "next/link";
import { Star } from "lucide-react";
import { Movie } from "@/lib/mockData";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="group relative block">
      {/* Poster Image */}
      <div className="aspect-[2/3] overflow-hidden rounded-lg bg-cinesos-gray">
        {/* Gerçek projede next/image kullanacağız, şimdilik img */}
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
        />
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
            <Star className="w-3 h-3 text-cinesos-yellow fill-cinesos-yellow" />
            <span className="text-xs font-bold text-white">{movie.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-2">
        <h3 className="text-white font-medium truncate group-hover:text-cinesos-yellow transition">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-xs flex justify-between">
          <span>{movie.year}</span>
          <span>{movie.category}</span>
        </p>
      </div>
    </Link>
  );
}