import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TabsToken = FullToken<'Tabs'>;

export const genTabsStyle = (token: Partial<TabsToken>): CSSObject => {
  const { antCls, componentCls, colorInfo, colorInfoBg, colorTextSecondary, colorFillQuaternary } =
    token;
  return {
    [componentCls]: {
      [`&${componentCls}-no-divider`]: {
        // divider prop work for top and bottom tabs
        [`&${componentCls}-top, &${componentCls}-bottom`]: {
          [`${componentCls}-nav::before`]: {
            border: 'none',
          },
        },
      },
      [`${componentCls}-tab`]: {
        /** @deprecated */
        [`${componentCls}-tab-tag`]: {
          color: colorTextSecondary,
          fontSize: 12,
          borderRadius: 12,
          marginInlineEnd: 0,
          height: token.controlHeightSM,
        },
        [`${componentCls}-tab-badge`]: {
          [`>${antCls}-badge-count`]: {
            color: colorTextSecondary,
            backgroundColor: colorFillQuaternary,
          },
          borderRadius: 12,
        },
      },
      [`${componentCls}-tab-active`]: {
        /** @deprecated */
        [`${componentCls}-tab-tag`]: {
          color: colorInfo,
          backgroundColor: colorInfoBg,
        },
        [`${componentCls}-tab-badge >${antCls}-badge-count`]: {
          color: colorInfo,
          backgroundColor: colorInfoBg,
        },
      },
      [`${componentCls}-tab[data-node-key^=divider-]`]: {
        cursor: 'default',
        [`${componentCls}-tab-btn`]: {
          // make horizontal divider width 100% work
          width: '100%',
          [`${componentCls}-divider`]: {
            margin: 0,
            [`&${antCls}-divider-vertical`]: {
              height: token.sizeMD,
            },
            [`&${antCls}-divider-horizontal`]: {
              width: '100%',
            },
          },
        },
      },
      [`${componentCls}-ink-bar`]: {
        // inkbar 带圆角
        borderRadius: '1px',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Tabs', token => {
    return [genTabsStyle(token as TabsToken)];
  });
  return useStyle(prefixCls);
};
