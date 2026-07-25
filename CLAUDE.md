# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

> See also: `design.md` — the visual design system (colors, type, components, motion) this site implements. Keep new UI work consistent with it.

---

## Commands

```bash
cd client && npm install          # install dependencies (first time / after pulling changes)
cd client && npm run dev          # Vite dev server — http://localhost:5173
cd client && npm run build        # TypeScript check (tsc -b) + Vite production build -> client/dist/
cd client && npm run lint         # ESLint
cd client && npm run preview      # serve the built client/dist/ locally, for a final check before deploy
```

There is no test suite — the project has no unit or integration tests configured.

---

## Architecture

### One static frontend, no backend (yet)
Usiru is currently a single Vite + React + TypeScript app in `client/` with no CMS, API, or database. All copy (care plans, testimonials, FAQ, contact links) is hardcoded in the component files under `client/src/components/`. `npm run build` produces a fully static `client/dist/` — deploy it to any static host or serve it behind nginx; nothing needs to run server-side.

This mirrors the frontend half of the sibling **OrchidTree** project (`../OrchidTree/client`) — same toolchain (Vite, React 19, TypeScript, Tailwind CSS v4, React Router, react-helmet-async, ESLint + typescript-eslint) — but Usiru has no Strapi/MySQL backend, no booking/payment flow, and no build-time prerendering step. Don't assume OrchidTree's server-side patterns (Strapi Document API, Stayflexi/Razorpay controllers, JWT auth in `localStorage`) apply here; they don't exist in this repo.

### `Usiru.html` — legacy single-file version
The original hand-built static page (inline `<style>` + vanilla JS) still lives at the repo root as `Usiru.html`. It is the source `design.md` was reverse-engineered from and the reference the `client/` app was ported from line-for-line. Treat it as a historical/visual reference, not something to keep editing — new work goes in `client/`.

### Routing (`client/src/`)
`App.tsx` is a `<Routes>` table, rendered inside a `<BrowserRouter>` set up in `main.tsx`:

| Path | Page | Contains |
|---|---|---|
| `/` | `pages/Home.tsx` | `Nav` → `Hero` → `Intro` → `CareChoices` → `Living` → `Story` → `Testimonials` → `BandCta` → `Faq` (inline accordion, id `#faq`) → `Enquiry` → `Footer` |
| `/faq` | `pages/FaqPage.tsx` | `Nav` → FAQ header → `FaqAccordion` → `Footer` |
| `/blog` | `pages/BlogPage.tsx` | `Nav` → blog header → `BlogList` → FAQ section → `Footer` |
| `/contact` | `pages/ContactPage.tsx` | `Nav` → header → contact form → `Footer` |

The home page keeps its own inline FAQ section (`components/Faq.tsx`, `id="faq"`) as well as the dedicated `/faq` page — both render the same `FaqAccordion` + `data/faqs.ts`, just in different contexts. **Nav's "Good to Know" scrolls to the in-page section** (`/#faq`, matching the original single-page site), while **Footer's "Good to Know" links to the dedicated `/faq` page** (`<Link to="/faq">`). This split is intentional, not an oversight — don't "fix" it by unifying both to the same target without checking with whoever's driving the content decisions first.

**Cross-page anchors**: `Nav` and `Footer` render on every page, but section ids like `#care`/`#living`/`#story`/`#faq`/`#visit` only exist on `/`. Their links are written as root-relative (`/#care`, not `#care`) so they resolve correctly no matter which page you're currently on — clicking `/#care` while already on `/` just scrolls (same-document, no reload); clicking it from `/faq` or `/blog` does a full navigation back to `/` then scrolls. Don't revert these to bare `#anchor` hrefs. Same-page-only links (e.g. within a page's own content) can stay as bare `#id`.

**Deployment note**: because `/faq` and `/blog` are client-side routes, a static host or nginx config must fall back unknown paths to `index.html` (SPA fallback / `try_files $uri /index.html;`), or a direct visit / refresh on either page will 404. `vite preview` and most static hosts (Netlify, Vercel, Cloudflare Pages) do this automatically; a bare `nginx` `root` block does not — add the fallback explicitly if self-hosting.

**`App.tsx`** also renders `<FloatingWhatsApp />` as a sibling of `<Routes>`, not inside any one page — that's what makes the floating WhatsApp button (`.wa-float`, fixed bottom-right, `#25D366`) appear on every route without being duplicated in each page file. Any other "on every page" chrome (a cookie banner, an announcement bar, etc.) should follow the same pattern rather than being added per-page.

- **`components/Reveal.tsx`** — polymorphic wrapper (`as` prop, defaults to `div`) that reproduces the original scroll-fade-in behavior via `hooks/useReveal.ts` (one `IntersectionObserver` per instance, `threshold: 0.12`, fires once). Wrap any new section content in `<Reveal>` instead of re-implementing scroll-reveal.
- **`components/FaqAccordion.tsx`** + **`data/faqs.ts`** — shared between the `/faq` page and anywhere else FAQs need to render. Each `FaqItem` has independent `open` state; the answer's `max-height` is measured via a ref + `useEffect` (not read during render — the react-hooks ESLint rule `react-hooks/refs` will fail the build if you read `ref.current` inline in JSX).
- **`components/BlogList.tsx`** + **`data/posts.ts`** — the `/blog` page. Posts render as full short articles on one page (title, date, paragraphs) rather than linking out to individual `/blog/:slug` pages, since there's no CMS or per-post routing yet — see the Audit section below before treating this content as final.
- **`pages/ContactPage.tsx`** — modeled on Belmont Village's information-request form, adapted to Usiru's single-location, four-care-type structure (name, email, phone, a care-type `<select>`, optional message). **There is no backend to submit to**, so the form's `onSubmit` builds a `mailto:` link from the field values (subject + body) and navigates to it — same mechanism, and same placeholder email address, as the `Enquiry` section's "Email an enquiry" card. If a real backend/API is added later, replace this with an actual POST and keep the mailto behavior as a no-JS/no-backend fallback only if wanted.
- **`components/Nav.tsx`** — mobile menu open/close is React state, not DOM class toggling. Nav now includes a "Contact us" item (`<Link to="/contact">`) between "Good to Know" and the "Book a Visit" button.
- **`components/FloatingWhatsApp.tsx`** — the fixed bottom-right WhatsApp button, rendered once in `App.tsx` (see above). Reuses the same chat-bubble SVG glyph as the `Enquiry` section's "WhatsApp us" card and the same `WHATSAPP_URL` from `data/contact.ts` — still a placeholder number, see the Audit section below.
- **`data/contact.ts`** — the WhatsApp/phone/email links used by both `Enquiry` and `Footer` are centralized here and are currently **placeholders** (`+910000000000`, `hello@usiru.example`) — see the Audit section below.
- Content arrays (`CARE_OPTIONS`, `AMENITIES`, `QUOTES`, `FAQS`, `POSTS`) live at the top of their respective component/data files — edit copy there, not by hunting through JSX.

### Styling
`client/src/index.css` starts with `@import "tailwindcss";` (Tailwind v4 via `@tailwindcss/vite`, configured in `vite.config.ts`) followed by the site's original hand-authored CSS (custom properties, component classes) ported verbatim from `Usiru.html`. **Tailwind is available but not yet used for this site's own components** — the existing classes (`.hero`, `.care-card`, `.faq`, etc.) are deliberately kept as-is rather than rewritten into Tailwind utilities, to avoid visual regressions in already-tuned, fluid (`clamp()`-based) CSS. If you add genuinely new UI, prefer Tailwind utilities for it; don't convert existing sections without a specific reason.

Design tokens (`--evergreen`, `--brass`, `--ivory`, etc.) are plain CSS custom properties in `:root` — see `design.md` for the full palette/type/motion reference before adding new colors or fonts.

### SEO
`react-helmet-async` is wired up (`HelmetProvider` in `main.tsx`, `<Helmet>` in `App.tsx`) but only sets the static title/description that's already in `index.html`. Because there's no backend/CMS, per-page dynamic SEO metadata (like OrchidTree's `getSeoPopulateQuery()` pattern) doesn't apply — there's only one page. If Usiru grows additional routes later, extend `<Helmet>` per-route rather than reaching for OrchidTree's populate-query machinery.

**Known tradeoff**: this is a client-rendered SPA with no prerendering step. `Usiru.html` (plain static HTML) was fully crawlable as-is; the React version's initial HTML is an empty `#root` div until JS executes. If search ranking regresses, options are (a) add a prerender step (OrchidTree uses `@prerenderer/rollup-plugin` + Puppeteer, triggered off Strapi content — would need adapting since Usiru has no CMS to fetch from), or (b) since all content here is static at build time, generate static HTML directly (e.g. a small SSG step) instead of porting OrchidTree's CMS-driven prerenderer as-is.

---

## Known placeholder content (link audit)

A full link/button audit was done across every component. Routing/consistency bugs found in that audit were fixed directly (cross-page anchors, the Footer FAQ link, the Footer WhatsApp/Call links now matching what `Enquiry` actually uses, a dead `Careers` link and a non-clickable "Privacy · Terms" text were removed rather than left misleading, and the FAQ answer about "the enquiry form" was corrected to match the real WhatsApp/Call/Email cards). What's left and needs real business input, not a code fix:

- **`data/contact.ts`** — `WHATSAPP_URL` is the real number (`+91 98453 55144`, pre-filled message "Hello Usiru") and `EMAIL_MAILTO` is real (`pradip@gardenworld.in`, Pradip K). `PHONE_TEL` is still the placeholder `+910000000000` — replace before launch (worth confirming whether the call number should be the same `+919845355144`).
- **`CareChoices` cards and Footer's "Care" column** — all four care types ("Independent Living", "Assisted Living", etc.) link to the same `/#visit` / `/#care` destination rather than plan-specific detail. Fine for a single-page site today; revisit if each care type gets its own page.
- **`Story.tsx`** — the "Meet the team" button links to `/#visit` (the enquiry section), not an actual team page, since none exists yet.
- **`data/posts.ts`** — the three blog posts are placeholder editorial content written for scaffolding, attributed generically to "the Usiru team" rather than a real author. Replace with real posts (or wire up a real content source) before treating `/blog` as launch-ready.
- **`pages/ContactPage.tsx`** — the form doesn't submit anywhere real; it opens a `mailto:` to the same placeholder address in `data/contact.ts`. There's no server-side validation, spam protection, or record of submissions (contrast with Belmont Village's reCAPTCHA-protected form this was modeled on). Fine for a no-backend site today; revisit once there's an API to POST to.

---

## Conventions

- Node.js 20.x+ (repo developed against Node 24 / npm 11).
- No environment variables are required to build or run this site today — there is no API to point at and no secrets. If a backend is added later, follow OrchidTree's pattern of keeping all secrets in `server/.env` (never in `client/`) and exposing only `VITE_`-prefixed vars to the frontend.
- Keep `client/package.json` script names (`dev`, `build`, `lint`, `preview`) aligned with OrchidTree's `client/` for muscle-memory consistency across the two repos.
- Follow `design.md`'s "Conventions for extending this site" section (light/dark section rhythm, `.eyebrow` + `.sec-head` pattern, hand-drawn SVG line art only, `prefers-reduced-motion` support, existing breakpoints) for any new markup.
