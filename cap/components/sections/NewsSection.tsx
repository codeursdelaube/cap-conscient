"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const articles = [
  {
    image: "/education.jpg",
    category: "Éducation & Alphabétisation",
    date: "15 Nov. 2026",
    title: "Inauguration de notre nouvelle salle d'alphabétisation à Adidogomé",
    excerpt: "Grâce au soutien de nos partenaires, 40 adultes bénéficieront désormais de cours d'alphabétisation dans un cadre digne et adapté.",
  },
  {
    image: "/santeprimaire.jpg",
    category: "Santé Primaire",
    date: "2 Nov. 2026",
    title: "Campagne de prévention sanitaire : 500 enfants sensibilisés",
    excerpt: "Notre équipe de santé communautaire a conduit une campagne de prévention dans 5 quartiers de Lomé, touchant plus de 500 enfants.",
  },
  {
    image: "/autonomisation.jpg",
    category: "Autonomisation",
    date: "18 Oct. 2026",
    title: "Formation en entrepreneuriat : 20 femmes créent leur coopérative",
    excerpt: "À l'issue de notre programme de 3 mois, 20 femmes de la commune du Golfe 7 ont officiellement créé leur première coopérative agricole.",
  },
];

export function NewsSection() {
  return (
    <section className="bg-[#FAF9F5] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-3">Actualités</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#06241A] leading-tight">
              Nos dernières nouvelles
            </h2>
          </div>
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-[#06241A] font-sans font-semibold text-sm border-b-2 border-[#D4AF37] pb-0.5 hover:text-[#D4AF37] transition-colors shrink-0"
          >
            Voir toutes les actualités →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((art, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-xl overflow-hidden border border-[#06241A]/10 shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-sans font-semibold tracking-widest uppercase bg-[#D4AF37]/15 text-[#D4AF37] px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                  <span className="text-[#CBBFA6] text-xs font-sans">{art.date}</span>
                </div>
                <h3 className="font-serif text-xl text-[#06241A] leading-tight mb-3">{art.title}</h3>
                <p className="text-[#7A5A3E] font-sans text-sm leading-relaxed mb-5 line-clamp-3">{art.excerpt}</p>
                <Link
                  href="/actualites"
                  className="inline-flex items-center gap-1 text-[#D4AF37] font-sans font-semibold text-sm hover:gap-2 transition-all"
                >
                  Lire l&apos;article →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
