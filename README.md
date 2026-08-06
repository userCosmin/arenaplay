# Arena Play — Official Website

Enterprise-grade, production-ready marketing site for **Arena Play**: Petreceri pentru copii,
Playground, Afterschool și Arena Mobilă. Built with React 19, TypeScript and Vite, and deployed
as a static site on Cloudflare Pages.

## Tech stack

- React 19 + TypeScript + Vite 6
- React Router 7 (client-side routing)
- Tailwind CSS 3 (design tokens in `tailwind.config.ts` — no hardcoded colors in components)
- Framer Motion (subtle, accessible animation)
- React Hook Form + Zod (validated forms, one schema per form in `src/utils/validation.ts`)
- Lucide Icons
- Swiper (testimonials & gallery carousels)
- React Helmet Async (per-page SEO metadata)
- TanStack React Query (provider wired up, ready for future data fetching)
- ESLint 9 (flat config) + Prettier (with `prettier-plugin-tailwindcss`)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
npm run lint        # ESLint
npm run typecheck  # tsc --noEmit
npm run format      # Prettier write
```

The project builds and runs with the three commands above, with no manual setup required —
`.npmrc` sets `legacy-peer-deps=true` because `react-helmet-async`'s published peer range does
not yet list React 19 (it is otherwise fully compatible).

## ⚠️ Before going live

All business data is centralized as **placeholders** in **`src/config/site.config.ts`** — phone
number, WhatsApp number, email, address, Google Maps embed URL, social links and opening hours.
Update that single file and the entire site (header, footer, floating buttons, forms, JSON-LD
structured data, sitemap references) picks up the real values.

Other editable "CMS-ready" content lives in `src/data/*.ts`:

| File | Controls |
|---|---|
| `navigation.ts` | Header & footer menus |
| `services.ts` | The four homepage service cards |
| `packages.ts` | Party packages & pricing |
| `activities.ts` | Playground activities |
| `pricing.ts` | Playground tariffs & offers |
| `curriculum.ts` | Afterschool daily schedule & pillars |
| `testimonials.ts` | Homepage testimonials carousel |
| `faq.ts` | FAQ accordion (also powers FAQPage JSON-LD) |
| `gallery.ts` | Photo gallery entries |
| `partners.ts` | Partners section on Despre noi |

Placeholder photography lives under `public/images/` (generated gradients, not real photos) —
replace with real, compressed WebP images before launch. Also replace `public/icons/*.png` and
`public/images/brand/logo.png` with the real Arena Play logo assets.

## Project structure

```
src/
  components/
    ui/          Reusable primitives (Button, Card, Modal, Accordion, form fields, ...)
    layout/       Header, Footer, mobile menu/action bar, floating WhatsApp button, Layout
    sections/     Page sections shared across routes (Hero, ServiceCards, FAQSection, ...)
    forms/        One RHF+Zod form per service (Petreceri, Playground, Afterschool, Arena Mobilă, Contact)
    seo/           <SEO> (Helmet) and <JsonLd> structured-data helpers
  pages/           One file per route, grouped by service folder
  data/            CMS-ready content (see table above)
  config/           site.config.ts — single source of truth for business/contact info
  context/          BookingModalContext (global "Rezervă" selector)
  hooks/            useScrolled, useLockBodyScroll, useIsHomePage
  services/         Mocked booking/contact API calls, ready to swap for a real backend
  utils/            cn, analytics, structuredData, validation (Zod schemas)
  types/            Shared TypeScript interfaces
public/
  robots.txt, sitemap.xml, manifest.json, llms.txt, llms-full.txt, humans.txt, ads.txt,
  .well-known/security.txt, _headers, _redirects (Cloudflare Pages)
```

## Routes

Homepage plus 17 routes, matching the approved site architecture exactly:

```
/
/petreceri-copii/                /petreceri-copii/pachete/
/playground/                     /playground/activitati/          /playground/tarife-program/
/afterschool/                    /afterschool/program/            /afterschool/inscrieri/
/arena-mobila/                   /arena-mobila/scoli/             /arena-mobila/evenimente/
/arena-mobila/petreceri-private/ /arena-mobila/solicita-oferta/
/despre-noi/                     /contact/                        /rezerva/
```

Every route is code-split (`React.lazy`) and renders its own `<SEO>` (title, meta description,
canonical, Open Graph, Twitter Card) plus relevant JSON-LD (`LocalBusiness`, `Organization`,
`BreadcrumbList`, `FAQPage`).

## Forms & future backend integration

Every form validates with Zod (`src/utils/validation.ts`) and currently submits through mocked
functions in `src/services/bookingService.ts` that simulate a network call and always resolve
successfully — this lets you test the full UX (loading state, success/error message, analytics
event) before a backend exists. Swap each function's body for the matching `apiPost(...)` call
(see `src/services/api.ts`) once a backend/CRM endpoint exists; set `VITE_API_BASE_URL` in `.env`.

## Analytics

`src/utils/analytics.ts` boots GA4, GTM, Meta (Facebook) Pixel and Microsoft Clarity only when
the corresponding environment variable is set, and exposes `trackEvent(...)` which fans out to
every connected provider. Conversion events already wired up:

`phone_click`, `whatsapp_click`, `email_click`, `map_click`, `reservation_form_submit`,
`playground_reservation_submit`, `afterschool_form_submit`, `arena_mobila_form_submit`
(segmented by `requestType`: școală / eveniment / privat), `contact_form_submit`,
`view_pricing`, `view_program`.

## Environment variables

Copy `.env.example` to `.env` and fill in the IDs you use. All are optional in development —
providers only initialize when their ID is present.

```
VITE_SITE_URL=https://www.arenaplay.ro
VITE_GA4_ID=
VITE_GTM_ID=
VITE_FB_PIXEL_ID=
VITE_CLARITY_ID=
VITE_API_BASE_URL=
```

## Deployment — Cloudflare Pages

This is a static SPA (no Node server, no Express). Two ways to deploy:

**Git integration (recommended):**
1. Push this repository to GitHub.
2. In Cloudflare Pages, create a project connected to the repo.
3. Build command: `npm run build` — Build output directory: `dist`.
4. Add the `VITE_*` environment variables from `.env.example` in the Pages project settings.
5. `public/_redirects` (SPA fallback to `index.html`) and `public/_headers` (caching + security
   headers) are picked up automatically from the build output.

**Wrangler CLI:**
```bash
npm run build
npx wrangler pages deploy dist --project-name=arena-play
```

`wrangler.toml` is included for CLI-based deployments and local `wrangler pages dev` testing.

## Accessibility & performance

- Semantic HTML, visible focus states, `aria-*` on interactive icon-only controls, skip-friendly
  landmark structure (`<header>`, `<main id="main-content">`, `<footer>`).
- Respects `prefers-reduced-motion`.
- Route-level code splitting, manual vendor chunking (`vite.config.ts`), lazy-loaded images.
- Tailwind design tokens (colors, spacing, radii, shadows) centralized in `tailwind.config.ts` —
  no hardcoded hex values or inline styles in components.

## License

MIT — see [LICENSE](./LICENSE).
