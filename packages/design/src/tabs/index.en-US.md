---
title: Tabs
nav:
  title: General
  path: /components
markdown: |
  For displaying content at the same level, enabling quick switching within the same page framework.

  ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jEzrQ5xuvC4AAAAAAAAAAAAADv3-AQBr/original)
---

## Component Description

- 🔥 Fully inherits antd [Tabs](https://ant.design/components/tabs-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles (tab width, etc.), aligned with OceanBase Design specification.
- 🆕 Tabs adds `divider` prop for divider.
- 🆕 `items` and `TabPane` add `tag` prop for tag after tab.
- 🆕 `items` and `TabPane` add `divider` prop for tab as divider.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/extra.tsx" title="Extra Content" description="Extra content on the right"></code>
<code src="./demo/disabled.tsx" title="Disabled"></code>
<code src="./demo/icon.tsx" title="With Icon"></code>
<code src="./demo/size.tsx" title="Size"></code>
<code src="./demo/divider.tsx" title="Divider" description="No divider by default; set via `divider` prop"></code>
<code src="./demo/position.tsx" title="Position"></code>
<code src="./demo/slide.tsx" title="Slide"></code>
<code src="./demo/tab-divider.tsx" title="Tab Divider"></code>
<code src="./demo/badge.tsx" title="With Badge" description="Show badge"></code>
<code src="./demo/tab-pane.tsx" title="TabPane Syntax (Not Recommended)" description="Deprecated API; see antd [docs](https://4x.ant.design/components/tabs-cn/#4.23.0-%E7%94%A8%E6%B3%95%E5%8D%87%E7%BA%A7)."></code>

## API

| Parameter | Description | Type    | Default | Version |
| :-------- | :---------- | :------ | :------ | :------ |
| divider   | Divider     | boolean | -       | -       |

### items

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| badge | Badge after tab | ReactNode \| [BadgeProps](https://ant.design/components/badge-cn#badge) | - | - |
| tag <Badge type="warning">deprecated</Badge> | Tag after tab; deprecated, use `badge` instead | ReactNode | - | - |
| divider | Tab as divider | boolean | - | - |

- More API see antd Tabs docs: https://ant.design/components/tabs-cn
