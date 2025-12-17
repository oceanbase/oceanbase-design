import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type CheckboxToken = FullToken<'Checkbox'>;

export const genCheckboxStyle: GenerateStyle<CheckboxToken> = (token: CheckboxToken): CSSObject => {
  const { componentCls, fontSize, lineHeight, lineWidth, controlInteractiveSize, calc } = token;
  const translateY = calc(fontSize)
    .mul(lineHeight)
    .sub(controlInteractiveSize)
    .sub(lineWidth)
    .div(2)
    .equal();
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}`]: {
        alignSelf: 'baseline',
        [`${componentCls}-inner`]: {
          transform: `translate(0px, ${unit(translateY)})`,
        },
      },
      [`&:hover ${componentCls}:not(${componentCls}-disabled):not(${componentCls}-checked) ${componentCls}-inner`]:
        {
          borderColor: token.gray7,
        },
    },
  };
};

export default genStyleHooks('Checkbox', token => {
  return [genCheckboxStyle(token as CheckboxToken)];
});
