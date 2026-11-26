"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { team } from "@/data/team";

export function TeamSection() {
  return (
    <section className="bg-[#F5EEDC] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-3">Notre équipe</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#06241A] leading-tight">
            Les visages engagés sur le terrain
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group w-40 md:w-44"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#D4AF37] transition-all duration-300 shadow-lg mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="144px"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-serif text-base md:text-lg text-[#06241A] mb-1 leading-snug">{member.name}</h3>
              <p className="text-[#7A5A3E] font-sans text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/equipe"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-[#06241A] hover:text-[#D4AF37] transition-colors"
          >
            Découvrir tout le bureau exécutif →
          </Link>
        </div>
      </div>
    </section>
  );
}
