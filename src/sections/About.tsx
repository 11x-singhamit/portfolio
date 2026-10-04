import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { profile } from '../data/profile';

const philosophy = [
  'Authorized testing only — never assess systems without explicit written permission.',
  'Methodology over tools: recon, enumerate, validate, exploit safely, report clearly.',
  'Every finding must include impact, evidence, and actionable remediation.',
  'Defense matters as much as offense: hardening, monitoring, and least privilege.',
  'Continuous learning in isolated labs, CTFs, and documented research.',
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div id="about-heading">
          <SectionHeading
            kicker="about // 01"
            title="About Me"
            lead="Professional summary, interests, and security philosophy. Replace bracketed placeholders with your own background — nothing here is fabricated."
          />
        </div>
        <div className="about-grid">
          <Reveal className="card">
            <h3 style={{ marginTop: 0 }}>Professional summary</h3>
            <p className="muted">
              I focus on{' '}
              <strong>
                ethical hacking, penetration testing, vulnerability assessment, network security,
                and security engineering
              </strong>
              . My work centers on understanding how systems fail — then helping teams fix root
              causes through secure configuration, validated testing, and clear documentation.
            </p>
            <p className="muted">
              Current location: <strong>{profile.location}</strong>. Availability:{' '}
              <strong>{profile.availability}</strong>.
            </p>
            <ul className="checklist">
              {philosophy.map(item => (
                <li key={item}>
                  <span aria-hidden="true">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={120} className="card">
            <h3 style={{ marginTop: 0 }}>Career interests</h3>
            <div className="hero-meta" style={{ marginBottom: '1rem' }}>
              {[
                'Ethical Hacking',
                'Penetration Testing',
                'Vulnerability Assessment',
                'Network Security',
                'Web Application Security',
                'Linux',
                'Security Automation',
                'Security Monitoring',
                'Secure Infrastructure',
              ].map(topic => (
                <span className="tag" key={topic}>
                  {topic}
                </span>
              ))}
            </div>
            <h3>Education &amp; direction</h3>
            <p className="muted small">
              [Add 2–3 sentences about your education path, current studies, and what roles you are
              preparing for — e.g. SOC analyst, penetration tester, security engineer. Keep it
              factual.]
            </p>
            <h3>What I am looking for</h3>
            <p className="muted small">
              [Security internships, junior security roles, freelance assessments in authorized
              scopes, mentorship, and collaboration on defensive tooling.]
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
