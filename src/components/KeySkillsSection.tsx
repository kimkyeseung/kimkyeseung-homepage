import { KEY_SKILLS } from '@/constants'

export function KeySkillsSection() {
  return (
    <section className="card animate-fade-in animation-delay-500" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">Key Skills</h2>
      <div className="flex flex-wrap gap-2" role="list">
        {KEY_SKILLS.map((skill, index) => (
          <span
            key={index}
            role="listitem"
            className="skill-tag hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 cursor-default"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            #{skill}
          </span>
        ))}
      </div>
    </section>
  )
}
