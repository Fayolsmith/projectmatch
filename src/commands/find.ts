import select from '@inquirer/select';
import input from '@inquirer/input';
import chalk from 'chalk';
import { Category, FilterCriteria, ProjectType, SkillLevel } from '../lib/types.js';
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
  console.log(chalk.bold.cyan('\nProjectMatch — SIWES & Final Year Project Scope Finder'));
  console.log(DISCLAIMER);

  const projectType = (await select({
    message: 'Select project type you are scoping for:',
    choices: [
      { name: 'SIWES Industrial Training (Practical focus, shorter timeframe, panel defense)', value: 'siwes' },
      { name: 'Final Year Project (Academic focus, supervisor proposal approval, topic defense)', value: 'final-year' },
    ],
  })) as ProjectType;

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
    message: 'How many weeks do you have available for project completion? (e.g. 6, 8, 12):',
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
    projectType,
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
    console.log(
      `${chalk.gray('Type:')} ${chalk.yellow(project.projectType === 'final-year' ? 'Final Year Project' : 'SIWES')}  |  ${chalk.gray('Category:')} ${chalk.blue(project.category.toUpperCase())}  |  ${chalk.gray('Level:')} ${chalk.magenta(project.skillLevel)}  |  ${chalk.gray('Timeframe:')} ${chalk.green(project.timeframeLabel)}`
    );
    console.log(`\n${chalk.white(project.description)}`);

    if (project.problemStatement) {
      console.log(`\n${chalk.bold('Problem Statement:')}\n${chalk.white(project.problemStatement)}`);
    }

    if (project.whySuitableForYou) {
      console.log(`\n${chalk.bold('Why This Suits You:')}\n${chalk.white(project.whySuitableForYou)}`);
    }

    if (project.whySupervisorMightApprove) {
      console.log(`\n${chalk.bold('Why a Supervisor Might Approve This:')}\n${chalk.white(project.whySupervisorMightApprove)}`);
    }

    if (project.defendingYourChoice && project.defendingYourChoice.length > 0) {
      console.log(`\n${chalk.bold('Defending Your Choice (If Asked):')}`);
      project.defendingYourChoice.forEach((point, idx) => {
        console.log(`  ${chalk.green(`${idx + 1}.`)} ${point}`);
      });
    }

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
            console.log(`${chalk.gray('Type:')} ${chalk.yellow(p.projectType === 'final-year' ? 'Final Year Project' : 'SIWES')}  |  ${chalk.gray('Category:')} ${chalk.blue(p.category.toUpperCase())}  |  ${chalk.gray('Level:')} ${chalk.magenta(p.skillLevel)}  |  ${chalk.gray('Timeframe:')} ${chalk.green(p.timeframeLabel)}`);
            console.log(`\n${chalk.white(p.description)}`);

            if (p.problemStatement) {
              console.log(`\n${chalk.bold('Problem Statement:')}\n${chalk.white(p.problemStatement)}`);
            }

            if (p.whySuitableForYou) {
              console.log(`\n${chalk.bold('Why This Suits You:')}\n${chalk.white(p.whySuitableForYou)}`);
            }

            if (p.whySupervisorMightApprove) {
              console.log(`\n${chalk.bold('Why a Supervisor Might Approve This:')}\n${chalk.white(p.whySupervisorMightApprove)}`);
            }

            if (p.defendingYourChoice && p.defendingYourChoice.length > 0) {
              console.log(`\n${chalk.bold('Defending Your Choice (If Asked):')}`);
              p.defendingYourChoice.forEach((point, idx) => {
                console.log(`  ${chalk.magenta(`${idx + 1}.`)} ${point}`);
              });
            }

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

  if (!options.ai) {
    console.log(
      chalk.dim(
        'Tip: Coordinating a large cohort? Run with --ai for additional AI-generated suggestions beyond the curated bank (see README for free local setup with Ollama).\n'
      )
    );
  }

  console.log(chalk.bold.yellow('Next Steps:'));
  if (projectType === 'final-year') {
    console.log(chalk.dim('• Run `projectmatch proposal` to review general guidance for writing your proposal for supervisor approval.'));
  }
  console.log(chalk.dim('• Run `projectmatch checklist` to review standard defense questions for your chosen project.'));
  console.log(chalk.dim('• Remember: ProjectMatch guides your design. You build and defend every line yourself!\n'));
}
