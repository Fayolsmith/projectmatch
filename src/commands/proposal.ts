import chalk from 'chalk';

export function proposalCommand() {
  console.log(chalk.bold.cyan('\nProjectMatch — Final Year Project Proposal Guidance'));
  console.log(
    chalk.yellowBright(
      `================================================================================
  NOTICE: ProjectMatch GUIDES your proposal thinking — it NEVER writes your proposal
  document for you or guarantees supervisor approval. You must write and defend
  your own proposal document based on your institution's guidelines.
================================================================================\n`
    )
  );

  console.log(chalk.bold.white('1. How to Structure a Clear Problem Statement'));
  console.log(chalk.white('   • Name the specific gap or inefficiency: Identify what is currently slow, inaccurate, missing, or insecure.'));
  console.log(chalk.white('   • Identify the target context/users: Specify who experiences the problem (e.g., campus library staff, mobile users, dev teams).'));
  console.log(chalk.white('   • State your proposed technical approach: Briefly state how your software solution addresses the gap directly.'));
  console.log(chalk.dim('   Example: "Manual lab equipment tracking leads to lost inventory; this project builds an automated web portal with barcode checkouts to track equipment status."\n'));

  console.log(chalk.bold.white('2. How to Justify Scope & Feasibility Within an Academic Timeframe'));
  console.log(chalk.white('   • Set hard boundary conditions: Explicitly list what your project WILL and WILL NOT include (e.g., "focuses on core REST API, excludes native iOS app").'));
  console.log(chalk.white('   • Map milestones to weeks: Break implementation into 3-5 concrete phases with estimated week durations (e.g., 2 wks schema design, 4 wks API, 2 wks testing).'));
  console.log(chalk.white("   • Leverage your existing tools: Highlight technologies you already know to demonstrate you won't spend the entire semester learning basic syntax.\n"));

  console.log(chalk.bold.white('3. Common Reasons Supervisors Reject Proposals & How to Avoid Them'));
  console.log(chalk.white('   • Overly Vague Problem: "Building an e-commerce site" -> Fix: Specify target niche, unique technical constraints, or data requirements.'));
  console.log(chalk.white('   • Unrealistic Enterprise Scope: "Building a full cloud OS" -> Fix: Scope down to a well-defined prototype or core microservice.'));
  console.log(chalk.white('   • Lack of Academic/Technical Depth: "Simple static HTML site" -> Fix: Incorporate database transactions, auth, state management, or algorithmic processing.'));
  console.log(chalk.white('   • No Clear Deliverables: "Researching AI" -> Fix: Frame around concrete software artifacts (API, dashboard, CLI tool, dataset parser).\n'));

  console.log(chalk.bold.white('4. Pre-Submission Self-Check List'));
  console.log(chalk.green('   [ ] Does your title clearly state what the system is and does?'));
  console.log(chalk.green('   [ ] Can you explain the problem statement in under 30 seconds?'));
  console.log(chalk.green('   [ ] Is the tech stack realistic for your current skill level?'));
  console.log(chalk.green('   [ ] Have you defined clear boundaries for what is out of scope?'));
  console.log(chalk.green('   [ ] Can you articulate 2-3 reasons why you chose this specific topic?\n'));

  console.log(chalk.bold.yellow('Remember:'));
  console.log(chalk.dim('• Supervisors evaluate proposals for clarity, feasibility, and technical depth.'));
  console.log(chalk.dim('• ProjectMatch provides guidance — you write your proposal document and defend your choices!\n'));
}
