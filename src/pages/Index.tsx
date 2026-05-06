import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GenreSection from "@/components/GenreSection";
import WhatWeMakeSection from "@/components/WhatWeMakeSection";
import PlaybookSection from "@/components/PlaybookSection";
import LabSection from "@/components/LabSection";
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
      <LabSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
