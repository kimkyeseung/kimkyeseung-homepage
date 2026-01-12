import { ReactNode } from 'react'

export interface Curriculum {
  title: string
  descriptions: string[]
}

export interface EducationDescription {
  title: string
}

export interface Education {
  name: string
  joinedAt: string
  seperatedAt?: string
  descriptions: EducationDescription[]
  url?: string
  curriculums: Curriculum[]
  isOngoing?: boolean
}

export interface ProjectDescription {
  title: string
  descriptions: string[]
  information?: string
  url?: string
  impact?: string
}

export interface ExperienceDescription {
  title: string
  details?: string[]
}

export interface Experience {
  name: string
  descriptions: ExperienceDescription[]
  techs: string[]
  joinedAt?: string
  seperatedAt?: string
  url?: string
  projects: ProjectDescription[]
  role?: string
  isOngoing?: boolean
}

export interface Skill {
  name: string
  Icon: ReactNode
  description: string
  proficiency?: 'expert' | 'advanced' | 'intermediate'
}

export interface Summary {
  title: string
  description: string
  keywords?: string[]
}
