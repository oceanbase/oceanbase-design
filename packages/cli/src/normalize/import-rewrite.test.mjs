import test from 'node:test';
import assert from 'node:assert/strict';
import { rewriteImports } from './import-rewrite.mjs';
import { extractDemoSource, parseDemoList } from '../delegate/antd-output-parse.mjs';

test('rewriteImports replaces antd and icons', () => {
  const input = `
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd/es/table';
`;
  const out = rewriteImports(input);
  assert.match(out, /from '@oceanbase\/design'/);
  assert.match(out, /from '@oceanbase\/icons'/);
  assert.match(out, /from '@oceanbase\/design\/es\/table'/);
  assert.doesNotMatch(out, /from 'antd'/);
  assert.doesNotMatch(out, /@ant-design\/icons/);
});

test('extractDemoSource strips header before import', () => {
  const raw = `Button / Title
Description line

import React from 'react';
import { Button } from 'antd';
`;
  const out = extractDemoSource(raw);
  assert.match(out, /^import React/);
  assert.doesNotMatch(out, /^Button/);
});

test('parseDemoList extracts demo ids', () => {
  const raw = `Button Demos:

  basic — Basic Usage
  block — Block Button
`;
  const demos = parseDemoList(raw);
  assert.equal(demos.length, 2);
  assert.equal(demos[0].id, 'basic');
});
