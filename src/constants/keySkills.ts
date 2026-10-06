export const KEY_SKILLS = [
  'React',
  'Next.js',
  'Vue.js',
  'TypeScript',
  '온디바이스 AI (WebGPU)',
  'MediaPipe',
  'Tauri',
  'Node.js',
  'REST API',
  'GraphQL',
  'UI/UX',
  '반응형 웹',
  '성능 최적화',
] as const

export type KeySkill = typeof KEY_SKILLS[number]
