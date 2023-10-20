import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type AlertToken = FullToken<'Alert'>;

const genTypeStyle = (color: string, token: AlertToken): CSSObject => {
  // 左侧颜色条宽度设置为 8px，但还需要绕 Y 轴旋转 60deg，因此最后的投影宽度实际为 4px
  const borderWidth = 8;
  return {
    content: '""',
    width: borderWidth,
    // 绕 Y 轴旋转 60deg 是为了让圆角有一定的视觉拉伸，以与原先的边框贴合更加紧密
    transform: 'rotateY(60deg)',
    backgroundColor: color,
    position: 'absolute',
    height: `calc(100% - ${token.lineWidth}px)`,
    left: -token.lineWidth - borderWidth / 2 / 2,
    top: token.lineWidth / 2,
    borderTopLeftRadius: token.borderRadiusLG,
    borderBottomLeftRadius: token.borderRadiusLG,
  };
};

const genColoredStyle = (color: string, colorHover: string, token: AlertToken): CSSObject => {
  const { componentCls, iconCls } = token;
  return {
    [`${componentCls}-message`]: {
      color,
    },
    [`${componentCls}-description`]: {
      color,
    },
    [`${componentCls}-close-icon`]: {
      [`${iconCls}`]: {
        color,
        '&:hover': {
          color: colorHover,
        },
      },
      [`${componentCls}-close-text`]: {
        color,
        '&:hover': {
          color: colorHover,
        },
      },
    },
  };
};

export const genAlertStyle: GenerateStyle<AlertToken> = (token: AlertToken): CSSObject => {
  const {
    componentCls,
    colorSuccess,
    colorSuccessHover,
    colorInfo,
    colorInfoHover,
    colorWarning,
    colorWarningHover,
    colorError,
    colorErrorHover,
    colorIcon,
    colorIconHover,
    motionDurationMid,
  } = token;
  // height = fontSize * lineHeight
  const height = token.fontSize * token.lineHeight;
  return {
    [`${componentCls}`]: {
      // vertical align to flex-start
      alignItems: 'flex-start !important',
      [`${componentCls}-icon`]: {
        height,
      },
      [`${componentCls}-close-icon`]: {
        height,
        color: colorIcon,
        transition: `color ${motionDurationMid}`,
        '&:hover': {
          color: colorIconHover,
        },
      },
    },
    [`${componentCls}${componentCls}-with-description`]: {
      paddingBlock: token.padding,
      [`${componentCls}-message`]: {
        marginBottom: token.marginXXS,
      },
      [`${componentCls}-icon`]: {
        fontSize: token.fontSizeHeading4,
        height: token.fontSizeHeading3,
      },
    },
    [`${componentCls}:not(${componentCls}-banner):not(${componentCls}-ghost)`]: {
      [`&${componentCls}-success::before`]: genTypeStyle(colorSuccess, token),
      [`&${componentCls}-info::before`]: genTypeStyle(colorInfo, token),
      [`&${componentCls}-warning::before`]: genTypeStyle(colorWarning, token),
      [`&${componentCls}-error::before`]: genTypeStyle(colorError, token),
    },
    [`${componentCls}${componentCls}-ghost`]: {
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
      borderRadius: 0,
    },
    [`${componentCls}-colored`]: {
      [`&${componentCls}-success`]: genColoredStyle(colorSuccess, colorSuccessHover, token),
      [`&${componentCls}-info`]: genColoredStyle(colorInfo, colorInfoHover, token),
      [`&${componentCls}-warning`]: genColoredStyle(colorWarning, colorWarningHover, token),
      [`&${componentCls}-error`]: genColoredStyle(colorError, colorErrorHover, token),
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Alert', token => {
    return [genAlertStyle(token as AlertToken)];
  });
  return useStyle(prefixCls);
};
