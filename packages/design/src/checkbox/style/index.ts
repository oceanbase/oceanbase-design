import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type CheckboxToken = FullToken<'Checkbox'>;

export const genCheckboxStyle: GenerateStyle<CheckboxToken> = (token: CheckboxToken): CSSObject => {
  const { componentCls, fontSize, fontSizeLG, lineHeight, calc } = token;
  const translateY = calc(calc(fontSize).mul(lineHeight).equal()).sub(fontSizeLG).div(2).equal();
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}`]: {
        alignSelf: 'baseline',
        [`${componentCls}-inner`]: {
          transform: `translate(0px, ${translateY})`,
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Checkbox', token => {
    return [genCheckboxStyle(token as CheckboxToken)];
  });
  return useStyle(prefixCls);
};
