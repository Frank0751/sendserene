import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { SecuritySection } from "@/components/site/sections/security-section";
import { DataFlowSection } from "@/components/site/sections/data-flow-section";
import { CollaboratorsSection } from "@/components/site/sections/collaborators-section";
import { LanguagesSection } from "@/components/site/sections/languages-section";
import { security } from "@/lib/site-content";

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-security.png"
          eyebrow={security.eyebrow}
          title={security.title}
          body={security.body}
        />
        <SecuritySection />
        <DataFlowSection />
        <CollaboratorsSection />
        <LanguagesSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
