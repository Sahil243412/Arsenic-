import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DemoSection from "@/components/sections/DemoSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import OwnershipSection from "@/components/sections/OwnershipSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <DemoSection />
        <CaseStudySection />
        <OwnershipSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
