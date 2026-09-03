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

## 데이터 갱신 (자동 동기화)

`src/constants`가 유일한 원본(source of truth)입니다. `mcp-server/src/data/*.ts`는 손으로 유지보수하는 파일이 아니라, `scripts/sync-resume-data.ts`가 `src/constants`를 파싱해서 **자동 생성**하는 파일입니다(React/JSX 의존성 없는 순수 데이터로 변환). `npm run build`와 `npm run dev`는 항상 이 동기화를 먼저 실행하므로, 별도 스크립트를 신경 쓸 필요 없이:

1. 홈페이지 `src/constants`에서 이력서 내용을 수정
2. `cd mcp-server && npm run build`
3. Claude Desktop 재시작(또는 새 대화 시작)

만 하면 MCP 서버에도 최신 이력서 내용이 반영됩니다. 동기화만 다시 돌리고 싶다면 `npm run sync`를 실행하면 됩니다.

`mcp-server/src/data/*.ts` 파일은 생성 결과물이라 직접 수정해도 다음 `npm run sync`/`build`에서 덮어써집니다.
