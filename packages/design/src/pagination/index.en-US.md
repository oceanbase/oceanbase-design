---
title: Pagination
nav:
  title: General
  path: /components
---

- 🔥 Fully inherits antd [Pagination](https://ant.design/components/pagination-cn) capabilities and API, seamless migration.
- 💄 Custom theme and styles, aligned with OceanBase Design specification.
- 🔢 Shows the total text by default (following the locale, e.g. "50 in Total"); hide it with `showTotal={false}`.

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/total.tsx" title="Total" description="The default total text is shown when `showTotal` is omitted; pass a function to customize it, or `false` to hide it."></code>
<code src="./demo/small.tsx" title="Small Size"></code>
<code src="./demo/changer.tsx" title="Page Size Changer"></code>

## API

- See antd Pagination docs: https://ant.design/components/pagination-cn
- `showTotal`: shows the default total text when omitted, accepts a function to customize it, or `false` to hide it. It can also be set globally via `ConfigProvider`'s `pagination.showTotal`.
