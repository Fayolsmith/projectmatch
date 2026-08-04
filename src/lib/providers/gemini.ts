import { FilterCriteria, Project } from '../types.js';
import { BaseLLMProvider } from './base.js';

export class GeminiProvider extends BaseLLMProvider {
  name = 'Google Gemini';

  async generateSuggestions(criteria: FilterCriteria): Promise<Project[]> {
    if (!this.apiKey) {
      throw new Error('Gemini API key is missing. Set it using `projectmatch config set-key <key>`');
    }

    const modelName = this.model || 'gemini-1.5-flash';
    const prompt = this.buildPrompt(criteria);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${this.apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API request failed (${response.status}): ${errText}`);
    }

    const data = (await response.json()) as any;
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return this.parseJSONResponse(content);
  }
}
