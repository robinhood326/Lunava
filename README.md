# Lunava — lunava.tech

Marketing site and first product surfaces for **Lunava**, a career platform that helps software engineers
discover opportunities, earn from their skills and build long-term careers.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS 4** — design tokens live in `src/app/globals.css` (`@theme`)
- **lucide-react** for icons; **Geist / Geist Mono** via `next/font`
- No other runtime dependencies

```bash
npm install
npm run dev        # local development at http://localhost:3000
npm run build      # static website → out/
npm run preview    # serve out/ locally at http://localhost:4173
```

## Static website

This is a **static site**: `npm run build` exports plain HTML, CSS and JS into `out/` — one
`index.html` per page (`out/about/index.html`, …), plus `404.html`, `sitemap.xml`, `robots.txt`, the
web manifest and the social-share image. No Node.js server is needed in production.

### Publishing free on GitHub Pages at lunava.tech

The repo is set up for **GitHub Pages** (free hosting + free HTTPS):

- `.github/workflows/deploy.yml` builds the site and publishes `out/` on every push to `main`.
- `public/CNAME` (`lunava.tech`) tells GitHub Pages to serve the site on your domain.
- `public/.nojekyll` stops GitHub's Jekyll step from hiding the `_next/` asset folder.

**1. Push to GitHub**

```bash
git commit -m "Initial Lunava website"
git remote add origin https://github.com/YOUR-USERNAME/lunava.git
git push -u origin main
```

**2. Turn on Pages** — repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The first deployment runs automatically (see the **Actions** tab).

**3. Point lunava.tech at GitHub** — at your domain registrar's DNS settings, add:

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
| CNAME | `www` | `YOUR-USERNAME.github.io` |

Remove any other A/AAAA/CNAME records for `@` and `www` (e.g. a registrar "parking" page).

**4. Finish in GitHub** — **Settings → Pages → Custom domain**: enter `lunava.tech`, wait for the DNS
check to pass (minutes to a few hours), then tick **Enforce HTTPS**. Recommended: verify the domain
under your GitHub account **Settings → Pages → Add a domain** to protect it from takeover.

After that, every `git push` to `main` updates https://lunava.tech automatically.

**Other static hosts** work too — upload the contents of `out/` (or `lunava-static-site.zip`) to
Netlify, Cloudflare Pages, Vercel, S3 or any web server.

Note: open the site through a web server (any of the above, or `npm run preview`), not by
double-clicking `index.html` — pages load their assets from absolute paths like `/_next/…`.

## Pages

An information-only company website: there are no accounts, sign-in or sign-up, and nothing a visitor types
is stored by the site. Each nav item is its own page (client-side navigation, so switching is instant).

| Route | Sections |
| --- | --- |
| `/` (Home) | Hero, Find Your Fit (`#opportunities`), Income, Results |
| `/engineers` | Career stages, Level up, "More than a job" |
| `/how-it-works` | Steps, companies process (`#companies`), FAQ |
| `/careers` | Working at Lunava |
| `/about` | Mission, Opportunity · Income · Career, values |
| `/contact` | Emails and a form that composes an email in the visitor's mail app (`mailto:`) |
| `/privacy` · `/terms` · `/cookies` | Legal |

Every page except Contact ends with a short call to action. Legacy URLs `/opportunities` and `/companies`
redirect (temporarily) to their sections.

## Structure

```
src/
  app/                  one folder per page, legal pages, metadata, sitemap, robots, OG image
  components/
    brand/              Logo, social icons
    layout/             SiteHeader, SiteFooter, PageShell, PageHero, DarkShell, LegalPage, AmbientBackground
    ui/                 Button, primitives, FeatureCard, Faq, Photo
    career/             CareerStageCard
    sections/           One component per page section
    forms/              ContactForm and field components
    motion/             Reveal (scroll-in animation, respects reduced motion)
  lib/
    photos.ts           Photography registry (Unsplash ids + alt text)
    data/               Site content: career stages, income paths, role areas, contact topics
    site.ts             Name, URLs, emails, navigation
```

## Photography

All photos are real photography from [Unsplash](https://unsplash.com), used under the Unsplash License (free
for commercial use). They are listed in `src/lib/photos.ts` and rendered by `src/components/ui/Photo.tsx` as plain
`<img>` tags with an Unsplash-CDN `srcset` (Unsplash resizes and serves modern formats itself). To self-host, download them into `public/photos/` and point
`src` at the local files. The photos show the kinds of outcomes Lunava works toward; they are not testimonials.

## Content rules

- The copy avoids promises of jobs, income or interviews, and makes no claims about user or customer numbers.
- Social links in `src/lib/site.ts` are placeholders until official accounts exist.
