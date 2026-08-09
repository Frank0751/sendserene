import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { EhcpViewerSection } from "@/components/site/sections/ehcp-viewer-section";
import { EhcpMapSection } from "@/components/site/sections/ehcp-map-section";
import { VagueDetectorSection } from "@/components/site/sections/vague-detector-section";
import { ProvisionTrackerSection } from "@/components/site/sections/provision-tracker-section";
import { ehcpViewer } from "@/lib/site-content";

export default function EhcpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-ehcp.png"
          eyebrow={ehcpViewer.eyebrow}
          title={ehcpViewer.title}
          body={ehcpViewer.body}
        />
        <EhcpViewerSection />
        <EhcpMapSection />
        <VagueDetectorSection />
        <ProvisionTrackerSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
