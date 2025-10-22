import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DrawerToken = FullToken<'Drawer'>;

export const genDrawerStyle: GenerateStyle<DrawerToken> = (token: DrawerToken): CSSObject => {
  const { componentCls, antCls } = token;
  const contentPadding = `${token.paddingXS}px ${token.paddingLG}px ${token.paddingLG}px ${token.paddingLG}px`;
  const boxShadowBottom =
    '0 2px 4px 0 rgba(54,69,99,0.04), 0 1px 6px -1px rgba(54,69,99,0.04), 0 1px 2px 0 rgba(54,69,99,0.06)';
  const boxShadowTop =
    '0 -2px 4px 0 rgba(54,69,99,0.04), 0 -1px 6px -1px rgba(54,69,99,0.04), 0 -1px 2px 0 rgba(54,69,99,0.06)';

  return {
    [`${componentCls}`]: {
      // should be wrapped by `${componentCls}-content` to overwritten antd style
      [`${componentCls}-content`]: {
        [`${componentCls}-header`]: {
          padding: `${token.padding}px ${token.paddingLG}px`,
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
          padding: contentPadding,
          overflow: 'auto',
        },
        [`${componentCls}-footer-container`]: {
          position: 'sticky',
          padding: `${token.padding}px ${token.paddingLG}px`,
          transition: `box-shadow ${token.motionDurationMid}`,
          // ensure footer box-shadow cover body content
          zIndex: 10,
          [`${componentCls}-footer-content`]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        },
        [`${componentCls}-footer-container-shadow`]: {
          boxShadow: boxShadowTop,
        },
      },
    },
    [`${componentCls}${componentCls}-loading`]: {
      [`${componentCls}-body > ${antCls}-skeleton`]: {
        padding: contentPadding,
      },
    },
    [`${componentCls}${componentCls}-with-footer`]: {
      // should be wrapped by `${componentCls}-content` to overwritten antd style
      [`${componentCls}-content`]: {
        [`${componentCls}-body-content`]: {
          padding: `${token.paddingXS}px ${token.paddingLG}px`,
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
