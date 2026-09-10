import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
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

function runObIn(cwd, ...args) {
  try {
    return execFileSync(process.execPath, [ob, ...args], {
      cwd,
      encoding: 'utf8',
      env: { ...process.env, NO_COLOR: '1' },
    });
  } catch (err) {
    const detail = [err.stderr, err.stdout].filter(Boolean).join('\n');
    throw new Error(detail ? `${err.message}\n${detail}` : err.message);
  }
}

/** Consumer project with @oceanbase/design installed (tokens artifact present). */
function makeConsumerDir() {
  const dir = mkdtempSync(join(tmpdir(), 'ob-setup-'));
  const tokensDir = join(dir, 'node_modules', '@oceanbase', 'design', 'tokens');
  mkdirSync(tokensDir, { recursive: true });
  writeFileSync(join(tokensDir, 'ob-css-vars.css-data.json'), '{ "version": 1.1, "properties": [] }\n');
  return dir;
}

const CSS_DATA_PATH = 'node_modules/@oceanbase/design/tokens/ob-css-vars.css-data.json';

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

test('ob-design lint flags invalid css token in scss', () => {
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

test('ob-design setup writes css.customData without dropping existing settings', () => {
  const dir = makeConsumerDir();
  mkdirSync(join(dir, '.vscode'), { recursive: true });
  writeFileSync(join(dir, '.vscode', 'settings.json'), '{\n  "editor.formatOnSave": true\n}\n');
  try {
    runObIn(dir, 'setup', '--client', 'vscode');
    const settings = JSON.parse(readFileSync(join(dir, '.vscode', 'settings.json'), 'utf8'));
    assert.equal(settings['editor.formatOnSave'], true);
    assert.deepEqual(settings['css.customData'], [CSS_DATA_PATH]);

    // Re-running must not duplicate the entry, and must leave the file untouched.
    const secondRun = runObIn(dir, 'setup', '--client', 'vscode');
    assert.match(secondRun, /Kept \.vscode\/settings\.json/);
    const again = JSON.parse(readFileSync(join(dir, '.vscode', 'settings.json'), 'utf8'));
    assert.deepEqual(again['css.customData'], [CSS_DATA_PATH]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('ob-design setup leaves a commented .vscode/settings.json untouched', () => {
  const dir = makeConsumerDir();
  mkdirSync(join(dir, '.vscode'), { recursive: true });
  const jsonc = '{\n  // keep me\n  "editor.formatOnSave": true\n}\n';
  writeFileSync(join(dir, '.vscode', 'settings.json'), jsonc);
  try {
    const out = runObIn(dir, 'setup', '--client', 'vscode');
    assert.match(out, /Skipped \.vscode\/settings\.json/);
    assert.equal(readFileSync(join(dir, '.vscode', 'settings.json'), 'utf8'), jsonc);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

const CSS_VARIABLES_EXTENSION = 'vunguyentuan.vscode-css-variables';

test('ob-design setup creates .vscode/extensions.json recommending the css variable extension', () => {
  const dir = makeConsumerDir();
  try {
    runObIn(dir, 'setup', '--client', 'vscode');
    const file = JSON.parse(readFileSync(join(dir, '.vscode', 'extensions.json'), 'utf8'));
    assert.deepEqual(file.recommendations, [CSS_VARIABLES_EXTENSION]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('ob-design setup keeps existing extension recommendations without duplicating', () => {
  const dir = makeConsumerDir();
  mkdirSync(join(dir, '.vscode'), { recursive: true });
  writeFileSync(
    join(dir, '.vscode', 'extensions.json'),
    '{\n  "recommendations": ["dbaeumer.vscode-eslint"]\n}\n'
  );
  try {
    runObIn(dir, 'setup', '--client', 'vscode');
    const file = JSON.parse(readFileSync(join(dir, '.vscode', 'extensions.json'), 'utf8'));
    assert.deepEqual(file.recommendations, ['dbaeumer.vscode-eslint', CSS_VARIABLES_EXTENSION]);

    // Re-running must not duplicate the entry.
    runObIn(dir, 'setup', '--client', 'vscode');
    const again = JSON.parse(readFileSync(join(dir, '.vscode', 'extensions.json'), 'utf8'));
    assert.deepEqual(again.recommendations, ['dbaeumer.vscode-eslint', CSS_VARIABLES_EXTENSION]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('ob-design setup leaves a commented .vscode/extensions.json untouched', () => {
  const dir = makeConsumerDir();
  mkdirSync(join(dir, '.vscode'), { recursive: true });
  const jsonc = '{\n  // keep me\n  "recommendations": []\n}\n';
  writeFileSync(join(dir, '.vscode', 'extensions.json'), jsonc);
  try {
    const out = runObIn(dir, 'setup', '--client', 'vscode');
    assert.match(out, /Skipped \.vscode\/extensions\.json/);
    assert.equal(readFileSync(join(dir, '.vscode', 'extensions.json'), 'utf8'), jsonc);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
