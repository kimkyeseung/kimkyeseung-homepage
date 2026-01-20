import { StyleSheet, Font } from '@react-pdf/renderer'

// Register Pretendard font
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
  success: '#059669',
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

  // Page Header (for page 2+)
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  pageHeaderName: {
    fontSize: 14,
    fontWeight: 700,
    color: colors.text,
  },
  pageHeaderTitle: {
    fontSize: 12,
    fontWeight: 500,
    color: colors.primary,
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
    fontSize: 26,
    fontWeight: 700,
    color: colors.text,
    marginBottom: 4,
  },
  title: {
    fontSize: 13,
    fontWeight: 600,
    color: colors.primary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  introduction: {
    fontSize: 9,
    color: colors.textSecondary,
    lineHeight: 1.5,
    maxWidth: 380,
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
    gap: 25,
  },
  leftColumn: {
    width: '35%',
  },
  rightColumn: {
    width: '65%',
  },
  leftColumnWide: {
    width: '60%',
  },
  rightColumnNarrow: {
    width: '40%',
  },

  // Tech Stack Row Layout
  techStackRow: {
    flexDirection: 'row',
    gap: 15,
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
    flex: 1,
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
    gap: 3,
  },
  skillTag: {
    fontSize: 8,
    color: colors.textSecondary,
    backgroundColor: colors.accent,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
  },

  // Key Skills
  keySkills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  keySkillTag: {
    fontSize: 9,
    fontWeight: 500,
    color: colors.background,
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },

  // Education
  educationItem: {
    marginBottom: 10,
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
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  experienceHeaderLeft: {
    flex: 1,
  },
  experienceName: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.text,
  },
  experienceRole: {
    fontSize: 10,
    fontWeight: 500,
    color: colors.primary,
  },
  experienceDesc: {
    fontSize: 8,
    color: colors.textSecondary,
    marginTop: 2,
  },
  experiencePeriod: {
    fontSize: 8,
    fontWeight: 500,
    color: colors.textLight,
    backgroundColor: colors.accent,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  experienceTechs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 8,
  },
  techTag: {
    fontSize: 7,
    color: colors.textSecondary,
    backgroundColor: '#f3f4f6',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2,
  },

  // Projects Container
  projectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  // Project
  project: {
    width: '48%',
    marginBottom: 4,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: colors.accent,
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
    color: colors.success,
    marginTop: 3,
  },
  projectTechs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginTop: 4,
  },
  projectTechTag: {
    fontSize: 7,
    color: colors.primary,
    backgroundColor: colors.accent,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 2,
  },

  // Summary
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  summaryItem: {
    width: '48%',
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  summaryTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: colors.text,
    marginBottom: 4,
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
    marginTop: 5,
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
    bottom: 25,
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
    fontSize: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    color: colors.textSecondary,
    lineHeight: 1.3,
  },

  // ========== Compact Styles for Page 2 ==========
  pageCompact: {
    fontFamily: 'Pretendard',
    fontSize: 8,
    padding: 25,
    paddingBottom: 40,
    backgroundColor: colors.background,
    color: colors.text,
  },
  pageHeaderCompact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sectionCompact: {
    marginBottom: 0,
  },

  // Experience Compact
  experienceItemCompact: {
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  experienceHeaderCompact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  experienceNameCompact: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.text,
  },
  experienceRoleCompact: {
    fontSize: 8,
    fontWeight: 500,
    color: colors.primary,
  },
  experiencePeriodCompact: {
    fontSize: 7,
    fontWeight: 500,
    color: colors.textLight,
    backgroundColor: colors.accent,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  experienceTechsCompact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginBottom: 5,
  },
  techTagCompact: {
    fontSize: 6,
    color: colors.textSecondary,
    backgroundColor: '#f3f4f6',
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 2,
  },

  // Projects Compact
  projectsContainerCompact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  projectCompact: {
    width: '48%',
    marginBottom: 2,
    paddingLeft: 6,
    borderLeftWidth: 2,
    borderLeftColor: colors.accent,
  },
  projectTitleCompact: {
    fontSize: 8,
    fontWeight: 600,
    color: colors.text,
    marginBottom: 1,
  },
  projectImpactCompact: {
    fontSize: 7,
    fontWeight: 500,
    color: colors.success,
    marginTop: 2,
  },

  // Bullet Compact
  bulletCompact: {
    color: colors.primary,
    marginRight: 3,
    fontSize: 7,
  },
  bulletItemCompact: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  bulletTextCompact: {
    flex: 1,
    fontSize: 7,
    color: colors.textSecondary,
    lineHeight: 1.2,
  },

  // Older Experiences Section
  olderExperiencesSection: {
    marginTop: 4,
  },
})
