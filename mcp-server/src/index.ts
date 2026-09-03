#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'
import {
  PROFILE,
  EXPERIENCES,
  EDUCATIONS,
  KEY_SKILLS,
  SKILLS,
  SUMMARIES,
  FEATURED_PROJECTS,
} from './data/index.js'
import { searchResume } from './search.js'

const server = new McpServer({
  name: 'kimkyeseung-resume-mcp',
  version: '0.1.0',
})

function json(data: unknown) {
  return { content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }] }
}

// ---- Resources: raw sections, for clients that want to load full context ----

server.registerResource(
  'profile',
  'resume://profile',
  {
    title: '기본 프로필',
    description: '이름, 연락처, 자기소개 등 기본 프로필 정보',
    mimeType: 'application/json',
  },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: 'application/json', text: JSON.stringify(PROFILE, null, 2) }],
  }),
)

server.registerResource(
  'experiences',
  'resume://experiences',
  {
    title: '경력 사항',
    description: '전체 경력 및 프로젝트 상세',
    mimeType: 'application/json',
  },
  async (uri) => ({
    contents: [
      { uri: uri.href, mimeType: 'application/json', text: JSON.stringify(EXPERIENCES, null, 2) },
    ],
  }),
)

server.registerResource(
  'educations',
  'resume://educations',
  {
    title: '교육 이력',
    description: '학력 및 부트캠프/교육과정 이력',
    mimeType: 'application/json',
  },
  async (uri) => ({
    contents: [
      { uri: uri.href, mimeType: 'application/json', text: JSON.stringify(EDUCATIONS, null, 2) },
    ],
  }),
)

server.registerResource(
  'skills',
  'resume://skills',
  {
    title: '기술 스택',
    description: '프론트엔드/백엔드/데브옵스 기술 스택 상세',
    mimeType: 'application/json',
  },
  async (uri) => ({
    contents: [
      {
        uri: uri.href,
        mimeType: 'application/json',
        text: JSON.stringify({ keySkills: KEY_SKILLS, skills: SKILLS }, null, 2),
      },
    ],
  }),
)

server.registerResource(
  'summaries',
  'resume://summaries',
  {
    title: 'About Me 요약',
    description: '핵심 강점 요약 (About Me 섹션)',
    mimeType: 'application/json',
  },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: 'application/json', text: JSON.stringify(SUMMARIES, null, 2) }],
  }),
)

server.registerResource(
  'projects',
  'resume://projects',
  {
    title: '주요 프로젝트',
    description: '포트폴리오에 소개된 주요 프로젝트 목록',
    mimeType: 'application/json',
  },
  async (uri) => ({
    contents: [
      { uri: uri.href, mimeType: 'application/json', text: JSON.stringify(FEATURED_PROJECTS, null, 2) },
    ],
  }),
)

// ---- Tools: queryable access for agents ----

server.registerTool(
  'get_profile',
  {
    title: '프로필 조회',
    description: '이름, 연락처, 경력 연차, 자기소개 등 기본 프로필 정보를 반환합니다.',
    inputSchema: {},
  },
  async () => json(PROFILE),
)

server.registerTool(
  'list_experiences',
  {
    title: '경력 목록 조회',
    description:
      '전체 경력 목록을 반환합니다. company 또는 tech로 필터링할 수 있습니다. company는 회사명 부분 일치, tech는 사용 기술 부분 일치로 필터링됩니다.',
    inputSchema: {
      company: z.string().optional().describe('회사명으로 필터링 (부분 일치, 대소문자 무시)'),
      tech: z.string().optional().describe('사용 기술로 필터링 (부분 일치, 대소문자 무시)'),
    },
  },
  async ({ company, tech }) => {
    let results = EXPERIENCES
    if (company) {
      const q = company.toLowerCase()
      results = results.filter((e) => e.name.toLowerCase().includes(q))
    }
    if (tech) {
      const q = tech.toLowerCase()
      results = results.filter((e) => e.techs.some((t) => t.toLowerCase().includes(q)))
    }
    return json(results)
  },
)

server.registerTool(
  'list_educations',
  {
    title: '교육 이력 조회',
    description: '학력 및 부트캠프/교육과정 이력을 반환합니다.',
    inputSchema: {},
  },
  async () => json(EDUCATIONS),
)

server.registerTool(
  'list_skills',
  {
    title: '기술 스택 조회',
    description:
      '보유 기술 스택 목록을 반환합니다. category로 frontend/backend/devOps 필터링이 가능합니다.',
    inputSchema: {
      category: z.enum(['frontend', 'backend', 'devOps']).optional().describe('기술 카테고리 필터'),
    },
  },
  async ({ category }) => {
    const results = category ? SKILLS.filter((s) => s.category === category) : SKILLS
    return json(results)
  },
)

server.registerTool(
  'list_key_skills',
  {
    title: '핵심 기술 키워드 조회',
    description: '이력서 상단에 노출되는 핵심 기술 키워드 목록을 반환합니다.',
    inputSchema: {},
  },
  async () => json(KEY_SKILLS),
)

server.registerTool(
  'list_summaries',
  {
    title: '핵심 강점 요약 조회',
    description: 'About Me 섹션의 핵심 강점 요약 목록을 반환합니다.',
    inputSchema: {},
  },
  async () => json(SUMMARIES),
)

server.registerTool(
  'list_projects',
  {
    title: '주요 프로젝트 조회',
    description: '포트폴리오에 소개된 주요 프로젝트 목록을 반환합니다.',
    inputSchema: {},
  },
  async () => json(FEATURED_PROJECTS),
)

server.registerTool(
  'search_resume',
  {
    title: '이력서 전체 검색',
    description:
      '프로필, 경력, 교육, 기술 스택, 요약, 프로젝트 전 영역에서 키워드를 검색하여 관련 섹션과 스니펫을 반환합니다.',
    inputSchema: {
      query: z.string().min(1).describe('검색어 (한글/영문 키워드, 회사명, 기술명 등)'),
    },
  },
  async ({ query }) => json(searchResume(query)),
)

const transport = new StdioServerTransport()
await server.connect(transport)
