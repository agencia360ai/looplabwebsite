import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AppsSection from "@/components/AppsSection";
import GenreSection from "@/components/GenreSection";
import WhatWeMakeSection from "@/components/WhatWeMakeSection";
import PlaybookSection from "@/components/PlaybookSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

// The apps come right after the hero: they're the proof of the promise.
// Then the idea (genre), the mechanics (what we make), how we work
// (playbook) and the invite (join).
export default function Index() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <Marquee />
      <AppsSection />
      <GenreSection />
      <WhatWeMakeSection />
      <PlaybookSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
