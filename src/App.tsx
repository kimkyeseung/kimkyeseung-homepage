import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import {
  NAME_EN,
  TITLE,
  SUB_TITLE,
  EMAIL,
  PHONE_NUMBER,
  GITHUB_URL,
  LINKEDIN_URL,
  PROFILE_IMAGE_URL,
  EXPERIENCES,
  EDUCATIONS,
  SUMMARIES,
  INTRODUCTION,
  skillSets,
} from '@/constants'

function App() {
  return (
    <div className="min-h-screen py-12 px-6 sm:px-8 lg:px-12">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        본문 바로가기
      </a>

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="card mb-8 animate-fade-in !overflow-visible !p-8" role="banner">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image with Enhanced Decorations */}
            <div className="relative flex-shrink-0 group ml-6 mt-6">
              {/* Outer glow effect */}
              <div className="absolute inset-0 w-52 h-52 -top-2 -left-2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" aria-hidden="true" />

              {/* Decorative shapes */}
              <div className="absolute w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl rotate-6 top-1 left-1 opacity-90 group-hover:rotate-12 transition-transform duration-500" aria-hidden="true" />
              <div className="absolute w-48 h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl -rotate-6 -top-1 -left-1 opacity-90 group-hover:-rotate-12 transition-transform duration-500" aria-hidden="true" />

              {/* Accent dots - static for professional look */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500/80 rounded-full" aria-hidden="true" />
              <div className="absolute -bottom-2 -left-3 w-4 h-4 bg-purple-400/80 rounded-full" aria-hidden="true" />
              <div className="absolute top-1/2 -right-4 w-3 h-3 bg-blue-400/80 rounded-full" aria-hidden="true" />

              {/* Main image */}
              <img
                src={PROFILE_IMAGE_URL}
                alt="김계승 프론트엔드 개발자 프로필 사진"
                className="w-48 h-48 object-cover rounded-2xl relative z-10 border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-1 animate-slide-up">
                {NAME_EN}
              </h1>
              <p className="text-gray-500 text-base mb-3 animate-slide-up animation-delay-100">
                6년차 프론트엔드 개발자
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4 animate-slide-up animation-delay-200">
                <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300">
                  {TITLE}
                </span>
                <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-medium text-sm shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300">
                  {SUB_TITLE}
                </span>
              </div>
              <p className="text-gray-600 mb-4 max-w-xl text-sm leading-relaxed animate-slide-up animation-delay-300">
                {INTRODUCTION}
              </p>

              {/* Contact Info */}
              <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm animate-slide-up animation-delay-400" aria-label="연락처">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaEnvelope className="text-lg" aria-hidden="true" />
                  <span>{EMAIL}</span>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaPhone className="text-lg" aria-hidden="true" />
                  <span>{PHONE_NUMBER}</span>
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="GitHub 프로필 (새 창에서 열림)"
                >
                  <FaGithub className="text-lg" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="LinkedIn 프로필 (새 창에서 열림)"
                >
                  <FaLinkedin className="text-lg" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main id="main-content" role="main">
          {/* Summary Section */}
          <section className="card mb-6 animate-fade-in animation-delay-200" aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About Me</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SUMMARIES.map((summary, index) => (
                <div
                  key={index}
                  className="group p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {summary.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {summary.description}
                      </p>
                      {summary.keywords && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {summary.keywords.map((keyword, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Main Content - Two Column Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Education */}
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

              {/* Tech Stack with Hover Effects and Tooltips */}
              <section className="card animate-fade-in animation-delay-400" aria-labelledby="techstack-heading">
                <h2 id="techstack-heading" className="section-title">Tech Stack</h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></span>
                      Frontend
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {skillSets.frontEnds.slice(0, 6).map((skill, index) => (
                        <div
                          key={index}
                          className="group relative flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                          tabIndex={0}
                          role="button"
                          aria-describedby={`tooltip-fe-${index}`}
                        >
                          <div className="text-2xl group-hover:scale-125 group-hover:text-blue-600 transition-all duration-300" aria-hidden="true">
                            {skill.Icon}
                          </div>
                          <span className="text-xs text-gray-600 text-center group-hover:text-blue-600 transition-colors duration-300">
                            {skill.name.split(' / ')[0]}
                          </span>
                          {/* Tooltip */}
                          <div
                            id={`tooltip-fe-${index}`}
                            role="tooltip"
                            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none"
                          >
                            {skill.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" aria-hidden="true" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                      Backend
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {skillSets.backEnds.slice(0, 6).map((skill, index) => (
                        <div
                          key={index}
                          className="group relative flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-green-50 transition-all duration-300 cursor-pointer"
                          tabIndex={0}
                          role="button"
                          aria-describedby={`tooltip-be-${index}`}
                        >
                          <div className="text-2xl group-hover:scale-125 group-hover:text-green-600 transition-all duration-300" aria-hidden="true">
                            {skill.Icon}
                          </div>
                          <span className="text-xs text-gray-600 text-center group-hover:text-green-600 transition-colors duration-300">
                            {skill.name.split(' / ')[0]}
                          </span>
                          {/* Tooltip */}
                          <div
                            id={`tooltip-be-${index}`}
                            role="tooltip"
                            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none"
                          >
                            {skill.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" aria-hidden="true" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden="true"></span>
                      DevOps & Tools
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {skillSets.devOps.map((skill, index) => (
                        <div
                          key={index}
                          className="group relative flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-purple-50 transition-all duration-300 cursor-pointer"
                          tabIndex={0}
                          role="button"
                          aria-describedby={`tooltip-devops-${index}`}
                        >
                          <div className="text-2xl group-hover:scale-125 group-hover:text-purple-600 transition-all duration-300" aria-hidden="true">
                            {skill.Icon}
                          </div>
                          <span className="text-xs text-gray-600 text-center group-hover:text-purple-600 transition-colors duration-300">
                            {skill.name.split(' ')[0]}
                          </span>
                          {/* Tooltip */}
                          <div
                            id={`tooltip-devops-${index}`}
                            role="tooltip"
                            className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none"
                          >
                            {skill.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" aria-hidden="true" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Skills */}
              <section className="card animate-fade-in animation-delay-500" aria-labelledby="skills-heading">
                <h2 id="skills-heading" className="section-title">Key Skills</h2>
                <div className="flex flex-wrap gap-2" role="list">
                  {[
                    'React',
                    'Next.js',
                    'Vue.js',
                    'TypeScript',
                    'Node.js',
                    'REST API',
                    'GraphQL',
                    'UI/UX',
                    '반응형 웹',
                    '성능 최적화',
                  ].map((skill, index) => (
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
            </div>

            {/* Right Column - Work Experience Timeline */}
            <div className="md:col-span-2 space-y-6">
              {/* Work Experience */}
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
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500 text-sm animate-fade-in animation-delay-600" role="contentinfo">
          <p>&copy; 2025 {NAME_EN}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
