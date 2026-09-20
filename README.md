<<<<<<< HEAD
# comune_dhamo
=======
# Cast Iron Powder Manufacturer Website

High-fidelity recreation of the layout, design system, navigation, responsive behaviour and functionality of the reference site
(castironpowder.com), built with **React 19 + TypeScript + Vite 6 + Tailwind CSS 3 + React Router 7** and a small **Node/Express** API for
form submissions.

All proprietary content of the reference (brand name, people, contact details, photos, certificates, long-form copy) has been replaced
with original placeholder content of matching length and structure. See [docs/AUDIT.md](docs/AUDIT.md) for the full reference audit and
[docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) for the extracted tokens.

## Project structure

```
├── index.html                 # Fonts (Poppins, Lato, Josefin Sans), root mount
├── public/images/             # Generated SVG placeholder assets (same dimensions/roles as the reference images)
├── src/
│   ├── components/
│   │   ├── layout/            # Header (TopBar, Navbar, NavDropdown), Footer
│   │   ├── ui/                # Button, Container, Icon, FormField, PhoneField, Lightbox, Pagination, FaqAccordion, Loader, Breadcrumbs
│   │   ├── cards/             # GalleryCard, BlogCard, TeamCard, InfraCard, FeatureCard
│   │   ├── PageBanner.tsx     # 200px inner-page banner with breadcrumbs
│   │   ├── ContentBlocks.tsx  # Renders structured long-form copy
│   │   └── WhatsAppWidget.tsx # Floating chat widget (first-party recreation of the WATI widget)
│   ├── sections/              # Home sections, FaqSection, form sections (ContactForm, EnquiryForm, useEnquiryForm)
│   ├── layouts/MainLayout.tsx # Header + Outlet + Footer + widget + loader + site-wide JSON-LD
│   ├── pages/                 # One component per route
│   ├── hooks/                 # useSeo, useMediaQuery, useScrollToTop, useLockBodyScroll, useRevealOnScroll
│   ├── services/              # api (fetch client), forms, recaptcha, content (data access layer)
│   ├── data/                  # Products, product pages, blog posts, FAQs, team, certificates, country codes
│   ├── config/site.ts         # Brand, contacts, addresses, navigation — change these first
│   ├── types/                 # Shared TypeScript types
│   ├── utils/                 # cn(), JSON-LD builders
│   ├── styles/globals.css     # Tailwind layers + Bootstrap-equivalent grid + effect CSS
│   ├── router.tsx             # Routes (+ `.html` legacy redirect)
│   └── main.tsx
├── server/                    # Express API (TypeScript)
│   └── src/
│       ├── index.ts           # App bootstrap, CORS, optional static serving
│       ├── routes/forms.ts    # POST /api/contact, /api/sample, /api/enquiry
│       └── services/          # validate, recaptcha, storage (JSON file), mailer (SMTP), rateLimit
├── tailwind.config.ts         # Design tokens (colours, fonts, breakpoints, shadows, radii, animations)
├── vite.config.ts             # `@` alias, dev proxy for /api
└── .env.example
```

## Routes

| Route | Page |
|---|---|
| `/` | Home (hero, intro, welcome, why choose, commitment, FAQ) |
| `/about` | About (welcome, infrastructure, team, parent companies, company photo, FAQ) |
| `/products` | Product gallery + grades table |
| `/iron-powder-manufacturer`, `/reduction-grade-iron-powder-manufacturer`, `/iron-metal-powder-manufacturer`, `/black-iron-powder` | Product detail pages with enquiry form + FAQ |
| `/quality` | Quality article |
| `/achievement` | Certificate gallery |
| `/blog`, `/blog?page=N` | Blog list, 12 per page with pagination |
| `/blog/:slug` | Blog article + FAQ |
| `/contact` | Contact form + map |
| `/get-free-sample` | Sample request form |
| `/thank-you` | Post-submit confirmation |
| `/*.html` | Redirects to the clean URL (legacy links) |
| `*` | 404 |

## Setup

Requirements: Node.js ≥ 20.

```bash
npm install            # installs the frontend and (via postinstall) the server
cp .env.example .env   # optional: frontend env vars
cp server/.env.example server/.env   # optional: API env vars
```

### Development

```bash
npm run dev:all        # Vite on http://localhost:5173 + API on http://localhost:4000 (Vite proxies /api)
# or separately
npm run dev
npm run dev:server
```

### Environment variables

Frontend (`.env`, all optional):

| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Public origin used for canonical URLs / JSON-LD |
| `VITE_API_BASE_URL` | API origin; empty = same origin (dev proxy / reverse proxy) |
| `VITE_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key; when set a token is attached to every submission |
| `VITE_GA_MEASUREMENT_ID` | GA4 id; when set gtag.js is injected |
| `VITE_WHATSAPP_NUMBER` | Number used by the chat widget |

Backend (`server/.env`):

| Variable | Purpose |
|---|---|
| `PORT` | API port (default 4000) |
| `CORS_ORIGIN` | Comma-separated allowed origins |
| `RECAPTCHA_SECRET` | When set, tokens are verified with Google (score ≥ 0.5) |
| `SMTP_HOST/PORT/USER/PASS`, `MAIL_FROM`, `MAIL_TO` | When `SMTP_HOST` is set, each submission is e-mailed |
| `DATA_DIR` | Where `submissions.json` is written (default `server/data`) |
| `SERVE_STATIC=true` | Serve the built frontend (`dist/`) from the API process |

### API

| Method | Path | Body |
|---|---|---|
| `POST` | `/api/contact` | `{ name, email, countryCode, phone, product, message, page?, recaptchaToken? }` |
| `POST` | `/api/sample` | same |
| `POST` | `/api/enquiry` | same (`message` optional) |
| `GET` | `/api/health` | — |

Validation mirrors the browser forms (10-digit phone, valid e-mail, product required). Responses: `201 { ok, message, data: { id } }`,
`400 { ok:false, message }`, `429` when rate-limited (10 requests / minute / IP).

## Build & deployment

```bash
npm run build          # typecheck + Vite build → dist/
npm run build:server   # tsc → server/dist
npm run preview        # preview the static build
```

**Option A – static frontend + separate API**: deploy `dist/` to any static host (Netlify, Vercel, S3/CloudFront, nginx). Because the app
uses client-side routing, configure a SPA fallback to `index.html`. Set `VITE_API_BASE_URL` to the API origin at build time and
`CORS_ORIGIN` on the API. Run the API with `cd server && npm run build && npm start` (e.g. under PM2 or as a container).

**Option B – single Node process**: build both, set `SERVE_STATIC=true` in `server/.env`, then `cd server && npm start`. Express serves
`dist/` with an SPA fallback and the `/api` routes on one port.

Example nginx SPA fallback:

```nginx
location / { try_files $uri /index.html; }
location /api/ { proxy_pass http://127.0.0.1:4000; }
```

## Customising content

* Brand, phone numbers, e-mails, addresses, group companies, navigation: `src/config/site.ts`.
* Home features, products, certificates, team: `src/data/products.ts`.
* Product detail pages: `src/data/productPages.ts`.
* Blog posts: `src/data/blog.ts` (`blogPosts` array; the first article is fully written, the rest are generated from a template).
* FAQs: `src/data/faqs.ts`.
* Images: replace the SVGs in `public/images/` with your own (keep the same paths, or update the references in `src/data` / `src/config`).

## Quirks reproduced from the reference (toggleable)

* The "Products" nav link swallows its first click and navigates on the second (`SWALLOW_FIRST_CLICK` in `src/components/layout/NavDropdown.tsx`).
* Two of the four home feature cards have an extra line break under the heading to equalise heights (`extraBreak` in `src/data/products.ts`).
* Hero title stays 75px on mobile (no media query in the reference), so it wraps onto two lines.

## Testing performed

Headless Chromium run over every route at 1440 / 820 / 390 px: no console errors, no broken images, no horizontal overflow; verified
dropdown hover + navigation, FAQ single-open accordion, lightbox open/next/Esc, blog pagination (12 + 12 + 7), phone validation, contact
and enquiry submission → `/thank-you`, mobile menu open/close, WhatsApp widget, per-page title / canonical / JSON-LD.
>>>>>>> e160191 (add files)
