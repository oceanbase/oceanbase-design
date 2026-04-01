import { existsSync } from 'fs';
import { describe, expect, it } from 'vitest';
import { verifyObTokenDtcg, collectGenCssVariableNames } from '../verify-ob-token-alignment';

const dtcgDir = process.env.OCEANBASE_DESIGN_TOKEN_DIR;

describe('verifyObTokenDtcg', () => {
  it('collectGenCssVariableNames includes semantic and seed vars', () => {
    const names = collectGenCssVariableNames();
    expect(names.has('--ob-color-bg-default')).toBe(true);
    expect(names.has('--ob-blue-1')).toBe(true);
    expect(names.has('--ob-font-family-code')).toBe(true);
  });

  it('DTCG WEB is subset of genCssVariablesStyle when OCEANBASE_DESIGN_TOKEN_DIR is set', () => {
    if (!dtcgDir || !existsSync(dtcgDir)) {
      return;
    }
    const { missing } = verifyObTokenDtcg(dtcgDir);
    expect(missing, JSON.stringify({ missing }, null, 2)).toEqual([]);
  });
});
