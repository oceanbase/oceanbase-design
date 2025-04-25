---
title: ContentWithQuestion 文字旁提示
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>
<code src="./demo/custom.tsx" title="自定义图标"></code>
<code src="./demo/prefix.tsx" title="图标前置"></code>

## API

| 参数       | 说明           | 类型                       | 默认值 | 版本 |
| :--------- | :------------- | :------------------------- | :----- | :--- |
| content    | 文字内容       | string                     | -      | -    |
| tooltip    | Tooltip 配置   | TooltipProps               | -      | -    |
| prefixIcon | 文字前图标配置 | React.ReactNode \| boolean | null   | -    |
| suffixIcon | 文字后图标配置 | React.ReactNode \| boolean | true   | -    |
