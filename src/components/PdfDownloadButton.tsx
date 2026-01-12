import { useState, useCallback } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

interface PdfDownloadButtonProps {
  targetId?: string
  fileName?: string
}

export function PdfDownloadButton({
  targetId = 'resume-content',
  fileName = '김계승_이력서',
}: PdfDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = useCallback(async () => {
    const element = document.getElementById(targetId)
    if (!element) {
      console.error(`Element with id "${targetId}" not found`)
      return
    }

    setIsGenerating(true)

    try {
      // Capture the element as canvas
      const canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#f8fafc',
        logging: false,
        windowWidth: 1200,
        onclone: (clonedDoc) => {
          // Remove animations and hover effects for clean capture
          const clonedElement = clonedDoc.getElementById(targetId)
          if (clonedElement) {
            clonedElement.style.animation = 'none'
            const allElements = clonedElement.querySelectorAll('*')
            allElements.forEach((el) => {
              const htmlEl = el as HTMLElement
              htmlEl.style.animation = 'none'
              htmlEl.style.transition = 'none'
            })
          }
        },
      })

      // Calculate PDF dimensions (A4)
      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      let position = 0

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgData = canvas.toDataURL('image/png')

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // Add additional pages if content is longer than one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // Download the PDF
      pdf.save(`${fileName}.pdf`)
    } catch (error) {
      console.error('PDF generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }, [targetId, fileName])

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-full shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      aria-label="이력서 PDF 다운로드"
    >
      <FaFilePdf className="text-lg" aria-hidden="true" />
      <span>{isGenerating ? '생성 중...' : 'PDF 다운로드'}</span>
    </button>
  )
}
