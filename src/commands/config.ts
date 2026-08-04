import chalk from 'chalk';
import { getConfigPath, loadConfig, saveConfig } from '../lib/configManager.js';

export function configCommand(action: string, value?: string) {
  const config = loadConfig();

  switch (action) {
    case 'show': {
      console.log(chalk.bold.cyan('\nProjectMatch Configuration'));
      console.log(chalk.dim(`Config file: ${getConfigPath()}\n`));

      console.log(`  ${chalk.bold('Provider:')} ${config.provider ? chalk.green(config.provider) : chalk.yellow('Not set (curated bank mode active)')}`);
      
      const keyDisplay = config.apiKey
        ? `${config.apiKey.substring(0, 4)}...${config.apiKey.substring(Math.max(0, config.apiKey.length - 4))}`
        : 'Not set';
      console.log(`  ${chalk.bold('API Key:')}  ${config.apiKey ? chalk.green(keyDisplay) : chalk.dim('Not set')}`);
      console.log(`  ${chalk.bold('Model:')}    ${config.model ? chalk.green(config.model) : chalk.dim('Default for provider')}`);
      if (config.baseUrl) {
        console.log(`  ${chalk.bold('Base URL:')} ${chalk.green(config.baseUrl)}`);
      }
      console.log('');
      break;
    }

    case 'set-provider': {
      if (!value) {
        console.log(chalk.red('Please specify a provider. Supported providers: anthropic, openai, gemini, ollama'));
        return;
      }
      const provider = value.toLowerCase();
      if (!['anthropic', 'openai', 'gemini', 'ollama'].includes(provider)) {
        console.log(chalk.red(`Invalid provider '${value}'. Supported: anthropic, openai, gemini, ollama`));
        return;
      }
      config.provider = provider as any;
      saveConfig(config);
      console.log(chalk.green(`Set provider to '${provider}'.`));
      break;
    }

    case 'set-key': {
      if (!value) {
        console.log(chalk.red('Please specify an API key value.'));
        return;
      }
      config.apiKey = value;
      saveConfig(config);
      console.log(chalk.green('API key updated successfully.'));
      break;
    }

    case 'set-model': {
      if (!value) {
        console.log(chalk.red('Please specify a model name.'));
        return;
      }
      config.model = value;
      saveConfig(config);
      console.log(chalk.green(`Model set to '${value}'.`));
      break;
    }

    case 'set-url': {
      if (!value) {
        console.log(chalk.red('Please specify a base URL.'));
        return;
      }
      config.baseUrl = value;
      saveConfig(config);
      console.log(chalk.green(`Base URL set to '${value}'.`));
      break;
    }

    default: {
      console.log(chalk.red(`Unknown config subcommand '${action}'.`));
      console.log(chalk.dim('Available commands: show, set-provider, set-key, set-model, set-url\n'));
    }
  }
}
