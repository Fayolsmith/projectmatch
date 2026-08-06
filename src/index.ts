import { Command } from 'commander';
import chalk from 'chalk';
import { findCommand } from './commands/find.js';
import { listCommand } from './commands/list.js';
import { checklistCommand } from './commands/checklist.js';
import { proposalCommand } from './commands/proposal.js';
import { configCommand } from './commands/config.js';

const program = new Command();

const MANDATORY_PRINCIPLE_TEXT = `ProjectMatch suggests and helps you scope YOUR OWN project — it does not write or build projects for you. You are expected to design, build, and be able to explain everything in your final submission.`;

program
  .name('projectmatch')
  .description(
    `SIWES & Final Year CS Project Finder & Scoping Tool\n\n${chalk.yellowBright.bold('CRITICAL NOTICE:')}\n${MANDATORY_PRINCIPLE_TEXT}`
  )
  .version('1.0.0');

program
  .command('find')
  .description('Interactive project matching wizard based on project type, skill level, interest, timeframe, and known tools')
  .option('--ai', 'Generate additional tailored suggestions using configured LLM provider (ideal for large cohorts & supervisors)')
  .action(async (options) => {
    await findCommand(options);
  });

program
  .command('list')
  .description('Browse curated project bank with optional category and skill level filtering')
  .option('-t, --type <type>', 'Filter by project type (siwes, final-year)')
  .option('-c, --category <cat>', 'Filter by category (web, mobile, backend, data, systems, security)')
  .option('-l, --level <level>', 'Filter by skill level (beginner, intermediate, advanced)')
  .action((options) => {
    listCommand(options);
  });

program
  .command('checklist')
  .description('View static SIWES final-defence readiness checklist and common panel interview questions')
  .action(() => {
    checklistCommand();
  });

program
  .command('proposal')
  .description('View static guidance for writing a Final Year Project proposal for supervisor approval')
  .action(() => {
    proposalCommand();
  });

program
  .command('config [action] [value]')
  .description('Configure optional AI provider settings (show, set-provider, set-key, set-model, set-url)')
  .action((action = 'show', value) => {
    configCommand(action, value);
  });

// Handle custom help output to emphasize principle and large-cohort scaling
program.addHelpText(
  'before',
  chalk.yellowBright(`\n================================================================================\nIMPORTANT NOTICE:\n${MANDATORY_PRINCIPLE_TEXT}\n================================================================================\n`)
);

program.addHelpText(
  'after',
  chalk.dim(`\nCoordinating a large cohort? Use 'projectmatch find --ai' for unlimited AI-generated project variety at scale (supports free local Ollama).\n`)
);

program.parse(process.argv);
