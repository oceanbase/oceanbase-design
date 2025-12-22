import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type BadgeToken = FullToken<'Badge'>;

export const genBadgeStyle: GenerateStyle<BadgeToken> = (token: BadgeToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      // make status text inherit parent style
      color: 'inherit',
      fontSize: 'inherit',
    },
    [`${componentCls}${componentCls}-status`]: {
      // dot style
      [`${componentCls}-status-dot`]: {
        margin: 1,
        [`&${componentCls}-status-default`]: {},
      },
      [`${componentCls}-status-processing::after`]: {
        // remove animation for processing status dot
        display: 'none',
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
        // inherit style from parent
        color: 'inherit',
        fontSize: 'inherit',
      },
    },
  };
};

export default genStyleHooks('Badge', token => {
  return [genBadgeStyle(token as BadgeToken)];
});
