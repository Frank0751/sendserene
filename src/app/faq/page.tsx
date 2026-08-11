import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { FaqSection } from "@/components/site/sections/faq-section";
import { BuiltBySection } from "@/components/site/sections/built-by-section";

export const metadata = {
  title: "FAQ — questions parents actually ask",
  description:
    "Straight answers about legal advice, data storage, languages, collaborators, and who built SENDSerene.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <FaqSection />
        <BuiltBySection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
