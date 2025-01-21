---
group: Design Foundation 设计基础
subGroup: Interaction 交互
title: Button Layout 按钮布局
order: 16
---

按钮通常会成组出现，根据用户的阅读顺序确定按钮组位置及按钮组内主次按钮的排列顺序，能够确保按钮及时出现在用户需要的位置。

## 设计理念

按钮组在页面中的位置，及按钮组内主次按钮的排列顺序，应该根据不同场景中用户的信息浏览动线而定，确保按钮组能够出现在用户需要的地方，同时用户最需要的按钮（主按钮）能够第一时间被看到。

## 设计方法

基于「Z 模式」、「F 模式」2 种模式进行按钮组设计：

<div style="display: flex">
  <div>
    <strong style="display: block; text-align: center">Z 模式</strong>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZunWQbbEyZIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">适用于信息量少或信息无固定阅读顺序的场景。这种场景中用户视线遵循古腾堡原则，视线终点会停留在区块的右下角</div>
  </div>
  <div>
    <strong style="display: block; text-align: center">F 模式</strong>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/sCQETqA-iFcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">适用于信息量大且信息需要遵循既定阅读顺序的场景。用户视线会跟随行文顺序进行流转，视线终点会停留在内容的结尾</div>
  </div>
</div>

## Z 模式

按钮组位于区块右下角，主按钮居右。

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ihJSR5hDsLkAAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>1. 按钮组</div>
</div>

### 按钮组

按钮按照重要程度从右到左依次排序：主按钮、次按钮。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NmutTYD83mgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">按钮组中支持放置多个按钮，建议不超过3个按钮</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/v0xuTYim4TwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免将按钮放置到弹窗左下角</div>
  </div>
</div>

### 应用场景

Z 模式多用在反馈类容器和筛选卡片容器中。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/edA3Q479KVwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">对话框</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/6ggkQJ2M_IwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">气泡确认框</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2mHmTbOkSHUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">筛选卡片</div>
  </div>
  <div style="visibility: hidden">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2mHmTbOkSHUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">筛选卡片</div>
  </div>
</div>

## F 模式

<strong>按钮组置于用户浏览路径中，主按钮居左。</strong>根据重要程度从左到右依次排序：主按钮、次按钮、图标按钮。

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RecTTLzVFbwAAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    1. 标题区<br />
    2. 内容区<br />
    3. 页脚区
  </div>
</div>

### 标题区

页面级按钮组，执行页面级变更操作，位于一级标题右侧。

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/n9ziTajJnsQAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

### 内容区

区块级按钮组，执行区块级变更操作，功能位置。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/QqxeQpARApMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">用户浏览路径为从左到右时，按钮组置于操作对象右侧。</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/38UbRJPA7VcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">用户浏览路径为从上到下时，按钮组置于操作对象下方。</div>
  </div>
</div>

### 页脚区

放置全局变更操作。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/vES1SKp1cpMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><strong>主按钮居左。</strong>按钮组中按钮之间不存在逻辑关系时，默认主按钮居左。</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WC5UTotcdDsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><strong>主按钮根据按钮逻辑顺序排列。</strong>当按钮组中按钮存在逻辑关系时，可以根据逻辑关系进行排序，其中推荐的操作按钮作为主按钮。</div>
  </div>
</div>

### 应用场景

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/N45mSoKZ2hEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">空页面</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3XznTpRBcgsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">列表页</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Pu_pQqZTni0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">表单页</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ctioS6OVcG4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">抽屉</div>
  </div>
</div>
