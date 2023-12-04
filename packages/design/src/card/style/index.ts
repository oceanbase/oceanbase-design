import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genTagStyle } from '../../tabs/style';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type CardToken = FullToken<'Card'> & {
  tabsComponentCls: string;
  tabsPrefixCls: string;
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
