import type { ThemeConfig } from 'antd';
import { formatTheme } from './util/format';

const colorPrimary = '#0D6CF2';
const colorPrimarySecondary = '#598CF3';
const colorText = '#132039';
const colorTextSecondary = '#5C6B8A';
const colorTextTertiary = '#8592AD';
const colorTextQuaternary = '#C1CBE0';
const colorFill = '#CDD5E4';
const colorFillSecondary = '#E2E8F3';
const colorFillTertiary = '#F3F6FC';
const colorFillQuaternary = '#F8FAFE';
const colorFillHover = '#EFF3FA';
const colorFillSelected = '#E2E8F3';
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
    fontSizeSM: 12,
    fontSizeLG: 16,
    fontSizeHeading1: 24,
    fontSizeHeading2: 20,
    fontSizeHeading3: 18,
    fontSizeHeading4: 16,
    fontSizeHeading5: 13,
    controlHeight: 28,
    colorPrimary: colorPrimary,
    colorInfo: colorPrimary,
    colorInfoBorder: colorPrimarySecondary,
    colorInfoBg: '#EAF1FF',
    colorInfoText: '#083E8B',
    colorSuccess: '#14B781',
    colorSuccessBorder: '#7ED7BA',
    colorSuccessBg: '#E8F8F3',
    colorSuccessText: '#096547',
    colorWarning: '#F49F25',
    colorWarningBorder: '#F9CB87',
    colorWarningBg: '#FEF6E9',
    colorWarningText: '#5B3600',
    colorError: '#EF4343',
    colorErrorBorder: '#F69898',
    colorErrorBg: '#FDECEC',
    colorErrorText: '#8A1B1B',
    colorTextBase: '#000000',
    colorText,
    colorTextSecondary,
    colorTextTertiary,
    colorTextQuaternary,
    colorIcon: colorTextSecondary,
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgLayout: colorFillQuaternary,
    colorBorder: colorFill,
    colorBorderSecondary,
    colorFill,
    colorFillSecondary,
    colorFillTertiary,
    colorFillQuaternary,
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
    Breadcrumb: {
      fontSize: 12,
      // @ts-ignore
      // fontHeight is internal token
      fontHeight: 20,
      lastItemColor: colorTextSecondary,
    },
    Card: {
      headerFontSize: 16,
      borderRadiusLG: 8,
    },
    Collapse: {
      colorBorder: colorBorderSecondary,
    },
    Descriptions: {
      labelColor: colorTextSecondary,
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
    Skeleton: {
      blockRadius: 4,
    },
    Tabs: {
      horizontalItemGutter: 24,
      itemActiveColor: colorText,
      itemSelectedColor: colorText,
      itemHoverColor: colorText,
    },
    Tag: {
      defaultColor: colorTextSecondary,
      colorBorder: tagColorBorder,
    },
    Table: {
      cellFontSize: 12,
      headerSplitColor: 'transparent',
      cellPaddingBlock: 8,
      cellPaddingInline: 16,
      cellPaddingBlockMD: 6,
      cellPaddingBlockSM: 4,
      rowHoverBg: colorFillQuaternary,
      rowSelectedBg: colorFillQuaternary,
      rowSelectedHoverBg: colorFillTertiary,
    },
    Tooltip: {
      colorBgSpotlight: '#ffffff',
      colorTextLightSolid: colorText,
    },
    Menu: {
      paddingContentVertical: 0,
      itemHeight: 30,
      itemBorderRadius: 4,
      // 80 means 50% opacity
      itemHoverBg: colorFillSecondary + '80',
      itemActiveBg: colorFillSecondary + '80',
      itemSelectedBg: colorFillSecondary + '80',
      itemColor: '#36496F',
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
