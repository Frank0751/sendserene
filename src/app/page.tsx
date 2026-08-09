import { SiteHeader } from "@/components/site/site-header";
import { TranslationNotice } from "@/components/site/translation-notice";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { HeroSection } from "@/components/site/sections/hero-section";
import { StatBand, ProblemSection } from "@/components/site/sections/problem-section";
import { ComparisonSection } from "@/components/site/sections/comparison-section";
import { PillarsSection } from "@/components/site/sections/pillars-section";
import { FinalCtaSection } from "@/components/site/sections/final-cta-section";
import { HomeFeatureGrid } from "@/components/site/home-feature-grid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <TranslationNotice />
      <main className="flex-1">
        <HeroSection />
        <StatBand />
        <ProblemSection />
        <ComparisonSection />
        <PillarsSection />
        <HomeFeatureGrid />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
