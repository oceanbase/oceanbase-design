import { merge } from 'lodash';
import type { ThemeConfig } from '../config-provider/context';
import type { Locale } from '../locale';
import type { AliasToken, GlobalToken } from './interface';
import seedTheme, {
  fontFamilyEn,
  fontSizeCn,
  fontHeightCn,
  lineHeightCn,
  fontSizeEn,
  fontWeightWeakEn,
  fontWeightEn,
  fontWeightStrongEn,
  isCnLikeLocale,
  isEnLikeLocale,
  tableCellFontSizeEn,
} from './default';

const OB_TYPOGRAPHY_PRESET_KEY = '__obTypographyPreset' as const;

type OBTypographyPreset = 'default' | 'compact';

type TypographyThemeConfig = ThemeConfig & {
  [OB_TYPOGRAPHY_PRESET_KEY]?: OBTypographyPreset;
};

/** Cn-like locale typography: 14px body + table cells; fontFamily stays on seed stack. */
export const defaultTheme: TypographyThemeConfig = {
  [OB_TYPOGRAPHY_PRESET_KEY]: 'default',
  token: {
    fontSize: fontSizeCn,
    lineHeight: lineHeightCn,
    fontHeight: fontHeightCn,
  },
  components: {
    Table: {
      cellFontSize: fontSizeCn,
    },
  },
};

type LocaleFontTokens = {
  fontFamily: string;
  fontWeightWeak: number;
  fontWeight: number;
  fontWeightStrong: number;
};

const seedToken = seedTheme.token as Partial<AliasToken>;

/** En-like locale typography: 13px body + table cells; fontFamily follows locale. */
export const compactTheme: TypographyThemeConfig = {
  [OB_TYPOGRAPHY_PRESET_KEY]: 'compact',
  token: {
    fontSize: fontSizeEn,
    lineHeight: seedToken.lineHeight,
    fontHeight: seedToken.fontHeight,
  },
  components: {
    Table: {
      cellFontSize: tableCellFontSizeEn,
    },
  },
};

export function isTypographyThemeLocked(theme?: ThemeConfig): boolean {
  if (!theme) {
    return false;
  }
  if (theme === defaultTheme || theme === compactTheme) {
    return true;
  }
  const preset = (theme as TypographyThemeConfig)[OB_TYPOGRAPHY_PRESET_KEY];
  return preset === 'default' || preset === 'compact';
}

const getLocaleTokenValue = (
  mergedThemeToken: GlobalToken,
  locale: Locale,
  tokenKey: string,
  tokenValue: string | number,
  tokenValueEn: string | number,
  tokenValueSeed: string | number
) => {
  if (tokenValue !== mergedThemeToken[tokenKey]) {
    return { [tokenKey]: tokenValue };
  }
  if (
    isEnLikeLocale(locale.locale) &&
    (mergedThemeToken[tokenKey] === undefined || tokenValue === tokenValueSeed)
  ) {
    return { [tokenKey]: tokenValueEn };
  }
  return {};
};

const getLocaleTokenValueCn = (
  mergedThemeToken: GlobalToken,
  locale: Locale,
  tokenKey: string,
  tokenValue: string | number | undefined,
  tokenValueEn: number,
  tokenValueCn: number
) => {
  return tokenValue !== mergedThemeToken[tokenKey]
    ? { [tokenKey]: tokenValue }
    : isCnLikeLocale(locale.locale) && (tokenValue === undefined || tokenValue === tokenValueEn)
      ? { [tokenKey]: tokenValueCn }
      : {};
};

/**
 * Locale font-family and font-weight patch (always applied; follows locale).
 */
function resolveLocaleFontPatch(
  mergedLocale: Locale,
  mergedTheme: ThemeConfig,
  resolvedTokens: LocaleFontTokens
): ThemeConfig {
  const mergedThemeToken = (mergedTheme.token ?? {}) as GlobalToken;

  return {
    token: {
      ...getLocaleTokenValue(
        mergedThemeToken,
        mergedLocale,
        'fontFamily',
        resolvedTokens.fontFamily,
        fontFamilyEn,
        seedToken.fontFamily!
      ),
      ...getLocaleTokenValue(
        mergedThemeToken,
        mergedLocale,
        'fontWeightWeak',
        resolvedTokens.fontWeightWeak,
        fontWeightWeakEn,
        seedToken.fontWeightWeak!
      ),
      ...getLocaleTokenValue(
        mergedThemeToken,
        mergedLocale,
        'fontWeight',
        resolvedTokens.fontWeight,
        fontWeightEn,
        seedToken.fontWeight!
      ),
      ...getLocaleTokenValue(
        mergedThemeToken,
        mergedLocale,
        'fontWeightStrong',
        resolvedTokens.fontWeightStrong,
        fontWeightStrongEn,
        seedToken.fontWeightStrong!
      ),
    },
  };
}

/** Table locale alignment patch (always applied; follows locale). */
function getLocaleTableLocalePatch(mergedLocale: Locale): ThemeConfig {
  if (!isEnLikeLocale(mergedLocale.locale)) {
    return {};
  }
  return {
    components: {
      Table: {
        localeEnEmbeddedControls: true,
      },
    },
  };
}

/**
 * Locale typography patch. Size/table cell patches skip when preset locks size;
 * font and table locale alignment always follow locale.
 */
export function resolveLocaleTypographyPatch(
  mergedLocale: Locale,
  mergedTheme: ThemeConfig,
  resolvedFontSize: number | undefined,
  resolvedTokens: LocaleFontTokens,
  options?: { sizeLocked?: boolean }
): ThemeConfig {
  return merge(
    {},
    options?.sizeLocked
      ? {}
      : getLocaleFontSizeThemePatch(mergedLocale, mergedTheme, resolvedFontSize),
    resolveLocaleFontPatch(mergedLocale, mergedTheme, resolvedTokens),
    getLocaleTableLocalePatch(mergedLocale)
  );
}

function getLocaleFontSizeThemePatch(
  mergedLocale: Locale,
  mergedTheme: ThemeConfig,
  resolvedFontSize: number | undefined
): ThemeConfig {
  const tokenPatch = getLocaleTokenValueCn(
    (mergedTheme.token ?? {}) as GlobalToken,
    mergedLocale,
    'fontSize',
    resolvedFontSize,
    fontSizeEn,
    fontSizeCn
  );

  const patch: ThemeConfig = {};
  if ('fontSize' in tokenPatch && tokenPatch.fontSize !== undefined) {
    patch.token = {
      fontSize: tokenPatch.fontSize as number,
      lineHeight: lineHeightCn,
      fontHeight: fontHeightCn,
    };
  }

  const tablePatch: NonNullable<ThemeConfig['components']>['Table'] = {};

  const cellFs = mergedTheme.components?.Table?.cellFontSize;
  if (
    (cellFs === undefined || cellFs === tableCellFontSizeEn) &&
    isCnLikeLocale(mergedLocale.locale)
  ) {
    Object.assign(tablePatch, { cellFontSize: fontSizeCn });
  }

  if (Object.keys(tablePatch as object).length > 0) {
    patch.components = { Table: tablePatch };
  }

  return patch;
}
