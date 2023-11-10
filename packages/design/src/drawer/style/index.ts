import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DrawerToken = FullToken<'Drawer'>;

export const genDrawerStyle: GenerateStyle<DrawerToken> = (token: DrawerToken): CSSObject => {
  const { componentCls } = token;

  return {
    [`${componentCls}`]: {
      [`${componentCls}-header`]: {
        padding: '20px 24px 0',
        borderBottom: 'none !important',
      },
      [`${componentCls}-footer-content`]: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        padding: 24,
        background: token.colorBgContainer,
        zIndex: 10,
        // display: 'flex',
        // justifyContent: 'end',
        // alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
