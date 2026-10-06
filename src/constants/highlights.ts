export interface Highlight {
  /** 성과의 종류 — 카드 위 작은 라벨 */
  kind: string
  title: string
  /** 어디서 낸 성과인지 */
  source: string
}

// 이력 섹션의 Highlights 카드. 숫자는 experiences.ts의 impact와 같은 값을 쓸 것.
export const HIGHLIGHTS: Highlight[] = [
  { kind: 'Impact', title: '통화 성공률 72% → 99%', source: '마인드카페 보이스테라피' },
  { kind: 'Ship', title: 'AR 포토부스 매장 상용 배포', source: 'AR-Pic 키오스크 (Tauri · MediaPipe)' },
  { kind: 'AI', title: '서버 없는 온디바이스 AI 앱', source: '김계승 일본어 (WebGPU · Gemma 4)' },
  { kind: 'Performance', title: '페이지 로딩 속도 40% 개선', source: '3ridge 플랫폼 리뉴얼' },
  { kind: 'System', title: '50+ 컴포넌트 디자인 시스템', source: '위버 Storybook 기반' },
  { kind: 'Real-time', title: '메시지 지연 5초 → 0.1초', source: '마인드카페 Sendbird 도입' },
]
