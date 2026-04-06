const skills = [
  { name: "JavaScript", level: 3 },
  { name: "React", level: 1 },
  { name: "React Native", level: 5 }
] as const;

export default function SkillsPage() {
  return (
    <main className="page title-page">
      <h1 className="page-title">Skills</h1>
      <section className="page-body skills-body" aria-label="Skills content">
        <div className="skills-scale" aria-hidden="true">
          <span>Level 1: Tried it</span>
          <span>Level 5: Expert</span>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-copy">
                <h2 className="skill-name">{skill.name}</h2>
                <p className="skill-level">Level {skill.level}</p>
              </div>

              <div
                className="skill-meter"
                role="img"
                aria-label={`${skill.name}: Level ${skill.level} out of 5`}
              >
                <div
                  className="skill-meter-fill"
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
