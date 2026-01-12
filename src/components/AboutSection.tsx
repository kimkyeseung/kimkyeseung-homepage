import { SUMMARIES } from '@/constants'

export function AboutSection() {
  return (
    <section className="card mb-6 animate-fade-in animation-delay-200" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {SUMMARIES.map((summary, index) => (
          <div
            key={index}
            className="group p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {summary.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {summary.description}
                </p>
                {summary.keywords && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {summary.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
