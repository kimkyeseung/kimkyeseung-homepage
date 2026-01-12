import { useState, useCallback } from 'react'
import { FaFilePdf, FaSpinner } from 'react-icons/fa'

export function PdfDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = useCallback(async () => {
    setIsGenerating(true)

    try {
      // Lazy load PDF dependencies
      const [{ pdf }, { ResumePdf }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./pdf/ResumePdf'),
      ])

      // Generate PDF blob
      const blob = await pdf(<ResumePdf />).toBlob()

      // Create download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = '김계승_이력서.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('PDF generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }, [])

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-full shadow-xl shadow-red-500/40 hover:shadow-2xl hover:shadow-red-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-wait disabled:transform-none no-print"
      aria-label="이력서 PDF 다운로드"
    >
      {isGenerating ? (
        <FaSpinner className="text-lg animate-spin" aria-hidden="true" />
      ) : (
        <FaFilePdf className="text-lg" aria-hidden="true" />
      )}
      <span className="hidden sm:inline">
        {isGenerating ? 'PDF 생성 중...' : 'PDF 다운로드'}
      </span>
    </button>
  )
}
