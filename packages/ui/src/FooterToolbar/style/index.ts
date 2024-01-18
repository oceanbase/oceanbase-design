import type { CSSObject } from '@ant-design/cssinjs';
import type { FooterToolBarToken } from '@ant-design/pro-layout/es/components/FooterToolbar/style';
import type { FullToken, GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genOperationStyle = (token: FullToken<any>): CSSObject => {
  const { antCls, fontSize, controlHeightLG } = token;
  const height = controlHeightLG;
  const lineHeight = `${controlHeightLG}px`;

  return {
    // Button
    [`${antCls}-btn`]: {
      minWidth: controlHeightLG,
      height,
      fontSize,
    },
    // Radio.Button
    [`${antCls}-radio-button-wrapper`]: {
      height,
      lineHeight,
      fontSize,
    },
    // Input
    [`${antCls}-input-wrapper`]: {
      lineHeight,
    },
    [`${antCls}-input`]: {
      height,
      fontSize,
    },
    [`${antCls}-input-search-button`]: {
      height,
      lineHeight,
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
      ...genOperationStyle(token),
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('FooterToolbar', token => {
    return [genFooterToolbarStyle(token as FooterToolBarToken)];
  });
  return useStyle(prefixCls);
};
