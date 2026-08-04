import { CURATED_PROJECTS } from '../data/projects.js';
import { Category, Project, SkillLevel } from './types.js';

export function getAllProjects(): Project[] {
  return CURATED_PROJECTS;
}

export function getProjectById(id: string): Project | undefined {
  return CURATED_PROJECTS.find((p) => p.id === id);
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
