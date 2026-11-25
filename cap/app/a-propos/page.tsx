import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos — CAP CONSCIENT",
  description: "Découvrez l'histoire, la mission et les valeurs de CAP CONSCIENT.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/about/about-1.jpg" alt="À propos" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06241A]/95 to-[#06241A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-36">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-4">À propos</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#F5EEDC] leading-tight">
            Notre histoire, notre mission
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5EEDC] py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 prose prose-lg">
          <p className="font-sans text-[#4A3223] text-lg leading-relaxed mb-6">
            Il a été fondé entre les adhérents aux statuts une association régie par la loi du premier juillet 1901 dénommée <strong>« COMMUNAUTÉ DES ACTEURS DU POTENTIEL CONSCIENT »</strong>, en abrégé <strong>« CAP CONSCIENT »</strong>. Elle est laïque, apolitique et à but non lucratif.
          </p>
          <p className="font-sans text-[#4A3223] text-base leading-relaxed mb-6">
            Son siège social est situé à {siteConfig.address} (Tél : {siteConfig.phone}).
          </p>
          <p className="font-sans text-[#4A3223] text-base leading-relaxed mb-10">
            Convaincus que le véritable développement naît de l&apos;intérieur, nous accompagnons chaque individu — enfants, femmes, jeunes et artisans — à prendre conscience de son potentiel unique à travers sept domaines d&apos;intervention complémentaires.
          </p>
          <Link href="/actions" className="inline-flex items-center gap-2 bg-[#06241A] text-[#F5EEDC] rounded-full px-8 py-3 font-sans font-semibold text-sm hover:bg-[#0B3326] transition-colors">
            Découvrir nos actions →
          </Link>
        </div>
      </section>
    </>
  );
}
