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

const genSearchInputStyle: GenerateStyle<InputToken> = (token: InputToken) => {
  const { componentCls, antCls } = token;
  const searchPrefixCls = `${componentCls}-search`;
  return {
    [searchPrefixCls]: {
      [`> ${componentCls}-group`]: {
        [`> ${componentCls}-group-addon:last-child`]: {
          [`${searchPrefixCls}-button:not(${antCls}-btn-color-primary)`]: {
            color: token.colorIcon,

            '&:not([disabled]):hover': {
              color: token.colorIconHover,
            },

            '&:active': {
              color: token.colorIconHover,
            },
          },
        },
      },
    },
  };
};

export default genStyleHooks('Input', token => {
  return [genInputStyle(token as InputToken), genSearchInputStyle(token as InputToken)];
});
