import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { certificationNote, certifications } from '../data/certifications';

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading">
      <div className="container">
        <div id="certifications-heading">
          <SectionHeading
            kicker="certifications // 05"
            title="Certifications"
            lead="Only list certifications you have actually earned and can verify. Uncertified placeholders are shown honestly below."
          />
        </div>
        <div className="grid-2">
          {certifications.map(cert => (
            <Reveal key={cert.name + cert.issuer} className="card">
              <h3 style={{ margin: '0 0 0.25rem' }}>
                {cert.name}
                {cert.placeholder ? <span className="placeholder-badge">Placeholder</span> : null}
              </h3>
              <p className="muted small" style={{ margin: '0 0 0.6rem' }}>
                {cert.issuer} · {cert.year} · Status: {cert.status}
              </p>
              {cert.credentialUrl ? (
                <a
                  className="btn btn-ghost btn-sm"
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify Credential
                </a>
              ) : (
                <p className="muted small mono">[Credential URL — add when earned]</p>
              )}
            </Reveal>
          ))}
        </div>
        <p className="muted small" style={{ marginTop: '1rem' }}>
          {certificationNote}
        </p>
      </div>
    </section>
  );
}
