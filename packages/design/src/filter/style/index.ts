import { useContext } from 'react';
import type { CSSObject, CSSInterpolation } from '@ant-design/cssinjs';
import { unit, useStyleRegister } from '@ant-design/cssinjs';
import themeConfig from '../../theme';
import type { GlobalToken } from '../../theme/interface';
import ConfigProvider from '../../config-provider';

export interface FilterToken extends GlobalToken {
  antCls: string;
  componentCls: string;
  iconCls: string;
  prefixCls: string;
}

const genSelectOptionStyle = (token: FilterToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-select-option`]: {
      paddingBlock: token.paddingXXS,
      paddingInline: token.paddingXS,
      cursor: 'pointer',
      borderRadius: token.borderRadius,

      '&:hover': {
        backgroundColor: token.colorBgTextHover,

        // hover 时图标切换效果
        [`${componentCls}-arrow-icon`]: {
          opacity: 0,
          visibility: 'hidden',
        },

        [`${componentCls}-clear-icon`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },

      // 有选中子项的父级选项样式
      [`&${componentCls}-has-selected`]: {
        backgroundColor: token.colorBgTextHover,
      },
    },
  };
};

const genCheckboxOptionStyle = (token: FilterToken): CSSObject => {
  const { antCls, componentCls } = token;
  return {
    [`${componentCls}-checkbox-option`]: {
      paddingBlock: token.paddingXXS,
      paddingInline: token.paddingXS,
      cursor: 'pointer',
      borderRadius: token.borderRadius,

      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },

      [`&${antCls}-checkbox-wrapper-disabled`]: {
        cursor: 'not-allowed',
        color: token.colorTextDisabled,

        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  };
};

const genSwitchOptionStyle = (token: FilterToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-switch-option`]: {
      cursor: 'default',
    },
  };
};

// 通用图标样式
const genIconStyle = (token: FilterToken): CSSObject => {
  const { componentCls } = token;

  // 基础计数样式（复用）
  const baseCountStyle: CSSObject = {
    opacity: 1,
    fontSize: token.fontSizeSM,
    color: token.colorIcon,
    backgroundColor: 'var(--ob-color-border-container)',
    borderRadius: 8,
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // 基础清除图标样式（复用）
  const baseClearIconStyle: CSSObject = {
    opacity: 0,
    cursor: 'pointer',
    visibility: 'hidden',
    position: 'absolute',
    color: token.colorIcon,
    fontSize: token.fontSizeSM,
    transform: 'translateY(-50%)',
    transition: `opacity ${token.motionDurationMid} ease-in-out, visibility ${token.motionDurationMid} ease-in-out`,
  };

  // 基础图标容器样式（复用）
  const baseIconWrapperStyle: CSSObject = {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: token.paddingXS,
    color: token.colorIcon,
  };

  return {
    [`${componentCls}-button-prefix-icon`]: {
      marginRight: token.paddingXXS,
      color: token.colorIcon,
    },

    [`${componentCls}-icon-wrapper`]: {
      ...baseIconWrapperStyle,
    },

    [`${componentCls}-count`]: {
      ...baseCountStyle,
    },

    [`${componentCls}-arrow-icon`]: {
      opacity: 1,
      fontSize: token.fontSizeSM,
      color: token.colorIcon,
      visibility: 'visible',
      transition: `opacity ${token.motionDurationMid} ease-in-out, visibility ${token.motionDurationMid} ease-in-out`,
    },

    [`${componentCls}-clear-icon`]: {
      ...baseClearIconStyle,
      left: 0,
      top: '60%',
    },

    [`${componentCls}-wrap-icon-wrapper`]: {
      ...baseIconWrapperStyle,
      backgroundColor: 'var(--ob-color-border-container)',
      borderRadius: 8,

      '&:hover': {
        [`${componentCls}-wrap-count`]: {
          opacity: 0,
          visibility: 'hidden',
        },

        [`${componentCls}-wrap-clear-icon`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },
    },

    [`${componentCls}-wrap-count`]: {
      ...baseCountStyle,
      visibility: 'visible',
      transition: `opacity ${token.motionDurationMid} ease-in-out, visibility ${token.motionDurationMid} ease-in-out`,
    },

    [`${componentCls}-wrap-clear-icon`]: {
      ...baseClearIconStyle,
      ...baseCountStyle,
      opacity: 0,
      cursor: 'pointer',
      visibility: 'hidden',
      position: 'absolute',
      left: 0,
      top: '50%',
    },
  };
};

const genFilterButtonStyle = (token: FilterToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-button-wrapper`]: {
      display: 'inline-block',
    },

    [`${componentCls}-button`]: {
      height: token.controlHeight,
      paddingBlock: token.paddingXXS,
      paddingInline: token.paddingSM,
      borderRadius: token.borderRadius,
      backgroundColor: token.white,
      cursor: 'pointer',
      display: 'flex',
      gap: token.paddingXS,
      alignItems: 'center',
      justifyContent: 'right',
      color: token.colorText,
      whiteSpace: 'nowrap',
      maxWidth: '260px',

      '&:hover': {
        [`${componentCls}-arrow-icon`]: {
          opacity: 0,
          visibility: 'hidden',
        },

        [`${componentCls}-clear-icon`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },
    },

    [`${componentCls}-button-label-wrapper`]: {
      width: '100%',
      paddingBlock: token.paddingXS,
      paddingInline: token.paddingSM,
      borderBottom: `1px solid ${token.colorFillSecondary}`,
      color: token.colorTextSecondary,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    [`${componentCls}-button-label-wrapper-no-border`]: {
      borderBottom: 'none',
      padding: `${unit(token.paddingXS)} ${unit(token.paddingSM)} 0px`,
    },

    [`${componentCls}-border`]: {
      border: `${token.lineWidth}px solid var(--ob-color-border-container)`,
      transition: `background-color ${token.motionDurationSlow} ease-in-out, border-color ${token.motionDurationSlow} ease-in-out`,

      '&:hover, &:active, &:focus, &:focus-within': {
        borderColor: token.colorTextTertiary,
      },
    },

    [`${componentCls}-active`]: {
      borderColor: token.colorBorder,
      color: token.colorTextLabel,
    },

    [`${componentCls}-disabled`]: {
      backgroundColor: token.colorBgContainerDisabled,
      borderColor: token.colorBorder,
      color: token.colorTextQuaternary,
      cursor: 'not-allowed',

      '&:hover, &:active, &:focus, &:focus-within': {
        borderColor: token.colorBorder,

        [`${componentCls}-arrow-icon`]: {
          opacity: 1,
          visibility: 'visible',
        },

        [`${componentCls}-clear-icon`]: {
          opacity: 0,
          visibility: 'hidden',
        },
      },
    },

    [`${componentCls}-selected`]: {
      backgroundColor: 'var(--ob-color-bg-hover)',
    },
  };
};

const genFilterTextEllipsisStyle = (token: FilterToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-text-ellipsis`]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  };
};

const genFilterStyle = (token: FilterToken): CSSInterpolation => {
  return [
    genIconStyle(token),
    genSelectOptionStyle(token),
    genCheckboxOptionStyle(token),
    genSwitchOptionStyle(token),
    genFilterButtonStyle(token),
    genFilterTextEllipsisStyle(token),
  ];
};

export interface UseFilterStyleResult {
  wrapSSR: (node: React.ReactElement) => React.ReactElement;
  hashId: string;
  prefixCls: string;
}

export default function useFilterStyle(prefixCls: string = 'ant-filter'): UseFilterStyleResult {
  const { theme, token } = themeConfig.useToken();
  const { getPrefixCls, iconPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const filterToken: FilterToken = {
    ...token,
    antCls: getPrefixCls(),
    componentCls: `.${prefixCls}`,
    iconCls: `.${iconPrefixCls}`,
    prefixCls,
  };

  const wrapSSR = useStyleRegister(
    {
      theme,
      token,
      path: ['filter', prefixCls],
      hashId: '',
      order: -900,
    },
    () => genFilterStyle(filterToken)
  );

  return {
    wrapSSR,
    hashId: '',
    prefixCls,
  };
}

// 导出样式类名生成器，方便组件使用
export const getFilterCls = (prefixCls: string, className: string) => `${prefixCls}-${className}`;
