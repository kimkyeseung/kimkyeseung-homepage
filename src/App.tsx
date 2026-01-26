import {
  Header,
  HeroSection,
  WorkSection,
  ResumeSection,
  ContactSection,
  Footer,
  PdfDownloadButton,
} from '@/components'

function App() {
  return (
    <div className="min-h-screen">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        본문 바로가기
      </a>

      <Header />

      <main id="main-content" className="max-w-[1200px] mx-auto px-6">
        <HeroSection />
        <WorkSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating PDF Download Button */}
      <PdfDownloadButton />
    </div>
  )
}

export default App
