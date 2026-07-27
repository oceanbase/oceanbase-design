import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type EmptyToken = FullToken<'Badge'>;

/** Horizontal layout stacks vertically below this container width. */
const EMPTY_HORIZONTAL_STACK_WIDTH = 560;
/** Horizontal layout hides illustration below this container width. */
const EMPTY_HORIZONTAL_HIDE_IMAGE_WIDTH = 400;

export const genEmptyStyle: GenerateStyle<EmptyToken> = (token: EmptyToken): CSSObject => {
  const { antCls, componentCls, colorTextTertiary, colorText, colorTextSecondary, calc } = token;

  const horizontalStackQuery = `@container (max-width: ${EMPTY_HORIZONTAL_STACK_WIDTH}px)`;
  const horizontalHideImageQuery = `@container (max-width: ${EMPTY_HORIZONTAL_HIDE_IMAGE_WIDTH}px)`;

  return {
    [`${componentCls}`]: {
      [`${componentCls}-image`]: {
        height: 140,
        marginBottom: 0,
        '& svg': {
          height: 140,
          width: 140,
        },
      },
      [`${componentCls}-description`]: {
        color: colorTextSecondary,
        [`${componentCls}-title`]: {
          color: token.colorText,
          fontWeight: token.fontWeightStrong,
          fontSize: token.fontSizeHeading4,
          lineHeight: token.lineHeightHeading4,
          marginTop: token.marginLG,
        },
        [`${componentCls}-description-content`]: {
          color: colorTextSecondary,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          fontWeight: token.fontWeightWeak,
          maxWidth: 600,
          margin: '0px auto',
          marginTop: token.marginXXS,
        },
        [`${componentCls}-footer`]: {
          marginTop: token.margin,
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
              lineHeight: unit(token.controlHeightSM),
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
                lineHeight: unit(token.controlHeightSM),
                '&::after': {
                  top: calc(token.controlHeightSM).div(2).equal(),
                },
              },
              [`${antCls}-steps-item-description`]: {
                color: colorTextTertiary,
                fontSize: token.fontSizeSM,
                lineHeight: token.lineHeightSM,
                marginTop: token.marginXS,
              },
            },
          },
        },
      },
    },

    [`${componentCls}-horizontal`]: {
      containerType: 'inline-size',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [`${componentCls}-image`]: {
        height: 160,
        flexShrink: 0,
        '& svg': {
          height: 160,
          width: 160,
        },
      },
      [`${componentCls}-description`]: {
        marginLeft: token.marginXL,
        minWidth: 400,
        textAlign: 'left',
        [`${componentCls}-title`]: {
          marginTop: 0,
        },
        [`${componentCls}-description-content`]: {
          marginTop: token.marginXXS,
        },
      },
    },

    [horizontalStackQuery]: {
      [`${componentCls}-horizontal`]: {
        flexDirection: 'column',
        [`${componentCls}-image`]: {
          marginBottom: 0,
        },
        [`${componentCls}-description`]: {
          marginLeft: 0,
          marginTop: token.marginLG,
          minWidth: 'auto',
          textAlign: 'center',
        },
      },
    },

    [horizontalHideImageQuery]: {
      [`${componentCls}-horizontal`]: {
        [`${componentCls}-image`]: {
          display: 'none',
        },
        [`${componentCls}-description`]: {
          marginTop: 0,
        },
      },
    },

    [`${componentCls}-small`]: {
      [`${componentCls}-image`]: {
        height: 48,
        color: colorTextTertiary,
        '& svg': {
          height: 48,
          width: 48,
        },
      },
    },
  };
};

export default genStyleHooks('Empty', token => {
  return [genEmptyStyle(token as EmptyToken)];
});
