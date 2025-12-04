import type { CSSObject } from '@ant-design/cssinjs';
import type { PageContainerToken } from '@ant-design/pro-layout/es/components/PageContainer/style';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { genFooterToolbarStyle } from '../../FooterToolbar/style';

export const genPageContainerStyle: GenerateStyle<PageContainerToken> = (
  token: PageContainerToken
): CSSObject => {
  const {
    antCls,
    proComponentsCls,
    componentCls,
    colorBgLayout,
    fontSizeHeading2,
    padding,
    paddingLG,
  } = token;

  return {
    [`${componentCls}`]: {
      minHeight: '100vh',
      backgroundColor: colorBgLayout,
      [`${proComponentsCls}-grid-content`]: {
        minHeight: 'auto',
      },
      [`${componentCls}-warp-page-header,${componentCls}-wrap-page-header`]: {
        // 减小内容区左右两侧间距
        paddingInlineStart: `${token.paddingXL}px !important`,
        paddingInlineEnd: `${token.paddingXL}px !important`,
        paddingBlockStart: `${paddingLG}px !important`,
        paddingBlockEnd: `${padding}px !important`,
        [`${antCls}-page-header-breadcrumb`]: {
          // overwritten pro-components style
          paddingBlockStart: 0,
        },
        // remove paddingBlockStart for page header
        [`${antCls}-page-header-heading`]: {
          paddingBlockStart: 0,
        },
        [`${antCls}-page-header-heading-title`]: {
          fontSize: fontSizeHeading2,
          fontWeight: token.fontWeightStrong,
          marginInlineEnd: token.marginXS,
        },
        [`${antCls}-page-header-heading-reload`]: {
          cursor: 'pointer',
          fontSize: token.fontSizeLG,
          marginTop: token.marginXXS,
        },
        [`${antCls}-page-header-heading-document-divider`]: {
          marginInline: 0,
          height: token.size,
        },
        [`${antCls}-page-header-heading-document-icon`]: {
          display: 'inline-block',
          color: token.colorIcon,
          marginTop: (token.controlHeight - token.fontSizeLG) / 2,
          cursor: 'pointer',
          '&:hover': {
            color: token.colorLinkHover,
          },
          '&:active': {
            color: token.colorLinkActive,
          },
        },
        [`${antCls}-page-header-heading-left`]: {
          marginBlock: 0,
        },
        [`${antCls}-page-header-heading-extra`]: {
          marginBlock: 0,
        },
        [`${antCls}-page-header-footer`]: {
          marginBlockStart: 0,
        },
      },
      [`${componentCls}-children-container`]: {
        paddingInline: token.paddingXL,
        paddingBlockStart: 0,
        paddingBlockEnd: padding,
        // set top tabs style when it is PageContainer's first child
        [`& > ${antCls}-tabs-top:not(${antCls}-tabs-card):first-child`]: {
          // equal to page header paddingBlockEnd
          marginTop: -padding,
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
