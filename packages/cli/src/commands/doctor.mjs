import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getAntdCliStatus } from '../delegate/antd-cli.mjs';

export async function doctorCommand({ json }) {
  const checks = [];
  const cwd = process.cwd();

  try {
    const pkg = JSON.parse(readFileSync(join(cwd, 'package.json'), 'utf8'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    checks.push({
      name: 'ob-design-dep',
      ok: !!deps['@oceanbase/design'],
      message: deps['@oceanbase/design']
        ? `@oceanbase/design ${deps['@oceanbase/design']}`
        : 'Missing @oceanbase/design dependency',
    });
    checks.push({
      name: 'no-direct-antd',
      ok: !deps.antd || deps['@oceanbase/design'],
      message: deps.antd
        ? 'antd listed — ensure components import from @oceanbase/design'
        : 'No direct antd dependency',
    });
  } catch {
    checks.push({ name: 'package.json', ok: false, message: 'No package.json in cwd' });
  }

  const antdStatus = getAntdCliStatus(cwd);
  checks.push({
    name: 'antd-cli-for-ob_info',
    ok: antdStatus.fast,
    message: antdStatus.fast
      ? `antd CLI ready for ob_info merge (via ${antdStatus.via})`
      : `antd CLI via npx — reinstall @oceanbase/design-cli to bundle @ant-design/cli`,
  });

  const allOk = checks.every((c) => c.ok);
  if (json) {
    console.log(JSON.stringify({ checks, ok: allOk }, null, 2));
  } else {
    for (const c of checks) {
      console.log(`${c.ok ? '✓' : '✗'} ${c.name}: ${c.message}`);
    }
  }
  process.exitCode = allOk ? 0 : 1;
}
