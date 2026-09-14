"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, Monitor, Filter, ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { MOODS, PLATFORMS, type MoodItem, type PlatformItem } from "./constants";

interface SearchCommandProps {
  scrolled: boolean;
}

// Mood tone -> Tailwind class mapping (data içinde class taşımıyoruz)
function moodToneClass(tone: MoodItem["tone"]) {
  switch (tone) {
    case "yellow":
      return "text-yellow-400";
    case "purple":
      return "text-purple-400";
    case "blue":
      return "text-blue-400";
    default:
      return "text-gray-300";
  }
}

export default function SearchCommand({ scrolled }: SearchCommandProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"platform" | "mood" | null>(null);

  const [query, setQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformItem | null>(null);
  const [selectedMood, setSelectedMood] = useState<MoodItem | null>(null);

  // hydration fix
  const effectiveScrolled = mounted ? scrolled : false;

  // expand rule: focused OR top
  const isExpanded = isFocused || !effectiveScrolled;

  // dışarı tıklama: dropdown + focus kapat
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const el = containerRef.current;
      if (!el) return;
      if (!el.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsFocused(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // ESC: dropdown kapat / focus bırak
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setActiveDropdown(null);
      setIsFocused(false);
      inputRef.current?.blur();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const containerClasses = useMemo(() => {
    return `
      relative flex items-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-[50] border rounded-full
      ${isExpanded ? "w-full max-w-3xl h-14 shadow-2xl scale-100 lg:scale-105" : "w-[300px] lg:w-[400px] h-10"}
      bg-gray-100/80 border-gray-200
      dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none
      ${isFocused ? "ring-2 ring-cinesos-yellow/50 border-cinesos-yellow" : "hover:border-cinesos-yellow/30"}
    `;
  }, [isExpanded, isFocused]);

  const placeholder = isExpanded ? "Hangi filmi, diziyi veya kişiyi arıyorsun?" : "Hızlı ara...";

  const showClear = isFocused || query.length > 0 || selectedPlatform || selectedMood;

  function closeAll() {
    setActiveDropdown(null);
    setIsFocused(false);
    inputRef.current?.blur();
  }

  function clearAll() {
    setQuery("");
    setSelectedPlatform(null);
    setSelectedMood(null);
    closeAll();
  }

  function submitSearch() {
    // TODO: burayı /arama route’una bağlayabilirsin:
    // router.push(`/arama?query=${encodeURIComponent(query)}&platform=${selectedPlatform?.id ?? ""}&mood=${selectedMood?.id ?? ""}`)
    closeAll();
  }

  return (
    <>
      {/* Focus Backdrop */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45]"
            onClick={closeAll}
          />
        )}
      </AnimatePresence>

      <div ref={containerRef} className={containerClasses} role="search">
        {/* INPUT + CHIPS */}
        <div className="flex-1 flex items-center px-4 h-full relative gap-2">
          <Search
            className={`transition-colors ${isExpanded ? "w-5 h-5" : "w-4 h-4"} text-gray-500 dark:text-gray-400`}
            aria-hidden="true"
          />

          {/* Selected chips (expanded’da göster) */}
          {isExpanded && (
            <div className="hidden sm:flex items-center gap-2">
              {selectedPlatform && (
                <button
                  type="button"
                  onClick={() => setSelectedPlatform(null)}
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/60 dark:bg-white/10
                             border border-black/5 dark:border-white/10 text-xs font-bold text-gray-700 dark:text-gray-200
                             hover:bg-white/80 dark:hover:bg-white/15 transition"
                  aria-label="Seçili platformu kaldır"
                  title="Platformu kaldır"
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedPlatform.brandColor }} />
                  {selectedPlatform.name}
                  <X className="w-3.5 h-3.5 opacity-70" />
                </button>
              )}

              {selectedMood && (
                <button
                  type="button"
                  onClick={() => setSelectedMood(null)}
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/60 dark:bg-white/10
                             border border-black/5 dark:border-white/10 text-xs font-bold text-gray-700 dark:text-gray-200
                             hover:bg-white/80 dark:hover:bg-white/15 transition"
                  aria-label="Seçili modu kaldır"
                  title="Modu kaldır"
                >
                  <selectedMood.icon className={`w-3.5 h-3.5 ${moodToneClass(selectedMood.tone)}`} />
                  {selectedMood.label}
                  <X className="w-3.5 h-3.5 opacity-70" />
                </button>
              )}
            </div>
          )}

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submitSearch();
            }}
            placeholder={placeholder}
            className={`w-full bg-transparent border-none outline-none font-semibold text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 ${
              isExpanded ? "text-base" : "text-sm"
            }`}
            aria-label="Arama"
          />

          {showClear && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearAll();
              }}
              className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full"
              aria-label="Temizle"
              type="button"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-1/2 bg-gray-300 dark:bg-white/10" />

        {/* PLATFORM */}
        <div className="relative h-full">
          <button
            type="button"
            onClick={() => setActiveDropdown(activeDropdown === "platform" ? null : "platform")}
            className={`h-full flex items-center px-4 gap-2 font-semibold transition-colors cursor-pointer
                        text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white
                        hover:bg-black/5 dark:hover:bg-white/5
                        ${isExpanded ? "flex text-sm" : "hidden lg:flex text-xs"}`}
            aria-expanded={activeDropdown === "platform"}
            aria-label="Platform seç"
          >
            <Monitor className={isExpanded ? "w-4 h-4" : "w-3.5 h-3.5"} />
            <span className={isExpanded ? "hidden sm:inline" : "hidden"}>Platform</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === "platform" ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {activeDropdown === "platform" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.16 }}
                className="absolute top-full mt-2 left-0 w-56 rounded-xl shadow-2xl p-2 z-[60] border overflow-hidden
                           bg-white border-gray-100
                           dark:bg-[#0F172A]/95 dark:backdrop-blur-xl dark:border-white/10"
              >
                <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2 font-extrabold bg-gray-50 dark:bg-white/5 rounded-md mb-1">
                  Platform Seç
                </div>

                {PLATFORMS.map((p) => {
                  const active = selectedPlatform?.id === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        setSelectedPlatform(p);
                        setActiveDropdown(null);
                        inputRef.current?.focus();
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm font-semibold transition
                                 hover:bg-gray-100 dark:hover:bg-white/10
                                 ${active ? "bg-gray-100/80 dark:bg-white/10" : ""} text-gray-700 dark:text-gray-200`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shadow-sm ring-1 ring-white/20"
                        style={{ backgroundColor: p.brandColor }}
                      />
                      <span className="flex-1">{p.name}</span>
                      {active && <span className="text-[10px] font-extrabold text-cinesos-yellow">Seçili</span>}
                    </button>
                  );
                })}

                {selectedPlatform && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPlatform(null);
                      setActiveDropdown(null);
                      inputRef.current?.focus();
                    }}
                    className="mt-2 w-full px-3 py-2 rounded-lg text-xs font-extrabold
                               bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition
                               text-gray-700 dark:text-gray-200"
                  >
                    Platformu kaldır
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Divider 2 */}
        {isExpanded && <div className="w-px h-1/2 bg-gray-300 dark:bg-white/10" />}

        {/* MOOD */}
        <div className={`relative h-full ${isExpanded ? "block" : "hidden"}`}>
          <button
            type="button"
            onClick={() => setActiveDropdown(activeDropdown === "mood" ? null : "mood")}
            className="h-full flex items-center px-5 gap-2 text-sm font-semibold rounded-r-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            aria-expanded={activeDropdown === "mood"}
            aria-label="Mood seç"
          >
            <Filter className="w-4 h-4" />
            <span>Modun?</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === "mood" ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {activeDropdown === "mood" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.16 }}
                className="absolute top-full mt-2 right-0 w-64 rounded-xl shadow-2xl p-2 z-[60] border overflow-hidden
                           bg-white border-gray-100
                           dark:bg-[#0F172A]/95 dark:backdrop-blur-xl dark:border-white/10"
              >
                <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2 font-extrabold bg-gray-50 dark:bg-white/5 rounded-md mb-1">
                  Bugün nasıl hissediyorsun?
                </div>

                {MOODS.map((m) => {
                  const active = selectedMood?.id === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setSelectedMood(m);
                        setActiveDropdown(null);
                        inputRef.current?.focus();
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm font-semibold transition
                                 hover:bg-gray-100 dark:hover:bg-white/10
                                 ${active ? "bg-gray-100/80 dark:bg-white/10" : ""} text-gray-700 dark:text-gray-200`}
                    >
                      <m.icon className={`w-4 h-4 ${moodToneClass(m.tone)}`} />
                      <span className="flex-1">{m.label}</span>
                      {active && <span className="text-[10px] font-extrabold text-cinesos-yellow">Seçili</span>}
                    </button>
                  );
                })}

                {selectedMood && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedMood(null);
                      setActiveDropdown(null);
                      inputRef.current?.focus();
                    }}
                    className="mt-2 w-full px-3 py-2 rounded-lg text-xs font-extrabold
                               bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition
                               text-gray-700 dark:text-gray-200"
                  >
                    Modu kaldır
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
