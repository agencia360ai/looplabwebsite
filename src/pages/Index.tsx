import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GenreSection from "@/components/GenreSection";
import WhatWeMakeSection from "@/components/WhatWeMakeSection";
import PlaybookSection from "@/components/PlaybookSection";
import AppsSection from "@/components/AppsSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <GenreSection />
      <WhatWeMakeSection />
      <PlaybookSection />
      <AppsSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
