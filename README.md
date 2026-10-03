# Xipto LLP – Company Website

Static website (HTML, CSS, JS – no build step) for Xipto LLP.

Pages: `index.html` (Home), `about.html`, `products.html`, `contact.html`.

## Deploy
1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: **Other**. Leave build command and output directory empty.
3. Deploy. `vercel.json` enables clean URLs (`/about`, `/products`, `/contact`).

## Notes
- Contact form opens the visitor's email app addressed to xiptofficial@gmail.com. For on-site submissions, swap in a form service (Formspree, Web3Forms) later.
- `assets/hero.jpg` and `assets/liphtup-banner.jpg` come from the design mockup; replace with real photos when available (keep the same file names).
- Fonts: Plus Jakarta Sans and Caveat via Google Fonts.
