import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { SecuritySection } from "@/components/site/sections/security-section";
import { DataFlowSection } from "@/components/site/sections/data-flow-section";

export const metadata = {
  title: "Security and data protection — special category data, treated like it",
  description:
    "UK data residency, row-level security, PII redacted before AI, and a clear protocol for Ghana-based development. Your child's data never leaves the UK.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <SecuritySection />
        <DataFlowSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
