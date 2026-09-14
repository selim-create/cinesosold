// src/components/header/constants.ts
import type { LucideIcon } from "lucide-react";
import { Compass, List, Flame, Star, Zap, LayoutGrid, Radar } from "lucide-react";

export type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { name: "Keşfet", href: "/kesfet", icon: Compass },
  { name: "Listeler", href: "/listeler", icon: List },
  { name: "Radar", href: "/radar", icon: Radar },
  { name: "Gündem", href: "/gundem", icon: Flame },
] as const;

export type MoodId = "random" | "movie-night" | "short";
export type MoodItem = {
  id: MoodId;
  label: string;
  icon: LucideIcon;
  tone: "yellow" | "purple" | "blue"; // UI’da map edilecek
};

export const MOODS: readonly MoodItem[] = [
  { id: "random", label: "Rastgele Öner", icon: Zap, tone: "yellow" },
  { id: "movie-night", label: "Film Gecesi", icon: Star, tone: "purple" },
  { id: "short", label: "Kısa & Öz", icon: LayoutGrid, tone: "blue" },
] as const;

export type PlatformId = "netflix" | "prime" | "blutv";
export type PlatformItem = {
  id: PlatformId;
  name: string;
  brandColor: string;
  logo?: string; // /platform-logos/netflix.svg gibi
};

export const PLATFORMS: readonly PlatformItem[] = [
  { id: "netflix", name: "Netflix", brandColor: "#E50914", logo: "/platform-logos/netflix.svg" },
  { id: "prime", name: "Prime", brandColor: "#00A8E1", logo: "/platform-logos/prime.svg" },
  { id: "blutv", name: "BluTV", brandColor: "#1F2937", logo: "/platform-logos/blutv.svg" },
] as const;
