import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { PricingSection } from "@/components/site/sections/pricing-section";
import { ExportComparisonSection } from "@/components/site/sections/export-comparison-section";
import { pricing } from "@/lib/site-content";

export const metadata = {
  title: "Pricing, free to start and £5 a month when it matters",
  description:
    "Free tier with three decodes, thirty voice logs and one collaborator. Premium is £5 a month for two children, £2 for each additional child.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing, free to start and £5 a month when it matters",
    description: "Free tier with three decodes, thirty voice logs and one collaborator. Premium is £5 a month for two children, £2 for each additional child.",
    url: "/pricing",
  },
};


export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-pricing.png"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          body={pricing.body}
        />
        <PricingSection />
        <ExportComparisonSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
