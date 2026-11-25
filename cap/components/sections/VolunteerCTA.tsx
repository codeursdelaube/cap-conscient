"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export function VolunteerCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/im1.png"
          alt="Rejoindre CAP CONSCIENT"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#06241A]/50" />
      </div>

      {/* Decorative circles */}
      <div className="absolute left-10 top-10 w-64 h-64 rounded-full border border-[#D4AF37]/10 z-0" />
      <div className="absolute right-10 bottom-10 w-96 h-96 rounded-full border border-[#D4AF37]/10 z-0" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-5"
        >
          Opportunités de bénévolat
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl text-[#F5EEDC] leading-tight mb-8"
        >
          Rejoindre les bénévoles qui font la différence
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/agir"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#06241A] rounded-full px-8 py-4 font-sans font-semibold text-sm hover:bg-[#E8C766] transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            Devenir bénévole
          </Link>
          <button className="inline-flex items-center gap-3 text-[#F5EEDC] font-sans text-sm hover:text-[#D4AF37] transition-colors">
            <span className="w-12 h-12 rounded-full border border-[#F5EEDC]/30 flex items-center justify-center hover:border-[#D4AF37] transition-colors">
              <Play size={16} />
            </span>
            Regarder nos bénévoles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
