const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { transformContent, loadMigrationHints } = require('../ob-css-tokens');

describe('ob-css-tokens', () => {
  it('loads migration hints', () => {
    const hints = loadMigrationHints();
    assert.equal(hints['--ob-color-text-tertiary'], '--ob-color-text-description');
    assert.equal(hints['--ob-padding-m'], '--ob-space-400');
  });

  it('replaces invalid var() with hint target', () => {
    const hints = loadMigrationHints();
    const input = '.x { color: var(--ob-color-text-tertiary); padding: var(--ob-padding-m); }';
    const { content, changed } = transformContent(input, hints);
    assert.equal(changed, true);
    assert.match(content, /var\(--ob-color-text-description\)/);
    assert.match(content, /var\(--ob-space-400\)/);
    assert.doesNotMatch(content, /--ob-color-text-tertiary/);
  });

  it('leaves valid tokens unchanged', () => {
    const hints = loadMigrationHints();
    const input = '.x { color: var(--ob-color-text-description); }';
    const { content, changed } = transformContent(input, hints);
    assert.equal(changed, false);
    assert.equal(content, input);
  });
});
