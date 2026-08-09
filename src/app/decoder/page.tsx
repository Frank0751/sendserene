import { SiteHeader } from "@/components/site/site-header";
import { TranslationNotice } from "@/components/site/translation-notice";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { DecoderSection } from "@/components/site/sections/decoder-section";
import { decoderFeature } from "@/lib/site-content";

export const metadata = {
  title: "Jargon decoder, council letters in plain English",
  description:
    "Paste a council or school letter and get a plain-English summary, the statutory deadlines pulled out, and any vague or unenforceable wording flagged.",
  alternates: { canonical: "/decoder" },
  openGraph: {
    title: "Jargon decoder, council letters in plain English",
    description: "Paste a council or school letter and get a plain-English summary, the statutory deadlines pulled out, and any vague or unenforceable wording flagged.",
    url: "/decoder",
  },
};


export default function DecoderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <TranslationNotice />
      <main className="flex-1">
        <PageHeader
          eyebrowKey="page.decoder.eyebrow"
          titleKey="page.decoder.title"
          bodyKey="page.decoder.body"
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
