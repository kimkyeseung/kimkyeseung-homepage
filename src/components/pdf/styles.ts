import { StyleSheet, Font } from '@react-pdf/renderer'

// Register Pretendard font (using system font fallback for PDF)
Font.register({
  family: 'Pretendard',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Regular.otf',
      fontWeight: 400,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Medium.otf',
      fontWeight: 500,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-SemiBold.otf',
      fontWeight: 600,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Bold.otf',
      fontWeight: 700,
    },
  ],
})

// Color palette
export const colors = {
  primary: '#2563eb',
  primaryDark: '#1e40af',
  text: '#1f2937',
  textSecondary: '#4b5563',
  textLight: '#6b7280',
  border: '#e5e7eb',
  background: '#ffffff',
  accent: '#dbeafe',
}

export const styles = StyleSheet.create({
  // Page
  page: {
    fontFamily: 'Pretendard',
    fontSize: 10,
    padding: 40,
    backgroundColor: colors.background,
    color: colors.text,
  },

  // Header
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.text,
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: colors.primary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 10,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  introduction: {
    fontSize: 9,
    color: colors.textSecondary,
    lineHeight: 1.5,
    maxWidth: 350,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  contactItem: {
    fontSize: 9,
    color: colors.textSecondary,
    marginBottom: 3,
  },
  contactLink: {
    color: colors.primary,
    textDecoration: 'none',
  },

  // Two Column Layout
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    width: '35%',
  },
  rightColumn: {
    width: '65%',
  },

  // Section
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.primary,
    marginBottom: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Skills
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: colors.text,
    marginBottom: 4,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillTag: {
    fontSize: 8,
    color: colors.textSecondary,
    backgroundColor: colors.accent,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
  },

  // Key Skills
  keySkills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  keySkillTag: {
    fontSize: 8,
    fontWeight: 500,
    color: colors.background,
    backgroundColor: colors.primary,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },

  // Education
  educationItem: {
    marginBottom: 8,
  },
  educationName: {
    fontSize: 10,
    fontWeight: 600,
    color: colors.text,
  },
  educationPeriod: {
    fontSize: 8,
    color: colors.primary,
    marginBottom: 2,
  },
  educationDesc: {
    fontSize: 8,
    color: colors.textSecondary,
  },

  // Experience
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  experienceName: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.text,
  },
  experienceRole: {
    fontSize: 9,
    fontWeight: 500,
    color: colors.primary,
  },
  experienceDesc: {
    fontSize: 8,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  experiencePeriod: {
    fontSize: 8,
    fontWeight: 500,
    color: colors.textLight,
    backgroundColor: colors.accent,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  experienceTechs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginBottom: 6,
  },
  techTag: {
    fontSize: 7,
    color: colors.textSecondary,
    backgroundColor: '#f3f4f6',
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 2,
  },

  // Project
  project: {
    marginBottom: 6,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: colors.border,
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: colors.text,
    marginBottom: 2,
  },
  projectInfo: {
    fontSize: 8,
    color: colors.textSecondary,
    marginBottom: 3,
  },
  projectDesc: {
    fontSize: 8,
    color: colors.textSecondary,
    marginBottom: 1,
    paddingLeft: 8,
  },
  projectImpact: {
    fontSize: 8,
    fontWeight: 500,
    color: '#059669',
    marginTop: 3,
  },

  // Summary
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  summaryItem: {
    width: '48%',
    padding: 8,
    backgroundColor: '#fafafa',
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  summaryTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: colors.text,
    marginBottom: 3,
  },
  summaryDesc: {
    fontSize: 8,
    color: colors.textSecondary,
    lineHeight: 1.4,
  },
  summaryKeywords: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginTop: 4,
  },
  summaryKeyword: {
    fontSize: 7,
    color: colors.primary,
    backgroundColor: colors.accent,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 2,
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: colors.textLight,
  },

  // Bullet
  bullet: {
    color: colors.primary,
    marginRight: 4,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    color: colors.textSecondary,
  },
})
