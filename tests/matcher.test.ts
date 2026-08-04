import { describe, expect, it } from 'vitest';
import { filterProjectsDirect, rankProjects } from '../src/lib/matcher.js';
import { FilterCriteria } from '../src/lib/types.js';

describe('Project Matcher & Ranking Algorithm', () => {
  it('should rank projects matching explicit category and skill level highest', () => {
    const criteria: FilterCriteria = {
      category: 'web',
      skillLevel: 'beginner',
      availableWeeks: 6,
      knownTools: ['React', 'TypeScript'],
    };

    const ranked = rankProjects(criteria, undefined, 5);
    expect(ranked.length).toBeGreaterThan(0);
    const topMatch = ranked[0];

    expect(topMatch.project.category).toBe('web');
    expect(topMatch.project.skillLevel).toBe('beginner');
    expect(topMatch.score).toBeGreaterThan(10);
    expect(topMatch.matchReasons.some((r) => r.includes('Direct match'))).toBe(true);
  });

  it('should filter out non-matching categories when category is explicit', () => {
    const criteria: FilterCriteria = {
      category: 'security',
      skillLevel: 'any',
      availableWeeks: 10,
    };

    const ranked = rankProjects(criteria);
    for (const match of ranked) {
      expect(match.project.category).toBe('security');
    }
  });

  it('should boost score when known tools match suggested stack', () => {
    const criteriaWithTools: FilterCriteria = {
      category: 'systems',
      skillLevel: 'intermediate',
      availableWeeks: 8,
      knownTools: ['TypeScript', 'Node.js'],
    };

    const criteriaWithoutTools: FilterCriteria = {
      category: 'systems',
      skillLevel: 'intermediate',
      availableWeeks: 8,
      knownTools: [],
    };

    const rankedWith = rankProjects(criteriaWithTools);
    const rankedWithout = rankProjects(criteriaWithoutTools);

    const sys2With = rankedWith.find((r) => r.project.id === 'systems-2');
    const sys2Without = rankedWithout.find((r) => r.project.id === 'systems-2');

    if (sys2With && sys2Without) {
      expect(sys2With.score).toBeGreaterThan(sys2Without.score);
    }
  });

  it('should filter projects directly by category and level', () => {
    const mobileBeginner = filterProjectsDirect('mobile', 'beginner');
    expect(mobileBeginner.length).toBeGreaterThan(0);
    for (const p of mobileBeginner) {
      expect(p.category).toBe('mobile');
      expect(p.skillLevel).toBe('beginner');
    }
  });

  it('should handle zero results gracefully in filterProjectsDirect', () => {
    const results = filterProjectsDirect('nonexistent-category', 'advanced');
    expect(results).toEqual([]);
  });
});
