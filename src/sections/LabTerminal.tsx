import { useState, type FormEvent } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

const COMMANDS: Record<string, string[]> = {
  help: ['Available commands: whoami, focus, status, skills, contact, clear, help'],
  whoami: ['cybersecurity-professional'],
  focus: [
    'ethical-hacking',
    'penetration-testing',
    'vulnerability-assessment',
    'security-engineering',
  ],
  status: ['SYSTEM SECURE — authorized testing only'],
  skills: ['linux · networking · python · bash · docker · burp-suite · nmap · wireshark'],
  contact: ['email: your@email.com', 'github: github.com/USERNAME'],
};

export function LabTerminal() {
  const [history, setHistory] = useState<string[]>([
    '$ whoami',
    'cybersecurity-professional',
    '$ focus',
    'ethical-hacking  penetration-testing  security-engineering',
    '$ status',
    'SYSTEM SECURE',
  ]);
  const [input, setInput] = useState('');

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }
    const output = COMMANDS[cmd] ?? [`command not found: ${cmd} — try 'help'`];
    setHistory(prev => [...prev, `$ ${raw.trim()}`, ...output]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput('');
  };

  return (
    <section id="lab" aria-labelledby="lab-heading">
      <div className="container">
        <div id="lab-heading">
          <SectionHeading
            kicker="lab // 07"
            title="Security Lab — Interactive Terminal"
            lead="Purely frontend. No real shell commands execute; input is matched against a staticallowlist. Try: help, whoami, focus, status, skills, contact, clear."
          />
        </div>
        <div className="lab-grid">
          <Reveal className="terminal">
            <div className="terminal-bar" aria-hidden="true">
              <span className="terminal-dot" style={{ background: '#f87171' }} />
              <span className="terminal-dot" style={{ background: '#fbbf24' }} />
              <span className="terminal-dot" style={{ background: '#34d399' }} />
              <span className="terminal-title">interactive — read-only demo</span>
            </div>
            <div className="terminal-body">
              <div aria-live="polite" aria-label="Terminal output">
                {history.map((line, i) => (
                  <p
                    key={`${line}-${i}`}
                    className={`terminal-line ${line.startsWith('$') ? '' : line.includes('SECURE') ? 'terminal-success' : 'terminal-output'}`}
                  >
                    {line.startsWith('$') ? (
                      <>
                        <span className="prompt">{line.slice(0, 1)}</span>
                        {line.slice(1)}
                      </>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
              <form className="interactive-input-row" onSubmit={onSubmit}>
                <label htmlFor="lab-input" className="prompt" aria-hidden="true">
                  $
                </label>
                <input
                  id="lab-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="type 'help' and press Enter"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal input. Type help and press Enter."
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  Run
                </button>
              </form>
            </div>
          </Reveal>
          <Reveal delayMs={120} className="card">
            <h3 style={{ marginTop: 0 }}>How labs stay ethical</h3>
            <ul className="checklist">
              {[
                'Isolated virtual networks — targets never exposed to the internet.',
                'Explicit written authorization before any assessment outside your own lab.',
                'Snapshots and reset procedures so experiments are repeatable.',
                'Every exploitation step paired with a remediation note.',
                'No real credentials, no production data, no third-party systems.',
              ].map(item => (
                <li key={item}>
                  <span aria-hidden="true">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="cli-hint" style={{ marginTop: '1rem' }}>
              This widget never executes shell commands and never contacts a server. All logic runs
              locally in the browser.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
