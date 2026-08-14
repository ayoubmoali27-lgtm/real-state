# PrimeEstate — React + Tailwind

A luxury real estate site built from the original PrimeEstate design system spec.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # serves the production build on http://localhost:4173
```

## Hosting the static build

The `dist/` folder is a self-contained static site. Drop it on any static host:

- **Vercel / Netlify** — drag the `dist/` folder, done
- **S3 + CloudFront** — `aws s3 sync dist/ s3://your-bucket/`
- **nginx** — point `root` at the unzipped `dist/`
- **GitHub Pages** — push `dist/` to `gh-pages` branch

The site is a React SPA, so your host needs to serve `index.html` for all
non-asset routes (most static hosts do this automatically; for nginx use
`try_files $uri /index.html;`).

## Routes

- `/` — Home (hero, categories, stats, testimonial, FAQ, CTA)
- `/listings` — Featured Autumn Collection + agent cards + contact form
- `/search` — Property search with filter bar and 6 listings
- `/calculator` — Interactive mortgage calculator with donut chart
- `/agents/elena-marchetti` — Agent profile (uses the headshot)

## Design system

All design tokens (charcoal, gold, surfaces, Playfair Display, Montserrat,
8px grid, sharp corners) are wired up in `tailwind.config.js` and
`src/index.css`. Edit the config to retheme globally.

## Project layout

```
src/
  App.jsx              # router
  main.jsx             # entry
  index.css            # tailwind + base styles
  components/
    Navbar.jsx
    Footer.jsx
    ScrollToTop.jsx
  pages/
    Home.jsx
    Listings.jsx
    Search.jsx
    Calculator.jsx
    Agent.jsx
  data/
    site.js            # agents, listings, categories, nav
public/
  assets/
    logo.png
    agent.jpg
```
