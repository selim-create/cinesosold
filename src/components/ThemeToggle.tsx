"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration mismatch hatasını önlemek için
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300 group"
      aria-label="Temayı Değiştir"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
        <Moon className="absolute inset-0 w-full h-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-cinesos-yellow" />
      </div>
    </button>
  );
}