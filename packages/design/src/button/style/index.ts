import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle, PresetColorKey } from '../../theme/interface';
import { PresetColors } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type ButtonToken = FullToken<'Button'>;

export const genPresetColorStyle = (token: ButtonToken): Record<string, CSSObject> => {
  const { componentCls } = token;
  const addPresetColors = ['primary', 'dangerous'];

  return [...PresetColors, ...addPresetColors].reduce(
    (prev: Record<string, CSSObject>, colorKey: PresetColorKey) => {
      const colorKeyMap = {
        primary: 'blue',
        dangerous: 'red',
      };
      const bgColor = addPresetColors.includes(colorKey)
        ? token[`${colorKeyMap[colorKey]}4`]
        : token[`${colorKey}6`];
      return {
        ...prev,
        [`&${componentCls}-color-${colorKey}:hover`]: {
          color: token.colorTextLightSolid,
          background: bgColor,
          borderColor: bgColor,
        },
      };
    },
    {}
  );
};

export const genButtonStyle: GenerateStyle<ButtonToken> = (token: ButtonToken) => {
  const { iconCls, componentCls } = token;
  return {
    [`${componentCls}`]: {
      // remove box-shadow for button
      boxShadow: 'none !important',
      // loading style for not primary button
      [`&${componentCls}-loading:not(${componentCls}-primary)`]: {
        opacity: 1,
      },
      // button outlined and dashed style
      [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
        // disabled style
        [`&:not(:disabled):not(${componentCls}-disabled)`]: {
          [`&:not(${componentCls}-loading):hover`]: {
            ...genPresetColorStyle(token),
          },
          [`&${componentCls}-color-default`]: {
            [iconCls]: {
              color: token.colorIcon,
            },
          },
        },
      },
      // button solid style
      [`&${componentCls}-variant-solid:not(:disabled):not(${componentCls}-disabled):hover`]: {
        ...genPresetColorStyle(token),
      },
    },
    [`${componentCls}${componentCls}-sm`]: {
      [`${componentCls}-icon`]: {
        fontSize: token.fontSize,
      },
    },
  };
};

export default genStyleHooks('Button', token => {
  return [genButtonStyle(token as ButtonToken)];
});
