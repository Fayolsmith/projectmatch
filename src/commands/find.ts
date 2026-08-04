import select from '@inquirer/select';
import input from '@inquirer/input';
import chalk from 'chalk';
import { Category, FilterCriteria, SkillLevel } from '../lib/types.js';
import { rankProjects } from '../lib/matcher.js';
import { getLLMProvider } from '../lib/providers/index.js';
import { loadConfig } from '../lib/configManager.js';

export const DISCLAIMER = chalk.yellowBright(
  `\n================================================================================
  NOTICE: ProjectMatch RECOMMENDS and GUIDES — it NEVER generates or builds code.
  You are expected to design, implement, and defend your own work in your submission.
================================================================================\n`
);

export async function findCommand(options: { ai?: boolean }) {
  console.log(chalk.bold.cyan('\nProjectMatch — SIWES Project Scope & Recommendation Tool'));
  console.log(DISCLAIMER);

  const skillLevel = (await select({
    message: 'Select your current skill level:',
    choices: [
      { name: 'Beginner — Basic syntax, html/css/js, simple scripts', value: 'beginner' },
      { name: 'Intermediate — Comfortable with web/mobile frameworks, databases, APIs', value: 'intermediate' },
      { name: 'Advanced — Systems programming, algorithms, concurrency, async queues', value: 'advanced' },
      { name: 'Any / Open to all levels', value: 'any' },
    ],
  })) as SkillLevel | 'any';

  const category = (await select({
    message: 'Select your primary interest category:',
    choices: [
      { name: 'Web Development (Dashboards, portals, web tools)', value: 'web' },
      { name: 'Mobile Development (iOS / Android apps, Flutter, React Native)', value: 'mobile' },
      { name: 'Backend & APIs (Microservices, auth servers, storage gateways)', value: 'backend' },
      { name: 'Data & Analytics (NLP, forecasting, recommendation engines)', value: 'data' },
      { name: 'Systems & Networking (Load balancers, DNS, servers, storage)', value: 'systems' },
      { name: 'Security Basics (Vaults, scanners, WAF, auth evaluators)', value: 'security' },
      { name: 'Any / All categories', value: 'any' },
    ],
  })) as Category | 'any';

  const weeksInput = await input({
    message: 'How many weeks do you have available for SIWES project completion? (e.g. 6, 8, 12):',
    default: '8',
    validate: (val) => {
      const num = parseInt(val, 10);
      return !isNaN(num) && num > 0 ? true : 'Please enter a valid positive number of weeks.';
    },
  });
  const availableWeeks = parseInt(weeksInput, 10);

  const knownToolsInput = await input({
    message: 'List programming languages or tools you already know (comma-separated, or press Enter to skip):',
    default: '',
  });

  const knownTools = knownToolsInput
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const criteria: FilterCriteria = {
    skillLevel,
    category,
    availableWeeks,
    knownTools,
  };

  console.log(chalk.blue('\nSearching curated project bank for best matches...\n'));

  const matches = rankProjects(criteria);

  if (matches.length === 0) {
    console.log(
      chalk.red('No direct matches found for your exact criteria.')
    );
    console.log(
      chalk.dim('Tip: Try broadening your search by selecting "any" for category or skill level, or extending your available timeframe.\n')
    );
    return;
  }

  console.log(chalk.bold.green(`Found ${matches.length} top-ranked project recommendations for you:\n`));

  for (let i = 0; i < matches.length; i++) {
    const { project, matchReasons } = matches[i];
    console.log(chalk.bold.white(`--------------------------------------------------------------------------------`));
    console.log(
      `${chalk.bold.cyan(`#${i + 1} [Curated Bank]`)} ${chalk.bold.yellow(project.title)} ${chalk.dim(`(ID: ${project.id})`)}`
    );
    console.log(`${chalk.gray('Category:')} ${chalk.blue(project.category.toUpperCase())}  |  ${chalk.gray('Level:')} ${chalk.magenta(project.skillLevel)}  |  ${chalk.gray('Timeframe:')} ${chalk.green(project.timeframeLabel)}`);
    console.log(`\n${chalk.white(project.description)}`);
    console.log(`\n${chalk.bold('Suggested Tech Stack:')} ${chalk.cyan(project.suggestedStack.join(', '))}`);
    
    console.log(`\n${chalk.bold('Implementation Milestones (3-5 Steps):')}`);
    project.milestones.forEach((m, idx) => {
      console.log(`  ${chalk.green(`${idx + 1}.`)} ${m}`);
    });

    if (matchReasons.length > 0) {
      console.log(`\n${chalk.dim('Match highlights: ' + matchReasons.join(' • '))}`);
    }
    console.log('');
  }

  // Handle --ai flag if specified
  if (options.ai) {
    console.log(chalk.bold.magenta('\n--ai flag detected! Attempting to generate tailored AI suggestions...\n'));
    const config = loadConfig();
    const provider = getLLMProvider(config);

    if (!provider) {
      console.log(
        chalk.yellow(
          'AI provider is not configured yet. Run `projectmatch config set-provider <provider>` and `projectmatch config set-key <key>` to enable AI recommendations.'
        )
      );
    } else {
      try {
        const aiProjects = await provider.generateSuggestions(criteria);
        if (aiProjects && aiProjects.length > 0) {
          console.log(chalk.bold.magenta(`\nTailored AI Suggestions (${provider.name}):\n`));
          for (let i = 0; i < aiProjects.length; i++) {
            const p = aiProjects[i];
            console.log(chalk.bold.white(`--------------------------------------------------------------------------------`));
            console.log(`${chalk.bold.magenta(`[AI-Suggested #${i + 1}]`)} ${chalk.bold.yellow(p.title)}`);
            console.log(`${chalk.gray('Category:')} ${chalk.blue(p.category.toUpperCase())}  |  ${chalk.gray('Level:')} ${chalk.magenta(p.skillLevel)}  |  ${chalk.gray('Timeframe:')} ${chalk.green(p.timeframeLabel)}`);
            console.log(`\n${chalk.white(p.description)}`);
            console.log(`\n${chalk.bold('Suggested Tech Stack:')} ${chalk.cyan(p.suggestedStack.join(', '))}`);
            console.log(`\n${chalk.bold('Implementation Milestones:')}`);
            p.milestones.forEach((m, idx) => {
              console.log(`  ${chalk.magenta(`${idx + 1}.`)} ${m}`);
            });
            console.log('');
          }
        }
      } catch (err: any) {
        console.log(chalk.red(`Failed to fetch AI suggestions: ${err.message || err}`));
      }
    }
  }

  console.log(chalk.bold.cyan('Make It Yours (Avoid Defense Collisions):'));
  console.log(
    chalk.white(
      '• Adapt the domain: Tailor the core concept to a specific user group or department on your campus (e.g., lab inventory vs library loans).'
    )
  );
  console.log(
    chalk.white(
      '• Add a custom constraint: Introduce a feature or data requirement (e.g., offline export, role-based audit logs) reflecting your personal interests.'
    )
  );
  console.log(
    chalk.dim(
      '• Protect your defense: Distinct domain adaptations demonstrate personal engineering effort, whereas identical unmodified implementations create serious defense risks.\n'
    )
  );

  console.log(chalk.bold.yellow('Next Steps:'));
  console.log(chalk.dim('• Run `projectmatch checklist` to review standard defense questions for your chosen project.'));
  console.log(chalk.dim('• Remember: ProjectMatch guides your design. You build and defend every line yourself!\n'));
}
