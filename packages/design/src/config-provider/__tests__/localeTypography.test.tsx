import React from 'react';
import { render } from '@testing-library/react';
import type { ThemeConfig } from 'antd/es/config-provider';
import { ConfigProvider, useToken } from '@oceanbase/design';
import seedTheme from '../../theme/default';
import zhCN from '../../locale/zh-CN';
import enUS from '../../locale/en-US';
import { fontFamilyEn } from '../../theme/default';
import {
  compactTheme,
  defaultTheme,
  isTypographyThemeLocked,
  resolveLocaleTypographyPatch,
} from '../../theme/localeTypography';

const seedToken = seedTheme.token!;
const resolvedTokens = {
  fontFamily: seedToken.fontFamily!,
  fontWeightWeak: seedToken.fontWeightWeak!,
  fontWeight: seedToken.fontWeight!,
  fontWeightStrong: seedToken.fontWeightStrong!,
};

describe('locale typography presets', () => {
  it('exports defaultTheme and compactTheme markers', () => {
    expect(isTypographyThemeLocked(defaultTheme)).toBe(true);
    expect(isTypographyThemeLocked(compactTheme)).toBe(true);
    expect(isTypographyThemeLocked({ ...compactTheme, isDark: true })).toBe(true);
    expect(isTypographyThemeLocked({ isDark: true })).toBe(false);
  });

  it('resolveLocaleTypographyPatch returns Cn patch for zh locale', () => {
    const baseTheme = seedTheme as ThemeConfig;
    const patch = resolveLocaleTypographyPatch(
      zhCN,
      baseTheme,
      baseTheme.token?.fontSize,
      resolvedTokens
    );
    expect(patch.token?.fontSize).toBe(14);
    expect(patch.token?.fontHeight).toBe(22);
    expect(patch.components?.Table?.cellFontSize).toBe(14);
  });

  it('resolveLocaleTypographyPatch returns en typography patch', () => {
    const baseTheme = seedTheme as ThemeConfig;
    const patch = resolveLocaleTypographyPatch(
      enUS,
      baseTheme,
      baseTheme.token?.fontSize,
      resolvedTokens
    );
    expect(patch.token?.fontFamily).toBe(fontFamilyEn);
    expect(patch.components?.Table?.localeEnEmbeddedControls).toBe(true);
  });

  it('resolveLocaleTypographyPatch does not override custom Table cellFontSize', () => {
    const custom: ThemeConfig = {
      ...seedTheme,
      components: {
        ...seedTheme.components,
        Table: { ...seedTheme.components?.Table, cellFontSize: 13 },
      },
    };
    const patch = resolveLocaleTypographyPatch(
      zhCN,
      custom,
      custom.token?.fontSize,
      resolvedTokens
    );
    expect(patch.token?.fontSize).toBe(14);
    expect(patch.components?.Table?.cellFontSize).toBeUndefined();
  });

  it('zh locale without theme uses 14px body and seed fontFamily', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(14);
      expect(token.fontFamily).toBe(seedTheme.token.fontFamily);
      return <div />;
    };
    render(
      <ConfigProvider locale={zhCN}>
        <Child />
      </ConfigProvider>
    );
  });

  it('en locale without theme uses compact typography', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(13);
      expect(token.fontFamily).toBe(fontFamilyEn);
      return <div />;
    };
    render(
      <ConfigProvider locale={enUS}>
        <Child />
      </ConfigProvider>
    );
  });

  it('en-US locale string applies fontFamilyEn via isEnLikeLocale', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(fontFamilyEn);
      return <div />;
    };
    render(
      <ConfigProvider locale={{ ...enUS, locale: 'en-US' }}>
        <Child />
      </ConfigProvider>
    );
  });

  it('custom fontSize guard skips locale body fontSize patch for zh', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(16);
      return <div />;
    };
    render(
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: { fontSize: 16 },
        }}
      >
        <Child />
      </ConfigProvider>
    );
  });

  it('custom fontSize guard still patches Table cellFontSize for zh', () => {
    const customTheme: ThemeConfig = { token: { fontSize: 16 } };
    const patch = resolveLocaleTypographyPatch(zhCN, customTheme, 16, {
      fontFamily: seedTheme.token.fontFamily,
      fontWeightWeak: seedTheme.token.fontWeightWeak,
      fontWeight: seedTheme.token.fontWeight,
      fontWeightStrong: seedTheme.token.fontWeightStrong,
    });
    expect(patch.token?.fontSize).toBeUndefined();
    expect(patch.components?.Table?.cellFontSize).toBe(14);
  });

  it('custom fontFamily guard skips locale fontFamily patch for en', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(`'Custom Font'`);
      return <div />;
    };
    render(
      <ConfigProvider
        locale={enUS}
        theme={{
          token: { fontFamily: `'Custom Font'` },
        }}
      >
        <Child />
      </ConfigProvider>
    );
  });

  it('zh locale with compactTheme locks size but keeps locale fontFamily', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(13);
      expect(token.fontFamily).toBe(seedTheme.token.fontFamily);
      return <div />;
    };
    render(
      <ConfigProvider locale={zhCN} theme={compactTheme}>
        <Child />
      </ConfigProvider>
    );
  });

  it('en locale with isDark still applies locale typography and dark colors', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(13);
      expect(token.fontFamily).toBe(fontFamilyEn);
      expect(token.colorBgLayout).not.toBe(seedTheme.token.colorBgLayout);
      return <div />;
    };
    render(
      <ConfigProvider locale={enUS} theme={{ isDark: true }}>
        <Child />
      </ConfigProvider>
    );
  });

  it('de locale has no compact typography patch', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(13);
      expect(token.fontFamily).toBe(seedTheme.token.fontFamily);
      return <div />;
    };
    render(
      <ConfigProvider locale={{ ...enUS, locale: 'de-DE' }}>
        <Child />
      </ConfigProvider>
    );
  });

  it('zh locale with defaultTheme preset uses 14px', () => {
    const custom: ThemeConfig = { ...defaultTheme };
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(14);
      return <div />;
    };
    render(
      <ConfigProvider locale={zhCN} theme={custom}>
        <Child />
      </ConfigProvider>
    );
  });

  it('en locale with defaultTheme preset locks size but keeps locale fontFamily', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(14);
      expect(token.fontFamily).toBe(fontFamilyEn);
      return <div />;
    };
    render(
      <ConfigProvider locale={enUS} theme={defaultTheme}>
        <Child />
      </ConfigProvider>
    );
  });

  it('nested ConfigProvider inherits size lock but font follows child locale', () => {
    const Child = () => {
      const { token } = useToken();
      expect(token.fontSize).toBe(13);
      expect(token.fontFamily).toBe(fontFamilyEn);
      return <div />;
    };
    render(
      <ConfigProvider locale={zhCN} theme={compactTheme}>
        <ConfigProvider locale={enUS}>
          <Child />
        </ConfigProvider>
      </ConfigProvider>
    );
  });

  it('spread preset preserves size lock and locale fontFamily on zh', () => {
    const merged = {
      ...compactTheme,
      token: { ...compactTheme.token, colorPrimary: '#abc123' },
    };
    expect(isTypographyThemeLocked(merged)).toBe(true);

    const Child = () => {
      const { token } = useToken();
      expect(token.fontFamily).toBe(seedTheme.token.fontFamily);
      expect(token.colorPrimary).toBe('#abc123');
      return <div />;
    };
    render(
      <ConfigProvider locale={zhCN} theme={merged}>
        <Child />
      </ConfigProvider>
    );
  });
});
