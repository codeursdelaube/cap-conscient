import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Pillars } from "@/components/sections/Pillars";
import { VolunteerCTA } from "@/components/sections/VolunteerCTA";
import { Gallery } from "@/components/sections/Gallery";
import { TeamSection } from "@/components/sections/TeamSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { Testimonials } from "@/components/sections/Testimonials";
import { Events } from "@/components/sections/Events";
import { NewsSection } from "@/components/sections/NewsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Pillars />
      <VolunteerCTA />
      <Gallery />
      <TeamSection />
      <CallToAction />
      <Testimonials />
      <Events />
      <NewsSection />
    </>
  );
}

