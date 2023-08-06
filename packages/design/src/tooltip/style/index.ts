import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TooltipToken = FullToken<'Tooltip'>;

export const genTooltipStyle: GenerateStyle<TooltipToken> = (token: TooltipToken): CSSObject => {
  const { componentCls, colorInfo, colorInfoBg, colorTextSecondary } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-close-icon`]: {
        cursor: 'pointer',
      },
      [`${componentCls}-close-icon-wrap`]: {
        display: 'flex',
        justifyContent: 'space-between', alignItems: 'flex-start',
        wordBreak: 'break-all'
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Tabs', token => {
    return [genTooltipStyle(token)];
  });
  return useStyle(prefixCls);
};
