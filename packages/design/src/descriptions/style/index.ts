import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';
import type { DescriptionsProps } from '..';

export type DescriptionsToken = FullToken<'Descriptions'> & {
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
  const { componentCls, typographyComponentCls, calc } = token;

  return {
    [`${componentCls}`]: {
      [`${componentCls}-header`]: {
        marginBottom: token.margin,
      },
      // collapsible title style
      [`${componentCls}-title-wrapper`]: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
        [`${componentCls}-collapsible-icon`]: {
          fontSize: token.fontSizeLG,
        },
      },
      ...genVerticalStyle('default', token),
      [`${componentCls}-row > th, ${componentCls}-row > td`]: {
        paddingRight: token.paddingLG,
      },
      [`${componentCls}-item-label`]: {
        fontWeight: token.fontWeightWeak,
        [`&${componentCls}-item-no-colon::after`]: {
          display: 'none',
        },
      },
      [`${componentCls}-item-container`]: {
        [`${componentCls}-item-content`]: {
          [`${typographyComponentCls}-edit-content`]: {
            insetInlineStart: 0,
            marginTop: 0,
            marginBottom: 0,
          },
        },
      },
      [`${componentCls}-item-container:has(${`${typographyComponentCls}-edit-content`})`]: {
        alignItems: 'center',
        height: calc(token.fontSize).mul(token.lineHeight).equal(),
      },
    },
    [`${componentCls}${componentCls}-middle`]: {
      [`${componentCls}-header`]: {
        marginBottom: token.marginSM,
      },
      ...genVerticalStyle('middle', token),
    },
    [`${componentCls}${componentCls}-small`]: {
      [`${componentCls}-header`]: {
        marginBottom: token.marginXS,
      },
      ...genVerticalStyle('small', token),
    },
    // collapsed state
    [`${componentCls}${componentCls}-collapsed`]: {
      [`${componentCls}-view`]: {
        display: 'none',
      },
    },
    // contentAlign="left": label column auto width based on longest label
    // For non-bordered mode: use CSS Grid to make label and content align across rows
    [`${componentCls}${componentCls}-content-align-left:not(${componentCls}-bordered)`]: {
      [`${componentCls}-view`]: {
        display: 'block',
      },
      // Make table, tbody, tr, td all transparent to grid layout
      [`${componentCls}-view > table`]: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
      },
      [`${componentCls}-view > table > tbody`]: {
        display: 'contents',
      },
      [`${componentCls}-row`]: {
        display: 'contents',
      },
      [`${componentCls}-row > td${componentCls}-item`]: {
        display: 'contents',
      },
      [`${componentCls}-item-container`]: {
        display: 'contents',
      },
      [`${componentCls}-item-label`]: {
        whiteSpace: 'nowrap',
        paddingBottom: token.padding,
        paddingInlineEnd: token.paddingLG,
      },
      [`${componentCls}-item-content`]: {
        paddingBottom: token.padding,
      },
      [`&${componentCls}-middle`]: {
        [`${componentCls}-item-label`]: {
          paddingBottom: token.paddingSM,
          paddingInlineEnd: token.paddingLG,
        },
        [`${componentCls}-item-content`]: {
          paddingBottom: token.paddingSM,
        },
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-title`]: {
          fontSize: token.fontSize,
        },
        [`${componentCls}-item-label`]: {
          paddingBottom: token.paddingXS,
          paddingInlineEnd: token.paddingLG,
        },
        [`${componentCls}-item-content`]: {
          paddingBottom: token.paddingXS,
        },
      },
    },
    // For bordered mode: label and content are in separate th and td
    [`${componentCls}${componentCls}-content-align-left${componentCls}-bordered`]: {
      [`${componentCls}-view > table`]: {
        tableLayout: 'auto',
      },
      [`${componentCls}-row`]: {
        [`& > th`]: {
          whiteSpace: 'nowrap',
          width: 1,
        },
        [`& > td`]: {
          width: '100%',
        },
      },
    },
  };
};

export default (prefixCls: string, typographyPrefixCls: string) => {
  const useStyle = genStyleHooks('Descriptions', token => {
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
