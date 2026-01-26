import { NAME_EN, EMAIL } from '@/constants'
import { useDarkMode } from '@/hooks/useDarkMode'

// Logo SVG Component
function Logo() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className="size-8"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
      />
    </svg>
  )
}

// Sun Icon
function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

// Moon Icon
function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export function Header() {
  const { isDark, toggle } = useDarkMode()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="text-[var(--color-primary)]">
            <Logo />
          </div>
          <h2 className="text-lg font-bold tracking-tight">{NAME_EN}</h2>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="메인 네비게이션">
          <a
            href="#work"
            className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
          >
            Work
          </a>
          <a
            href="#resume"
            className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
          >
            Contact
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-[var(--color-border)] transition-colors"
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={`mailto:${EMAIL}`}
            className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Dark Mode Toggle (Mobile) */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-[var(--color-border)] transition-colors"
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Menu Button */}
          <button
            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
