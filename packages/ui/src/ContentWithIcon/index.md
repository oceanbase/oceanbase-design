---
title: ContentWithIcon 文字旁提示
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

### 基本使用

组件默认情况图标在文字后，如不需要自定义图标，则不需要传 suffixIcon 
<code src="./demo/basic.tsx" ></code>


### 图标在文字前

图标若在文字前，需把 suffixIcon 置为 null，prefixIcon 使用默认图标的话传 true <code src="./demo/prefix.tsx" ></code>

### 提示文案描述带有超链接

组件默认情况是使用 toooltip 进行提示，如不需要，则不需要传 tooltipWithLink <code src="./demo/tipWithLink.tsx" ></code>

### info 类提示

提示可平铺展示 textHidden 传 false 直接展示，默认为 true 隐藏展示，只适用于 iconType 等于 info 类型，支持自定义 icon 颜色 <code src="./demo/customIcon.tsx" ></code>

### 感叹号类提示

exclamation 类型，支持自定义 icon 颜色 <code src="./demo/exclamation.tsx" ></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |  |
| :-- | :-- | :-- | :-- | :-- | --- |
| content | 文字内容 | String | - | - |
| tooltip | Tooltip 配置 | TooltipProps | - | - |
| prefixIcon | 文字前图标配置 | IconProps | null | - |
| suffixIcon | 文字后图标配置 | IconProps | { type: 'question-circle', spin: false, pointable: true, style: { marginRight: 4 } } | - |
| tooltipWithLink | 提示文本带有超链接 | PopoverProps | false | - |
| textHidden | 提示文本展示方式 | Boolean | true | - |
| size | 文字内容与 icon 的大小 | Number | 14 | - |
| infoColor | info 图标颜色 | String | 333333 | - |
| exclamationColor | exclamation 图标颜色 | String | FAAD14 | - |
| className | 组件 className | String | - | - |
| style | 组件 style | React.CSSProperties | - | - |