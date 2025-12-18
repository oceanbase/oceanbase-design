import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type DropdownToken = FullToken<'Dropdown'>;

export const genDropdownStyle: GenerateStyle<DropdownToken> = (token: DropdownToken) => {
  const { antCls, lineWidth } = token;
  const btnComponentCls = `${antCls}-btn`;
  const selector = `${btnComponentCls}-compact-item${btnComponentCls}-primary:not([disabled])`;
  return {
    // special style for primary Dropdown.Button
    [`${selector} + ${selector}::before`]: {
      top: -1,
      backgroundColor: token.colorWhite,
      height: `calc(100% + ${lineWidth * 2}px)`,
    } as CSSObject,
  };
};

export default genStyleHooks('Dropdown', token => {
  return [genDropdownStyle(token as DropdownToken)];
});
