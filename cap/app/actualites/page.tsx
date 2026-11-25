import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Actualités — CAP CONSCIENT",
  description: "Les dernières nouvelles et articles de CAP CONSCIENT.",
};

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

export default function ActualitesPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#06241A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-36">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-4">Actualités</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#F5EEDC]">Nos dernières nouvelles</h1>
        </div>
      </section>
      <section className="bg-[#FAF9F5] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((art, i) => (
              <article key={i} className="bg-white rounded-xl overflow-hidden border border-[#06241A]/10 shadow-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image src={art.image} alt={art.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-sans font-semibold tracking-widest uppercase bg-[#D4AF37]/15 text-[#D4AF37] px-3 py-1 rounded-full">{art.category}</span>
                    <span className="text-[#CBBFA6] text-xs font-sans">{art.date}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#06241A] leading-tight mb-3">{art.title}</h3>
                  <p className="text-[#7A5A3E] font-sans text-sm leading-relaxed">{art.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
