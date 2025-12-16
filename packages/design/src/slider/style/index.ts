import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type SliderToken = FullToken<'Slider'>;

export const genSliderStyle: GenerateStyle<SliderToken> = (token: SliderToken): CSSObject => {
  const { componentCls, dotSize = 8, handleSize = 10, handleLineWidth = 2, calc } = token;
  const dotSizeHalf = unit(calc(dotSize).div(2).equal());
  const handleOffset = unit(
    calc(handleSize).add(calc(handleLineWidth).mul(2).equal()).div(2).equal()
  );
  return {
    [`${componentCls}${componentCls}-horizontal`]: {
      [`${componentCls}-mark`]: {
        [`${componentCls}-mark-text[style*="left: 0%;"]`]: {
          transform: `translateX(calc(0% - ${dotSizeHalf})) !important`,
        },
        [`${componentCls}-mark-text[style*="left: 100%;"]`]: {
          transform: `translateX(calc(-100% + ${dotSizeHalf})) !important`,
        },
        [`${componentCls}-mark-text[style="transform: translateX(-50%);"]`]: {
          transform: `translateX(calc(0% - ${handleOffset})) !important`,
        },
      },
    },
  };
};

export default genStyleHooks('Slider', token => {
  return [genSliderStyle(token as SliderToken)];
});
