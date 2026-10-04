import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-inner">
        <p>
          © {year} {profile.name} — Cybersecurity portfolio. Built as a static site with React +
          TypeScript + Vite.
        </p>
        <p className="mono small">
          Authorized testing only ·{' '}
          <a href="https://github.com/USERNAME/cybersecurity-portfolio">Source</a>
        </p>
      </div>
    </footer>
  );
}
