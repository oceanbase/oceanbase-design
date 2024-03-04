import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TagSelectToken = FullToken<any>;

const genSizeStyle = (height: number, fontSize: number): CSSObject => {
  return {
    paddingTop: `${height}px`,
    paddingBottom: `${height}px`,
    fontSize,
  };
};

const genColoredStyle = (
  borderColor: string,
  backgroundColor: string,
  color: string
): CSSObject => {
  return {
    borderColor,
    backgroundColor,
    color,
  };
};

const genMultipleStyle = (color: string, token: TagSelectToken): CSSObject => {
  return {
    position: 'absolute',
    top: '1px',
    right: '1px',
    borderTop: `12px solid ${color}`,
    borderLeft: `12px solid transparent`,
    borderTopRightRadius: token.borderRadiusSM,
  };
};

const genImgCoverStyle = (width: string, height: string): CSSObject => {
  return {
    width,
    height,
  };
};

export const genTagSelectStyle: GenerateStyle<TagSelectToken> = (
  token: TagSelectToken
): CSSObject => {
  const { componentCls } = token;

  return {
    [`${componentCls}-title`]: {
      fontSize: token.fontSize,
      color: token.colorText,
      margin: `${token.marginXXS}px 0`,
    },
    [`${componentCls}-wrapper`]: {
      position: 'relative',
      display: 'inline-block',
      fontSize: token.fontSize,
      color: token.colorText,
      background: token.colorWhite,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadius,
      marginRight: token.marginXS,
      padding: `${token.paddingXXS}px ${token.paddingContentHorizontal}px`,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      [`${componentCls}-input`]: {
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      '&:last-child': {
        margin: 0,
      },
      [`&:has(${componentCls}-cover)`]: {
        padding: 0,
        ...genImgCoverStyle('76px', '40px'),
      },
    },
    [`${componentCls}-cover`]: {
      display: 'inline-block',
      width: '100%',
      height: '100%',
      img: {
        height: 'calc(100% - 2px)',
        width: 'calc(100% - 2px)',
        borderRadius: token.borderRadius,
        marginLeft: '1px',
        marginTop: '1px',
      },
    },
    [`${componentCls}-large${componentCls}-img`]: {
      ...genImgCoverStyle('228px', '120px'),
      marginRight: '16px',
    },
    [`${componentCls}-small${componentCls}-img`]: genImgCoverStyle('76px', '32px'),
    [`${componentCls}-large`]: genSizeStyle(token.paddingContentVerticalSM, token.fontSize),
    [`${componentCls}-small`]: {
      ...genSizeStyle(0, token.fontSize),
      paddingLeft: `${token.paddingSM}px`,
      paddingRight: `${token.paddingSM}px`,
    },
    [`${componentCls}-wrapper:not(${componentCls}-disabled):hover`]: {
      borderColor: token.colorPrimaryText,
      color: token.colorPrimaryText,
    },
    [`${componentCls}-checked`]: genColoredStyle(
      token.blue,
      token.colorPrimaryBg,
      token.colorPrimaryText
    ),
    [`${componentCls}-wrapper:not(${componentCls}-disabled):active`]: {
      boxShadow: `0px 0px 3px ${token.colorPrimary}`,
      borderColor: `${token.colorPrimary}`,
    },
    [`${componentCls}-checked:not(${componentCls}-disabled)`]: {
      '&:hover': {
        ...genColoredStyle(token.colorInfoBorder, '#EBF1FF', token.colorInfoTextHover),
        [`${componentCls}-inner`]: {
          borderTopColor: `${token.colorPrimaryTextHover} !important`,
        },
      },
    },
    [`${componentCls}-disabled:not(${componentCls}-checked)`]: {
      ...genColoredStyle(token.colorBorder, token.colorFillContent, token.colorTextDisabled),
      cursor: 'not-allowed',
    },
    [`${componentCls}-disabled${componentCls}-checked`]: {
      cursor: 'not-allowed',
      ...genColoredStyle(token.colorBorder, token.colorFill, token.colorTextDisabled),
    },
    [`${componentCls}-checked${componentCls}-disabled.multiple`]: {
      [`${componentCls}-inner`]: genMultipleStyle(token.colorTextDisabled, token),
    },
    [`${componentCls}-checked:not(${componentCls}-disabled).multiple`]: {
      [`${componentCls}-inner`]: genMultipleStyle(token.colorPrimary, token),
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('TagSelect', token => {
    return [genTagSelectStyle(token as TagSelectToken)];
  });

  return useStyle(prefixCls);
};
