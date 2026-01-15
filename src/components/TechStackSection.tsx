import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { skillSets } from '@/constants'
import { Skill } from '@/types'
import { Dialog } from './Dialog'

interface SkillGridProps {
  skills: Skill[]
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

interface SkillCategory {
  name: string
  skills: Skill[]
  color: 'blue' | 'green' | 'purple'
}

export function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null)

  const categories: SkillCategory[] = [
    { name: 'Frontend', skills: skillSets.frontEnds, color: 'blue' },
    { name: 'Backend', skills: skillSets.backEnds, color: 'green' },
    { name: 'DevOps & Tools', skills: skillSets.devOps, color: 'purple' },
  ]

  const colorConfig = {
    blue: {
      dot: 'bg-blue-500',
      button: 'bg-blue-100 text-blue-600 hover:bg-blue-600',
      iconBg: 'bg-blue-100',
      iconText: 'text-blue-600',
    },
    green: {
      dot: 'bg-green-500',
      button: 'bg-green-100 text-green-600 hover:bg-green-600',
      iconBg: 'bg-green-100',
      iconText: 'text-green-600',
    },
    purple: {
      dot: 'bg-purple-500',
      button: 'bg-purple-100 text-purple-600 hover:bg-purple-600',
      iconBg: 'bg-purple-100',
      iconText: 'text-purple-600',
    },
  }

  return (
    <>
      <section className="card animate-fade-in animation-delay-400" aria-labelledby="techstack-heading">
        <h2 id="techstack-heading" className="section-title">Tech Stack</h2>
        <div className="space-y-5">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span className={`w-2 h-2 ${colorConfig[category.color].dot} rounded-full`} aria-hidden="true"></span>
                  {category.name}
                </h3>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${colorConfig[category.color].button} hover:text-white transition-all duration-300 cursor-pointer`}
                  aria-label={`${category.name} 전체 보기`}
                >
                  <FaPlus className="text-xs" />
                </button>
              </div>
              <SkillGrid
                skills={category.skills.slice(0, 6)}
                color={category.color}
                tooltipPrefix={category.name.toLowerCase().replace(/\s+/g, '-')}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Detail Dialog */}
      <Dialog
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        title={selectedCategory?.name || ''}
      >
        {selectedCategory && (
          <div className="space-y-4">
            {selectedCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors duration-200"
              >
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${colorConfig[selectedCategory.color].iconBg}`}>
                  <div className={`text-2xl ${colorConfig[selectedCategory.color].iconText}`}>
                    {skill.Icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {skill.name}
                  </h4>
                  {skill.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Dialog>
    </>
  )
}
