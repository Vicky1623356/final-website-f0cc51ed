import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PlansGrid } from "@/components/PlansGrid";
import { FAQSection } from "@/components/FAQSection";
import { TermsSection } from "@/components/TermsSection";
import { Footer } from "@/components/Footer";
import { StickyTelegramButton } from "@/components/StickyTelegramButton";
import { ParticleBackground } from "@/components/ParticleBackground";
import { BroadcastBar } from "@/components/BroadcastBar";
import { PlanBot } from "@/components/PlanBot";

const Index = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Header />
      <BroadcastBar />
      <main className="relative z-10">
        <HeroSection />
        <PlansGrid termsAccepted={termsAccepted} />
        <FAQSection />
        <TermsSection 
          accepted={termsAccepted} 
          onAcceptChange={setTermsAccepted}
        />
      </main>
      <Footer />
      <StickyTelegramButton />
      <PlanBot />
    </div>
  );
};

export default Index;
