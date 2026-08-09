# SENDSerene

A calmer way through your child's SEND case.

SENDSerene is a secure, multi-language web application that helps UK parents of children with special educational needs and disabilities (SEND) record what's happening, understand official correspondence, and produce a clear evidence pack when it matters.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: shadcn/ui (New York style) with Radix primitives
- **Icons**: Lucide React
- **State**: Zustand for client state
- **AI**: z-ai-web-dev-sdk for the jargon decoder API route
- **Fonts**: Bricolage Grotesque (display), Spectral (body), JetBrains Mono (metadata)

## Getting Started

### Prerequisites

- Node.js 18.18+ (or Bun 1.1+)
- npm (or bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/Frank0751/sendserene.git
cd sendserene

# Install dependencies
npm install
# or: bun install

# Copy environment variables
cp .env.example .env

# Run the development server
npm run dev
# or: bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

See `.env.example` for all required variables. The only variable needed for the current build is:

- `ZAI_API_KEY` - API key for the z-ai-web-dev-sdk (used by the jargon decoder at `/api/decode`)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (marketing landing)
│   ├── voice-log/         # Voice logging feature page
│   ├── decoder/           # Jargon decoder feature page
│   ├── evidence/          # Evidence pack feature page
│   ├── dashboard/         # Pattern dashboard page
│   ├── glossary/          # SEND glossary page
│   ├── timescales/        # Statutory timescales page
│   ├── ehcp/              # EHCP section viewer page
│   ├── pricing/           # Pricing and plans page
│   ├── security/          # Security and data protection page
│   ├── faq/               # FAQ and company info page
│   ├── api/
│   │   └── decode/        # AI jargon decoder API route
│   ├── layout.tsx         # Root layout (fonts, metadata, JSON-LD)
│   └── globals.css        # Global styles and design system
├── components/
│   ├── site/              # Site-specific components
│   │   ├── sections/      # Page section components
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── accessibility-panel.tsx
│   │   ├── scroll-utilities.tsx
│   │   ├── page-header.tsx
│   │   └── home-feature-grid.tsx
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
└── lib/                   # Utilities and content
    ├── site-content.ts    # All site copy and data
    └── utils.ts           # Utility functions
```

## Design System

- **Paper background**: Warm cream (`#faf6ed`)
- **Primary CTA**: Terracotta clay (`#b85c38`)
- **Supporting accent**: Deep teal (`#1f5158`)
- **Typography**: Bricolage Grotesque + Spectral + JetBrains Mono (no Inter)
- **No AI design tells**: no purple/indigo gradients, no glowing cards, no symmetrical 3-column grids

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - marketing landing with feature grid |
| `/voice-log` | Voice logging with interactive recorder |
| `/decoder` | Jargon decoder with live AI + 5-category tagging |
| `/evidence` | Evidence pack viewer + day in the life |
| `/dashboard` | Pattern dashboard with chart/timeline views |
| `/glossary` | Searchable SEND glossary (16 languages) |
| `/timescales` | Statutory timescale table + deadline calculator |
| `/ehcp` | EHCP section viewer + relationship map + vague detector |
| `/pricing` | Interactive pricing calculator + export comparison |
| `/security` | Security, data flow, collaborators, languages |
| `/faq` | FAQ, what's-not-included, help-me-reply, onboarding, admin |

## Deployment

### Deploy on Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add environment variables (see `.env.example`)
4. Deploy

The project is pre-configured for Vercel with standard Next.js settings.

### Build Commands

```bash
# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Features

- **16 languages**: English, Somali, Urdu, Punjabi, Bengali, Polish, Arabic, French, Portuguese, Turkish, Romanian, Chinese, Spanish, Persian, Tagalog, Vietnamese
- **Live AI jargon decoder**: Paste council letter text, get plain-English decode with deadlines
- **Interactive voice recorder**: 5-minute timer, waveform, auto-categorisation
- **Evidence pack viewer**: Sequential numbering, attribution toggle, quick brief
- **Pattern dashboard**: Bar chart + timeline views, evidence readiness bars
- **Statutory deadline calculator**: Enter trigger date, get full 20-week cascade
- **EHCP section viewer**: Interactive A-K section explorer
- **Vague language detector**: 5 samples of unenforceable wording with fixes
- **Accessibility panel**: Text size, dyslexia font, high contrast, reduced motion, dark mode, Easy Read
- **SEO**: JSON-LD structured data, sitemap, robots.txt, OG image
- **Responsive**: Mobile-first, works on all devices

## License

Proprietary. Owned by Zifankrah Ltd. Built by KoomBei Digital Limited.

## Project Reference

KB-2026-007
