import { NAME_EN, ADDRESS } from '@/constants'

// Logo SVG Component (same as Header)
function Logo() {
  return <img src="/logo.svg" alt="" aria-hidden="true" className="size-6" />
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] py-10 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Logo />
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
