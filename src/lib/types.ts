export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type Category =
  | 'web'
  | 'mobile'
  | 'backend'
  | 'data'
  | 'systems'
  | 'security';

export type ProjectType = 'siwes' | 'final-year';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  skillLevel: SkillLevel;
  suggestedStack: string[];
  estimatedTimeframeWeeks: number;
  timeframeLabel: string;
  milestones: string[];
  learningPrompts?: string[];
  projectType?: ProjectType;
  problemStatement?: string;
  whySuitableForYou?: string;
  whySupervisorMightApprove?: string;
  defendingYourChoice?: string[];
  isAiGenerated?: boolean;
}

export interface FilterCriteria {
  projectType?: ProjectType | 'any';
  skillLevel?: SkillLevel | 'any';
  category?: Category | 'any';
  availableWeeks?: number;
  knownTools?: string[];
}

export interface Config {
  provider?: 'anthropic' | 'openai' | 'gemini' | 'ollama';
  apiKey?: string;
  model?: string;
  baseUrl?: string;
}

export interface LLMProvider {
  name: string;
  generateSuggestions(criteria: FilterCriteria): Promise<Project[]>;
}
