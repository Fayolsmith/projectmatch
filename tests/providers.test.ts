import { describe, expect, it } from 'vitest';
import { getLLMProvider } from '../src/lib/providers/index.js';
import { AnthropicProvider } from '../src/lib/providers/anthropic.js';
import { OpenAIProvider } from '../src/lib/providers/openai.js';
import { GeminiProvider } from '../src/lib/providers/gemini.js';
import { OllamaProvider } from '../src/lib/providers/ollama.js';

describe('LLM Provider Abstraction Layer', () => {
  it('should return null if no provider is set in config', () => {
    const provider = getLLMProvider({});
    expect(provider).toBeNull();
  });

  it('should correctly instantiate AnthropicProvider', () => {
    const provider = getLLMProvider({ provider: 'anthropic', apiKey: 'sk-ant-test' });
    expect(provider).toBeInstanceOf(AnthropicProvider);
    expect(provider?.name).toBe('Anthropic (Claude)');
  });

  it('should correctly instantiate OpenAIProvider', () => {
    const provider = getLLMProvider({ provider: 'openai', apiKey: 'sk-proj-test' });
    expect(provider).toBeInstanceOf(OpenAIProvider);
    expect(provider?.name).toBe('OpenAI');
  });

  it('should correctly instantiate GeminiProvider', () => {
    const provider = getLLMProvider({ provider: 'gemini', apiKey: 'AIzaSyTest' });
    expect(provider).toBeInstanceOf(GeminiProvider);
    expect(provider?.name).toBe('Google Gemini');
  });

  it('should correctly instantiate OllamaProvider', () => {
    const provider = getLLMProvider({ provider: 'ollama', baseUrl: 'http://localhost:11434' });
    expect(provider).toBeInstanceOf(OllamaProvider);
    expect(provider?.name).toBe('Ollama (Local LLM)');
  });

  it('should throw error if API key is missing when generating suggestions', async () => {
    const openai = new OpenAIProvider();
    await expect(openai.generateSuggestions({ category: 'web' })).rejects.toThrow(
      'OpenAI API key is missing'
    );
  });
});
