---
title: ContentWithQuestion 文字旁提示
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本" description="组件默认情况图标在文字后，如不需要自定义图标，则不需要传 suffixIcon
"></code>

<code src="./demo/prefix.tsx" title="图标在文字前" description="图标若在文字前，需把 suffixIcon 置为 null，prefixIcon 使用默认图标的话传 true"></code>

## API

| 参数       | 说明           | 类型                       | 默认值 | 版本 |
| :--------- | :------------- | :------------------------- | :----- | :--- |
| content    | 文字内容       | string                     | -      | -    |
| tooltip    | Tooltip 配置   | TooltipProps               | -      | -    |
| prefixIcon | 文字前图标配置 | React.ReactNode \| boolean | null   | -    |
| suffixIcon | 文字后图标配置 | React.ReactNode \| boolean | true   | -    |
| className  | 组件 className | String                     | -      | -    |
| style      | 组件 style     | React.CSSProperties        | -      | -    |
