import chalk from 'chalk';
import { DEFENSE_CHECKLIST } from '../data/checklistData.js';
import { DISCLAIMER } from './find.js';

export function checklistCommand() {
  console.log(chalk.bold.cyan('\nSIWES Final Defense Readiness Checklist'));
  console.log(DISCLAIMER);
  console.log(
    chalk.dim(
      'Use this checklist to prepare for questions commonly asked by academic defense panels.\nEnsure you can answer every prompt confidently before presentation day.\n'
    )
  );

  DEFENSE_CHECKLIST.forEach((cat) => {
    console.log(chalk.bold.yellow(`================================================================================`));
    console.log(chalk.bold.cyan(cat.categoryTitle));
    console.log(chalk.dim(cat.description));
    console.log(chalk.bold.yellow(`================================================================================`));

    cat.items.forEach((item, idx) => {
      console.log(`\n  ${chalk.bold.white(`[Q${idx + 1}] ${item.question}`)}`);
      console.log(`     ${chalk.bold.magenta('Self-Check:')} ${item.selfCheckPrompt}`);
      console.log(`     ${chalk.bold.green('Defense Tip:')} ${item.defenseTip}`);
    });
    console.log('');
  });

  console.log(chalk.bold.yellow('Defense Master Tip:'));
  console.log(
    chalk.white(
      'Panels judge you on your comprehension and problem-solving process, not code volume.\nIf you build your project yourself, you will comfortably answer every question above!\n'
    )
  );
}
