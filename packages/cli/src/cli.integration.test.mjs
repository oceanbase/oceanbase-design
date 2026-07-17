import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '../../..');
const ob = join(root, 'packages/cli/bin/ob-design.mjs');

function runOb(...args) {
  return execFileSync(process.execPath, [ob, ...args], {
    cwd: root,
    encoding: 'utf8',
    env: { ...process.env, NO_COLOR: '1' },
  });
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
