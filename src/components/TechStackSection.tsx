import { skillSets } from '@/constants'

interface SkillGridProps {
  skills: typeof skillSets.frontEnds
  color: 'blue' | 'green' | 'purple'
  tooltipPrefix: string
}

function SkillGrid({ skills, color, tooltipPrefix }: SkillGridProps) {
  const colorClasses = {
    blue: {
      hover: 'hover:bg-blue-50',
      text: 'group-hover:text-blue-600',
    },
    green: {
      hover: 'hover:bg-green-50',
      text: 'group-hover:text-green-600',
    },
    purple: {
      hover: 'hover:bg-purple-50',
      text: 'group-hover:text-purple-600',
    },
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`group relative flex flex-col items-center gap-1.5 p-2 rounded-xl ${colorClasses[color].hover} transition-all duration-300 cursor-pointer`}
          tabIndex={0}
          role="button"
          aria-describedby={`tooltip-${tooltipPrefix}-${index}`}
        >
          <div className={`text-2xl group-hover:scale-125 ${colorClasses[color].text} transition-all duration-300`} aria-hidden="true">
            {skill.Icon}
          </div>
          <span className={`text-xs text-gray-600 text-center ${colorClasses[color].text} transition-colors duration-300`}>
            {skill.name.split(' / ')[0].split(' ')[0]}
          </span>
          {/* Tooltip */}
          <div
            id={`tooltip-${tooltipPrefix}-${index}`}
            role="tooltip"
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none"
          >
            {skill.name}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" aria-hidden="true" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function TechStackSection() {
  return (
    <section className="card animate-fade-in animation-delay-400" aria-labelledby="techstack-heading">
      <h2 id="techstack-heading" className="section-title">Tech Stack</h2>
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></span>
            Frontend
          </h3>
          <SkillGrid
            skills={skillSets.frontEnds.slice(0, 6)}
            color="blue"
            tooltipPrefix="fe"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
            Backend
          </h3>
          <SkillGrid
            skills={skillSets.backEnds.slice(0, 6)}
            color="green"
            tooltipPrefix="be"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden="true"></span>
            DevOps & Tools
          </h3>
          <SkillGrid
            skills={skillSets.devOps}
            color="purple"
            tooltipPrefix="devops"
          />
        </div>
      </div>
    </section>
  )
}
