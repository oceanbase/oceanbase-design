import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { upperFirst } from 'lodash';

export type AlertToken = FullToken<'Alert'>;

const genAlertTypeStyle = (
  type: 'success' | 'info' | 'warning' | 'error',
  token: AlertToken
): CSSObject => {
  const { componentCls } = token;
  const textColor = token[`color${upperFirst(type)}Text`];
  const hoverColor = token[`color${upperFirst(type)}TextHover`];
  const activeColor = token[`color${upperFirst(type)}TextActive`];
  const linkStyle = {
    color: textColor,
    textDecoration: 'underline',
    '&:hover': {
      color: hoverColor,
    },
    '&:active': {
      color: activeColor,
    },
  };
  return {
    [`${componentCls}-message`]: {
      color: textColor,
      a: linkStyle,
    },
    [`${componentCls}-description`]: {
      a: linkStyle,
    },
    [`${componentCls}-icon`]: {
      color: textColor,
    },
  };
};

export const genAlertStyle: GenerateStyle<AlertToken> = (token: AlertToken): CSSObject => {
  const { componentCls, colorIcon, colorIconHover, motionDurationMid } = token;
  // height = fontSize * lineHeight
  const height = token.fontSize * token.lineHeight;
  // icon width = fontSizeLG (icon size)
  const iconWidth = token.fontSizeLG;
  // content and action start position = icon width + icon margin
  const contentStartOffset = iconWidth + token.marginXS;
  // close icon width (approximate)
  const closeIconWidth = height;
  console.log(token.paddingXXS);
  return {
    [`${componentCls}`]: {
      // vertical align to flex-start
      alignItems: 'flex-start !important',
      paddingInline: token.padding,
      position: 'relative',
      [`${componentCls}-icon`]: {
        height,
        fontSize: token.fontSizeLG,
        marginInlineEnd: token.marginXS,
        flexShrink: 0,
      },
      [`${componentCls}-close-icon`]: {
        position: 'absolute',
        top: token.paddingXS,
        insetInlineEnd: token.padding,
        height,
        color: colorIcon,
        transition: `color ${motionDurationMid}`,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          color: colorIconHover,
        },
      },
      // Default link styles (will be overridden by type-specific styles)
      [`${componentCls}-message`]: {
        a: {
          textDecoration: 'underline',
        },
      },
      [`${componentCls}-description`]: {
        a: {
          textDecoration: 'underline',
        },
      },
      [`&${componentCls}-success`]: genAlertTypeStyle('success', token),
      [`&${componentCls}-info`]: genAlertTypeStyle('info', token),
      [`&${componentCls}-warning`]: genAlertTypeStyle('warning', token),
      [`&${componentCls}-error`]: genAlertTypeStyle('error', token),
    },
    [`${componentCls}:not(${componentCls}-with-description)`]: {
      flexWrap: 'wrap',
      [`${componentCls}-content`]: {
        flex: `1 1 calc(100% - ${contentStartOffset + closeIconWidth + token.padding}px)`,
        minWidth: 0,
        maxWidth: `calc(100% - ${contentStartOffset + closeIconWidth + token.padding}px)`,
        wordBreak: 'break-word',
      },
      [`${componentCls}-action`]: {
        width: `calc(100% - ${contentStartOffset + token.padding}px)`,
        marginInlineStart: contentStartOffset,
        marginTop: token.marginXS,
      },
    },
    [`${componentCls}${componentCls}-with-description`]: {
      paddingBlock: token.paddingSM,
      flexWrap: 'wrap',
      [`${componentCls}-message`]: {
        fontSize: token.fontSize,
        fontWeight: token.fontWeightStrong,
        marginBottom: token.marginXXS,
        wordBreak: 'break-word',
      },
      [`${componentCls}-description`]: {
        wordBreak: 'break-word',
      },
      [`${componentCls}-content`]: {
        flex: `1 1 calc(100% - ${contentStartOffset + closeIconWidth + token.padding}px)`,
        minWidth: 0,
        maxWidth: `calc(100% - ${contentStartOffset + closeIconWidth + token.padding}px)`,
        wordBreak: 'break-word',
      },
      [`${componentCls}-action`]: {
        width: `calc(100% - ${contentStartOffset + token.padding}px)`,
        marginInlineStart: contentStartOffset,
        marginTop: token.marginSM,
      },
      [`${componentCls}-close-icon`]: {
        top: token.paddingSM,
      },
    },
    [`${componentCls}${componentCls}-ghost`]: {
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0px !important',
      borderRadius: 0,
    },
    [`${componentCls}${componentCls}-mini`]: {
      paddingBlock: token.paddingXXS,
      paddingInline: token.paddingXS,
      border: 'none',
      width: 'fit-content',
      display: 'inline-flex',
      alignItems: 'center',
      flexWrap: 'nowrap',
      [`${componentCls}-icon`]: {
        marginInlineEnd: token.paddingXS,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
      },
      [`${componentCls}-message`]: {
        whiteSpace: 'nowrap',
        wordBreak: 'normal',
        overflow: 'visible',
        lineHeight: token.lineHeight,
        display: 'flex',
        alignItems: 'center',
      },
      [`${componentCls}-content`]: {
        display: 'flex',
        alignItems: 'center',
        flex: '0 1 auto',
        whiteSpace: 'nowrap',
        minWidth: 0,
        lineHeight: token.lineHeight,
      },
      [`${componentCls}-close-icon`]: {
        position: 'relative',
        top: token.paddingXXS,
        insetInlineEnd: 'auto',
        height: 'auto',
        flexShrink: 0,
        marginInlineStart: 0,
      },
      [`&${componentCls}-closable`]: {
        [`${componentCls}-content`]: {
          paddingInlineEnd: token.paddingXS,
        },
      },
      [`&:not(${componentCls}-with-description)`]: {
        flexWrap: 'nowrap',
        [`${componentCls}-content`]: {
          flex: '0 1 auto',
          minWidth: 0,
          maxWidth: 'none',
          wordBreak: 'normal',
        },
      },
      [`&${componentCls}-with-description`]: {
        paddingBlock: token.paddingXXS,
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'relative',
        flexWrap: 'nowrap',
        [`${componentCls}-icon`]: {
          alignSelf: 'flex-start',
          marginTop: 0,
        },
        [`${componentCls}-content`]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: '0 1 auto',
          minWidth: 0,
          maxWidth: 'none',
          wordBreak: 'normal',
        },
        [`${componentCls}-message`]: {
          marginBottom: token.marginXXS,
          whiteSpace: 'nowrap',
          wordBreak: 'normal',
        },
        [`${componentCls}-description`]: {
          whiteSpace: 'nowrap',
          wordBreak: 'normal',
        },
        [`${componentCls}-close-icon`]: {
          position: 'absolute',
          top: token.paddingXXS,
          insetInlineEnd: token.paddingXS,
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Alert', token => {
    return [genAlertStyle(token as AlertToken)];
  });
  return useStyle(prefixCls);
};
