import type { CSSObject } from '@ant-design/cssinjs';
import { Card, Tabs } from '@oceanbase/design';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export const genProCardStyle: GenerateStyle<OBToken> = (token: OBToken): CSSObject => {
  const { componentCls, antCls, prefixCls } = token;
  const tabsComponentCls = `${antCls}-tabs`;
  const tabsPrefixCls = `${prefixCls}-tabs`;
  return {
    // follow Card style
    // need add `div` to make style work
    [`div${componentCls}`]: {
      borderRadius: token.borderRadiusLG,
    },
    [`${componentCls}:not(${componentCls}-border)`]: {
      boxShadow:
        '0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    },
    [`${componentCls}:not(${componentCls}-size-small)`]: {
      [`${componentCls}-body`]: {
        paddingBlock: token.paddingLG,
      },
      [`&${componentCls}-has-title${componentCls}-no-divider`]: {
        [`${componentCls}-body`]: {
          paddingBlockStart: token.padding,
        },
      },
    },
    // no body padding card
    [`${componentCls}${componentCls}-no-body-padding:not(${componentCls}-contain-tabs)`]: {
      [`${componentCls}-header`]: {
        paddingBlockEnd: token.padding,
      },
      ...Card.genTableStyle(token.paddingLG, token),
    },
    // no body padding small card
    [`${componentCls}${componentCls}-no-body-padding${componentCls}-size-small:not(${componentCls}-contain-tabs)`]:
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
