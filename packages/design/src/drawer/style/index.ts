import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DrawerToken = FullToken<'Drawer'>;

export const genDrawerStyle: GenerateStyle<DrawerToken> = (token: DrawerToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-footer-content`]: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 'calc(100% - 32px)',
        borderTop: `1px solid ${token.colorBorderSecondary}`,
        padding: '10px 16px 10px 0',
        background: token.colorBgContainer,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
      },
    }
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Drawer', token => {
    return [genDrawerStyle(token as DrawerToken)];
  });
  return useStyle(prefixCls);
};
