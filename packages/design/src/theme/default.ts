import type { ThemeConfig } from 'antd';
import { formatTheme } from './util/format';

const colorPrimary = '#0D6CF2';
const colorPrimarySecondary = '#598CF3';
const colorText = '#132039';
const colorTextSecondary = '#5c6b8a';
const colorFillSecondary = '#E2E8F3';
const colorFillTertiary = '#F3F6FC';
const colorFillQuaternary = '#F8FAFE';
const colorBorderSecondary = colorFillSecondary;
// Calculated by colorBorder and getWeakenBorderColor()
const tagColorBorder = '#cdd5e466';

export const fontFamilyEn = `Inter, 'Noto sans', sans-serif, Roboto, 'Open Sans', 'Segoe UI', 'Helvetica Neue', 'Helvetica, Arial', 'Apple Color Emoji'`;

const defaultTheme: ThemeConfig = {
  token: {
    fontFamily: `-apple-system, 'Noto Sans', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    fontFamilyCode: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
    borderRadius: 4,
    borderRadiusLG: 8,
    borderRadiusSM: 2,
    fontSize: 13,
    fontSizeSM: 11,
    colorPrimary: colorPrimary,
    colorInfo: colorPrimary,
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
    colorTextBase: '#000000',
    colorText,
    colorTextSecondary,
    colorTextQuaternary: '#c1cbe0',
    colorTextTertiary: '#8592AD',
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgLayout: colorFillQuaternary,
    colorBorder: '#CDD5E4',
    colorBorderSecondary,
    colorFillQuaternary,
    colorFillTertiary,
    colorFillSecondary,
    colorFill: '#cdd5e4',
    colorBgMask: 'rgba(19, 32, 57, 0.45)',
    colorBgElevated: '#ffffff',
    colorBgSpotlight: '#ffffff',
    boxShadow:
      '0 6px 16px 0 rgba(54, 69, 99, 0.08), 0 3px 6px -4px rgba(54, 69, 99, 0.12), 0 9px 28px 8px rgba(54, 69, 99, 0.05)',
    boxShadowSecondary:
      '0 6px 16px 0 rgba(54, 69, 99, 0.08), 0 3px 6px -4px rgba(54, 69, 99, 0.12), 0 9px 28px 8px rgba(54, 69, 99, 0.05)',
    boxShadowTertiary:
      '0 1px 2px 0 rgba(54, 69, 99, 0.03), 0 1px 6px -1px rgba(54, 69, 99, 0.02), 0 2px 4px 0 rgba(54, 69, 99, 0.02)',
    wireframe: false,
    // Remove focus outline
    lineWidthFocus: 0,
  },
  components: {
    Badge: {
      colorInfo: colorPrimarySecondary,
    },
    Breadcrumb: {
      fontSize: 12,
      // @ts-ignore
      // fontHeight is internal token
      fontHeight: 20,
      lastItemColor: colorTextSecondary,
    },
    Collapse: {
      colorBorder: colorBorderSecondary,
    },
    InputNumber: {
      handleVisible: true,
    },
    Progress: {
      defaultColor: colorPrimarySecondary,
    },
    Radio: {
      // temporarily fix style for checked disabled Radio.Button
      controlItemBgActiveDisabled: colorFillSecondary,
    },
    Select: {
      // work for all multiple select component, including Select, TreeSelect and Cascader and so on
      multipleItemBg: colorFillQuaternary,
      multipleItemBorderColor: tagColorBorder,
      multipleItemBorderColorDisabled: tagColorBorder,
    },
    Slider: {
      trackBg: colorPrimary,
      trackHoverBg: '#5189fb',
      trackBgDisabled: '#b3ccff',
      handleColor: colorPrimary,
      handleActiveColor: '#5189fb',
      handleColorDisabled: '#b3ccff',
    },
    Tabs: {
      horizontalItemGutter: 24,
    },
    Tag: {
      defaultColor: colorTextSecondary,
      colorBorder: tagColorBorder,
    },
    Table: {
      cellFontSize: 12,
      headerSplitColor: 'transparent',
      cellPaddingBlock: 12,
      cellPaddingInline: 16,
      cellPaddingBlockMD: 8,
      cellPaddingBlockSM: 4,
      rowHoverBg: colorFillQuaternary,
      rowSelectedBg: colorFillQuaternary,
      rowSelectedHoverBg: colorFillTertiary,
    },
    Tooltip: {
      colorBgSpotlight: '#ffffff',
      colorTextLightSolid: colorText,
    },
    Card: {
      borderRadiusLG: 8,
    },
    Menu: {
      paddingContentVertical: 0,
      itemHeight: 30,
      itemBorderRadius: 4,
      // 80 means 50% opacity
      itemSelectedBg: colorFillSecondary + '80',
      itemHoverBg: colorFillSecondary + '80',
      itemColor: colorTextSecondary,
      itemSelectedColor: colorText,
      itemMarginBlock: 6,
      groupTitleFontSize: 11,
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
