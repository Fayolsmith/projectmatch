import { describe, expect, it } from 'vitest';
import { getAllProjects, getCategories, getProjectById, getSkillLevels } from '../src/lib/bank.js';

describe('Project Bank Data & Helpers', () => {
  it('should contain at least 90 curated project ideas', () => {
    const projects = getAllProjects();
    expect(projects.length).toBeGreaterThanOrEqual(90);
  });

  it('should ensure balanced distribution across categories and skill levels', () => {
    const projects = getAllProjects();
    const categories = ['web', 'mobile', 'backend', 'data', 'systems', 'security'];
    const levels = ['beginner', 'intermediate', 'advanced'];

    for (const cat of categories) {
      for (const lvl of levels) {
        const count = projects.filter((p) => p.category === cat && p.skillLevel === lvl).length;
        expect(count).toBeGreaterThanOrEqual(4); // roughly equal distribution (~5)
      }
    }
  });

  it('should ensure every project has required fields and 3-5 milestones', () => {
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
  });

  it('should return valid category and skill level options', () => {
    const categories = getCategories();
    const levels = getSkillLevels();
    expect(categories.length).toBe(6);
    expect(levels.length).toBe(3);
  });
});
