# kimkyeseung-resume-mcp

김계승의 이력서/포트폴리오 데이터(`src/constants`)를 AI 에이전트가 참고할 수 있도록 제공하는 [MCP](https://modelcontextprotocol.io) 서버입니다. stdio 트랜스포트로 동작하며, Claude Desktop, Claude Code 등 MCP 클라이언트에 연결해 사용할 수 있습니다.

## 설치 및 빌드

```bash
cd mcp-server
npm install
npm run build
```

## 실행

```bash
npm start
# 또는 개발 중에는
npm run dev
```

## MCP 클라이언트 연결 (예: Claude Desktop)

`claude_desktop_config.json`에 아래와 같이 추가합니다.

```json
{
  "mcpServers": {
    "kimkyeseung-resume": {
      "command": "node",
      "args": ["/absolute/path/to/kimkyeseung-homepage/mcp-server/dist/index.js"]
    }
  }
}
```

## 제공 기능

### Tools

| 이름 | 설명 |
| --- | --- |
| `get_profile` | 이름, 연락처, 경력 연차, 자기소개 등 기본 프로필 조회 |
| `list_experiences` | 경력 목록 조회 (`company`, `tech`로 필터링 가능) |
| `list_educations` | 교육 이력(학력, 부트캠프) 조회 |
| `list_skills` | 기술 스택 조회 (`category`: `frontend` / `backend` / `devOps`) |
| `list_key_skills` | 핵심 기술 키워드 목록 조회 |
| `list_summaries` | About Me 핵심 강점 요약 조회 |
| `list_projects` | 주요 프로젝트 목록 조회 |
| `search_resume` | 이력서 전 영역(프로필/경력/교육/스킬/요약/프로젝트) 키워드 검색 |

### Resources

전체 섹션을 한 번에 읽어야 하는 클라이언트를 위해 원본 데이터를 그대로 제공합니다.

- `resume://profile`
- `resume://experiences`
- `resume://educations`
- `resume://skills`
- `resume://summaries`
- `resume://projects`

## 데이터 갱신

이 서버는 웹사이트(`src/constants`)의 이력서 데이터를 `src/data/*.ts`에 별도로 보관합니다(React/JSX 의존성 없는 순수 데이터). 홈페이지의 `src/constants` 내용을 수정했다면, 동일한 변경 사항을 `mcp-server/src/data`에도 반영한 뒤 `npm run build`로 다시 빌드하세요.
