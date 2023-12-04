---
title: PageContainer 页容器
nav:
  title: 业务组件
  path: /biz-components
---

- 🔥 完全继承 pro-components [PageContainer](https://procomponents.ant.design/components/page-container) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 📢 默认关闭 `footerToolBarProps.portalDom`，即底部操作栏默认渲染到父元素，而不是 `body`。
- 🆕 新增 `header.reload` 属性，用于刷新整个页面。
- 🆕 内置 `header.itemRender`，默认支持 `hashHistory` 和 `browserHistory`，但要求项目安装 `react-router`。详见 [说明](https://ant.design/components/breadcrumb-cn#%E5%92%8C-browserhistory-%E9%85%8D%E5%90%88)。

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/complete.tsx" iframe="600" title="完整使用" description="支持 reload 页面刷新" ></code>

<code src="./demo/header-less.tsx" iframe="600" title="无 PageHeader" description="头部内容为空"></code>

<code src="./demo/empty.tsx" title="空页面"></code>

## 与路由搭配使用

由于 PageContainer 内置的面包屑导航跳转依赖路由能力，需要通过 ConfigProvider 全局注入 `navigate` 函数才会生效。

- 对于 `umi v4`:

```tsx | pure
import { ConfigProvider } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
// for umi v4 with react-router-dom v6
import { useNavigate } from 'umi';

const App = () => {
  const navigate = useNavigate();
  return (
    <ConfigProvider navigate={navigate}>
      <PageContainer />
    </ConfigProvider>
  );
};
```

- 对于 `umi v3`:

```tsx | pure
import { ConfigProvider } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
// for umi v3 with react-router-dom v5
import { useHistory } from 'umi';
// or use `history` directly
// import { history } from 'umi';

const App = () => {
  const history = useHistory();
  return (
    <ConfigProvider navigate={history.push}>
      <PageContainer />
    </ConfigProvider>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| header.reload | 配置页面刷新 | boolean \| [IconComponentProps](https://ant.design/components/icon-cn#api) \| ReactNode | - | - |

- 更多 API 详见 pro-components PageContainer 文档: https://procomponents.ant.design/components/page-container
