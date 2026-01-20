import { EXPERIENCES } from '@/constants'

export function ExperienceSection() {
  return (
    <section className="card animate-fade-in animation-delay-300" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-title">Work Experience</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 rounded-full" aria-hidden="true" />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <article
              key={index}
              className="relative pl-8 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-[calc(50%-1px)]" aria-hidden="true">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Content card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {exp.name}
                    </h3>
                    {exp.role && (
                      <p className="text-blue-600 text-sm font-medium">{exp.role}</p>
                    )}
                    {exp.descriptions[0] && (
                      <p className="text-gray-500 text-xs">
                        {exp.descriptions[0].title}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-white bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1.5 rounded-full mt-2 sm:mt-0 inline-block shadow-sm font-medium">
                    {exp.joinedAt} - {exp.isOngoing ? '현재' : exp.seperatedAt}
                  </span>
                </div>

                {/* Tech Stack */}
                {exp.techs.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Projects */}
                {exp.projects.length > 0 && (
                  <div className="space-y-4">
                    {exp.projects.map((project, i) => (
                      <div
                        key={i}
                        className="relative pl-4 border-l-2 border-blue-200 hover:border-blue-400 transition-colors duration-300"
                      >
                        <div className="absolute left-0 top-1.5 w-2 h-2 bg-blue-400 rounded-full -translate-x-[5px]" aria-hidden="true" />
                        <h4 className="font-semibold text-gray-700 text-sm">
                          {project.title}
                        </h4>
                        {project.information && (
                          <p className="text-gray-500 text-xs mb-2">
                            {project.information}
                          </p>
                        )}
                        <ul className="text-gray-600 text-xs space-y-1">
                          {project.descriptions.map((desc, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true">&#8227;</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                        {project.impact && (
                          <div className="mt-2 flex items-center gap-1.5">
                            <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">
                              Impact
                            </span>
                            <span className="text-xs text-green-700">
                              {project.impact}
                            </span>
                          </div>
                        )}
                        {project.techs && project.techs.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.techs.map((tech, k) => (
                              <span
                                key={k}
                                className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
