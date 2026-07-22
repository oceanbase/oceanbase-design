---
title: BasicLayout
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/menu-over-length.tsx" title="Menu item overflow" description="Auto ellipsis + tooltip."></code>
<code src="./demo/banner.tsx" title="With top banner"></code>
<code src="./demo/topHeader-icon.tsx" title="Top header icon mode"></code>
<code src="./demo/topHeader-title.tsx" title="With top title"></code>
<code src="./demo/subSideMenu.tsx" title="Secondary navigation with sub sidebar"></code>
<code src="./demo/no-sider-and-custom-header.tsx" title="No sidebar & custom header"></code>
<code src="./demo/welcome.tsx" title="With Welcome page"></code>

## Usage with Router

### Sync selected menu with route

To sync the selected menu with the current route, set the `location` prop on BasicLayout. Example with `umi`:

```tsx
import { useLocation } from 'umi';
const location = useLocation();

<BasicLayout location={location} />;
```

### Route navigation

BasicLayout's left and top navigation rely on routing. Inject `navigate` via ConfigProvider for navigation to work.

- For `umi v4`:

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

- For `umi v3`:

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

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| location | Location object for syncing selected menu with route | Location | - | - |
| banner | Top announcement | ReactNode | - |  |
| iconUrl | Product icon URL for sub sidebar icon | string | - | - |
| logoUrl | Product logo URL for About dialog, usually same as login page | string | - | - |
| simpleLogoUrl | Simplified logo URL for left menu | string | - | - |
| topHeader | Top header content | [TopHeader](basic-layout#topheader) | - | - |
| menus | Sidebar menu items, empty to hide | [MenuItem](basic-layout#menuitem)[] | - | - |
| defaultCollapsed | Whether sidebar is collapsed by default | boolean | false | - |
| defaultSelectedKeys | Default selected menu keys | string[] | [] | - |
| defaultOpenKeys | Default open menu keys | string[] | [] | - |
| sideHeader | Left sidebar header content | ReactNode | - | - |
| subSideMenus | Sub sidebar menu items, empty to hide | [MenuItem](basic-layout#menuitem)[] | - | - |
| subSideMenuProps | Sub sidebar Menu props | [MenuProps](https://ant.design/components/menu-cn#menu) | - | - |

### MenuItem

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| link | Path or link for menu item | string | - | - |
| title | Menu title | string | - | - |
| icon | Menu icon | ReactNode | - | - |
| selectedIcon | Icon when selected | ReactNode | - | - |
| accessible | Whether to render menu item, for permission control | boolean | true | - |
| divider | Whether to show divider | boolean | false | - |
| children | Nested sub menus | [MenuItem](basic-layout#menuitem)[] | - | - |

### TopHeader

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| showLabel | Whether top header is expanded: true = Icon + text, false = Icon only | boolean | true | - |
| title | Top title | ReactNode | - | - |
| welcomePath | Welcome page path, must match route config | string | - | - |
| versionNoticePath | Version notice path | string | - | 0.4.12 |
| docsPath | Help docs home path | string | - | - |
| pdfPath | Help docs download path, uses filename from path by default | string | - | - |
| showLocale | Whether to show locale switcher | boolean | false | - |
| username | Username | string | - | - |
| userMenu | User dropdown menu | ReactNode | - | - |
| appData | Product info | [AppData](basic-layout#appdata) | - | - |

### AppData

| Property    | Description                  | Type   | Default | Version |
| :---------- | :--------------------------- | :----- | :------ | :------ |
| shortName   | Product short name, e.g. OCP | string | -       | -       |
| version     | Product version              | string | -       | -       |
| releaseTime | Product release time         | string | -       | -       |
