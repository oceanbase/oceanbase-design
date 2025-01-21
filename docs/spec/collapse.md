---
group: Design Foundation 设计基础
subGroup: Interaction 交互
title: Collapse 信息折叠
order: 15
---

页面中空间有限，但出现复杂、相同类型、但可收纳信息时，使用折叠面板进行信息的整合及收拢，实现页面空间的释放，并减少页面的滚动。

## 设计原则

- <strong>清晰</strong>：通过收起页面中使用场景较少，重要度低的信息，帮助用户关注页面重点，并提供清晰的阅读顺序
- <strong>可扩展</strong>：为信息，容器提供上下拓展的功能，增强页面信息的空间性及容纳度，为用户减少页面的不必要的上下滚动

## 信息折叠

以标题为指引，收起非必要信息；使用场景有：卡片、非默认配置项、列表等。

- 内容信息可被标题统一概括
- 收起时标题位置不变，仅内容被折叠

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/yTaVSKVQ3v8AAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    1. 图标<br />
    2. 标题<br />
    3. 内容
  </div>
</div>

### 图标

使用实心箭头（Gray 6）作为折叠图标，位于标题左侧，阐述内容展开/收起的状态。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/FDqjT4Lz02gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">收起时箭头方向朝右</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4z3qS7PO9csAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">内容展开时箭头方向朝下</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/SCOEQKiw5CwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免收起状态图标方向朝上；避免使用状态色</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9zEJRrIieogAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">若配置无需手动启动/关闭，默认可加载，仅作为次级信息进行收起，避免使用开关代替折叠面板</div>
  </div>
</div>

### 标题

使用名词作为标题，对展开内容进行概括，需简短且清晰。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/EYWUSbdd224AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">使用名词作为标题</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/V0ddRq230jAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免使用过长的动词语句</div>
  </div>
</div>

### 内容区

折叠内容可为纯文字，表单，图表，不作限制。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TAIVQptdbboAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">折叠内容为文字信息</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2hJTSIDBngUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">折叠内容为配置项</div>
  </div>
</div>

## 按钮折叠

以具体行动为指引，用于收起文字，卡片容器等内容。

- 按钮以行动为指引，无需对内容进行概括
- 收起后按钮位置随着内容自适应

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HaVwTK-1-nEAAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    1. 图标（可选）<br />
    2. 行动文案
  </div>
</div>

### 图标（可选）

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/zsunRa85TQIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">收纳纯文字信息时，按钮紧跟文字末尾，不需显示图标</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DNolTK6EwwgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免在文字中使用图标</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jM6pQ7NGVHIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">收纳卡片内容时，需展示图标，图标位于行动文案左侧</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9QPRRbaKJqYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免将图标位于行动文案右侧，易于下拉菜单交互混淆</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Ucf2RKei5SMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">图标方向应与文案保持一致</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/vqauSYJkwn4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免图标交互与文案不一致</div>
  </div>
</div>

### 行动文案

文案应与图标方向保持一致，以行动为引导。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wXcXQY-JYOkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">文案与图标方向，后续交互行为保持一致</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aO3sSYVdDCoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免使用内容概括作为文案</div>
  </div>
</div>

## 使用格式

数据库场景中相关格式说明。

### 对齐

展开后内容文字应与标题左对齐。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3JCnS5ZF1B8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OWXERas2h9gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免文字与图标对齐</div>
  </div>
</div>

## 使用案例

数据库场景中折叠面板使用的典型场景。

### 列表

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RuvyR4cAPPUAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

### 表格

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OyIsSbaC48IAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>
