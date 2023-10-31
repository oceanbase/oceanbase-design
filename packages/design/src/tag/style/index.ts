import { type FullToken, type GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { genPresetColor } from 'antd/lib/theme/internal';
import { TinyColor } from '@ctrl/tinycolor';
import type { CSSObject } from '@ant-design/cssinjs';

export type TagToken = FullToken<'Tag'>;

const getTagBorderColor = (color: string) => {
  return new TinyColor(color).setAlpha(0.4).toHex8String();
};

const genTagPresetStatusStyle = (
  token: TagToken,
  status: 'success' | 'processing' | 'error' | 'warning'
) => {
  const borderColorMap = {
    success: token.colorSuccessBorder,
    processing: token.colorInfoBorder,
    error: token.colorErrorBorder,
    warning: token.colorWarningBorder,
  };
  return {
    [`${token.componentCls}${token.componentCls}-${status}`]: {
      borderColor: getTagBorderColor(borderColorMap[status]),
    },
  };
};

const genPresetStyle = (token: TagToken) =>
  genPresetColor(token, (colorKey, { textColor, lightBorderColor }) => {
    return {
      [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
        color: textColor,
        borderColor: getTagBorderColor(lightBorderColor),
      },
    };
  });

export const genTagStyle: GenerateStyle<TagToken> = (token: TagToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      borderColor: getTagBorderColor(token.colorBorder),
      [`&-ellipsis`]: {
        maxWidth: '100%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        verticalAlign: 'bottom',
      },
      [`&-checkable`]: {
        borderColor: 'transparent',
      },
      [`&-hidden`]: {
        display: 'none',
      },
      [`&-borderless`]: {
        border: 'transparent',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Tag', (token: TagToken) => {
    return [
      genTagStyle(token),
      genPresetStyle(token),
      genTagPresetStatusStyle(token, 'success'),
      genTagPresetStatusStyle(token, 'error'),
      genTagPresetStatusStyle(token, 'processing'),
      genTagPresetStatusStyle(token, 'warning'),
    ];
  });
  return useStyle(prefixCls);
};
