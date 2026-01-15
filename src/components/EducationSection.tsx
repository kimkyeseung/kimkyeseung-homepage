import { useState } from 'react'
import { FaPlus, FaExternalLinkAlt } from 'react-icons/fa'
import { EDUCATIONS } from '@/constants'
import { Education } from '@/types'
import { Dialog } from './Dialog'

export function EducationSection() {
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null)

  const handleOpenDialog = (edu: Education) => {
    setSelectedEducation(edu)
  }

  const handleCloseDialog = () => {
    setSelectedEducation(null)
  }

  return (
    <>
      <section className="card animate-fade-in animation-delay-300" aria-labelledby="education-heading">
        <h2 id="education-heading" className="section-title">Education</h2>
        <div className="space-y-4">
          {EDUCATIONS.map((edu, index) => (
            <div
              key={index}
              className="group relative pl-6 border-l-2 border-blue-200 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="absolute left-0 top-1 w-3 h-3 bg-blue-500 rounded-full -translate-x-[7px] group-hover:scale-125 transition-transform duration-300" aria-hidden="true" />

              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-300">
                    {edu.name}
                  </h3>
                  <p className="text-blue-600 text-xs font-medium">
                    {edu.joinedAt} - {edu.isOngoing ? '진행 중' : edu.seperatedAt}
                  </p>
                  {edu.descriptions.map((desc, i) => (
                    <p key={i} className="text-gray-500 text-xs mt-1">
                      {desc.title}
                    </p>
                  ))}
                </div>

                {/* + Button */}
                {edu.curriculums && edu.curriculums.length > 0 && (
                  <button
                    onClick={() => handleOpenDialog(edu)}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
                    aria-label={`${edu.name} 상세 보기`}
                  >
                    <FaPlus className="text-xs" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Detail Dialog */}
      <Dialog
        isOpen={selectedEducation !== null}
        onClose={handleCloseDialog}
        title={selectedEducation?.name || ''}
      >
        {selectedEducation && (
          <div className="space-y-6">
            {/* Header Info */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <p className="text-blue-600 font-medium">
                  {selectedEducation.joinedAt} - {selectedEducation.isOngoing ? '진행 중' : selectedEducation.seperatedAt}
                </p>
                {selectedEducation.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-600 text-sm mt-1">
                    {desc.title}
                  </p>
                ))}
              </div>
              {selectedEducation.url && (
                <a
                  href={selectedEducation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  <span>웹사이트</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>

            {/* Curriculum */}
            {selectedEducation.curriculums && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-gray-800">커리큘럼</h3>
                {selectedEducation.curriculums.map((curriculum, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        {curriculum.title}
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-11">
                      {curriculum.descriptions.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Dialog>
    </>
  )
}
