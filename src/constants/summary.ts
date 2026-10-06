import { Summary } from '@/types'
import { CAREER_YEARS } from './career'

export const SUMMARIES: Summary[] = [
  {
    title: '웹 위에서 AI·AR을 제품으로',
    description:
      '브라우저에서 Gemma 4를 WebGPU로 돌리는 오프라인 AI 학습 앱, MediaPipe 실시간 배경 제거 키오스크, AR 콘텐츠 제작 도구를 직접 설계·배포했습니다. 데모가 아니라 실제 기기와 매장에서 동작하는 수준까지 마무리합니다.',
    keywords: ['온디바이스 AI', 'WebGPU', 'MediaPipe', 'Tauri', 'AR'],
  },
  {
    title: '디자이너 출신 개발자',
    description:
      'UI/UX 디자인 교육을 이수한 프론트엔드 개발자입니다. 사용자 경험에 대한 깊은 이해를 바탕으로 디자이너와 원활하게 협업하며, 디자인 의도를 정확히 구현합니다.',
    keywords: ['UI/UX', '디자인 시스템', '사용자 경험'],
  },
  {
    title: '풀스택 역량 보유',
    description:
      'Node.js, Python/Flask 기반 백엔드 개발 경험이 있습니다. API 설계부터 데이터베이스 관리까지 전체 시스템을 이해하고, 프론트엔드와 백엔드 간의 효율적인 연동을 구현합니다.',
    keywords: ['Node.js', 'Python', 'REST API', 'MongoDB', 'MySQL'],
  },
  {
    title: '성과 중심 문제 해결',
    description:
      '마인드카페에서 보이스테라피 통화 성공률을 72%에서 99%로 개선한 경험이 있습니다. 문제의 근본 원인을 파악하고 측정 가능한 결과로 해결하는 것을 중요하게 생각합니다.',
    keywords: ['문제 해결', '성능 최적화', '데이터 기반'],
  },
]

export const INTRODUCTION = `${CAREER_YEARS}년 경력의 프론트엔드 개발자로, 온디바이스 AI(WebGPU)·실시간 영상 처리(MediaPipe)·데스크톱 키오스크(Tauri)처럼 웹 기술의 경계에 있는 제품을 실제 사용자에게 배포해 왔습니다. 디자이너 출신으로 UI/UX를 함께 설계하고, 백엔드까지 직접 다루며 전체 시스템을 책임집니다.`
