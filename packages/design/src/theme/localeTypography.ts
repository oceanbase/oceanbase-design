import { merge } from 'lodash';
import type { Locale as AntLocale } from 'antd/es/locale';
import type { ThemeConfig } from '../config-provider/context';
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
  getTableCellFontTokens,
  isCnLikeLocale,
  isEnLikeLocale,
  tableCellFontSizeEn,
} from './default';

type LocaleCodeCarrier = Pick<AntLocale, 'locale'>;

/**
 * 应用主题中与字号相关的显式配置。只用于判断「是否显式设置」，不读取其他字段，
 * 因此不依赖具体 provider 的 ThemeConfig 类型。
 */
type ExplicitSizeTheme = {
  token?: { fontSize?: number };
  components?: { Table?: { cellFontSize?: number } };
};

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
    Table: getTableCellFontTokens(fontSizeCn),
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
    Table: getTableCellFontTokens(tableCellFontSizeEn),
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
  locale: LocaleCodeCarrier,
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

/**
 * Locale font-family and font-weight patch (always applied; follows locale).
 */
function resolveLocaleFontPatch(
  mergedLocale: LocaleCodeCarrier,
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

/**
 * Locale typography patch. Size/table cell patches skip when the preset locks size or the
 * app theme sets the size explicitly; font family and weights always follow locale.
 */
export function resolveLocaleTypographyPatch(
  mergedLocale: LocaleCodeCarrier,
  mergedTheme: ThemeConfig,
  userTheme: ExplicitSizeTheme | undefined,
  resolvedTokens: LocaleFontTokens,
  options?: { sizeLocked?: boolean }
): ThemeConfig {
  return merge(
    {},
    options?.sizeLocked ? {} : getLocaleFontSizeThemePatch(mergedLocale, userTheme),
    resolveLocaleFontPatch(mergedLocale, mergedTheme, resolvedTokens)
  );
}

/**
 * Cn-like locale body/table font patch.
 *
 * Detect explicit config by "did the app theme set it", not by "does the value equal the
 * default": an explicit `fontSize: 13` (or `Table.cellFontSize: 12`) cannot be told apart
 * from the seed default by value and used to be silently overridden to 14.
 */
function getLocaleFontSizeThemePatch(
  mergedLocale: LocaleCodeCarrier,
  userTheme: ExplicitSizeTheme | undefined
): ThemeConfig {
  if (!isCnLikeLocale(mergedLocale.locale)) {
    return {};
  }

  const patch: ThemeConfig = {};
  if (userTheme?.token?.fontSize === undefined) {
    patch.token = {
      fontSize: fontSizeCn,
      lineHeight: lineHeightCn,
      fontHeight: fontHeightCn,
    };
  }

  const tablePatch: NonNullable<ThemeConfig['components']>['Table'] = {};

  if (userTheme?.components?.Table?.cellFontSize === undefined) {
    Object.assign(tablePatch, getTableCellFontTokens(fontSizeCn));
  }

  if (Object.keys(tablePatch as object).length > 0) {
    patch.components = { Table: tablePatch };
  }

  return patch;
}
