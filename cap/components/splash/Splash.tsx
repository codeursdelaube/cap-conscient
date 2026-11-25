"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useSplash } from "@/components/providers/SplashProvider";

export function Splash() {
  const { splashDone, setSplashDone } = useSplash();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    if (splashDone) return;

    const skipTimer = window.setTimeout(() => setShowSkip(true), 800);
    const safetyTimer = window.setTimeout(() => setSplashDone(true), 6000);

    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      const tl = gsap.timeline({
        onComplete: () => setSplashDone(true),
      });

      tl.fromTo(
        imageWrapRef.current,
        { scale: 1.04, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
        0
      )
        .to(
          counter,
          {
            val: 100,
            duration: 2.0,
            ease: "power2.inOut",
            onUpdate: () => {
              const v = Math.round(counter.val);
              if (percentRef.current) {
                percentRef.current.textContent = `${v}%`;
              }
              if (barRef.current) {
                barRef.current.style.transform = `scaleX(${counter.val / 100})`;
              }
            },
          },
          0
        )
        .to(
          containerRef.current,
          {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
          },
          "+=0.25"
        );
    }, containerRef);

    return () => {
      window.clearTimeout(skipTimer);
      window.clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, [splashDone, setSplashDone]);

  if (splashDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-[#06241A] overflow-hidden"
      aria-label="Chargement de CAP CONSCIENT"
    >
      {/* Full-screen splash image */}
      <div ref={imageWrapRef} className="absolute inset-0">
        <Image
          src="/splash.png"
          alt="CAP CONSCIENT — Association humanitaire pour l'éveil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06241A]/80 via-[#06241A]/20 to-[#06241A]/30" />
      </div>

      {/* Skip button bottom-left */}
      {showSkip && (
        <button
          type="button"
          onClick={() => setSplashDone(true)}
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 text-[#F5EEDC]/75 hover:text-[#D4AF37] font-sans text-xs tracking-[0.25em] uppercase transition-colors px-3 py-1.5 rounded-full border border-[#F5EEDC]/20 hover:border-[#D4AF37]/50 backdrop-blur-sm"
        >
          Passer
        </button>
      )}

      {/* Counter 0% -> 100% bottom-right */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-20 flex flex-col items-end">
        <span
          ref={percentRef}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-[#D4AF37] tabular-nums leading-none drop-shadow-lg"
        >
          0%
        </span>
        <div className="w-28 sm:w-36 h-[2px] bg-[#F5EEDC]/20 mt-3 overflow-hidden rounded-full">
          <div
            ref={barRef}
            className="h-full w-full bg-[#D4AF37] origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
