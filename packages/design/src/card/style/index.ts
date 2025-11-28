import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genTabsStyle } from '../../tabs/style';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type CardToken = FullToken<'Card'> & {
  tabsComponentCls: string;
  tabsPrefixCls: string;
};

export const genTableStyle = (padding: number, token: Partial<CardToken>): CSSObject => {
  const { antCls } = token;
  const tableComponentCls = `${antCls}-table`;
  return {
    [`${tableComponentCls}-wrapper`]: {
      [`${tableComponentCls}`]: {
        // first column should align with card title
        [`${tableComponentCls}-thead > tr > th:first-child, ${tableComponentCls}-tbody > tr > td:first-child`]:
          {
            paddingLeft: padding,
          },
        // last column should align with card extra
        [`${tableComponentCls}-thead > tr > th:last-child, ${tableComponentCls}-tbody > tr > td:last-child`]:
          {
            paddingRight: padding,
          },
      },
      [`${tableComponentCls}-pagination${antCls}-pagination`]: {
        // add marginLeft for table batchOperationBar
        [`${tableComponentCls}-batch-operation-bar`]: {
          marginLeft: padding,
        },
        // add marginRight for table pagination
        [`& > li:last-child`]: {
          marginRight: padding,
        },
      },
    },
  };
};

export const genCardStyle: GenerateStyle<CardToken> = (token: CardToken): CSSObject => {
  const { componentCls, antCls, tabsComponentCls, tabsPrefixCls, paddingSM, paddingLG, calc } =
    token;
  const tableComponentCls = `${antCls}-table`;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-body`]: {
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
    [`${componentCls}${componentCls}-no-divider`]: {
      [`${componentCls}-head`]: {
        // should not remove border-bottom to avoid tabs inkbar display correctly
        borderBottomColor: 'transparent',
        paddingTop: token.paddingLG,
        paddingBottom: token.padding,
        // remove divider for top and bottom tabs
        [tabsComponentCls]: {
          [`&${tabsComponentCls}-top, &${tabsComponentCls}-bottom`]: {
            [`${tabsComponentCls}-nav::before`]: {
              border: 'none',
            },
          },
        },
      },
    },
    [`${componentCls}${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]: {
      [`${componentCls}-body`]: {
        padding: `0 ${unit(paddingLG)} ${unit(paddingLG)} ${unit(paddingLG)}`,
      },
    },
    [`${componentCls}-small`]: {
      [`${componentCls}-body`]: {
        paddingTop: token.paddingXS,
      },
    },
    [`${componentCls}-small${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]: {
      [`${componentCls}-body`]: {
        padding: `0 ${unit(paddingSM)} ${unit(paddingSM)} ${unit(paddingSM)}`,
      },
    },
    [`${componentCls}-small${componentCls}-contain-tabs >${componentCls}-head`]: {
      [`${componentCls}-head-title, ${componentCls}-head-extra`]: {
        paddingTop: token.paddingXS,
      },
    },
    [`${componentCls}${componentCls}-contain-tabs`]: {
      [`${componentCls}-head`]: {
        ...genTabsStyle({
          ...token,
          componentCls: tabsComponentCls,
          prefixCls: tabsPrefixCls,
        }),
        [tabsComponentCls]: {
          [`&${tabsComponentCls}-top, &${tabsComponentCls}-bottom`]: {
            [`${tabsComponentCls}-tab`]: {
              paddingBlock: token.padding,
            },
          },
        },
      },
    },
    [`${componentCls}${componentCls}-contain-grid`]: {
      [`${componentCls}-head`]: {
        // work for Card containing Card.Grid
        marginBottom: -1,
      },
    },
    [`${componentCls}:not(${componentCls}-contain-grid)`]: {
      [`${componentCls}-head`]: {
        // work for Card not containing Card.Grid
        marginBottom: 0,
      },
    },
    // reduce margin between card title and table
    [`&${componentCls}-has-title${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]: {
      [`${componentCls}-body`]: {
        [`& > ${tableComponentCls}-wrapper ${tableComponentCls}:not(${tableComponentCls}-bordered):first-child`]:
          {
            marginTop: calc(token.marginSM).mul(-1).equal(),
          },
      },
    },
    // no body horizontal padding card
    [`${componentCls}${componentCls}-no-body-horizontal-padding`]: genTableStyle(paddingLG, token),
    // no body horizontal padding small card
    [`${componentCls}${componentCls}-no-body-horizontal-padding${componentCls}-small`]:
      genTableStyle(paddingSM, token),
    // collapsible card style
    [`${componentCls}${componentCls}-collapsible`]: {
      [`${componentCls}-title-wrapper`]: {
        userSelect: 'none',
        [`${componentCls}-collapsible-icon`]: {
          fontSize: token.fontSizeLG,
        },
      },
      [`${componentCls}-body`]: {
        overflow: 'hidden',
      },
    },
    [`${componentCls}${componentCls}-collapsible${componentCls}-collapsed`]: {
      [`${componentCls}-body`]: {
        maxHeight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0,
        overflow: 'hidden',
        border: 'none',
        margin: 0,
      },
      // hide bottom border of head when collapsed, avoid double border
      [`${componentCls}-head`]: {
        borderBottom: 'none',
      },
    },
  };
};

export default (prefixCls: string, tabsPrefixCls: string) => {
  const useStyle = genComponentStyleHook('Card', token => {
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
