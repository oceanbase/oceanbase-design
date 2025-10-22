import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TooltipToken = FullToken<'Tooltip'>;

export const genTooltipStyle: GenerateStyle<TooltipToken> = (token: TooltipToken): CSSObject => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      maxWidth: 300,
      [`${componentCls}-inner`]: {
        maxHeight: 250,
        overflow: 'auto',
      },
      [`${componentCls}-close-icon-wrap`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        wordBreak: 'break-all',
        [`${componentCls}-close-icon`]: {
          cursor: 'pointer',
          color: token.colorIcon,
          '&:hover': {
            color: token.colorIconHover,
          },
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook(
    'Tooltip',
    token => {
      return [genTooltipStyle(token as TooltipToken)];
    },
    ({ zIndexPopupBase, colorBgSpotlight }) => ({
      zIndexPopup: zIndexPopupBase + 70,
      colorBgDefault: colorBgSpotlight,
    })
  );
  return useStyle(prefixCls);
};
