import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { TimescaleSection } from "@/components/site/sections/timescale-section";
import { DeadlineCalcSection } from "@/components/site/sections/deadline-calc-section";
import { timescaleTable } from "@/lib/site-content";

export default function TimescalesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-timescales.png"
          eyebrow={timescaleTable.eyebrow}
          title={timescaleTable.title}
          body={timescaleTable.body}
        />
        <TimescaleSection />
        <DeadlineCalcSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
