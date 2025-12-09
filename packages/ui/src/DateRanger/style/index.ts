import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type DateRangerToken = OBToken;

export const genDateRangerStyle: GenerateStyle<DateRangerToken> = (
  token: DateRangerToken
): CSSObject => {
  const {
    componentCls,
    antCls,
    colorBgContainer,
    colorBorder,
    borderRadius,
    colorTextSecondary,
    colorFillSecondary,
    colorFill,
  } = token;

  return {
    [`${componentCls}`]: {
      cursor: 'pointer',
      [`${componentCls}-wrapper`]: {
        backgroundColor: colorBgContainer,
        border: `1px solid ${colorBorder}`,
        boxSizing: 'border-box',
        display: 'flex',
        borderRadius: borderRadius,
        transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
        [`${componentCls}-picker`]: {
          paddingLeft: 0,
          paddingRight: 16,
          border: 0,
          '&:focus, &:focus-within': {
            boxShadow: 'none',
          },
          input: {
            textAlign: 'center',
          },
          [`${antCls}-picker-active-bar`]: {
            height: 0,
          },
          [`${antCls}-picker-input > input`]: {
            cursor: 'pointer',
          },
        },
        '&:hover': {
          borderColor: token.colorPrimaryHover,
        },
      },
      [`${componentCls}-wrapper-has-jumper`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      [`${componentCls}-play`]: {
        padding: '3px 11px 3px',
      },
      [`${componentCls}-picker-input`]: {
        maxWidth: 125,
      },
      [`${componentCls}-date-picker`]: {
        [`${antCls}-select-selector`]: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          '&:hover': {
            zIndex: 1,
          },
        },
        [`${antCls}-select-arrow`]: {
          zIndex: 1,
        },
      },
    },
    [`${componentCls}-dropdown-picker`]: {
      display: 'flex',
      padding: 4,
      gap: 4,
      backgroundColor: colorBgContainer,
      backgroundClip: 'padding-box',
      borderRadius: token.borderRadiusMD,
      outline: 'none',
      boxShadow:
        '0 6px 16px 0 rgba(54, 69, 99, 0.08), 0 3px 6px -4px rgba(54, 69, 99, 0.12), 0 9px 28px 8px rgba(54, 69, 99, 0.05)',
      [`${antCls}-dropdown-menu`]: {
        padding: 0,
        boxShadow: 'none !important',
      },
      [`${antCls}-picker-time-panel-container`]: {
        [`${antCls}-picker-content`]: {
          height: 148,
        },
      },
    },
    [`${componentCls}-show-range`]: {
      [`${componentCls}-quick-picker.${componentCls}-quick-picker-select`]: {
        marginRight: -1,
        [`${antCls}-select-selector`]: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          '&:hover': {
            zIndex: 1,
          },
        },
        [`${antCls}-select-arrow`]: {
          zIndex: 1,
        },
      },
      [`${componentCls}-playback-control`]: {
        display: 'flex',
        flexWrap: 'nowrap',
        [`${antCls}-radio-button-wrapper`]: {
          paddingInline: 8,
          color: colorTextSecondary,
          transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
          '&:hover': {
            borderColor: token.colorPrimaryHover,
            '&::before': {
              backgroundColor: token.colorPrimaryHover,
            },
          },
        },
      },
    },
    [`${componentCls}-label`]: {
      fontSize: token.fontSizeSM,
      backgroundColor: colorFillSecondary,
      color: colorTextSecondary,
      display: 'inline-block',
      width: 52,
      padding: '4px 0',
      borderRadius: token.borderRadiusSM,
      lineHeight: 1,
      textAlign: 'center',
    },
    [`${componentCls}-back-radio-focused`]: {
      [`${componentCls}-wrapper`]: {
        borderRightColor: token.colorPrimaryHover,
      },
      [`${componentCls}-playback-control`]: {
        [`${antCls}-radio-button-wrapper:first-child`]: {
          [`+ ${antCls}-radio-button-wrapper::before`]: {
            backgroundColor: token.colorPrimaryHover,
          },
        },
      },
    },
    [`${componentCls}-history-menu-item`]: {
      [`${componentCls}-menu-text-btn-wrapper`]: {
        justifyContent: 'space-between',
        height: 0,
        transition: 'height 0.2s',
        overflow: 'hidden',
      },
      '&:hover': {
        [`${componentCls}-menu-text-btn-wrapper`]: {
          height: 22,
        },
      },
    },
    [`${componentCls}-menu-text-btn`]: {
      width: 72,
      backgroundColor: `${colorFillSecondary} !important`,
      '&:hover': {
        backgroundColor: `${colorFill} !important`,
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('DateRanger', token => {
    return [genDateRangerStyle(token as DateRangerToken)];
  });
  return useStyle(prefixCls);
};
