import { Command } from 'commander';
import { infoCommand } from './commands/info.mjs';
import { docCommand } from './commands/doc.mjs';
import { demoCommand } from './commands/demo.mjs';
import { listCommand } from './commands/list.mjs';
import { constraintCommand } from './commands/constraint.mjs';
import { routeCommand } from './commands/route.mjs';
import { searchCommand } from './commands/search.mjs';
import { tokenCommand } from './commands/token.mjs';
import { lintCommand } from './commands/lint.mjs';
import { doctorCommand } from './commands/doctor.mjs';
import { setupCommand } from './commands/setup.mjs';
import { migrateCommand } from './commands/migrate.mjs';
import { templateCommand } from './commands/template.mjs';
import { designMdCommand } from './commands/design-md.mjs';
import { startMcpServer } from './mcp/server.mjs';

function globalFlags(cmd) {
  return cmd.option('--dense', 'Token-efficient output').option('--json', 'JSON output');
}

export async function runCli(argv) {
  const program = new Command();
  program.name('ob-design').description('OceanBase Design CLI').version('0.1.0-alpha.1');

  globalFlags(program.command('info <name>').description('Merged OB component API')).action(
    async (name, opts) => infoCommand(name, opts),
  );

  globalFlags(program.command('doc <name>').description('Component documentation')).action(
    async (name, opts) => docCommand(name, opts),
  );

  program
    .command('demo <name> [demoId]')
    .description('Demo with rewritten imports')
    .action(demoCommand);

  globalFlags(program.command('list').description('List registered components')).action((_, opts) =>
    listCommand(opts),
  );

  globalFlags(program.command('constraint').description('OB constraints (ASSEMBLY)')).action(
    (_, opts) => constraintCommand(opts),
  );

  globalFlags(program.command('route <intent>').description('Intent to component route')).action(
    (intent, opts) => routeCommand(intent, opts),
  );

  globalFlags(program.command('search <query>').description('Search components')).action(
    (query, opts) => searchCommand(query, opts),
  );

  globalFlags(program.command('token').description('obToken reference')).action(async (_, opts) =>
    tokenCommand(opts),
  );

  program
    .command('lint [target]')
    .description('Lint OB conventions')
    .option('--json', 'JSON output')
    .action((target = './src', opts) => lintCommand(target, opts));

  globalFlags(program.command('doctor').description('Project health check')).action((_, opts) =>
    doctorCommand(opts),
  );

  program
    .command('setup')
    .description('Write ob-design mcp + AGENTS.md (no antd mcp)')
    .option('--client <client>', 'cursor | claude | agents | all', 'all')
    .action((opts) => setupCommand(opts.client));

  program
    .command('migrate [target]')
    .description('Run @oceanbase/codemod')
    .option('--dry', 'Dry run')
    .action((target = './src', opts) => migrateCommand(target, { dryRun: opts.dry }));

  program
    .command('template <name>')
    .description('Emit page template')
    .option('--skeleton', 'Layout skeleton only')
    .action((name, opts) => templateCommand(name, opts));

  program
    .command('design.md')
    .description('Design language file (antd baseline + OB overrides)')
    .option('--format <format>', 'json')
    .action((opts) => designMdCommand(opts));

  program.command('mcp').description('Start MCP server (stdio)').action(() => startMcpServer());

  await program.parseAsync(argv);
}
