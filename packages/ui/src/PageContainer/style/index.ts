import type { CSSObject } from '@ant-design/cssinjs';
import type { PageContainerToken } from '@ant-design/pro-layout/es/components/PageContainer/style';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { genOperationStyle, genFooterToolbarStyle } from '../../FooterToolbar/style';

export const genPageContainerStyle: GenerateStyle<PageContainerToken> = (
  token: PageContainerToken
): CSSObject => {
  const {
    antCls,
    proComponentsCls,
    componentCls,
    colorBgLayout,
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
      [`${componentCls}-warp-page-header,${componentCls}-wrap-page-header`]: {
        // 减小内容区左右两侧间距
        paddingInlineStart: `${paddingLG}px !important`,
        paddingInlineEnd: `${paddingLG}px !important`,
        paddingBlockStart: `${padding}px !important`,
        paddingBlockEnd: `${padding}px !important`,
        [`${antCls}-page-header-breadcrumb`]: {
          // overwritten pro-components style
          paddingBlockStart: 0,
        },
        [`${antCls}-page-header-heading-title`]: {
          fontSize: fontSizeHeading3,
          marginInlineEnd: token.marginXS,
        },
        [`${antCls}-page-header-heading-reload`]: {
          cursor: 'pointer',
          fontSize: token.fontSizeLG,
          marginTop: token.marginXXS,
        },
        [`${antCls}-page-header-heading-extra`]: {
          height,
          lineHeight,
          marginBlock: 0,
          // extra operation style
          ...genOperationStyle(token),
        },
        [`${antCls}-page-header-footer`]: {
          marginBlockStart: 0,
        },
      },
      [`${componentCls}-children-container`]: {
        paddingInline: paddingLG,
        paddingBlockStart: 0,
        paddingBlockEnd: paddingLG,
        // set top tabs style when it is PageContainer's first child
        [`& > ${antCls}-tabs-top:not(${antCls}-tabs-card):first-child`]: {
          // equal to page header paddingBlockEnd
          marginTop: -padding,
        },
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
    ...(genFooterToolbarStyle({
      ...token,
      componentCls: `${proComponentsCls}-footer-bar`,
    }) as object),
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('PageContainer', token => {
    return [genPageContainerStyle(token as PageContainerToken)];
  });
  return useStyle(prefixCls);
};
