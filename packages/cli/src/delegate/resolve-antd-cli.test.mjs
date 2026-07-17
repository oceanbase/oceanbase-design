import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveAntdCliInvocation, resetAntdCliCache } from './resolve-antd-cli.mjs';

test('resolveAntdCliInvocation returns a valid invocation', () => {
  resetAntdCliCache();
  const inv = resolveAntdCliInvocation();
  assert.ok(inv.command);
  assert.ok(Array.isArray(inv.args));
  assert.ok(['path', 'local-bin', 'local-package', 'bundled-bin', 'bundled-package', 'npx'].includes(inv.via));
  if (inv.via === 'npx') {
    assert.equal(inv.command, 'npx');
    assert.deepEqual(inv.args, ['-y', '@ant-design/cli']);
  }
});

test('resolveAntdCliInvocation prefers bundled @ant-design/cli from design-cli', () => {
  resetAntdCliCache();
  const inv = resolveAntdCliInvocation('/tmp/no-node-modules-here');
  if (inv.via === 'npx') return;
  assert.ok(['path', 'bundled-bin', 'bundled-package', 'local-bin', 'local-package'].includes(inv.via));
});

test('resolveAntdCliInvocation caches result', () => {
  resetAntdCliCache();
  const a = resolveAntdCliInvocation();
  const b = resolveAntdCliInvocation();
  assert.equal(a, b);
});
