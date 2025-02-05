---
group: Design Foundation 设计基础
title: Radius 圆角
order: 7
---

应用于各类型组件的基准角尺寸。

## 设计原则

响应OBUI活力，关怀的关键词，系统中每个组件设计都包含圆角，降低系统中生硬，严肃的氛围，传达活力，关怀的调性。

### 设计方法

以4px为基准，通过+2放大或缩小圆角大小，支持4px,6px,8px三种圆角尺寸，适应页面中不同组件。

![截屏2024-08-08 17.27.25.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/sSpESLsilaIAAAAAAAAAAAAADv3-AQBr/original)

## 元素剖析

组件的占用空间决定了圆角的半径值，包含其他组件的较大组件可以具有更大的角半径。

| 圆角大小     | 使用场景                             |
| ------------ | ------------------------------------ |
| 4px          | 小组件例如标签，筛选器               |
| 6px          | 中等组件例如输入框，选择框           |
| 8px （默认） | 大型组件例如页容器，卡片，表格，弹窗 |

### 4px

适用于高度 < 24px 的组件。

![截屏2024-08-08 17.55.57.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ddauT4CCOXcAAAAAAAAAAAAADv3-AQBr/original)

### 6px

适用于高度处于24px < x < 32px的组件。

![截屏2024-08-08 17.53.46.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/2qXzSK_weEYAAAAAAAAAAAAADv3-AQBr/original)

### 8px

适用于高度 > 32px的组件。

![截屏2024-08-08 17.58.27.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/uwqlT5YswogAAAAAAAAAAAAADv3-AQBr/original)

## 组合场景

当不同组件同时使用时，会产生多种排列组合及嵌套方式。

### 嵌套

以基准组件圆角作为最外部圆角，在8px, 6px, 4px三个层级中递减，配置合适的圆角尺寸。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/54uaRYsDamQAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5h78RqXGhFAAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

### 对齐

当同组件重复使用时或多组件对齐于同一层级时，需保持圆角一致。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/p5tPSZFwaBIAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/nXMFQJ3-uwMAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

#
