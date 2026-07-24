---
group: Design Foundation 设计基础
subGroup: Icongraphy 图形
title: Product graphic 产品缺省图
order: 12
---

产品缺省图是页面数据或内容缺失时的填充内容，配合文字引导用户操作，传达品牌形象，并保持用户体验的连续性。

产品缺省图通过 [Empty](/components/empty) 与 [Result](/components/result) 组件提供，使用方式详见组件文档。

## 变更点

OBUI 2.0 产品缺省图遵循“有序、高效、简洁、灵活”的设计理念，核心变更如下：

1. 升级设计风格，简化色彩，提高工具产品适配度（OB Cloud，DataStudio...），形成以中性色（Gray10）线条为主，蓝色（Blue3）填充为辅的简约且轻松的视觉风格；
2. 简化插图构成元素，强调表意主体，在引导用户操作并给予情绪价值的同时，让用户更关注界面信息；
3. 此次升级覆盖<u>一级插图 + 三级插图</u>，原本二级插图仅用于用户引导，目前已下线不再使用。

OBUI 插图风格演变过程：

<div style="display: flex; gap: 16px">
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/oS-7TpMAIeEAAAAAQdAAAAgADuOXAQJr/original" alt="OBUI 1.0" />
    <div class="image-description-center">OBUI 1.0</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/KChFSqXrmv0AAAAAQSAAAAgADuOXAQJr/original" alt="OBUI 1.5" />
    <div class="image-description-center">OBUI 1.5</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/Bh60RYmSoZ0AAAAAQ0AAAAgADuOXAQJr/original" alt="OBUI 2.0 🌟" />
    <div class="image-description-center">OBUI 2.0 🌟</div>
  </div>
</div>

## 一级缺省图设计方法（原1.0色彩缺省图）

### 元素剖析

插图使用 2.5D 绘制手法，展现立体度，元素构成如下：

1. 表意主体，由中性色图线条构成；
2. 蓝色填充辅助，用于提升插图观赏性，或强调某个元素；
3. 中性深色投影，投影方向统一为右上至左下；
4. 图标通常用于引导用户新建的动作才会出现。

<div style="display: flex; gap: 16px">
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/WU43RacTxMIAAAAAQ4AAAAgADuOXAQJr/original" alt="引导新建类" />
    <div class="image-description-center">引导新建类</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/kta1RYixRI0AAAAARCAAAAgADuOXAQJr/original" alt="常规" />
    <div class="image-description-center">常规</div>
  </div>
</div>

### 颜色规范

一级插画颜色由高亮色和中性色两部分组成：

- **高亮色**（占比10%-30%）：常用于填充插图中希望被重点突出的部分；
- **中性色**（占比30%-90%）：绘制插图的主要颜色，用于线条、投影、重点图标等元素。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/qXrJS6EoJFYAAAAAQZAAAAgADuOXAQJr/original)

## 应用尺寸

插图应用场景分为三类：

- 欢迎页面：左右版式，插图主要用于氛围渲染，尺寸推荐使用 200\*200；
- 常规页面：上下版式，主要用于展示空状态、状态反馈等常规界面，尺寸推荐使用 100\*100；
- 组件模块：上下版式，使用次级插图，尺寸推荐使用 48\*48

以下是尺寸应用示意：

- 200\*200

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/W5_YQI5AskUAAAAAT2AAAAgADuOXAQJr/original)

- 100\*100

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/iVLwRLewbIsAAAAASHAAAAgADuOXAQJr/original)

- 48\*48

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/rxd7SJ-k8OIAAAAATBAAAAgADuOXAQJr/original)

## 使用场景

- 出错提示

原<u>「页面不见了」</u>细分为「找不到资源」、「网络问题」、「404」

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/OGa7TalzoWgAAAAAUeAAAAgADuOXAQJr/original)<br/>![未找到页面/资源](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/E5G9TKj-5kUAAAAARdAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/eQsUS4sGwukAAAAAUBAAAAgADuOXAQJr/original)<br/>![网络问题](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/0E0CSLgM_MAAAAAAQ8AAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/BDWcQ6ryWu0AAAAAZdAAAAgADuOXAQJr/original)<br/>![404](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/pIu5Q5M6eCgAAAAARGAAAAgADuOXAQJr/original) |
| --- | --- | --- |
| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/CytJTpE6KdIAAAAAeXAAAAgADuOXAQJr/original)<br/>![页面崩溃](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/MrDiSpzLrGgAAAAAQRAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/yhgJTId3znAAAAAAUPAAAAgADuOXAQJr/original)<br/>![无权限](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/JSR1Tbft_AQAAAAAQrAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/WAu8TbwQnc8AAAAAUJAAAAgADuOXAQJr/original)<br/>![版本更新](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/8j5UQIwrh8AAAAAAQtAAAAgADuOXAQJr/original) |

</div>

- 空状态、无数据

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/larhS5eFOTkAAAAAgBAAAAgADuOXAQJr/original)<br/>![引导新建](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/Bh60RYmSoZ0AAAAAQ0AAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/9HgMSbtfaw0AAAAAfSAAAAgADuOXAQJr/original)<br/>![新建租户](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/DuuJSrC2G3MAAAAAQwAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/0U9mTJXJggoAAAAAfrAAAAgADuOXAQJr/original)<br/>![创建私网链接](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/AEyJQZ0sy_0AAAAARMAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/t_MWQ6FD228AAAAATyAAAAgADuOXAQJr/original)<br/>![无数据](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/e8KHT6ItBKAAAAAAQkAAAAgADuOXAQJr/original) |
| --- | --- | --- | --- |

</div>

- 状态反馈

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/u3llSIrwPC4AAAAAUoAAAAgADuOXAQJr/original)<br/>![进行中](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/dlt0TY2pnb4AAAAAQrAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/rrXYQ5ODJFkAAAAAUzAAAAgADuOXAQJr/original)<br/>![成功](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/xROcQ66iJloAAAAAQmAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/3xfGQae9lQAAAAAAUuAAAAgADuOXAQJr/original)<br/>![失败](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/7fyFS7lmNhwAAAAAQ1AAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/wD5pQ6eWmpkAAAAAUaAAAAgADuOXAQJr/original)<br/>![警告](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/_wqwSI4q2UwAAAAAQ5AAAAgADuOXAQJr/original) |
| :-: | --- | --- | --- |

</div>

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/5LyyRpb-RsMAAAAAeDAAAAgADuOXAQJr/original)<br/>![正常](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/ckUKQZmBGeAAAAAAQOAAAAgADuOXAQJr/original) |
| :-: |

</div>

- 欢迎

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/40MVSIqsqdMAAAAAVfAAAAgADuOXAQJr/original)<br/>![欢迎](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/-p4HT7qrnJUAAAAAROAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/pYubT56M1EUAAAAAVMAAAAgADuOXAQJr/original)<br/>![欢迎登陆1](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/ABUnQpqso04AAAAARLAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/D0sDTKq5E1AAAAAAgBAAAAgADuOXAQJr/original)<br/>![数据迁移](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/x3etQrIG3pMAAAAAQ3AAAAgADuOXAQJr/original) |
| --- | --- | --- |

</div>

- 次级缺省图（使用中性色 Gray 7，与描述文字颜色一致）

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/wHBTTZahyg8AAAAAS7AAAAgADuOXAQJr/original)<br/><br/>![无数据](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/ByqISI41otYAAAAAQDAAAAgADuOXAQJr/original) |
| :-: |

</div>
