import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '../../..');
const ob = join(root, 'packages/cli/bin/ob-design.mjs');

function runOb(...args) {
  try {
    return execFileSync(process.execPath, [ob, ...args], {
      cwd: root,
      encoding: 'utf8',
      env: { ...process.env, NO_COLOR: '1' },
    });
  } catch (err) {
    const detail = [err.stderr, err.stdout].filter(Boolean).join('\n');
    throw new Error(detail ? `${err.message}\n${detail}` : err.message);
  }
}

test('ob-design info Table includes innerBordered (offline)', () => {
  const out = runOb('info', 'Table', '--json');
  const data = JSON.parse(out);
  assert.equal(data.name, 'Table');
  assert.ok(data.addedProps.includes('innerBordered'));
});

test('ob-design info Table merges antd props when antd-cli available', () => {
  const out = runOb('info', 'Table', '--json');
  const data = JSON.parse(out);
  if (data.antdMerge === 'merged') {
    assert.ok(Array.isArray(data.props) && data.props.some((p) => p.name === 'columns'));
  }
});

test('ob-design demo Filter outputs @oceanbase/design without antd import', () => {
  const out = runOb('demo', 'Filter', 'responsive');
  assert.match(out, /@oceanbase\/design/);
  assert.doesNotMatch(out, /from\s+['"]antd['"]/);
});

test('ob-design info Filter is diffLevel D without antd delegate', () => {
  const out = runOb('info', 'Filter', '--json');
  const data = JSON.parse(out);
  assert.equal(data.diffLevel, 'D');
  assert.equal(data.obOnly, true);
});

test('ob-design token --json returns runtime css vars', () => {
  const out = runOb('token', '--json');
  const data = JSON.parse(out);
  assert.ok(data.count >= 173);
  assert.ok(data.tokens.includes('--ob-color-text-description'));
  assert.ok(data.migrationHints['--ob-color-text-tertiary']);
});

test('ob-design lint flags invalid css token in scss', async () => {
  const { mkdtempSync, writeFileSync, rmSync } = await import('node:fs');
  const { join } = await import('node:path');
  const { tmpdir } = await import('node:os');
  const dir = mkdtempSync(join(tmpdir(), 'ob-lint-'));
  writeFileSync(join(dir, 'bad.scss'), '.x { color: var(--ob-color-text-tertiary); }');
  try {
    runOb('lint', dir, '--styles');
    assert.fail('expected lint to fail');
  } catch (err) {
    assert.match(String(err), /--ob-color-text-description/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
