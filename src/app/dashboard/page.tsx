import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { PatternDashboardSection } from "@/components/site/sections/pattern-dashboard-section";
import { patternDashboard } from "@/lib/site-content";

export const metadata = {
  title: "Pattern dashboard, see what the record is telling you",
  description:
    "Trends across your logged observations by statutory category and over time, with evidence readiness for each of the four SEND areas.",
  alternates: { canonical: "/dashboard" },
  openGraph: {
    title: "Pattern dashboard, see what the record is telling you",
    description: "Trends across your logged observations by statutory category and over time, with evidence readiness for each of the four SEND areas.",
    url: "/dashboard",
  },
};


export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-dashboard.png"
          eyebrow={patternDashboard.eyebrow}
          title={patternDashboard.title}
          body={patternDashboard.body}
        />
        <PatternDashboardSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
