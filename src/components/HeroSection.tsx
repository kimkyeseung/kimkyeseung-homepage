import { NAME_EN, PROFILE_IMAGE_URL, ADDRESS } from '@/constants'

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              Frontend &amp; <span className="text-[var(--color-primary)]">Full-Stack</span> Developer
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-lg leading-relaxed">
              {NAME_EN} — 6년간의 프론트엔드 개발 경험과 UI/UX 디자인 배경을 바탕으로
              사용자 중심의 웹 애플리케이션을 구축합니다. {ADDRESS} 기반.
            </p>
          </div>

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
