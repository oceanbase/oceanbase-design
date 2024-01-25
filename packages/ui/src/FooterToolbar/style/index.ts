import type { CSSObject } from '@ant-design/cssinjs';
import type { FooterToolBarToken } from '@ant-design/pro-layout/es/components/FooterToolbar/style';
import type { FullToken, GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genOperationStyle = (token: FullToken<any>): CSSObject => {
  const { antCls, controlHeightLG } = token;

  return {
    // limit min width for icon button
    [`${antCls}-btn`]: {
      minWidth: controlHeightLG,
    },
    // set large DatePicker, TimePicker and RangePicker height when font-size is 14px
    [`${antCls}-picker-large`]: {
      height: controlHeightLG,
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
