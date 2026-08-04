import { FilterCriteria, Project } from '../types.js';
import { BaseLLMProvider } from './base.js';

export class AnthropicProvider extends BaseLLMProvider {
  name = 'Anthropic (Claude)';

  async generateSuggestions(criteria: FilterCriteria): Promise<Project[]> {
    if (!this.apiKey) {
      throw new Error('Anthropic API key is missing. Set it using `projectmatch config set-key <key>`');
    }

    const modelName = this.model || 'claude-3-5-sonnet-20241022';
    const prompt = this.buildPrompt(criteria);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: modelName,
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Anthropic API request failed (${response.status}): ${errText}`);
    }

    const data = (await response.json()) as any;
    const content = data.content?.[0]?.text || '';
    return this.parseJSONResponse(content);
  }
}
