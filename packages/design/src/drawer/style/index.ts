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
        borderBottom: 'none',
      },
      [`${componentCls}-footer-content`]: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 'calc(100% - 32px)',
        padding: 24,
        paddingLeft: 0,
        background: token.colorBgContainer,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'end',
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
