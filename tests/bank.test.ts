import { describe, expect, it } from 'vitest';
import { getAllProjects, getCategories, getProjectById, getProjectsByType, getProjectTypes, getSkillLevels } from '../src/lib/bank.js';

describe('Project Bank Data & Helpers', () => {
  it('should contain both SIWES (160+) and Final Year Project (70+) entries', () => {
    const projects = getAllProjects();
    const siwesProjects = getProjectsByType('siwes');
    const fypProjects = getProjectsByType('final-year');

    expect(projects.length).toBeGreaterThanOrEqual(230);
    expect(siwesProjects.length).toBeGreaterThanOrEqual(160);
    expect(fypProjects.length).toBeGreaterThanOrEqual(70);
  });

  it('should ensure balanced distribution across categories and skill levels for both SIWES and FYP', () => {
    const categories = ['web', 'mobile', 'backend', 'data', 'systems', 'security'];
    const levels = ['beginner', 'intermediate', 'advanced'];

    const siwesProjects = getProjectsByType('siwes');
    const fypProjects = getProjectsByType('final-year');

    for (const cat of categories) {
      for (const lvl of levels) {
        const siwesCount = siwesProjects.filter((p) => p.category === cat && p.skillLevel === lvl).length;
        const fypCount = fypProjects.filter((p) => p.category === cat && p.skillLevel === lvl).length;

        expect(siwesCount).toBeGreaterThanOrEqual(8);
        expect(fypCount).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it('should ensure every Final Year Project has required topic defense fields', () => {
    const fypProjects = getProjectsByType('final-year');
    for (const p of fypProjects) {
      expect(p.problemStatement).toBeDefined();
      expect(p.problemStatement!.length).toBeGreaterThan(15);
      expect(p.whySuitableForYou).toBeDefined();
      expect(p.whySuitableForYou!.length).toBeGreaterThan(15);
      expect(p.whySupervisorMightApprove).toBeDefined();
      expect(p.whySupervisorMightApprove!.length).toBeGreaterThan(15);
      expect(p.whySupervisorMightApprove!).toContain('likely to be viewed favorably because');
      expect(p.defendingYourChoice).toBeDefined();
      expect(p.defendingYourChoice!.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('should ensure every project has base fields and 3-5 milestones', () => {
    const projects = getAllProjects();
    for (const p of projects) {
      expect(p.id).toBeDefined();
      expect(p.title.length).toBeGreaterThan(5);
      expect(p.description.length).toBeGreaterThan(20);
      expect(p.suggestedStack.length).toBeGreaterThanOrEqual(2);
      expect(p.milestones.length).toBeGreaterThanOrEqual(3);
      expect(p.milestones.length).toBeLessThanOrEqual(5);
      expect(['web', 'mobile', 'backend', 'data', 'systems', 'security']).toContain(p.category);
      expect(['beginner', 'intermediate', 'advanced']).toContain(p.skillLevel);
    }
  });

  it('should retrieve a project by its unique ID', () => {
    const project = getProjectById('web-1');
    expect(project).toBeDefined();
    expect(project?.title).toBe('Student Academic Performance Dashboard');

    const fypProject = getProjectById('web-fyp-1');
    expect(fypProject).toBeDefined();
    expect(fypProject?.projectType).toBe('final-year');
  });

  it('should return valid project type, category, and skill level options', () => {
    const types = getProjectTypes();
    const categories = getCategories();
    const levels = getSkillLevels();
    expect(types.length).toBe(2);
    expect(categories.length).toBe(6);
    expect(levels.length).toBe(3);
  });
});
