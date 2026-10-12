import { useEffect, useRef, ReactNode } from 'react'
import { FaTimes } from 'react-icons/fa'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  /** md: 일반 안내용, xl: 프로젝트 상세처럼 내용이 많은 경우 */
  size?: 'md' | 'xl'
}

const SIZE_CLASS = {
  md: 'max-w-2xl max-h-[85vh]',
  xl: 'max-w-6xl max-h-[92vh]',
} as const

export function Dialog({ isOpen, onClose, title, children, size = 'md' }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // 열 때 다이얼로그로 포커스를 옮기고, 닫으면 열었던 버튼으로 되돌린다
  useEffect(() => {
    if (!isOpen) return
    const opener = document.activeElement as HTMLElement | null
    dialogRef.current?.focus()
    return () => opener?.focus()
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Content */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`relative flex flex-col w-full ${SIZE_CLASS[size]} bg-[var(--color-surface)] text-[var(--color-text)] rounded-2xl shadow-2xl overflow-hidden animate-scale-in outline-none`}
      >
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between gap-4 px-6 py-4 bg-[var(--color-primary)] text-white">
          <h2 id="dialog-title" className={size === 'xl' ? 'text-xl md:text-2xl font-bold' : 'text-lg font-bold'}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="shrink-0 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
            aria-label="닫기"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Body */}
        <div className={`min-h-0 flex-1 overflow-y-auto ${size === 'xl' ? 'p-6 md:p-8' : 'p-6'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
