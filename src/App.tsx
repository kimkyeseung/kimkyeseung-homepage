import {
  Header,
  AboutSection,
  EducationSection,
  TechStackSection,
  KeySkillsSection,
  ExperienceSection,
  Footer,
} from '@/components'

function App() {
  return (
    <div className="min-h-screen py-12 px-6 sm:px-8 lg:px-12">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        본문 바로가기
      </a>

      <div id="resume-content" className="max-w-5xl mx-auto">
        <Header />

        {/* Main Content */}
        <main id="main-content" role="main">
          <AboutSection />

          {/* Main Content - Two Column Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <EducationSection />
              <TechStackSection />
              <KeySkillsSection />
            </div>

            {/* Right Column - Work Experience Timeline */}
            <div className="md:col-span-2 space-y-6">
              <ExperienceSection />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
