import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "Équipe — CAP CONSCIENT" };

const images = [
  "/leadership.jpg",
  "/formationp.jpg",
  "/santeprimaire.jpg",
  "/autonomisation.jpg",
  "/education.jpg",
];

export default function EquipePage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#06241A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-36">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-4">Notre équipe</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#F5EEDC]">Les acteurs du changement</h1>
        </div>
      </section>
      <section className="bg-[#F5EEDC] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#D4AF37]/30 mb-4 shadow-lg">
                  <Image src={images[i] || "/images/hero/hero-1.jpg"} alt={member.name} fill sizes="128px" className="object-cover" />
                </div>
                <h3 className="font-serif text-lg text-[#06241A] mb-1">{member.name}</h3>
                <p className="text-[#7A5A3E] font-sans text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
