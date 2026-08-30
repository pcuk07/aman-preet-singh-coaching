# Aman Preet Singh: Leadership & Life Coach

A standalone, static one-page site. No build step, no framework: just
`index.html`, `styles.css`, `script.js` and a few images under `assets/`.

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
```

## Deploying

Pushes to `main` auto-deploy to GitHub Pages via
`.github/workflows/deploy.yml`. One-time setup: in this repo's
Settings, go to Pages, and under "Build and deployment" set Source to
"GitHub Actions".

Any other static host works too (Vercel, Netlify, S3 + CloudFront):
point it at the repo root, no build command, no output directory.

## Before going live

Email (`amanpreetsingh48@gmail.com`) and phone (`+91 84300 88891`) are real.
One placeholder is left:

- **LinkedIn**: the LinkedIn link in the "Work with Aman" section currently
  points to `linkedin.com` with no profile slug.

## Design notes

Editorial "dossier" layout: white background, ink text, a single rust
accent, no gradients, no rounded-card grid, no stock photography.
Headings are set in Fraunces, body copy in IBM Plex Sans, labels/numerals in
IBM Plex Mono (all Google Fonts, loaded in `index.html`). All copy is drawn
directly from the supplied bio; nothing about Aman's businesses, coaching
practice or credentials was invented.
