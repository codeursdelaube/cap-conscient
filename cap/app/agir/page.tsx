import type { Metadata } from "next";
import Link from "next/link";
import { Users, HeartHandshake, Sprout } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Agir — CAP CONSCIENT",
  description: "Rejoignez CAP CONSCIENT : adhérez, devenez bénévole, faites un don.",
};

const actionCards = [
  {
    title: "Adhérer",
    desc: "Rejoignez la communauté CAP CONSCIENT et participez activement à nos projets.",
    icon: Users,
  },
  {
    title: "Bénévolat",
    desc: "Mettez vos compétences au service des communautés sur le terrain.",
    icon: HeartHandshake,
  },
  {
    title: "Faire un don",
    desc: "Chaque contribution, même petite, transforme durablement des vies.",
    icon: Sprout,
  },
];

export default function AgirPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#06241A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-36">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-4">Agir</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#F5EEDC]">Passez à l&apos;action</h1>
        </div>
      </section>
      <section className="bg-[#F5EEDC] py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {actionCards.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-[#06241A]/10 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-[#06241A]/10 text-[#06241A] mx-auto mb-5 flex items-center justify-center">
                  <item.icon size={26} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-2xl text-[#06241A] mb-3">{item.title}</h3>
                <p className="text-[#7A5A3E] font-sans text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link href="/contact" className="inline-flex bg-[#06241A] text-[#F5EEDC] rounded-full px-6 py-2.5 font-sans font-semibold text-sm hover:bg-[#0B3326] transition-colors">
                  Nous contacter
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#06241A] rounded-full px-8 py-3 font-sans font-semibold text-sm hover:bg-[#E8C766] transition-colors"
            >
              Contacter via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
