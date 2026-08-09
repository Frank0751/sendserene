import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { GlossarySection } from "@/components/site/sections/glossary-section";
import { EmailIngestionSection } from "@/components/site/sections/email-ingestion-section";
import { glossary } from "@/lib/site-content";

export const metadata = {
  title: "SEND glossary, the terms defined without the jargon",
  description:
    "Plain-English definitions of the SEND terms councils and schools use, available across sixteen languages.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "SEND glossary, the terms defined without the jargon",
    description: "Plain-English definitions of the SEND terms councils and schools use, available across sixteen languages.",
    url: "/glossary",
  },
};


export default function GlossaryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
        bgImage="/img/hero-glossary.png"
          eyebrow={glossary.eyebrow}
          title={glossary.title}
          body={glossary.body}
        />
        <GlossarySection />
        <EmailIngestionSection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
