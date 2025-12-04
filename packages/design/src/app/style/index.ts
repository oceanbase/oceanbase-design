import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type AppToken = FullToken<'App'>;

export const genAppStyle: GenerateStyle<AppToken> = (token: AppToken): CSSObject => {
  const { antCls, componentCls } = token;
  const menuComponentCls = `${antCls}-menu`;
  return {
    [`${menuComponentCls}`]: {
      [`${menuComponentCls}-item`]: {
        [`${antCls}-menu-title-content`]: {
          // handle link style in menu
          'a:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('App', token => {
    return [genAppStyle(token as AppToken)];
  });
  return useStyle(prefixCls);
};
