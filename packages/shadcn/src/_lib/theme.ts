/**
 * OceanBase Design 主题工具
 * 提供主题相关的工具函数和常量
 */

/**
 * OceanBase Design CSS 变量前缀
 */
export const OB_PREFIX = 'ob'

/**
 * 获取 OceanBase Design CSS 变量
 */
export function obVar(name: string): string {
  return `var(--${OB_PREFIX}-${name})`
}

/**
 * 常用颜色变量
 */
export const colors = {
  // 基础颜色
  white: obVar('white'),
  black: obVar('black'),
  
  // 中性色
  gray: {
    1: obVar('gray-1'),
    2: obVar('gray-2'),
    3: obVar('gray-3'),
    4: obVar('gray-4'),
    5: obVar('gray-5'),
    6: obVar('gray-6'),
    7: obVar('gray-7'),
    8: obVar('gray-8'),
    9: obVar('gray-9'),
    10: obVar('gray-10'),
  },
  
  // 蓝色
  blue: {
    1: obVar('blue-1'),
    2: obVar('blue-2'),
    3: obVar('blue-3'),
    4: obVar('blue-4'),
    5: obVar('blue-5'),
    6: obVar('blue-6'),
  },
  
  // 绿色
  green: {
    1: obVar('green-1'),
    2: obVar('green-2'),
    3: obVar('green-3'),
    4: obVar('green-4'),
    5: obVar('green-5'),
    6: obVar('green-6'),
  },
  
  // 橙色
  orange: {
    1: obVar('orange-1'),
    2: obVar('orange-2'),
    3: obVar('orange-3'),
    4: obVar('orange-4'),
    5: obVar('orange-5'),
    6: obVar('orange-6'),
  },
  
  // 红色
  red: {
    1: obVar('red-1'),
    2: obVar('red-2'),
    3: obVar('red-3'),
    4: obVar('red-4'),
    5: obVar('red-5'),
    6: obVar('red-6'),
  },
  
  // 紫色
  fuchsia: {
    1: obVar('fuchsia-1'),
    2: obVar('fuchsia-2'),
    3: obVar('fuchsia-3'),
    4: obVar('fuchsia-4'),
    5: obVar('fuchsia-5'),
    6: obVar('fuchsia-6'),
  },
  
  // 语义颜色 - 背景
  bg: {
    default: obVar('color-bg-default'),
    primary: obVar('color-bg-primary'),
    secondary: obVar('color-bg-secondary'),
    hover: obVar('color-bg-hover'),
    focus: obVar('color-bg-focus'),
    active: obVar('color-bg-active'),
    disabled: obVar('color-bg-disabled'),
  },
  
  // 语义颜色 - 边框
  border: {
    default: obVar('color-border-default'),
    container: obVar('color-border-container'),
    hover: obVar('color-border-hover'),
    focus: obVar('color-border-focus'),
    error: obVar('color-border-error'),
    warning: obVar('color-border-warning'),
  },
  
  // 语义颜色 - 文本
  text: {
    default: obVar('color-text-default'),
    secondary: obVar('color-text-secondary'),
    label: obVar('color-text-label'),
    info: obVar('color-text-info'),
    disabled: obVar('color-text-disabled'),
    link: obVar('color-text-link'),
    selected: obVar('color-text-selected'),
  },
}

/**
 * 间距变量
 */
export const spacing = {
  0: obVar('space-0'),
  50: obVar('space-50'),
  100: obVar('space-100'),
  150: obVar('space-150'),
  200: obVar('space-200'),
  300: obVar('space-300'),
  400: obVar('space-400'),
  500: obVar('space-500'),
  600: obVar('space-600'),
  800: obVar('space-800'),
}

/**
 * 圆角变量
 */
export const radius = {
  sm: obVar('radius-sm'),
  md: obVar('radius-md'),
  lg: obVar('radius-lg'),
}

/**
 * 阴影变量
 */
export const shadows = {
  '1-top': obVar('shadow-1-top'),
  '1-bottom': obVar('shadow-1-bottom'),
  '1-left': obVar('shadow-1-left'),
  '1-right': obVar('shadow-1-right'),
  '2': obVar('shadow-2'),
}

/**
 * 字体变量
 */
export const fonts = {
  family: {
    default: obVar('font-family-default'),
  },
  size: {
    300: obVar('font-size-300'),
    325: obVar('font-size-325'),
    400: obVar('font-size-400'),
    450: obVar('font-size-450'),
    500: obVar('font-size-500'),
  },
  weight: {
    sm: obVar('font-weight-sm'),
    md: obVar('font-weight-md'),
    lg: obVar('font-weight-lg'),
  },
  lineHeight: {
    500: obVar('font-line-height-500'),
    600: obVar('font-line-height-600'),
    650: obVar('font-line-height-650'),
    700: obVar('font-line-height-700'),
  },
}

