import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveAntdCliInvocation, resetAntdCliCache } from './resolve-antd-cli.mjs';

test('resolveAntdCliInvocation returns a valid invocation', () => {
  resetAntdCliCache();
  const inv = resolveAntdCliInvocation();
  assert.ok(inv.command);
  assert.ok(Array.isArray(inv.args));
  assert.ok(['path', 'local-bin', 'local-package', 'npx'].includes(inv.via));
  if (inv.via === 'npx') {
    assert.equal(inv.command, 'npx');
    assert.deepEqual(inv.args, ['-y', '@ant-design/cli']);
  }
});

test('resolveAntdCliInvocation caches result', () => {
  resetAntdCliCache();
  const a = resolveAntdCliInvocation();
  const b = resolveAntdCliInvocation();
  assert.equal(a, b);
});
