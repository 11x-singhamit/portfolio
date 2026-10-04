import { useMemo, useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { researchPosts, type ResearchCategory } from '../data/research';

const filters: ('All' | ResearchCategory)[] = [
  'All',
  'Vulnerability Research',
  'CTF Writeups',
  'Penetration Testing Notes',
  'Security Labs',
  'Detection Engineering',
  'Security Tutorials',
];

export function Research() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const visible = useMemo(
    () => (filter === 'All' ? researchPosts : researchPosts.filter(p => p.category === filter)),
    [filter],
  );

  return (
    <section id="research" aria-labelledby="research-heading">
      <div className="container">
        <div id="research-heading">
          <SectionHeading
            kicker="research // 06"
            title="Security Research & Writeups"
            lead="Notes, lab reports, and tutorials stored as static data (src/data/research.ts). No backend or CMS required — add a Markdown/JSON entry and it renders here."
          />
        </div>
        <div className="filter-row" role="group" aria-label="Filter research by category">
          {filters.map(f => (
            <button
              key={f}
              type="button"
              className="filter-btn"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="research-grid">
          {visible.length === 0 ? (
            <p className="muted">No posts in this category yet. Check back soon.</p>
          ) : (
            visible.map((post, index) => (
              <Reveal
                key={post.slug}
                delayMs={(index % 2) * 80}
                className="card"
                id={`research-${post.slug}`}
              >
                <p className="project-category">
                  {post.category} · {post.date}
                </p>
                <h3>{post.title}</h3>
                <p className="muted small">{post.description}</p>
                <ul className="tech-list">
                  {post.technologies.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <span className="muted small mono">{post.readTime}</span>
                  <a href={`#research-${post.slug}`} aria-label={`Read more about ${post.title}`}>
                    Read More →
                  </a>
                </p>
              </Reveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
