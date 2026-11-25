"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left column: Text & CTAs */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-[#06241A]/5 border border-[#D4AF37]/40 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[#06241A] text-xs font-sans font-medium tracking-[0.25em] uppercase">
                Association humanitaire pour l&apos;éveil
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] text-[#06241A] leading-[1.08] mb-6"
            >
              Éveiller le potentiel,{" "}
              <em className="text-[#B89222] not-italic">
                transformer les communautés.
              </em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#4A3223] font-sans text-base sm:text-lg leading-relaxed mb-9 max-w-2xl"
            >
              CAP CONSCIENT est une association humanitaire basée à Lomé (Togo), dédiée à promouvoir le développement communautaire et améliorer les conditions de vie des populations à la base.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                href="/agir"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#06241A] rounded-full px-7 py-3.5 font-sans font-semibold text-sm hover:bg-[#E8C766] transition-colors shadow-lg shadow-[#D4AF37]/20"
              >
                Rejoindre l&apos;association <ArrowRight size={16} />
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 border border-[#06241A]/25 text-[#06241A] rounded-full px-7 py-3.5 font-sans font-medium text-sm hover:border-[#D4AF37] hover:bg-[#06241A]/5 transition-colors"
              >
                <Play size={14} /> Découvrir notre mission
              </Link>
            </motion.div>

            {/* Facepile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {["/images/hero/hero-2.jpg", "/images/about/about-1.jpg", "/images/actions/eveil.jpg"].map((src, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                  </div>
                ))}
                <div className="relative w-10 h-10 rounded-full border-2 border-white bg-[#06241A] flex items-center justify-center shadow-sm">
                  <span className="text-[#D4AF37] text-xs font-bold">+200</span>
                </div>
              </div>
              <p className="text-[#4A3223] text-sm font-sans">
                <span className="text-[#06241A] font-semibold">200+ membres</span> dans nos communautés
              </p>
            </motion.div>
          </div>

          {/* Right column: Image im10.jpg */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/4.3] w-full rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl shadow-[#06241A]/10">
              <Image
                src="/im10.jpg"
                alt="CAP CONSCIENT — Communauté en action"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#D4AF37]/35 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
