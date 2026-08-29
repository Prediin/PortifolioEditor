import { skills } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow"><span>07</span> ferramentas</p>
          <h2>Do desktop ao celular,<br />a ferramenta serve à ideia.</h2>
        </div>

        <div className="skills-board">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <div className="skill-name">
                <small>{skill.platform}</small>
                <strong>{skill.name}</strong>
              </div>
              <div className="skill-meter" aria-label={`${skill.level}% de domínio informado`}>
                <span style={{ '--skill-level': `${skill.level}%` }} />
              </div>
              <strong className="skill-level">{skill.level}%</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
