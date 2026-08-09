import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { VoiceSection } from "@/components/site/sections/voice-section";
import { voiceFeature } from "@/lib/site-content";

export default function VoiceLogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-voice.png"
          eyebrow={voiceFeature.eyebrow}
          title={voiceFeature.title}
          body={voiceFeature.body}
        />
        <VoiceSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
