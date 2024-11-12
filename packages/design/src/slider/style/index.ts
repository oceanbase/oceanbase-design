import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type SliderToken = FullToken<'Slider'>;

export const genSliderStyle: GenerateStyle<SliderToken> = (token: SliderToken): CSSObject => {
  const { componentCls, dotSize = 8 } = token;
  return {
    [`${componentCls}${componentCls}-horizontal`]: {
      [`${componentCls}-mark`]: {
        [`${componentCls}-mark-text[style^="left: 0%; transform: translateX(-50%);"]`]: {
          transform: `translateX(calc(0% - ${dotSize / 2}px)) !important`,
        },
        [`${componentCls}-mark-text[style^="left: 100%; transform: translateX(-50%);"]`]: {
          transform: `translateX(calc(-100% + ${dotSize / 2}px)) !important`,
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Slider', token => {
    return [genSliderStyle(token as SliderToken)];
  });
  return useStyle(prefixCls);
};
