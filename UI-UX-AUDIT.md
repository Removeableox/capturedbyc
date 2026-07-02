# UI/UX Audit — capturedbyc.netlify.app

> **Purpose:** Handoff document for an implementing agent. Contains current-state analysis, prioritized issues, and a redesign spec with actionable tasks.
>
> **Live site:** https://capturedbyc.netlify.app/
> **Stack:** Next.js 16, React 19, Tailwind CSS v4, Lenis smooth scroll
> **Audit date:** 2026-07-01

---

## How to use this document

1. Read **File index** to understand the codebase layout.
2. Work through **Implementation checklist** in priority order (P0 → P3).
3. Reference **Current state** sections when modifying existing patterns.
4. Use **Redesign spec** for larger visual/structural changes.
5. Mark tasks complete in the checklist as you go.

---

## Executive summary

| Area | Grade | Notes |
|------|-------|-------|
| Visual identity | B+ | Strong hero, good photography, purple/blue gradient feels generic |
| Layout system | B | Consistent container, but inconsistent section wrappers |
| Spacing rhythm | B- | Mostly 16/24 vertical padding, but exceptions add noise |
| Typography | B | Clear h1/h2 split, but long headline and weak body hierarchy |
| UX / conversion | C+ | Too many similar CTAs, pricing is vague, portfolio is passive |
| Accessibility | C- | No focus styles, hover-only captions, marquee issues |

**Core problem:** The site sells *elite sports photography* but the UI treats photos like wallpaper. The redesign should invert that — **images lead, copy supports**.

---

## File index

| Path | Role |
|------|------|
| `src/app/layout.tsx` | Root layout, fonts (Inter + Oswald), metadata |
| `src/app/page.tsx` | Home page composition (single route `/`) |
| `src/app/globals.css` | Design tokens, theme, custom utilities, marquee animation |
| `postcss.config.mjs` | Tailwind v4 PostCSS plugin (no `tailwind.config.*`) |
| `src/lib/data.ts` | Content, nav links, image alts, FAQs, services, reviews |
| `src/components/Header.tsx` | Fixed nav, mobile menu |
| `src/components/SmoothScroll.tsx` | Lenis wrapper (desktop only, respects reduced motion) |
| `src/components/ReviewCarousel.tsx` | Marquee social proof |
| `src/components/ui/Button.tsx` | CTA link component (5 variants) |
| `src/components/ui/Container.tsx` | Section wrapper (`max-w-7xl`, horizontal padding) |
| `src/components/ui/SectionHeading.tsx` | Reusable h2 + subtitle |
| `src/components/ui/Stars.tsx` | Rating display |
| `src/components/sections/Hero.tsx` | Full-viewport hero |
| `src/components/sections/SocialProof.tsx` | Review marquee wrapper |
| `src/components/sections/Portfolio.tsx` | Image grid |
| `src/components/sections/Services.tsx` | Service cards |
| `src/components/sections/WhyChooseMe.tsx` | Value props + sidebar |
| `src/components/sections/Process.tsx` | 4-step timeline |
| `src/components/sections/Pricing.tsx` | Pricing band |
| `src/components/sections/About.tsx` | Photographer bio |
| `src/components/sections/FAQ.tsx` | Accordion |
| `src/components/sections/FinalCTA.tsx` | Contact CTA block |
| `src/components/Footer.tsx` | Footer |

### Page structure

```
RootLayout (layout.tsx)
└── SmoothScroll
    └── Home (page.tsx)
        ├── Header (fixed, outside <main>)
        ├── <main>
        │   ├── Hero
        │   ├── SocialProof → ReviewCarousel
        │   ├── Portfolio          (#portfolio)
        │   ├── Services             (#services)
        │   ├── WhyChooseMe
        │   ├── Process              (#process)
        │   ├── Pricing
        │   ├── About                (#about)
        │   ├── FAQ                  (#faq)
        │   └── FinalCTA             (#contact)
        └── Footer
```

### Section anchor IDs

| ID | Section |
|----|---------|
| `#portfolio` | Portfolio |
| `#services` | Services |
| `#process` | Process |
| `#about` | About |
| `#faq` | FAQ |
| `#contact` | Final CTA |

Nav links defined in `src/lib/data.ts` (`navLinks`).

---

## 1. Layout system

### Current patterns

- **Container:** `<section>` with `px-4 sm:px-6 lg:px-8` + inner `max-w-7xl` (`src/components/ui/Container.tsx`)
- **Hero & SocialProof:** raw `<section>` without `Container` — padding/max-width duplicated manually
- **Header:** duplicates container padding (`max-w-7xl px-4 sm:px-6 lg:px-8`)
- **Max width:** 1280px (`max-w-7xl`) everywhere

### Grid patterns

| Section | Grid |
|---------|------|
| Portfolio | `grid-cols-2 md:grid-cols-3`, gap `gap-2 sm:gap-3 lg:gap-4`; hero tile spans 2×2 |
| Services | `sm:grid-cols-2 lg:grid-cols-4 gap-6` |
| WhyChooseMe / About | `lg:grid-cols-2 gap-10 lg:gap-16` |
| Process | `lg:grid-cols-4 lg:gap-8` (vertical timeline on mobile) |
| Footer | `sm:grid-cols-2 lg:grid-cols-3 gap-10` |

### Layout issues

- [ ] **L1** Inconsistent section wrappers — Hero and SocialProof bypass `Container`
- [ ] **L2** Portfolio grid is dense on mobile — 2-up squares with `gap-2` (8px) feel cramped
- [ ] **L3** Social proof has no heading or landmark context — full-width marquee, no `h2`
- [ ] **L4** Pricing is a dead-end band — centered text, no visual anchor; breaks rhythm
- [ ] **L5** CTA repetition — "Book a Shoot" in header, hero, services, pricing, final CTA (5×)

---

## 2. Spacing rhythm

### Observed scale (implicit, not tokenized)

| Token | Value | Usage |
|-------|-------|-------|
| Section Y padding | `py-16 sm:py-24` | Most sections |
| Exceptions | `py-10/12/20` | SocialProof, Process, Pricing, FinalCTA |
| Horizontal padding | `px-4 sm:px-6 lg:px-8` | Container, Header, Hero |
| Section heading margin | `mb-10 sm:mb-14` | SectionHeading |
| Card padding | `p-6` / `p-8` | Services, sidebar cards |
| Grid gaps | `gap-2` → `gap-6` | Portfolio tight; Services loose |
| CTA groups | `mt-8`, `gap-3 sm:gap-4` | Repeated pattern |

### Spacing issues

- [ ] **S1** No formal spacing scale — values consistent by accident, not design system
- [ ] **S2** `gap-2` in portfolio vs `gap-6` in services creates uneven density
- [ ] **S3** SocialProof (`py-10`) sits tight against hero
- [ ] **S4** Pricing (`py-20`) feels shorter than neighbors despite being a conversion moment

### Target spacing tokens (implement in `globals.css`)

```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2.5rem;   /* 40px */
  --space-xl: 4rem;     /* 64px */
  --space-section: clamp(4rem, 8vw, 6rem);
}
```

Apply `--space-section` uniformly to all sections. Use tighter spacing inside cards only.

---

## 3. Typography hierarchy

### Current fonts

| Role | Font | CSS variable | Tailwind token |
|------|------|--------------|----------------|
| Body / UI | Inter (Google) | `--font-inter` | `font-sans` |
| Display / headings | Oswald (Google) | `--font-oswald` | `font-display` |

Loaded in `src/app/layout.tsx`.

### Current hierarchy

| Level | Where | Classes |
|-------|-------|---------|
| H1 | Hero only | `font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight` |
| H2 | Section titles | `font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight` |
| H3 | Cards, process steps | `font-display text-lg xl font-bold` |
| Body | Descriptions | `text-base text-text/60 leading-relaxed` |
| Meta | Trust, footer | `text-sm text-text/50` |
| Eyebrows | Hero, Pricing | `text-sm font-semibold uppercase tracking-[0.2em]` |

### Typography issues

- [ ] **T1** H1 is too long — 12 words at 7xl on desktop is hard to scan; target 4–6 words
- [ ] **T2** Weak body contrast hierarchy — almost everything secondary is `text-text/60`
- [ ] **T3** Eyebrow color inconsistency — Hero uses `text-secondary`, Pricing uses `text-accent`
- [ ] **T4** Inter + Oswald is overused in sports/fitness templates; doesn't differentiate brand
- [ ] **T5** Review carousel uses `whitespace-nowrap` — quotes truncate/overflow on mobile (`ReviewCarousel.tsx` line 19)

### Target typography changes

| Change | Rationale |
|--------|-----------|
| Replace Oswald with **Bebas Neue** or **Anton** for display | More athletic, less corporate |
| Keep Inter or switch to **DM Sans** for body | Better readability at lower opacities |
| Shorten H1 to ~5 words | e.g. "The Moment Everyone Misses" |
| Add stat line under hero | "500+ games · 24hr delivery · D1 recruits" |
| Create 3 text tiers: primary `/90`, secondary `/70`, tertiary `/55` | Replace flat `/60` everywhere |

---

## 4. Color & visual identity

### Current palette (`src/app/globals.css`)

```css
:root {
  --text: #eef1fb;
  --background: #040610;
  --primary: #3049c5;
  --secondary: #6d1e7b;
  --accent: #9c268e;
  /* + 3 linear and 3 radial gradient variables */
}
```

**Surface:** `color-mix(in srgb, var(--text) 4%, var(--background))` via `.bg-surface`

**Section banding:** alternating `bg-secondary/8`, `bg-primary/5`, `bg-secondary/10` with `border-text/10` dividers.

### Color issues

- [ ] **C1** Blue-purple-magenta gradient reads "SaaS startup" more than "arena lights and ice"
- [ ] **C2** Too many gradient utilities — 3 linear + 3 radial, most used once
- [ ] **C3** Primary CTA and header CTA are identical gradient pills — no visual priority
- [ ] **C4** `text-text/50` on `#040610` likely fails WCAG AA (~3.5:1 estimated)

### Target palette ("Editorial Arena")

```css
:root {
  --background: #0a0a0b;      /* near-black */
  --text: #f5f5f0;             /* warm white */
  --primary: #e8e4dc;          /* ice white — text accents */
  --accent: #c41e3a;           /* arena red — single bold accent for CTAs */
  --surface: #141416;
}
```

Use **one accent color** for CTAs only. Let photography supply color. Kill most gradients except subtle hero scrim.

Update `@theme inline` block to match. Map old semantic usages:
- Gradient CTAs → solid `--accent`
- `bg-secondary/8`, `bg-primary/5` section bands → subtle `--surface` variations or remove banding entirely

---

## 5. UX & interaction patterns

### What works (preserve)

- Hero image + gradient scrim — athlete visible, text readable
- Process timeline — clear vertical mobile → horizontal desktop
- FAQ accordion opens first item by default
- Lenis smooth scroll respects `prefers-reduced-motion`, desktop only (≥1024px)
- Semantic HTML throughout (see accessibility section)

### UX issues

| ID | Pattern | Problem | File(s) |
|----|---------|---------|---------|
| **U1** | Portfolio hover captions | Hidden until hover — useless on touch; keyboard users never see them | `Portfolio.tsx` |
| **U2** | Marquee reviews | Content duplicated; screen readers hear quotes twice; no pause button | `ReviewCarousel.tsx`, `SocialProof.tsx` |
| **U3** | Services emoji icons | Feel generic vs elite positioning | `Services.tsx`, `data.ts` |
| **U4** | Pricing section | "$350 starting" with no tiers or inclusions — creates doubt | `Pricing.tsx` |
| **U5** | Dual mailto CTAs | "Book a Shoot" and "Check Availability" go to same email | `FinalCTA.tsx` |
| **U6** | No portfolio lightbox | 18 images with no full-res view or book-from-shot flow | `Portfolio.tsx` |
| **U7** | Hidden scrollbars | Global `scrollbar-width: none` — users lose scroll affordance | `globals.css` |
| **U8** | CTA funnel | 5 identical "Book a Shoot" entry points compete instead of guiding | Multiple files |

---

## 6. Accessibility audit

### Passing (do not regress)

- `lang="en"` on `<html>`
- Landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- Portfolio: `<figure>` + `<figcaption>`
- Reviews: `<blockquote>`, `<cite>`; Stars has `aria-label`
- Process: `<ol>` / `<li>`
- Services: `<article>` cards
- FAQ: `aria-expanded` on toggle buttons
- Mobile menu: `aria-expanded`, `aria-label="Toggle menu"`
- Decorative elements: `aria-hidden="true"` on icons, connectors, gradients
- Reduced motion: Lenis disabled when `prefers-reduced-motion: reduce`; marquee uses `motion-reduce:animate-none`
- External links: Instagram has `rel="noopener noreferrer"`
- Images: descriptive `alt` from `src/lib/data.ts`

### Failing / at risk

| ID | Issue | Severity | File(s) | Fix |
|----|-------|----------|---------|-----|
| **A1** | No `focus-visible` styles anywhere | **Critical** | All interactive elements | Add global focus ring utility |
| **A2** | FAQ missing `aria-controls`, panel IDs | **High** | `FAQ.tsx` | Wire accordion ARIA properly |
| **A3** | Mobile nav: no focus trap, no `aria-controls` | **High** | `Header.tsx` | Trap focus in overlay; link button to nav panel |
| **A4** | No skip-to-content link | **Medium** | `layout.tsx` or `Header.tsx` | Add skip link before header |
| **A5** | Portfolio captions hover-only | **Medium** | `Portfolio.tsx` | Always-visible caption overlay |
| **A6** | Marquee: duplicated content, no pause | **Medium** | `ReviewCarousel.tsx` | Static grid or pause button |
| **A7** | Low contrast secondary text (`/50`, `/60`) | **Medium** | Global | Bump to `/70` minimum for body |
| **A8** | Gradient text utilities | **Medium** | `globals.css` | Don't use for body copy |
| **A9** | Hidden scrollbars globally | **Low–Medium** | `globals.css` | Remove or scope to marquee only |

### A1 implementation reference

Add to `globals.css`:

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

Or per-component: `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`

### A2 implementation reference

In `FAQ.tsx`, each item needs:

```tsx
<button
  aria-expanded={isOpen}
  aria-controls={`faq-panel-${index}`}
  id={`faq-button-${index}`}
  ...
/>
<div
  id={`faq-panel-${index}`}
  role="region"
  aria-labelledby={`faq-button-${index}`}
  hidden={!isOpen}  // or conditional render with aria-hidden
>
  ...
</div>
```

---

## 7. Redesign spec — "Editorial Arena"

### Design direction

Shift from template-dark-gradient to a **magazine/editorial sports aesthetic** — photos breathe, typography feels like campaign copy, UI chrome disappears.

### A. Layout restructure

```
┌─────────────────────────────────────────┐
│  Minimal sticky header (logo + 1 CTA)   │
├─────────────────────────────────────────┤
│  FULL-BLEED HERO — short headline       │
│  [Book] [See Work ↓]                    │
├─────────────────────────────────────────┤
│  Featured work — 3 hero shots, full width│
│  (horizontal scroll on mobile)          │
├─────────────────────────────────────────┤
│  Social proof — static 3-up grid        │
│  (replace marquee)                      │
├─────────────────────────────────────────┤
│  Services — 2×2 with photo backgrounds  │
├─────────────────────────────────────────┤
│  Process — single horizontal strip      │
├─────────────────────────────────────────┤
│  Pricing — 3 tier cards w/ anchor price │
├─────────────────────────────────────────┤
│  About — large portrait + pull quote    │
├─────────────────────────────────────────┤
│  FAQ                                     │
├─────────────────────────────────────────┤
│  CTA — full-bleed photo + overlay form   │
└─────────────────────────────────────────┘
```

**Key layout changes:**

- [ ] **R1** Drop `max-w-7xl` on portfolio; use full-bleed with always-visible caption bar
- [ ] **R2** Replace 18-tile grid with curated 8–10 shots + "View full gallery" link (Instagram or `/portfolio` route)
- [ ] **R3** Add sticky bottom CTA bar on mobile (single "Book a Shoot"); demote header CTA to ghost/outline on mobile
- [ ] **R4** Unify all sections through `Container` or a new `Section` primitive with consistent vertical padding

### B. Component upgrades

| Component | Current | Target | File(s) |
|-----------|---------|--------|---------|
| **Button** | Gradient pill, no focus | Solid accent primary; ghost secondary; focus-visible ring | `Button.tsx`, `globals.css` |
| **Portfolio** | Hover captions, 18-tile grid | Always-visible captions; click opens lightbox; reduced-motion fallback | `Portfolio.tsx`, new `Lightbox.tsx` |
| **Reviews** | Infinite marquee | Static 3-card grid OR featured quote with pause button | `ReviewCarousel.tsx`, `SocialProof.tsx` |
| **Services** | Emoji icons | Photo thumbnails from actual work | `Services.tsx`, `data.ts` |
| **Pricing** | Single centered block | Three tier cards with bullet inclusions | `Pricing.tsx`, `data.ts` |
| **Final CTA** | Dual mailto links | 3-field form (name, event date, sport) or Calendly embed | `FinalCTA.tsx` |
| **Header** | Logo + 6 links + CTA | Logo + 4 links + single CTA; hamburger on mobile | `Header.tsx`, `data.ts` |
| **Hero** | 12-word headline | ~5-word headline + stat line | `Hero.tsx`, `data.ts` |

### C. Conversion funnel simplification

**Current:** 5 "Book a Shoot" entry points, all equivalent.

**Target funnel:**

1. Hero → primary CTA (Book)
2. Portfolio → secondary engagement (See work)
3. Services → education
4. Pricing → decision
5. Final CTA → convert (form, not mailto)

One primary action color throughout. Header CTA becomes outline/ghost so hero and final CTA own conversion.

---

## Implementation checklist

Work in priority order. Each task references issue IDs from above.

### P0 — Accessibility (do first)

- [ ] **A1** Add global `focus-visible` ring styles to all interactive elements (`globals.css`, verify on `Button.tsx`, `Header.tsx`, `FAQ.tsx`, nav links)
- [ ] **A2** Wire FAQ accordion ARIA: `aria-controls`, panel `id`, `role="region"`, `aria-labelledby` (`FAQ.tsx`)
- [ ] **A3** Mobile nav: add `aria-controls` on hamburger, focus trap in overlay, `Escape` to close (`Header.tsx`)
- [ ] **A4** Add skip link: `<a href="#main" class="sr-only focus:not-sr-only ...">Skip to content</a>` — add `id="main"` to `<main>` in `page.tsx`
- [ ] **A5** Make portfolio captions always visible — bottom gradient overlay, remove hover-only `translate-y-full` (`Portfolio.tsx`)
- [ ] **A7** Bump body text from `text-text/50` and `text-text/60` to `text-text/70` minimum
- [ ] **A9** Remove global scrollbar hiding from `html` in `globals.css` (or scope to marquee container only)

### P1 — Quick UX wins

- [ ] **T1** Shorten H1 in `Hero.tsx` / `data.ts` to ~5 words; move supporting copy to subheadline
- [ ] **T5** Remove `whitespace-nowrap` from review carousel; allow wrapping or truncate with ellipsis (`ReviewCarousel.tsx`)
- [ ] **U2** Replace marquee with static 3-card review grid (`ReviewCarousel.tsx`, `SocialProof.tsx`)
- [ ] **U5** Consolidate FinalCTA to single primary action + one secondary (form or single mailto) (`FinalCTA.tsx`)
- [ ] **U8** Reduce "Book a Shoot" duplication — header CTA becomes `outline` variant (`Header.tsx`)
- [ ] **L3** Add visually hidden or visible heading to SocialProof section (`SocialProof.tsx`)
- [ ] Add `prefers-reduced-motion` fallback to portfolio image scale transition (`Portfolio.tsx`)

### P2 — Design system foundation

- [ ] **S1** Add spacing tokens to `globals.css` (`--space-xs` through `--space-section`)
- [ ] **C1–C4** Implement new color palette in `globals.css` and update `@theme inline`
- [ ] **T4** Swap Oswald for Bebas Neue or Anton in `layout.tsx`; update `font-display` class
- [ ] **T2** Create three text opacity tiers and apply across sections
- [ ] **T3** Standardize eyebrow color (pick one: accent or a neutral)
- [ ] Refactor `Button.tsx`: primary = solid accent, remove gradient dependency
- [ ] Remove unused gradient utilities from `globals.css` (keep hero scrim only)
- [ ] **L1** Unify section wrappers — migrate Hero/SocialProof to use `Container` or new `Section` primitive
- [ ] **S2–S4** Normalize section vertical padding to `--space-section`

### P3 — Structural redesign

- [ ] **R1** Full-bleed portfolio layout with always-visible captions
- [ ] **R2** Curate portfolio to 8–10 shots; add "View full gallery" external link
- [ ] **U6** Build portfolio lightbox component (`Lightbox.tsx`)
- [ ] **U3** Replace service emoji with photo thumbnails (`Services.tsx`, `data.ts`)
- [ ] **U4** Build 3-tier pricing cards (`Pricing.tsx`, `data.ts`)
- [ ] **R3** Sticky mobile bottom CTA bar (new component)
- [ ] **R4** Final CTA: contact form or Calendly embed instead of mailto (`FinalCTA.tsx`)
- [ ] Add hero stat line component ("500+ games · 24hr delivery · D1 recruits")
- [ ] Consider dedicated `/portfolio` route (optional, new page)

---

## Content changes needed (`src/lib/data.ts`)

These content updates support the redesign:

```ts
// Hero — shorten headline
headline: "The Moment Everyone Misses"
subheadline: "Elite sports photography for game-day coverage, athlete portraits, and team brands."
stats: ["500+ games photographed", "24–72hr delivery", "D1 recruitment ready"]

// Services — replace emoji icons with image paths
services: [{ title, description, image: "/portfolio/..." }, ...]

// Pricing — add tiers
pricingTiers: [
  { name: "Game Day", price: "$350", features: [...] },
  { name: "Season Package", price: "Custom", features: [...] },
  { name: "Portrait Session", price: "Custom", features: [...] },
]

// Portfolio — curate to 8–10 featured items; keep full list for gallery page
```

---

## Testing checklist

After implementation, verify:

- [ ] Tab through entire page — visible focus ring on every interactive element
- [ ] FAQ accordion works with keyboard (Enter/Space toggle, aria state updates)
- [ ] Mobile menu traps focus; Escape closes; body scroll locked when open
- [ ] Portfolio captions visible on mobile without hover
- [ ] Review section readable on 375px viewport (no horizontal overflow)
- [ ] `prefers-reduced-motion: reduce` disables Lenis, marquee, and portfolio scale
- [ ] Lighthouse accessibility score ≥ 90
- [ ] Contrast check on all text opacity tiers (use browser DevTools or axe)
- [ ] All CTAs lead to correct destinations (no duplicate/conflicting mailto)
- [ ] Page renders correctly at 375px, 768px, 1024px, 1440px breakpoints

---

## Dependencies & constraints

- **Do not add** `tailwind.config.js` — project uses Tailwind v4 CSS-first config in `globals.css`
- **Read** `node_modules/next/dist/docs/` before changing Next.js APIs (project uses Next.js 16 with breaking changes)
- **Lenis** is already installed — keep smooth scroll behavior unless redesign spec says otherwise
- **No framer-motion** installed — use CSS transitions or add library only if needed for lightbox
- **Images** use `next/image` — maintain `alt`, `sizes`, and `priority` on hero
- **Do not commit** `.env` or secrets

---

## Reference: current design tokens

```css
/* src/app/globals.css — :root */
--text: #eef1fb;
--background: #040610;
--primary: #3049c5;
--secondary: #6d1e7b;
--accent: #9c268e;
```

```css
/* Custom utilities to review/remove during redesign */
.font-display
.bg-surface
.bg-linear-primary-accent (and 5 other gradient classes)
.text-gradient-* (3 variants)
.btn-gradient-primary-accent
.animate-marquee
```

---

## Reference: Button variants

File: `src/components/ui/Button.tsx`

| Variant | Current use |
|---------|-------------|
| `primary` | Main CTAs — gradient |
| `secondary` | — |
| `ghost` | FinalCTA secondary, glass effect |
| `outline` | Hero "View Portfolio" |
| `light` | FinalCTA primary on gradient background |

Target: simplify to `primary` (solid accent), `secondary` (outline/ghost), `light` (on dark photo backgrounds).

---

## Post-redesign audit (2026-07-02)

> **Preview site:** https://capturedbyc-redesign.netlify.app/  
> **Branch:** `redesign/editorial-arena`  
> **Method:** Playwright MCP (a11y snapshots, viewport testing, interactions) + fetch MCP (content diff vs production)

### Grade comparison

| Area | Pre-redesign | Post-redesign | Post-polish |
|------|-------------|---------------|-------------|
| Visual identity | B+ | A- | A- |
| Layout system | B | B+ | A- |
| Spacing rhythm | B- | B+ | B+ |
| Typography | B | A- | A- |
| UX / conversion | C+ | B | B+ |
| Accessibility | C- | B+ | B+ |

**Core shift achieved:** Images lead; copy supports. Editorial Arena palette and photo-first sections are live on the preview site.

### Original checklist — resolved on redesign branch

- [x] **A1** Global `focus-visible` ring styles
- [x] **A2** FAQ accordion ARIA wiring
- [x] **A3** Mobile nav focus trap + `aria-controls` + Escape
- [x] **A4** Skip link + `id="main"`
- [x] **A5** Always-visible portfolio captions
- [x] **A7** Body text opacity bumped to `/70` minimum
- [x] **A9** Global scrollbar hiding removed
- [x] **T1** Short H1 + stat line
- [x] **T5** Marquee removed (static 3-card grid)
- [x] **U2** Static review grid with section heading
- [x] **U5** FinalCTA consolidated to form + single email fallback
- [x] **U8** Header CTA demoted to outline variant
- [x] **S1–S4** Spacing tokens + uniform section padding
- [x] **C1–C4** Editorial Arena palette + simplified buttons
- [x] **T4** Bebas Neue + DM Sans
- [x] **R2** Curated portfolio (10 shots) + Instagram gallery link
- [x] **U6** Portfolio lightbox
- [x] **U3** Service photo backgrounds
- [x] **U4** 3-tier pricing cards
- [x] **R3** Sticky mobile bottom CTA bar
- [x] **R4** Netlify contact form (name, event date, sport)

### MCP audit issues — status after polish pass

| ID | Issue | Status |
|----|-------|--------|
| **N1** | Portfolio strip duplicated first 3 grid images | **Fixed** — strip shows items 0–2; grid shows items 3–9 |
| **N2** | Weak horizontal scroll affordance on featured strip | **Fixed** — scroll-snap, edge fade, swipe hint text |
| **N3** | CTA funnel crowded (7 Book/Get Started actions) | **Fixed** — pricing cards use text "Request quote →" links |
| **N4** | Sticky CTA visible when contact form in view | **Fixed** — IntersectionObserver hides bar at `#contact` |
| **N5** | Lightbox + mobile menu overlap | **Fixed** — `app:overlay-open` event closes mobile nav |
| **N6** | Portfolio not full-bleed | **Fixed** — grid edge-to-edge (`gap-1`, no horizontal padding) |
| **N7** | WhyChooseMe content removed | **Open** — intentional per layout spec; optional trust bar |
| **N8** | Review `<cite>` semantics in a11y tree | **Open** — minor; `<cite>` present in markup |
| **N9** | Preview badge on staging site | **Open** — remove `NEXT_PUBLIC_PREVIEW` before production merge |
| **N10** | Pricing not in header nav | **Open** — FAQ reachable via footer only |
| **N11** | Process stacks vertically on mobile | **Accepted** — horizontal at desktop |
| **N12** | No dedicated `/portfolio` route | **Open** — optional follow-up |

### Before vs after (fetch MCP)

| Element | Production | Redesign preview |
|---------|-----------|------------------|
| Hero H1 | 12-word headline | 5-word headline + stats |
| Social proof | Infinite marquee | Static 3-card grid |
| Portfolio | 18-tile hover grid | 3-up strip + 7-tile grid + lightbox |
| Services | Emoji cards | Photo-backed 2×2 |
| Pricing | Single "$350" block | 3 tier cards with inclusions |
| Contact | Dual mailto | Netlify form + email fallback |

### Pre-merge reminder

1. Unset `NEXT_PUBLIC_PREVIEW` on the production Netlify site (keep on preview site only).
2. Open PR: `redesign/editorial-arena` → `main` after client approval.
3. Run Lighthouse accessibility ≥ 90 on preview URL before merge.
