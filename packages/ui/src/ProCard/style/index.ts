import type { CSSObject } from '@ant-design/cssinjs';
import { Card, Tabs } from '@oceanbase/design';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export const genProCardStyle = (token: OBToken, outerComponentCls?: string): CSSObject => {
  const { componentCls: innerComponentCls, antCls, prefixCls } = token;
  const componentCls = outerComponentCls || innerComponentCls;
  const tableComponentCls = `${antCls}-table`;
  const tabsComponentCls = `${antCls}-tabs`;
  const tabsPrefixCls = `${prefixCls}-tabs`;
  return {
    // follow Card style
    // need add `div` to make style work
    [`div${componentCls}`]: {
      borderRadius: token.borderRadiusLG,
    },
    [`${componentCls}${componentCls}-no-divider`]: {
      [`${componentCls}-header`]: {
        paddingBlockStart: token.paddingLG,
      },
    },
    [`${componentCls}${componentCls}-size-small${componentCls}-no-divider`]: {
      [`${componentCls}-header`]: {
        paddingBlockStart: token.paddingSM,
      },
    },
    [`${componentCls}${componentCls}-border`]: {
      border: `${token.lineWidth}px solid ${token.colorBorderSecondary}`,
    },
    [`${componentCls}:not(${componentCls}-border):not(${componentCls}-ghost)`]: {
      boxShadow:
        '0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    },
    [`${componentCls}:not(${componentCls}-size-small):not(${componentCls}-ghost)`]: {
      [`${componentCls}-body`]: {
        paddingBlock: token.paddingLG,
      },
      [`&${componentCls}-has-title${componentCls}-no-divider`]: {
        [`${componentCls}-body`]: {
          paddingBlockStart: token.padding,
        },
      },
    },
    // need to handle style for small and ghost ProCard
    [`${componentCls}${componentCls}-size-small${componentCls}-ghost`]: {
      [`${componentCls}-header`]: {
        paddingInline: 0,
      },
      [`${componentCls}-body`]: {
        paddingBlock: 0,
        paddingInline: 0,
      },
    },
    // reduce margin between card title and table
    [`&${componentCls}-has-title${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]: {
      [`${componentCls}-body`]: {
        [`& > ${tableComponentCls}-wrapper ${tableComponentCls}:not(${tableComponentCls}-bordered):first-child`]:
          {
            marginTop: -token.Table?.cellPaddingBlock,
          },
      },
    },
    // no body horizontal padding card
    [`${componentCls}${componentCls}-no-body-horizontal-padding:not(${componentCls}-contain-tabs)`]:
      {
        [`${componentCls}-header`]: {
          paddingBlockEnd: token.padding,
        },
        ...Card.genTableStyle(token.paddingLG, token),
      },
    // no body horizontal padding small card
    [`${componentCls}${componentCls}-no-body-horizontal-padding${componentCls}-size-small:not(${componentCls}-contain-tabs)`]:
      {
        [`${componentCls}-header`]: {
          paddingBlockEnd: token.paddingXS,
        },
        ...Card.genTableStyle(token.paddingSM, token),
      },
    // custom ProCard tabs style
    [`${componentCls}`]: {
      [`${componentCls}-tabs`]: {
        [`${tabsComponentCls}-top, ${tabsComponentCls}-bottom`]: {
          [`>${tabsComponentCls}-nav ${tabsComponentCls}-nav-list`]: {
            marginBlockStart: 0,
            paddingInlineStart: token.marginLG,
          },
        },
        ...Tabs.genTabsStyle({
          ...token,
          componentCls: tabsComponentCls,
          prefixCls: tabsPrefixCls,
        }),
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('ProCard', token => {
    return [genProCardStyle(token as OBToken)];
  });
  return useStyle(prefixCls);
};
