import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TabsToken = FullToken<'Tabs'>;
export type CardToken = FullToken<'Card'>;

export const genTagStyle: GenerateStyle<TabsToken | CardToken> = (
  token: TabsToken | CardToken
): CSSObject => {
  const { antCls, componentCls, colorInfo, colorInfoBg, colorTextSecondary } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        [`${componentCls}-nav::before`]: {
          // 页签位置为 top 和 bottom 时，去掉分割线
          border: 'none',
        },
      },
      [`${componentCls}-tab`]: {
        [`${componentCls}-tab-tag`]: {
          color: colorTextSecondary,
          fontFamily: 'PingFangSC',
          fontSize: 12,
          borderRadius: 12,
          marginInlineEnd: 0,
          height: 20,
        },
      },
      [`${componentCls}-tab-active`]: {
        [`${componentCls}-tab-tag`]: {
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
    [`${componentCls}:not(${componentCls}-card)`]: {
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        [`${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token.paddingXS}px 0px`,
          },
        },
        [`&${componentCls}-small`]: {
          [`${componentCls}-nav`]: {
            [`${componentCls}-tab`]: {
              padding: `${token.paddingXS - token.lineWidth * 2}px 0px`,
            },
          },
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Tabs', token => {
    return [genTagStyle(token as TabsToken)];
  });
  return useStyle(prefixCls);
};
