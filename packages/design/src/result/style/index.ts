import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DrawerToken = FullToken<'Drawer'>;

export const genDrawerStyle: GenerateStyle<DrawerToken> = (token: DrawerToken): CSSObject => {
  const { componentCls, colorTextTertiary } = token;

  return {
    [`${componentCls}`]: {
      [`${componentCls}-icon`]: {
        [`.anticon`]: {
          fontSize: '160px',
        },
      },
      [`${componentCls}-title`]: {
        marginTop: 0,
      },
      [`${componentCls}-subtitle`]: {
        color: colorTextTertiary,
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
