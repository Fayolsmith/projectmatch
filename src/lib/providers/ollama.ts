import { FilterCriteria, Project } from '../types.js';
import { BaseLLMProvider } from './base.js';

export class OllamaProvider extends BaseLLMProvider {
  name = 'Ollama (Local LLM)';

  async generateSuggestions(criteria: FilterCriteria): Promise<Project[]> {
    const baseUrl = this.baseUrl || 'http://localhost:11434';
    const modelName = this.model || 'llama3';
    const prompt = this.buildPrompt(criteria);

    const response = await fetch(`${baseUrl}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: modelName,
        prompt: prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Ollama request failed (${response.status}): ${errText}`);
    }

    const data = (await response.json()) as any;
    const content = data.response || '';
    return this.parseJSONResponse(content);
  }
}
