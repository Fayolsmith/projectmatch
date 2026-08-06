import { CURATED_PROJECTS } from '../data/projects.js';
import { FilterCriteria, Project, SkillLevel } from './types.js';

const SKILL_NUMERIC: Record<SkillLevel, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

export interface ScoredProject {
  project: Project;
  score: number;
  matchReasons: string[];
}

export interface RankOptions {
  randomizeNearTies?: boolean;
  scoreThreshold?: number;
}

export function rankProjects(
  criteria: FilterCriteria,
  projects: Project[] = CURATED_PROJECTS,
  limit: number = 5,
  options: RankOptions = {}
): ScoredProject[] {
  const randomizeNearTies = options.randomizeNearTies ?? true;
  const scoreThreshold = options.scoreThreshold ?? 3.5;

  const scoredList: ScoredProject[] = [];

  for (const project of projects) {
    let score = 0;
    const reasons: string[] = [];

    // 0. Project Type Matching
    const projType = project.projectType || 'siwes';
    if (criteria.projectType && criteria.projectType !== 'any' && projType !== criteria.projectType) {
      continue;
    }

    // 1. Category Matching
    if (!criteria.category || criteria.category === 'any') {
      score += 1;
    } else if (project.category === criteria.category) {
      score += 6;
      reasons.push(`Direct match for category: ${project.category}`);
    } else {
      // Hard filter if explicit category chosen and non-matching
      continue;
    }

    // 2. Skill Level Compatibility
    if (criteria.skillLevel && criteria.skillLevel !== 'any') {
      const userLevelVal = SKILL_NUMERIC[criteria.skillLevel];
      const projLevelVal = SKILL_NUMERIC[project.skillLevel];

      if (userLevelVal === projLevelVal) {
        score += 5;
        reasons.push(`Exact skill level match (${project.skillLevel})`);
      } else if (userLevelVal > projLevelVal) {
        score += 3;
        reasons.push(`Well within your skill level (${project.skillLevel})`);
      } else {
        // User skill is lower than project skill level - slight penalty but still allowed if user wants a challenge
        score += 1;
      }
    } else {
      score += 1;
    }

    // 3. Timeframe Fit
    if (criteria.availableWeeks && criteria.availableWeeks > 0) {
      if (project.estimatedTimeframeWeeks <= criteria.availableWeeks) {
        score += 4;
        reasons.push(
          `Fits your timeframe (${project.estimatedTimeframeWeeks} wks vs ${criteria.availableWeeks} wks available)`
        );
      } else if (project.estimatedTimeframeWeeks <= criteria.availableWeeks + 2) {
        score += 1;
        reasons.push(`Slightly tight timeframe (${project.estimatedTimeframeWeeks} wks)`);
      } else {
        // Exceeds available time significantly
        score -= 2;
      }
    }

    // 4. Known Tools Matching
    if (criteria.knownTools && criteria.knownTools.length > 0) {
      const normalizedKnown = criteria.knownTools.map((t) => t.trim().toLowerCase());
      const matches = project.suggestedStack.filter((tech) =>
        normalizedKnown.some(
          (k) => tech.toLowerCase().includes(k) || k.includes(tech.toLowerCase())
        )
      );

      if (matches.length > 0) {
        score += matches.length * 2;
        reasons.push(`Uses technologies you know: ${matches.join(', ')}`);
      }
    }

    scoredList.push({
      project,
      score,
      matchReasons: reasons,
    });
  }

  if (scoredList.length === 0) return [];

  if (!randomizeNearTies) {
    scoredList.sort((a, b) => b.score - a.score);
    return scoredList.slice(0, limit);
  }

  // Find max score among candidates
  const maxScore = Math.max(...scoredList.map((p) => p.score));
  const cutoffScore = maxScore - scoreThreshold;

  // Partition projects into top tier (within scoreThreshold of maxScore) and lower tier
  const topTier = scoredList.filter((p) => p.score >= cutoffScore);
  const lowerTier = scoredList.filter((p) => p.score < cutoffScore);

  // Fisher-Yates shuffle the top tier for a genuinely random subset selection
  for (let i = topTier.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [topTier[i], topTier[j]] = [topTier[j], topTier[i]];
  }

  // Sort lower tier descending by score
  lowerTier.sort((a, b) => b.score - a.score);

  // Combine top tier and lower tier, then slice to requested limit
  const combined = [...topTier, ...lowerTier];
  return combined.slice(0, limit);
}

export function filterProjectsDirect(
  category?: string,
  level?: string,
  type?: string
): Project[] {
  return CURATED_PROJECTS.filter((p) => {
    const projType = p.projectType || 'siwes';
    if (type && type.toLowerCase() !== 'all' && projType.toLowerCase() !== type.toLowerCase()) {
      return false;
    }
    if (category && category.toLowerCase() !== 'all' && p.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (level && level.toLowerCase() !== 'all' && p.skillLevel.toLowerCase() !== level.toLowerCase()) {
      return false;
    }
    return true;
  });
}
