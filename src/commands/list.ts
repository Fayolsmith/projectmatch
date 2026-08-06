import chalk from 'chalk';
import { filterProjectsDirect } from '../lib/matcher.js';
import { getCategories, getSkillLevels } from '../lib/bank.js';

export function listCommand(options: { category?: string; level?: string; type?: string }) {
  const categoryFilter = options.category;
  const levelFilter = options.level;
  const typeFilter = options.type;

  const validCategories = getCategories().map((c) => c.value);
  const validLevels = getSkillLevels().map((s) => s.value);
  const validTypes = ['siwes', 'final-year'];

  if (categoryFilter && categoryFilter !== 'all' && !validCategories.includes(categoryFilter as any)) {
    console.log(chalk.red(`Invalid category '${categoryFilter}'. Available categories: ${validCategories.join(', ')}`));
    return;
  }

  if (levelFilter && levelFilter !== 'all' && !validLevels.includes(levelFilter as any)) {
    console.log(chalk.red(`Invalid level '${levelFilter}'. Available levels: ${validLevels.join(', ')}`));
    return;
  }

  if (typeFilter && typeFilter !== 'all' && !validTypes.includes(typeFilter.toLowerCase())) {
    console.log(chalk.red(`Invalid type '${typeFilter}'. Available types: ${validTypes.join(', ')}`));
    return;
  }

  const projects = filterProjectsDirect(categoryFilter, levelFilter, typeFilter);

  console.log(chalk.bold.cyan('\nCurated Project Bank Browser'));
  if (categoryFilter || levelFilter || typeFilter) {
    console.log(
      chalk.dim(
        `Filters applied: ${typeFilter ? `Type=${typeFilter} ` : ''}${categoryFilter ? `Category=${categoryFilter} ` : ''}${levelFilter ? `Level=${levelFilter}` : ''}`
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
      `${chalk.gray('Type:')} ${chalk.yellow(p.projectType === 'final-year' ? 'Final Year Project' : 'SIWES')}  |  ${chalk.gray('Category:')} ${chalk.blue(p.category.toUpperCase())}  |  ${chalk.gray('Level:')} ${chalk.magenta(p.skillLevel)}  |  ${chalk.gray('Timeframe:')} ${chalk.green(p.timeframeLabel)}`
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
