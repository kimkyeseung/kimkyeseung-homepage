import { useCallback } from 'react'
import { FaFilePdf } from 'react-icons/fa'

export function PdfDownloadButton() {
  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-full shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all duration-300"
      aria-label="이력서 PDF 다운로드 (인쇄 대화상자에서 PDF로 저장)"
    >
      <FaFilePdf className="text-lg" aria-hidden="true" />
      <span>PDF 다운로드</span>
    </button>
  )
}
