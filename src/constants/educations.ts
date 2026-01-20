import { Education } from '@/types'

export const EDUCATIONS: Education[] = [
  {
    name: '클라우드 활용 네트워크 엔지니어 양성과정',
    joinedAt: '2024.12',
    seperatedAt: '2025.04',
    isOngoing: false,
    descriptions: [{ title: '에스넷그룹 클라우드 활용 네트워크 엔지니어 양성과정' }],
    curriculums: [
      {
        title: '인프라 기초',
        descriptions: [
          '리눅스 기반 서버 운영 및 사용자/서비스 관리',
          'IP, 서브넷팅, 라우팅 등 네트워크 기초 이론 및 실습',
          '가상화 소프트웨어를 활용한 서버 환경 구성',
        ],
      },
      {
        title: '클라우드 시스템 구축 및 자동화',
        descriptions: [
          'Ansible을 활용한 서버 설정 자동화 및 IaC 기초',
          'AWS 기반 클라우드 환경 구축과 운영',
          '쉘 스크립트를 활용한 시스템 관리 자동화',
        ],
      },
      {
        title: '컨테이너 및 오케스트레이션',
        descriptions: [
          'Docker를 활용한 애플리케이션 컨테이너화',
          'Kubernetes 기반 컨테이너 오케스트레이션',
          '마이크로서비스 아키텍처 기본 개념 이해',
        ],
      },
    ],
  },
  {
    name: '바닐라코딩 부트캠프',
    joinedAt: '2018.05',
    seperatedAt: '2018.11',
    descriptions: [{ title: '바닐라코딩 프론트엔드 부트캠프 4기 수료' }],
    url: 'https://www.vanillacoding.co/',
    curriculums: [
      {
        title: 'JavaScript 기본 및 심화',
        descriptions: [
          '라이브러리 없이 Pure JavaScript로 개발',
          '프로토타입 상속, 클로저, 비동기 프로그래밍',
          '객체 지향 프로그래밍 및 디자인 패턴',
        ],
      },
      {
        title: '자료구조와 알고리즘',
        descriptions: [
          'Hash Table, Linked List, Graph, Tree, BST 등 자료구조 구현',
          '알고리즘 및 시간복잡도(Big-O) 학습',
        ],
      },
      {
        title: '프레임워크 및 백엔드',
        descriptions: [
          'React, Redux, React Router를 활용한 SPA 개발',
          'Node.js, Express, MongoDB를 활용한 백엔드 기초',
        ],
      },
    ],
  },
  {
    name: 'UI/UX 웹 디자이너 교육',
    joinedAt: '2016.08',
    seperatedAt: '2017.01',
    descriptions: [{ title: 'UI/UX 기반 반응형 웹디자이너 교육 수료' }],
    curriculums: [
      {
        title: '웹 디자인 기초',
        descriptions: [
          '포토샵 기본 스킬 및 와이어프레임 제작',
          'HTML5 시맨틱 마크업 및 CSS 반응형 디자인',
          '미디어 쿼리를 활용한 반응형 웹 설계',
        ],
      },
      {
        title: '웹 기획 및 UX',
        descriptions: [
          '사용자 리서치 및 페르소나 작성',
          '웹 표준, 사이트 구조 설계 및 정보 구조 학습',
        ],
      },
      {
        title: '포트폴리오 제작',
        descriptions: [
          '실제 프로젝트를 통한 웹 기획 경험',
          '사이트 리뉴얼 디자인 시안 발표',
        ],
      },
    ],
  },
]
