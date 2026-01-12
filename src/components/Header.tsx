import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import {
  NAME_EN,
  TITLE,
  SUB_TITLE,
  EMAIL,
  PHONE_NUMBER,
  GITHUB_URL,
  LINKEDIN_URL,
  PROFILE_IMAGE_URL,
  INTRODUCTION,
} from '@/constants'

export function Header() {
  return (
    <header className="card mb-8 animate-fade-in !overflow-visible !p-8" role="banner">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image with Enhanced Decorations */}
        <div className="relative flex-shrink-0 group ml-6 mt-6">
          {/* Outer glow effect */}
          <div className="absolute inset-0 w-52 h-52 -top-2 -left-2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" aria-hidden="true" />

          {/* Decorative shapes */}
          <div className="absolute w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl rotate-6 top-1 left-1 opacity-90 group-hover:rotate-12 transition-transform duration-500" aria-hidden="true" />
          <div className="absolute w-48 h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl -rotate-6 -top-1 -left-1 opacity-90 group-hover:-rotate-12 transition-transform duration-500" aria-hidden="true" />

          {/* Accent dots - static for professional look */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500/80 rounded-full" aria-hidden="true" />
          <div className="absolute -bottom-2 -left-3 w-4 h-4 bg-purple-400/80 rounded-full" aria-hidden="true" />
          <div className="absolute top-1/2 -right-4 w-3 h-3 bg-blue-400/80 rounded-full" aria-hidden="true" />

          {/* Main image */}
          <img
            src={PROFILE_IMAGE_URL}
            alt="김계승 프론트엔드 개발자 프로필 사진"
            className="w-48 h-48 object-cover rounded-2xl relative z-10 border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-1 animate-slide-up">
            {NAME_EN}
          </h1>
          <p className="text-gray-500 text-base mb-3 animate-slide-up animation-delay-100">
            6년차 프론트엔드 개발자
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4 animate-slide-up animation-delay-200">
            <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300">
              {TITLE}
            </span>
            <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-medium text-sm shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300">
              {SUB_TITLE}
            </span>
          </div>
          <p className="text-gray-600 mb-4 max-w-xl text-sm leading-relaxed animate-slide-up animation-delay-300">
            {INTRODUCTION}
          </p>

          {/* Contact Info */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm animate-slide-up animation-delay-400" aria-label="연락처">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaEnvelope className="text-lg" aria-hidden="true" />
              <span>{EMAIL}</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaPhone className="text-lg" aria-hidden="true" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="GitHub 프로필 (새 창에서 열림)"
            >
              <FaGithub className="text-lg" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn 프로필 (새 창에서 열림)"
            >
              <FaLinkedin className="text-lg" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
