import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { EvidenceSection } from "@/components/site/sections/evidence-section";
import { DayInLifeSection } from "@/components/site/sections/day-in-life-section";
import { evidenceFeature } from "@/lib/site-content";

export default function EvidencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-evidence.png"
          eyebrow={evidenceFeature.eyebrow}
          title={evidenceFeature.title}
          body={evidenceFeature.body}
        />
        <EvidenceSection />
        <DayInLifeSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
