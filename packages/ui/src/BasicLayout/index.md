---
title: BasicLayout 导航和布局
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/menu-over-length.tsx" title="菜单项内容超长" description="自动省略 + tooltip"></code>

<code src="./demo/banner.tsx" title="带顶部 banner"></code>

<code src="./demo/topHeader-icon.tsx" title="顶部导航 icon 模式"></code>

<code src="./demo/topHeader-title.tsx" title="带顶部标题"></code>

<code src="./demo/subSideMenu.tsx" title="带子侧边栏的二级导航"></code>

<code src="./demo/no-sider-and-custom-header.tsx" title="无侧边导航 & 自定义顶部导航"></code>

<code src="./demo/welcome.tsx" title="和欢迎页搭配使用"></code>

## 与路由搭配使用

### 选中菜单和路由联动

- 为了实现选中菜单和当前路由之间的联动，需要设置 BasicLayout 的 `location` 属性，`umi` 的示例如下:

```tsx
import { useLocation } from 'umi';
const location = useLocation();

<BasicLayout location={location} />;
```

### 路由跳转

由于 BasicLayout 左侧和顶部导航的跳转依赖路由能力，需要通过 ConfigProvider 全局注入 `navigate` 函数才会生效。

- 对于 `umi v4`:

```tsx | pure
import { ConfigProvider } from '@oceanbase/design';
import { BasicLayout } from '@oceanbase/ui';
// for umi v4 with react-router-dom v6
import { useNavigate } from 'umi';

const App = () => {
  const navigate = useNavigate();
  return (
    <ConfigProvider navigate={navigate}>
      <BasicLayout />
    </ConfigProvider>
  );
};
```

- 对于 `umi v3`:

```tsx | pure
import { ConfigProvider } from '@oceanbase/design';
import { BasicLayout } from '@oceanbase/ui';
import { useHistory } from 'react-router-dom';
// for umi v3 with react-router-dom v5
import { useHistory } from 'umi';
// or use `history` directly
// import { history } from 'umi';

const App = () => {
  const history = useHistory();
  return (
    <ConfigProvider navigate={history.push}>
      <BasicLayout />
    </ConfigProvider>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| location | location 对象，用于设置选中菜单和当前路由之间的联动 | Location | - | - |
| banner | 顶部公告 | ReactNode | - |  |
| iconUrl | 产品 icon 的 URL 地址，用于设置子侧边栏的 icon | string | - | - |
| logoUrl | 产品 logo 的 URL 地址，用于 `关于` 弹窗中的展示，通常与登录页的 logo 一致 | string | - | - |
| simpleLogoUrl | 产品简版 logo 的 URL 地址，用于左侧菜单导航的展示 | string | - | - |
| topHeader | 顶部导航栏内容 | [TopHeader](basic-layout#topheader) | - | - |
| menus | 侧边栏导航的菜单项列表，为空则不展示 | [MenuItem](basic-layout#menuitem)[] | - | - |
| defaultCollapsed | 侧边栏导航是否默认收起 | boolean | false | - |
| defaultSelectedKeys | 默认选中的菜单 keys | string[] | [] | - |
| defaultOpenKeys | 默认展开的菜单 keys | string[] | [] | - |
| sideHeader | 左侧导航栏头部内容 | ReactNode | - | - |
| subSideMenus | 子侧边栏导航的菜单项列表，为空则不展示 | [MenuItem](basic-layout#menuitem)[] | - | - |
| subSideMenuProps | 子侧边栏导航 Menu 属性 | [MenuProps](https://ant.design/components/menu-cn#menu) | - | - |

### MenuItem

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| link | 菜单对应的路径或链接 | string | - | - |
| title | 菜单标题 | string | - | - |
| icon | 菜单 icon | ReactNode | - | - |
| selectedIcon | 菜单选中态 icon | ReactNode | - | - |
| accessible | 菜单项是否渲染，常用于权限控制和条件渲染的场景 | boolean | true | - |
| divider | 是否带分隔线 | boolean | false | - |
| children | 子菜单列表，支持多层嵌套 | [MenuItem](basic-layout#menuitem)[] | - | - |

### TopHeader

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| showLabel | 顶部导航是否展开, true 为展开 形态：Icon + 文案；fales 为关闭 形态：Icon | boolean | true | - |
| title | 顶部标题 | ReactNode | - | - |
| welcomePath | 欢迎页对应的 path 路径，需要与路由配置一致，为空则不展示欢迎页菜单 | string | - | - |
| docsPath | 帮助文档首页对应的 path 路径，为空则不展示文档菜单 | string | - | - |
| pdfPath | 帮助文档下载对应的 path 路径，默认优先使用路径中的文件名 | string | - | - |
| showLocale | 是否展示国际化切换入口 | boolean | false | - |
| username | 用户名 | string | - | - |
| userMenu | 用户下拉菜单 | ReactNode | - | - |
| appData | 产品信息 | [AppData](basic-layout#appdata) | - | - |

### AppData

| 参数        | 说明               | 类型   | 默认值 | 版本 |
| :---------- | :----------------- | :----- | :----- | :--- |
| shortName   | 产品简称，比如 OCP | string | -      | -    |
| version     | 产品版本           | string | -      | -    |
| releaseTime | 产品发布时间       | string | -      | -    |
