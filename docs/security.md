# Security Notes

Because this is a **cybersecurity portfolio**, it demonstrates the practices it teaches.

## Application posture

- **Fully static:** no backend, no database, no server-side command execution. The interactive
  terminal (`src/sections/LabTerminal.tsx`) matches input against a static allowlist in the
  browser; it never runs shell commands and never contacts a server.
- **No secrets:** no API keys, tokens, or credentials in source, workflows, or images. CI needs
  zero cloud credentials.
- **Minimal dependencies:** React + Vite + TypeScript only. No analytics, trackers, or
  third-party scripts. Fonts use `preconnect` only; the UI works offline with system fonts.
- **Dependency scanning:** `npm audit --audit-level=high` runs in CI (`npm run audit`). Moderate
  gate available via `npm run audit:moderate`. Keep the lockfile committed and review
  Dependabot / `npm audit fix` promptly. CI intentionally fails only on **high/critical** so one
  low-severity advisory does not block all deploys; document exceptions.
- **CI least privilege:** workflows use `permissions: contents: read` (Pages example elevates
  only that job). Third-party Actions are pinned to major versions (`@v4`).

## Recommended production headers

Served by `nginx.conf` (Docker/production) and documented in `nginx.conf.example` /
`_headers.example` for other hosts:

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:;
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload  (HTTPS only)
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Notes:

- CSP has **no `unsafe-inline` for scripts** and no third-party script sources.
- `style-src 'unsafe-inline'` covers React's small inline style attributes; move to nonces/hashes
  if your host supports it.
- Enable HSTS only once HTTPS is terminated in front of the server (it is commented out in the
  plain-HTTP Docker default).
- Contact form is `mailto:` + external links — no form-post endpoint to protect.

## Content honesty

- Placeholders (`[YOUR NAME]`, `[ORGANIZATION NAME]`, etc.) are explicit; no invented employers,
  certifications, CVEs, clients, or credentials.
- Tool lists and proficiency labels (`src/data/skills.ts`) must reflect genuine experience.
- Lab techniques are framed as **authorized, isolated** practice only.

## Local verification

```bash
npm run lint
npm run typecheck
npm run build
npm run audit
docker compose up --build  # http://localhost:8080
```
