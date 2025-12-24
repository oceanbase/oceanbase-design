/**
 * CSS Variables Metadata
 * CSS 变量元数据定义，用于文档展示
 */

export type ObTokenCategory =
  | 'color'
  | 'color-bg'
  | 'color-border'
  | 'color-text'
  | 'color-icon'
  | 'color-status'
  | 'font'
  | 'shadow'
  | 'radius'
  | 'space'
  | 'component';

export interface ObTokenMeta {
  /** 变量名 (不含前缀) */
  name: string;
  /** 描述 */
  desc: string;
  /** 英文描述 */
  descEn?: string;
  /** 分类 */
  category: ObTokenCategory;
  /** token 来源 (用于获取值) */
  token?: string;
  /** 固定值 (非 token) */
  value?: string;
}

/**
 * CSS 变量元数据
 */
export const obTokenMeta: ObTokenMeta[] = [
  // ==================== 基础颜色 Token ====================
  // 中性色 Neutral
  { name: 'white', desc: '白色', descEn: 'White', category: 'color', token: 'white' },
  { name: 'black', desc: '黑色', descEn: 'Black', category: 'color', token: 'black' },
  {
    name: 'gray-1',
    desc: '页面底色',
    descEn: 'Page background',
    category: 'color',
    token: 'gray1',
  },
  {
    name: 'gray-2',
    desc: '侧边导航底色、悬停态、禁用态',
    descEn: 'Side nav bg, hover, disabled',
    category: 'color',
    token: 'gray2',
  },
  {
    name: 'gray-3',
    desc: '子表格悬停态',
    descEn: 'Sub-table hover',
    category: 'color',
    token: 'gray3',
  },
  {
    name: 'gray-4',
    desc: '二级边框色、分割线、卡片边框',
    descEn: 'Secondary border, divider, card border',
    category: 'color',
    token: 'gray4',
  },
  {
    name: 'gray-5',
    desc: '一级边框色',
    descEn: 'Primary border',
    category: 'color',
    token: 'gray5',
  },
  {
    name: 'gray-6',
    desc: '四级文本：输入框暗文、禁用文本',
    descEn: 'Placeholder, disabled text',
    category: 'color',
    token: 'gray6',
  },
  {
    name: 'gray-7',
    desc: '三级文本：表单提示信息',
    descEn: 'Form hint text',
    category: 'color',
    token: 'gray7',
  },
  {
    name: 'gray-8',
    desc: '二级文本：表头文字',
    descEn: 'Table header',
    category: 'color',
    token: 'gray8',
  },
  {
    name: 'gray-9',
    desc: '导航默认态文字色',
    descEn: 'Nav default text',
    category: 'color',
    token: 'gray9',
  },
  {
    name: 'gray-10',
    desc: '一级文本',
    descEn: 'Primary text',
    category: 'color',
    token: 'colorText',
  },

  // 蓝色 Blue
  { name: 'blue-1', desc: '蓝色-填充', descEn: 'Blue-fill', category: 'color', token: 'blue1' },
  {
    name: 'blue-2',
    desc: '蓝色-备用色',
    descEn: 'Blue-secondary',
    category: 'color',
    token: 'blue2',
  },
  { name: 'blue-3', desc: '蓝色-描边', descEn: 'Blue-border', category: 'color', token: 'blue3' },
  { name: 'blue-4', desc: '蓝色-默认', descEn: 'Blue-default', category: 'color', token: 'blue4' },
  {
    name: 'blue-5',
    desc: '蓝色-悬停、激活',
    descEn: 'Blue-hover, active',
    category: 'color',
    token: 'blue5',
  },
  { name: 'blue-6', desc: '蓝色-文字', descEn: 'Blue-text', category: 'color', token: 'blue6' },

  // 绿色 Green
  { name: 'green-1', desc: '绿色-填充', descEn: 'Green-fill', category: 'color', token: 'green1' },
  {
    name: 'green-2',
    desc: '绿色-备用色',
    descEn: 'Green-secondary',
    category: 'color',
    token: 'green2',
  },
  {
    name: 'green-3',
    desc: '绿色-描边',
    descEn: 'Green-border',
    category: 'color',
    token: 'green3',
  },
  {
    name: 'green-4',
    desc: '绿色-默认',
    descEn: 'Green-default',
    category: 'color',
    token: 'green4',
  },
  {
    name: 'green-5',
    desc: '绿色-备用色',
    descEn: 'Green-secondary',
    category: 'color',
    token: 'green5',
  },
  { name: 'green-6', desc: '绿色-文字', descEn: 'Green-text', category: 'color', token: 'green6' },

  // 橙色 Orange
  {
    name: 'orange-1',
    desc: '橙色-填充',
    descEn: 'Orange-fill',
    category: 'color',
    token: 'orange1',
  },
  {
    name: 'orange-2',
    desc: '橙色-备用色',
    descEn: 'Orange-secondary',
    category: 'color',
    token: 'orange2',
  },
  {
    name: 'orange-3',
    desc: '橙色-描边',
    descEn: 'Orange-border',
    category: 'color',
    token: 'orange3',
  },
  {
    name: 'orange-4',
    desc: '橙色-默认',
    descEn: 'Orange-default',
    category: 'color',
    token: 'orange4',
  },
  {
    name: 'orange-5',
    desc: '橙色-备用色',
    descEn: 'Orange-secondary',
    category: 'color',
    token: 'orange5',
  },
  {
    name: 'orange-6',
    desc: '橙色-文字',
    descEn: 'Orange-text',
    category: 'color',
    token: 'orange6',
  },

  // 红色 Red
  { name: 'red-1', desc: '红色-填充', descEn: 'Red-fill', category: 'color', token: 'red1' },
  { name: 'red-2', desc: '红色-备用色', descEn: 'Red-secondary', category: 'color', token: 'red2' },
  { name: 'red-3', desc: '红色-描边', descEn: 'Red-border', category: 'color', token: 'red3' },
  { name: 'red-4', desc: '红色-默认', descEn: 'Red-default', category: 'color', token: 'red4' },
  { name: 'red-5', desc: '红色-备用色', descEn: 'Red-secondary', category: 'color', token: 'red5' },
  { name: 'red-6', desc: '红色-文字', descEn: 'Red-text', category: 'color', token: 'red6' },

  // 紫色 Fuchsia
  {
    name: 'fuchsia-1',
    desc: '紫红色-填充',
    descEn: 'Fuchsia-fill',
    category: 'color',
    token: 'fuchsia1',
  },
  {
    name: 'fuchsia-2',
    desc: '紫红色-备用色',
    descEn: 'Fuchsia-secondary',
    category: 'color',
    token: 'fuchsia2',
  },
  {
    name: 'fuchsia-3',
    desc: '紫红色-描边',
    descEn: 'Fuchsia-border',
    category: 'color',
    token: 'fuchsia3',
  },
  {
    name: 'fuchsia-4',
    desc: '紫红色-默认',
    descEn: 'Fuchsia-default',
    category: 'color',
    token: 'fuchsia4',
  },
  {
    name: 'fuchsia-5',
    desc: '紫红色-备用色',
    descEn: 'Fuchsia-secondary',
    category: 'color',
    token: 'fuchsia5',
  },
  {
    name: 'fuchsia-6',
    desc: '紫红色-文字',
    descEn: 'Fuchsia-text',
    category: 'color',
    token: 'fuchsia6',
  },

  // ==================== 语义颜色 Token ====================
  // 填充色 Background
  {
    name: 'color-bg-default',
    desc: '默认背景色',
    descEn: 'Default background',
    category: 'color-bg',
    token: 'colorBgContainer',
  },
  {
    name: 'color-bg-primary',
    desc: '一级背景色',
    descEn: 'Primary background',
    category: 'color-bg',
    token: 'gray1',
  },
  {
    name: 'color-bg-secondary',
    desc: '二级背景色',
    descEn: 'Secondary background',
    category: 'color-bg',
    token: 'gray2',
  },
  {
    name: 'color-bg-hover',
    desc: '悬停背景色',
    descEn: 'Hover background',
    category: 'color-bg',
    token: 'gray2',
  },
  {
    name: 'color-bg-hover-secondary',
    desc: '二级悬停背景色',
    descEn: 'Secondary hover bg',
    category: 'color-bg',
    token: 'gray3',
  },
  {
    name: 'color-bg-focus',
    desc: '聚焦背景色',
    descEn: 'Focus background',
    category: 'color-bg',
    token: 'gray3',
  },
  {
    name: 'color-bg-selected',
    desc: '选中背景色',
    descEn: 'Selected background',
    category: 'color-bg',
    token: 'blue4',
  },
  {
    name: 'color-bg-disabled',
    desc: '禁用背景色',
    descEn: 'Disabled background',
    category: 'color-bg',
    token: 'gray3',
  },

  // 边框色 Border
  {
    name: 'color-divider',
    desc: '分割线颜色',
    descEn: 'Divider color',
    category: 'color-border',
    token: 'gray4',
  },
  {
    name: 'color-border-default',
    desc: '默认边框色',
    descEn: 'Default border',
    category: 'color-border',
    token: 'gray5',
  },
  {
    name: 'color-border-container',
    desc: '容器边框色',
    descEn: 'Container border',
    category: 'color-border',
    token: 'gray4',
  },
  {
    name: 'color-border-inverse',
    desc: '反色边框',
    descEn: 'Inverse border',
    category: 'color-border',
    token: 'white',
  },
  {
    name: 'color-border-hover',
    desc: '悬停边框色',
    descEn: 'Hover border',
    category: 'color-border',
    token: 'gray7',
  },
  {
    name: 'color-border-focus',
    desc: '聚焦边框色',
    descEn: 'Focus border',
    category: 'color-border',
    token: 'blue4',
  },
  {
    name: 'color-border-error',
    desc: '错误边框色',
    descEn: 'Error border',
    category: 'color-border',
    token: 'red4',
  },
  {
    name: 'color-border-warning',
    desc: '警告边框色',
    descEn: 'Warning border',
    category: 'color-border',
    token: 'orange4',
  },

  // 文本色 Text
  {
    name: 'color-text-default',
    desc: '默认文本色',
    descEn: 'Default text',
    category: 'color-text',
    token: 'colorText',
  },
  {
    name: 'color-text-navigation',
    desc: '导航文本色',
    descEn: 'Navigation text',
    category: 'color-text',
    token: 'gray9',
  },
  {
    name: 'color-text-label',
    desc: '标签文本色',
    descEn: 'Label text',
    category: 'color-text',
    token: 'gray8',
  },
  {
    name: 'color-text-description',
    desc: '描述文本色',
    descEn: 'Description text',
    category: 'color-text',
    token: 'gray7',
  },
  {
    name: 'color-text-disabled',
    desc: '禁用文本色',
    descEn: 'Disabled text',
    category: 'color-text',
    token: 'gray6',
  },
  {
    name: 'color-text-focus',
    desc: '聚焦文本色',
    descEn: 'Focus text',
    category: 'color-text',
    token: 'colorText',
  },
  {
    name: 'color-text-selected',
    desc: '选中文本色',
    descEn: 'Selected text',
    category: 'color-text',
    token: 'blue4',
  },
  {
    name: 'color-text-link',
    desc: '链接文本色',
    descEn: 'Link text',
    category: 'color-text',
    token: 'blue4',
  },
  {
    name: 'color-text-inverse',
    desc: '反色文本',
    descEn: 'Inverse text',
    category: 'color-text',
    token: 'white',
  },

  // 图标色 Icon
  {
    name: 'color-icon-default',
    desc: '默认图标色',
    descEn: 'Default icon',
    category: 'color-icon',
    token: 'gray8',
  },
  {
    name: 'color-icon-hover',
    desc: '悬停图标色',
    descEn: 'Hover icon',
    category: 'color-icon',
    token: 'blue4',
  },
  {
    name: 'color-icon-disabled',
    desc: '禁用图标色',
    descEn: 'Disabled icon',
    category: 'color-icon',
    token: 'gray6',
  },
  {
    name: 'color-icon-focus',
    desc: '聚焦图标色',
    descEn: 'Focus icon',
    category: 'color-icon',
    token: 'blue4',
  },
  {
    name: 'color-icon-inverse',
    desc: '反色图标',
    descEn: 'Inverse icon',
    category: 'color-icon',
    token: 'white',
  },
  {
    name: 'color-icon-info',
    desc: '信息图标色',
    descEn: 'Info icon',
    category: 'color-icon',
    token: 'blue4',
  },
  {
    name: 'color-icon-warning',
    desc: '警告图标色',
    descEn: 'Warning icon',
    category: 'color-icon',
    token: 'orange4',
  },
  {
    name: 'color-icon-success',
    desc: '成功图标色',
    descEn: 'Success icon',
    category: 'color-icon',
    token: 'green4',
  },
  {
    name: 'color-icon-error',
    desc: '错误图标色',
    descEn: 'Error icon',
    category: 'color-icon',
    token: 'red4',
  },

  // 状态色
  {
    name: 'color-default-text',
    desc: '默认状态-文本',
    descEn: 'Default status text',
    category: 'color-status',
    token: 'colorText',
  },
  {
    name: 'color-default-icon',
    desc: '默认状态-图标',
    descEn: 'Default status icon',
    category: 'color-status',
    token: 'gray8',
  },
  {
    name: 'color-default-fill',
    desc: '默认状态-填充',
    descEn: 'Default status fill',
    category: 'color-status',
    token: 'gray2',
  },
  {
    name: 'color-default-border',
    desc: '默认状态-边框',
    descEn: 'Default status border',
    category: 'color-status',
    token: 'gray2',
  },
  {
    name: 'color-info-text',
    desc: '信息状态-文本',
    descEn: 'Info status text',
    category: 'color-status',
    token: 'blue6',
  },
  {
    name: 'color-info-icon',
    desc: '信息状态-图标',
    descEn: 'Info status icon',
    category: 'color-status',
    token: 'blue6',
  },
  {
    name: 'color-info-fill',
    desc: '信息状态-填充',
    descEn: 'Info status fill',
    category: 'color-status',
    token: 'blue1',
  },
  {
    name: 'color-info-border',
    desc: '信息状态-边框',
    descEn: 'Info status border',
    category: 'color-status',
    token: 'blue3',
  },
  {
    name: 'color-success-text',
    desc: '成功状态-文本',
    descEn: 'Success status text',
    category: 'color-status',
    token: 'green6',
  },
  {
    name: 'color-success-icon',
    desc: '成功状态-图标',
    descEn: 'Success status icon',
    category: 'color-status',
    token: 'green6',
  },
  {
    name: 'color-success-fill',
    desc: '成功状态-填充',
    descEn: 'Success status fill',
    category: 'color-status',
    token: 'green1',
  },
  {
    name: 'color-success-border',
    desc: '成功状态-边框',
    descEn: 'Success status border',
    category: 'color-status',
    token: 'green3',
  },
  {
    name: 'color-warning-text',
    desc: '警告状态-文本',
    descEn: 'Warning status text',
    category: 'color-status',
    token: 'orange6',
  },
  {
    name: 'color-warning-icon',
    desc: '警告状态-图标',
    descEn: 'Warning status icon',
    category: 'color-status',
    token: 'orange6',
  },
  {
    name: 'color-warning-fill',
    desc: '警告状态-填充',
    descEn: 'Warning status fill',
    category: 'color-status',
    token: 'orange1',
  },
  {
    name: 'color-warning-border',
    desc: '警告状态-边框',
    descEn: 'Warning status border',
    category: 'color-status',
    token: 'orange3',
  },
  {
    name: 'color-error-text',
    desc: '错误状态-文本',
    descEn: 'Error status text',
    category: 'color-status',
    token: 'red6',
  },
  {
    name: 'color-error-icon',
    desc: '错误状态-图标',
    descEn: 'Error status icon',
    category: 'color-status',
    token: 'red6',
  },
  {
    name: 'color-error-fill',
    desc: '错误状态-填充',
    descEn: 'Error status fill',
    category: 'color-status',
    token: 'red1',
  },
  {
    name: 'color-error-border',
    desc: '错误状态-边框',
    descEn: 'Error status border',
    category: 'color-status',
    token: 'red3',
  },
  {
    name: 'color-critical-text',
    desc: '严重错误状态-文本',
    descEn: 'Critical status text',
    category: 'color-status',
    token: 'fuchsia6',
  },
  {
    name: 'color-critical-icon',
    desc: '严重错误状态-图标',
    descEn: 'Critical status icon',
    category: 'color-status',
    token: 'fuchsia6',
  },
  {
    name: 'color-critical-fill',
    desc: '严重错误状态-填充',
    descEn: 'Critical status fill',
    category: 'color-status',
    token: 'fuchsia1',
  },
  {
    name: 'color-critical-border',
    desc: '严重错误状态-边框',
    descEn: 'Critical status border',
    category: 'color-status',
    token: 'fuchsia3',
  },

  // ==================== 字体 Token ====================
  {
    name: 'font-family-default',
    desc: '默认字体',
    descEn: 'Default font family',
    category: 'font',
    token: 'fontFamily',
  },
  {
    name: 'font-weight-sm',
    desc: '弱字重',
    descEn: 'Light font weight',
    category: 'font',
    token: 'fontWeightWeak',
  },
  {
    name: 'font-weight-md',
    desc: '默认字重',
    descEn: 'Default font weight',
    category: 'font',
    token: 'fontWeight',
  },
  {
    name: 'font-weight-lg',
    desc: '强字重',
    descEn: 'Bold font weight',
    category: 'font',
    token: 'fontWeightStrong',
  },
  {
    name: 'font-size-300',
    desc: '小号字体',
    descEn: 'Small font size',
    category: 'font',
    token: 'fontSizeSM',
  },
  {
    name: 'font-size-325',
    desc: '默认字体',
    descEn: 'Default font size',
    category: 'font',
    token: 'fontSize',
  },
  {
    name: 'font-size-400',
    desc: '大号字体',
    descEn: 'Large font size',
    category: 'font',
    token: 'fontSizeLG',
  },
  {
    name: 'font-size-450',
    desc: '标题3字体',
    descEn: 'Heading 3 font size',
    category: 'font',
    token: 'fontSizeHeading3',
  },
  {
    name: 'font-size-500',
    desc: '标题2字体',
    descEn: 'Heading 2 font size',
    category: 'font',
    token: 'fontSizeHeading2',
  },
  {
    name: 'font-line-height-500',
    desc: '行高500',
    descEn: 'Line height 500',
    category: 'font',
    value: '20px',
  },
  {
    name: 'font-line-height-600',
    desc: '行高600',
    descEn: 'Line height 600',
    category: 'font',
    value: '24px',
  },
  {
    name: 'font-line-height-650',
    desc: '行高650',
    descEn: 'Line height 650',
    category: 'font',
    value: '26px',
  },
  {
    name: 'font-line-height-700',
    desc: '行高700',
    descEn: 'Line height 700',
    category: 'font',
    value: '28px',
  },
  {
    name: 'font-h1',
    desc: '页容器一级标题',
    descEn: 'Page heading 1',
    category: 'font',
    value: '500 20px/28px fontFamily',
  },
  {
    name: 'font-h2',
    desc: '页容器二级标题、抽屉弹窗标题',
    descEn: 'Page heading 2, drawer title',
    category: 'font',
    value: '500 18px/26px fontFamily',
  },
  {
    name: 'font-h3',
    desc: '卡片标题、表单一级分组标题',
    descEn: 'Card title, form group 1',
    category: 'font',
    value: '500 16px/24px fontFamily',
  },
  {
    name: 'font-h4',
    desc: '表单二级分组标题',
    descEn: 'Form group 2',
    category: 'font',
    value: '500 13px/20px fontFamily',
  },
  {
    name: 'font-body1',
    desc: '常规正文',
    descEn: 'Body text',
    category: 'font',
    value: '400 13px/20px fontFamily',
  },
  {
    name: 'font-body2',
    desc: '表格文本',
    descEn: 'Table text',
    category: 'font',
    value: '400 12px/20px fontFamily',
  },
  {
    name: 'font-caption',
    desc: '描述',
    descEn: 'Caption',
    category: 'font',
    value: '400 12px/20px fontFamily',
  },

  // ==================== 阴影 Token ====================
  {
    name: 'shadow-1-top',
    desc: '顶部阴影',
    descEn: 'Top shadow',
    category: 'shadow',
    value: '0px -1px 2px 0px hsla(219, 50%, 15%, 0.1)',
  },
  {
    name: 'shadow-1-bottom',
    desc: '底部阴影',
    descEn: 'Bottom shadow',
    category: 'shadow',
    value: '0px 1px 2px 0px hsla(219, 50%, 15%, 0.1)',
  },
  {
    name: 'shadow-1-left',
    desc: '左侧阴影',
    descEn: 'Left shadow',
    category: 'shadow',
    value: '-1px 0px 2px 0px hsla(219, 50%, 15%, 0.1)',
  },
  {
    name: 'shadow-1-right',
    desc: '右侧阴影',
    descEn: 'Right shadow',
    category: 'shadow',
    value: '1px 0px 2px 0px hsla(219, 50%, 15%, 0.1)',
  },
  {
    name: 'shadow-2',
    desc: '二级阴影',
    descEn: 'Secondary shadow',
    category: 'shadow',
    token: 'boxShadowSecondary',
  },

  // ==================== 圆角 Token ====================
  {
    name: 'radius-sm',
    desc: '小圆角',
    descEn: 'Small radius',
    category: 'radius',
    token: 'borderRadius',
  },
  {
    name: 'radius-md',
    desc: '中圆角',
    descEn: 'Medium radius',
    category: 'radius',
    token: 'borderRadiusMD',
  },
  {
    name: 'radius-lg',
    desc: '大圆角',
    descEn: 'Large radius',
    category: 'radius',
    token: 'borderRadiusLG',
  },

  // ==================== 间距 Token ====================
  { name: 'space-0', desc: '间距 0', descEn: 'Space 0', category: 'space', value: '0px' },
  { name: 'space-50', desc: '间距 50', descEn: 'Space 50', category: 'space', value: '2px' },
  {
    name: 'space-100',
    desc: '间距 100',
    descEn: 'Space 100',
    category: 'space',
    token: 'paddingXXS',
  },
  { name: 'space-150', desc: '间距 150', descEn: 'Space 150', category: 'space', value: '6px' },
  {
    name: 'space-200',
    desc: '间距 200',
    descEn: 'Space 200',
    category: 'space',
    token: 'paddingXS',
  },
  {
    name: 'space-300',
    desc: '间距 300',
    descEn: 'Space 300',
    category: 'space',
    token: 'paddingSM',
  },
  { name: 'space-400', desc: '间距400', descEn: 'Space 400', category: 'space', token: 'padding' },
  {
    name: 'space-500',
    desc: '间距 500',
    descEn: 'Space 500',
    category: 'space',
    token: 'paddingMD',
  },
  {
    name: 'space-600',
    desc: '间距 600',
    descEn: 'Space 600',
    category: 'space',
    token: 'paddingLG',
  },
  {
    name: 'space-800',
    desc: '间距 800',
    descEn: 'Space 800',
    category: 'space',
    token: 'paddingXL',
  },

  // ==================== 组件 Token ====================
  // 导航 Navigation
  {
    name: 'navi-color-bg',
    desc: '导航背景色',
    descEn: 'Navigation bg',
    category: 'component',
    token: 'colorNaviBg',
  },
  {
    name: 'navi-color-bg-hover',
    desc: '导航悬停背景色',
    descEn: 'Navigation hover bg',
    category: 'component',
    token: 'colorNaviBgHover',
  },
  {
    name: 'navi-color-bg-focus',
    desc: '导航聚焦背景色',
    descEn: 'Navigation focus bg',
    category: 'component',
    token: 'colorNaviBgHover',
  },

  // 按钮 Button
  {
    name: 'btn-color-primary-bg',
    desc: '主按钮背景色',
    descEn: 'Primary button bg',
    category: 'component',
    token: 'blue4',
  },
  {
    name: 'btn-color-primary-bg-hover',
    desc: '主按钮悬停背景色',
    descEn: 'Primary button hover bg',
    category: 'component',
    token: 'blue5',
  },
  {
    name: 'btn-color-primary-bg-disabled',
    desc: '主按钮禁用背景色',
    descEn: 'Primary button disabled bg',
    category: 'component',
    token: 'blue3',
  },
  {
    name: 'btn-color-primary-text',
    desc: '主按钮文本色',
    descEn: 'Primary button text',
    category: 'component',
    token: 'white',
  },
  {
    name: 'btn-color-primary-icon',
    desc: '主按钮图标色',
    descEn: 'Primary button icon',
    category: 'component',
    token: 'white',
  },
  {
    name: 'btn-color-secondary-border',
    desc: '次按钮边框色',
    descEn: 'Secondary button border',
    category: 'component',
    token: 'blue4',
  },
  {
    name: 'btn-color-secondary-text',
    desc: '次按钮文本色',
    descEn: 'Secondary button text',
    category: 'component',
    token: 'blue4',
  },
  {
    name: 'btn-color-secondary-icon',
    desc: '次按钮图标色',
    descEn: 'Secondary button icon',
    category: 'component',
    token: 'blue4',
  },
  {
    name: 'btn-color-danger-border',
    desc: '危险按钮边框色',
    descEn: 'Danger button border',
    category: 'component',
    token: 'red4',
  },
  {
    name: 'btn-color-danger-text',
    desc: '危险按钮文本色',
    descEn: 'Danger button text',
    category: 'component',
    token: 'red4',
  },

  // 进度条 Progress
  {
    name: 'progress-color-bg-default',
    desc: '进度条默认背景色',
    descEn: 'Progress default bg',
    category: 'component',
    token: 'gray4',
  },
  {
    name: 'progress-color-bg-loading',
    desc: '进度条加载背景色',
    descEn: 'Progress loading bg',
    category: 'component',
    token: 'blue4',
  },
  {
    name: 'progress-color-bg-success',
    desc: '进度条成功背景色',
    descEn: 'Progress success bg',
    category: 'component',
    token: 'green4',
  },
  {
    name: 'progress-color-bg-error',
    desc: '进度条错误背景色',
    descEn: 'Progress error bg',
    category: 'component',
    token: 'red4',
  },

  // 开关 Switch
  {
    name: 'switch-color-bg-default',
    desc: '开关默认背景色',
    descEn: 'Switch default bg',
    category: 'component',
    token: 'gray7',
  },
  {
    name: 'switch-color-bg-disabled',
    desc: '开关禁用背景色',
    descEn: 'Switch disabled bg',
    category: 'component',
    token: 'gray4',
  },
  {
    name: 'switch-color-bg-active',
    desc: '开关激活背景色',
    descEn: 'Switch active bg',
    category: 'component',
    token: 'blue4',
  },
  {
    name: 'switch-color-bg-disabled-selected',
    desc: '开关禁用选中背景色',
    descEn: 'Switch disabled selected bg',
    category: 'component',
    token: 'gray5',
  },
];

export default obTokenMeta;
