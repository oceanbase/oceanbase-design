---
group: Layout 布局
order: 1
title: Navigation 导航
---

导航是界面中的地图和路标，便于用户明确自己在系统中的位置，并能轻松找到所需功能。

## 设计原则

### 清晰

明确告知用户当前所在位置与提供的内容，让用户不会在复杂的导航结构中迷失。

### 高效

- 合理组织信息结构，避免过多的导航选项，提升用户查找效率。
- 导航标签贴合用户认知，让用户可快速理解。
- 提供便捷高效的导航操作路径，让用户3步之内可达。

### 可扩展

考虑未来发展并提供扩展空间，为用户提供稳定的使用体验。

## 导航剖析

导航由产品品牌标识、图标、文本标签等基础元素构成。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/p0rjSbCCRv4AAAAAAAAAAAAADv3-AQBr/original)

1. 产品品牌标识
2. 菜单项背景容器
3. 图标
4. 分隔线
5. 文本标签

### 图标

一级侧边导航图标为必要元素，二级及以上页面的侧边导航图标为可选元素，同一级导航图标风格需保持一致。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/o8v_T6FNihkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>合理控制同一功能组菜单数量</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wCzzSJ3_c0MAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>避免同级图标风格不一致</div>
  </div>
</div>

### 分隔线

用于分隔产品功能的不同逻辑分组，当功能存在多层级嵌套关系时，分隔线则代表功能的一级分组。同一组功能菜单项建议不超过7个，超出时建议对菜单项进一步分组，降低记忆成本，提升检索效率。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DOeESIUB-zMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>合理控制同一功能组菜单数量</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/UDh6Qrxxf_8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>避免同一功能组菜单项数量超过7个</div>
  </div>
</div>

### 文本标签

菜单文本标签应尽量简洁，避免使用冗长或复杂的词语，菜单文案应由1~2个词组成，菜单项间彼此互斥，差异越明显用户决策越容易。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/SW_SR6GjFNEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>精简的导航菜单文案</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/fIukQZotwSkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>导航菜单文案最多不可超过2个词</div>
  </div>
</div>

### 信息层级

信息层级组织深度上建议不超过3级，尽可能让用户3步抵达目标对象。对于层级深且较为重要或高频的操作，建议提供快捷入口，提升操作效率。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Bxr8Ro4RB4MAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>重要/高频功能提供快捷入口，提升可发现性和便捷性</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NPSxRIuigi0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>信息层级深导致功能可发现性低、操作路径过长</div>
  </div>
</div>

## 导航类型

### 顶部导航

位于页面顶部，可展示产品全局性标识信息，并提供全局性的实用工具、服务和快捷操作，如通知、帮助、语言切换、用户信息等。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/S21-Q6Xo4Y4AAAAAAAAAAAAADv3-AQBr/original)

### 侧边导航

侧边导航较顶部横向导航更灵活，易于向下扩展，且允许的文本标签长度较长，适合承载信息层级多、操作切换频率高的管理操作。根据使用形态可分为图标加文本标签式导航、文本标签式导航、图标式导航三种。

侧边导航菜单项数量不限，可配合滚动条使用。菜单项按功能属性可划分成不同的功能组，不同功能组通过线条分隔，产品至少要有1个功能组。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/dk18Q5eO-xcAAAAAAAAAAAAADv3-AQBr/original)

### 返回导航

在标题前增加返回按钮，单击后返回进入前的页面，适用于信息结构较扁平的下钻场景。当信息层普遍是≥3级时，可结合面包屑一同使用，为用户提供更清晰的导航路径，同一产品内面包屑显示规则建议保持一致。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4JrMQLbIxQYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">独立使用</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/P1gxQa7WaRYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">与面包屑组合使用</div>
  </div>
</div>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DwU1RLRCrIMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>产品内面包屑显示规则保持一致</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9Hf6SIyYUpEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>避免同一产品内面包屑时有时无</div>
  </div>
</div>

## 使用案例

提供产品中相关导航的最佳实践。

### 全局组合导航

将顶部导航和侧边导航组合使用，通过顶部导航承载全局性的工具和服务，通过侧边导航承载产品核心功能架构，为产品后续发展提供高扩展性的导航框架。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/GnlOTJ89t3YAAAAAAAAAAAAADv3-AQBr/original)

### 子站点下钻导航

一种嵌入式子站点导航模式，进入子站点后，鼠标移入侧边图标导航可自动展开，便于用户快捷切换功能。常见的适用场景：

- 当某类对象具备较多的管理能力项和大量复杂信息，同时对全局导航存在诉求希望可以便捷切换时，可通过子站点下钻模式，将功能和信息层级扁平化呈现，降低用户查找和使用成本。
- 涉及任务复杂且需要较大的工作空间时，可通过子站点的方式提供沉浸式处理任务体验，最常见的是编辑器。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/bfp_Q45NtvgAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/73vrTpy-oj8AAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

### 页面下钻导航

通过页标题返回导航，告知用户当前位置并提供便捷返回能力，适用于信息层级较浅的场景。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/PomfRafC3SYAAAAAAAAAAAAADv3-AQBr/original)
