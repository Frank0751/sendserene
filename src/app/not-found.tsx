import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AccessibilityPanel } from "@/components/site/accessibility-panel";

export const metadata = {
  title: "Page not found, SENDSerene",
  description:
    "That page doesn't exist. Here are the parts of SENDSerene you're most likely looking for.",
  robots: { index: false, follow: true },
};

/**
 * 404 page.
 *
 * Keeps the site's own furniture rather than dropping to Next's default,
 * and offers a way onward instead of a dead end. A parent who mistypes a
 * URL should land somewhere calm and useful, not somewhere that looks broken.
 */
const suggestions = [
  { label: "Voice log", href: "/voice-log", desc: "Record what's happening, in your own words" },
  { label: "Jargon decoder", href: "/decoder", desc: "Turn a council letter into plain English" },
  { label: "Evidence pack", href: "/evidence", desc: "Everything, dated and ready to hand over" },
  { label: "SEND glossary", href: "/glossary", desc: "The terms, defined without the jargon" },
  { label: "Statutory timescales", href: "/timescales", desc: "What the council owes you, and by when" },
  { label: "Pricing", href: "/pricing", desc: "Free to start, £5 a month when it matters" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden paper-grain border-b border-paper-3">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 lg:py-28">
            <p className="eyebrow">Error 404</p>
            <h1 className="display mt-4 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] text-ink max-w-[20ch]">
              That page isn&apos;t here.
            </h1>
            <p className="mt-5 font-serif text-[1.05rem] leading-[1.7] text-ink-mid max-w-2xl">
              The link may be out of date, or the address may have a typo in it.
              Nothing you&apos;ve saved is affected. Here&apos;s where most people
              are heading.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/" className="btn-primary text-[14px]">
                Back to home
              </Link>
              <Link href="/faq" className="btn-ghost text-[14px]">
                Read the FAQ
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 sm:px-8 py-16 lg:py-20">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-light mb-6">
            Try one of these
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block h-full card-paper p-5 transition-colors hover:border-teal/40"
                >
                  <p className="font-display text-[15px] font-medium text-ink">
                    {s.label}
                  </p>
                  <p className="mt-1 font-serif text-[13.5px] leading-[1.6] text-ink-light">
                    {s.desc}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
      <AccessibilityPanel />
    </div>
  );
}
