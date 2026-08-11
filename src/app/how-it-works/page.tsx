import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { HowItWorksSection } from "@/components/site/sections/how-it-works-section";
import { VoiceSection } from "@/components/site/sections/voice-section";
import { DecoderSection } from "@/components/site/sections/decoder-section";

export const metadata = {
  title: "How SENDSerene works — Capture, Understand, Prove",
  description:
    "Voice logging, jargon decoding, and a formatted evidence pack. Three steps that turn a hard day into something a tribunal panel can read.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <HowItWorksSection />
        <VoiceSection />
        <DecoderSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
