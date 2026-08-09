import { SiteHeader } from "@/components/site/site-header";
import { TranslationNotice } from "@/components/site/translation-notice";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";
import { ScrollUtilities } from "@/components/site/scroll-utilities";
import { PageHeader } from "@/components/site/page-header";
import { FaqSection } from "@/components/site/sections/faq-section";
import { NotIncludedSection } from "@/components/site/sections/not-included-section";
import { BuiltBySection } from "@/components/site/sections/built-by-section";
import { TestimonialsSection } from "@/components/site/sections/testimonials-section";
import { HelpMeReplySection } from "@/components/site/sections/help-me-reply-section";
import { NonResponseSection } from "@/components/site/sections/non-response-section";
import { OnboardingSection } from "@/components/site/sections/onboarding-section";
import { AdminPanelSection } from "@/components/site/sections/admin-panel-section";
import { faqs } from "@/lib/site-content";

export const metadata = {
  title: "FAQ, what SENDSerene is and what it is not",
  description:
    "Straight answers about how SENDSerene works, what it deliberately does not do, and who built it.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ, what SENDSerene is and what it is not",
    description: "Straight answers about how SENDSerene works, what it deliberately does not do, and who built it.",
    url: "/faq",
  },
};


export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <TranslationNotice />
      <main className="flex-1">
        <PageHeader
          eyebrowKey="page.faq.eyebrow"
          titleKey="page.faq.title"
          bodyKey="page.faq.body"
        bgImage="/img/hero-faq.png"
          eyebrow="FAQ & more"
          title="The questions parents actually ask."
          body="Short answers, honest scope, and the full picture of who built this and how it works."
        />
        <FaqSection />
        <NotIncludedSection />
        <TestimonialsSection />
        <HelpMeReplySection />
        <NonResponseSection />
        <OnboardingSection />
        <AdminPanelSection />
        <BuiltBySection />
      </main>
      <SiteFooter />
      <AccessibilityPanel />
      <ScrollUtilities />
    </div>
  );
}
