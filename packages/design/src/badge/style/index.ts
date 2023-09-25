import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type BadgeToken = FullToken<'Badge'>;

export const genBadgeStyle: GenerateStyle<BadgeToken> = (token: BadgeToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}${componentCls}-status`]: {
      // dot style
      [`${componentCls}-status-dot`]: {
        width: 8,
        height: 8,
      },
      // icon style
      [`${componentCls}-status-icon`]: {
        fontSize: 12,
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
          color: token.colorTextPlaceholder,
        },
        [`&${componentCls}-status-error`]: {
          color: token.colorError,
        },
        [`&${componentCls}-status-warning`]: {
          color: token.colorWarning,
        },
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
