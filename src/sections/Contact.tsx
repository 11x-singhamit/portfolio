import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { profile } from '../data/profile';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div id="contact-heading">
          <SectionHeading
            kicker="contact // 08"
            title="Contact"
            lead="No backend contact form — this site stays fully static. Reach out via email or professional profiles below."
          />
        </div>
        <div className="contact-grid">
          <Reveal className="card">
            {profile.socials.map(social => (
              <div className="contact-row" key={social.label}>
                <span className="mono small muted">{social.label}</span>
                <a
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                >
                  {social.display}
                </a>
              </div>
            ))}
            <div className="contact-row">
              <span className="mono small muted">Security profiles (optional)</span>
              <span className="small">
                <a href={profile.tryhackme} target="_blank" rel="noreferrer">
                  TryHackMe
                </a>{' '}
                ·{' '}
                <a href={profile.hackthebox} target="_blank" rel="noreferrer">
                  HackTheBox
                </a>
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={120} className="card">
            <h3 style={{ marginTop: 0 }}>Collaboration</h3>
            <p className="muted small">
              Open to security internships, junior security roles, authorized lab collaboration, and
              freelance assessments with a defined scope and written authorization.
            </p>
            <div className="hero-cta" style={{ marginBottom: 0 }}>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <p className="muted small mono" style={{ marginTop: '1rem' }}>
              PGP / response time: [Add your PGP fingerprint or response-time note here.]
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
