import type { CSSObject } from '@ant-design/cssinjs';
import { mergeToken } from 'antd/es/theme/internal';
import type { FullToken } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type TagToken = FullToken<'Tag'>;

const genTagPresetStatusStyle = (
  token: TagToken,
  status: 'success' | 'processing' | 'error' | 'warning'
) => {
  const colorMap = {
    success: token.colorSuccessText,
    processing: token.colorInfoText,
    error: token.colorErrorText,
    warning: token.colorWarningText,
  };
  return {
    [`${token.componentCls}${token.componentCls}-${status}`]: {
      color: colorMap[status],
    },
  };
};

export const genTagStyle = (token: TagToken): CSSObject => {
  const { antCls, componentCls, iconCls } = token;

  return {
    [`${componentCls}`]: {
      lineHeight: token.lineHeight,
      paddingInline: token.paddingXS,
      fontSize: token.fontSizeSM,
      [`&:not(${componentCls}-pill)`]: {
        fontWeight: token.fontWeightStrong,
      },
      [`${componentCls}-close-icon${iconCls}`]: {
        marginInlineStart: token.marginXXS,
      },
      [`${antCls}-typography`]: {
        [`${componentCls}-icon`]: {
          marginInlineEnd: token.marginXXS,
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
      ['&-pill']: {
        borderRadius: 100,
        marginInlineEnd: token.marginXXS,
      },
    },
  };
};

export default genStyleHooks('Tag', (token: TagToken) => {
  const tagToken = mergeToken<TagToken>(token, {});

  return [
    genTagStyle(tagToken),
    genTagPresetStatusStyle(tagToken, 'success'),
    genTagPresetStatusStyle(tagToken, 'error'),
    genTagPresetStatusStyle(tagToken, 'processing'),
    genTagPresetStatusStyle(tagToken, 'warning'),
  ];
});
