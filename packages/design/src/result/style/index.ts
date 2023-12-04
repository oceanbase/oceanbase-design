import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DrawerToken = FullToken<'Drawer'>;

export const genDrawerStyle: GenerateStyle<DrawerToken> = (token: DrawerToken): CSSObject => {
  const { componentCls } = token;

  return {
    [`${componentCls}`]: {},
    [`${componentCls}-vertical`]: {},

    [`${componentCls}-horizontal`]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      [`${componentCls}-title`]: {
        display: 'none',
      },

      [`${componentCls}-subtitle`]: {
        [`${componentCls}-describe`]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          [`${componentCls}-title`]: {
            display: 'block',
          },
          [`${componentCls}-subtitle`]: {
            textAlign: 'initial',
          },
        },
      },
    },

    [`${componentCls}-success`]: {},
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Drawer', token => {
    return [genDrawerStyle(token as DrawerToken)];
  });
  return useStyle(prefixCls);
};
