import { NAME_EN, ADDRESS } from '@/constants'

// Logo SVG Component (same as Header)
function Logo() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className="size-6"
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

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] py-10 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="text-[var(--color-primary)]">
            <Logo />
          </div>
          <span className="text-sm font-bold tracking-tight">
            &copy; {currentYear} {NAME_EN}. All rights reserved.
          </span>
        </div>
        <div className="text-sm text-[var(--color-text-muted)] font-medium">
          Crafted with passion in {ADDRESS}.
        </div>
      </div>
    </footer>
  )
}
