import { Config, LLMProvider } from '../types.js';
import { AnthropicProvider } from './anthropic.js';
import { OpenAIProvider } from './openai.js';
import { GeminiProvider } from './gemini.js';
import { OllamaProvider } from './ollama.js';

export function getLLMProvider(config: Config): LLMProvider | null {
  if (!config.provider) {
    return null;
  }

  switch (config.provider.toLowerCase()) {
    case 'anthropic':
      return new AnthropicProvider(config.apiKey, config.model, config.baseUrl);
    case 'openai':
      return new OpenAIProvider(config.apiKey, config.model, config.baseUrl);
    case 'gemini':
      return new GeminiProvider(config.apiKey, config.model, config.baseUrl);
    case 'ollama':
      return new OllamaProvider(config.apiKey, config.model, config.baseUrl);
    default:
      return null;
  }
}
