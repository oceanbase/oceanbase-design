import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genTabsStyle } from '../../tabs/style';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type CardToken = FullToken<'Card'> & {
  tabsComponentCls: string;
  tabsPrefixCls: string;
};

export const genTableStyle = (padding: number, token: Partial<CardToken>): CSSObject => {
  const { antCls } = token;
  const tableComponentCls = `${antCls}-table`;
  const cellInline = token.Table?.cellPaddingInline ?? token.padding ?? token.paddingSM ?? 16;
  // Pad the first column (selection / expand cells) to align with the Card content area.
  // Avoid token.calc: this helper is reused by ProCard / ProTable whose useStyle does not inject calc.
  // Build a CSS calc() string via unit() so it works in both modes:
  // - non cssVar: token is a number, unit() adds px -> calc(24px + 14px + 8px)
  // - cssVar: token is a var(--ob-*) string, unit() passes it through -> calc(var(...) + var(...) + var(...))
  // token is Partial; alias tokens always exist at runtime, ?? 0 is only for the type.
  const unitVal = (value?: number | string) => unit(value ?? 0);
  return {
    [`${tableComponentCls}-wrapper`]: {
      [`${tableComponentCls}`]: {
        // Widen the selection column to fit the 24px first-column padding + checkbox + 8px right padding.
        // antd locks it to controlHeight (28px) by default, which makes the checkbox overflow
        // into the adjacent column.
        [`${tableComponentCls}-selection-col`]: {
          width: `calc(${unitVal(padding)} + ${unitVal(token.controlInteractiveSize)} + ${unitVal(token.paddingXS)})`,
          [`&${tableComponentCls}-selection-col-with-dropdown`]: {
            width: `calc(${unitVal(padding)} + ${unitVal(token.controlInteractiveSize)} + ${unitVal(token.paddingXS)} + ${unitVal(token.fontSizeIcon)} + (${unitVal(token.padding)} / 4))`,
          },
        },
        [`${tableComponentCls}-thead > tr > th:first-child`]: {
          paddingLeft: padding,
        },
        [`${tableComponentCls}-tbody > tr > td:first-child`]: {
          paddingLeft: padding,
        },
        // Pad the measure-row first cell too: if only real cells are padded while the
        // measure row keeps its default padding, fixed-column ColGroup locks the column
        // to the measured width and squeezes the checkbox / expand icon into the neighbor.
        [`${tableComponentCls}-tbody > tr${tableComponentCls}-measure-row > th:first-child`]: {
          paddingLeft: padding,
        },
        [`${tableComponentCls}-tbody > tr > td:first-child[data-ob-user-col]:not([data-ob-user-col="0"])`]:
          {
            paddingLeft: cellInline,
          },
        [`${tableComponentCls}-thead > tr > th:last-child`]: { paddingRight: padding },
        [`${tableComponentCls}-tbody > tr > td:last-child`]: { paddingRight: padding },
        [`${tableComponentCls}-tbody > tr > td:last-child[data-ob-user-col]:not([data-ob-user-col-tail])`]:
          {
            paddingRight: cellInline,
          },
        [`${tableComponentCls}-container`]: {
          // ::after 伪元素用于固定列时的阴影效果，表格带边框时去掉左上角和右上角的圆角
          ['&::before, &::after']: {
            borderStartStartRadius: token.borderRadiusMD,
            borderStartEndRadius: token.borderRadiusMD,
          },
          [`${tableComponentCls}-content`]: {
            borderStartStartRadius: token.borderRadiusLG,
            borderStartEndRadius: token.borderRadiusLG,
          },
        },
      },
      // 分页与 .ant-table 同级（在 Spin 容器内），须挂在 wrapper 下
      [`${tableComponentCls}-pagination${antCls}-pagination`]: {
        marginInlineEnd: padding,
        [`${tableComponentCls}-batch-operation-bar`]: { marginLeft: padding },
      },
    },
  };
};

export const genCardStyle: GenerateStyle<CardToken> = (token: CardToken): CSSObject => {
  const {
    antCls,
    iconCls,
    componentCls,
    tabsComponentCls,
    tabsPrefixCls,
    paddingSM,
    paddingLG,
    calc,
  } = token;
  const tableComponentCls = `${antCls}-table`;
  return {
    [`${componentCls}`]: {
      [`> ${componentCls}-head`]: {
        // title style
        [`${componentCls}-title-content`]: {
          lineHeight: token.lineHeightLG,
        },
        // subTitle style
        [`${componentCls}-sub-title-wrapper`]: {
          marginInlineStart: token.marginXS,
        },
        [`${componentCls}-sub-title`]: {
          fontWeight: 'normal',
          fontSize: token.fontSize,
          color: token.colorTextDescription,
        },
        [`${componentCls}-document-divider`]: {
          marginInline: 0,
          height: token.size,
        },
        [`${componentCls}-document-icon`]: {
          display: 'inline-block',
          color: token.colorIcon,
          fontSize: token.fontSizeLG,
          cursor: 'pointer',
          '&:hover': {
            color: token.colorLinkHover,
          },
          '&:active': {
            color: token.colorLinkActive,
          },
        },
        [`${componentCls}-document-default-icon`]: {
          marginTop: (token.controlHeight - token.fontSizeLG) / 2,
        },
        // remove divider for top and bottom tabs
        [tabsComponentCls]: {
          [`&${tabsComponentCls}-top, &${tabsComponentCls}-bottom`]: {
            [`${tabsComponentCls}-nav::before`]: {
              border: 'none',
            },
          },
        },
      },
      [`> ${componentCls}-body`]: {
        paddingTop: token.padding,
      },
      // nested Card style
      [`${componentCls}:not(${componentCls}-bordered):not(${componentCls}-type-inner)`]: {
        boxShadow: 'none',
      },
      // nested and bordered Card radius
      [`${componentCls}${componentCls}-bordered`]: {
        borderRadius: calc(token.borderRadiusLG).sub(2).equal(),
        [`${componentCls}${componentCls}-bordered`]: {
          borderRadius: token.borderRadius,
          [`${componentCls}${componentCls}-bordered`]: {
            borderRadius: token.borderRadiusSM,
          },
        },
      },
    },
    [`${componentCls}${componentCls}-has-head${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]:
      {
        [`> ${componentCls}-body`]: {
          paddingTop: 0,
        },
      },
    [`${componentCls}:not(${componentCls}-has-head)`]: {
      [`> ${componentCls}-body`]: {
        paddingTop: paddingLG,
      },
    },
    [`${componentCls}${componentCls}-no-divider`]: {
      [`> ${componentCls}-head`]: {
        // hide bottom border by setting borderBottomColor to transparent
        borderBottomColor: 'transparent',
      },
    },
    [`${componentCls}${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]: {
      [`> ${componentCls}-head`]: {
        paddingTop: token.paddingLG,
        paddingBottom: token.padding,
      },
    },
    [`${componentCls}${componentCls}-small:not(${componentCls}-has-head)`]: {
      [`> ${componentCls}-body`]: {
        paddingTop: paddingSM,
      },
    },
    [`${componentCls}${componentCls}-small${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]:
      {
        [`> ${componentCls}-head`]: {
          paddingTop: token.paddingSM,
          paddingBottom: token.paddingXS,
        },
      },
    [`${componentCls}${componentCls}-small`]: {
      [`> ${componentCls}-body`]: {
        paddingTop: token.paddingXS,
      },
    },
    [`${componentCls}-small${componentCls}-contain-tabs > ${componentCls}-head`]: {
      [`${componentCls}-head-title, ${componentCls}-head-extra`]: {
        paddingTop: token.paddingXS,
      },
    },
    [`${componentCls}${componentCls}-contain-tabs`]: {
      [`> ${componentCls}-head`]: {
        ...genTabsStyle({
          ...token,
          componentCls: tabsComponentCls,
          prefixCls: tabsPrefixCls,
        }),
      },
    },
    [`${componentCls}${componentCls}-contain-grid`]: {
      [`> ${componentCls}-head`]: {
        // work for Card containing Card.Grid
        marginBottom: -1,
      },
    },
    [`${componentCls}:not(${componentCls}-contain-grid)`]: {
      [`> ${componentCls}-head`]: {
        // work for Card not containing Card.Grid
        marginBottom: 0,
      },
    },
    // reduce margin between card title and table
    [`&${componentCls}-has-head${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]: {
      [`> ${componentCls}-body`]: {
        [`> ${tableComponentCls}-wrapper ${tableComponentCls}:not(${tableComponentCls}-bordered):first-child`]:
          {
            marginTop: calc(token.Table?.cellPaddingBlock).mul(-1).equal(),
          },
      },
    },
    // no body horizontal padding card
    [`${componentCls}${componentCls}-no-body-horizontal-padding`]: genTableStyle(paddingLG, token),
    // no body horizontal padding small card
    [`${componentCls}${componentCls}-no-body-horizontal-padding${componentCls}-small`]:
      genTableStyle(paddingSM, token),
    // no body padding bottom and bordered card
    [`${componentCls}${componentCls}-bordered${componentCls}-no-body-padding-bottom`]: {
      [`> ${componentCls}-body`]: {
        // fix double border when Table has no pagination
        [`> ${tableComponentCls}-wrapper${tableComponentCls}-no-pagination`]: {
          [`${tableComponentCls}`]: {
            [`${tableComponentCls}-tbody > tr:last-child > td`]: {
              borderBottom: 'none',
            },
          },
        },
        // fix double border when Table has no data
        [`> ${tableComponentCls}-wrapper${tableComponentCls}-has-empty`]: {
          [`${tableComponentCls}`]: {
            [`${tableComponentCls}-tbody > tr > td`]: {
              borderBottom: 'none',
            },
          },
        },
      },
    },
    // collapsible card style
    [`${componentCls}${componentCls}-collapsible`]: {
      [`${componentCls}-title-wrapper`]: {
        userSelect: 'none',
        [`${componentCls}-collapsible-icon`]: {
          fontSize: token.fontSizeLG,
        },
      },
      [`> ${componentCls}-body`]: {
        overflow: 'hidden',
      },
    },
    [`${componentCls}${componentCls}-collapsible${componentCls}-collapsed`]: {
      [`> ${componentCls}-body`]: {
        maxHeight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0,
        overflow: 'hidden',
        border: 'none',
        margin: 0,
      },
      // hide bottom border of head when collapsed, avoid double border
      [`> ${componentCls}-head`]: {
        borderBottomColor: 'transparent',
      },
      [`&${componentCls}-no-divider`]: {
        [`> ${componentCls}-head`]: {
          paddingBottom: paddingLG,
        },
      },
      [`&${componentCls}-no-divider${componentCls}-small`]: {
        [`> ${componentCls}-head`]: {
          paddingBottom: paddingSM,
        },
      },
    },
    // gray background card style
    [`${componentCls}${componentCls}-gray`]: {
      boxShadow: 'none',
      borderRadius: token.borderRadiusMD,
      backgroundColor: token.colorFillQuaternary,
    },
  };
};

export default (prefixCls: string, tabsPrefixCls: string) => {
  const useStyle = genStyleHooks('Card', token => {
    return [
      genCardStyle({
        ...token,
        tabsComponentCls: `.${tabsPrefixCls}`,
        tabsPrefixCls,
      } as CardToken),
    ];
  });
  return useStyle(prefixCls);
};
