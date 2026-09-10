import { readFileSync } from 'fs';
import { join } from 'path';
import { describe, expect, it } from 'vitest';
import { buildCssData, buildReferenceCss, collectIdeTokenEntries } from '../generate-ide-tokens';
import { collectObCssVarEntries, getDefaultGlobalToken } from '../../src/theme/tokenData';

const tokensDir = join(__dirname, '..', '..', 'tokens');
// The committed CLI copy, not the gitignored `metadata/` intermediate: this test also runs in
// Test CI, which does not run `generate:metadata` first.
const metadataPath = join(
  __dirname,
  '..',
  '..',
  '..',
  'cli',
  'src',
  'metadata',
  'obToken.css-vars.json'
);

const cssVarNames = (entries: { cssVar: string }[]) => entries.map(entry => entry.cssVar).sort();

describe('IDE token artifacts', () => {
  it('keeps ob-css-vars.reference.css in sync with default theme tokens', () => {
    const committed = readFileSync(join(tokensDir, 'ob-css-vars.reference.css'), 'utf8');
    expect(committed).toBe(buildReferenceCss());
  });

  it('keeps ob-css-vars.css-data.json in sync with default theme tokens', () => {
    const committed = readFileSync(join(tokensDir, 'ob-css-vars.css-data.json'), 'utf8');
    expect(committed).toBe(`${JSON.stringify(buildCssData(), null, 2)}\n`);
  });

  it('emits default theme values for documented tokens only', () => {
    const entries = collectIdeTokenEntries();
    expect(entries.length).toBeGreaterThan(100);
    expect(entries.map(entry => entry.cssVar)).toContain('--ob-color-bg-default');
    // deprecated compatibility vars are not documented and must not be suggested
    expect(entries.map(entry => entry.cssVar)).not.toContain('--ob-color-default-text');
    expect(entries.every(entry => entry.value && entry.value !== '-')).toBe(true);
  });

  it('keeps metadata, IDE artifacts and runtime injection on the same variable set', () => {
    const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
    const all = collectObCssVarEntries(getDefaultGlobalToken());
    const documented = all.filter(entry => entry.documented);

    // metadata covers every runtime variable; editor artifacts cover the documented subset only
    expect(metadata.tokens).toEqual(cssVarNames(all));
    expect(cssVarNames(collectIdeTokenEntries())).toEqual(cssVarNames(documented));
    expect(documented.length).toBeLessThan(all.length);

    // both consumers must quote the values injected at runtime
    const valueByCssVar = new Map(all.map(entry => [entry.cssVar, entry.value]));
    expect(
      collectIdeTokenEntries().every(entry => entry.value === valueByCssVar.get(entry.cssVar))
    ).toBe(true);
  });
});
