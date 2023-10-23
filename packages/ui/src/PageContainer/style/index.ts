import type { CSSObject } from '@ant-design/cssinjs';
import type { PageContainerToken } from '@ant-design/pro-layout/es/components/PageContainer/style';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genPageContainerStyle: GenerateStyle<PageContainerToken> = (
  token: PageContainerToken
): CSSObject => {
  const {
    antCls,
    proComponentsCls,
    componentCls,
    colorBgLayout,
    colorBgBase,
    borderRadius,
    boxShadowSecondary,
    fontSizeHeading3,
    controlHeightLG,
    padding,
    paddingLG,
  } = token;
  const height = controlHeightLG;
  const lineHeight = `${controlHeightLG}px`;

  return {
    [`${componentCls}`]: {
      minHeight: '100vh',
      backgroundColor: colorBgLayout,
      [`${proComponentsCls}-grid-content`]: {
        minHeight: 'auto',
      },
      [`${antCls}-page-header`]: {
        [`${antCls}-page-header-breadcrumb`]: {
          // overwritten pro-components style
          paddingBlockStart: 0,
        },
        [`${antCls}-page-header-heading-title`]: {
          fontSize: fontSizeHeading3,
        },
        [`${antCls}-page-header-heading-reload`]: {
          cursor: 'pointer',
        },
        [`${antCls}-page-header-heading-extra`]: {
          height,
          lineHeight,
          marginBlock: 0,
          // 设置页容器右上角的组件高度
          [`${antCls}-btn:not(${antCls}-input-search-button)`]: {
            minWidth: controlHeightLG,
            height,
          },
          [`${antCls}-radio-button-wrapper`]: {
            height,
            lineHeight,
          },
          [`${antCls}-input-wrapper`]: {
            lineHeight,
          },
        },
        [`${antCls}-page-header-footer`]: {
          marginBlockStart: 0,
        },
      },
      // 减小内容区左右两侧间距
      [`${componentCls}-warp-page-header`]: {
        paddingInlineStart: paddingLG,
        paddingInlineEnd: paddingLG,
        paddingBlockStart: padding,
        paddingBlockEnd: padding,
      },
      [`${componentCls}-children-container`]: {
        paddingInline: paddingLG,
        paddingBlockStart: 0,
        paddingBlockEnd: paddingLG,
      },
      // remove paddingBlockStart for page header without breadcrumb
      [`${antCls}-page-header:not(${antCls}-page-header-has-breadcrumb)`]: {
        [`${antCls}-page-header-heading`]: {
          paddingBlockStart: 0,
        },
      },
    },
    [`${componentCls}-no-page-header`]: {
      [`${componentCls}-children-container`]: {
        paddingBlockStart: paddingLG,
      },
    },
    [`${componentCls}-with-footer `]: {
      paddingBottom: 64,
    },
    [`${proComponentsCls}-footer-bar`]: {
      width: '100%',
      backgroundColor: colorBgBase,
      borderRadius: borderRadius,
      boxShadow: boxShadowSecondary,
      borderBlockStart: 'none',
      // 设置底部操作栏的组件高度
      [`${antCls}-btn:not(${antCls}-input-search-button)`]: {
        minWidth: 68,
        height,
      },
      [`${antCls}-radio-button-wrapper`]: {
        height,
        lineHeight,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('PageContainer', token => {
    return [genPageContainerStyle(token as PageContainerToken)];
  });
  return useStyle(prefixCls);
};
