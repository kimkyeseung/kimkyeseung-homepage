import { Experience } from '@/types'

export const EXPERIENCES: Experience[] = [
  {
    name: '프리랜서',
    role: 'Frontend Developer',
    descriptions: [
      {
        title: '프론트엔드 개발 전문 프리랜서',
        details: [
          'React, Next.js 기반 웹 애플리케이션 개발',
          '스타트업 및 중소기업 대상 기술 컨설팅',
        ],
      },
    ],
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    joinedAt: '2024.11',
    isOngoing: true,
    projects: [
      {
        title: 'AR 콘텐츠 제작 도구',
        information: 'Viswave - 이미지 기반 AR 콘텐츠 생성 웹 애플리케이션',
        descriptions: [
          'MindAR + Three.js + A-Frame 기반 AR 뷰어 개발',
          'FFmpeg/WebCodecs를 활용한 브라우저 내 비디오 처리',
          'NestJS + Prisma + Google Cloud Storage 기반 백엔드 구축',
          'QR 코드 생성 및 AR 콘텐츠 배포 시스템 구현',
        ],
        impact: '비개발자도 AR 콘텐츠 제작 가능한 노코드 플랫폼',
        techs: ['React', 'MindAR', 'Three.js', 'A-Frame', 'NestJS', 'Prisma', 'GCS'],
      },
      {
        title: 'VRM 아바타 모션 캡처 앱',
        information: 'Viswave - 웹캠 기반 실시간 VRM 아바타 제어 데스크톱 앱',
        descriptions: [
          'MediaPipe + Kalidokit으로 얼굴/신체 모션 인식 및 추적',
          '@pixiv/three-vrm을 활용한 VRM 아바타 렌더링',
          'Tauri 기반 크로스플랫폼 데스크톱 앱 개발',
          '커스텀 배경, 이펙트, 배너 등 미디어 관리 기능 구현',
        ],
        impact: '실시간 모션 캡처로 VTuber 방송 및 교육용 콘텐츠 제작 지원',
        techs: ['React', 'MediaPipe', 'Kalidokit', 'Three.js', 'Tauri', 'IndexedDB'],
      },
      {
        title: '인터랙티브 튜토리얼 제작 도구',
        information: 'Viswave - 터치스크린 교육용 튜토리얼 제작 앱',
        descriptions: [
          'Tauri + React 기반 데스크톱 앱 개발',
          '@dnd-kit을 활용한 드래그 앤 드롭 UI 구현',
          '튜토리얼 스텝별 인터랙션 정의 및 내보내기 기능',
          'Monorepo 구조로 Maker/Player 앱 통합 관리',
        ],
        impact: '비개발자도 인터랙티브 교육 콘텐츠 제작 가능',
        techs: ['React', 'Tauri', 'dnd-kit', 'TypeScript', 'Monorepo'],
      },
      {
        title: '클라우드/인프라 역량 강화',
        descriptions: [
          'AWS, Docker, Kubernetes 기반 인프라 학습 및 실습',
          '네트워크 기초 및 서버 운영 역량 확보',
          'DevOps 파이프라인 구축 경험',
        ],
        impact: '풀스택 개발자로서의 역량 확장',
      },
    ],
  },
  {
    name: 'DeSpread',
    role: 'Frontend Developer',
    descriptions: [
      {
        title: 'Web3 마케팅 및 온보딩 플랫폼 전문 기업',
        details: ['프론트엔드 개발 전담'],
      },
    ],
    techs: ['Next.js', 'Tailwind CSS', 'TanStack Query', 'GraphQL'],
    joinedAt: '2024.04',
    seperatedAt: '2024.10',
    url: 'https://despread.io/',
    projects: [
      {
        title: '3ridge 플랫폼 리뉴얼',
        information: 'Web3 온보딩 플랫폼 전면 리뉴얼',
        url: 'https://www.3ridge.io/',
        descriptions: [
          'Next.js App Router 및 Server Actions 활용한 성능 최적화',
          '다양한 블록체인 지갑 연결 및 인증 시스템 구현',
          '반응형 디자인으로 모바일/데스크탑 완벽 지원',
        ],
        impact: '페이지 로딩 속도 40% 개선, 월 5만+ 사용자 서비스',
      },
    ],
  },
  {
    name: '위버 (Weebur)',
    role: 'Frontend Developer',
    descriptions: [
      {
        title: 'B2B 기업 워크샵 매칭 플랫폼',
        details: ['제품팀 프론트엔드 개발 담당'],
      },
      {
        title: '팀 구성',
        details: ['팀 리더 1명', '기획자 1명', '프론트엔드 개발자 1명', '디자이너 1명'],
      },
      {
        title: '개발 문화',
        details: [
          '코드 리뷰 기반 품질 관리',
          '스프린트 방식의 애자일 개발',
          '기술 부채 체계적 관리',
        ],
      },
    ],
    techs: [
      'Next.js',
      'TypeScript',
      'Styled Components',
      'Storybook',
      'React Query',
      'Zustand',
      'Nx Monorepo',
    ],
    joinedAt: '2022.09',
    seperatedAt: '2023.12',
    url: 'https://www.weebur.com/',
    projects: [
      {
        title: '디자인 시스템 구축',
        descriptions: [
          'Storybook 기반 컴포넌트 문서화 및 UI 테스트 환경 구축',
          '재사용 가능한 공통 컴포넌트 라이브러리 개발',
          '디자이너와 협업하여 일관된 디자인 토큰 및 사용 규칙 정립',
        ],
        impact: '50+ 컴포넌트 개발, 신규 페이지 개발 시간 40% 단축',
      },
      {
        title: '위버 서비스 런칭',
        descriptions: [
          'Nx 모노레포로 서비스/관리자 사이트 통합 관리',
          'Formik + Yup 기반 복잡한 폼 상태 관리 및 유효성 검증',
          'React Query와 Zustand를 활용한 서버/클라이언트 상태 분리',
        ],
        impact: '3개월 내 MVP 런칭, 코드 재사용률 70% 달성',
      },
      {
        title: '모바일 UI 최적화',
        descriptions: [
          'CSS Media Query 및 커스텀 훅을 활용한 반응형 구현',
          '크로스 브라우징 및 다양한 디바이스 호환성 확보',
          '모바일 전용 컴포넌트 컨벤션 정립',
        ],
        impact: '모바일 전환율 25% 향상',
      },
      {
        title: '실시간 채팅 및 커머스 기능',
        descriptions: [
          'Socket.io 기반 실시간 채팅 기능 구현',
          '토스페이먼츠 연동을 통한 결제 시스템 구축',
          '워크샵 예약 및 주문 프로세스 개발',
        ],
        impact: '구매자-판매자 간 평균 응답 시간 80% 단축',
      },
      {
        title: 'PDF 다운로드 기능',
        descriptions: [
          'react-pdf를 활용한 워크샵 상세 정보 PDF 생성',
          'B2B 고객의 내부 보고용 자료 자동 생성',
        ],
        impact: '월 200+ 건 PDF 생성, 운영 비용 절감',
      },
    ],
  },
  {
    name: '아토머스 (Atomus)',
    role: 'Frontend Developer',
    descriptions: [
      {
        title: '마인드카페 - 심리상담 & 마음치유 플랫폼',
        details: ['전문가(상담사/코치)용 웹 애플리케이션 개발 담당'],
      },
    ],
    url: 'https://www.mindcafe.co.kr/',
    techs: ['Vue.js', 'Vuex', 'Python', 'Flask', 'Next.js', 'Docker'],
    joinedAt: '2021.01',
    seperatedAt: '2022.09',
    projects: [
      {
        title: '전문가용 페이지 리뉴얼',
        information: '상담사/코치가 고객과 음성통화 및 채팅하는 웹 애플리케이션',
        descriptions: [
          'Vuetify 기반 반응형 UI 템플릿 구축',
          '레거시 코드 리팩토링 및 성능 최적화',
          '지속적인 기능 개발 및 유지보수',
        ],
        impact: '1,000+ 전문가 사용, 페이지 로딩 속도 50% 개선',
      },
      {
        title: 'Sendbird Chat/Call 도입',
        descriptions: [
          '기존 폴링 방식에서 실시간 메시징으로 전환',
          'Webhook을 활용한 기존 채팅 데이터 마이그레이션',
          '전문가가 사용자 입력 중인 내용을 실시간 확인하는 기능 구현',
        ],
        impact: '메시지 전달 지연 5초 → 0.1초로 개선',
      },
      {
        title: '통화/채팅 품질 개선 TF',
        descriptions: [
          'MediaDevices API를 활용한 마이크/카메라 권한 관리 UX 개선',
          '네트워크 상태(WiFi/셀룰러) 모니터링 및 표시 기능',
          '통화 종료 시 예외 상황 처리 및 사용자 안내 UX 개발',
        ],
        impact: '보이스테라피 통화 성공률 72% → 99%로 개선',
      },
      {
        title: '관리자 페이지 보일러플레이트',
        descriptions: [
          '페이지별 필드, 컴포넌트, 레이아웃 모듈화',
          '공용 컴포넌트 제작 및 사용법 문서화',
        ],
        impact: '관리자 페이지 개발 속도 60% 향상',
      },
      {
        title: 'RESTful API 개발',
        descriptions: [
          'Python/Flask 기반 API 서버 개발 참여',
          'MySQL + SQLAlchemy를 활용한 데이터베이스 관리',
          'Docker 기반 개발 환경 구축',
        ],
        impact: '20+ API 엔드포인트 개발, 백엔드 협업 역량 강화',
      },
    ],
  },
  {
    name: '부크크 (Bookk)',
    role: 'Full-Stack Developer',
    url: 'https://bookk.co.kr/',
    descriptions: [
      {
        title: 'POD(Print-on-Demand) 기반 자가출판 플랫폼',
        details: ['풀스택 개발자 2인 체제'],
      },
    ],
    joinedAt: '2019.06',
    seperatedAt: '2020.09',
    techs: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    projects: [
      {
        title: '서비스 페이지 리뉴얼',
        descriptions: [
          'WYSIWYG 에디터 기반 커뮤니티 게시판 구현',
          '반응형 웹 디자인으로 모바일 지원',
          '도서 제작, 작가 서비스, 마이페이지 등 핵심 기능 개발',
          '부트페이 연동 결제 시스템 구축',
        ],
        impact: '월 1만+ 사용자, 전환율 15% 향상',
      },
      {
        title: '관리자 페이지 리뉴얼',
        descriptions: [
          '도서 심사 상태 관리 기능 개발',
          '회원 및 게시물 관리 시스템 구축',
          '판매/수익 정산 관리 기능 개발',
        ],
        impact: '운영팀 일일 처리량 2배 향상',
      },
      {
        title: 'RESTful API 및 파일 서버 개발',
        descriptions: [
          'MongoDB/Mongoose 기반 데이터베이스 설계 및 관리',
          'JWT/Passport를 활용한 인증 및 권한 관리',
          'Multer/Sharp를 활용한 이미지 업로드 및 리사이징',
        ],
        impact: '50+ API 엔드포인트, 일 10,000+ 요청 처리',
      },
    ],
  },
  {
    name: 'IGAWorks',
    role: 'Frontend Developer',
    url: 'https://www.igaworks.com/',
    descriptions: [
      {
        title: '모바일 데이터 플랫폼 및 광고 기술 기업',
        details: ['adbrix 팀 소속'],
      },
    ],
    joinedAt: '2019.01',
    seperatedAt: '2019.04',
    techs: ['Vue.js', 'Vuex', 'TypeScript', 'C#', 'ASP.NET'],
    projects: [
      {
        title: '애드브릭스 리마스터',
        descriptions: [
          '사용자별 컬럼 설정 저장 기능 개발 (페이지 새로고침 후에도 유지)',
          '외부 모듈 컴포넌트 커스터마이징 및 재사용성 개선',
        ],
        impact: '사용자 맞춤 설정으로 분석 업무 효율 향상',
      },
    ],
  },
]
