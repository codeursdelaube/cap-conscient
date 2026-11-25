"use client";
import Link from "next/link";
import { motion } from "motion/react";

export function CallToAction() {
  return (
    <section className="bg-[#06241A] py-20 md:py-28 overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute left-0 top-0 w-80 h-80 rounded-full border border-[#D4AF37]/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full border border-[#D4AF37]/10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute right-20 top-10 w-40 h-40 rounded-full border border-[#D4AF37]/10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-5"
        >
          Agir ensemble
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5EEDC] leading-tight mb-6"
        >
          Votre soutien{" "}
          <em className="text-[#D4AF37] not-italic">change tout</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#CBBFA6] font-sans text-lg leading-relaxed mb-10"
        >
          Chaque adhésion, chaque don, chaque heure bénévole contribue à transformer durablement des vies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/agir"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#06241A] rounded-full px-8 py-4 font-sans font-semibold text-sm hover:bg-[#E8C766] transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            Faire un don
          </Link>
          <Link
            href="/agir"
            className="inline-flex items-center gap-2 border border-[#D4AF37]/50 text-[#D4AF37] rounded-full px-8 py-4 font-sans font-semibold text-sm hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
          >
            Devenir bénévole
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

