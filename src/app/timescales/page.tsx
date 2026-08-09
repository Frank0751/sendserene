import { SiteHeader } from "@/components/site/site-header";
import { TranslationNotice } from "@/components/site/translation-notice";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { TimescaleSection } from "@/components/site/sections/timescale-section";
import { DeadlineCalcSection } from "@/components/site/sections/deadline-calc-section";
import { timescaleTable } from "@/lib/site-content";

export const metadata = {
  title: "Statutory timescales, what the council owes you and by when",
  description:
    "The legal SEND timescales, plus a calculator that turns one trigger date into every deadline that follows from it.",
  alternates: { canonical: "/timescales" },
  openGraph: {
    title: "Statutory timescales, what the council owes you and by when",
    description: "The legal SEND timescales, plus a calculator that turns one trigger date into every deadline that follows from it.",
    url: "/timescales",
  },
};


export default function TimescalesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <TranslationNotice />
      <main className="flex-1">
        <PageHeader
          eyebrowKey="page.timescales.eyebrow"
          titleKey="page.timescales.title"
          bodyKey="page.timescales.body"
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
