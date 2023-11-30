---
title: Empty 空状态
nav:
  title: 基础组件
  path: /components
---

- 🔥 完全兼容 antd [Empty](https://ant.design/components/Empty-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。比如当内容高度大于等于抽屉高度时，页脚会置底展示；当内容高度小于抽屉高度时，`footer` 会跟随内容展示。
- 🆕 新增 `footer` 属性，用于设置抽屉的底部内容，默认为 `取消` 和 `确定` 按钮。

## 代码演示

<code src="./demo/basic.tsx" title="暂无数据" description="暂无数据"></code> <code src="./demo/empty-noProblem.tsx" title="暂无问题" description="暂无问题"></code> <code src="./demo/customize-icon-desc.tsx" title="暂无问题" description="暂无问题"></code>

## API

| 参数      | 说明             | 类型     | 默认值      | 版本   |
| :-------- | :--------------- | :------- | :---------- | :----- | --- |
| imageType | 默认的 icon 类型 | 'noData' | 'noProblem' | noData | -   |

- 更多 API 详见 antd Empty 文档: https://ant.design/components/Empty-cn
