import type { Metadata } from "next";
import { Bricolage_Grotesque, Spectral, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { faqs } from "@/lib/site-content";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sendserene.co.uk"),
  title: "SENDSerene, A calmer way through your child's SEND case",
  description:
    "SENDSerene helps UK parents of children with special educational needs and disabilities record what's happening, understand official letters, and produce a clear evidence pack when it matters. Sixteen languages. Built for the 20-week clock.",
  keywords: [
    "SENDSerene",
    "SEND",
    "EHCP",
    "EHC plan",
    "special educational needs",
    "SEND tribunal",
    "evidence pack",
    "SEN parent",
    "UK SEND",
    "jargon decoder",
  ],
  authors: [{ name: "Zifankrah Ltd" }],
  // Home page canonical. Every sub-page sets its own via `alternates`,
  // resolved against metadataBase above.
  alternates: { canonical: "/" },
  openGraph: {
    title: "SENDSerene, A calmer way through your child's SEND case",
    description:
      "Record what's happening. Understand the letters. Prove your case. Sixteen languages, UK data residency, built for the 20-week statutory clock.",
    siteName: "SENDSerene",
    type: "website",
    images: [{ url: "/img/og-card.png", width: 1344, height: 768, alt: "SENDSerene, A calmer way through your child's SEND case" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SENDSerene, A calmer way through your child's SEND case",
    description:
      "Record what's happening. Understand the letters. Prove your case.",
    images: ["/img/og-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SENDSerene",
    url: "https://sendserene.co.uk",
    description:
      "A secure, multi-language web application that helps UK parents of children with SEND record evidence, understand official correspondence, and produce clear evidence packs.",
    founder: {
      "@type": "Person",
      name: "Irene Ankrah",
      jobTitle: "Director",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Zifankrah Ltd",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${spectral.variable} ${jetbrains.variable} font-serif antialiased bg-paper text-ink`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
