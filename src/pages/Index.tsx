import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MasterCraftSection from "@/components/MasterCraftSection";
import AppsSection from "@/components/AppsSection";
import StudioSection from "@/components/StudioSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-hero-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <MasterCraftSection />
      <AppsSection />
      <StudioSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
