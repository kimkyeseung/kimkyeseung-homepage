import { Document, Page, View, Text, Link } from '@react-pdf/renderer'
import {
  NAME_EN,
  TITLE,
  EMAIL,
  PHONE_NUMBER,
  GITHUB_URL,
  LINKEDIN_URL,
  INTRODUCTION,
  EXPERIENCES,
  EDUCATIONS,
  SUMMARIES,
  KEY_SKILLS,
} from '@/constants'
import { styles } from './styles'

export function ResumePdf() {
  return (
    <Document
      title={`${NAME_EN} - 이력서`}
      author={NAME_EN}
      subject="프론트엔드 개발자 이력서"
      keywords="프론트엔드, React, Next.js, TypeScript, 개발자"
    >
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
              <Link src={LINKEDIN_URL} style={styles.contactItem}>
                <Text style={styles.contactLink}>LinkedIn</Text>
              </Link>
            </View>
          </View>
        </View>

        {/* Two Column Layout */}
        <View style={styles.twoColumn}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
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
                  {['Node.js', 'Express', 'Python', 'Flask', 'MongoDB'].map(
                    (skill, index) => (
                      <Text key={index} style={styles.skillTag}>
                        {skill}
                      </Text>
                    )
                  )}
                </View>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>DevOps & Tools</Text>
                <View style={styles.skillTags}>
                  {['Git', 'Docker', 'AWS', 'Storybook', 'Figma'].map(
                    (skill, index) => (
                      <Text key={index} style={styles.skillTag}>
                        {skill}
                      </Text>
                    )
                  )}
                </View>
              </View>
            </View>

            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {EDUCATIONS.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.educationName}>{edu.name}</Text>
                  <Text style={styles.educationPeriod}>
                    {edu.joinedAt} - {edu.isOngoing ? '진행 중' : edu.seperatedAt}
                  </Text>
                  {edu.descriptions.map((desc, i) => (
                    <Text key={i} style={styles.educationDesc}>
                      {desc.title}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* About Me */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About Me</Text>
              <View style={styles.summaryGrid}>
                {SUMMARIES.slice(0, 4).map((summary, index) => (
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

            {/* Work Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              {EXPERIENCES.slice(0, 4).map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <View style={styles.experienceHeader}>
                    <View>
                      <Text style={styles.experienceName}>{exp.name}</Text>
                      {exp.role && (
                        <Text style={styles.experienceRole}>{exp.role}</Text>
                      )}
                      {exp.descriptions[0] && (
                        <Text style={styles.experienceDesc}>
                          {exp.descriptions[0].title}
                        </Text>
                      )}
                    </View>
                    <Text style={styles.experiencePeriod}>
                      {exp.joinedAt} - {exp.isOngoing ? '현재' : exp.seperatedAt}
                    </Text>
                  </View>

                  {/* Tech Stack */}
                  {exp.techs.length > 0 && (
                    <View style={styles.experienceTechs}>
                      {exp.techs.slice(0, 6).map((tech, i) => (
                        <Text key={i} style={styles.techTag}>
                          {tech}
                        </Text>
                      ))}
                    </View>
                  )}

                  {/* Projects */}
                  {exp.projects.slice(0, 2).map((project, i) => (
                    <View key={i} style={styles.project}>
                      <Text style={styles.projectTitle}>{project.title}</Text>
                      {project.information && (
                        <Text style={styles.projectInfo}>{project.information}</Text>
                      )}
                      {project.descriptions.slice(0, 2).map((desc, j) => (
                        <View key={j} style={styles.bulletItem}>
                          <Text style={styles.bullet}>•</Text>
                          <Text style={styles.bulletText}>{desc}</Text>
                        </View>
                      ))}
                      {project.impact && (
                        <Text style={styles.projectImpact}>
                          ✓ {project.impact}
                        </Text>
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          © 2025 {NAME_EN} • Generated from kimkyeseung.com
        </Text>
      </Page>
    </Document>
  )
}
