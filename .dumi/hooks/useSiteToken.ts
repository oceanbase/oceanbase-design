import { useContext } from 'react';
import { ConfigProvider, theme } from '@oceanbase/design';

const { useToken } = theme;

const useSiteToken = () => {
  const { token, ...rest } = useToken();
  const { getPrefixCls, iconPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const siteMarkdownCodeBg = token.colorFillTertiary;

  return {
    ...rest,
    token: {
      ...token,
      headerHeight: 64,
      menuItemBorder: 2,
      mobileMaxWidth: 767.99,
      siteMarkdownCodeBg,
      antCls: `.${rootPrefixCls}`,
      iconCls: `.${iconPrefixCls}`,
      /** 56 */
      marginFarXS: (token.marginXXL / 6) * 7,
      /** 80 */
      marginFarSM: (token.marginXXL / 3) * 5,
      /** 96 */
      marginFar: token.marginXXL * 2,
      codeFamily: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    },
  };
};

export default useSiteToken;
