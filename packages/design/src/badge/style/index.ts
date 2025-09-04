import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type BadgeToken = FullToken<'Badge'>;

export const genBadgeStyle: GenerateStyle<BadgeToken> = (token: BadgeToken): CSSObject => {
  const { componentCls } = token;
  // dot size is larger than antd
  const dotSize = token.fontSizeLG / 2;
  return {
    [`${componentCls}`]: {
      // inherit color from parent instead of fixed colorText
      color: 'inherit',
    },
    [`${componentCls}${componentCls}-status`]: {
      // dot style
      [`${componentCls}-status-dot`]: {
        width: dotSize,
        height: dotSize,
        [`&${componentCls}-status-default`]: {
          backgroundColor: token.colorFill,
        },
      },
      // icon style
      [`${componentCls}-status-icon`]: {
        // remove dot style
        backgroundColor: 'transparent',
        ['&::after']: {
          display: 'none',
        },
        [`&${componentCls}-status-success`]: {
          color: token.colorSuccess,
        },
        [`&${componentCls}-status-processing`]: {
          color: token.colorPrimary,
        },
        [`&${componentCls}-status-default`]: {
          color: token.colorFill,
        },
        [`&${componentCls}-status-error`]: {
          color: token.colorError,
        },
        [`&${componentCls}-status-warning`]: {
          color: token.colorWarning,
        },
      },

      [`${componentCls}-status-text`]: {
        marginInlineStart: token.marginXS,
        // inherit color from parent instead of fixed colorText
        color: 'inherit',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Badge', token => {
    return [genBadgeStyle(token as BadgeToken)];
  });
  return useStyle(prefixCls);
};
