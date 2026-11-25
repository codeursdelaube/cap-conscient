"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X } from "lucide-react";
import { galleryImages as gallery, type GalleryImage } from "@/data/gallery";

export function Gallery() {
  const featured = gallery.slice(0, 6);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-3">Notre galerie</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5EEDC] leading-tight">
            Instants de vie partagés
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {featured.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              onClick={() => setSelected(img)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer text-left"
              aria-label={`Agrandir : ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#06241A]/0 group-hover:bg-[#06241A]/50 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn
                  size={30}
                  className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[120] bg-[#0A0A0A]/90 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selected.alt}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-[#F5EEDC] hover:text-[#D4AF37] transition-colors p-2"
              aria-label="Fermer l'aperçu"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden border border-[#D4AF37]/30"
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain bg-[#06241A]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
