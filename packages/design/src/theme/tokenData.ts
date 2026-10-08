/**
 * Single source of truth for `--ob-*` CSS variable data.
 *
 * Names and values come from the runtime injection (`genCssVariablesStyle`); descriptions,
 * categories and JS token names are joined from `obTokenMeta`. Every consumer must go through
 * this module instead of re-implementing the join:
 *
 * - `packages/design/scripts/generate-ide-tokens.ts` → `tokens/ob-css-vars.{reference.css,css-data.json}`
 *   (documented variables only, for editor IntelliSense)
 * - `scripts/extract-ob-css-vars.ts` → `metadata/obToken.css-vars.json` (all runtime variables,
 *   for the CLI and the docs token table)
 *
 * Consumers run through ts-node, so this module must stay free of side effects.
 */
import formatToken from 'antd/lib/theme/util/alias';
import designTheme from './index';
import defaultTheme from './default';
import { genCssVariablesStyle } from './obToken';
import { obTokenMeta } from './obTokenMeta';
import type { ObTokenCategory } from './obTokenMeta';
import type { GlobalToken } from './interface';

export interface ObCssVarEntry {
  /** Full CSS variable name, e.g. `--ob-color-bg-default` */
  cssVar: string;
  /** Variable name without the `--ob-` prefix, e.g. `color-bg-default` */
  name: string;
  /** Default theme value, identical to runtime injection */
  value: string;
  /** camelCase JS token name; documented variables only */
  jsToken?: string;
  /** Chinese description; documented variables only */
  desc?: string;
  /** English description; documented variables only */
  descEn?: string;
  /** `ObTokenCategory`; documented variables only */
  category?: ObTokenCategory;
  /** Whether `obTokenMeta` documents the variable (deprecated compat vars are not documented) */
  documented: boolean;
}

function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

/**
 * Global token of the default theme, resolved the same way as the `token` static export
 * (`src/static-function/index.tsx`) and the docs token tables (`.dumi/theme/builtins/ObTokenTable`).
 */
export function getDefaultGlobalToken(): GlobalToken {
  const { defaultAlgorithm, defaultSeed } = designTheme;
  const mapToken = {
    ...defaultAlgorithm(defaultSeed),
    ...defaultTheme.token,
    override: {
      boxShadow: defaultTheme.token?.boxShadow,
      boxShadowSecondary: defaultTheme.token?.boxShadowSecondary,
      boxShadowTertiary: defaultTheme.token?.boxShadowTertiary,
    },
  };
  return formatToken(mapToken) as GlobalToken;
}

/**
 * Every `--ob-*` variable injected by `genCssVariablesStyle`, in declaration order, with
 * `obTokenMeta` documentation joined by name.
 */
export function collectObCssVarEntries(token: GlobalToken, prefix = 'ob'): ObCssVarEntry[] {
  const style = genCssVariablesStyle(token, prefix) as { ':root'?: Record<string, unknown> }[];
  const rootVars = style[0]?.[':root'] ?? {};
  const metaByName = new Map(obTokenMeta.map(meta => [meta.name, meta]));

  return Object.entries(rootVars)
    .filter(([, value]) => value !== undefined)
    .map(([cssVar, value]) => {
      const name = cssVar.slice(prefix.length + 3);
      const meta = metaByName.get(name);
      return {
        cssVar,
        name,
        value: String(value),
        ...(meta
          ? {
              jsToken: kebabToCamel(meta.name),
              desc: meta.desc,
              descEn: meta.descEn,
              category: meta.category,
            }
          : {}),
        documented: Boolean(meta),
      };
    });
}

/** `cssVar` → entry lookup for consumers that need their own ordering. */
export function getObCssVarEntryMap(token: GlobalToken, prefix = 'ob'): Map<string, ObCssVarEntry> {
  return new Map(collectObCssVarEntries(token, prefix).map(entry => [entry.cssVar, entry]));
}
