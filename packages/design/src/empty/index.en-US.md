---
title: Empty
nav:
  title: General
  path: /components
---

- 🔥 Fully compatible with antd [Empty](https://ant.design/components/Empty-cn) capabilities and API, seamless migration.
- 💄 Custom illustration, theme and styles, aligned with OceanBase Design specification.
- 📢 No longer distinguishes default and simple images; PRESENTED_IMAGE_DEFAULT and PRESENTED_IMAGE_SIMPLE are the same.
- ⭐️ New PRESENTED_IMAGE_COLORED built-in image for page and block-level empty states.
- ⭐️ New PRESENTED_IMAGE_DATABASE built-in image for database instance empty states.
- ⭐️ New PRESENTED_IMAGE_GUIDE built-in image for onboarding scenarios like feature activation.
- 🆕 New `title` prop for empty state title.
- 🆕 New `steps` prop for step hints.
- 🆕 New `layout` prop for empty state layout, default `vertical`.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Default" description="Simple display."></code>
<code src="./demo/complete.tsx" title="Complete Usage" description="Image is Empty.PRESENTED_IMAGE_COLORED, includes title, description and actions."></code>
<code src="./demo/complete-debug.tsx" title="Complete Usage Debug" description="Image is Empty.PRESENTED_IMAGE_COLORED, includes title, description and actions" debug></code>
<code src="./demo/tab-switch.tsx" title="Tab Switch" debug></code>
<code src="./demo/database.tsx" title="Database Instance Illustration" description="Image is Empty.PRESENTED_IMAGE_DATABASE."></code>
<code src="./demo/image.tsx" title="Custom Image" description="Set image URL or ReactNode."></code>
<code src="./demo/steps.tsx" title="Step Hints"></code>
<code src="./demo/over-length.tsx" title="Over-length Content" description="Max width 600px for description, 1000px for steps to avoid infinite stretch."></code>
<code src="./demo/horizontal.tsx" title="Horizontal Layout" description="Image is PRESENTED_IMAGE_GUIDE, for onboarding scenarios like feature activation."></code>
<code src="./demo/with-page-container.tsx" title="With Page Container"></code>
<code src="./demo/config-provider.tsx" title="Empty Style in ConfigProvider"></code>

## API

| Parameter | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| title | Title | React.ReactNode | - | - |
| steps | Step hints | [StepItem](https://ant-design.antgroup.com/components/steps-cn#stepitem)[] | - | - |
| layout | Layout | vertical \| horizontal | vertical | - |

- More API see antd Empty docs: https://ant.design/components/Empty-cn

## Built-in Images

- PRESENTED_IMAGE_DEFAULT and PRESENTED_IMAGE_SIMPLE

<p><div><img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*mC4VR4Cg0GYAAAAAAAAAAAAADmfOAQ/original" /></div></p>

- PRESENTED_IMAGE_COLORED

<p><div><img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*o6sCSpTYXgUAAAAAAAAAAAAADmfOAQ/original" /></div></p>

- PRESENTED_IMAGE_DATABASE

<p><div><img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*i5OYS7RTQLcAAAAAAAAAAAAADmfOAQ/original" /></div></p>

- PRESENTED_IMAGE_GUIDE

<p><div><img src="https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*DH4BTJUbkIUAAAAAAAAAAAAADmfOAQ/original" /></div></p>
