import type { ThemeConfig } from 'antd';
import { formatTheme } from './util/format';

// Calculated by colorBorder and getWeakenBorderColor()
const tagColorBorder = '#cdd5e466';

export const fontFamilyEn = `Inter, 'Noto sans', sans-serif, Roboto, 'Open Sans', 'Segoe UI', 'Helvetica Neue', 'Helvetica, Arial', 'Apple Color Emoji'`;

const defaultTheme: ThemeConfig = {
  token: {
    fontFamily: `-apple-system, 'Noto Sans', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    fontFamilyCode: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
    colorPrimaryBg: '#EAF1FF',
    colorPrimary: '#006AFF',
    colorPrimaryBgHover: '#EAF1FF',
    colorPrimaryBorder: '#b3ccff',
    colorPrimaryBorderHover: '#5189FB',
    colorPrimaryHover: '#5189fb',
    colorPrimaryActive: '#004CE6',
    colorPrimaryTextHover: '#5189FB',
    colorPrimaryText: '#006AFF',
    colorPrimaryTextActive: '#004CE6',
    colorSuccess: '#0ac185',
    colorSuccessBg: '#EEF8F5',
    colorSuccessBgHover: '#dbf0e9',
    colorSuccessBorder: '#B3E6D5',
    colorSuccessBorderHover: '#4DCCA2',
    colorSuccessHover: '#4DCCA2',
    colorSuccessActive: '#00B378',
    colorSuccessTextHover: '#4DCCA2',
    colorSuccessText: '#0AC185',
    colorSuccessTextActive: '#00B378',
    colorWarning: '#FFA21A',
    colorWarningBg: '#FFF5E5',
    colorWarningBgHover: '#ffe7c2',
    colorWarningBorder: '#FFD699',
    colorWarningBorderHover: '#FFC166',
    colorWarningHover: '#FFC166',
    colorWarningActive: '#FF9700',
    colorWarningTextHover: '#FFC166',
    colorWarningText: '#FFA21A',
    colorWarningTextActive: '#FF9700',
    colorErrorBg: '#ffebeb',
    colorErrorBgHover: '#ffd6d6',
    colorErrorBorder: '#FFB3B3',
    colorErrorBorderHover: '#ff7575',
    colorErrorHover: '#ff7575',
    colorErrorActive: '#CC0000',
    colorErrorTextHover: '#ff7575',
    colorErrorText: '#ff1a1a',
    colorErrorTextActive: '#CC0000',
    colorError: '#F93939',
    colorInfo: '#006AFF',
    colorInfoBg: '#EAF1FF',
    colorInfoBgHover: '#EAF1FF',
    colorInfoBorder: '#B3CCFF',
    colorInfoBorderHover: '#5189FB',
    colorInfoHover: '#5189FB',
    colorInfoActive: '#004CE6',
    colorInfoTextHover: '#5189FB',
    colorInfoText: '#006AFF',
    colorInfoTextActive: '#004CE6',
    colorTextBase: '#000000',
    colorText: '#132039',
    colorTextSecondary: '#5c6b8a',
    colorTextQuaternary: '#c1cbe0',
    colorTextTertiary: '#8592AD',
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f3f6fc',
    colorBorder: '#CDD5E4',
    colorBorderSecondary: '#E2E8F3',
    colorFillQuaternary: '#F8FAFE',
    colorFillTertiary: '#f3f6fc',
    colorFillSecondary: '#e2e8f3',
    colorFill: '#cdd5e4',
    colorBgMask: 'rgba(19, 32, 57, 0.45)',
    colorBgElevated: '#ffffff',
    colorBgSpotlight: '#ffffff',
    boxShadowSecondary:
      '0 6px 16px 0 rgba(54, 69, 99, 0.08), 0 3px 6px -4px rgba(54, 69, 99, 0.12), 0 9px 28px 8px rgba(54, 69, 99, 0.05)',
    boxShadow:
      '0 1px 2px 0 rgba(54, 69, 99, 0.03), 0 1px 6px -1px rgba(54, 69, 99, 0.02), 0 2px 4px 0 rgba(54, 69, 99, 0.02)',
    borderRadius: 6,
    wireframe: false,
    // Remove focus outline
    lineWidthFocus: 0,
  },
  components: {
    Breadcrumb: {
      fontSize: 12,
      // @ts-ignore
      // fontHeight is internal token
      fontHeight: 20,
      lastItemColor: '#5c6b8a',
    },
    InputNumber: {
      handleVisible: true,
    },
    Radio: {
      // temporarily fix style for checked disabled Radio.Button
      controlItemBgActiveDisabled: '#e2e8f3',
    },
    Select: {
      // work for all multiple select component, including Select, TreeSelect and Cascader and so on
      multipleItemBg: '#F8FAFE',
      multipleItemBorderColor: tagColorBorder,
      multipleItemBorderColorDisabled: tagColorBorder,
    },
    Slider: {
      trackBg: '#006AFF',
      trackHoverBg: '#5189fb',
      trackBgDisabled: '#b3ccff',
      handleColor: '#006AFF',
      handleActiveColor: '#5189fb',
      handleColorDisabled: '#b3ccff',
    },
    Tag: {
      defaultColor: '#5c6b8a',
      colorBorder: tagColorBorder,
    },
    Table: {
      cellPaddingBlock: 12,
      cellPaddingBlockMD: 8,
      cellPaddingBlockSM: 4,
    },
    Tooltip: {
      colorBgSpotlight: '#ffffff',
      colorTextLightSolid: '#132039',
    },
  },
};

defaultTheme.token = {
  ...defaultTheme.token,
  // preset colors below should be same with semantic colors
  blue: defaultTheme?.token?.colorInfo,
  green: defaultTheme?.token?.colorSuccess,
  yellow: defaultTheme?.token?.colorWarning,
  red: defaultTheme?.token?.colorError,
};

export default formatTheme(defaultTheme);
