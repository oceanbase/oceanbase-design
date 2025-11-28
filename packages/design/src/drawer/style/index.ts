import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type DrawerToken = FullToken<'Drawer'>;

export const genDrawerStyle: GenerateStyle<DrawerToken> = (token: DrawerToken): CSSObject => {
  const { componentCls, antCls, fontSizeHeading3, colorSplit, calc } = token;
  const contentPadding = token.paddingLG;
  const boxShadowBottom =
    '0 2px 4px 0 rgba(54,69,99,0.04), 0 1px 6px -1px rgba(54,69,99,0.04), 0 1px 2px 0 rgba(54,69,99,0.06)';
  const boxShadowTop =
    '0 -2px 4px 0 rgba(54,69,99,0.04), 0 -1px 6px -1px rgba(54,69,99,0.04), 0 -1px 2px 0 rgba(54,69,99,0.06)';

  return {
    [`${componentCls}`]: {
      // should be wrapped by `${componentCls}-content` to overwritten antd style
      [`${componentCls}-content`]: {
        [`${componentCls}-header`]: {
          position: 'relative',
          padding: `${unit(token.padding)} ${unit(token.paddingLG)}`,
          borderBottom: 'none',
          transition: `box-shadow ${token.motionDurationMid}`,
          // ensure header box-shadow cover body content
          zIndex: 10,
          [`${componentCls}-title`]: {
            fontSize: fontSizeHeading3,
          },
          // 标题栏底部增加分割线
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: colorSplit,
            // 使用负margin让分割线贯通到content边缘
            marginLeft: calc(token.paddingLG).mul(-1).equal(),
            marginRight: calc(token.paddingLG).mul(-1).equal(),
          },
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
          padding: `${unit(token.padding)} ${unit(token.paddingLG)}`,
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
        // footer 跟随内容或滚动到底部时，padding-top 设为 0
        [`${componentCls}-footer-container-no-padding-top`]: {
          paddingTop: 0,
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
          paddingBottom: token.paddingXS,
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
