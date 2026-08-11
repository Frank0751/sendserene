import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { HeroSection } from "@/components/site/sections/hero-section";
import { HowItWorksSection } from "@/components/site/sections/how-it-works-section";
import { VoiceSection } from "@/components/site/sections/voice-section";
import { DecoderSection } from "@/components/site/sections/decoder-section";
import { SecuritySection } from "@/components/site/sections/security-section";
import { LanguagesSection } from "@/components/site/sections/languages-section";
import { PricingSection } from "@/components/site/sections/pricing-section";
import { FaqSection } from "@/components/site/sections/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <VoiceSection />
        <DecoderSection />
        <SecuritySection />
        <LanguagesSection />
        <PricingSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
