import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HybridHeader from "@/components/header/HybridHeader";
import Footer from "@/components/Footer"; // Footer Eklendi
import BottomNav from "@/components/BottomNav";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinesos | Kararsızlığın Kurtarıcısı",
  description: "Ne izleyeceğine karar veremediğinizde yardımınıza koşan platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-cinesos-dark text-slate-900 dark:text-white selection:bg-cinesos-yellow selection:text-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          
          <HybridHeader />
          
          <main className="relative min-h-screen">
            {children}
          </main>
          
          {/* Footer Eklendi */}
          <Footer />
          
          <div className="md:hidden">
            <BottomNav />
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}