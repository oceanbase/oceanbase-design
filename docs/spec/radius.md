---
group: Design Foundation
title: Radius
order: 7
---

Base corner sizes applied to various component types.

## Design Principles

Reflecting OBUI's vitality and care, every component in the system includes rounded corners to reduce a rigid, serious feel and convey a lively, caring tone.

### Design Approach

Using 4px as the base, corner sizes scale by ±2, supporting 4px, 6px, and 8px to suit different components on the page.

![截屏2024-08-08 17.27.25.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/sSpESLsilaIAAAAAAAAAAAAADv3-AQBr/original)

## Element Anatomy

A component's occupied space determines its corner radius. Larger components that contain other components may have larger corner radii.

| Radius Size   | Use Case                                                    |
| ------------- | ----------------------------------------------------------- |
| 4px           | Small components such as Tag, Filter                        |
| 6px           | Medium components such as Input, Select                     |
| 8px (default) | Large components such as page container, Card, Table, Modal |

### 4px

For components with height < 24px.

![截屏2024-08-08 17.55.57.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ddauT4CCOXcAAAAAAAAAAAAADv3-AQBr/original)

### 6px

For components with height between 24px < x < 32px.

![截屏2024-08-08 17.53.46.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/2qXzSK_weEYAAAAAAAAAAAAADv3-AQBr/original)

### 8px

For components with height > 32px.

![截屏2024-08-08 17.58.27.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/uwqlT5YswogAAAAAAAAAAAAADv3-AQBr/original)

## Combination Scenarios

When different components are used together, various arrangements and nesting patterns emerge.

### Nesting

Use the base component's radius as the outermost radius, then decrease across the 8px, 6px, and 4px levels to configure appropriate corner sizes.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/54uaRYsDamQAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5h78RqXGhFAAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

### Alignment

When the same component is repeated or multiple components align at the same level, keep corner radii consistent.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/p5tPSZFwaBIAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/nXMFQJ3-uwMAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>
