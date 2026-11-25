import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pillars } from "@/data/pillars";

export const metadata: Metadata = {
  title: "Nos Actions — CAP CONSCIENT",
  description: "Découvrez les 7 domaines d'intervention de CAP CONSCIENT au service des communautés.",
};

export default function ActionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/leadership.jpg" alt="Nos Actions" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06241A]/95 to-[#06241A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-36">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-4">Domaines d&apos;intervention</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#F5EEDC] leading-tight">
            Sept domaines pour transformer
          </h1>
        </div>
      </section>

      {/* Pillars list */}
      <section className="bg-[#F5EEDC] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-24">
          {pillars.map((pillar, i) => (
            <div key={pillar.id} id={pillar.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#06241A]/10 mb-5">
                  <pillar.icon size={22} className="text-[#06241A]" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#06241A] mb-4">{pillar.title}</h2>
                <p className="text-[#4A3223] font-sans text-base leading-relaxed mb-6">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.actions.map((action, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#7A5A3E] font-sans text-sm">
                      <span className="text-[#D4AF37] mt-0.5">◆</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <Image src={pillar.image} alt={pillar.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
