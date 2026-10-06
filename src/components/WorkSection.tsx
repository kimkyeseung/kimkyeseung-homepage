import { useState } from 'react'
import { FEATURED_PROJECTS, PROJECT_GROUPS, type Project } from '@/constants/projects'
import { Dialog } from './Dialog'

// 프로젝트별 그라데이션 배경색
const PROJECT_GRADIENTS = [
  'from-blue-500/20 to-indigo-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-emerald-500/20 to-teal-500/20',
  'from-orange-500/20 to-red-500/20',
]

function ArrowIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <article className="project-card">
      <button
        type="button"
        onClick={onOpen}
        className="group flex flex-col gap-4 text-left rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
        aria-label={`${project.title} 자세히 보기`}
      >
        {/* Thumbnail */}
        <div className="image-wrapper w-full">
          {project.images?.length ? (
            <img src={project.images[0]} alt="" loading="lazy" decoding="async" />
          ) : (
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
          )}
        </div>

        {/* Project Info */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <p className="text-sm text-[var(--color-text-muted)]">
              {project.client ? `${project.client} · ${project.category}` : project.category}
            </p>
            <h4 className="text-xl font-bold mt-1">{project.title}</h4>
            <p className="text-sm text-[var(--color-text-muted)] mt-2">{project.summary}</p>
            {project.metric && (
              <p className="inline-block mt-3 px-3 py-1 text-xs font-bold rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                {project.metric}
              </p>
            )}
          </div>
          <span className="text-[var(--color-primary)] pt-6 group-hover:translate-x-1 transition-transform">
            <ArrowIcon className="w-6 h-6" />
          </span>
        </div>
      </button>
    </article>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-[var(--color-text-muted)]">
          {project.client ? `${project.client} · ${project.category}` : project.category}
        </p>
        {project.metric && (
          <p className="inline-block mt-3 px-3 py-1 text-sm font-bold rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
            {project.metric}
          </p>
        )}
      </div>

      <p className="leading-relaxed">{project.description}</p>

      {project.points && project.points.length > 0 && (
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
            What I did
          </h3>
          <ul className="flex flex-col gap-2">
            {project.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed">
                <span className="text-[var(--color-primary)] font-bold" aria-hidden="true">
                  ·
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
            Screenshots
          </h3>
          <div className="flex flex-col gap-4">
            {project.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} 스크린샷 ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="max-w-full mx-auto rounded-xl border border-[var(--color-border)]"
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span key={tech} className="skill-tag">
            {tech}
          </span>
        ))}
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary self-start"
        >
          {project.urlLabel ?? '사이트 방문'}
          <ArrowIcon />
        </a>
      )}
    </div>
  )
}

export function WorkSection() {
  const [selected, setSelected] = useState<Project | null>(null)

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
            카드를 누르면 무엇을 했고 어떤 결과가 나왔는지 볼 수 있습니다.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        {PROJECT_GROUPS.map((group) => {
          const projects = FEATURED_PROJECTS.filter((project) => project.kind === group.kind)
          if (projects.length === 0) return null
          return (
            <div key={group.kind}>
              <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-2 border-b border-[var(--color-border)] pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                    {group.label}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{group.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{group.description}</p>
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    onOpen={() => setSelected(project)}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <Dialog isOpen={selected !== null} onClose={() => setSelected(null)} title={selected?.title ?? ''}>
        {selected && <ProjectDetail project={selected} />}
      </Dialog>
    </section>
  )
}
