---
group: Color 色彩
order: 2
title: Chart color 图表色彩
---

图表是用户与复杂数据交流的可视化工具，图表可以通过颜色来区分不同数据类型或突出关键信息。

## 色彩原则

### 理念传递

OB Charts 的颜色定义旨在传递 OceanBase科技且富有生机的品牌调性，考虑各种复杂数据应用场景和无障碍标准，提供一套高色彩辨识度且开箱即用的图表色板。

### 设计方法

色板配色考虑品牌调性、界面和谐度、色彩辨识度、视障人群的可读性、复杂数据场景的灵活度等因素。在设计色板时需满足以下几个原则：

**色彩和谐：** 界面中会出现大面积图表，图表颜色饱和度过高，容易让用户产生疲劳感、不适合长时间阅读，因此图表配色需要柔和与均衡。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/8i3OQLam0ygAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">使用明度、饱和度舒适的色彩</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/g40jRZMg02QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免使用明度、饱和度过高的色彩</div>
  </div>
</div>

**色彩辨识度：** 色彩辨识度是指颜色和颜色之间的区分度，在配色数量少的情况下很容易做到，但当颜色数量大于等于 10 时，相近的颜色会变多不容易辨别，可以通过拉开色相差距和拉开明暗差距两种方式来提高色彩辨识度。

在 CIELab 色彩空间中，L值一般在 35-85 之间，L值过高颜色太亮，L值过低颜色太暗，都不利于用户阅读。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/00R5SZxZfYoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">L 值在 35-85 之间，颜色亮度适中</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OqwHTpGSP-cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">L 值过高或 L 值过低，不利于阅读</div>
  </div>
</div>

**视障可读：** 视障人群无法准确的识别色相，主要依靠色彩的明暗去区分不同的颜色，可以借助工具 ColorLab 模拟视障显示效果来验证色板的可读性。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/eVN9RZOq5fAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">明暗相间，视障人群也可以辨别</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/LSXfTKi-8WsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">明度相近，视障人群无法辨别</div>
  </div>
</div>

除以上设计原则外，OBCharts 分类色板还融合了品牌色，使用邻近色配色和双分割互补色配色两种方式进行配色确定初步色板，再逐渐收敛明度饱和度来完善最终色板，具体的方法可查看文档[《图表分类色板设计方法》](/docs/blog/chart-classification-palette-design-guide)。OBCharts 语义色板是从 OBUI 功能色延伸而来，OBUI 功能色饱和度明度偏高，不适合用在图表中，因此调整颜色的饱和度和明度得到一组延伸色，再借助工具生成该延伸色的 10 色色阶，并选出和分类色板饱和度相近的一组颜色作为语义色板的基础色板，具体的方法可查看文档[《图表语义色板设计推导》](/docs/blog/chart-semantic-palette-design-guide)。

## 分类色板

分类色板用于展示不同对象数据的图表，一个颜色代表一个值以区分不同类型，常用于折线图、柱状图、饼图、环形图等。分类色板融合OceanBase 品牌色，旨在传递 OB 科技且富有生机的品牌调性。

### 基础色板

基础色板共 10 色，当图例数量 <= 10 个时，使用基础色板，并按照色板顺序展示图表，色板参数如下：

| 序号 | 颜色 | 名称 | HEX 色值 | HSL 色值 |
| --- | --- | --- | --- | --- |
| 1 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kYiURIajuBYAAAAAAAAAAAAADv3-AQBr/original) | 蔚蓝色 | #3D88F2 | H:215 S:75 B:95 |
| 2 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/iDTDRpmJo8QAAAAAAAAAAAAADv3-AQBr/original) | 翡翠绿 | #41D9A6 | H:160 S:70 B:85 |
| 3 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/3LLhRI-vrHEAAAAAAAAAAAAADv3-AQBr/original) | 柠檬黄 | #FAC357 | H:40 S:65 B:98 |
| 4 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/-yH5RZk8d7wAAAAAAAAAAAAADv3-AQBr/original) | 黛蓝色 | #547199 | H:215 S:45 B:60 |
| 5 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/c41rTLokp_IAAAAAAAAAAAAADv3-AQBr/original) | 天蓝色 | #79BFF2 | H:205 S:50 B:95 |
| 6 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kLjXQZsQPe8AAAAAAAAAAAAADv3-AQBr/original) | 草绿色 | #4D997F | H:160 S:50 B:60 |
| 7 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ywWoRoOsYEQAAAAAAAAAAAAADv3-AQBr/original) | 豆绿色 | #88CC66 | H:100 S:50 B:80 |
| 8 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/658KSJbQz2gAAAAAAAAAAAAADv3-AQBr/original) | 丁香色 | #B3749E | H:320 S:35 B:70 |
| 9 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/2LrIRKfYwXAAAAAAAAAAAAAADv3-AQBr/original) | 赤香色 | #E6987F | H:15 S:45 B:90 |
| 10 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/41r2TYXZQvoAAAAAAAAAAAAADv3-AQBr/original) | 檀木色 | #8C675B | H:15 S:35 B:55 |

### 延伸色板

图表中如果有超过 10 个图例的场景，则需要用到延伸色板，延伸色板共 20 色，是在基础色基础上调整 60% 不透明度的实色，穿插在基础色中使用，从而实现明暗交替；当图例数量 > 10 个时，需使用延伸色板，并按照色板顺序展示图表，色板参数如下：

| 序号 | 颜色 | 名称 | HEX 色值 | HSL 色值 |
| --- | --- | --- | --- | --- |
| 1 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/egkJRL9xU3wAAAAAAAAAAAAADv3-AQBr/original) | 蔚蓝色 | #3D88F2 | H:215 S:75 B:95 |
| 2 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FlaZT5y4R_YAAAAAAAAAAAAADv3-AQBr/original) | 浅蔚蓝 | #8BB8F7 | H:215 S:44 B:97 |
| 3 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0NNMRZNPsNoAAAAAAAAAAAAADv3-AQBr/original) | 翡翠绿 | #41D9A6 | H:160 S:70 B:85 |
| 4 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ktgLTo35ik0AAAAAAAAAAAAADv3-AQBr/original) | 浅翡翠 | #8DE8CA | H:160 S:39 B:91 |
| 5 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FCMWQJ2nGW0AAAAAAAAAAAAADv3-AQBr/original) | 柠檬黄 | #FAC357 | H:40 S:65 B:98 |
| 6 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/1Tu8S4kiTasAAAAAAAAAAAAADv3-AQBr/original) | 浅柠檬 | #FCDB9A | H:40 S:39 B:99 |
| 7 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Xl3nS7YezLkAAAAAAAAAAAAADv3-AQBr/original) | 黛蓝色 | #547199 | H:215 S:45 B:60 |
| 8 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/b02PRZz66BUAAAAAAAAAAAAADv3-AQBr/original) | 浅黛蓝 | #98AAC2 | H:215 S:22 B:76 |
| 9 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kl12SaHxY_QAAAAAAAAAAAAADv3-AQBr/original) | 天蓝色 | #79BFF2 | H:205 S:50 B:95 |
| 10 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Igc5QY2Y6x8AAAAAAAAAAAAADv3-AQBr/original) | 浅天蓝 | #AFD9F7 | H:205 S:29 B:97 |
| 11 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/k8vcQa89gFwAAAAAAAAAAAAADv3-AQBr/original) | 草绿色 | #4D997F | H:160 S:50 B:60 |
| 12 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/7hoJRqUSddQAAAAAAAAAAAAADv3-AQBr/original) | 浅草绿 | #94C2B3 | H:160 S:24 B:76 |
| 13 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/dOMQS4n-z88AAAAAAAAAAAAADv3-AQBr/original) | 豆绿色 | #88CC66 | H:100 S:50 B:80 |
| 14 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/pZrLQ4jJJMwAAAAAAAAAAAAADv3-AQBr/original) | 浅豆绿 | #B7E0A3 | H:100 S:27 B:88 |
| 15 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/tdJ0RIScyVwAAAAAAAAAAAAADv3-AQBr/original) | 丁香色 | #B3749E | H:320 S:35 B:70 |
| 16 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/4YcbQ6w-URoAAAAAAAAAAAAADv3-AQBr/original) | 浅丁香 | #D1ACC5 | H:320 S:18 B:82 |
| 17 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QxzCQoEnOdwAAAAAAAAAAAAADv3-AQBr/original) | 赤香色 | #E6987F | H:15 S:45 B:90 |
| 18 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/dzGoR7FDv0cAAAAAAAAAAAAADv3-AQBr/original) | 浅赤香 | #F0C1B2 | H:15 S:26 B:94 |
| 19 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZktnS6FT68MAAAAAAAAAAAAADv3-AQBr/original) | 檀木色 | #8C675B | H:15 S:35 B:55 |
| 20 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ovRoQoQfIGMAAAAAAAAAAAAADv3-AQBr/original) | 浅檀木 | #BAA49D | H:15 S:16 B:73 |

## 语义色板

应用于状态统计或指标统计的图表中，如：备份任务的状态统计环形图、迁移任务的状态迷你图，或有语义信息的资源水位图。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/FrxkRJiBiRMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">备份任务环形图</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ECEyT75OVo8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">迁移任务迷你条形图</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/J31qSKfylaIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">资源水位图</div>
  </div>
</div>

语义色板和 OBUI 的功能色同根同源，为了让用户对界面上的语义不产生歧义，语义色板和功能色使用相似的颜色，这样可以让图表和 UI 组件更好的融合，确保一致性。

### 基础色板

灰色和蓝色表示“中性的”，用于“默认”“常规”“剩余”等状态；绿色表示“负向的”，用于“成功”“安全”等状态；其他颜色表示“负向的”，用于“警告”“失败”“风险”等状态。

| 颜色 | 色值 | 名称 | 色号 | 语义 | 表达含义 |
| --- | --- | --- | --- | --- | --- |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0ojQTK5yz3cAAAAAAAAAAAAADv3-AQBr/original) | #9DAAC6 | 灰 | 5 | 中性的 | 表示：默认的、其他、剩余、失效的 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/IHG_QLpD1_QAAAAAAAAAAAAADv3-AQBr/original) | #3983ED | 蓝 | 7 | 中性的 | 表示：常规的、常态的、默认的 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/_-wlQKl6mLcAAAAAAAAAAAAADv3-AQBr/original) | #42C79B | 绿 | 7 | 正向的 | 表示：成功的、安全的、可行的、可获得的 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/220QSbkaJH0AAAAAAAAAAAAADv3-AQBr/original) | #F9B048 | 黄 | 7 | 负向的 | 表示：提醒、注意、警示、低风险（严重等级 1） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FjDZRL2dzQYAAAAAAAAAAAAADv3-AQBr/original) | #F97A3B | 橙 | 7 | 负向的 | 表示：警告、严重、中风险（严重等级 2） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/HgB5Sq3oMl0AAAAAAAAAAAAADv3-AQBr/original) | #E5363B | 红 | 7 | 负向的 | 表示：危险、失败、严重、错误（严重等级 3） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/xWm_TosZTAYAAAAAAAAAAAAADv3-AQBr/original) | #89273F | 紫红 | 7 | 负向的 | 表示：非常严重、高风险、停服（严重等级 4） |

### 延伸色板

延伸色是基于语义基础色板，借助工具生成该延伸色的 10 色色阶，并选出和分类色板饱和度相近的一组颜色作为语义色板的基础色板。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/lteARLPrI2kAAAAAAAAAAAAADv3-AQBr/original)

## 使用案例

图表颜色的最佳实践与使用规则。

### 分类色板

由于色板排序是按照明暗交替的顺序排列，应用时需按优先级展示，不可乱序使用。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jr1cT48tNkYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">分类基础色板需按优先级使用</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/B5-jRbYgMJgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">分类基础色板不可以乱序使用</div>
  </div>
</div>

### 语义色板

可在有明确语义的状态统计或指标统计的图表中使用，不可与分类色板混用，尤其红色、橙色等错误色不可用于常规图表中的图例。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pd_uQbGP52kAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">有明确语义的图表可选用语义色板</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wFxEQKZSUb8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">语义色板不可和分类色板混用，红色代表错误或警示，不可用于普通图表</div>
  </div>
</div>

<style>
table tr td img {
  max-width: 100%;
  height: 32px;
}
</style>
