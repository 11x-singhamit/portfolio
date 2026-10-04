# Cybersecurity Portfolio

Production-ready **static portfolio** for a cybersecurity professional focused on **ethical
hacking, penetration testing, vulnerability assessment, network security, and security
engineering**.

Static React + TypeScript + Vite build. **Vendor-independent:** the same `dist/` deploys to
Cloudflare Pages, Vercel, Netlify, GitHub Pages, Nginx, Apache, Docker, or any static host.
No serverless functions, Workers, databases, or proprietary runtime APIs.

## Features

- Dark professional security theme (dark default + light mode, persisted, respects
  `prefers-color-scheme`)
- Hero with terminal-style status panel, About, Skills, Projects, Experience, Education,
  Certifications, Research/Writeups, interactive lab terminal, Contact
- Data-driven content: `src/data/*.ts` (profile, skills, projects, experience, certifications,
  education, research)
- Project + research filtering, scroll-reveal animations, responsive nav with mobile menu
- Accessibility: semantic HTML, skip link, focus states, keyboard support, reduced-motion media
  query, ARIA labels
- SEO: meta description, canonical placeholder, Open Graph, Twitter cards, `robots.txt`,
  `sitemap.xml`
- Security headers examples (`nginx.conf`, `nginx.conf.example`, `_headers.example`) + docs
- Docker multi-stage production image + Compose (prod + dev) with healthchecks
- GitHub Actions CI (lint → typecheck → build → audit) + vendor-neutral deploy workflow

## Local development

Requires Node 20+ / npm 10+.

```bash
npm install
npm run dev      # http://localhost:5173
```

## Production build

```bash
npm run build    # → dist/
npx vite preview # serve dist/ locally
```

`dist/` is sufficient to host on any standard static server.

## Docker

```bash
docker compose up --build   # http://localhost:8080
PORT=3000 docker compose up --build
```

Dev environment with hot reload:

```bash
docker compose -f docker-compose.dev.yml up --build  # http://localhost:5173
```

## Deployment

See [`docs/deployment.md`](docs/deployment.md). Summary:

| Provider         | Build                       | Output                  |
| ---------------- | --------------------------- | ----------------------- |
| Cloudflare Pages | `npm run build`             | `dist`                  |
| Vercel           | `npm run build`             | `dist`                  |
| Netlify          | `npm run build`             | `dist`                  |
| GitHub Pages     | `npm run build`             | `dist`                  |
| Nginx / Apache   | `npm run build`             | `dist`                  |
| Docker           | `docker compose up --build` | serves `dist` via Nginx |

Replace `https://yourdomain.com` placeholders in `index.html` and `public/sitemap.xml`.

## CI/CD

- `.github/workflows/ci.yml` — install → ESLint → typecheck → build → `npm audit`
  (high+) → upload `dist/` artifact. Runs on push + PR, `contents: read` only.
- `.github/workflows/deploy.yml` — builds the portable static artifact on `main`; optional
  GitHub Pages job included as comments. No cloud credentials required by default.

## Security

See [`docs/security.md`](docs/security.md): static-only posture, header recommendations,
audit strategy (`npm run audit`), least-privilege CI, and content-honesty policy (placeholders,
no fabricated credentials).

## Customization

1. Edit `src/data/profile.ts` (name, bio, email, GitHub, LinkedIn).
2. Edit `src/data/skills.ts`, `projects.ts`, `experience.ts`, `certifications.ts`,
   `education.ts`, `research.ts`.
3. Replace `public/resume.pdf` (add your file; `.gitignore` allows it) and update links.
4. Update `index.html` canonical/OG URLs + `public/sitemap.xml`.

## License

MIT — see [LICENSE](LICENSE).
