import { useEffect, useRef, ReactNode } from 'react'
import { FaTimes } from 'react-icons/fa'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function Dialog({ isOpen, onClose, title, children }: DialogProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
        className="relative w-full max-w-2xl max-h-[85vh] bg-[var(--color-surface)] text-[var(--color-text)] rounded-2xl shadow-2xl overflow-hidden animate-scale-in outline-none"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[var(--color-primary)] text-white">
          <h2 id="dialog-title" className="text-lg font-bold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
            aria-label="닫기"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-64px)]">
          {children}
        </div>
      </div>
    </div>
  )
}
