import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type InputNumberToken = FullToken<'InputNumber'>;

export const genInputStyle: GenerateStyle<InputNumberToken> = (
  token: InputNumberToken
): CSSObject => {
  const { antCls, componentCls } = token;
  const selectComponentCls = `${antCls}-select-selector`;
  return {
    [`${componentCls}-group-wrapper`]: {
      [`${componentCls}-group-addon`]: {
        color: token.colorTextTertiary,
        fontSize: token.fontSizeSM,
        [selectComponentCls]: {
          color: token.colorTextTertiary,
        },
      },
    },
  };
};

export default genStyleHooks('InputNumber', token => {
  return [genInputStyle(token as InputNumberToken)];
});
