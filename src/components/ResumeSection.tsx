import { EXPERIENCES } from '@/constants/experiences'
import { EDUCATIONS } from '@/constants/educations'
import { skillSets } from '@/constants/skillsets'

// 주요 경력 포맷팅
function formatPeriod(joinedAt?: string, seperatedAt?: string, isOngoing?: boolean) {
  if (!joinedAt) return ''
  if (isOngoing) return `${joinedAt} — Present`
  return `${joinedAt} — ${seperatedAt ?? ''}`
}

// 스킬 데이터 플랫하게 변환
const DESIGN_SKILLS = ['Figma', 'Adobe XD', 'Photoshop']
const FRONTEND_SKILLS = skillSets.frontEnds.map(s => s.name.split(' / ')[0]).slice(0, 6)
const BACKEND_SKILLS = skillSets.backEnds.map(s => s.name).slice(0, 5)

export function ResumeSection() {
  // 상위 4개 경력만 표시
  const displayExperiences = EXPERIENCES.slice(0, 4)

  return (
    <section id="resume" className="py-20 border-t border-[var(--color-border)]">
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label">Curriculum Vitae</span>
        <h2 className="section-title">Resume</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Experience Column */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8 border-b border-[var(--color-border)] pb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="flex flex-col gap-10">
              {displayExperiences.map((exp, index) => (
                <div key={exp.name} className="flex flex-col md:flex-row md:gap-8">
                  <span className={`md:w-32 text-sm font-semibold uppercase tracking-wider pt-1 ${index === 0 ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'}`}>
                    {formatPeriod(exp.joinedAt, exp.seperatedAt, exp.isOngoing)}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <p className="text-[var(--color-text-muted)] font-medium mb-3 italic">
                      {exp.name}
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-[var(--color-primary)] hover:underline"
                        >
                          ↗
                        </a>
                      )}
                    </p>
                    {exp.descriptions[0] && (
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                        {exp.descriptions[0].title}
                      </p>
                    )}
                    {exp.projects && exp.projects.length > 0 && index < 2 && (
                      <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-1">
                        {exp.projects.slice(0, 2).map((project) => (
                          <li key={project.title}>
                            <strong>{project.title}</strong>
                            {project.impact && ` — ${project.impact}`}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8 border-b border-[var(--color-border)] pb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="flex flex-col gap-8">
              {EDUCATIONS.slice(0, 2).map((edu) => (
                <div key={edu.name} className="flex flex-col md:flex-row md:gap-8">
                  <span className="md:w-32 text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                    {formatPeriod(edu.joinedAt, edu.seperatedAt, edu.isOngoing)}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{edu.name}</h4>
                    <p className="text-[var(--color-text-muted)]">
                      {edu.descriptions[0]?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-8 border-b border-[var(--color-border)] pb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-bold">Highlights</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50">
                <p className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest">Impact</p>
                <h4 className="font-bold">통화 성공률 72% → 99%</h4>
                <p className="text-sm text-[var(--color-text-muted)]">마인드카페 보이스테라피</p>
              </div>
              <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50">
                <p className="text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest">System</p>
                <h4 className="font-bold">50+ 컴포넌트 디자인 시스템</h4>
                <p className="text-sm text-[var(--color-text-muted)]">위버 Storybook 기반</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Skills) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 flex flex-col gap-10 p-8 rounded-2xl bg-[var(--color-surface)]/50 border border-[var(--color-border)]">
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Tools &amp; Expertise
              </h3>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase mb-3 tracking-widest">
                    Frontend
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FRONTEND_SKILLS.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase mb-3 tracking-widest">
                    Backend
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {BACKEND_SKILLS.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase mb-3 tracking-widest">
                    Design
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {DESIGN_SKILLS.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--color-border)]">
              <h3 className="text-lg font-bold mb-4">Availability</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                현재 프리랜서로 활동 중이며, 새로운 프로젝트 및 풀타임 포지션을 검토하고 있습니다.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
