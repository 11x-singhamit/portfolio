import { useMemo, useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projectCategories, projects, type ProjectCategory } from '../data/projects';

export function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter(p => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div id="projects-heading">
          <SectionHeading
            kicker="projects // 03"
            title="Projects"
            lead="Data-driven showcase — every card renders from src/data/projects.ts. Each project documents the problem, technical approach, technologies, and security concepts."
          />
        </div>

        <div className="filter-row" role="group" aria-label="Filter projects by category">
          {projectCategories.map(category => (
            <button
              key={category}
              type="button"
              className="filter-btn"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delayMs={(index % 2) * 80} className="card project-card">
              <div className="project-top">
                <span className="project-category">{project.category}</span>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p className="muted small">{project.description}</p>
              <div>
                <p className="mono small" style={{ marginBottom: '0.3rem', color: 'var(--text)' }}>
                  Problem
                </p>
                <p className="muted small" style={{ marginTop: 0 }}>
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="mono small" style={{ marginBottom: '0.3rem', color: 'var(--text)' }}>
                  Technical approach
                </p>
                <ul className="muted small" style={{ margin: 0, paddingLeft: '1.1rem' }}>
                  {project.approach.slice(0, 3).map(step => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
              <ul className="tech-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ul className="tech-list" aria-label={`${project.title} security concepts`}>
                {project.securityConcepts.map(concept => (
                  <li key={concept} style={{ color: 'var(--accent)' }}>
                    {concept}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="muted small" style={{ marginTop: '1rem' }}>
          Showing {visible.length} of {projects.length} projects. To add a project, append an entry
          to <code className="mono">src/data/projects.ts</code> — no component changes needed.
        </p>
      </div>
    </section>
  );
}
