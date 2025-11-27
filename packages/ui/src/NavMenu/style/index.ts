import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type NavMenuToken = OBToken;

export const genNavMenuStyle: GenerateStyle<NavMenuToken> = (
  token: NavMenuToken
): CSSObject => {
  const { componentCls, antCls } = token;

  return {
    [`${componentCls}-container`]: {
      marginTop: 21,
      backgroundColor: 'transparent',
      userSelect: 'none',
      ul: {
        backgroundColor: 'transparent',
        li: {
          paddingRight: '0 !important',
          [`${antCls}-menu-title-content`]: {
            padding: '0 20px',
            borderRadius: 10,
            transition: '0.6s',
            '&:hover': {
              backgroundColor: '#e4e8f5',
            },
          },
        },
        [`${antCls}-menu-item:not(${antCls}-menu-item-selected):hover`]: {
          backgroundColor: 'transparent !important',
        },
        [`${antCls}-menu-item-selected`]: {
          backgroundColor: 'transparent !important',
          [`${antCls}-menu-title-content`]: {
            backgroundColor: '#d7e2fc',
            a: {
              color: 'transparent',
              fontFamily: 'SourceSansPro-Semibold, SourceSansPro-Regular',
              background: 'linear-gradient(-45deg, #002bff 0%, #0080ff 100%)',
              backgroundClip: 'text',
            },
          },
          '&::after': {
            display: 'none',
          },
        },
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('NavMenu', token => {
    return [genNavMenuStyle(token as NavMenuToken)];
  });
  return useStyle(prefixCls);
};

