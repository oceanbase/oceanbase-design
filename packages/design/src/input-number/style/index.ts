import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type InputNumberToken = FullToken<'InputNumber'>;

export const genInputNumberStyle: GenerateStyle<InputNumberToken> = (
  token: InputNumberToken
): CSSObject => {
  const { antCls, iconCls, componentCls } = token;
  const selectComponentCls = `${antCls}-select-selector`;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-handler-wrap`]: {
        [`${componentCls}-handler:hover`]: {
          borderColor: token.gray7,
          [iconCls]: {
            color: token.colorIcon,
          },
          [`& + ${componentCls}-handler`]: {
            borderTopColor: token.gray7,
          },
        },
      },
    },
    [`${componentCls}-group-wrapper`]: {
      [`${componentCls}-group-addon`]: {
        color: token.colorTextSecondary,
        fontSize: token.fontSizeSM,
        [selectComponentCls]: {
          color: token.colorTextSecondary,
        },
      },
    },
  };
};

export default genStyleHooks('InputNumber', token => {
  return [genInputNumberStyle(token as InputNumberToken)];
});
