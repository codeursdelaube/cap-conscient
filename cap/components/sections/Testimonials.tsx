"use client";
import { motion } from "motion/react";
import { User } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-[#F8F5EE] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-3">Témoignages</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#06241A] leading-tight">
            Ce qu&apos;ils disent de nous
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-xl p-7 border border-[#06241A]/10 shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote icon */}
              <div className="text-[#D4AF37] mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-[#4A3223] font-serif italic text-lg leading-relaxed mb-6">
                «&thinsp;{t.quote}&thinsp;»
              </p>

              {/* Gold divider */}
              <div className="h-px bg-[#D4AF37]/30 mb-5" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#06241A]/10 border-2 border-[#D4AF37]/50 flex items-center justify-center text-[#06241A] shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#06241A] font-sans font-semibold text-sm">{t.author}</p>
                  <p className="text-[#7A5A3E] font-sans text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
