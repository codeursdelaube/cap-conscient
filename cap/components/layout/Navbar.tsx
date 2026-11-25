"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y <= 120 || mobileOpen) {
        setHidden(false);
      } else {
        setHidden(y > lastYRef.current);
      }
      lastYRef.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-[#06241A]/95 backdrop-blur-md shadow-lg shadow-black/25 border-b border-[#D4AF37]/15"
            : "bg-[#06241A] border-b border-[#D4AF37]/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#D4AF37]/60 overflow-hidden group-hover:border-[#D4AF37] transition-colors">
              <Image
                src="/images/logo/logo-cap-conscient.jpeg"
                alt="Logo CAP CONSCIENT"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#F5EEDC] font-serif font-semibold text-base leading-tight tracking-wide">
                CAP CONSCIENT
              </div>
              <div className="text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-sans">
                Association pour l&apos;éveil
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative whitespace-nowrap px-3 py-2 text-sm font-sans font-medium transition-colors ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-[#F5EEDC]/85 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 bottom-1 h-px bg-[#D4AF37]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/agir"
              className="hidden sm:inline-flex items-center whitespace-nowrap bg-[#D4AF37] text-[#06241A] rounded-full px-5 py-2.5 text-sm font-sans font-semibold hover:bg-[#E8C766] transition-colors shadow-md shadow-[#D4AF37]/15"
            >
              Nous rejoindre
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-[#F5EEDC] hover:text-[#D4AF37] transition-colors p-2"
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#06241A] flex flex-col px-8 py-8 overflow-y-auto"
          >
            {/* Gold lotus watermark */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
              <svg width="300" height="300" viewBox="0 0 100 100" fill="#D4AF37">
                <ellipse cx="50" cy="70" rx="8" ry="30" />
                <ellipse cx="50" cy="70" rx="8" ry="30" transform="rotate(45 50 50)" />
                <ellipse cx="50" cy="70" rx="8" ry="30" transform="rotate(90 50 50)" />
                <ellipse cx="50" cy="70" rx="8" ry="30" transform="rotate(135 50 50)" />
                <ellipse cx="50" cy="70" rx="8" ry="30" transform="rotate(180 50 50)" />
                <ellipse cx="50" cy="70" rx="8" ry="30" transform="rotate(225 50 50)" />
                <ellipse cx="50" cy="70" rx="8" ry="30" transform="rotate(270 50 50)" />
                <ellipse cx="50" cy="70" rx="8" ry="30" transform="rotate(315 50 50)" />
              </svg>
            </div>

            <div className="flex justify-between items-center mb-10">
              <span className="text-[#D4AF37] font-serif text-xl tracking-wide">CAP CONSCIENT</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#F5EEDC] hover:text-[#D4AF37] transition-colors p-1"
                aria-label="Fermer le menu"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {siteConfig.navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-serif text-3xl py-3 border-b border-[#D4AF37]/15 transition-colors ${
                        isActive ? "text-[#D4AF37]" : "text-[#F5EEDC] hover:text-[#D4AF37]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto pt-8">
              <Link
                href="/agir"
                onClick={() => setMobileOpen(false)}
                className="inline-flex bg-[#D4AF37] text-[#06241A] rounded-full px-8 py-3 font-sans font-semibold text-sm hover:bg-[#E8C766] transition-colors"
              >
                Nous rejoindre
              </Link>
              <div className="mt-6 text-[#CBBFA6] text-xs space-y-1">
                <p>{siteConfig.phone}</p>
                <p>{siteConfig.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
