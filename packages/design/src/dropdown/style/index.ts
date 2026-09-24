import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type DropdownToken = FullToken<'Dropdown'>;

export const genDropdownStyle: GenerateStyle<DropdownToken> = (token: DropdownToken) => {
  const { antCls, componentCls, lineWidth } = token;
  const btnComponentCls = `${antCls}-btn`;
  const selector = `${btnComponentCls}-compact-item${btnComponentCls}-primary:not([disabled])`;
  const menuComponentCls = `${componentCls}-menu`;

  return {
    [`${componentCls}-button`]: {
      // special style for primary Dropdown.Button
      [`${selector} + ${selector}::before`]: {
        top: -1,
        backgroundColor: token.colorWhite,
        height: `calc(100% + ${lineWidth * 2}px)`,
      },
      [`${btnComponentCls}-primary${btnComponentCls}-compact-item`]: {
        [`&:hover, &:focus, &:active`]: {
          zIndex: 2,
        },
      },
    },
    // handle dropdown menu icon style, use colorIcon to keep it same with icon in Menu and Button
    // dark menu、disabled、selected and danger item keep their own color
    [`${menuComponentCls}:not(${menuComponentCls}-dark)`]: {
      [`${menuComponentCls}-item:not(${menuComponentCls}-item-disabled):not(${menuComponentCls}-item-selected):not(${menuComponentCls}-item-danger) > ${menuComponentCls}-item-icon, ${menuComponentCls}-submenu:not(${menuComponentCls}-submenu-disabled):not(${menuComponentCls}-submenu-selected) > ${menuComponentCls}-submenu-title > ${menuComponentCls}-item-icon`]:
        {
          color: token.colorIcon,
        },
    },
  };
};

export default genStyleHooks('Dropdown', token => {
  return [genDropdownStyle(token as DropdownToken)];
});
