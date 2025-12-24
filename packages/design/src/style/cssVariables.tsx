/**
 * OceanBase Design System - CSS Variables Style
 * 使用 @ant-design/cssinjs 动态注入 CSS 变量
 * 根据主题 token 值动态生成
 */

import React from 'react';
import { useStyleRegister } from '@ant-design/cssinjs';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import themeConfig from '../theme';
import type { GlobalToken } from '../theme/interface';

/**
 * 根据 token 生成 CSS 变量样式
 */
const genCssVariablesStyle = (token: GlobalToken, prefix = 'ob'): CSSInterpolation => {
  return [
    {
      ':root': {
        // ==================== 基础颜色 Token ====================
        // 中性色 Neutral
        [`--${prefix}-white`]: token.white,
        [`--${prefix}-gray-1`]: token.gray1,
        [`--${prefix}-gray-2`]: token.gray2,
        [`--${prefix}-gray-3`]: token.gray3,
        [`--${prefix}-gray-4`]: token.gray4,
        [`--${prefix}-gray-5`]: token.gray5,
        [`--${prefix}-gray-6`]: token.gray6,
        [`--${prefix}-gray-7`]: token.gray7,
        [`--${prefix}-gray-8`]: token.gray8,
        [`--${prefix}-gray-9`]: token.gray9,
        [`--${prefix}-gray-10`]: token.colorText,
        [`--${prefix}-black`]: token.black,

        // 蓝色 Blue
        [`--${prefix}-blue-1`]: token.blue1,
        [`--${prefix}-blue-2`]: token.blue2,
        [`--${prefix}-blue-3`]: token.blue3,
        [`--${prefix}-blue-4`]: token.blue4,
        [`--${prefix}-blue-5`]: token.blue5,
        [`--${prefix}-blue-6`]: token.blue6,

        // 绿色 Green
        [`--${prefix}-green-1`]: token.green1,
        [`--${prefix}-green-2`]: token.green2,
        [`--${prefix}-green-3`]: token.green3,
        [`--${prefix}-green-4`]: token.green4,
        [`--${prefix}-green-5`]: token.green5,
        [`--${prefix}-green-6`]: token.green6,

        // 橙色 Orange
        [`--${prefix}-orange-1`]: token.orange1,
        [`--${prefix}-orange-2`]: token.orange2,
        [`--${prefix}-orange-3`]: token.orange3,
        [`--${prefix}-orange-4`]: token.orange4,
        [`--${prefix}-orange-5`]: token.orange5,
        [`--${prefix}-orange-6`]: token.orange6,

        // 红色 Red
        [`--${prefix}-red-1`]: token.red1,
        [`--${prefix}-red-2`]: token.red2,
        [`--${prefix}-red-3`]: token.red3,
        [`--${prefix}-red-4`]: token.red4,
        [`--${prefix}-red-5`]: token.red5,
        [`--${prefix}-red-6`]: token.red6,

        // 紫色 Fuchsia
        [`--${prefix}-fuchsia-1`]: token.fuchsia1,
        [`--${prefix}-fuchsia-2`]: token.fuchsia2,
        [`--${prefix}-fuchsia-3`]: token.fuchsia3,
        [`--${prefix}-fuchsia-4`]: token.fuchsia4,
        [`--${prefix}-fuchsia-5`]: token.fuchsia5,
        [`--${prefix}-fuchsia-6`]: token.fuchsia6,

        // ==================== 语义颜色 Token ====================
        // 填充色 Background
        [`--${prefix}-color-bg-default`]: token.colorBgContainer,
        [`--${prefix}-color-bg-primary`]: token.gray1,
        [`--${prefix}-color-bg-secondary`]: token.gray2,
        [`--${prefix}-color-bg-hover`]: token.gray2,
        [`--${prefix}-color-bg-hover-secondary`]: token.gray3,
        [`--${prefix}-color-bg-focus`]: token.gray3,
        [`--${prefix}-color-bg-selected`]: token.blue4,
        [`--${prefix}-color-bg-disabled`]: token.gray3,

        // 边框色 Border
        [`--${prefix}-color-divider`]: token.gray4,
        [`--${prefix}-color-border-default`]: token.gray5,
        [`--${prefix}-color-border-container`]: token.gray4,
        [`--${prefix}-color-border-inverse`]: token.white,
        [`--${prefix}-color-border-hover`]: token.gray7,
        [`--${prefix}-color-border-focus`]: token.blue4,
        [`--${prefix}-color-border-error`]: token.red4,
        [`--${prefix}-color-border-warning`]: token.orange4,

        // 文本色 Text
        [`--${prefix}-color-text-default`]: token.colorText,
        [`--${prefix}-color-text-navigation`]: token.gray9,
        [`--${prefix}-color-text-label`]: token.gray8,
        [`--${prefix}-color-text-description`]: token.gray7,
        [`--${prefix}-color-text-disabled`]: token.gray6,
        [`--${prefix}-color-text-focus`]: token.colorText,
        [`--${prefix}-color-text-selected`]: token.blue4,
        [`--${prefix}-color-text-link`]: token.blue4,
        [`--${prefix}-color-text-inverse`]: token.white,

        // 图标色 Icon
        [`--${prefix}-color-icon-default`]: token.gray8,
        [`--${prefix}-color-icon-hover`]: token.blue4,
        [`--${prefix}-color-icon-disabled`]: token.gray6,
        [`--${prefix}-color-icon-focus`]: token.blue4,
        [`--${prefix}-color-icon-inverse`]: token.white,
        [`--${prefix}-color-icon-info`]: token.blue4,
        [`--${prefix}-color-icon-warning`]: token.orange4,
        [`--${prefix}-color-icon-success`]: token.green4,
        [`--${prefix}-color-icon-error`]: token.red4,

        // 状态色
        [`--${prefix}-color-default-text`]: token.colorText,
        [`--${prefix}-color-default-icon`]: token.gray8,
        [`--${prefix}-color-default-fill`]: token.gray2,
        [`--${prefix}-color-default-border`]: token.gray2,
        [`--${prefix}-color-info-text`]: token.blue6,
        [`--${prefix}-color-info-icon`]: token.blue6,
        [`--${prefix}-color-info-fill`]: token.blue1,
        [`--${prefix}-color-info-border`]: token.blue3,
        [`--${prefix}-color-success-text`]: token.green6,
        [`--${prefix}-color-success-icon`]: token.green6,
        [`--${prefix}-color-success-fill`]: token.green1,
        [`--${prefix}-color-success-border`]: token.green3,
        [`--${prefix}-color-warning-text`]: token.orange6,
        [`--${prefix}-color-warning-icon`]: token.orange6,
        [`--${prefix}-color-warning-fill`]: token.orange1,
        [`--${prefix}-color-warning-border`]: token.orange3,
        [`--${prefix}-color-error-text`]: token.red6,
        [`--${prefix}-color-error-icon`]: token.red6,
        [`--${prefix}-color-error-fill`]: token.red1,
        [`--${prefix}-color-error-border`]: token.red3,
        [`--${prefix}-color-critical-text`]: token.fuchsia6,
        [`--${prefix}-color-critical-icon`]: token.fuchsia6,
        [`--${prefix}-color-critical-fill`]: token.fuchsia1,
        [`--${prefix}-color-critical-border`]: token.fuchsia3,

        // ==================== 字体 Token ====================
        [`--${prefix}-font-family-default`]: token.fontFamily,

        // 字重
        // use string to avoid appending px to the value by useStyleRegister
        [`--${prefix}-font-weight-sm`]: `${token.fontWeightWeak}`,
        [`--${prefix}-font-weight-md`]: `${token.fontWeight}`,
        [`--${prefix}-font-weight-lg`]: `${token.fontWeightStrong}`,

        // 字号
        [`--${prefix}-font-size-300`]: `${token.fontSizeSM}px`,
        [`--${prefix}-font-size-325`]: `${token.fontSize}px`,
        [`--${prefix}-font-size-400`]: `${token.fontSizeLG}px`,
        [`--${prefix}-font-size-450`]: `${token.fontSizeHeading3}px`,
        [`--${prefix}-font-size-500`]: `${token.fontSizeHeading2}px`,

        // 行高
        [`--${prefix}-font-line-height-500`]: '20px',
        [`--${prefix}-font-line-height-600`]: '24px',
        [`--${prefix}-font-line-height-650`]: '26px',
        [`--${prefix}-font-line-height-700`]: '28px',

        // 语义字体 Token (使用 font 简写: weight size/line-height family)
        // font-h1: 页容器一级标题
        [`--${prefix}-font-h1`]: `${token.fontWeightStrong} ${token.fontSizeHeading2}px/var(--${prefix}-font-line-height-700) ${token.fontFamily}`,
        // font-h2: 页容器二级标题、抽屉弹窗标题
        [`--${prefix}-font-h2`]: `${token.fontWeightStrong} ${token.fontSizeHeading3}px/var(--${prefix}-font-line-height-650) ${token.fontFamily}`,
        // font-h3: 卡片标题、表单一级分组标题
        [`--${prefix}-font-h3`]: `${token.fontWeightStrong} ${token.fontSizeLG}px/var(--${prefix}-font-line-height-600) ${token.fontFamily}`,
        // font-h4: 表单二级分组标题
        [`--${prefix}-font-h4`]: `${token.fontWeightStrong} ${token.fontSize}px/var(--${prefix}-font-line-height-500) ${token.fontFamily}`,
        // font-body1: 常规正文
        [`--${prefix}-font-body1`]: `${token.fontWeight} ${token.fontSize}px/var(--${prefix}-font-line-height-500) ${token.fontFamily}`,
        // font-body2: 表格文本
        [`--${prefix}-font-body2`]: `${token.fontWeightWeak} ${token.fontSizeSM}px/var(--${prefix}-font-line-height-500) ${token.fontFamily}`,
        // font-caption: 描述
        [`--${prefix}-font-caption`]: `${token.fontWeightWeak} ${token.fontSizeSM}px/var(--${prefix}-font-line-height-500) ${token.fontFamily}`,

        // ==================== 阴影 Token ====================
        [`--${prefix}-shadow-1-top`]: '0px -1px 2px 0px hsla(219, 50%, 15%, 0.1)',
        [`--${prefix}-shadow-1-bottom`]: '0px 1px 2px 0px hsla(219, 50%, 15%, 0.1)',
        [`--${prefix}-shadow-1-left`]: '-1px 0px 2px 0px hsla(219, 50%, 15%, 0.1)',
        [`--${prefix}-shadow-1-right`]: '1px 0px 2px 0px hsla(219, 50%, 15%, 0.1)',
        [`--${prefix}-shadow-2`]: token.boxShadowSecondary,

        // ==================== 圆角 Token ====================
        [`--${prefix}-radius-sm`]: `${token.borderRadius}px`,
        [`--${prefix}-radius-md`]: `${token.borderRadiusMD}px`,
        [`--${prefix}-radius-lg`]: `${token.borderRadiusLG}px`,

        // ==================== 间距 Token ====================
        [`--${prefix}-space-0`]: '0px',
        [`--${prefix}-space-50`]: '2px',
        [`--${prefix}-space-100`]: `${token.paddingXXS}px`,
        [`--${prefix}-space-150`]: '6px',
        [`--${prefix}-space-200`]: `${token.paddingXS}px`,
        [`--${prefix}-space-300`]: `${token.paddingSM}px`,
        [`--${prefix}-space-400`]: `${token.padding}px`,
        [`--${prefix}-space-500`]: `${token.paddingMD}px`,
        [`--${prefix}-space-600`]: `${token.paddingLG}px`,
        [`--${prefix}-space-800`]: `${token.paddingXL}px`,
        [`--${prefix}-spacing-negative-25`]: '-1px',

        // ==================== 组件 Token ====================
        // 导航 Navigation
        [`--${prefix}-navi-color-bg`]: token.colorNaviBg,
        [`--${prefix}-navi-color-bg-hover`]: token.colorNaviBgHover,
        [`--${prefix}-navi-color-bg-focus`]: token.colorNaviBgHover,

        // 按钮 Button
        [`--${prefix}-btn-color-primary-bg`]: token.blue4,
        [`--${prefix}-btn-color-primary-bg-hover`]: token.blue5,
        [`--${prefix}-btn-color-primary-bg-disabled`]: token.blue3,
        [`--${prefix}-btn-color-primary-text`]: token.white,
        [`--${prefix}-btn-color-primary-icon`]: token.white,
        [`--${prefix}-btn-color-secondary-border`]: token.blue4,
        [`--${prefix}-btn-color-secondary-text`]: token.blue4,
        [`--${prefix}-btn-color-secondary-icon`]: token.blue4,
        [`--${prefix}-btn-color-danger-border`]: token.red4,
        [`--${prefix}-btn-color-danger-text`]: token.red4,

        // 进度条 Progress
        [`--${prefix}-progress-color-bg-default`]: token.gray4,
        [`--${prefix}-progress-color-bg-loading`]: token.blue4,
        [`--${prefix}-progress-color-bg-success`]: token.green4,
        [`--${prefix}-progress-color-bg-error`]: token.red4,

        // 开关 Switch
        [`--${prefix}-switch-color-bg-default`]: token.gray7,
        [`--${prefix}-switch-color-bg-disabled`]: token.gray4,
        [`--${prefix}-switch-color-bg-active`]: token.blue4,
        [`--${prefix}-switch-color-bg-disabled-selected`]: token.gray5,
      },
    },
  ];
};

export interface CssVariablesStyleProps {
  /**
   * CSS 变量前缀，默认为 'ob'
   */
  prefix?: string;
}

/**
 * CSS 变量注入组件
 * 使用 @ant-design/cssinjs 动态注入 CSS 变量
 */
const CssVariablesStyle: React.FC<CssVariablesStyleProps> = ({ prefix = 'ob' }) => {
  const { theme, token } = themeConfig.useToken();

  const wrapSSR = useStyleRegister(
    {
      theme,
      token,
      path: ['ob-css-variables'],
      hashId: '',
      order: -1001, // 在全局样式之前注入
    },
    () => genCssVariablesStyle(token, prefix)
  );

  return wrapSSR(<></>);
};

export { CssVariablesStyle, genCssVariablesStyle };
export default CssVariablesStyle;
