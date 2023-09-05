import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, AliasToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TooltipToken = FullToken<'Tooltip'>;

export const genTooltipStyle: GenerateStyle<TooltipToken> = (token: TooltipToken): CSSObject => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      [`${componentCls}-close-icon-wrap`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        wordBreak: 'break-all',
        [`${componentCls}-close-icon`]: {
          cursor: 'pointer',
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Tooltip', token => {
    return [genTooltipStyle(token as TooltipToken)];
  }, ({ zIndexPopupBase, colorBgSpotlight }) => ({
    zIndexPopup: zIndexPopupBase + 70,
    colorBgDefault: colorBgSpotlight,
  }),);
  return useStyle(prefixCls);
};
