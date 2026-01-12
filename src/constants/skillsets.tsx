import { Skill } from '@/types'
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiStyledcomponents,
  SiTailwindcss,
  SiJest,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiStorybook,
  SiSocketdotio,
  SiWebrtc,
  SiNginx,
} from '@icons-pack/react-simple-icons'

const frontEnds: Skill[] = [
  {
    name: 'React / Redux',
    Icon: <SiReact color="default" className="simple-icon" />,
    description:
      '리액트(React)는 페이스북에서 개발된 사용자 인터페이스(UI)를 구축하기 위한 자바스크립트 라이브러리로, 컴포넌트 기반의 접근 방식과 가상 돔(Virtual DOM)을 활용하여 동적이고 효율적인 웹 애플리케이션을 구축할 수 있도록 지원합니다.',
  },
  {
    name: 'Next.js',
    Icon: <SiNextdotjs color="default" className="simple-icon" />,
    description:
      'Next.js는 React 기반의 서버사이드 렌더링 및 정적 웹 애플리케이션을 구축하기 위한 프레임워크로, 개발자들이 쉽게 확장 가능하고 SEO에 최적화된 웹 애플리케이션을 만들 수 있도록 지원합니다.',
  },
  {
    name: 'Vue.js / Vuex',
    Icon: <SiVuedotjs color="default" className="simple-icon" />,
    description:
      'Vue.js는 사용자 인터페이스를 구축하기 위한 프로그레시브 프레임워크로, 가볍고 유연한 구조를 갖추어 개발자들이 웹 애플리케이션을 빠르게 구축하고 유지보수할 수 있도록 도와줍니다.',
  },
  {
    name: 'Type Script',
    Icon: <SiTypescript color="default" className="simple-icon" />,
    description:
      'TypeScript는 Microsoft에서 개발한 오픈 소스 프로그래밍 언어로, JavaScript에 정적 타입을 추가하여 코드의 가독성과 유지보수성을 향상시키고 개발자의 실수를 줄여주는 장점을 제공합니다.',
  },
  {
    name: 'Java Script / ES6+',
    Icon: <SiJavascript color="default" className="simple-icon" />,
    description:
      'JavaScript는 웹 페이지를 동적으로 만들기 위해 사용되는 프로그래밍 언어로, 클라이언트 측 웹 개발에서 가장 널리 사용되며, 최근에는 서버 측 개발에서도 사용되고 있습니다.',
  },
  {
    name: 'Storybook',
    Icon: <SiStorybook color="default" className="simple-icon" />,
    description:
      'Storybook은 React, Vue, Angular 등의 프론트엔드 프레임워크를 위한 UI 컴포넌트 개발 및 문서화 도구로, 컴포넌트를 시각적으로 테스트하고 문서화하여 개발자들이 쉽게 사용할 수 있도록 돕습니다.',
  },
  {
    name: 'Jest',
    Icon: <SiJest color="default" className="simple-icon" />,
    description:
      'Jest는 페이스북에서 개발된 자바스크립트 테스팅 프레임워크로, 간편한 구성과 빠른 실행 속도를 제공하여 효율적인 테스트 작성을 가능케 합니다.',
  },
  {
    name: 'Styled Components',
    Icon: <SiStyledcomponents color="default" className="simple-icon" />,
    description:
      'Styled Components는 React 애플리케이션에서 CSS를 작성하는 데 사용되는 라이브러리로, JavaScript 파일 안에 CSS를 작성하여 컴포넌트 스타일을 관리할 수 있게 해줍니다.',
  },
  {
    name: 'Tailwind CSS',
    Icon: <SiTailwindcss color="default" className="simple-icon" />,
    description:
      'Tailwind CSS는 클래스 기반의 CSS 프레임워크로, HTML 클래스에 직접 스타일을 적용하여 웹 페이지를 디자인하는데 사용되며, 커스터마이징이 용이하고 반응형 웹 디자인에 적합합니다.',
  },
]

const backEnds = [
  {
    name: 'Node.js',
    Icon: <SiNodedotjs color="default" className="simple-icon" />,
    description:
      'Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임으로, 서버 사이드 애플리케이션을 구축하는 데 사용되며 비동기 이벤트 기반의 처리 방식을 지원합니다.',
  },
  {
    name: 'Express',
    Icon: <SiExpress color="default" className="simple-icon" />,
    description:
      'Express는 Node.js를 위한 빠르고 유연한 웹 애플리케이션 프레임워크로, 간단한 API부터 복잡한 웹 애플리케이션까지 다양한 형태의 서버를 만들 수 있습니다.',
  },
  {
    name: 'Python',
    Icon: <SiPython color="default" className="simple-icon" />,
    description:
      'Python은 간결하고 가독성이 높은 문법을 갖춘 고수준 프로그래밍 언어로, 다양한 분야에서 활용되며 특히 데이터 분석, 인공지능, 웹 개발 등에 널리 사용됩니다.',
  },
  {
    name: 'Flask',
    Icon: <SiFlask color="default" className="simple-icon" />,
    description:
      'Flask는 Python으로 웹 애플리케이션을 개발하기 위한 마이크로 웹 프레임워크로, 가볍고 확장성이 높아 간단한 API부터 복잡한 웹 애플리케이션까지 다양한 형태의 웹 서비스를 구축할 수 있습니다.',
  },
  {
    name: 'Nginx',
    Icon: <SiNginx color="default" className="simple-icon" />,
    description:
      'Nginx는 웹 서버로, 높은 성능과 안정성을 제공하며 reverse proxy, load balancer, HTTP cache 등의 기능을 갖추고 있어 웹 서비스의 성능을 향상시키는 데 사용됩니다.',
  },
  {
    name: 'MongoDB',
    Icon: <SiMongodb color="default" className="simple-icon" />,
    description:
      'MongoDB는 문서 지향적 NoSQL 데이터베이스로, 유연하고 확장 가능한 데이터 모델을 제공하여 다양한 형태의 데이터를 저장하고 조회할 수 있습니다.',
  },
  {
    name: 'Mongoose',
    Icon: <SiMongoose color="default" className="simple-icon" />,
    description:
      'Mongoose는 Node.js를 위한 MongoDB ODM(Object Data Modeling) 라이브러리로, MongoDB와의 상호작용을 간편하게 만들어주고 데이터 모델링을 지원하여 개발을 용이하게 합니다.',
  },
  {
    name: 'MySQL',
    Icon: <SiMysql color="default" className="simple-icon" />,
    description:
      'MySQL은 오픈 소스의 관계형 데이터베이스 관리 시스템(RDBMS)으로, 다양한 응용 프로그램과 웹 애플리케이션에서 데이터를 저장, 관리 및 조회하기 위해 사용됩니다.',
  },
]

const devOps = [
  {
    name: 'Docker',
    Icon: <SiDocker color="default" className="simple-icon" />,
    description:
      'Docker는 응용 프로그램을 컨테이너화하여 효율적으로 배포, 관리 및 실행할 수 있는 오픈 소스 플랫폼입니다.',
  },
  {
    name: 'Github Actions',
    Icon: <SiGithubactions color="default" className="simple-icon" />,
    description:
      'GitHub Actions는 GitHub에서 호스팅되는 지속적 통합 및 지속적 전달 서비스로, 코드 변경 사항에 따라 자동으로 빌드, 테스트 및 배포 작업을 수행할 수 있습니다.',
  },
  {
    name: 'Socket IO',
    Icon: <SiSocketdotio color="default" className="simple-icon" />,
    description:
      'Socket.IO는 실시간 웹 기능을 구현하기 위한 JavaScript 라이브러리로, 양방향 통신을 위한 WebSocket을 기반으로 하며, 실시간 데이터 전송을 간편하게 구현할 수 있습니다.',
  },
  {
    name: 'WebRTC',
    Icon: <SiWebrtc color="default" className="simple-icon" />,
    description:
      'WebRTC는 브라우저 간에 플러그인 없이 실시간 음성, 영상 통신 및 데이터 공유를 가능케 하는 오픈 소스 프로젝트이며, 웹 및 모바일 애플리케이션에서 활용됩니다.',
  },
]

export const skillSets = {
  frontEnds,
  backEnds,
  devOps,
}
