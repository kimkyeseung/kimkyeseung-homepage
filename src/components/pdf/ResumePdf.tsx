import { Document, Page, View, Text, Link } from '@react-pdf/renderer'
import {
  NAME_EN,
  TITLE,
  EMAIL,
  PHONE_NUMBER,
  GITHUB_URL,
  BEHANCE_URL,
  INTRODUCTION,
  EXPERIENCES,
  EDUCATIONS,
  SUMMARIES,
  KEY_SKILLS,
} from '@/constants'
import { styles } from './styles'

export function ResumePdf() {
  // 주요 경력 3개 (프리랜서, DeSpread, 위버)
  const mainExperiences = EXPERIENCES.slice(0, 3)
  // 이전 경력 (아토머스, 부크크, IGAWorks) - 간략히
  const previousExperiences = EXPERIENCES.slice(3)

  return (
    <Document
      title={`${NAME_EN} - 이력서`}
      author={NAME_EN}
      subject="프론트엔드 개발자 이력서"
      keywords="프론트엔드, React, Next.js, TypeScript, 개발자"
    >
      {/* Page 1: Profile, About Me, Skills, Education */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerMain}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>{NAME_EN}</Text>
              <Text style={styles.title}>{TITLE}</Text>
              <Text style={styles.subtitle}>6년차 프론트엔드 개발자</Text>
              <Text style={styles.introduction}>{INTRODUCTION}</Text>
            </View>
            <View style={styles.headerRight}>
              <Link src={`mailto:${EMAIL}`} style={styles.contactItem}>
                <Text style={styles.contactLink}>{EMAIL}</Text>
              </Link>
              <Text style={styles.contactItem}>{PHONE_NUMBER}</Text>
              <Link src={GITHUB_URL} style={styles.contactItem}>
                <Text style={styles.contactLink}>GitHub</Text>
              </Link>
              <Link src={BEHANCE_URL} style={styles.contactItem}>
                <Text style={styles.contactLink}>Behance</Text>
              </Link>
            </View>
          </View>
        </View>

        {/* About Me - Full Width */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <View style={styles.summaryGrid}>
            {SUMMARIES.map((summary, index) => (
              <View key={index} style={styles.summaryItem}>
                <Text style={styles.summaryTitle}>{summary.title}</Text>
                <Text style={styles.summaryDesc}>{summary.description}</Text>
                {summary.keywords && (
                  <View style={styles.summaryKeywords}>
                    {summary.keywords.slice(0, 3).map((keyword, i) => (
                      <Text key={i} style={styles.summaryKeyword}>
                        {keyword}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Two Column Layout for Skills and Education */}
        <View style={styles.twoColumn}>
          {/* Left Column */}
          <View style={styles.leftColumnWide}>
            {/* Key Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Key Skills</Text>
              <View style={styles.keySkills}>
                {KEY_SKILLS.map((skill, index) => (
                  <Text key={index} style={styles.keySkillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>

            {/* Tech Stack */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tech Stack</Text>
              <View style={styles.techStackRow}>
                <View style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>Frontend</Text>
                  <View style={styles.skillTags}>
                    {['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'].map(
                      (skill, index) => (
                        <Text key={index} style={styles.skillTag}>
                          {skill}
                        </Text>
                      )
                    )}
                  </View>
                </View>
                <View style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>Backend</Text>
                  <View style={styles.skillTags}>
                    {['Node.js', 'Express', 'Python', 'MongoDB', 'MySQL'].map(
                      (skill, index) => (
                        <Text key={index} style={styles.skillTag}>
                          {skill}
                        </Text>
                      )
                    )}
                  </View>
                </View>
                <View style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>DevOps</Text>
                  <View style={styles.skillTags}>
                    {['Git', 'Docker', 'AWS', 'Storybook'].map(
                      (skill, index) => (
                        <Text key={index} style={styles.skillTag}>
                          {skill}
                        </Text>
                      )
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumnNarrow}>
            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {EDUCATIONS.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.educationName}>{edu.name}</Text>
                  <Text style={styles.educationPeriod}>
                    {edu.joinedAt} - {edu.isOngoing ? '진행 중' : edu.seperatedAt}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          © 2025 {NAME_EN} • Page 1/2
        </Text>
      </Page>

      {/* Page 2: Work Experience - Full A4 */}
      <Page size="A4" style={styles.pageFlex} wrap={false}>
        {/* Page 2 Header */}
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeaderName}>{NAME_EN}</Text>
          <Text style={styles.pageHeaderTitle}>Work Experience</Text>
        </View>

        {/* Content Wrapper - Fills remaining space */}
        <View style={styles.pageContent}>
          {/* Main Experiences Section */}
          <View style={styles.mainExperiencesSection}>
            {mainExperiences.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <View style={styles.experienceHeaderLeft}>
                    <Text style={styles.experienceName}>{exp.name}</Text>
                    <Text style={styles.experienceRole}>{exp.role}</Text>
                  </View>
                  <Text style={styles.experiencePeriod}>
                    {exp.joinedAt} - {exp.isOngoing ? '현재' : exp.seperatedAt}
                  </Text>
                </View>

                {exp.techs.length > 0 && (
                  <View style={styles.experienceTechs}>
                    {exp.techs.slice(0, 6).map((tech, i) => (
                      <Text key={i} style={styles.techTag}>{tech}</Text>
                    ))}
                  </View>
                )}

                {exp.projects.length > 0 && (
                  <View style={styles.projectsContainer}>
                    {exp.projects.slice(0, 4).map((project, i) => (
                      <View key={i} style={styles.project}>
                        <Text style={styles.projectTitle}>{project.title}</Text>
                        {project.impact && (
                          <Text style={styles.projectImpact}>✓ {project.impact}</Text>
                        )}
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>

          {/* Previous Experiences Section - Bottom */}
          <View style={styles.previousExperiencesSection}>
            <Text style={styles.previousSectionTitle}>Previous Experience</Text>
            <View style={styles.previousExperiencesRow}>
              {previousExperiences.map((exp, index) => (
                <View key={index} style={styles.previousExpItem}>
                  <View style={styles.previousExpHeader}>
                    <Text style={styles.previousExpName}>{exp.name}</Text>
                    <Text style={styles.previousExpPeriod}>
                      {exp.joinedAt} - {exp.seperatedAt}
                    </Text>
                  </View>
                  <Text style={styles.previousExpRole}>{exp.role}</Text>
                  <View style={styles.previousExpTechs}>
                    {exp.techs.slice(0, 4).map((tech, i) => (
                      <Text key={i} style={styles.techTagSmall}>{tech}</Text>
                    ))}
                  </View>
                  {exp.projects.slice(0, 2).map((project, i) => (
                    <Text key={i} style={styles.previousExpProject}>
                      • {project.title}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          © 2025 {NAME_EN} • Page 2/2
        </Text>
      </Page>
    </Document>
  )
}
