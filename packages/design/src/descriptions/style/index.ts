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
      paddingIn: token.paddingXXS,
      paddingOut: token.paddingLG,
    },
    middle: {
      paddingIn: token.paddingXXS,
      paddingOut: token.padding,
    },
    small: {
      paddingIn: token.paddingXXS,
      paddingOut: token.paddingSM,
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
      [`${componentCls}-row:nth-child(2n)`]: {
        [`& > th, & > td`]: {
          paddingBottom: paddingConfig.paddingOut,
        },
      },
      [`${componentCls}-item`]: {
        [`${componentCls}-item-label`]: {
          fontSize: token.fontSizeSM,
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
          [`${typographyComponentCls}-edit-content`]: {
            insetInlineStart: 0,
            marginTop: 0,
            marginBottom: 0,
          },
        },
      },
      [`${componentCls}-item-container:has(${`${typographyComponentCls}-edit-content`})`]: {
        alignItems: 'center',
        height: token.fontSize * token.lineHeight,
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
