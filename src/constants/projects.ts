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
    title: 'AR 포토부스 키오스크 (AR-Pic)',
    category: 'Kiosk · AI/Desktop App',
    description:
      'Windows 전용 AI 포토부스 데스크톱 앱. MediaPipe 기반 실시간 배경 제거, QR 사진 공유, 카드 결제까지 지원하며 실제 매장에 상용 배포.',
    techs: ['Next.js', 'Tauri', 'MediaPipe', 'Supabase'],
  },
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
  {
    title: 'Dice Art',
    category: 'Web App · Creative Tool',
    description:
      '업로드한 이미지를 주사위 모자이크 아트로 변환하는 웹 앱. 이미지를 그리드로 분석해 셀별 목표 주사위 값을 계산하고, Canvas 기반 드로잉으로 직접 채워 완성. 대형 그리드 섹션 네비게이션과 완성작 갤러리 제공.',
    techs: ['Next.js', 'Canvas', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Lotto Simulator',
    category: 'Web App · Full Stack',
    description:
      '로또 번호 생성, 당첨 시뮬레이션, 통계 분석을 제공하는 웹 애플리케이션. TanStack Router 기반 SPA와 Hono API 서버, Neon PostgreSQL을 활용했으며 댓글/좋아요 커뮤니티 기능을 포함.',
    techs: ['React', 'TanStack Router', 'Hono', 'Drizzle ORM'],
  },
  {
    title: 'Mocktrader',
    category: 'Web App · Fintech',
    description:
      '모의 주식 트레이딩 시뮬레이터. ECharts 기반 차트 시각화로 거래 흐름을 확인하고, 거래 내역을 PDF 리포트로 내보낼 수 있는 도메인 주도 설계 구조의 웹 앱.',
    techs: ['React', 'Zustand', 'ECharts', '@react-pdf/renderer'],
  },
  {
    title: '김계승 일본어',
    category: 'Web App · On-device AI · PWA',
    description:
      '서버 없이 브라우저 안에서 도는 온디바이스 AI 일본어 학습 웹앱. Chrome 내장 Prompt API와 WebGPU 기반 Gemma 4(2GB 모델 OPFS 이어받기 다운로드)를 갈아끼우는 이중 엔진 구조로 회화·작문 첨삭·AI 선생님을 제공하고, 사전·한자·획순은 JMDict/KANJIDIC/KanjiVG 가공 데이터로 처리. 프롬프트 인젝션 4중 방어, SRS 복습, 한자 쓰기 채점, 오프라인 PWA 지원.',
    techs: ['React', 'TypeScript', 'WebGPU', 'LiteRT-LM', 'Zustand', 'IndexedDB'],
  },
]
