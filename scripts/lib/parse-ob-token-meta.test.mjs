import test from 'node:test';
import assert from 'node:assert/strict';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseObTokenMeta } from './parse-ob-token-meta.mjs';

const obTokenMetaPath = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../packages/design/src/theme/obTokenMeta.ts',
);

test('parseObTokenMeta reads name, desc, category from obTokenMeta.ts', () => {
  const meta = parseObTokenMeta(obTokenMetaPath);
  assert.ok(meta.length >= 100);
  const white = meta.find(m => m.name === 'white');
  assert.equal(white?.desc, '白色');
  assert.equal(white?.category, 'color');
  const textDefault = meta.find(m => m.name === 'color-text-default');
  assert.equal(textDefault?.category, 'color-text');
});
