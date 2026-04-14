import type { ThemeConfig } from 'antd/es/config-provider';
import defaultTheme from '../../theme/default';
import zhCN from '../../locale/zh-CN';
import enUS from '../../locale/en-US';
import {
  fontSizeEn,
  tableCellFontSizeEn,
  isCnLikeLocale,
  isEnLikeLocale,
} from '../../theme/default';
import { getLocaleFontSizeThemePatch } from '../index';

describe('isCnLikeLocale', () => {
  it('matches zh / ja / ko primary subtags', () => {
    expect(isCnLikeLocale('zh-cn')).toBe(true);
    expect(isCnLikeLocale('zh-TW')).toBe(true);
    expect(isCnLikeLocale('ja-JP')).toBe(true);
    expect(isCnLikeLocale('ko')).toBe(true);
    expect(isCnLikeLocale('ko_KR')).toBe(true);
  });

  it('rejects Latin and other locales', () => {
    expect(isCnLikeLocale('en')).toBe(false);
    expect(isCnLikeLocale('en-gb')).toBe(false);
    expect(isCnLikeLocale('de-DE')).toBe(false);
    expect(isCnLikeLocale('fr')).toBe(false);
  });

  it('handles empty / undefined', () => {
    expect(isCnLikeLocale(undefined)).toBe(false);
    expect(isCnLikeLocale('')).toBe(false);
  });
});

describe('isEnLikeLocale', () => {
  it('matches en and en-* subtags', () => {
    expect(isEnLikeLocale('en')).toBe(true);
    expect(isEnLikeLocale('en-gb')).toBe(true);
    expect(isEnLikeLocale('en-US')).toBe(true);
    expect(isEnLikeLocale('en_au')).toBe(true);
  });

  it('rejects non-English locales', () => {
    expect(isEnLikeLocale('zh-cn')).toBe(false);
    expect(isEnLikeLocale('de-DE')).toBe(false);
    expect(isEnLikeLocale('')).toBe(false);
    expect(isEnLikeLocale(undefined)).toBe(false);
  });
});

describe('getLocaleFontSizeThemePatch', () => {
  const baseTheme = defaultTheme as ThemeConfig;
  const resolvedFs = baseTheme.token?.fontSize;

  it('returns Cn locale patch for zh locale', () => {
    const patch = getLocaleFontSizeThemePatch(
      zhCN as Parameters<typeof getLocaleFontSizeThemePatch>[0],
      baseTheme,
      resolvedFs
    );
    expect(patch.token?.fontSize).toBe(14);
    expect(patch.token?.fontHeight).toBe(22);
    expect(patch.components?.Table?.cellFontSize).toBe(14);
  });

  it('returns only Table localeEnEmbeddedControls for en locale', () => {
    expect(
      getLocaleFontSizeThemePatch(
        enUS as Parameters<typeof getLocaleFontSizeThemePatch>[0],
        baseTheme,
        resolvedFs
      )
    ).toEqual({
      components: { Table: { localeEnEmbeddedControls: true } },
    });
  });

  it('does not override custom body fontSize', () => {
    const custom: ThemeConfig = {
      ...baseTheme,
      token: { ...baseTheme.token, fontSize: 16 },
    };
    const patch = getLocaleFontSizeThemePatch(
      zhCN as Parameters<typeof getLocaleFontSizeThemePatch>[0],
      custom,
      custom.token?.fontSize
    );
    expect(patch.token).toBeUndefined();
    expect(patch.components?.Table?.cellFontSize).toBe(14);
  });

  it('does not override custom Table cellFontSize', () => {
    const custom: ThemeConfig = {
      ...baseTheme,
      components: {
        ...baseTheme.components,
        Table: { ...baseTheme.components?.Table, cellFontSize: 13 },
      },
    };
    const patch = getLocaleFontSizeThemePatch(
      zhCN as Parameters<typeof getLocaleFontSizeThemePatch>[0],
      custom,
      custom.token?.fontSize
    );
    expect(patch.token?.fontSize).toBe(14);
    expect(patch.components).toBeUndefined();
  });

  it('uses defaults from defaultTheme for guard values', () => {
    expect(fontSizeEn).toBe(13);
    expect(tableCellFontSizeEn).toBe(12);
  });
});
