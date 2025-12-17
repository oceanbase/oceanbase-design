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
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      // remove box-shadow for button
      boxShadow: 'none !important',
      [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
        [`&:not(:disabled):not(${componentCls}-disabled):hover`]: {
          [`&:not(${componentCls}-color-dangerous)`]: {
            borderColor: token.gray7,
            color: token.colorText,
          },
          [`&:not(${componentCls}-loading)`]: {
            ...genPresetColorStyle(token),
          },
        },
      },
    },
  };
};

export default genStyleHooks('Button', token => {
  return [genButtonStyle(token as ButtonToken)];
});
