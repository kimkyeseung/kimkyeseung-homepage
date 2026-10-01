import { EMAIL, GITHUB_URL, BEHANCE_URL, WISHKET_URL, AVAILABILITY } from '@/constants'

// 의뢰와 채용 제안은 필요한 정보가 달라서 메일 제목·본문 틀을 나눠 둔다
const INQUIRIES = [
  {
    label: 'Freelance',
    title: '프로젝트 의뢰',
    description: '웹·데스크톱 앱(Tauri), AR·AI 기능, 디자인 시스템 구축까지 기획 단계부터 함께할 수 있습니다.',
    subject: '[프로젝트 의뢰] ',
    body: '프로젝트 개요:\n희망 일정:\n예산 범위:\n참고 자료/링크:\n',
    cta: '의뢰 메일 보내기',
  },
  {
    label: 'Hiring',
    title: '채용 제안',
    description: '프론트엔드·풀스택 포지션을 검토하고 있습니다. 팀과 제품 이야기를 먼저 들려주세요.',
    subject: '[채용 제안] ',
    body: '회사/팀 소개:\n포지션과 주요 업무:\n근무 형태(정규직/계약, 원격 여부):\n',
    cta: '제안 메일 보내기',
  },
]

function mailtoHref(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="bg-[var(--color-primary)] rounded-3xl px-5 py-12 md:p-20 text-center text-white relative overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-black break-keep">
            함께 만들어 가요.
          </h2>
          <p className="text-lg opacity-80 max-w-xl break-keep">
            {AVAILABILITY}
          </p>

          {/* Inquiry CTAs */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl text-left">
            {INQUIRIES.map((inquiry) => (
              <div key={inquiry.label} className="flex flex-col gap-3 p-6 rounded-2xl bg-white/10 border border-white/20">
                <p className="text-xs font-bold uppercase tracking-widest opacity-70">{inquiry.label}</p>
                <h3 className="text-2xl font-black">{inquiry.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed break-keep flex-1">{inquiry.description}</p>
                <a
                  href={mailtoHref(inquiry.subject, inquiry.body)}
                  className="self-start mt-2 bg-white text-[var(--color-primary)] px-5 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  {inquiry.cta}
                </a>
              </div>
            ))}
          </div>

          <a href={`mailto:${EMAIL}`} className="mt-2 text-lg font-bold hover:underline">
            {EMAIL}
          </a>

          {/* Social Links */}
          <div className="flex gap-8 mt-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold hover:underline"
            >
              GitHub
            </a>
            <a
              href={WISHKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold hover:underline"
            >
              Wishket
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
