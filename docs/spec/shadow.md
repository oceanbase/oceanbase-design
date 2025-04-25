---
group: Design Foundation 设计基础
title: Shadow 投影
order: 8
---

阴影提供关于深度、运动方向和表面边缘的线索，一个表面的阴影是由它的高度和与其他表面的关系决定的。

## 设计原则

### 设计理念

利用阴影显示了模块表面的边缘和它在背景下的高度，为不重叠的表面之间提供可感知的表面高度差异，传达科技，年轻的品牌理念。

![截屏2024-08-08 19.46.05.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/dWAoSY69vuMAAAAAAAAAAAAADv3-AQBr/original)

### 设计方法

阴影的大小，柔和度，扩散度体现在两个表面之间的距离上。我们定义物体与表面之间的距离高度（0dp,4dp,18dp），将阴影分为三层, 结合光源的方向，模糊度，与扩展，呈现自然的光影效果。

![截屏2024-08-08 19.32.25.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/zk4RQa0wXNEAAAAAAAAAAAAADv3-AQBr/original)

## 元素剖析

![截屏2024-08-09 10.21.56.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/iRHFToi6bMMAAAAAAAAAAAAADv3-AQBr/original)

1. 颜色（Color）
2. 方向（X，Y）
3. 模糊度（Blur）
4. 扩展值（Spread）

### 颜色

不同组件均选用同一颜色\[#132D5E]作为投影色, 通过三层不同的rgba、方向、模糊度、扩展值，实现自然，柔和的效果。

![截屏2024-08-09 10.47.41.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/T4B3QJ5TPzQAAAAAAAAAAAAADv3-AQBr/original)

### 方向

除默认居中外，投影还有朝上、朝下、朝左、朝右四个方向，以适用复杂模块组件中的信息层级划分。

<div style="display: flex">
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/JPSCT4vYxl4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">居中</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aBgFRacu2ZMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">朝上</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pyyPT6C5wUIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">朝下</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/h9qbQIBukrwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">朝左</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KmpXQIzmuoMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">朝右</div>
  </div>
</div>

## 投影类型

OBUI共应用两类投影，分别为一级投影、二级投影。

| 名称 | 投影高度 | 主光源 | 环境光 1 | 环境光 2 |
| --- | --- | --- | --- | --- |
| 一级投影 | 4dp | 0PX 1PX 2PX 0PX hsla(219,67,22,0.03) | 0PX 1PX 6PX -1PX hsla(219,67,22,0.02) | 0PX 2PX 4PX 0PX hsla(219,67,22,0.02) |
| 二级投影 | 18dp | 0PX 6PX 16PX 0PX hsla(219,67,22,0.08) | 0PX 3PX 6PX -4PX hsla(219,67,22,0.12) | 0PX 9PX 28PX 8PX hsla(219,67,22,0.05) |

### 一级投影

页面级模块，卡片容器均在灰色背景上使用一级投影。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Jcl8SZYmz-0AAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/GtsXRLYVruYAAAAAAAAAAAAADv3-AQBr/original" style="max-height: 97%" />
  </div>
</div>

### 二级投影

一级模块上之悬浮气泡，引导卡片，下拉菜单等均使用二级投影。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/GGKTTbor8VQAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/fn9qT7pjglAAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

#
