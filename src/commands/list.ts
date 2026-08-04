import chalk from 'chalk';
import { filterProjectsDirect } from '../lib/matcher.js';
import { getCategories, getSkillLevels } from '../lib/bank.js';

export function listCommand(options: { category?: string; level?: string }) {
  const categoryFilter = options.category;
  const levelFilter = options.level;

  const validCategories = getCategories().map((c) => c.value);
  const validLevels = getSkillLevels().map((s) => s.value);

  if (categoryFilter && categoryFilter !== 'all' && !validCategories.includes(categoryFilter as any)) {
    console.log(chalk.red(`Invalid category '${categoryFilter}'. Available categories: ${validCategories.join(', ')}`));
    return;
  }

  if (levelFilter && levelFilter !== 'all' && !validLevels.includes(levelFilter as any)) {
    console.log(chalk.red(`Invalid level '${levelFilter}'. Available levels: ${validLevels.join(', ')}`));
    return;
  }

  const projects = filterProjectsDirect(categoryFilter, levelFilter);

  console.log(chalk.bold.cyan('\nCurated Project Bank Browser'));
  if (categoryFilter || levelFilter) {
    console.log(
      chalk.dim(
        `Filters applied: ${categoryFilter ? `Category=${categoryFilter} ` : ''}${levelFilter ? `Level=${levelFilter}` : ''}`
      )
    );
  }
  console.log('');

  if (projects.length === 0) {
    console.log(chalk.yellow('No projects match your filter parameters.'));
    console.log(chalk.dim('Try listing without filters: `projectmatch list`\n'));
    return;
  }

  console.log(chalk.bold.green(`Showing ${projects.length} curated project idea(s):\n`));

  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    console.log(chalk.bold.white(`--------------------------------------------------------------------------------`));
    console.log(`${chalk.bold.yellow(`[${p.id}] ${p.title}`)}`);
    console.log(
      `${chalk.gray('Category:')} ${chalk.blue(p.category.toUpperCase())}  |  ${chalk.gray('Level:')} ${chalk.magenta(p.skillLevel)}  |  ${chalk.gray('Timeframe:')} ${chalk.green(p.timeframeLabel)}`
    );
    console.log(`\n${chalk.white(p.description)}`);
    console.log(`\n${chalk.bold('Suggested Stack:')} ${chalk.cyan(p.suggestedStack.join(', '))}`);
    console.log(`\n${chalk.bold('Milestones:')}`);
    p.milestones.forEach((m, idx) => {
      console.log(`  ${chalk.green(`${idx + 1}.`)} ${m}`);
    });
    console.log('');
  }
}
