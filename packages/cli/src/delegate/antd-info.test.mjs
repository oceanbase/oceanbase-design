import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseAntdInfoText, resolveAntdVersionArgs, OB_SUPPORTED_ANTD_MAJOR } from './antd-info.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '../../../..');

test('parseAntdInfoText extracts props from antd-cli text output', () => {
  const sample = `Table (表格) — A table displays rows of data.

Property           Type      Default  Since
-----------------  --------  -------  -----
bordered           boolean   false    -
columns            object[]  -        -
`;
  const parsed = parseAntdInfoText(sample);
  assert.equal(parsed.name, 'Table');
  assert.equal(parsed.nameZh, '表格');
  assert.equal(parsed.props.length, 2);
  assert.equal(parsed.props[0].name, 'bordered');
});

test('OB 1.x pins antd v5 for ob_info delegate', () => {
  assert.equal(OB_SUPPORTED_ANTD_MAJOR, 5);
  const args = resolveAntdVersionArgs('/tmp/no-such-project');
  assert.deepEqual(args, ['--version', '^5.29.3']);
  const designPkg = JSON.parse(readFileSync(join(root, 'packages/design/package.json'), 'utf8'));
  assert.ok(designPkg.dependencies.antd.startsWith('^5'));
});
