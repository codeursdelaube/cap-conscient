"use client";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { pillars } from "@/data/pillars";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#06241A] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-12 h-12 rounded-full border border-[#D4AF37]/50 overflow-hidden shrink-0">
              <Image
                src="/images/logo/logo-cap-conscient.jpeg"
                alt="CAP CONSCIENT"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-[#F5EEDC] font-sans font-bold text-sm">CAP CONSCIENT</div>
              <div className="text-[#CBBFA6] text-[10px] tracking-widest uppercase">Association pour l&apos;éveil</div>
            </div>
          </div>
          <p className="text-[#CBBFA6] text-sm leading-relaxed mb-6">
            Communauté des Acteurs du Potentiel Conscient, association humanitaire laïque, apolitique et à but non lucratif, basée à Lomé, Togo.
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.facebook} className="text-[#CBBFA6] hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href={siteConfig.social.instagram} className="text-[#CBBFA6] hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href={siteConfig.social.linkedin} className="text-[#CBBFA6] hover:text-[#D4AF37] transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href={siteConfig.social.twitter} className="text-[#CBBFA6] hover:text-[#D4AF37] transition-colors" aria-label="Twitter/X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h3 className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-5">Navigation</h3>
          <ul className="space-y-3">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#CBBFA6] hover:text-[#F5EEDC] transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Domaines d'action */}
        <div>
          <h3 className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-5">Domaines d&apos;action</h3>
          <ul className="space-y-2.5">
            {pillars.map((p) => (
              <li key={p.id}>
                <Link href={`/actions#${p.id}`} className="text-[#CBBFA6] hover:text-[#F5EEDC] transition-colors text-sm">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h3 className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-5">Siège Social</h3>
          <div className="space-y-4 text-[#CBBFA6] text-sm">
            <p className="leading-relaxed">
              {siteConfig.address}
            </p>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" /></svg>
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              {siteConfig.email}
            </a>
            <Link
              href="/agir"
              className="inline-flex bg-[#D4AF37] text-[#06241A] rounded-full px-5 py-2 text-sm font-sans font-semibold hover:bg-[#E8C766] transition-colors mt-2"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D4AF37]/15 py-5 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[#CBBFA6] text-xs">
          <p>© {year} CAP CONSCIENT — Association humanitaire pour l&apos;éveil. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-[#D4AF37] transition-colors">Mentions légales</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

