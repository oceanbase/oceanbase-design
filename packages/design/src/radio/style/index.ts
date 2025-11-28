import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type RadioToken = FullToken<'Radio'>;

export const genRadioStyle: GenerateStyle<RadioToken> = (token: RadioToken): CSSObject => {
  const { componentCls, radioSize, fontSize, fontSizeLG, lineHeight, calc } = token;
  const marginBottom = calc(calc(fontSize).mul(lineHeight).equal())
    .sub(radioSize || fontSizeLG)
    .div(-2)
    .equal();
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}`]: {
        alignSelf: 'baseline',
        [`${componentCls}-inner`]: {
          marginBottom,
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Radio', token => {
    return [genRadioStyle(token as RadioToken)];
  });
  return useStyle(prefixCls);
};
