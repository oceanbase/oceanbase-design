import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type CheckboxToken = FullToken<'Checkbox'>;

export const genCheckboxStyle: GenerateStyle<CheckboxToken> = (token: CheckboxToken): CSSObject => {
  const { componentCls, fontSize, lineHeight, controlInteractiveSize, calc } = token;
  const controlSize = unit(controlInteractiveSize);
  const marginTop = calc(fontSize).mul(lineHeight).sub(controlInteractiveSize).div(2).equal();
  return {
    [`${componentCls}-wrapper`]: {
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
    },
  };
};

export default genStyleHooks('Checkbox', token => {
  return [genCheckboxStyle(token as CheckboxToken)];
});
