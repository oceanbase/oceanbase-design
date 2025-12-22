import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import { mergeToken } from 'antd/es/theme/internal';
import type { FullToken } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type TagToken = FullToken<'Tag'>;

type TagPresetStatus = 'success' | 'processing' | 'error' | 'warning' | 'critical';

const genTagPresetStatusStyle = (token: TagToken, status: TagPresetStatus) => {
  const colorMap: Record<TagPresetStatus, string> = {
    success: token.colorSuccessText,
    processing: token.colorInfoText,
    warning: token.colorWarningText,
    error: token.colorErrorText,
    critical: token.colorFuchsiaText,
  };
  const bgMap: Record<TagPresetStatus, string> = {
    success: token.colorSuccessBg,
    processing: token.colorInfoBg,
    warning: token.colorWarningBg,
    error: token.colorErrorBg,
    critical: token.colorFuchsiaBg,
  };
  const borderMap: Record<TagPresetStatus, string> = {
    success: token.colorSuccessBorder,
    processing: token.colorInfoBorder,
    warning: token.colorWarningBorder,
    error: token.colorErrorBorder,
    critical: token.colorFuchsiaBorder,
  };
  return {
    [`${token.componentCls}${token.componentCls}-${status}`]: {
      color: colorMap[status],
      background: bgMap[status],
      borderColor: borderMap[status],
      [`&${token.componentCls}-borderless`]: {
        borderColor: 'transparent',
      },
    },
  };
};

export const genTagStyle = (token: TagToken): CSSObject => {
  const { antCls, componentCls, iconCls } = token;

  return {
    [`${componentCls}`]: {
      paddingInline: token.paddingXS,
      fontSize: token.fontSizeSM,
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
        borderColor: token.colorBorderSecondary,
        color: token.colorTextSecondary,
        // pill tag use smaller line-height
        lineHeight: unit(token.fontHeightSM),
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
    genTagPresetStatusStyle(tagToken, 'critical'),
  ];
});
