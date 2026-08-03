import { checkCssToken, buildTokenPayload } from '../lib/css-tokens.mjs';

function resolveCheckArg(opts) {
  if (opts.check) return opts.check;
  const idx = process.argv.indexOf('--check');
  if (idx !== -1) {
    const next = process.argv[idx + 1];
    if (next?.startsWith('--ob-')) return next;
  }
  return null;
}

export async function tokenCommand(opts = {}) {
  const check = resolveCheckArg(opts);
  const { dense, json } = opts;

  if (check) {
    const result = checkCssToken(check);
    if (json) {
      console.log(JSON.stringify(result, null, 2));
      process.exitCode = result.valid ? 0 : 1;
      return;
    }
    if (result.valid) {
      console.log(`✓ ${result.token} is a valid runtime CSS variable`);
      return;
    }
    const hint = result.hint ? ` → use ${result.hint}` : '';
    console.log(`✗ ${result.token} is not a valid runtime CSS variable${hint}`);
    process.exitCode = 1;
    return;
  }

  const payload = buildTokenPayload({ dense });

  if (json) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  if (dense) {
    console.log(`# obToken CSS variables (${payload.count})\n`);
    console.log(payload.rules.map((r) => `- ${r}`).join('\n'));
    console.log('\n## Categories\n');
    for (const [cat, vars] of Object.entries(payload.categories)) {
      console.log(`### ${cat} (${vars.length})`);
      console.log(vars.slice(0, 8).join(', ') + (vars.length > 8 ? ', ...' : ''));
    }
    console.log('\n## Common migration hints\n');
    const entries = Object.entries(payload.migrationHints).slice(0, 12);
    for (const [from, to] of entries) {
      console.log(`${from} → ${to}`);
    }
    if (Object.keys(payload.migrationHints).length > 12) {
      console.log('... (use --json for full list)');
    }
    return;
  }

  console.log(`# obToken CSS variables\n`);
  console.log(`Source: ${payload.source}`);
  console.log(`Count: ${payload.count} runtime --ob-* variables\n`);
  console.log('## Rules\n');
  for (const rule of payload.rules) {
    console.log(`- ${rule}`);
  }
  console.log('\n## Categories\n');
  for (const [cat, vars] of Object.entries(payload.categories)) {
    console.log(`- ${cat}: ${vars.length} tokens`);
  }
  console.log('\nUse `ob-design token --json` for full list, `--check <name>` to validate a token.');
}
