---
title: PageContainer 页容器
nav:
  title: 业务组件
  path: /biz-components
---

- 🔥 完全兼容 pro-components [PageContainer](https://procomponents.ant.design/components/page-container) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 🆕 新增 `header.reload` 属性，用于刷新整个页面。
- 🆕 内置 `header.itemRender`，默认支持 `hashHistory` 和 `browserHistory`，但要求项目安装 `react-router`。详见 [说明](https://ant.design/components/breadcrumb-cn#%E5%92%8C-browserhistory-%E9%85%8D%E5%90%88)。

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/complete.tsx" iframe="600" title="完整使用" description="支持 reload 页面刷新" ></code>

<code src="./demo/header-less.tsx" iframe="600" title="无 PageHeader" description="头部内容为空"></code>

<code src="./demo/empty.tsx" title="空页面"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| header.reload | 配置页面刷新 | boolean \| [IconComponentProps](https://ant.design/components/icon-cn#api) \| ReactNode | - | - |

- 更多 API 详见 pro-components PageContainer 文档: https://procomponents.ant.design/components/page-container
