// client: 회사·외주로 만든 것 / personal: 직접 기획한 사이드 프로젝트
export type ProjectKind = 'client' | 'personal'

export interface Project {
  title: string
  kind: ProjectKind
  category: string
  /** 카드에 보이는 한 줄 요약 */
  summary: string
  /** 카드에 강조해 보여줄 성과 하나 */
  metric?: string
  /** 상세 다이얼로그의 본문 */
  description: string
  /** 상세 다이얼로그의 "한 일" 목록 */
  points?: string[]
  /** 소속/클라이언트 */
  client?: string
  url?: string
  /** 링크 버튼 문구 (기본: 사이트 방문) */
  urlLabel?: string
  /** 스크린샷 경로 (public 기준). 첫 장이 카드 썸네일, 전체는 상세 다이얼로그 갤러리 */
  images?: string[]
  techs: string[]
}

const shots = (dir: string, files: string[]) => files.map((file) => `/projects/${dir}/${file}.jpg`)

export const PROJECT_GROUPS: { kind: ProjectKind; label: string; title: string; description: string }[] = [
  {
    kind: 'client',
    label: 'Client & Company',
    title: '실무 프로젝트',
    description: '회사와 외주로 실제 사용자에게 배포한 제품들입니다.',
  },
  {
    kind: 'personal',
    label: 'Side Projects',
    title: '개인 프로젝트',
    description: '직접 기획부터 배포까지 혼자 만든 제품들입니다.',
  },
]

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'AR 포토부스 키오스크 (AR-Pic)',
    kind: 'client',
    client: 'Viswave · 프리랜서',
    category: 'Kiosk · AI/Desktop App',
    summary: '실시간 AI 배경 제거부터 카드 결제·인쇄까지 갖춘 무인 포토부스 앱',
    metric: '실제 매장 상용 배포',
    description:
      'Windows 전용 AI 포토부스 데스크톱 앱. MediaPipe 기반 실시간 배경 제거, QR 사진 공유, 카드 결제까지 지원하며 실제 매장에 상용 배포.',
    points: [
      'Next.js(App Router) + Tauri 기반 Windows 데스크톱 앱 개발',
      'MediaPipe 셀피 세그멘테이션으로 실시간 배경 제거',
      '프레임 레이아웃·스티커 오버레이·QR 코드 기반 디지털 사진 공유',
      'PayApp 카드 결제 연동 및 프린터 인쇄 시스템 구축',
      'Supabase + Prisma 기반 백엔드와 다지점 관리자 패널',
    ],
    techs: ['Next.js', 'Tauri', 'MediaPipe', 'Supabase'],
  },
  {
    title: 'AR 콘텐츠 제작 도구',
    kind: 'client',
    client: 'Viswave · 프리랜서',
    category: 'Web App · AR/VR',
    summary: '이미지 한 장으로 AR 콘텐츠를 만들고 QR로 배포하는 노코드 도구',
    metric: '비개발자용 노코드 AR 플랫폼',
    description: 'MindAR + Three.js 기반 AR 콘텐츠 생성 웹 애플리케이션. 비개발자도 AR 콘텐츠 제작 가능한 노코드 플랫폼.',
    points: [
      'MindAR + Three.js + A-Frame 기반 AR 뷰어 개발',
      'FFmpeg/WebCodecs로 브라우저 안에서 비디오 처리',
      'NestJS + Prisma + Google Cloud Storage 백엔드 구축',
      'QR 코드 생성 및 AR 콘텐츠 배포 시스템 구현',
    ],
    images: shots('ar-content-tool', ['body-01', 'body-02', 'body-03', 'body-04']),
    techs: ['React', 'MindAR', 'Three.js', 'NestJS'],
  },
  {
    title: 'ViS-ractive',
    kind: 'client',
    client: 'Viswave · 프리랜서',
    category: 'Desktop App · 3D/Media Art',
    summary: '웹캠으로 관람객의 움직임을 읽어 3D 아바타가 따라 하는 전시용 미디어아트 앱',
    metric: '크리스마스 빌리지 부산 2025 현장 운영',
    description:
      '행사·전시용 실시간 인터랙티브 미디어아트 데스크톱 앱. 크리스마스 빌리지 부산 2025 현장에서 운영되었습니다. 웹캠으로 관람객의 얼굴·손·몸 움직임을 추적해 VRM 3D 아바타에 실시간으로 반영합니다. 기획부터 설계, 프론트엔드, 배포까지 1인 개발.',
    points: [
      'MediaPipe + Kalidokit으로 얼굴/신체 모션 인식 및 추적',
      '@pixiv/three-vrm을 활용한 VRM 아바타 렌더링',
      'Tauri 기반 크로스플랫폼 데스크톱 앱 개발',
      '커스텀 배경, 이펙트, 배너 등 미디어 관리 기능 구현',
    ],
    url: 'https://www.youtube.com/watch?v=F-Yqv25rgnY',
    urlLabel: '시연 영상 보기',
    images: shots('vis-ractive', ['body-01']),
    techs: ['React', 'Three.js', 'MediaPipe', 'Tauri'],
  },
  {
    title: '인터랙티브 튜토리얼 메이커',
    kind: 'client',
    client: 'Viswave · 프리랜서',
    category: 'Desktop App · Kiosk/Signage',
    summary: '코딩 없이 터치스크린 튜토리얼을 만들어 실행파일 하나로 배포하는 제작 도구',
    metric: '전시 현장 터치스크린 배포',
    description:
      '공공기관·교육기관을 위한 인터랙티브 터치스크린 튜토리얼 제작 도구. 동영상·이미지 기반 튜토리얼을 코딩 없이 만들고, 단일 실행파일(.exe)로 내보내 현장에 바로 배포합니다.',
    points: [
      'Tauri + React 기반 데스크톱 앱 개발',
      '@dnd-kit을 활용한 드래그 앤 드롭 UI 구현',
      '튜토리얼 스텝별 인터랙션 정의 및 내보내기 기능',
      'Monorepo 구조로 Maker/Player 앱 통합 관리',
    ],
    url: 'https://youtu.be/y8eIsFedxpg',
    urlLabel: '시연 영상 보기',
    images: shots('tutorial-maker', ['body-05', 'body-02', 'body-03', 'body-04', 'body-01']),
    techs: ['React', 'Tauri', 'dnd-kit', 'TypeScript'],
  },
  {
    title: '3ridge 플랫폼',
    kind: 'client',
    client: 'DeSpread',
    category: 'Web3 · Full Stack',
    summary: '월 5만+ 사용자의 Web3 온보딩 플랫폼 전면 리뉴얼',
    metric: '페이지 로딩 속도 40% 개선',
    description: 'Web3 온보딩 플랫폼 전면 리뉴얼. Next.js App Router 활용, 페이지 로딩 속도 40% 개선.',
    points: [
      'Next.js App Router 및 Server Actions로 성능 최적화',
      '다양한 블록체인 지갑 연결 및 인증 시스템 구현',
      '모바일/데스크톱 반응형 지원',
    ],
    url: 'https://www.3ridge.io/',
    images: shots('3ridge', ['body-01', 'body-02']),
    techs: ['Next.js', 'TanStack Query', 'GraphQL'],
  },
  {
    title: '위버 B2B 플랫폼',
    kind: 'client',
    client: '위버 (Weebur)',
    category: 'E-commerce · Design System',
    summary: 'B2B 기업 워크샵 매칭 플랫폼의 디자인 시스템 구축과 서비스 런칭',
    metric: '50+ 컴포넌트 디자인 시스템',
    description: 'B2B 기업 워크샵 매칭 플랫폼. 디자인 시스템 구축 및 50+ 컴포넌트 개발.',
    points: [
      'Storybook 기반 디자인 시스템 구축 — 신규 페이지 개발 시간 40% 단축',
      '3개월 내 MVP 런칭, 코드 재사용률 70%',
      '모바일 UI 최적화로 모바일 전환율 25% 향상',
      '실시간 채팅·커머스 기능으로 평균 응답 시간 80% 단축',
    ],
    url: 'https://www.weebur.com/',
    techs: ['Next.js', 'Storybook', 'Styled Components'],
  },
  {
    title: '마인드카페 전문가앱',
    kind: 'client',
    client: '아토머스 (Atommerce)',
    category: 'Healthcare · Real-time',
    summary: '1,000+ 상담사가 쓰는 실시간 채팅·음성 상담 웹앱',
    metric: '통화 성공률 72% → 99%',
    description: '심리상담 플랫폼 전문가용 웹앱. 실시간 채팅/통화 품질 개선으로 통화 성공률 72% → 99% 향상.',
    points: [
      '통화/채팅 품질 개선 TF — 권한·네트워크 상태 UX 개선으로 통화 성공률 72% → 99%',
      'Sendbird 도입으로 폴링을 실시간 메시징으로 전환 — 전달 지연 5초 → 0.1초',
      '전문가용 페이지 리뉴얼 — 로딩 속도 50% 개선',
      '관리자 페이지 보일러플레이트로 개발 속도 60% 향상',
    ],
    url: 'https://www.mindcafe.co.kr/',
    techs: ['Vue.js', 'Sendbird', 'WebRTC'],
  },
  {
    title: '김계승 일본어',
    kind: 'personal',
    category: 'Web App · On-device AI · PWA',
    summary: '서버 없이 브라우저 안의 AI로 회화·작문 첨삭·질문을 하는 일본어 학습 앱',
    metric: '서버 없는 온디바이스 AI',
    description:
      '서버 없이 브라우저 안에서 도는 온디바이스 AI 일본어 학습 웹앱. Chrome 내장 Prompt API와 WebGPU 기반 Gemma 4를 갈아끼우는 이중 엔진 구조로 회화·작문 첨삭·AI 선생님을 제공하고, 사전·한자·획순처럼 정답이 정해진 정보는 AI가 아니라 공개 사전 데이터로 처리합니다.',
    points: [
      'Chrome Prompt API ↔ WebGPU Gemma 4 이중 엔진 — 브라우저마다 쓸 수 있는 쪽을 판정해 안내',
      '2GB 모델을 OPFS에 스트리밍 저장, 모바일에서 끊겨도 Range 요청으로 이어받기',
      '프롬프트 인젝션 4중 방어(입력 감싸기·값 정화·거절 규칙·출력 유출 감지)',
      'JMDict·KANJIDIC·KanjiVG 가공 데이터로 후리가나·한자 쓰기 채점·SRS 복습',
      '오프라인 PWA, 학습 기록은 IndexedDB에 저장하고 파일로 백업·복원',
    ],
    url: 'https://kimkyeseung-nihongo.vercel.app/',
    images: shots('nihongo', [
      'body-01',
      'body-02',
      'body-03',
      'body-04',
      'feature-01',
      'feature-02',
      'feature-03',
      'feature-04',
    ]),
    techs: ['React', 'TypeScript', 'WebGPU', 'LiteRT-LM', 'Zustand', 'IndexedDB'],
  },
  {
    title: 'HumBeat',
    kind: 'personal',
    category: 'Web App · Gen AI',
    summary: '흥얼거린 멜로디를 피아노롤로 다듬고, 그 멜로디를 따라가는 AI 트랙으로 만드는 서비스',
    metric: '서버 DB 없이 동작하는 AI 음악 생성',
    description:
      '"흥얼거리면 곡이 된다"는 컨셉의 AI Hum-to-Music 웹앱. 마이크로 부른 멜로디를 실시간 피치 감지로 노트로 바꾸고, 피아노롤에서 편집한 뒤 장르·분위기·악기·길이를 골라 그 멜로디를 따라가는 인스트루멘털 트랙을 생성합니다. 서버는 상태 없이 AI 호출과 사용량 제한만 맡고, 라이브러리·진행 중 작업·오디오 파일은 모두 브라우저 IndexedDB에 저장해 계정과 외부 DB 없이 동작합니다. 기획·디자인·개발 1인.',
    points: [
      'Web Audio API + Pitchy 60fps 피치 감지 → 노트 변환(75센트 히스테리시스로 흔들림과 반음 이동 구분), onset 간격 기반 BPM·Krumhansl-Kessler 키 감지',
      'Canvas 피아노롤 편집기 — 퀀타이즈, Tone.js 미리듣기, Undo/Redo, GPT-4o 멜로디 보정(스케일·리듬·도약 완화)',
      '편집한 노트를 WAV로 렌더링해 fal.ai Stable Audio 2.5 audio-to-audio 입력으로 사용, 멜로디 반영 강도 3단계 / 멜로디가 없으면 ACE-Step으로 대체',
      'fal.ai 큐 비동기 생성 — HMAC 서명 job token으로 서버 무상태 유지, 페이지를 떠나거나 새로고침해도 백그라운드에서 이어받아 라이브러리에 추가',
      '임시 URL인 생성 결과를 IndexedDB에 저장해 만료 후에도 재생·다운로드, 서버 저장 없이 URL에 메타데이터를 담는 공유 링크',
      'IP 기반 사용량 제한(Upstash Redis 공유, 장애 시 메모리), 입력 검증으로 서버가 임의 URL을 fetch하지 않도록 차단',
      '자연어 프롬프트를 EQ·컴프레서·리버브 파라미터로 바꿔 before/after 비교하는 AI 믹싱 PoC, next-intl 8개 언어, Vitest 단위 테스트 160여 개 + Playwright E2E',
    ],
    url: 'https://humbeat.kimkyeseung.com/',
    images: shots('humbeat', ['body-01', 'body-02', 'body-03', 'body-04']),
    techs: ['Next.js', 'TypeScript', 'Web Audio API', 'Tone.js', 'fal.ai', 'IndexedDB'],
  },
  {
    title: 'W2P 그래픽 에디터',
    kind: 'personal',
    category: 'Web App · Graphic Editor',
    summary: '명함·포스터·카드를 인쇄 규격에 맞춰 디자인하는 Web-to-Print 에디터',
    metric: '클리핑 마스크·레이어 병합까지 갖춘 그래픽 툴',
    description:
      'React/TypeScript 기반 W2P(Web-to-Print) 그래픽 에디터. 명함(90×50mm), 정사각 카드, A4 포스터 등 인쇄 규격을 mm 단위로 다루고, 재단선·안전 영역을 표시해 인쇄 사고 없이 디자인할 수 있게 합니다. 레이어 편집을 넘어 스냅 가이드·정렬/분포·클리핑 마스크·레이어 병합·자유 그리기까지 Figma/일러스트레이터 수준의 편집 경험을 목표로 만들었고, 저장은 Vercel Functions + Blob 기반 REST API로 배포 환경에서 바로 동작합니다.',
    points: [
      'Fabric.js 7 캔버스 위에 텍스트·이미지·도형·자유 그리기 레이어 편집 — 레이어 폴더, 드래그로 지정하는 클리핑 마스크, 회전·마스크까지 반영한 레이어 병합(래스터화)',
      'Fabric 6+의 center 기준점을 디자인 툴식 좌상단 좌표계로 변환하는 동기화 계층, 회전을 반영한 바운딩 박스 계산',
      '캔버스·오브젝트·사용자 가이드라인에 붙는 스마트 스냅, mm 눈금자, 다중 선택 정렬·균등 분포, 변형 반복(Cmd/Ctrl+D)',
      'Zustand 스토어를 레이어·선택·폴더·가이드·드로잉 등 9개 슬라이스로 분리하고, 문서 상태와 세션 UI 상태를 구분한 Undo/Redo 히스토리',
      '그라디언트·16종 블렌드 모드·그림자·테두리·반전 등 모든 레이어 공통 효과, 최근 사용 색상 팔레트',
      'Vercel Functions + Blob REST API로 프로젝트 저장/불러오기, 자동 복원·미저장 경고, 상품 목업 미리보기·PNG 내보내기',
      '모바일에서는 패널을 하단 탭으로 전환하고 두 손가락 핀치 줌 지원, Vitest 단위 테스트 90여 개',
    ],
    url: 'https://w2p-kappa.vercel.app',
    urlLabel: '라이브 데모',
    images: shots('w2p-editor', ['body-01', 'body-02', 'body-03', 'body-04', 'body-05']),
    techs: ['React', 'TypeScript', 'Fabric.js', 'Zustand', 'Vercel Functions'],
  },
  {
    title: 'Dice Art',
    kind: 'personal',
    category: 'Web App · Creative Tool',
    summary: '사진을 주사위 모자이크로 바꿔 직접 채워 완성하는 웹 앱',
    description:
      '업로드한 이미지를 주사위 모자이크 아트로 변환하는 웹 앱. 이미지를 그리드로 분석해 셀별 목표 주사위 값을 계산하고, Canvas 기반 드로잉으로 직접 채워 완성. 대형 그리드 섹션 네비게이션과 완성작 갤러리 제공.',
    images: shots('dice-art', ['body-01', 'body-02', 'body-03', 'body-04']),
    techs: ['Next.js', 'Canvas', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Lotto Simulator',
    kind: 'personal',
    category: 'Web App · Full Stack',
    summary: '로또 번호 생성·당첨 시뮬레이션·통계와 커뮤니티를 담은 풀스택 앱',
    description:
      '로또 번호 생성, 당첨 시뮬레이션, 통계 분석을 제공하는 웹 애플리케이션. TanStack Router 기반 SPA와 Hono API 서버, Neon PostgreSQL을 활용했으며 댓글/좋아요 커뮤니티 기능을 포함.',
    techs: ['React', 'TanStack Router', 'Hono', 'Drizzle ORM'],
  },
  {
    title: 'Mocktrader',
    kind: 'personal',
    category: 'Web App · Fintech',
    summary: '차트로 거래 흐름을 보고 PDF 리포트로 내보내는 모의 주식 트레이딩',
    description:
      '모의 주식 트레이딩 시뮬레이터. ECharts 기반 차트 시각화로 거래 흐름을 확인하고, 거래 내역을 PDF 리포트로 내보낼 수 있는 도메인 주도 설계 구조의 웹 앱.',
    images: shots('mocktrader', ['body-01', 'body-02', 'body-03', 'body-04']),
    techs: ['React', 'Zustand', 'ECharts', '@react-pdf/renderer'],
  },
]
