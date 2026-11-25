"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Shield, Users, Leaf } from "lucide-react";

const features = [
  { icon: Shield, label: "Laïque & Apolitique", desc: "Indépendant de toute obédience religieuse ou partisane." },
  { icon: Users, label: "Proximité humaine", desc: "Nous agissons au cœur des quartiers et villages." },
  { icon: Leaf, label: "Action durable", desc: "Des projets qui transforment en profondeur et dans la durée." },
];

export function About() {
  return (
    <section className="bg-[#F5EEDC] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-4">Qui sommes-nous</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#06241A] leading-tight mb-6">
              Une communauté engagée pour l&apos;éveil et l&apos;action
            </h2>
            <div className="text-[#4A3223] font-sans text-base md:text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Régie par la loi du 1er juillet 1901, <strong>CAP CONSCIENT</strong> — <em>Communauté des Acteurs du Potentiel Conscient</em> — est une association humanitaire laïque, apolitique et à but non lucratif, basée à Lomé (Préfecture du Golfe, Commune du Golfe 7, Adidogomé Apédokoé).
              </p>
              <p>
                Nous œuvrons au cœur des quartiers et villages pour promouvoir le développement communautaire et améliorer durablement les conditions de vie des populations à la base.
              </p>
              <p>
                Convaincus que le véritable développement naît de l&apos;intérieur, nous accompagnons chaque individu — enfants, femmes, jeunes et artisans — à révéler son potentiel unique.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#06241A]/10 mb-3">
                    <f.icon size={18} className="text-[#06241A]" />
                  </div>
                  <p className="text-[#06241A] font-sans font-semibold text-xs mb-1">{f.label}</p>
                  <p className="text-[#7A5A3E] text-xs leading-snug">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Promise */}
            <div className="border-l-2 border-[#D4AF37] pl-5 mb-8">
              <p className="text-[#4A3223] font-serif italic text-lg leading-relaxed">
                «&thinsp;Nous ne donnons pas seulement une aide passagère : nous allumons l&apos;étincelle qui permet à chaque communauté de bâtir son propre avenir dans la dignité et la souveraineté.&thinsp;»
              </p>
              <p className="text-[#D4AF37] font-sans text-xs tracking-widest uppercase mt-2">Notre Promesse</p>
            </div>

            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 border-2 border-[#06241A] text-[#06241A] rounded-full px-6 py-3 font-sans font-semibold text-sm hover:bg-[#06241A] hover:text-[#F5EEDC] transition-all"
            >
              En savoir plus sur notre histoire ↗
            </Link>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#D4AF37]/30 shadow-2xl shadow-[#06241A]/20">
              <Image
                src="/images/about/about-1.jpg"
                alt="Communauté CAP CONSCIENT à Lomé"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#06241A]/90 to-transparent p-6">
                <p className="text-[#D4AF37] text-xs tracking-widest uppercase font-sans mb-1">Lomé · Région Maritime · Togo</p>
                <p className="text-[#CBBFA6] text-sm font-sans">Auprès des enfants et des familles</p>
              </div>
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#D4AF37]/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

