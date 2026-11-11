export interface SocialLink {
  name: string;
  url: string;
  iconName: 'linkedin' | 'github' | 'mail' | 'map-pin' | 'file-text' | 'external-link';
}

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  bullets: string[];
  technologies?: string[];
}

export interface ArchitectureStep {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectCaseStudy {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  tech: string[];
  architectureDiagram?: string;
  problemStatement: string;
  constraintsAndTradeoffs: string[];
  architectureOverview: string;
  architectureSteps?: ArchitectureStep[];
  technologyDecisions: {
    title: string;
    reason: string;
  }[];
  reliabilityAndPerformance: string[];
  individualContribution: string[];
  outcomes: string[];
  liveDemoUrl?: string;
  repoUrl?: string;
  statusBadge: string;
}

export interface EngineeringHighlight {
  title: string;
  category: string;
  summary: string;
  principles: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  description?: string;
  isCertification?: boolean;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    initials: string;
    title: string;
    eyebrow: string;
    headline: string;
    heroParagraph: string;
    location: string;
    availability: string;
    totalYearsExp: string;
    backendYearsExp: string;
    email: string;
    phone: string;
    linkedinUrl: string;
    githubUrl: string;
    resumePath: string;
  };
  about: {
    paragraphs: string[];
    focusAreas: string[];
    stats: StatItem[];
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectCaseStudy[];
  education: EducationItem[];
  engineeringHighlights: EngineeringHighlight[];
  contact: {
    heading: string;
    subheading: string;
    phone?: string;
    locationText: string;
  };
}
