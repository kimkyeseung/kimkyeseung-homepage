import { useEffect, useState } from 'react'
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

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const { isDark, toggle } = useDarkMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 메뉴가 열려 있을 때 Escape로 닫기, 데스크톱 폭으로 넓어지면 닫기
  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleResize = () => {
      if (mediaQuery.matches) setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    mediaQuery.addEventListener('change', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [isMenuOpen])

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
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}

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
            onClick={() => setIsMenuOpen((open) => !open)}
            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)] animate-fade-in"
          aria-label="모바일 네비게이션"
        >
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-base font-medium hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 bg-[var(--color-primary)] text-white px-5 py-3 rounded-lg text-center font-bold hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
