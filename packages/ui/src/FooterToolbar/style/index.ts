import type { CSSObject } from '@ant-design/cssinjs';
import type { FooterToolBarToken } from '@ant-design/pro-layout/es/components/FooterToolbar/style';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genFooterToolbarStyle: GenerateStyle<FooterToolBarToken> = (
  token: FooterToolBarToken
): CSSObject => {
  const { antCls, componentCls, colorBgBase, borderRadius, boxShadowSecondary, controlHeightLG } =
    token;
  const height = controlHeightLG;
  const lineHeight = `${controlHeightLG}px`;

  return {
    [`${componentCls}`]: {
      width: '100%',
      backgroundColor: colorBgBase,
      borderRadius: borderRadius,
      boxShadow: boxShadowSecondary,
      borderBlockStart: 'none',
      // 设置底部操作栏的组件高度
      [`${antCls}-btn:not(${antCls}-input-search-button)`]: {
        minWidth: 68,
        height,
      },
      [`${antCls}-radio-button-wrapper`]: {
        height,
        lineHeight,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('FooterToolbar', token => {
    return [genFooterToolbarStyle(token as FooterToolBarToken)];
  });
  return useStyle(prefixCls);
};
