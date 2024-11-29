import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { genLargeStyle } from '../../_util/genStyle';

export type EmptyToken = FullToken<'Badge'>;

export const genEmptyStyle: GenerateStyle<EmptyToken> = (token: EmptyToken): CSSObject => {
  const { antCls, componentCls, colorTextTertiary, colorText, colorTextSecondary } = token;

  return {
    [`${componentCls}`]: {
      [`${componentCls}-image`]: {
        height: 160,
        marginBottom: 0,
      },
      [`${componentCls}-description`]: {
        // ensure description content color is correct always
        color: colorTextTertiary,
        [`${componentCls}-title`]: {
          color: token.colorText,
          fontWeight: token.fontWeightStrong,
          fontSize: token.fontSizeHeading4,
          lineHeight: token.lineHeightHeading4,
          marginTop: token.marginLG,
        },
        [`${componentCls}-description-content`]: {
          color: colorTextTertiary,
          maxWidth: 600,
          margin: '0px auto',
          marginTop: token.marginXS,
        },
        [`${antCls}-steps`]: {
          maxWidth: 1000,
          margin: '0px auto',
          marginTop: token.marginLG,
          padding: token.paddingLG,
          backgroundColor: token.colorFillQuaternary,
          borderRadius: token.borderRadiusLG,
          [`${antCls}-steps-item-container`]: {
            [`${antCls}-steps-item-icon`]: {
              height: token.controlHeightSM,
              width: token.controlHeightSM,
              lineHeight: `${token.controlHeightSM}px`,
              backgroundColor: token.colorFillSecondary,
              // override default border color
              borderColor: token.colorFillSecondary,
              [`${antCls}-steps-icon`]: {
                color: colorTextSecondary,
                fontSize: token.fontSize,
              },
            },
            [`${antCls}-steps-item-content`]: {
              [`${antCls}-steps-item-title`]: {
                color: colorText,
                fontSize: token.fontSize,
                fontWeight: token.fontWeightStrong,
                lineHeight: `${token.controlHeightSM}px`,
                '&::after': {
                  top: token.controlHeightSM / 2,
                },
              },
              [`${antCls}-steps-item-description`]: {
                color: colorTextTertiary,
                fontSize: token.fontSizeSM,
                marginTop: token.marginXS,
              },
            },
          },
        },
      },
      [`${componentCls}-footer`]: {
        marginTop: token.marginLG,
        ...genLargeStyle(token),
      },
    },

    [`${componentCls}-horizontal`]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [`${componentCls}-description`]: {
        marginLeft: token.marginXXL,
        textAlign: 'left',
        [`${componentCls}-title`]: {
          marginTop: 0,
        },
        [`${componentCls}-description-content`]: {
          marginTop: token.margin,
        },
      },
    },

    [`${componentCls}-small`]: {
      [`${componentCls}-image`]: {
        height: 54,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Empty', token => {
    return [genEmptyStyle(token as EmptyToken)];
  });
  return useStyle(prefixCls);
};
