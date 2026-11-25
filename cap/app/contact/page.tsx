import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — CAP CONSCIENT",
  description: "Contactez CAP CONSCIENT à Lomé, Togo.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#06241A]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full pt-36">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-4">Contact</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#F5EEDC]">Parlons ensemble</h1>
        </div>
      </section>
      <section className="bg-[#F5EEDC] py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-3xl text-[#06241A] mb-6">Nos coordonnées</h2>
              <div className="space-y-6 text-[#4A3223] font-sans text-base">
                <div>
                  <h3 className="font-semibold text-[#06241A] mb-1">Adresse</h3>
                  <p className="leading-relaxed">{siteConfig.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#06241A] mb-1">Téléphone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-[#D4AF37] hover:underline">{siteConfig.phone}</a>
                </div>
                <div>
                  <h3 className="font-semibold text-[#06241A] mb-1">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-[#D4AF37] hover:underline">{siteConfig.email}</a>
                </div>
                <div className="flex gap-3 pt-4">
                  <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#D4AF37] text-[#06241A] rounded-full px-6 py-2.5 font-sans font-semibold text-sm hover:bg-[#E8C766] transition-colors">
                    WhatsApp
                  </a>
                  <a href={`tel:${siteConfig.phone}`} className="inline-flex border-2 border-[#06241A] text-[#06241A] rounded-full px-6 py-2.5 font-sans font-semibold text-sm hover:bg-[#06241A] hover:text-[#F5EEDC] transition-colors">
                    Appeler
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-[#06241A]/10 bg-[#06241A]/5 min-h-[300px] flex items-center justify-center">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=1.15%2C6.15%2C1.25%2C6.20&layer=mapnik"
                width="100%"
                height="100%"
                className="min-h-[300px] border-0"
                title="Carte Lomé"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
