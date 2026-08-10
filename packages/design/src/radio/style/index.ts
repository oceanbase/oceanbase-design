import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type RadioToken = FullToken<'Radio'>;

export const genRadioStyle: GenerateStyle<RadioToken> = (token: RadioToken): CSSObject => {
  const { iconCls, componentCls, radioSize, fontSize, fontSizeLG, lineHeight, calc } = token;
  const controlSize = unit(radioSize || fontSizeLG);
  const marginTop = calc(fontSize)
    .mul(lineHeight)
    .sub(radioSize || fontSizeLG)
    .div(2)
    .equal();
  return {
    [`${componentCls}-wrapper`]: {
      alignItems: 'flex-start',
      [`${componentCls}`]: {
        alignSelf: 'flex-start',
        lineHeight: 'inherit',
        marginTop,
        '@supports (height: 1lh)': {
          marginTop: `calc((1lh - ${controlSize}) / 2)`,
        },
      },
      [`&:hover ${componentCls}:not(${componentCls}-disabled):not(${componentCls}-checked) ${componentCls}-inner`]:
        {
          borderColor: token.gray7,
        },
      [`&:hover ${componentCls}${componentCls}-checked:not(${componentCls}-disabled) ${componentCls}-inner`]:
        {
          borderColor: token.colorPrimaryHover,
          backgroundColor: token.colorPrimaryHover,
        },
    },
    [`${componentCls}-group`]: {
      [`${componentCls}-button-wrapper:not(${componentCls}-button-wrapper-disabled):not(${componentCls}-button-wrapper-checked):hover`]:
        {
          // set zIndex to 1 for hover effect to cover checked effect
          zIndex: 1,
          borderColor: token.gray7,
          color: token.colorText,
        },
      // Radio.Button with icon style
      [`${componentCls}-button-wrapper`]: {
        [`&${componentCls}-button-wrapper-with-icon`]: {
          [`${componentCls}-button-label`]: {
            gap: token.sizeXXS,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          },
          [`&:not(${componentCls}-button-wrapper-checked):not(${componentCls}-button-wrapper-disabled)`]:
            {
              [`${componentCls}-button-label`]: {
                [iconCls]: {
                  color: token.colorIcon,
                },
              },
            },
        },
        // Radio.Button icon-only style
        [`&${componentCls}-button-wrapper-icon-only`]: {
          paddingInline: token.paddingXS,
        },
      },
    },
  };
};

export default genStyleHooks('Radio', token => {
  return [genRadioStyle(token as RadioToken)];
});
