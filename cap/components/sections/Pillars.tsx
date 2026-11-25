"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { pillars } from "@/data/pillars";

const featured = pillars.slice(0, 3);

export function Pillars() {
  return (
    <section className="bg-[#FAF9F5] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-3">
            Domaines d&apos;intervention
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#06241A] leading-tight mb-4">
            Nos 7 domaines d&apos;action sur le terrain
          </h2>
          <p className="text-[#7A5A3E] font-sans text-base max-w-2xl mx-auto">
            De l&apos;éducation à l&apos;autonomisation, chaque programme répond aux besoins réels des communautés à la base.
          </p>
        </div>

        {/* All 7 domains quick pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {pillars.map((pillar) => (
            <Link
              key={pillar.id}
              href={`/actions#${pillar.id}`}
              className="inline-flex items-center gap-2 bg-white border border-[#06241A]/15 hover:border-[#D4AF37] text-[#06241A] rounded-full px-4 py-2 text-xs font-sans font-medium transition-colors shadow-xs"
            >
              <pillar.icon size={14} className="text-[#D4AF37]" />
              <span>{pillar.title}</span>
            </Link>
          ))}
        </div>

        {/* 3 Featured Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featured.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-xl overflow-hidden border border-[#06241A]/10 shadow-sm hover:shadow-lg hover:border-[#D4AF37]/30 transition-all group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06241A]/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#06241A] text-xs font-sans font-semibold px-3 py-1 rounded-full">
                  {pillar.title}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#06241A] mb-3 leading-tight">{pillar.title}</h3>
                  <p className="text-[#7A5A3E] font-sans text-sm leading-relaxed mb-5">{pillar.description}</p>
                </div>

                <div>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs font-sans text-[#7A5A3E] mb-1.5">
                      <span>Collecté : 1 500 000 XOF</span>
                      <span className="text-[#D4AF37] font-semibold">75%</span>
                    </div>
                    <div className="h-1.5 bg-[#06241A]/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: "75%" }} />
                    </div>
                    <p className="text-[#7A5A3E]/70 text-xs font-sans mt-1">Objectif : 2 000 000 XOF</p>
                  </div>

                  <Link
                    href={`/actions#${pillar.id}`}
                    className="inline-flex items-center gap-1 text-[#06241A] hover:text-[#D4AF37] font-sans font-semibold text-sm transition-colors"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/actions"
            className="inline-flex items-center gap-2 border-2 border-[#06241A] text-[#06241A] rounded-full px-8 py-3 font-sans font-semibold text-sm hover:bg-[#06241A] hover:text-[#F5EEDC] transition-all"
          >
            Découvrir nos 7 domaines d&apos;intervention →
          </Link>
        </div>
      </div>
    </section>
  );
}
