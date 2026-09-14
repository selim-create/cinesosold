"use client";

import Link from "next/link";
import { Home, Compass, List, User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Anasayfa", href: "/", icon: Home },
    { name: "Keşfet", href: "/kesfet", icon: Compass },
    { name: "Listelerim", href: "/listeler", icon: List },
    { name: "Profil", href: "/profil", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-cinesos-dark/90 backdrop-blur-lg border-t border-white/10 z-50 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                isActive ? "text-cinesos-yellow" : "text-gray-400 hover:text-white"
              }`}
            >
              <item.icon className={`w-6 h-6 mb-1 ${isActive ? "fill-current" : ""}`} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}