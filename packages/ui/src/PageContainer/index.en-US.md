---
title: PageContainer
nav:
  title: Biz Components
  path: /biz-components
---

- 🔥 Fully inherits pro-components [PageContainer](https://procomponents.ant.design/components/page-container) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design.
- 📢 `footerToolBarProps.portalDom` is disabled by default; footer toolbar renders to parent instead of `body`.
- 🆕 `header.reload` for page refresh.
- 🆕 `header.document` for document link.
- 🆕 Built-in `header.itemRender` supports `hashHistory` and `browserHistory`; requires `react-router`. See [docs](https://ant.design/components/breadcrumb-cn#%E5%92%8C-browserhistory-%E9%85%8D%E5%90%88).

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" iframe="600" title="Basic" description="Includes title, actions, content, footer."></code>
<code src="./demo/onBack.tsx" iframe="600" title="Back"></code>
<code src="./demo/reload.tsx" iframe="600" title="Page refresh"></code>
<code src="./demo/document.tsx" iframe="600" title="Document link" description="Supports string link, click callback, and ReactNode."></code>
<code src="./demo/complete.tsx" iframe="600" title="Complete" description="Breadcrumb, back, reload, scroll support."></code>
<code src="./demo/with-tabs.tsx" iframe="600" title="With Tabs"></code>
<code src="./demo/header-less.tsx" iframe="600" title="Without PageHeader" description="Empty header."></code>
<code src="./demo/empty.tsx" title="Empty page"></code>
<code src="./demo/title.tsx" title="title prop" description="Style as expected." debug></code>

## Usage with Router

PageContainer's breadcrumb navigation relies on routing. Inject `navigate` via ConfigProvider.

- For `umi v4`:

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

- For `umi v3`:

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

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| header.reload | Page refresh | boolean \| [IconComponentProps](https://ant.design/components/icon-cn#api) \| ReactNode | - | - |
| header.document | Document link: string, click handler, or ReactNode | string \| MouseEventHandler\<HTMLAnchorElement\> \| ReactNode | - | - |

- More API: https://procomponents.ant.design/components/page-container
