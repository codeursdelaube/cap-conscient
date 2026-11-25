import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SplashProvider } from "@/components/providers/SplashProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Splash } from "@/components/splash/Splash";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAP CONSCIENT — Association humanitaire pour l'éveil",
  description:
    "CAP CONSCIENT est une association humanitaire basée à Lomé (Togo), dédiée à promouvoir le développement communautaire et éveiller le potentiel de chaque personne.",
  openGraph: {
    title: "CAP CONSCIENT",
    description: "Éveiller le potentiel, transformer les communautés.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <SplashProvider>
          <SmoothScroll>
            <Splash />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </SplashProvider>
      </body>
    </html>
  );
}
