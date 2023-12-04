import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DrawerToken = FullToken<'Drawer'>;

export const genDrawerStyle: GenerateStyle<DrawerToken> = (token: DrawerToken): CSSObject => {
  const { componentCls } = token;
  const boxShadowBottom =
    '0 2px 4px 0 rgba(54,69,99,0.04), 0 1px 6px -1px rgba(54,69,99,0.04), 0 1px 2px 0 rgba(54,69,99,0.06)';
  const boxShadowTop =
    '0 -2px 4px 0 rgba(54,69,99,0.04), 0 -1px 6px -1px rgba(54,69,99,0.04), 0 -1px 2px 0 rgba(54,69,99,0.06)';

  return {
    [`${componentCls}`]: {
      // should be wrapped by `${componentCls}-content` to overwritten antd style
      [`${componentCls}-content`]: {
        [`${componentCls}-header`]: {
          padding: '16px 24px',
          borderBottom: 'none',
          transition: `box-shadow ${token.motionDurationMid}`,
          // ensure header box-shadow cover body content
          zIndex: 10,
        },
        [`${componentCls}-header-shadow`]: {
          boxShadow: boxShadowBottom,
        },
        [`${componentCls}-body`]: {
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
        },
        [`${componentCls}-body-content`]: {
          padding: '8px 24px 24px 24px',
          overflow: 'auto',
        },
        [`${componentCls}-footer-content`]: {
          position: 'sticky',
          padding: '16px 24px',
          transition: `box-shadow ${token.motionDurationMid}`,
          // ensure footer box-shadow cover body content
          zIndex: 10,
        },
        [`${componentCls}-footer-content-shadow`]: {
          boxShadow: boxShadowTop,
        },
      },
    },
    [`${componentCls}${componentCls}-with-footer`]: {
      // should be wrapped by `${componentCls}-content` to overwritten antd style
      [`${componentCls}-content`]: {
        [`${componentCls}-body-content`]: {
          padding: '8px 24px 8px 24px',
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Drawer', token => {
    return [genDrawerStyle(token as DrawerToken)];
  });
  return useStyle(prefixCls);
};
