import { SiteHeader } from "@/components/site/site-header";
import { TranslationNotice } from "@/components/site/translation-notice";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { VoiceSection } from "@/components/site/sections/voice-section";
import { voiceFeature } from "@/lib/site-content";

export const metadata = {
  title: "Voice log, record what happens in your own words",
  description:
    "Record observations about your child by voice. Transcribed, translated, and sorted into the four statutory SEND categories, ready for a review or tribunal.",
  alternates: { canonical: "/voice-log" },
  openGraph: {
    title: "Voice log, record what happens in your own words",
    description: "Record observations about your child by voice. Transcribed, translated, and sorted into the four statutory SEND categories, ready for a review or tribunal.",
    url: "/voice-log",
  },
};


export default function VoiceLogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <TranslationNotice />
      <main className="flex-1">
        <PageHeader
          eyebrowKey="page.voice.eyebrow"
          titleKey="page.voice.title"
          bodyKey="page.voice.body"
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
