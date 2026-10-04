import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { skillCategories } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div id="skills-heading">
          <SectionHeading
            kicker="skills // 02"
            title="Cybersecurity Skills"
            lead="Categorized by offensive security, defensive security, technical foundations, and tooling. Edit src/data/skills.ts to reflect only what you genuinely know — proficiency labels keep it honest."
          />
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delayMs={index * 80} className="card skill-card">
              <h3>{category.title}</h3>
              <p className="muted small">{category.description}</p>
              <ul className="skill-list" aria-label={`${category.title} skills`}>
                {category.skills.map(skill => (
                  <li className="skill-pill" key={skill.name}>
                    {skill.name}
                    <span className="skill-level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
