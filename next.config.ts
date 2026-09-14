import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // SVG formatındaki placeholderlar için gerekli
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org", // TMDB posterleri için
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // Profil resimleri için
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Stok görseller için
      }
    ],
  },
};

export default nextConfig;