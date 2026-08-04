import { FilterCriteria, LLMProvider, Project } from '../types.js';

export abstract class BaseLLMProvider implements LLMProvider {
  abstract name: string;
  protected apiKey?: string;
  protected model?: string;
  protected baseUrl?: string;

  constructor(apiKey?: string, model?: string, baseUrl?: string) {
    this.apiKey = apiKey;
    this.model = model;
    this.baseUrl = baseUrl;
  }

  abstract generateSuggestions(criteria: FilterCriteria): Promise<Project[]>;

  protected buildPrompt(criteria: FilterCriteria): string {
    return `You are an academic project advisor for Computer Science undergraduate students in SIWES (Students Industrial Work Experience Scheme).
Suggest 1-2 realistic, portfolio-worthy final project ideas matching these criteria:
- Target Skill Level: ${criteria.skillLevel || 'intermediate'}
- Category: ${criteria.category || 'any'}
- Available Timeframe: ${criteria.availableWeeks || 8} weeks
- Known Technologies: ${criteria.knownTools?.join(', ') || 'General CS skills'}

CRITICAL CONSTRAINT: You MUST NOT output any source code, code snippets, boilerplates, or repository structures. Output ONLY high-level project scoping ideas.

Return your response strictly as a JSON array of project objects matching this structure:
[
  {
    "id": "ai-1",
    "title": "Project Title",
    "description": "One paragraph project description.",
    "category": "${criteria.category && criteria.category !== 'any' ? criteria.category : 'web'}",
    "skillLevel": "${criteria.skillLevel && criteria.skillLevel !== 'any' ? criteria.skillLevel : 'intermediate'}",
    "suggestedStack": ["Tech1", "Tech2", "Tech3"],
    "estimatedTimeframeWeeks": ${criteria.availableWeeks || 8},
    "timeframeLabel": "${criteria.availableWeeks || 8} weeks",
    "milestones": [
      "Milestone 1 description",
      "Milestone 2 description",
      "Milestone 3 description"
    ]
  }
]`;
  }

  protected parseJSONResponse(rawResponse: string): Project[] {
    try {
      const jsonMatch = rawResponse.match(/\[[\s\S]*\]/);
      const jsonStr = jsonMatch ? jsonMatch[0] : rawResponse;
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed)) {
        return parsed.map((item, idx) => ({
          id: item.id || `ai-${idx + 1}`,
          title: item.title || 'AI Project Recommendation',
          description: item.description || '',
          category: item.category || 'web',
          skillLevel: item.skillLevel || 'intermediate',
          suggestedStack: Array.isArray(item.suggestedStack) ? item.suggestedStack : [],
          estimatedTimeframeWeeks: item.estimatedTimeframeWeeks || 8,
          timeframeLabel: item.timeframeLabel || `${item.estimatedTimeframeWeeks || 8} weeks`,
          milestones: Array.isArray(item.milestones) ? item.milestones : [],
          isAiGenerated: true,
        }));
      }
      return [];
    } catch (err) {
      throw new Error(`Failed to parse AI provider JSON output: ${(err as Error).message}`);
    }
  }
}
