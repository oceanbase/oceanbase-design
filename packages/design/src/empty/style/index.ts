import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type EmptyToken = FullToken<'Badge'>;

/** Illustration size in horizontal layout. */
const EMPTY_HORIZONTAL_IMAGE_SIZE = 160;
/** Minimum text width kept in horizontal layout, it also defines the stacking breakpoint. */
const EMPTY_HORIZONTAL_DESCRIPTION_MIN_WIDTH = 400;
/** Horizontal layout hides illustration below this container width. */
const EMPTY_HORIZONTAL_HIDE_IMAGE_WIDTH = 400;

export const genEmptyStyle: GenerateStyle<EmptyToken> = (token: EmptyToken): CSSObject => {
  const { antCls, componentCls, colorTextTertiary, colorText, colorTextSecondary, calc } = token;

  // An element can't be restyled by the container query of its own containment context,
  // so the horizontal layout is stacked by flex-wrap instead of switching `flexDirection`
  // on the container itself: the description keeps a minimum width and wraps onto a new
  // line below the illustration once the container can't fit both anymore.
  // The breakpoint is derived from the same values as that wrap point, to keep the stacked
  // layout and the container query in sync.
  const horizontalStackWidth =
    EMPTY_HORIZONTAL_IMAGE_SIZE + EMPTY_HORIZONTAL_DESCRIPTION_MIN_WIDTH + token.marginXL;
  const horizontalStackQuery = `@container (max-width: ${horizontalStackWidth}px)`;
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
      // stacked layout is driven by the wrapping of the description, see `horizontalStackWidth`
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      // keeps the stacked illustration and description as one centered group, e.g. with fullHeight
      alignContent: 'center',
      [`${componentCls}-image`]: {
        height: EMPTY_HORIZONTAL_IMAGE_SIZE,
        flexShrink: 0,
        '& svg': {
          height: EMPTY_HORIZONTAL_IMAGE_SIZE,
          width: EMPTY_HORIZONTAL_IMAGE_SIZE,
        },
      },
      [`${componentCls}-description`]: {
        marginLeft: token.marginXL,
        // preferred width of the text block, it makes the description wrap below the illustration
        // as soon as the container gets narrower than the stacking breakpoint
        flex: `1 1 ${EMPTY_HORIZONTAL_DESCRIPTION_MIN_WIDTH}px`,
        minWidth: 0,
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
        [`${componentCls}-image`]: {
          marginBottom: 0,
        },
        [`${componentCls}-description`]: {
          flexBasis: '100%',
          marginLeft: 0,
          marginTop: token.marginLG,
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

    [`${componentCls}-full-height`]: {
      minHeight: '100%',
      // override the built-in vertical margin of antd Empty, to keep content centered in a fixed-height container
      marginBlock: 0,
    },

    // horizontal layout centers content with flex already
    [`${componentCls}-full-height:not(${componentCls}-horizontal)`]: {
      display: 'grid',
      alignContent: 'center',
    },
  };
};

export default genStyleHooks('Empty', token => {
  return [genEmptyStyle(token as EmptyToken)];
});
