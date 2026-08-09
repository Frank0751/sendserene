import { SiteHeader } from "@/components/site/site-header";
import { TranslationNotice } from "@/components/site/translation-notice";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { EvidenceSection } from "@/components/site/sections/evidence-section";
import { DayInLifeSection } from "@/components/site/sections/day-in-life-section";
import { evidenceFeature } from "@/lib/site-content";

export const metadata = {
  title: "Evidence pack, everything dated and ready to hand over",
  description:
    "Turn your logs and documents into a formatted, numbered evidence pack for an annual review, a tribunal, or a new teacher.",
  alternates: { canonical: "/evidence" },
  openGraph: {
    title: "Evidence pack, everything dated and ready to hand over",
    description: "Turn your logs and documents into a formatted, numbered evidence pack for an annual review, a tribunal, or a new teacher.",
    url: "/evidence",
  },
};


export default function EvidencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <TranslationNotice />
      <main className="flex-1">
        <PageHeader
          eyebrowKey="page.evidence.eyebrow"
          titleKey="page.evidence.title"
          bodyKey="page.evidence.body"
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
