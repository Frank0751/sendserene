import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { DecoderSection } from "@/components/site/sections/decoder-section";
import { decoderFeature } from "@/lib/site-content";

export default function DecoderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-decoder.png"
          eyebrow={decoderFeature.eyebrow}
          title={decoderFeature.title}
          body={decoderFeature.body}
        />
        <DecoderSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
