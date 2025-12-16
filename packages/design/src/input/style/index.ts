import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type InputToken = FullToken<'Input'>;

export const genInputStyle: GenerateStyle<InputToken> = (token: InputToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-affix-wrapper`]: {
      [`${componentCls}-suffix`]: {
        fontSize: token.fontSizeSM,
      },
    },
  };
};

export default genStyleHooks('Input', token => {
  return [genInputStyle(token as InputToken)];
});
