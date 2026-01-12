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
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="card mb-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-3 absolute -z-10 top-2 left-2" />
              <div className="w-48 h-48 bg-yellow-300 rounded-2xl -rotate-3 absolute -z-10 -top-2 -left-2" />
              <img
                src={PROFILE_IMAGE_URL}
                alt="Profile"
                className="w-48 h-48 object-cover rounded-2xl relative z-10 border-4 border-white shadow-lg"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-500 text-lg mb-1">My name is</p>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {NAME_EN}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <span className="px-4 py-1 bg-blue-600 text-white rounded-full font-medium">
                  {TITLE}
                </span>
                <span className="px-4 py-1 bg-yellow-400 text-gray-800 rounded-full font-medium text-sm">
                  {SUB_TITLE}
                </span>
              </div>
              <p className="text-gray-600 mb-4 max-w-xl text-sm leading-relaxed">
                {INTRODUCTION}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                >
                  <FaEnvelope /> {EMAIL}
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                >
                  <FaPhone /> {PHONE_NUMBER}
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Summary Section */}
        <section className="card mb-6">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {SUMMARIES.map((summary, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl border-l-4 border-blue-500"
              >
                <h3 className="font-bold text-gray-800 mb-2">{summary.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {summary.description}
                </p>
                {summary.keywords && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {summary.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Education */}
            <section className="card">
              <h2 className="section-title">Education</h2>
              <div className="space-y-4">
                {EDUCATIONS.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-3">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {edu.name}
                    </h3>
                    <p className="text-blue-600 text-xs">
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

            {/* Tech Stack */}
            <section className="card">
              <h2 className="section-title">Tech Stack</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Frontend
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {skillSets.frontEnds.slice(0, 6).map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className="text-2xl">{skill.Icon}</div>
                        <span className="text-xs text-gray-600 text-center">
                          {skill.name.split(' / ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Backend
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {skillSets.backEnds.slice(0, 6).map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className="text-2xl">{skill.Icon}</div>
                        <span className="text-xs text-gray-600 text-center">
                          {skill.name.split(' / ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    DevOps & Tools
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {skillSets.devOps.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className="text-2xl">{skill.Icon}</div>
                        <span className="text-xs text-gray-600 text-center">
                          {skill.name.split(' ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Key Skills */}
            <section className="card">
              <h2 className="section-title">Key Skills</h2>
              <div className="flex flex-wrap gap-2">
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
                  <span key={index} className="skill-tag">
                    #{skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Work Experience */}
          <div className="md:col-span-2 space-y-6">
            {/* Work Experience */}
            <section className="card">
              <h2 className="section-title">Work Experience</h2>
              <div className="space-y-6">
                {EXPERIENCES.map((exp, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h3 className="font-bold text-gray-800">{exp.name}</h3>
                        {exp.role && (
                          <p className="text-blue-600 text-sm">{exp.role}</p>
                        )}
                        {exp.descriptions[0] && (
                          <p className="text-gray-500 text-xs">
                            {exp.descriptions[0].title}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mt-1 sm:mt-0 inline-block">
                        {exp.joinedAt} - {exp.isOngoing ? '현재' : exp.seperatedAt}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    {exp.techs.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {exp.techs.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Projects */}
                    {exp.projects.length > 0 && (
                      <div className="space-y-3">
                        {exp.projects.map((project, i) => (
                          <div
                            key={i}
                            className="pl-3 border-l-2 border-blue-200"
                          >
                            <h4 className="font-semibold text-gray-700 text-sm">
                              {project.title}
                            </h4>
                            {project.information && (
                              <p className="text-gray-500 text-xs mb-1">
                                {project.information}
                              </p>
                            )}
                            <ul className="text-gray-600 text-xs space-y-0.5">
                              {project.descriptions.map((desc, j) => (
                                <li key={j} className="flex items-start gap-1">
                                  <span className="text-blue-400 mt-1">•</span>
                                  <span>{desc}</span>
                                </li>
                              ))}
                            </ul>
                            {project.impact && (
                              <p className="text-xs text-green-600 font-medium mt-1">
                                → {project.impact}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>&copy; 2024 {NAME_EN}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
