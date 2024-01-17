import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genTagStyle } from '../../tabs/style';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type CardToken = FullToken<'Card'> & {
  tabsComponentCls: string;
  tabsPrefixCls: string;
};

export const genTableStyle = (padding: number, token: CardToken): CSSObject => {
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
  const { componentCls, tabsComponentCls, tabsPrefixCls, padding, paddingSM, paddingLG } = token;
  return {
    [`${componentCls}`]: {
      // nested Card style
      [`${componentCls}:not(${componentCls}-bordered):not(${componentCls}-type-inner)`]: {
        boxShadow: 'none',
      },
    },
    [`${componentCls}${componentCls}-no-divider`]: {
      [`${componentCls}-head`]: {
        borderBottom: 'none',
      },
    },
    [`${componentCls}${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]: {
      [`${componentCls}-body`]: {
        padding: `0 ${paddingLG}px ${padding}px ${paddingLG}px`,
      },
    },
    [`${componentCls}-small${componentCls}-no-divider:not(${componentCls}-contain-tabs)`]: {
      [`${componentCls}-body`]: {
        padding: `0 ${paddingSM}px 12px ${paddingSM}px`,
      },
    },
    [`${componentCls}${componentCls}-contain-tabs`]: {
      [`${componentCls}-head`]: genTagStyle({
        ...token,
        componentCls: tabsComponentCls,
        prefixCls: tabsPrefixCls,
      } as CardToken),
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
    // no body padding card
    [`${componentCls}${componentCls}-no-body-padding`]: genTableStyle(paddingLG, token),
    // no body padding small card
    [`${componentCls}${componentCls}-no-body-padding${componentCls}-small`]: genTableStyle(
      paddingSM,
      token
    ),
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
