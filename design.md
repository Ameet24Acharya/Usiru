# Usiru — Design System

Source of truth: `Usiru.html` (single-file marketing site). This document reverse-engineers the design language actually implemented there, so future pages/components stay consistent. If code and doc ever disagree, the code wins — update this file.

## Brand concept

**Usiru** (ಉಸಿರು, Kannada for "breath") is a senior assisted-living community in Bengaluru. The design language is meant to read as *warm, dignified, unhurried* — the opposite of a clinical care facility. Recurring cues: hand-drawn botanical line art, Kannada script as a decorative mark, generous whitespace, serif display type paired with a soft humanist sans.

## Color palette

Defined as CSS custom properties in `:root` (Usiru.html:12-24).

| Token | Value | Role |
|---|---|---|
| `--evergreen` | `#22453A` | Primary brand color — dark section backgrounds, headings, primary buttons |
| `--evergreen-deep` | `#183129` | Deeper variant — hero gradient end, footer sections, hover states |
| `--brass` | `#B5893F` | Accent — eyebrows, underlines, card numerals, CTA band background |
| `--brass-soft` | `#C9A461` | Lighter accent — on dark backgrounds (hero, footer, `.living`) |
| `--ivory` | `#F4F0E6` | Base page background, text-on-dark color |
| `--paper` | `#FBF8F1` | Slightly lighter neutral — alternates with ivory to separate sections |
| `--bark` | `#2A251D` | Primary body text color (near-black, warm) |
| `--sage` | `#7C9187` | Muted secondary text (nav subtitle, quote attribution role) |
| `--leaf` | `#8FCB9B` | Light green — `.btn-book` fill (the "Book a Visit" CTAs in Nav and Hero specifically, not other primary buttons) |
| `--leaf-deep` | `#6FB57E` | `.btn-book` hover state |
| `--line` | `rgba(42,37,29,.14)` | Hairline borders/dividers |
| `--shadow` | `0 24px 60px -30px rgba(24,49,41,.45)` | Standard elevated-card shadow |

> `--leaf`/`--leaf-deep` and `.btn-book` were added after the `client/` React migration (`client/src/index.css`) — they don't exist in the legacy `Usiru.html`.

**Usage pattern**: sections alternate between light neutrals (`--ivory`/`--paper`, default text) and full-bleed dark brand sections (`--evergreen` / `--evergreen-deep` background, `--ivory` text, `--brass-soft` for eyebrows/accents) to create visual rhythm down the page — see Intro (light) → Care (light) → Living (dark) → Story (light) → Testimonials (light) → Band (brass) → FAQ (light) → Enquiry (dark) → Footer (darkest).

Body copy on light backgrounds typically uses `#4a4438` rather than the darker `--bark`, for softer long-form reading contrast.

## Typography

Two Google Fonts, loaded via `<link>` (Usiru.html:10):

- **Fraunces** (serif, variable, ital/opsz axes) — all headings (`h1,h2,h3`), the Kannada mark (`.kan`), quote marks, numerals. Weight 400–600, default weight 500. Used at italic for emphasis spans (`<em>` in hero h1) and for the decorative `ಉಸಿರು` glyph.
- **Mulish** (sans, humanist) — body copy, nav, buttons, labels. Weights 400/500/600/700.

Type scale is fluid (`clamp()`), not fixed breakpoints:
- Hero `h1`: `clamp(2.6rem, 6.4vw, 5rem)`
- Section `h2`: `clamp(2rem, 4vw, 3.1rem)`
- Body base: `18px` (`17px` under 520px)
- Line height: `1.6` body, `1.08` headings (tight, serif-appropriate)

**Eyebrow** pattern (`.eyebrow`, Usiru.html:42-47): small caps label above every section heading — `.72rem`, `.22em` letter-spacing, uppercase, bold, brass color, preceded by a 26×1px horizontal rule (`::before`). Frequently paired with the Kannada word `ಉಸಿರು` in Fraunces italic-weight (`.kan`) as a bilingual flourish.

## Layout

- **Max width**: `--maxw: 1160px`, applied via `.wrap` (`max-width:var(--maxw); margin:0 auto; padding:0 28px`) — the single layout container used on every section.
- **Section rhythm**: `section { padding: clamp(64px,9vw,120px) 0 }` — consistent fluid vertical padding across all sections, no per-section overrides.
- **Section intro**: `.sec-head` caps text width at `760px` (heading) so long headlines don't stretch full-bleed; body copy inside further caps at `640px`.
- **Grids**: mostly CSS Grid with fixed column counts that collapse to 1 column at the `900px` breakpoint (see Responsive):
  - `.intro-grid`: `1.05fr .95fr` (text / illustration)
  - `.care-grid`: `repeat(2, 1fr)` — 4 cards, 2×2
  - `.amen-grid`: `repeat(3, 1fr)`
  - `.founder-grid`: `.9fr 1.1fr` (illustration / text)
  - `.testi-grid`: `repeat(3, 1fr)`
  - `.enq-grid`: `1fr 1fr`
  - `.foot-grid`: `1.6fr 1fr 1fr 1fr` → `1fr 1fr` (900px) → `1fr` (520px)

## Components

**Buttons** (`.btn`) — pill-shaped (`border-radius:999px`), no border by default, `.7rem 1.4rem` padding, `700` weight, `.9rem` size.
- `.btn-primary`: evergreen fill / ivory text → darkens + lifts (`translateY(-2px)`) on hover.
- `.btn-ghost`: transparent with `1.5px` evergreen border → fills evergreen on hover. On dark sections (hero), swaps to ivory border/text with ivory fill on hover.

**Cards**
- `.care-card`: paper background, hairline border, `10px` radius, generous padding. On hover: lifts 5px, gains `--shadow`, and reveals a `4px` brass left-edge accent bar (`::after`, `scaleY` animated from 0→1). Numbered `01`–`04` in brass Fraunces.
- `.quote` (testimonials): ivory-on-paper card with a large decorative Fraunces `"` mark in brass, italic serif quote body, bold evergreen attribution name + sage role subtitle.
- `.enq-card`: translucent ivory-tinted panel (`rgba(244,240,230,.06)` on dark enquiry background) with icon + title + description; hover brightens background and nudges right 4px (`translateX(4px)`).

**Illustration panels** (`.intro-panel`, `.founder-panel`) — decorative aspect-ratio boxes (4/5 and 1/1) with a gradient fill, an inline SVG line drawing at partial opacity layered on top, and a `--shadow` elevation. These stand in for photography — no raster images are used anywhere in the site; all imagery is hand-drawn SVG line art (branches, garden lines, circles) in `currentColor`, echoing the botanical/breath brand concept.

**FAQ accordion** (`.faq`) — button rows with a `+` glyph that rotates 45° (→ ×) when open; answer panel animates via `max-height` transition (JS sets `scrollHeight` on open, Usiru.html:527-535). Bottom-border-only dividers, no card chrome.

**Nav** (`header.nav`) — sticky, translucent ivory with `backdrop-filter: blur(10px)`, hairline bottom border. Links get an animated brass underline on hover/focus (`::after`, width 0→100%). Below 900px collapses to a slide-down full-width panel triggered by a 3-line hamburger (`.menu-toggle`) that morphs via JS class toggling (no icon swap, just container state).

**Form fields** (`.form-field`, added for the `/contact` page — client/src/index.css only, not in `Usiru.html`) — label in bold evergreen above the input; text/email/tel/select/textarea all share one treatment: paper background, hairline border, `8px` radius, `.8rem 1rem` padding. Focus state swaps the border to brass and adds a soft brass glow (`box-shadow`) instead of a hard browser outline. Optional fields get a `(optional)` suffix in sage next to the label, matching the FAQ/testimonial "muted secondary text" role rather than introducing a new color.

## Motion

- **Scroll reveal**: any element with `.reveal` starts `opacity:0; translateY(24px)` and animates to visible via `IntersectionObserver` at `threshold:.12`, one-shot (`unobserve` after triggering) — Usiru.html:538-541. Applied to section headers, cards, and illustration panels throughout.
- **Hover micro-interactions**: buttons lift (`translateY(-2px)`), cards lift (`translateY(-5px)`) + shadow, enquiry cards slide right, care-card "Explore →" link gap widens on hover — all standard `.2s–.3s ease` transitions, no bounce/spring easing.
- **Respects `prefers-reduced-motion: reduce`**: disables all animation/transition and force-shows `.reveal` content (Usiru.html:204-207). Always preserve this when adding new motion.

## Responsive breakpoints

Two breakpoints only, mobile-first content but desktop-first CSS (`max-width` queries):
- **900px**: nav collapses to hamburger/drawer; all major 2–3 column grids collapse to 1 column; founder illustration reorders above text (`order:-1`).
- **520px**: body font drops to 17px; footer grid goes fully single-column; hero stats gap tightens.

No dedicated tablet-specific tuning beyond these two steps — fluid `clamp()` sizing carries most of the responsive load between breakpoints.

## Accessibility notes already in place

- Visible focus ring on links/buttons: `3px solid var(--brass)` with offset (Usiru.html:208).
- Decorative SVGs marked `aria-hidden="true"`; illustration containers carry descriptive `aria-label` instead.
- Hamburger and FAQ buttons track `aria-expanded` state via JS.
- `prefers-reduced-motion` fully honored (see Motion).

## Conventions for extending this site

- New sections should alternate light/dark background per the established rhythm rather than stacking two dark or two light sections back-to-back.
- Reuse `.eyebrow` + `.sec-head` for any new section intro rather than inventing a new heading pattern.
- New illustrative content should stay in the hand-drawn SVG line-art style (stroke `currentColor`, low opacity) — do not introduce photography or flat icon sets without deliberate discussion, it would break the current visual identity.
- All new interactive/animated elements should degrade cleanly under `prefers-reduced-motion`.
- Keep `--maxw: 1160px` and the two existing breakpoints (900px, 520px) rather than adding new ones, unless a component genuinely can't be made to work within them.
