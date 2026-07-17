import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function migrateCommand(target, { dryRun }) {
  const args = ['-y', '@oceanbase/codemod', target];
  if (dryRun) args.push('--dry');

  const result = spawnSync('npx', args, { encoding: 'utf8', shell: process.platform === 'win32' });

  const report = {
    target,
    dryRun: !!dryRun,
    exitCode: result.status,
    stdout: result.stdout,
    stderr: result.stderr,
  };

  writeFileSync(join(process.cwd(), 'migration-report.json'), JSON.stringify(report, null, 2));
  console.log(result.stdout || result.stderr || 'Migration complete.');
  process.exitCode = result.status ?? 1;
}
