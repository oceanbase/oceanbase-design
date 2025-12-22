import type { CSSObject, CSSInterpolation } from '@ant-design/cssinjs';
import { useStyleRegister } from '@ant-design/cssinjs';
import themeConfig from '../../theme';
import type { GlobalToken } from '../../theme/interface';

export interface FilterStyleToken extends GlobalToken {
  filterPrefixCls: string;
}

const genSelectOptionStyle = (token: FilterStyleToken): CSSObject => {
  const { filterPrefixCls } = token;
  return {
    [`.${filterPrefixCls}-select-option`]: {
      padding: '4px 8px',
      cursor: 'pointer',
      borderRadius: 'var(--ob-radius-md)',

      '&:hover': {
        backgroundColor: '#eff3fa',

        // hover 时图标切换效果
        [`.${filterPrefixCls}-arrow-icon`]: {
          opacity: 0,
          visibility: 'hidden',
        },

        [`.${filterPrefixCls}-clear-icon`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },

      // 有选中子项的父级选项样式
      [`&.${filterPrefixCls}-has-selected`]: {
        backgroundColor: '#eff3fa',
      },
    },
  };
};

const genCheckboxOptionStyle = (token: FilterStyleToken): CSSObject => {
  const { filterPrefixCls, colorTextDisabled } = token;
  return {
    [`.${filterPrefixCls}-checkbox-option`]: {
      padding: '4px 8px',
      cursor: 'pointer',
      borderRadius: 'var(--ob-radius-md)',

      '&:hover': {
        backgroundColor: '#eff3fa',
      },

      '&.ant-checkbox-wrapper-disabled': {
        cursor: 'not-allowed',
        color: colorTextDisabled,

        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  };
};

const genSwitchOptionStyle = (token: FilterStyleToken): CSSObject => {
  const { filterPrefixCls } = token;
  return {
    [`.${filterPrefixCls}-switch-option`]: {
      cursor: 'default',
    },
  };
};

// 通用图标样式
const genIconStyle = (token: FilterStyleToken): CSSObject => {
  const { filterPrefixCls } = token;
  return {
    [`.${filterPrefixCls}-button-prefix-icon`]: {
      marginRight: 'var(--ob-space-100)',
      color: 'var(--ob-color-icon-default)',
    },

    [`.${filterPrefixCls}-icon-wrapper`]: {
      position: 'relative',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'var(--ob-space-200)',
      color: 'var(--ob-color-icon-default)',
    },

    [`.${filterPrefixCls}-arrow-icon`]: {
      opacity: 1,
      fontSize: 12,
      color: 'var(--ob-color-icon-default)',
      visibility: 'visible',
      transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
    },

    [`.${filterPrefixCls}-clear-icon`]: {
      opacity: 0,
      cursor: 'pointer',
      visibility: 'hidden',
      position: 'absolute',
      left: 0,
      top: '60%',
      color: 'var(--ob-color-icon-default)',
      fontSize: 12,
      transform: 'translateY(-50%)',
      transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
    },
  };
};

const genFilterButtonStyle = (token: FilterStyleToken): CSSObject => {
  const { filterPrefixCls, colorText, colorFillSecondary } = token;
  return {
    [`.${filterPrefixCls}-button-wrapper`]: {
      display: 'inline-block',
    },

    [`.${filterPrefixCls}-button`]: {
      height: 28,
      padding: '4px 12px',
      borderRadius: 'var(--ob-radius-md)',
      cursor: 'pointer',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'right',
      color: colorText,
      whiteSpace: 'nowrap',
      maxWidth: '260px',

      '&:hover': {
        [`.${filterPrefixCls}-arrow-icon`]: {
          opacity: 0,
          visibility: 'hidden',
        },

        [`.${filterPrefixCls}-clear-icon`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },
    },

    [`.${filterPrefixCls}-button-label-wrapper`]: {
      width: '100%',
      padding: '8px 12px',
      borderBottom: `1px solid ${colorFillSecondary}`,
      color: token.colorTextSecondary,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    [`.${filterPrefixCls}-button-label-wrapper-no-border`]: {
      borderBottom: 'none',
      padding: '8px 12px 0px',
    },

    [`.${filterPrefixCls}-border`]: {
      border: `1px solid ${colorFillSecondary}`,
      transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',

      '&:hover, &:active, &:focus, &:focus-within': {
        borderColor: token.gray7,
      },
    },

    [`.${filterPrefixCls}-active`]: {
      borderColor: 'var(--ob-color-border-default)',
      backgroundColor: '#f5f8fc',
      color: token.colorTextTertiary,
    },

    [`.${filterPrefixCls}-disabled`]: {
      backgroundColor: 'var(--ob-color-bg-disabled)',
      borderColor: 'var(--ob-color-border-default)',
      color: 'var(--ob-color-text-disabled)',
      cursor: 'not-allowed',

      '&:hover': {
        [`.${filterPrefixCls}-arrow-icon`]: {
          opacity: 1,
          visibility: 'visible',
        },

        [`.${filterPrefixCls}-clear-icon`]: {
          opacity: 0,
          visibility: 'hidden',
        },
      },
    },

    [`.${filterPrefixCls}-selected`]: {
      backgroundColor: '#f5f8fc',
      color: 'var(--ob-color-text-default)',
    },
  };
};

const genFilterTextEllipsisStyle = (token: FilterStyleToken): CSSObject => {
  const { filterPrefixCls } = token;
  return {
    [`.${filterPrefixCls}-text-ellipsis`]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  };
};

const genFilterStyle = (token: FilterStyleToken): CSSInterpolation => {
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

export default function useFilterStyle(prefixCls: string = 'ob-filter'): UseFilterStyleResult {
  const { theme, token } = themeConfig.useToken();

  const filterToken: FilterStyleToken = {
    ...token,
    filterPrefixCls: prefixCls,
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
