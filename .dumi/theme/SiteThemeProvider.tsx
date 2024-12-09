import { ConfigProvider } from '@oceanbase/design';
import type { ThemeConfig } from '@oceanbase/design';
import { ChartProvider } from '@oceanbase/charts';
import type { ThemeProviderProps } from 'antd-style';
import { ThemeProvider } from 'antd-style';
import type { FC } from 'react';
import React, { useContext } from 'react';
import useLocale from '../hooks/useLocale';
import SiteContext from './slots/SiteContext';
import zhCN from '../../packages/design/src/locale/zh-CN';
import useSiteToken from '../hooks/useSiteToken';

interface NewToken {
  bannerHeight: number;
  headerHeight: number;
  menuItemBorder: number;
  mobileMaxWidth: number;
  siteMarkdownCodeBg: string;
  antCls: string;
  iconCls: string;
  marginFarXS: number;
  marginFarSM: number;
  marginFar: number;
  codeFamily: string;
  contentMarginTop: number;
  anchorTop: number;
}

// 通过给 antd-style 扩展 CustomToken 对象类型定义，可以为 useTheme 中增加相应的 token 对象
declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends NewToken {}
}

const SiteThemeProvider: FC<
  ThemeProviderProps<any> & {
    theme: ThemeConfig;
  }
> = ({ children, theme, ...rest }) => {
  const { getPrefixCls, iconPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();

  const [_, lang] = useLocale();
  const { direction } = useContext(SiteContext);

  const { token } = useSiteToken();

  return (
    <ThemeProvider
      {...rest}
      theme={theme}
      customToken={{
        headerHeight: 64,
        menuItemBorder: 2,
        mobileMaxWidth: 767.99,
        siteMarkdownCodeBg: token.colorFillTertiary,
        antCls: `.${rootPrefixCls}`,
        iconCls: `.${iconPrefixCls}`,
        /** 56 */
        marginFarXS: (token.marginXXL / 6) * 7,
        /** 80 */
        marginFarSM: (token.marginXXL / 3) * 5,
        /** 96 */
        marginFar: token.marginXXL * 2,
        codeFamily: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
      }}
    >
      <ConfigProvider
        {...rest}
        theme={theme as ThemeConfig}
        direction={direction}
        locale={lang === 'cn' ? zhCN : undefined}
      >
        <ChartProvider theme={theme.isDark ? 'dark' : 'light'}>{children}</ChartProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default SiteThemeProvider;
