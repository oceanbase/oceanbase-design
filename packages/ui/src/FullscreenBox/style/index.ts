import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type FullscreenBoxToken = OBToken;

export const genFullscreenBoxStyle: GenerateStyle<FullscreenBoxToken> = (
  token: FullscreenBoxToken
): CSSObject => {
  const { componentCls, fontWeightStrong, colorText, colorBgContainer, prefixCls } = token;

  return {
    [componentCls]: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: colorText,
      fontSize: 14,
      lineHeight: 1.5714285714285714,
      listStyle: 'none',
      [`&.${prefixCls}-fullscreen`]: {
        position: 'fixed',
        zIndex: 900,
        background: colorBgContainer,
        insetBlockStart: 0,
        insetInlineEnd: 0,
        insetBlockEnd: 0,
        insetInlineStart: 0,
      },
      [`& ${componentCls}-header`]: {
        display: 'flex',
        alignItems: 'center',
        height: 64,
        [`& ${componentCls}-header-left`]: {
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          paddingBlock: 20,
          paddingInline: 24,
        },
        [`& ${componentCls}-header-icon-btn`]: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 24,
          minHeight: 24,
          padding: 0,
          margin: 0,
          border: 'none',
          background: 'transparent',
          color: colorText,
          cursor: 'pointer',
          verticalAlign: 'middle',
        },
        [`& ${componentCls}-header-icon`]: {
          display: 'inline-flex',
          fontSize: 16,
          lineHeight: 1,
        },
        [`& ${componentCls}-header-title`]: {
          fontWeight: fontWeightStrong,
          fontSize: 16,
          lineHeight: 24,
          marginInlineStart: 24,
        },
        [`& ${componentCls}-header-extra`]: {
          flex: 2,
          lineHeight: 64,
          textAlign: 'end',
          paddingInlineEnd: 24,
        },
      },
    },
    [`${componentCls}-body-overflow-hidden`]: {
      overflow: 'hidden',
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('FullscreenBox', token => {
    return [genFullscreenBoxStyle(token as FullscreenBoxToken)];
  });
  return useStyle(prefixCls);
};
