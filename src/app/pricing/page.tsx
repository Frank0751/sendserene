import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { SimplePricingSection } from "@/components/site/sections/simple-pricing-section";

export const metadata = {
  title: "Pricing — free to start, fair when it matters",
  description:
    "Free: 60 voice logs and 4 decodes a month. Premium: £5/month or £48/year, unlimited logs and decodes, collaborator access. Both tiers cover two children.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <SimplePricingSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
