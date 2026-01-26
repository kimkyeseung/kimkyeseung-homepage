import { FEATURED_PROJECTS } from '@/constants/projects'

// 프로젝트별 그라데이션 배경색
const PROJECT_GRADIENTS = [
  'from-blue-500/20 to-indigo-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-emerald-500/20 to-teal-500/20',
  'from-orange-500/20 to-red-500/20',
]

export function WorkSection() {
  return (
    <section id="work" className="py-20 border-t border-[var(--color-border)]">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected Work</h2>
        </div>
        <div className="hidden md:block">
          <p className="text-[var(--color-text-muted)] max-w-xs text-right">
            프론트엔드 개발 역량을 보여주는 주요 프로젝트들입니다.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURED_PROJECTS.map((project, index) => (
          <article key={project.title} className="project-card">
            {/* Image Placeholder */}
            <div className="image-wrapper">
              <div
                className={`bg-gradient-to-br ${PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length]} flex items-center justify-center`}
              >
                <div className="text-center p-8">
                  <div className="text-4xl font-black text-[var(--color-primary)]/30 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.techs.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded bg-[var(--color-surface)]/80 text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-[var(--color-text-muted)]">{project.category}</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] group-hover:translate-x-1 transition-transform"
                  aria-label={`${project.title} 사이트 방문`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ) : (
                <span className="text-[var(--color-primary)] group-hover:translate-x-1 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
