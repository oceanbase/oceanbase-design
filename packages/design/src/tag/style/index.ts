import { mergeToken, type FullToken, type GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { genPresetColor } from 'antd/lib/theme/internal';
import { getWeakenBorderColor } from '../../_util/getWeakenBorderColor';
import type { CSSObject } from '@ant-design/cssinjs';

export type TagToken = FullToken<'Tag'> & {
  tagPaddingHorizontal: number;
};

const getTagBorderColor = (color: string) => {
  return getWeakenBorderColor(color);
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
  genPresetColor(token, (colorKey, { lightBorderColor }) => {
    return {
      [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
        borderColor: getTagBorderColor(lightBorderColor),
      },
    };
  });

export const genTagStyle = (token: TagToken): CSSObject => {
  const { antCls, componentCls, tagPaddingHorizontal, lineWidth, calc } = token;

  const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
  return {
    [`${componentCls}`]: {
      paddingInline: token.paddingXS,
      borderColor: getTagBorderColor(token.colorBorder),
      fontSize: token.fontSizeSM,
      [`${antCls}-typography`]: {
        [`${componentCls}-icon`]: {
          marginInlineEnd: paddingInline,
        },
      },
      ['&-ellipsis']: {
        maxWidth: '100%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        verticalAlign: 'bottom',
      },
      ['&-checkable']: {
        borderColor: 'transparent',
      },
      ['&-hidden']: {
        display: 'none',
      },
      ['&-borderless']: {
        borderColor: 'transparent',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Tag', (token: TagToken) => {
    const tagToken = mergeToken<TagToken>(token, {
      tagPaddingHorizontal: 8, // Fixed padding.
    });

    return [
      genTagStyle(tagToken),
      genPresetStyle(tagToken),
      genTagPresetStatusStyle(tagToken, 'success'),
      genTagPresetStatusStyle(tagToken, 'error'),
      genTagPresetStatusStyle(tagToken, 'processing'),
      genTagPresetStatusStyle(tagToken, 'warning'),
    ];
  });
  return useStyle(prefixCls);
};
