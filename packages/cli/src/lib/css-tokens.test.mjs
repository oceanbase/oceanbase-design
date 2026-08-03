import test from 'node:test';
import assert from 'node:assert/strict';
import { checkCssToken, scanCssVarUsage, loadValidCssTokens } from './css-tokens.mjs';

test('loadValidCssTokens has at least 173 tokens', () => {
  const tokens = loadValidCssTokens();
  assert.ok(tokens.size >= 173);
  assert.ok(tokens.has('--ob-color-text-description'));
});

test('checkCssToken valid token', () => {
  const result = checkCssToken('--ob-color-text-description');
  assert.equal(result.valid, true);
});

test('checkCssToken invalid with hint', () => {
  const result = checkCssToken('--ob-color-text-tertiary');
  assert.equal(result.valid, false);
  assert.equal(result.hint, '--ob-color-text-description');
});

test('checkCssToken accepts var() wrapper', () => {
  const result = checkCssToken('var(--ob-color-text-description)');
  assert.equal(result.valid, true);
});

test('scanCssVarUsage: invalid ob token with hint', () => {
  const issues = scanCssVarUsage('.x { color: var(--ob-color-text-tertiary); }', 'a.scss');
  assert.equal(issues.length, 1);
  assert.equal(issues[0].ruleId, 'ob-css-var-valid');
  assert.equal(issues[0].hint, '--ob-color-text-description');
});

test('scanCssVarUsage: valid token passes', () => {
  const issues = scanCssVarUsage('.x { color: var(--ob-color-text-description); }', 'a.scss');
  assert.equal(issues.length, 0);
});

test('scanCssVarUsage: fallback does not exempt invalid token', () => {
  const issues = scanCssVarUsage('.x { color: var(--ob-unknown-foo, #333); }', 'a.scss');
  assert.equal(issues.length, 1);
  assert.equal(issues[0].token, '--ob-unknown-foo');
});

test('scanCssVarUsage: padding triggers ob-space-not-padding', () => {
  const issues = scanCssVarUsage('.x { padding: var(--ob-padding-m); }', 'a.scss');
  assert.equal(issues.length, 1);
  assert.equal(issues[0].ruleId, 'ob-space-not-padding');
  assert.equal(issues[0].hint, '--ob-space-400');
});

test('scanCssVarUsage: ant css var triggers ob-token-not-antd', () => {
  const issues = scanCssVarUsage('.x { color: var(--ant-color-text); }', 'a.scss');
  assert.equal(issues.length, 1);
  assert.equal(issues[0].ruleId, 'ob-token-not-antd');
});

test('scanCssVarUsage: TSX inline style', () => {
  const issues = scanCssVarUsage(
    `const x = <div style={{ color: 'var(--ob-color-text-tertiary)' }} />;`,
    'a.tsx',
  );
  assert.equal(issues.length, 1);
  assert.equal(issues[0].ruleId, 'ob-css-var-valid');
});
