import { profile } from '../data/profile';

const terminalLines = [
  { prompt: '$', command: 'whoami', output: 'cybersecurity-professional' },
  {
    prompt: '$',
    command: 'focus --list',
    output: 'ethical-hacking  penetration-testing  security-engineering',
  },
  {
    prompt: '$',
    command: 'status',
    output: 'SYSTEM SECURE — authorized testing only',
    success: true,
  },
];

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div>
          <p className="hero-status">
            <span className="pulse-dot" aria-hidden="true" />
            SECURITY STATUS: SYSTEM SECURE
          </p>
          <h1 id="hero-heading">
            {profile.name}
            <br />
            <span className="gradient-text">{profile.title}</span>
          </h1>
          <p className="hero-subtitle">{profile.subtitle}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#skills">
              View Skills
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
            <a className="btn btn-ghost" href={profile.resumeUrl}>
              Download Résumé
            </a>
          </div>
          <div className="hero-meta" aria-label="Focus areas">
            {profile.focusAreas.map(area => (
              <span className="tag" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>

        <div
          className="terminal"
          role="img"
          aria-label="Terminal-style status panel showing professional focus areas and a secure system status"
        >
          <div className="terminal-bar" aria-hidden="true">
            <span className="terminal-dot" style={{ background: '#f87171' }} />
            <span className="terminal-dot" style={{ background: '#fbbf24' }} />
            <span className="terminal-dot" style={{ background: '#34d399' }} />
            <span className="terminal-title">security-status — zsh</span>
          </div>
          <div className="terminal-body" aria-hidden="true">
            {terminalLines.map(line => (
              <div key={line.command}>
                <p className="terminal-line">
                  <span className="prompt">{line.prompt}</span> {line.command}
                </p>
                <p
                  className={`terminal-line ${'success' in line && line.success ? 'terminal-success' : 'terminal-output'}`}
                >
                  {line.output}
                </p>
              </div>
            ))}
            <p className="terminal-line">
              <span className="prompt">$</span>
              <span className="terminal-caret" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
