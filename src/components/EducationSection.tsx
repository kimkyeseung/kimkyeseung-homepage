import { EDUCATIONS } from '@/constants'

export function EducationSection() {
  return (
    <section className="card animate-fade-in animation-delay-300" aria-labelledby="education-heading">
      <h2 id="education-heading" className="section-title">Education</h2>
      <div className="space-y-4">
        {EDUCATIONS.map((edu, index) => (
          <div
            key={index}
            className="group relative pl-6 border-l-2 border-blue-200 hover:border-blue-500 transition-colors duration-300"
          >
            <div className="absolute left-0 top-1 w-3 h-3 bg-blue-500 rounded-full -translate-x-[7px] group-hover:scale-125 transition-transform duration-300" aria-hidden="true" />
            <h3 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-300">
              {edu.name}
            </h3>
            <p className="text-blue-600 text-xs font-medium">
              {edu.joinedAt} - {edu.isOngoing ? '진행 중' : edu.seperatedAt}
            </p>
            {edu.descriptions.map((desc, i) => (
              <p key={i} className="text-gray-500 text-xs mt-1">
                {desc.title}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
