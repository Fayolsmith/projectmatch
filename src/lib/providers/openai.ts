import { FilterCriteria, Project } from '../types.js';
import { BaseLLMProvider } from './base.js';

export class OpenAIProvider extends BaseLLMProvider {
  name = 'OpenAI';

  async generateSuggestions(criteria: FilterCriteria): Promise<Project[]> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key is missing. Set it using `projectmatch config set-key <key>`');
    }

    const modelName = this.model || 'gpt-4o-mini';
    const prompt = this.buildPrompt(criteria);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: modelName,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenAI API request failed (${response.status}): ${errText}`);
    }

    const data = (await response.json()) as any;
    const content = data.choices?.[0]?.message?.content || '';
    return this.parseJSONResponse(content);
  }
}
