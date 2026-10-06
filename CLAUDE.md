# kimkyeseung-homepage

개인 이력서/포트폴리오 웹사이트

## 기술 스택

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **PDF Generation**: @react-pdf/renderer (lazy loading)
- **Icons**: react-icons, @icons-pack/react-simple-icons

## 프로젝트 구조

```
src/
├── components/       # React 컴포넌트
│   ├── pdf/         # PDF 관련 컴포넌트 (ResumePdf, styles)
│   ├── Dialog.tsx   # 공통 다이얼로그 컴포넌트
│   └── ...Section.tsx  # 각 섹션별 컴포넌트
├── constants/       # 상수 데이터 (경력, 교육, 스킬 등)
├── types/           # TypeScript 타입 정의
├── assets/          # 정적 자산
├── App.tsx          # 메인 앱 컴포넌트
├── main.tsx         # 엔트리 포인트
└── index.css        # 글로벌 스타일 (Tailwind 설정 포함)
```

## 주요 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 실행
```

## 주요 기능

- 반응형 이력서 웹페이지
- PDF 다운로드 (react-pdf 기반, 코드 스플리팅 적용)
- 프로젝트 카드 → 상세 다이얼로그 (실무/개인 프로젝트 그룹 분리)
- 이력 섹션 "전체 경력 보기" 펼치기
- 연락처의 의뢰/채용 제안별 메일 템플릿
- 접근성 지원 (WCAG 준수, 키보드 네비게이션)
- 인쇄 최적화 스타일

## 데이터 수정

이력서 내용 수정 시 `src/constants/` 디렉토리의 파일 수정:
- `projects.ts` - 프로젝트 카드·상세 (`kind`로 실무/개인 구분, `images`에 스크린샷 경로 — 첫 장이 카드 썸네일, 파일은 `public/projects/<slug>/`)
- `highlights.ts` - 이력 섹션 Highlights 카드 (숫자는 `experiences.ts`의 impact와 맞출 것)
- `experiences.ts` - 경력 사항
- `educations.ts` - 교육 이력
- `skills.ts` - 기술 스택
- `summary.ts` - 소개 문구(PDF About Me, 4개 — PDF가 2열이라 짝수 유지)
- `basic.ts` - 기본 프로필 정보, 연락처, `AVAILABILITY`(구직/의뢰 상태 문구)

연차는 `career.ts`의 `CAREER_YEARS`가 경력 데이터에서 계산한다 — 문구에 "N년차"를 직접 쓰지 말 것.
`index.html`의 메타 태그는 계산할 수 없으니 연차를 넣지 않는다.

## 스타일 가이드

- Tailwind CSS 4 사용 (CSS-first 설정)
- 커스텀 컴포넌트 클래스: `.card`, `.section-title`, `.skill-tag`
- 애니메이션: `.animate-fade-in`, `.animate-scale-in`
- 컬러 팔레트: CSS 변수로 정의 (`--color-primary`, `--color-accent` 등)
