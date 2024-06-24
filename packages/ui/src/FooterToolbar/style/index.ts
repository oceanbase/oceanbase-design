import type { CSSObject } from '@ant-design/cssinjs';
import type { FooterToolBarToken } from '@ant-design/pro-layout/es/components/FooterToolbar/style';
import { genLargeStyle } from '@oceanbase/design';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genCompactStyle = (componentCls: string, subComponentCls: string = ''): CSSObject => {
  return {
    [`&${componentCls}-compact-item:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item ${subComponentCls}`]:
      {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    [`&${componentCls}-compact-item:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item) ${subComponentCls}`]:
      {
        borderRadius: 0,
      },
    [`&${componentCls}-compact-item:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item ${subComponentCls}`]:
      {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
  };
};

export const genFooterToolbarStyle: GenerateStyle<FooterToolBarToken> = (
  token: FooterToolBarToken
): CSSObject => {
  const { componentCls, colorBgBase, borderRadius, boxShadowSecondary, controlHeightLG } = token;

  return {
    [`${componentCls}`]: {
      width: '100%',
      backgroundColor: colorBgBase,
      borderRadius: borderRadius,
      boxShadow: boxShadowSecondary,
      borderBlockStart: 'none',
      ...genLargeStyle(token),
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('FooterToolbar', token => {
    return [genFooterToolbarStyle(token as FooterToolBarToken)];
  });
  return useStyle(prefixCls);
};
