import { NAME, NAME_EN, PROFILE_IMAGE_URL, CAREER_YEARS } from '@/constants'

// 히어로 아래에 근거로 보여줄 성과 — 주장(헤드라인)마다 증거를 하나씩 붙인다
const PROOFS = [
  { value: 'On-device AI', label: '서버 없이 브라우저에서 도는 AI 학습 앱' },
  { value: '상용 배포', label: 'AR 포토부스 키오스크 실제 매장 운영' },
  { value: '72% → 99%', label: '실시간 상담 통화 성공률 개선' },
]

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="section-label">
              Frontend Developer · {NAME}
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter break-keep">
              웹 위에서 <span className="text-[var(--color-primary)]">AI와 AR</span>을
              <br />
              실제로 동작하는 제품으로
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-lg leading-relaxed break-keep">
              온디바이스 LLM(WebGPU), 실시간 영상 처리(MediaPipe), 데스크톱 키오스크(Tauri)까지 —
              {` ${CAREER_YEARS}`}년간 웹 기술로 실제 사용자에게 배포되는 제품을 만들어 왔습니다.
              디자이너 출신으로 UI/UX를 함께 설계하고, 백엔드까지 직접 다룹니다.
            </p>
          </div>

          {/* Proofs */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PROOFS.map((proof) => (
              <div
                key={proof.value}
                className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50"
              >
                <dt className="font-black text-[var(--color-primary)]">{proof.value}</dt>
                <dd className="mt-1 text-xs text-[var(--color-text-muted)] break-keep">{proof.label}</dd>
              </div>
            ))}
          </dl>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="btn-primary"
            >
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-outline"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2">
          <div className="aspect-square rounded-3xl bg-[var(--color-primary)]/10 overflow-hidden border border-[var(--color-primary)]/20 relative group max-w-md mx-auto lg:max-w-none">
            <img
              src={PROFILE_IMAGE_URL}
              alt={`${NAME_EN} 프로필 사진`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
