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
