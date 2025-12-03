import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type InputToken = FullToken<'Input'>;

export const genInputStyle: GenerateStyle<InputToken> = (token: InputToken): CSSObject => {
  const { componentCls, calc } = token;
  return {
    [`${componentCls}-affix-wrapper`]: {
      [`${componentCls}-suffix`]: {
        fontSize: token.fontSizeSM,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Input', token => {
    return [genInputStyle(token as InputToken)];
  });
  return useStyle(prefixCls);
};
