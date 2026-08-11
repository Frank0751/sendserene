import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { VoiceSection } from "@/components/site/sections/voice-section";

export const metadata = {
  title: "Voice log — record what happens in your own words",
  description:
    "Five minutes in the car after pick-up. SENDSerene transcribes it, files it under the right SEND category, and builds your evidence record.",
  alternates: { canonical: "/voice-log" },
};

export default function VoiceLogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <VoiceSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
