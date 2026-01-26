export interface Project {
  title: string
  category: string
  description: string
  url?: string
  image?: string
  techs: string[]
}

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'AR 콘텐츠 제작 도구',
    category: 'Web App · AR/VR',
    description: 'MindAR + Three.js 기반 AR 콘텐츠 생성 웹 애플리케이션. 비개발자도 AR 콘텐츠 제작 가능한 노코드 플랫폼.',
    techs: ['React', 'MindAR', 'Three.js', 'NestJS'],
  },
  {
    title: '3ridge 플랫폼',
    category: 'Web3 · Full Stack',
    description: 'Web3 온보딩 플랫폼 전면 리뉴얼. Next.js App Router 활용, 페이지 로딩 속도 40% 개선.',
    url: 'https://www.3ridge.io/',
    techs: ['Next.js', 'TanStack Query', 'GraphQL'],
  },
  {
    title: '위버 B2B 플랫폼',
    category: 'E-commerce · Design System',
    description: 'B2B 기업 워크샵 매칭 플랫폼. 디자인 시스템 구축 및 50+ 컴포넌트 개발.',
    url: 'https://www.weebur.com/',
    techs: ['Next.js', 'Storybook', 'Styled Components'],
  },
  {
    title: '마인드카페 전문가앱',
    category: 'Healthcare · Real-time',
    description: '심리상담 플랫폼 전문가용 웹앱. 실시간 채팅/통화 품질 개선으로 통화 성공률 72% → 99% 향상.',
    url: 'https://www.mindcafe.co.kr/',
    techs: ['Vue.js', 'Sendbird', 'WebRTC'],
  },
]
