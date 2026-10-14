# Lunava — lunava.tech

Website for **Lunava**, an **AI training expert consulting agency**. Lunava helps engineers, researchers and
domain specialists find, qualify for and succeed in paid AI training and evaluation work on expert platforms
such as Mercor and micro1.

> **This is a static website, written in React and published on GitHub Pages.**
> There is no server, no database and no backend. `npm run build` pre-renders every React page into plain
> HTML, CSS and JavaScript (`out/`), and GitHub Actions publishes that folder to GitHub Pages on every push to `main`.

```
React + TypeScript (src/)  →  next build (static export)  →  out/ (HTML · CSS · JS)  →  GitHub Pages (lunava.tech)
```

## Stack

- **Next.js 16** (App Router, `output: "export"`) · **React 19** · **TypeScript**
- **Tailwind CSS 4** — design tokens live in `src/app/globals.css` (`@theme`)
- **lucide-react** icons; **Geist / Geist Mono** via `next/font` (self-hosted at build time)
- No other runtime dependencies, no third-party scripts, no images hotlinked from other sites

```bash
npm install
npm run dev        # local development at http://localhost:3000
npm run typecheck  # TypeScript check
npm run build      # static website → out/
npm run preview    # serve out/ locally at http://localhost:4173
```

## Design

A dark-first "midnight aurora" look in the style of modern 2026 product sites: floating glass navigation,
large tight display type with gradient emphasis, a bento grid with cursor-following spotlight cards, a marquee
ticker, hairline borders, film grain and scroll-in reveals. Everything is CSS and SVG — no image assets.
Motion respects `prefers-reduced-motion`, and content stays readable without JavaScript.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, ticker, platforms, kinds of work (bento), how it works, "static site" explainer, FAQ |
| `/opportunities` | Platforms (Mercor, micro1, more), work types, expertise areas |
| `/services` | Consulting services, process, principles, FAQ |
| `/about` | Mission, principles, how the site is built |
| `/contact` | Email addresses and a form that composes an email in the visitor's mail app (`mailto:`) |
| `/privacy` · `/terms` · `/cookies` | Legal |

There are no accounts or sign-in, and nothing a visitor types is stored by the site.

## Structure

```
src/
  app/                  one folder per page, plus metadata (sitemap, robots, manifest, OG image)
  components/
    brand/              Logo, GitHub glyph
    layout/             SiteHeader (floating pill), SiteFooter, AmbientBackground, PageHero, LegalPage
    ui/                 Button, primitives, SpotlightCard, Marquee, Faq
    sections/           One component per page section
    forms/              ContactForm and field components
    motion/             Reveal (scroll-in animation)
  lib/
    data/content.ts     All site copy: platforms, work types, services, FAQ, contact topics
    site.ts             Name, URLs, emails, navigation
```

To change copy, edit `src/lib/data/content.ts` and `src/lib/site.ts`.

## Publishing on GitHub Pages at lunava.tech

The repo is set up for **GitHub Pages** (free hosting and free HTTPS):

- `.github/workflows/deploy.yml` type-checks, builds the site and publishes `out/` on every push to `main`.
- `public/CNAME` (`lunava.tech`) tells GitHub Pages to serve the site on the custom domain.
- `public/.nojekyll` stops GitHub's Jekyll step from hiding the `_next/` asset folder.

**1. Turn on Pages** — repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The first deployment runs automatically (see the **Actions** tab).

**2. Point lunava.tech at GitHub** — at your domain registrar's DNS settings add:

| Type | Name / Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `robinhood326.github.io` |

Remove any other A/AAAA/CNAME records for `@` and `www` (e.g. a registrar "parking" page).

**3. Finish in GitHub** — **Settings → Pages → Custom domain**: enter `lunava.tech`, wait for the DNS check to pass,
then tick **Enforce HTTPS**. Recommended: verify the domain under your account **Settings → Pages → Add a domain**.

After that, every `git push` to `main` updates https://lunava.tech automatically.

Because the output is plain files, **any other static host** works too — upload the contents of `out/` to Netlify,
Cloudflare Pages, S3 or any web server. Open the site through a web server (or `npm run preview`), not by
double-clicking `index.html`: pages load assets from absolute paths like `/_next/…`.

## Content rules

- Lunava is **independent**. It is not affiliated with, endorsed by or sponsored by Mercor, micro1 or any other
  platform named on the site, and the footer, Opportunities page and Terms say so. Platform descriptions are kept general.
- The copy never promises acceptance, work, pay or interviews, and makes no claims about user or customer numbers.
- The hero "response comparison" card is an illustration, and is labelled as one.
