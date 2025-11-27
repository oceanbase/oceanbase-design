import type { CSSObject } from '@ant-design/cssinjs';
import type { FooterToolBarToken } from '@ant-design/pro-layout/es/components/FooterToolbar/style';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genFooterToolbarStyle: GenerateStyle<FooterToolBarToken> = (
  token: FooterToolBarToken
): CSSObject => {
  const { componentCls, colorBgBase, borderRadius, boxShadowSecondary, controlHeightLG } = token;

  return {
    [`${componentCls}`]: {
      flexDirection: 'row-reverse',
      lineHeight: 'initial',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: token.padding,
      paddingBlock: token.padding,
      paddingInline: token.paddingXL,
      width: '100%',
      backgroundColor: colorBgBase,
      boxShadow: boxShadowSecondary,
      borderBlockStart: 'none',
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('FooterToolbar', token => {
    return [genFooterToolbarStyle(token as FooterToolBarToken)];
  });
  return useStyle(prefixCls);
};
