import { PROFILE, EXPERIENCES, EDUCATIONS, SKILLS, SUMMARIES, FEATURED_PROJECTS } from './data/index.js'

export interface SearchMatch {
  section: 'profile' | 'experience' | 'education' | 'skill' | 'summary' | 'project'
  title: string
  snippet: string
}

function includes(haystack: string | undefined, needle: string): boolean {
  return !!haystack && haystack.toLowerCase().includes(needle)
}

export function searchResume(query: string): SearchMatch[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const matches: SearchMatch[] = []

  if (includes(PROFILE.introduction, q) || includes(PROFILE.title, q)) {
    matches.push({
      section: 'profile',
      title: `${PROFILE.name} (${PROFILE.nameEn})`,
      snippet: PROFILE.introduction,
    })
  }

  for (const exp of EXPERIENCES) {
    const projectHits = exp.projects.filter(
      (p) =>
        includes(p.title, q) ||
        includes(p.information, q) ||
        includes(p.impact, q) ||
        p.descriptions.some((d) => includes(d, q)) ||
        (p.techs ?? []).some((t) => includes(t, q)),
    )
    const haystack = [
      exp.name,
      exp.role,
      ...exp.techs,
      ...exp.descriptions.flatMap((d) => [d.title, ...(d.details ?? [])]),
    ]
    if (projectHits.length > 0 || haystack.some((h) => includes(h, q))) {
      matches.push({
        section: 'experience',
        title: `${exp.name}${exp.role ? ` · ${exp.role}` : ''}`,
        snippet:
          projectHits.length > 0
            ? projectHits.map((p) => `${p.title}: ${p.impact ?? p.descriptions[0]}`).join(' / ')
            : exp.descriptions[0]?.title ?? '',
      })
    }
  }

  for (const edu of EDUCATIONS) {
    const haystack = [
      edu.name,
      ...edu.descriptions.map((d) => d.title),
      ...edu.curriculums.flatMap((c) => [c.title, ...c.descriptions]),
    ]
    if (haystack.some((h) => includes(h, q))) {
      matches.push({
        section: 'education',
        title: edu.name,
        snippet: edu.descriptions[0]?.title ?? '',
      })
    }
  }

  for (const skill of SKILLS) {
    if (includes(skill.name, q) || includes(skill.description, q)) {
      matches.push({ section: 'skill', title: skill.name, snippet: skill.description })
    }
  }

  for (const summary of SUMMARIES) {
    if (
      includes(summary.title, q) ||
      includes(summary.description, q) ||
      (summary.keywords ?? []).some((k) => includes(k, q))
    ) {
      matches.push({ section: 'summary', title: summary.title, snippet: summary.description })
    }
  }

  for (const project of FEATURED_PROJECTS) {
    if (
      includes(project.title, q) ||
      includes(project.description, q) ||
      project.techs.some((t) => includes(t, q))
    ) {
      matches.push({ section: 'project', title: project.title, snippet: project.description })
    }
  }

  return matches
}
