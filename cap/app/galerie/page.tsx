import type { Metadata } from "next";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = { title: "Galerie — CAP CONSCIENT" };

export default function GaleriePage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#06241A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-36">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-4">Galerie</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#F5EEDC]">Nos moments partagés</h1>
        </div>
      </section>
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative aspect-square overflow-hidden rounded-lg group">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
