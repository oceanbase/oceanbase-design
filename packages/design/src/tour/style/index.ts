import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TourToken = FullToken<'Tour'>;

export const genTourStyle = (token: TourToken): CSSObject => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      [`${componentCls}-inner`]: {
        boxShadow: token.boxShadowSecondary,
        [`${componentCls}-footer`]: {
          alignItems: 'center',
          [`${componentCls}-indicators`]: {
            [`${componentCls}-prev-icon`]: {
              fontSize: token.fontSizeSM,
              marginInlineEnd: token.marginXS,
              color: token.colorLink,
              [`&:hover`]: {
                color: token.colorLinkHover,
              },
              [`&:active`]: {
                color: token.colorLinkActive,
              },
            },
            [`${componentCls}-indicator`]: {
              width: token.sizeXS,
              height: token.sizeXS,
              cursor: 'pointer',
              transition: `background-color ${token.motionDurationMid}`,
              [`&:not(:last-child)`]: {
                marginInlineEnd: token.marginXS,
              },
              [`&:not(&-active):hover`]: {
                background: token.colorFillSecondary,
              },
            },
          },
        },
      },
    },
    [`${componentCls}${componentCls}-primary`]: {
      [`${componentCls}-inner`]: {
        [`${componentCls}-footer`]: {
          [`${componentCls}-indicators`]: {
            [`${componentCls}-prev-icon`]: {
              color: token.colorBgBase,
              [`&:hover`]: {
                // color: token.colorLinkHover,
              },
              [`&:active`]: {
                // color: token.colorLinkActive,
              },
            },
          },
        },
      },
    },
    [`${componentCls}:not(${componentCls}-primary)`]: {
      [`${componentCls}-inner`]: {
        [`${componentCls}-footer`]: {
          [`${componentCls}-buttons`]: {
            [`${componentCls}-prev-btn, ${componentCls}-next-btn`]: {
              height: token.controlHeight,
              paddingInline: token.padding - token.lineWidth,
              borderRadius: token.borderRadius,
            },
          },
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Tour', token => {
    return [genTourStyle(token as TourToken)];
  });
  return useStyle(prefixCls);
};
