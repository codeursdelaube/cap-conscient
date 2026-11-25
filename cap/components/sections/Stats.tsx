"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { stats } from "@/data/stats";

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      numbersRef.current.forEach((el, i) => {
        if (el) el.textContent = stats[i].value.toLocaleString("fr-FR");
      });
      return;
    }

    const ctx = gsap.context(() => {
      numbersRef.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i];
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            if (el) el.textContent = Math.round(proxy.val).toLocaleString("fr-FR");
          },
        });
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#06241A] py-16 md:py-20 border-y border-[#D4AF37]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#D4AF37]/20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-6 py-6">
              <div className="font-serif text-5xl md:text-6xl text-[#D4AF37] mb-2 leading-none">
                <span ref={(el) => { numbersRef.current[i] = el; }}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-[#CBBFA6] font-sans text-xs tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
