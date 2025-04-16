import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { DescriptionsProps } from '..';

export type DescriptionsToken = FullToken<'Alert'> & {
  typographyPrefixCls: string;
  typographyComponentCls: string;
};

export const genVerticalStyle = (
  size: DescriptionsProps['size'],
  token: Partial<DescriptionsToken>
): CSSObject => {
  const { componentCls } = token;
  const paddingMap = {
    default: {
      paddingIn: token.paddingXS,
      paddingOut: token.padding,
      paddingOutColumn1: token.paddingLG,
    },
    middle: {
      paddingIn: token.paddingXXS,
      paddingOut: token.paddingSM,
      paddingOutColumn1: token.padding,
    },
    small: {
      paddingIn: token.paddingXXS,
      paddingOut: token.paddingXS,
      paddingOutColumn1: token.paddingSM,
    },
  };
  const paddingConfig = paddingMap[size];
  return {
    // vertical Descriptions without border
    [`&${componentCls}${componentCls}-vertical:not(${componentCls}-bordered)`]: {
      [`${componentCls}-row:nth-child(2n + 1)`]: {
        [`& > th, & > td`]: {
          paddingBottom: paddingConfig.paddingIn,
        },
      },
      // vertical Descriptions = 1 column: mock readonly Form style
      [`&${componentCls}-column-1`]: {
        [`${componentCls}-row:nth-child(2n)`]: {
          [`& > th, & > td`]: {
            paddingBottom: paddingConfig.paddingOutColumn1,
          },
        },
      },
      // vertical Descriptions > 1 column
      [`&:not(${componentCls}-column-1)`]: {
        [`${componentCls}-row:nth-child(2n)`]: {
          [`& > th, & > td`]: {
            paddingBottom: paddingConfig.paddingOut,
          },
        },
      },
    },
  };
};

export const genDescriptionsStyle: GenerateStyle<DescriptionsToken> = (
  token: DescriptionsToken
): CSSObject => {
  const { componentCls, typographyComponentCls } = token;

  return {
    [`${componentCls}`]: {
      ...genVerticalStyle('default', token),
      [`${componentCls}-item-container`]: {
        [`${componentCls}-item-content`]: {
          paddingRight: 12,
          // 为了保证内部的 Text ellipsis 生效
          overflow: 'hidden',
          [`${typographyComponentCls}-edit-content`]: {
            insetInlineStart: 0,
            marginTop: 0,
          },
        },
      },
    },
    [`${componentCls}${componentCls}-middle`]: genVerticalStyle('middle', token),
    [`${componentCls}${componentCls}-small`]: genVerticalStyle('small', token),
  };
};

export default (prefixCls: string, typographyPrefixCls: string) => {
  const useStyle = genComponentStyleHook('Descriptions', token => {
    return [
      genDescriptionsStyle({
        ...token,
        typographyPrefixCls,
        typographyComponentCls: `.${typographyPrefixCls}`,
      } as DescriptionsToken),
    ];
  });
  return useStyle(prefixCls);
};
