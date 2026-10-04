import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { experience } from '../data/experience';
import { education } from '../data/education';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div id="experience-heading">
          <SectionHeading
            kicker="experience // 04"
            title="Experience"
            lead="Timeline of roles. All entries are clearly marked placeholders until you replace them with real, verifiable history."
          />
        </div>
        <ol className="timeline">
          {experience.map(item => (
            <Reveal as="li" key={`${item.organization}-${item.position}`} className="timeline-item">
              <article className="card">
                <h3 style={{ margin: '0 0 0.25rem' }}>
                  {item.position}
                  {item.placeholder ? <span className="placeholder-badge">Placeholder</span> : null}
                </h3>
                <p className="muted small" style={{ margin: '0 0 0.6rem' }}>
                  {item.organization} · {item.location} · {item.startDate} — {item.endDate}
                </p>
                <ul className="muted small" style={{ margin: '0 0 0.7rem', paddingLeft: '1.1rem' }}>
                  {item.responsibilities.map(r => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <ul className="tech-list" aria-label="Technologies used">
                  {item.technologies.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>

        <div style={{ marginTop: '2.5rem' }} id="education">
          <SectionHeading
            kicker="education"
            title="Education"
            lead="Degrees, institutions, and relevant coursework. Replace with your actual history."
          />
          <div className="grid-2">
            {education.map(ed => (
              <Reveal key={ed.institution} className="card">
                <h3 style={{ margin: '0 0 0.25rem' }}>
                  {ed.degree}
                  {ed.placeholder ? <span className="placeholder-badge">Placeholder</span> : null}
                </h3>
                <p className="muted small">
                  {ed.institution} · {ed.location} · {ed.year}
                </p>
                <p className="mono small">Relevant coursework</p>
                <ul className="tech-list">
                  {ed.coursework.map(c => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
