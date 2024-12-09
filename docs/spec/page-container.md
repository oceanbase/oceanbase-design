---
group: Layout 布局
order: 2
title: PageContainer 页容器
---

页容器是框架中承载内容的唯一容器，与导航构成应用整体框架。

## 设计方法

页容器内包含页头、页面内容区、页脚工具栏三大模块；页面内容区支持通过布局组件进行页面内容的排布。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/mO61QbOcU_kAAAAAAAAAAAAADv3-AQBr/original)

## 页头

页头位于页面顶部，可承载页面级导航、页面概览信息和页面级操作。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/bgnxS5QoufkAAAAAAAAAAAAADv3-AQBr/original)

1. 面包屑
2. 页标题
3. 页签
4. 操作区

### 面包屑

存在3级及以上的层级结构，并需要告知用户信息层级关系时可使用面包屑导航。L1 级别和L2级别默认不显示面包屑，建议下钻3级及以上时显示面包屑，同一产品内的面包屑显示规则需保持一致。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Rl5kSZqDL78AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>存在较多3级以上信息层级时使用面包屑</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/1XkRS41yhVQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Caution></Caution>信息层级较浅时不推荐使用</div>
  </div>
</div>

### 页标题

可承载页面标题、页面级的快捷操作及使用引导信息，如页面刷新、标题编辑、状态等。在页面下钻场景中，可在标题前增加 返回 箭头，承载导航功能。除编辑器等对空间诉求强、希望获得沉浸式编辑体验的特殊场景外，其它页面均需存在页标题。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-FbfRoXHa7cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>保留页标题，确保导航信息展示的清晰性</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mdpdSJFZKi0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>非必要不要隐藏页标题区</div>
  </div>
</div>

### 页签

存在多个子页面，且子页面存在需通过卡片形态区分不同信息区块时，可使用子页面页签。如各页签均为单卡片信息区块时，从提升信息内容整体性角度考虑，不建议使用页面级页签，建议使用区块级页签。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VujlQbz8lVsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>各页签均为单卡片信息区块时使用内容区块级Tab</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/QtvqTb_p-TEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Caution></Caution>不推荐使用页面级页签</div>
  </div>
</div>

### 操作区

可承载数据筛选和页面级的操作，根据所属关系将操作区置于页面级操作区或子页面操作区中，两者不可同时存在。页头区需使用Large尺寸组件。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ERzITJRm8_QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>页头同时只存在1个操作区</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/M280SpDCkAsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>避免同时存在页面级操作和子页面级操作区</div>
  </div>
</div>

## 页面内容区

内容区是页面的核心，需通过布局组件对内容进行排布、通过卡片呈现内容。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hQqPRKEUBoUAAAAAAAAAAAAADv3-AQBr/original)

1. 内容容器
2. 间距
3. 卡片

### 间距

内容距离页头需保留16px间距，内容卡片与内容区容器右、下、左间距均为24px，内容卡片之间间距为16px。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/F0F4RaJe9PIAAAAAAAAAAAAADv3-AQBr/original)

### 卡片投影

内容卡片需使用投影，以增强与内容区容器的空间距离，**默认使用一级投影样式**。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/gwSjR4EccGYAAAAAAAAAAAAADv3-AQBr/original)

## 页脚工具栏

工具栏主要承载页面级操作和信息汇总内容，适用于对当前页面执行全局性操作，且希望操作位置符合用户从上至下的行为动线的场景。页脚工具栏紧贴视窗底部，采用二级投影，距内容区容器左右间距为24px。文本信息描述区可根据实际业务场景灵活配置。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/xlwfSbv3w24AAAAAAAAAAAAADv3-AQBr/original)
