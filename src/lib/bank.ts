import { CURATED_PROJECTS } from '../data/projects.js';
import { Category, Project, ProjectType, SkillLevel } from './types.js';

export function getAllProjects(): Project[] {
  return CURATED_PROJECTS;
}

export function getProjectsByType(type: ProjectType): Project[] {
  return CURATED_PROJECTS.filter((p) => (p.projectType || 'siwes') === type);
}

export function getProjectById(id: string): Project | undefined {
  return CURATED_PROJECTS.find((p) => p.id === id);
}

export function getProjectTypes(): { label: string; value: ProjectType }[] {
  return [
    { label: 'SIWES Industrial Training (Practical focus, shorter timeframe, panel defense)', value: 'siwes' },
    { label: 'Final Year Project (Academic focus, supervisor proposal approval, topic defense)', value: 'final-year' },
  ];
}

export function getCategories(): { label: string; value: Category }[] {
  return [
    { label: 'Web Development', value: 'web' },
    { label: 'Mobile Development', value: 'mobile' },
    { label: 'Backend / API Systems', value: 'backend' },
    { label: 'Data Science & Analytics', value: 'data' },
    { label: 'Systems & Networking', value: 'systems' },
    { label: 'Security & Cryptography Basics', value: 'security' },
  ];
}

export function getSkillLevels(): { label: string; value: SkillLevel }[] {
  return [
    { label: 'Beginner (Basic coding & web/mobile basics)', value: 'beginner' },
    { label: 'Intermediate (Comfortable with frameworks, APIs, DBs)', value: 'intermediate' },
    { label: 'Advanced (Complex algorithms, systems, concurrency, async)', value: 'advanced' },
  ];
}
