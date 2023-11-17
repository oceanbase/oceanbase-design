import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DrawerToken = FullToken<'Drawer'>;

export const genDrawerStyle: GenerateStyle<DrawerToken> = (token: DrawerToken): CSSObject => {
  const { componentCls } = token;

  return {
    [`${componentCls}`]: {
      // should be wrapped by `${componentCls}-content` to overwritten antd style
      [`${componentCls}-content`]: {
        [`${componentCls}-header`]: {
          padding: '20px 24px 24px 24px',
          borderBottom: 'none !important',
        },
        [`${componentCls}-body`]: {
          padding: '0 24px 24px 24px',
        },
        [`${componentCls}-footer-content`]: {
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          padding: '24px 24px 20px 24px',
          background: token.colorBgContainer,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
      },
    },
    [`${componentCls}${componentCls}-with-footer`]: {
      // should be wrapped by `${componentCls}-content` to overwritten antd style
      [`${componentCls}-content`]: {
        [`${componentCls}-body`]: {
          padding: '0 24px',
          // preserve space for footer
          // marginBottom = paddingTop + Button height + paddingBottom
          marginBottom: 24 + 32 + 20,
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
