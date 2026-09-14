"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "./constants";

export default function NavDock({ scrolled }: { scrolled: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      className={`
        hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        border backdrop-blur-md z-50
        ${scrolled
          ? "bg-white/90 dark:bg-black/60 border-gray-200 dark:border-white/10 shadow-sm"
          : "bg-white/20 dark:bg-black/20 border-white/20 dark:border-white/5 shadow-lg ring-1 ring-black/5"
        }
      `}
      aria-label="Ana navigasyon"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`
              relative rounded-full text-sm font-semibold transition-all duration-300 group flex items-center justify-center
              ${scrolled ? "w-10 h-10 p-0" : "px-5 py-2.5"}
              outline-none focus:ring-2 focus:ring-cinesos-yellow/40
            `}
            title={scrolled ? item.name : undefined}
          >
            {/* Active pill */}
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full shadow-md"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full opacity-100" />
              </motion.div>
            )}

            {/* Hover layer */}
            {!isActive && (
              <div
                className={`absolute inset-0 rounded-full transition-colors duration-200 ${
                  scrolled
                    ? "group-hover:bg-slate-100 dark:group-hover:bg-white/10"
                    : "group-hover:bg-white/20 dark:group-hover:bg-white/10"
                }`}
              />
            )}

            <div className="relative flex items-center z-10">
              <item.icon
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-white dark:text-black w-5 h-5"
                    : "text-slate-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white w-5 h-5"
                } ${scrolled && !isActive ? "group-hover:scale-110" : ""}`}
                aria-hidden="true"
              />

              <span
                className={`
                  overflow-hidden whitespace-nowrap font-extrabold transition-all duration-300 ease-in-out
                  ${isActive ? "text-white dark:text-black" : "text-slate-700 dark:text-white/90 group-hover:text-black dark:group-hover:text-white"}
                  ${scrolled ? "max-w-0 opacity-0 w-0 ml-0" : "max-w-[120px] opacity-100 w-auto ml-2"}
                `}
              >
                {item.name}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
