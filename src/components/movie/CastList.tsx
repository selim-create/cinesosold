"use client";

import Image from "next/image";

interface CastMember {
  name: string;
  role: string;
  image: string;
}

export default function CastList({ cast }: { cast: CastMember[] }) {
  return (
    <div className="py-6">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Oyuncular</h3>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {cast.map((person, i) => (
          <div key={i} className="flex-none w-32 group text-center">
            <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-transparent group-hover:border-cinesos-yellow transition-all shadow-md">
              <Image 
                src={person.image} 
                alt={person.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{person.name}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}