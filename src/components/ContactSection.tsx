import { EMAIL, GITHUB_URL, BEHANCE_URL } from '@/constants'

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="bg-[var(--color-primary)] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-black">
            함께 만들어 가요.
          </h2>
          <p className="text-lg opacity-80 max-w-xl">
            새로운 프로젝트, 흥미로운 도전을 찾고 있습니다.
            아이디어가 있다면 편하게 연락 주세요.
          </p>

          {/* Email CTA */}
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 bg-white text-[var(--color-primary)] px-10 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-transform"
          >
            {EMAIL}
          </a>

          {/* Social Links */}
          <div className="flex gap-8 mt-10">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold hover:underline"
            >
              GitHub
            </a>
            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold hover:underline"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
