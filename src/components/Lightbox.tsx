import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

interface LightboxProps {
  images: string[]
  /** 열린 이미지 인덱스. null이면 닫힘 */
  index: number | null
  onChange: (index: number | null) => void
  alt: (index: number) => string
}

// 이 거리(px) 이상 가로로 밀면 이전/다음으로 넘긴다
const SWIPE_THRESHOLD = 50

export function Lightbox({ images, index, onChange, alt }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef<number | null>(null)
  const isOpen = index !== null
  const count = images.length

  const go = (delta: number) => {
    if (index === null) return
    onChange((index + delta + count) % count)
  }

  // 아래 프로젝트 Dialog도 document에서 ESC를 듣기 때문에, window 캡처 단계에서 먼저 받아 전파를 끊는다
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
      else return
      e.stopPropagation()
      e.preventDefault()
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  })

  // 열 때 닫기 버튼으로 포커스를 옮기고, 닫으면 눌렀던 썸네일로 되돌린다
  useEffect(() => {
    if (!isOpen) return
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    return () => opener?.focus()
  }, [isOpen])

  if (index === null) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt(index)} 크게 보기`}
      onClick={() => onChange(null)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        touchStartX.current = null
        if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1)
      }}
    >
      <img
        key={images[index]}
        src={images[index]}
        alt={alt(index)}
        className="max-w-[94vw] max-h-[88vh] object-contain rounded-lg shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        ref={closeRef}
        type="button"
        onClick={() => onChange(null)}
        className="absolute top-4 right-4 p-3 rounded-full text-white bg-black/60 hover:bg-black/80 ring-1 ring-white/20 transition-colors"
        aria-label="크게 보기 닫기"
      >
        <FaTimes className="text-lg" />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full text-white bg-black/60 hover:bg-black/80 ring-1 ring-white/20 transition-colors"
            aria-label="이전 이미지"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full text-white bg-black/60 hover:bg-black/80 ring-1 ring-white/20 transition-colors"
            aria-label="다음 이미지"
          >
            <FaChevronRight className="text-lg" />
          </button>
          <p
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm text-white bg-white/10"
            aria-live="polite"
          >
            {index + 1} / {count}
          </p>
        </>
      )}
    </div>,
    document.body,
  )
}
