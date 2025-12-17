import type { ThemeConfig } from '../config-provider/context';
import { formatTheme } from './util/format';

// ==================== 基础颜色 Token ====================
// 中性色 Neutral
export const white = '#ffffff';
export const gray1 = '#fbfcfe';
export const gray2 = '#f5f7fc';
export const gray3 = '#ebeff7';
export const gray4 = '#e2e8f3';
export const gray5 = '#cdd5e4';
export const gray6 = '#b6c0d4';
export const gray7 = '#8592ad';
export const gray8 = '#5c6b8a';
export const gray9 = '#3b4a69';
export const gray10 = '#132039';
export const black = '#000000';

// 蓝色 Blue
export const blue1 = '#f3f8fe';
export const blue2 = '#b3d3ff';
export const blue3 = '#619ef3';
export const blue4 = '#0d6cf2';
export const blue5 = '#0852bb';
export const blue6 = '#0d3c80';

// 绿色 Green
export const green1 = '#f5faf8';
export const green2 = '#b3e6d5';
export const green3 = '#79d1b4';
export const green4 = '#16b882';
export const green5 = '#0a8c61';
export const green6 = '#09593f';

// 橙色 Orange
export const orange1 = '#fff9ee';
export const orange2 = '#ffe7c2';
export const orange3 = '#fac373';
export const orange4 = '#f49f25';
export const orange5 = '#ac690b';
export const orange6 = '#6c4408';

// 红色 Red
export const red1 = '#fff2f2';
export const red2 = '#ffd6d6';
export const red3 = '#f69898';
export const red4 = '#eb4242';
export const red5 = '#b52727';
export const red6 = '#8a1b1b';

// 紫色 Fuchsia
export const fuchsia1 = '#faf0fc';
export const fuchsia2 = '#e8caee';
export const fuchsia3 = '#d88ee7';
export const fuchsia4 = '#b04ec4';
export const fuchsia5 = '#802792';
export const fuchsia6 = '#580e67';

// 导航特殊色
export const colorNaviBg = '#f1f6ff';
export const colorNaviBgHover = '#e8effb';

// ==================== 基础 Token 别名 ====================
const colorPrimary = blue4;
const colorPrimarySecondary = '#598cf3';

const colorText = gray10;
const colorTextSecondary = gray8;
const colorTextTertiary = gray7;
const colorTextQuaternary = gray6;

const colorFill = gray5;
const colorFillSecondary = gray4;
const colorFillTertiary = gray3;
const colorFillQuaternary = gray2;

const colorBorder = gray5;
const colorBorderSecondary = gray4;
const fontSizeSM = 12;
const tagColorBorder = gray6;

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
    lineHeightSM: 20 / 12,
    lineHeight: 20 / 13,
    lineHeightLG: 24 / 16,
    fontHeight: 20,
    fontSizeLG: 16,
    fontSizeHeading1: 24,
    fontSizeHeading2: 20,
    fontSizeHeading3: 18,
    fontSizeHeading4: 16,
    fontSizeHeading5: 13,
    lineHeightHeading1: 32 / 24,
    lineHeightHeading2: 28 / 20,
    lineHeightHeading3: 26 / 18,
    lineHeightHeading4: 24 / 16,
    lineHeightHeading5: 20 / 13,
    controlHeightSM: 24,
    controlHeight: 28,
    colorLinkHover: blue5,
    colorLinkActive: blue5,
    colorPrimary: colorPrimary,
    colorPrimaryBorder: blue3,
    colorPrimaryBg: blue1,
    colorPrimaryBgHover: blue2,
    colorPrimaryHover: blue5,
    colorPrimaryActive: blue5,
    colorPrimaryText: blue6,
    colorInfo: colorPrimary,
    colorInfoBorder: blue3,
    colorInfoBg: blue1,
    colorInfoBgHover: blue2,
    colorInfoHover: blue5,
    colorInfoActive: blue5,
    colorInfoText: blue6,
    colorSuccess: green4,
    colorSuccessBorder: green3,
    colorSuccessBg: green1,
    colorSuccessBgHover: green2,
    colorSuccessHover: green5,
    colorSuccessActive: green5,
    colorSuccessText: green6,
    colorWarning: orange4,
    colorWarningBorder: orange3,
    colorWarningBg: orange1,
    colorWarningBgHover: orange2,
    colorWarningHover: orange5,
    colorWarningActive: orange5,
    colorWarningText: orange6,
    colorError: red4,
    colorErrorBorder: red3,
    colorErrorBg: red1,
    colorErrorBgHover: red2,
    colorErrorHover: red5,
    colorErrorActive: red5,
    colorErrorText: red6,
    colorFuchsia: fuchsia4,
    colorFuchsiaBorder: fuchsia3,
    colorFuchsiaBg: fuchsia1,
    colorFuchsiaBgHover: fuchsia2,
    colorFuchsiaHover: fuchsia5,
    colorFuchsiaActive: fuchsia5,
    colorFuchsiaText: fuchsia6,
    colorTextBase: black,
    colorText,
    colorTextSecondary,
    colorTextTertiary,
    colorTextQuaternary,
    colorIcon: colorTextSecondary,
    colorBgBase: white,
    colorBgContainer: white,
    colorBgLayout: gray1,
    colorBgTextHover: gray2,
    colorBgTextActive: gray3,
    colorBorder,
    colorBorderSecondary,
    colorFill,
    colorFillSecondary,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainerDisabled: gray2,
    colorBgMask: 'rgba(19, 32, 57, 0.6)',
    colorBgElevated: white,
    colorBgSpotlight: white,
    controlItemBgHover: gray2,
    controlItemBgActive: gray2,
    // 导航特殊色
    colorNaviBg,
    colorNaviBgHover,
    // 阴影
    boxShadow:
      '0 6px 16px 0 rgba(54, 69, 99, 0.08), 0 3px 6px -4px rgba(54, 69, 99, 0.12), 0 9px 28px 8px rgba(54, 69, 99, 0.05)',
    boxShadowSecondary:
      '0 6px 16px 0 rgba(54, 69, 99, 0.08), 0 3px 6px -4px rgba(54, 69, 99, 0.12), 0 9px 28px 8px rgba(54, 69, 99, 0.05)',
    boxShadowTertiary:
      '0 1px 2px 0 rgba(54, 69, 99, 0.03), 0 1px 6px -1px rgba(54, 69, 99, 0.02), 0 2px 4px 0 rgba(54, 69, 99, 0.02)',
    wireframe: false,
    // Remove focus outline
    lineWidthFocus: 0,
    // ==================== 基础颜色 Token ====================
    // 黑白色
    white,
    black,
    // 中性色 Neutral
    gray1,
    gray2,
    gray3,
    gray4,
    gray5,
    gray6,
    gray7,
    gray8,
    gray9,
    // 蓝色 Blue
    blue1,
    blue2,
    blue3,
    blue4,
    blue5,
    blue6,
    'blue-1': blue1,
    'blue-2': blue2,
    'blue-3': blue3,
    'blue-4': blue4,
    'blue-5': blue5,
    'blue-6': blue6,
    // 绿色 Green
    green1,
    green2,
    green3,
    green4,
    green5,
    green6,
    'green-1': green1,
    'green-2': green2,
    'green-3': green3,
    'green-4': green4,
    'green-5': green5,
    'green-6': green6,
    // 橙色 Orange
    orange1,
    orange2,
    orange3,
    orange4,
    orange5,
    orange6,
    'orange-1': orange1,
    'orange-2': orange2,
    'orange-3': orange3,
    'orange-4': orange4,
    'orange-5': orange5,
    'orange-6': orange6,
    // 红色 Red
    red1,
    red2,
    red3,
    red4,
    red5,
    red6,
    'red-1': red1,
    'red-2': red2,
    'red-3': red3,
    'red-4': red4,
    'red-5': red5,
    'red-6': red6,
    // 紫色 Fuchsia
    fuchsia1,
    fuchsia2,
    fuchsia3,
    fuchsia4,
    fuchsia5,
    fuchsia6,
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
      iconGap: 4,
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
      colorTextQuaternary: gray7,
      // work for TimePicker and DatePicker
      hoverBorderColor: gray7,
      activeBorderColor: gray7,
    },
    Descriptions: {
      labelColor: colorTextSecondary,
    },
    Dropdown: {
      borderRadiusLG: borderRadiusMD,
    },
    Input: {
      borderRadiusLG: borderRadiusMD,
      colorTextQuaternary: gray8,
      // work for Input, InputNumber and AutoComplete
      hoverBorderColor: gray7,
      activeBorderColor: gray7,
    },
    InputNumber: {
      handleVisible: true,
      borderRadiusLG: borderRadiusMD,
      hoverBorderColor: gray7,
      activeBorderColor: gray7,
    },
    Message: {
      borderRadiusLG: borderRadiusMD,
    },
    Notification: {
      borderRadiusLG: borderRadiusMD,
      colorSuccessBg: white,
      colorErrorBg: white,
      colorInfoBg: white,
      colorWarningBg: white,
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
      colorTextQuaternary: gray8,
      // work for all multiple select component, including Select, TreeSelect and Cascader and so on
      borderRadiusLG: borderRadiusMD,
      hoverBorderColor: gray7,
      activeBorderColor: gray7,
      multipleItemBg: gray2,
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
      horizontalItemPaddingSM: '12px 0',
      horizontalItemPadding: '16px 0',
      horizontalItemPaddingLG: '16px 0',
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
      cellPaddingInlineMD: 8,
      cellPaddingBlockSM: 4,
      cellPaddingInlineSM: 6,
      rowHoverBg: colorFillQuaternary,
      rowSelectedBg: colorFillQuaternary,
      rowSelectedHoverBg: colorFillTertiary,
    },
    Tooltip: {
      borderRadius: borderRadiusMD,
      colorBgSpotlight: white,
      colorTextLightSolid: colorText,
    },
    Typography: {},
    Menu: {
      borderRadiusLG: borderRadiusMD,
      paddingContentVertical: 0,
      itemHeight: 30,
      itemBorderRadius: borderRadius,
      // 80 means 50% opacity
      itemHoverBg: gray3,
      itemActiveBg: gray3,
      itemSelectedBg: gray3,
      itemColor: gray9,
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
