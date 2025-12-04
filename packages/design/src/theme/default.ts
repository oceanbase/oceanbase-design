import type { ThemeConfig } from '../config-provider/context';
import { formatTheme } from './util/format';

const colorPrimary = '#0D6CF2';
const colorPrimarySecondary = '#598CF3';

const colorText = '#132039';
const colorTextSecondary = '#5C6B8A';
const colorTextTertiary = '#8592AD';
const colorTextQuaternary = '#B6C0D4';

const colorFill = '#CDD5E4';
const colorFillSecondary = '#E2E8F3';
const colorFillTertiary = '#EBEFF7';
const colorFillQuaternary = '#F5F7FC';

const colorBorderSecondary = colorFillSecondary;
const fontSizeSM = 12;
const tagColorBorder = colorTextQuaternary;

const borderRadius = 4;
const borderRadiusMD = 6;
const borderRadiusLG = 8;

export const fontFamilyEn = `Inter, 'Noto sans', sans-serif, Roboto, 'Open Sans', 'Segoe UI', 'Helvetica Neue', 'Helvetica, Arial', 'Apple Color Emoji'`;

export const fontWeightWeakEn = 300;
export const fontWeightEn = 500;
export const fontWeightStrongEn = 600;

const defaultTheme: ThemeConfig = {
  token: {
    fontFamily: `-apple-system, 'Noto Sans', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    fontFamilyCode: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
    fontWeightWeak: 400,
    fontWeight: 400,
    fontWeightStrong: 500,
    borderRadiusSM: 2,
    borderRadius,
    borderRadiusMD,
    borderRadiusLG,
    fontSizeSM,
    fontSize: 13,
    lineHeight: 20 / 13,
    fontHeight: 20,
    fontSizeLG: 16,
    fontSizeHeading1: 24,
    fontSizeHeading2: 20,
    fontSizeHeading3: 18,
    fontSizeHeading4: 16,
    fontSizeHeading5: 13,
    controlHeightSM: 24,
    controlHeight: 28,
    colorPrimary: colorPrimary,
    colorInfo: colorPrimary,
    colorInfoBorder: '#619EF3',
    colorInfoBg: '#F3F8FE',
    colorInfoHover: '#0852BB',
    colorInfoActive: '#0852BB',
    colorInfoText: '#0D3C80',
    colorSuccess: '#16B882',
    colorSuccessBorder: '#79D1B4',
    colorSuccessBg: '#F5FAF8',
    colorSuccessText: '#09593F',
    colorWarning: '#F49F25',
    colorWarningBorder: '#FAC373',
    colorWarningBg: '#FFF9EE',
    colorWarningText: '#6C4408',
    colorError: '#EB4242',
    colorErrorBorder: '#F69898',
    colorErrorBg: '#FFF2F2',
    colorErrorText: '#8A1B1B',
    colorFuchsia: '#B04EC4',
    colorFuchsiaBorder: '#D88EE7',
    colorFuchsiaBg: '#FAF0FC',
    colorFuchsiaText: '#580E67',
    colorTextBase: '#000000',
    colorText,
    colorTextSecondary,
    colorTextTertiary,
    colorTextQuaternary,
    colorIcon: colorTextSecondary,
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#FBFCFE',
    colorBorder: colorFill,
    colorBorderSecondary,
    colorFill,
    colorFillSecondary,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainerDisabled: colorFillTertiary,
    colorBgMask: 'rgba(19, 32, 57, 0.6)',
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
    Alert: {
      borderRadiusLG: borderRadiusMD,
    },
    Badge: {
      statusSize: 8,
    },
    Breadcrumb: {
      fontSize: fontSizeSM,
      fontHeight: 20,
      lastItemColor: colorTextSecondary,
    },
    Button: {
      contentFontSizeSM: 12,
      borderRadiusSM: 4,
      borderRadius: 4,
      borderRadiusLG: 4,
      paddingInlineSM: 8,
      paddingInline: 12,
      paddingInlineLG: 12,
    },
    Card: {
      headerFontSize: 16,
      borderRadiusLG: borderRadiusLG,
    },
    Collapse: {
      colorBorder: colorBorderSecondary,
    },
    DatePicker: {
      borderRadiusLG: borderRadiusMD,
    },
    Descriptions: {
      labelColor: colorTextSecondary,
    },
    Dropdown: {
      borderRadiusLG: borderRadiusMD,
    },
    Input: {
      borderRadiusLG: borderRadiusMD,
    },
    InputNumber: {
      handleVisible: true,
      borderRadiusLG: borderRadiusMD,
    },
    Popover: {
      borderRadiusLG: borderRadiusMD,
    },
    Progress: {
      defaultColor: colorPrimarySecondary,
    },
    Radio: {
      // temporarily fix style for checked disabled Radio.Button
      controlItemBgActiveDisabled: colorFillSecondary,
    },
    Segmented: {
      trackBg: colorFillTertiary,
    },
    Select: {
      // work for all multiple select component, including Select, TreeSelect and Cascader and so on
      borderRadiusLG: borderRadiusMD,
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
      blockRadius: borderRadius,
    },
    Tabs: {
      horizontalItemGutter: 24,
      itemActiveColor: colorText,
      itemSelectedColor: colorText,
      itemHoverColor: colorText,
    },
    Tag: {
      colorBorder: tagColorBorder,
      borderRadiusSM: borderRadius,
    },
    Table: {
      cellFontSize: fontSizeSM,
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
      borderRadius: borderRadiusMD,
      colorBgSpotlight: '#ffffff',
      colorTextLightSolid: colorText,
    },
    Menu: {
      borderRadiusLG: borderRadiusMD,
      paddingContentVertical: 0,
      itemHeight: 30,
      itemBorderRadius: borderRadius,
      // 80 means 50% opacity
      itemHoverBg: colorFillSecondary + '80',
      itemActiveBg: colorFillSecondary + '80',
      itemSelectedBg: colorFillSecondary + '80',
      itemColor: '#36496F',
      itemSelectedColor: colorText,
      itemMarginBlock: 6,
      groupTitleFontSize: 11,
      groupTitleColor: colorTextSecondary,
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
