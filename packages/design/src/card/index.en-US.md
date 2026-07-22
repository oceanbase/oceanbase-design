---
title: Card
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Card](https://ant.design/components/card-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 🆕 New `subTitle` prop for subtitle.
- 🆕 New `document` prop for document link.
- 🆕 New `divided` prop to control divider visibility.
- 🆕 New `gray` prop for gray background mode.
- 🆕 `tabList` adds `tag` prop for tag after tab.
- 🆕 New `collapsible` prop for expandable/collapsible content area.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Typical Card" description="Includes title, content, and action area."></code>
<code src="./demo/no-divider.tsx" title="No Divider" description="Remove divider between header and content."></code>
<code src="./demo/subTitle.tsx" title="Subtitle" description="Set subtitle via `subTitle`."></code>
<code src="./demo/document.tsx" title="Document Link" description="Supports document link, event callback, and ReactNode."></code>
<code src="./demo/border-less.tsx" title="Borderless" description="With shadow, usually on gray background."></code>
<code src="./demo/collapsible.tsx" title="Collapsible Card" description="Content area can be expanded or collapsed."></code>
<code src="./demo/gray.tsx" title="Gray Background Mode" description="Gray background for distinguishing content areas."></code>
<code src="./demo/tabs.tsx" title="Card with Tabs" description="Tabs can have tag after tab."></code>
<code src="./demo/grid.tsx" title="Grid Inner Card"></code>
<code src="./demo/inner.tsx" title="Nested Card" description="Multi-level display with various inner card styles."></code>
<code src="./demo/with-form.tsx" title="With Form"></code>
<code src="../table/demo/card-table.tsx" title="With Table"></code>
<code src="./demo/config-provider.tsx" title="ConfigProvider" description="Debug internal ConfigProvider; trigger 2+ times to verify second modal displays correctly" debug></code>

## API

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| subTitle | Subtitle | ReactNode | - | - |
| document | Document link; supports string, click handler, or ReactNode | string \| React.MouseEventHandler\<HTMLAnchorElement\> \| ReactNode | - | - |
| divided | Whether to show divider | boolean | true | - |
| gray | Whether to use gray background mode | boolean | false | - |
| tabList | Tab title list | {key: string, tab: ReactNode, tag: ReactNode }[] | - | - |
| collapsible | Whether collapsible | boolean | - | - |
| defaultCollapsed | Whether collapsed by default | boolean | false | - |
| collapsed | Whether collapsed (controlled) | boolean | - | - |
| onCollapse | Callback when collapse state changes | (collapsed: boolean) => void | - | - |

- More API see antd Card docs: https://ant.design/components/card-cn
