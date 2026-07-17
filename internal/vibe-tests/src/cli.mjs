/**
 * OB vibe-tests CLI
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  rmSync,
} from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluate, writeResult, aggregateDir, compareConfigs } from './evaluate.mjs';
import { generateForConfig, listConfigIds } from './generators.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const vibeRoot = join(__dirname, '..');
const promptsPath = join(vibeRoot, 'prompts.json');
const configsPath = join(vibeRoot, 'configs.json');

export const CONFIGS = JSON.parse(readFileSync(configsPath, 'utf8'));
export const PROMPTS = JSON.parse(readFileSync(promptsPath, 'utf8'));

export { evaluate };

function iterationId() {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
}

function cmdInteractive(sample = 5) {
  const n = Math.min(Number(sample), PROMPTS.length);
  const id = iterationId();
  const outDir = join(vibeRoot, 'results', id);
  mkdirSync(join(outDir, 'tasks'), { recursive: true });
  mkdirSync(join(outDir, 'results'), { recursive: true });

  const prompts = PROMPTS.slice(0, n);
  for (const prompt of prompts) {
    writeFileSync(join(outDir, 'tasks', `${prompt.id}.json`), JSON.stringify(prompt, null, 2));
  }

  writeFileSync(
    join(outDir, 'manifest.json'),
    JSON.stringify({ id, createdAt: new Date().toISOString(), promptCount: n, configs: Object.keys(CONFIGS) }, null, 2),
  );

  console.log(`Iteration ${id}: ${n} tasks → ${outDir}`);
  console.log(`Next: node internal/vibe-tests/src/cli.mjs run --iteration ${id} --configs all`);
  return id;
}

function cmdRun({ iteration, configs: configsArg, sample, fresh }) {
  const prompts = sample ? PROMPTS.slice(0, Math.min(Number(sample), PROMPTS.length)) : PROMPTS;
  const configIds = listConfigIds(configsArg || 'baseline-antd,ob-mcp-only');
  const id = iteration || iterationId();
  const iterRoot = join(vibeRoot, 'results', id);
  const resultsDir = join(iterRoot, 'results');

  mkdirSync(join(iterRoot, 'tasks'), { recursive: true });
  if (fresh && existsSync(resultsDir)) rmSync(resultsDir, { recursive: true });
  mkdirSync(resultsDir, { recursive: true });

  for (const prompt of prompts) {
    writeFileSync(join(iterRoot, 'tasks', `${prompt.id}.json`), JSON.stringify(prompt, null, 2));
    for (const configId of configIds) {
      const code = generateForConfig(configId, prompt);
      writeResult(resultsDir, prompt, configId, code);
    }
  }

  const summary = aggregateDir(resultsDir);
  summary.iteration = id;
  summary.configs = configIds;
  summary.promptCount = prompts.length;
  summary.generatedAt = new Date().toISOString();

  writeFileSync(join(iterRoot, 'summary.json'), JSON.stringify(summary, null, 2));
  writeFileSync(join(iterRoot, 'manifest.json'), JSON.stringify(summary, null, 2));

  console.log(`\n=== Iteration ${id} ===`);
  console.log(`Prompts: ${prompts.length} | Configs: ${configIds.join(', ')}`);
  console.log(`Total results: ${summary.total} | Success: ${summary.success} (${((summary.success / summary.total) * 100).toFixed(1)}%)\n`);

  for (const [cfg, stats] of Object.entries(summary.byConfig)) {
    const rate = ((stats.success / stats.total) * 100).toFixed(1);
    console.log(`  ${cfg}: ${stats.success}/${stats.total} (${rate}%)`);
  }

  const cmp = compareConfigs(summary);
  if (cmp) {
    console.log(`\nCompare ${cmp.obKey} vs ${cmp.baseKey}:`);
    console.log(`  ${cmp.baseKey}: ${(cmp.baseRate * 100).toFixed(1)}%`);
    console.log(`  ${cmp.obKey}: ${(cmp.obRate * 100).toFixed(1)}%`);
    console.log(`  Lift: ${cmp.lift.toFixed(1)}% (target >= 40%)`);
  }

  if (summary.failures?.length) {
    console.log(`\nFailures (${summary.failures.length}):`);
    for (const f of summary.failures.slice(0, 10)) {
      console.log(`  - ${f.id}: ${f.escapeHatches?.join(', ')}`);
    }
    if (summary.failures.length > 10) console.log(`  ... +${summary.failures.length - 10} more`);
  }

  return id;
}

function cmdSmoke() {
  return cmdRun({
    iteration: 'smoke',
    configs: 'baseline-antd,ob-mcp-only',
    sample: 2,
    fresh: true,
  });
}

function cmdAggregate(iteration) {
  const iterDir = join(vibeRoot, 'results', iteration);
  const resultsDir = join(iterDir, 'results');
  if (!existsSync(resultsDir)) throw new Error(`Missing ${resultsDir}`);
  const summary = aggregateDir(resultsDir);
  writeFileSync(join(iterDir, 'summary.json'), JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(summary, null, 2));
}

function cmdCompare(iteration, baseKey, obKey) {
  const summary = JSON.parse(readFileSync(join(vibeRoot, 'results', iteration, 'summary.json'), 'utf8'));
  const cmp = compareConfigs(summary, baseKey || 'baseline-antd', obKey || 'ob-mcp-only');
  if (!cmp) {
    console.error(`Need both ${baseKey || 'baseline-antd'} and ${obKey || 'ob-mcp-only'} in summary`);
    process.exit(1);
  }
  console.log(`${cmp.baseKey}: ${(cmp.baseRate * 100).toFixed(1)}%`);
  console.log(`${cmp.obKey}: ${(cmp.obRate * 100).toFixed(1)}%`);
  console.log(`Lift: ${cmp.lift.toFixed(1)}% (target >= 40%)`);
  process.exitCode = cmp.lift >= 40 ? 0 : 1;
}

function cmdReport(iteration) {
  const iterDir = join(vibeRoot, 'results', iteration);
  const summary = JSON.parse(readFileSync(join(iterDir, 'summary.json'), 'utf8'));
  const lines = [
    `# Vibe Test Report — ${iteration}`,
    '',
    `Generated: ${summary.generatedAt || '—'}`,
    `Prompts: ${summary.promptCount || '—'} | Total: ${summary.total} | Success: ${summary.success}`,
    '',
    '## By config',
    '',
    '| Config | Success | Total | Rate |',
    '|--------|---------|-------|------|',
  ];
  for (const [cfg, s] of Object.entries(summary.byConfig || {})) {
    lines.push(`| ${cfg} | ${s.success} | ${s.total} | ${((s.success / s.total) * 100).toFixed(1)}% |`);
  }
  const cmp = compareConfigs(summary);
  if (cmp) {
    lines.push('', '## Primary compare', '', `- ${cmp.baseKey}: ${(cmp.baseRate * 100).toFixed(1)}%`, `- ${cmp.obKey}: ${(cmp.obRate * 100).toFixed(1)}%`, `- Lift: **${cmp.lift.toFixed(1)}%**`, '');
  }
  writeFileSync(join(iterDir, 'REPORT.md'), lines.join('\n'));
  console.log(`Wrote ${join(iterDir, 'REPORT.md')}`);
}

const [cmd, ...rest] = process.argv.slice(2);
const flag = (name) => {
  const i = rest.indexOf(name);
  return i >= 0 ? rest[i + 1] : undefined;
};
const hasFlag = (name) => rest.includes(name);

switch (cmd) {
  case 'interactive':
    cmdInteractive(flag('--sample') || PROMPTS.length);
    break;
  case 'run':
    cmdRun({
      iteration: flag('--iteration'),
      configs: flag('--configs') || 'all',
      sample: flag('--sample'),
      fresh: hasFlag('--fresh'),
    });
    break;
  case 'smoke':
    cmdSmoke();
    break;
  case 'aggregate':
    cmdAggregate(flag('--iteration'));
    break;
  case 'compare':
    cmdCompare(flag('--iteration'), flag('--base'), flag('--ob'));
    break;
  case 'report':
    cmdReport(flag('--iteration'));
    break;
  default:
    console.error(`Usage:
  cli.mjs interactive [--sample n]
  cli.mjs run [--iteration id] [--configs all|a,b] [--sample n] [--fresh]
  cli.mjs smoke
  cli.mjs aggregate --iteration <id>
  cli.mjs compare --iteration <id> [--base cfg] [--ob cfg]
  cli.mjs report --iteration <id>`);
    process.exit(1);
}
