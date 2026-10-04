# Deployment Guide

This application is a **fully static, vendor-independent** frontend. The hosting provider only
serves the generated `dist/` directory. There are no serverless functions, Workers, proprietary
databases, or platform-specific runtime APIs.

```
                 GitHub Repository
                        |
                        v
                 GitHub Actions (CI)
                        |
              ---------------------
              |                   |
              v                   v
          Build (dist/)     Security checks
              |
       -------------------
       |        |        |
       v        v        v
  Cloudflare  Vercel   Netlify
    Pages              GitHub Pages / Nginx / Docker / any static host
```

Build once, deploy anywhere:

```bash
npm ci
npm run build
# → dist/
```

Verify locally before deploying:

```bash
npx vite preview --port 4173
# open http://localhost:4173
```

---

## Common settings (all providers)

| Setting           | Value            |
| ----------------- | ---------------- |
| Framework preset  | Vite / Static    |
| Build command     | `npm run build`  |
| Output directory  | `dist`           |
| Node version      | 20+ (CI uses 22) |
| Env vars required | None             |

Replace `https://yourdomain.com` placeholders in `index.html`, `public/sitemap.xml`, and
`public/robots.txt` with your real domain.

---

## Cloudflare Pages

- **Build command:** `npm run build`
- **Output:** `dist`
- Docs: Pages → Create → Connect Git → select repo → framework preset “Vite”.
- Optional headers: Cloudflare Pages supports a `_headers` file at the output root. See
  `_headers.example` in this repo; copy to `public/_headers` only if you deploy to Pages.

## Vercel

- Vercel auto-detects Vite. Confirm **Build Command** `npm run build` and **Output** `dist`.
- No `vercel.json` is required. Do not add serverless functions; this repo has none.

## Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Optional: copy `_headers.example` → `public/_headers` to apply the example security headers
  on Netlify. Keep it out of the build otherwise.

## GitHub Pages

Option A — Actions artifact (recommended):

1. `npm run build` produces `dist/`.
2. Upload `dist/` with `actions/upload-pages-artifact` and deploy with `actions/deploy-pages`
   (see commented example in `.github/workflows/deploy.yml`).
3. Set repo **Settings → Pages → Source: GitHub Actions**.

Option B — manual:

```bash
npm run build
npx gh-pages -d dist   # or push dist/ to a gh-pages branch
```

Note: `vite.config.ts` uses `base: './'` so the site also works from project-page subpaths.

## Docker (production)

```bash
docker compose up --build
# open http://localhost:8080 (override with PORT=3000 docker compose up --build)
```

The image multi-stage builds (`node:22-alpine` → `nginx:1.27-alpine`) and serves `dist/` on
port 80 with hardened headers from `nginx.conf`.

## Nginx (bare metal / VM)

```bash
npm run build
rsync -av dist/ /var/www/portfolio/
# copy nginx.conf.example → /etc/nginx/conf.d/portfolio.conf, edit server_name
nginx -t && systemctl reload nginx
```

## Apache

```apache
DocumentRoot /var/www/portfolio
<Directory /var/www/portfolio>
  Require all granted
  FallbackResource /index.html
</Directory>
```

Copy `dist/` to the `DocumentRoot`. Add the CSP/HSTS headers from `docs/security.md` via
`mod_headers` if desired.

## Any static host / CDN

Upload the contents of `dist/` as-is. No rewrites beyond “serve `index.html` for unknown
paths” (single-page anchor navigation degrades gracefully without it).
