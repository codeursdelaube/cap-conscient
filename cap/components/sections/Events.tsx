"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { events } from "@/data/events";
import { MapPin } from "lucide-react";

const badgeColors = ["#D4AF37", "#06241A", "#4A3223"];
const badgeTxt = ["#06241A", "#F5EEDC", "#F5EEDC"];
const eventImages = [
  "/images/actions/environnement.jpg",
  "/leadership.jpg",
  "/enfance.jpg",
];

export function Events() {
  if (!events || events.length === 0) return null;

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase mb-3">Agenda</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#06241A] leading-tight">
            Nos prochains événements
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-xl overflow-hidden group min-h-[380px] flex flex-col justify-end"
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={eventImages[i] || "/images/hero/hero-1.jpg"}
                  alt={ev.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06241A]/95 via-[#06241A]/50 to-transparent" />
              </div>

              {/* Date badge */}
              <div
                className="absolute top-5 right-5 z-10 rounded-full px-3.5 py-1.5 text-xs font-sans font-semibold"
                style={{ background: badgeColors[i], color: badgeTxt[i] }}
              >
                {ev.date}
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-1.5 text-[#CBBFA6] text-xs font-sans mb-3">
                  <MapPin size={12} />
                  {ev.location}
                </div>
                <h3 className="font-serif text-2xl text-[#F5EEDC] leading-tight mb-3">{ev.title}</h3>
                <p className="text-[#CBBFA6] font-sans text-sm leading-relaxed mb-5 line-clamp-2">{ev.description}</p>
                <Link
                  href="/agir"
                  className="inline-flex items-center gap-1.5 text-[#D4AF37] font-sans font-semibold text-sm hover:gap-3 transition-all"
                >
                  Participer →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

