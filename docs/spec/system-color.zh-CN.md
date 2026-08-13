---
group: Design Foundation 设计基础
subGroup: Color 色彩
title: System color 系统色彩
order: 9
---

色彩在产品中可以帮助用户建立品牌心智，也可以起到区分信息层级、传递信息状态、构建一致性的作用。

## 色彩原则

### 理念传递

OBUI 的颜色定义旨在传递 OceanBase 科技、活力、专注和关怀的品牌特点，帮助用户建立品牌心智。考虑各种色彩应用场景和无障碍标准，OBUI 提供了一套规范完善和开箱即用的官方色板。

### 设计方法

系统色彩分为主题色、功能色和中性色三部分内容。主题色是在 OceanBase 品牌色基础上进行调整，通过调整色相降低明度的方式，确保在按钮、文字链等使用场景下达到国际对比度标准；

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/5JDrRImHnmYAAAAAAAAAAAAADv3-AQBr/original)

中性色进行偏色处理，色相和主题色保持一致，通过二次贝塞尔曲线，在不同对比度区间内选择了 8 级色阶，对比度低的颜色适用于背景色、填充色、边框色等，对比度高的颜色适用于一二级文本色。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/9xrlSZ6Ay54AAAAAAAAAAAAADv3-AQBr/original)

## 主题色

OBUI 主题色包含渐变色和信息色两部分内容。

### 渐变色

渐变色为双色渐变色，应用于主按钮，默认渐变色为 1 号色（Gradient1），Hex 值为#002BFF～#0080FF；

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-29 上午10.58.06.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/4v89Q47F968AAAAAAAAAAAAADv3-AQBr/original)-Gradient1 | #002BFF～#0080FF | H：230 S：100 L：50～H：210 S：100 L：50 | 默认（default） |
| ![截屏2023-03-29 上午11.04.00.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/BM3nS6POGiAAAAAAAAAAAAAADv3-AQBr/original)-Gradient2 | #1AA0FF～#1A53FF | H：205 S：100 L：55～H：225 S：100 L：55 | 悬浮（hover） |
| ![截屏2023-03-29 上午11.04.30.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0lI-TbrR0d8AAAAAAAAAAAAADv3-AQBr/original)-Gradient3 | #0060E6～0013E6 | H：215 S：100 L：45～H：235 S：100 L：45 | 点击（click） |
| ![截屏2023-03-29 上午11.10.56.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jSHoSaU_j6YAAAAAAAAAAAAADv3-AQBr/original)-Gradient4 | #99D5FF～#99B3FF | H：205 S：100 L：80～H：225 S：100 L：80 | 加载中（loading） |

### 信息色

信息色为单色，是产品中最核心、使用最高频的颜色。用于强调信息、引导操作，在很大程度上决定了产品整体的基调和风格。应用于文字按钮、页签、单选等场景，OBUI 的默认信息色为 Blue-5，Hex值为 #006AFF。

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-27 下午5.34.23.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/gV39T6JHJFoAAAAAAAAAAAAADv3-AQBr/original)-Blue1 | #EAF1FF | H：220 S：100 L：96 | 填充（fill） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/V1q9S4Kx_vUAAAAAAAAAAAAADv3-AQBr/original)-Blue2 | #D6E4FF | H：220 S：100 L：92 | 标签描边（tag border） |
| ![截屏2023-03-27 下午5.40.36.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/lm9YTrIetKMAAAAAAAAAAAAADv3-AQBr/original)-Blue3 | #B3CCFF | H：220 S：100 L：85 | 描边（border） |
| ![截屏2023-03-27 下午5.42.25.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/eIZQQoFisYsAAAAAAAAAAAAADv3-AQBr/original)-Blue4 | #5189FB | H：220 S：95 L：65 | 悬浮（hover） |
| ![截屏2023-03-27 下午5.44.06.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/HN5WQLa7PGQAAAAAAAAAAAAADv3-AQBr/original)-Blue5 | #006AFF | H：215 S：100 L：50 | 默认（default） |
| ![截屏2023-03-27 下午5.45.43.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/zmQYQayfyt8AAAAAAAAAAAAADv3-AQBr/original)-Blue6 | #004CE6 | H：220 S：100 L：45 | 点击（click） |

## 功能色

功能色是用于表达特殊语义的颜色，代表了明确的信息和状态。结合数据库产品的特性，OBUI 定义了 5 种功能色，分别来表示成功（提醒）、警告（低风险）、警告（中风险）、错误（高风险）、错误（非常严重）这 5 种状态。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RTV3T5Yaa5AAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/k9xkTKqpniMAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Xvt2SLmzXLsAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NVpgTLDu82wAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Wup_QZtfpMUAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

### 成功色

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.05.17.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kEjtRp3QpAkAAAAAAAAAAAAADv3-AQBr/original)-Green1 | #EEF8F5 | H：160 S：40 L：95 | 填充（fill） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/5RpyQJkbsnQAAAAAAAAAAAAADv3-AQBr/original)-Green2 | #DBF0E9 | H：160 S：40 L：90 | 标签描边（tag border） |
| ![截屏2023-03-28 下午4.04.35.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/zixvSbpJNiYAAAAAAAAAAAAADv3-AQBr/original)-Green3 | #B3E6D5 | H：160 S：50 L：80 | 描边（border） |
| ![截屏2023-03-28 下午3.57.47.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/tjZWRrF5D5wAAAAAAAAAAAAADv3-AQBr/original)-Green4 | #4DCCA2 | H：160 S：55 L：55 | 悬浮（hover） |
| ![截屏2023-03-28 下午4.01.23.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZCX-RIdJpW4AAAAAAAAAAAAADv3-AQBr/original)-Green5 | #0AC185 | H：160 S：90 L：40 | 默认（default） |
| ![截屏2023-03-28 下午4.02.48.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/yDlZToZa2sQAAAAAAAAAAAAADv3-AQBr/original)-Green6 | #00B378 | H：160 S：100 L：35 | 点击（click） |

### 警告色-低风险

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.13.42.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/LQ1wTZRsNlgAAAAAAAAAAAAADv3-AQBr/original)-Gold 1 | #FFF5E5 | H：36 S：100 L：95 | 填充（fill） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/PTaERp_POuMAAAAAAAAAAAAADv3-AQBr/original)-Gold 2 | #FFE7C2 | H：36 S：100 L：88 | 标签描边（tag border） |
| ![截屏2023-03-28 下午4.15.44.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/BATrSLwQzvsAAAAAAAAAAAAADv3-AQBr/original)-Gold 3 | #FFD699 | H：36 S：100 L：80 | 描边（border） |
| ![截屏2023-03-28 下午4.17.01.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/3s4BTY_apzgAAAAAAAAAAAAADv3-AQBr/original)-Gold 4 | #FFC166 | H：36 S：100 L：70 | 悬浮（hover） |
| ![截屏2023-03-28 下午4.18.34.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hK3qRK8kjUAAAAAAAAAAAAAADv3-AQBr/original)-Gold 5 | #FFA21A | H：36 S：100 L：55 | 默认（default） |
| ![截屏2023-03-28 下午4.17.43.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/EQFtS4HeINMAAAAAAAAAAAAADv3-AQBr/original)-Gold 6 | #E68800 | H：36 S：100 L：45 | 点击（click） |

### 警告色-中风险

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/pPI0S4_S3REAAAAAAAAAAAAADv3-AQBr/original)-Orange1 | #FFEEE5 | H：20 S：100 L：95 | 填充（fill） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/9c1rSYbGxZ8AAAAAAAAAAAAADv3-AQBr/original)-Orange2 | #FFDDCC | H：20 S：100 L：90 | 标签描边（tag border） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QoS-SIvDjaMAAAAAAAAAAAAADv3-AQBr/original)-Orange3 | #FFCCB3 | H：20 S：100 L：85 | 描边（border） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/OWgvTIZnceIAAAAAAAAAAAAADv3-AQBr/original)-Orange4 | #FF9866 | H：20 S：100 L：70 | 悬浮（hover） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/xuCeQryvYLIAAAAAAAAAAAAADv3-AQBr/original)-Orange5 | #FF7633 | H：20 S：100 L：60 | 默认（default） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jnVGRaE4dm0AAAAAAAAAAAAADv3-AQBr/original)-Orange6 | #E64B00 | H：20 S：100 L：45 | 点击（click） |

### 错误色-高风险

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.19.56.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hxHqT77y5X0AAAAAAAAAAAAADv3-AQBr/original)-Red1 | #FFEBEB | H：360 S：100 L：96 | 填充（fill） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0rcXR7MoVqMAAAAAAAAAAAAADv3-AQBr/original)-Red2 | #FFD6D6 | H：360 S：100 L：92 | 标签描边（tag border） |
| ![截屏2023-03-28 下午4.20.53.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/PBygRItWOyUAAAAAAAAAAAAADv3-AQBr/original)-Red3 | #FFB3B3 | H：360 S：100 L：85 | 描边（border） |
| ![截屏2023-03-28 下午4.21.37.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Cuf0ToltiswAAAAAAAAAAAAADv3-AQBr/original)-Red4 | #FF7575 | H：360 S：100 L：73 | 悬浮（hover） |
| ![截屏2023-03-28 下午4.23.20.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/E49XQYJEWyoAAAAAAAAAAAAADv3-AQBr/original)-Red5 | #F93939 | H：360 S：94 L：60 | 默认（default） |
| ![截屏2023-03-28 下午4.22.15.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/qu8ER4fBLPwAAAAAAAAAAAAADv3-AQBr/original)-Red6 | #CC0000 | H：360 S：100 L：40 | 点击（click） |

### 错误色-非常严重

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/_C33RKlNM4EAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia1 | #FAEBEF | H：345 S：58 L：95 | 填充（fill） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/J_dyQKh98-cAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia2 | #F4D7DE | H：345 S：58 L：90 | 标签描边（tag border） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/1ZIPQaVk1BsAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia3 | #E9AFBD | H：345 S：58 L：80 | 描边（border） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/EmSoTIJ9_J8AAAAAAAAAAAAADv3-AQBr/original)-Fuchsia4 | #CF4A6B | H：345 S：58 L：55 | 悬浮（hover） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/H9ZqS78wL7UAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia5 | #8E2640 | H：345 S：58 L：35 | 默认（default） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/qJ83Q7pUkroAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia6 | #501624 | H：345 S：58 L：20 | 点击（click） |

## 中性色

为了使界面的品牌调性、色彩感受和谐统一，OBUI 的中性色融入品牌蓝，主要应用于背景填充色、组件边框色、暗文提示色以及默认文本色等。

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xk5jSr8PcggAAAAAAAAAAAAADv3-AQBr/original" style="width: 350px">

### 文本色

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.39.05.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/vv79S4DauLIAAAAAAAAAAAAADv3-AQBr/original)-Gray8 | #132039 | H：220 S：50 L：15 | 一级文本：页容器一、二级标题、表单标题、正文 |
| ![截屏2023-03-28 下午4.35.51.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/KaV6TZqf5eQAAAAAAAAAAAAADv3-AQBr/original)-Gray7 | #5C6B8A | H：220 S：20 L：45 | 二级文本：表头文字、Tab 未选中、基础信息标题文本 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ifTpRrpP4ooAAAAAAAAAAAAADv3-AQBr/original)-Gray6 | #8592AD | H：220 S：20 L：60 | 三级文本：表单提示信息 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/mDKRTaFYV30AAAAAAAAAAAAADv3-AQBr/original)-Gray5 | #C1CBE0 | H：221 S：33 L：82 | 四级文本：输入框暗文、禁用文本 |

### 边框色

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.34.00.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/1UmESq56mWQAAAAAAAAAAAAADv3-AQBr/original)-Gray4 | #CDD5E4 | H：220 S：30 L：85 | 一级边框色：按钮描边、组件边框 |
| ![截屏2023-03-28 下午4.31.51.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/j8qnRJIYt-0AAAAAAAAAAAAADv3-AQBr/original)-Gray3 | #E2E8F3 | H：220 S：40 L：92 | 二级边框色：分割线 |

### 填充色

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.35.51.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/tlrpTKZdXocAAAAAAAAAAAAADv3-AQBr/original)-Gray7 | #5C6B8A | H：220 S：20 L：45 | 线性图标色 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/d1CmQ4x_RWsAAAAAAAAAAAAADv3-AQBr/original)-Gray6 | #8592AD | H：220 S：20 L：60 | 开关关闭色 |
| ![截屏2023-03-28 下午4.31.51.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kotzR7tCCm4AAAAAAAAAAAAADv3-AQBr/original)-Gray3 | #E2E8F3 | H：220 S：40 L：92 | 进度条、滑动条、步骤条默认色、<br />评分默认色、骨架屏 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/XCLtRqqlBkMAAAAAAAAAAAAADv3-AQBr/original)-Gray2 | #F3F6FC | H：220 S：60 L：97 | 页面底色、组件禁用态（除开关）、<br />下拉菜单悬停、分段控制器 |
| ![截屏2023-03-28 下午4.26.57.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Gj5hT5AKYAoAAAAAAAAAAAAADv3-AQBr/original)-Gray1 | #F8FAFE | H：220 S：75 L：98 | 表格斑马格、页签未选中态 |

### 背景色

| 颜色 | HEX 色值 | HSL 色值 | 应用场景 |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.39.05.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/31ySR7XgIjIAAAAAAAAAAAAADv3-AQBr/original)-Gray8 | #132039(60%) | H：220 S：50 L：15 Alpha：60 | 弹窗、抽屉等组件的底部蒙层 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kb9FR6ginHQAAAAAAAAAAAAADv3-AQBr/original)-Gray2 | #F3F6FC | H：220 S：60 L：97 | 页面底色 |
| <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VtrdSa-pXbIAAAAAAAAAAAAADv3-AQBr/original" style="border: 1px solid #E2E8F3; border-radius: 4px" />-White | #FFFFFF | H：0 S：0 L：100 | 组件、容器背景色 |

## 使用案例

OceanBase 产品中的具体应用案例。

### 渐变色

渐变色仅应用于主按钮。渐变1号色为主按钮默认色，渐变4号色为主按钮加载中的状态色，不可将其作为主按钮的置灰色，主按钮失效状态需使用中性色 2 号色作为禁用态填充色，中性色 4 号色作为禁用态描边色。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZnHCRLKKsMsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">主按钮禁用态需使用 Gray2 做填充色，Gray4 做描边色</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/kC2FTqQbR6sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">主按钮禁用态不可使用 Gradient4，Gradient4是加载中状态色</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7KOySZf07NcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">主按钮加载中使用 Gradient4</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ja3QT5Y2gUoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">主按钮加载中不可使用 65% 透明度的 Gradient1</div>
  </div>
</div>

### 信息色

信息色的应用场景包括：关键行动点、状态进行中、重要信息高亮、链接、图形化等。组件的选中态要通过信息色进行高亮处理，便于用户快速识别当前位置。

#### 标签

为了降低描边对信息的干扰，标签描边可使用 Blue-2，来提升信噪比。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/_yugQaxzXLAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">标签边框使用 Blue2</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/CamfR7cNUoIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">标签边框不可使用 Blue3</div>
  </div>
</div>

#### 分段控制器

页签、分段控制器等组件，需用 Blue-5 强化选中态。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RsXNRLJVqhkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">选中态文字色使用 Blue5，字重为中黑</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-qE7TLIL5CIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">选中态文字色不可使用 Gray8，字重为常规</div>
  </div>
</div>

### 功能色

功能色主要应用场景包括标签、告警、状态、消息、进度条等组件。

#### 表格状态

表格中的对象状态易被混淆，蓝色代表进行中，绿色代表已完成，灰色代表已取消。

| 场景 | 蓝 | 绿 | 橙 | 红 | 灰 |
| --- | --- | --- | --- | --- | --- |
| 状态 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/WgGUQa4f6dAAAAAAAAAAAAAADv3-AQBr/original)<br />进行中 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/y_7mTL1biHcAAAAAAAAAAAAADv3-AQBr/original)<br />已完成 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/P9MlT6y-fDUAAAAAAAAAAAAADv3-AQBr/original)<br />准备中 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/gaFhTY-8i7IAAAAAAAAAAAAADv3-AQBr/original)<br />失败 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/6V2HTqoaOBAAAAAAAAAAAAAADv3-AQBr/original)<br />已取消 Gray4 |

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/1uzrQIDAVIgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">进行中的状态用蓝色，已完成的状态用绿色</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/PnidSZW-OVwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">功能语义中绿色代表已完成，已完成的状态需用绿色表示，进行中需用蓝色表示</div>
  </div>
</div>

#### 告警等级

告警标签会区分5个不同严重程度的等级，分别是停服、严重、警告、注意和提醒。主要应用于标签组件中，颜色需要通过5个功能色来表达。

| 场景 | 绿 | 橙 | 橙红 | 红 | 紫红 |
| --- | --- | --- | --- | --- | --- |
| 告警标签 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/G3DzR7SqAoMAAAAAAAAAAAAADv3-AQBr/original)<br />提醒 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/sxqNQ4YAqHAAAAAAAAAAAAAADv3-AQBr/original)<br />注意 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/GDZSSrGGEkoAAAAAAAAAAAAADv3-AQBr/original)<br />警告 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/6DYJQKxwi-YAAAAAAAAAAAAADv3-AQBr/original)<br />严重 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/w1q7Q7Ucw4YAAAAAAAAAAAAADv3-AQBr/original)<br />停服 |

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Kfv-Q7hAZ7sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">告警等级需要使用 OBUI 定义的 5 个功能色</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/zKrMSqzJBxgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">告警等级不能使用自定义颜色</div>
  </div>
</div>

#### 风险等级

数据库产品的巡检报告中会标明巡检目标是否存在风险，风险分为3个等级：低风险、中风险和高风险。颜色分别使用功能色中的中风险、低风险色和高风险色。为了建立用户对风险严重程度的心智，风险等级不能和告警等级混用，绿色代表提醒但没有风险，不能和低风险混淆，紫红色代表非常严重的停服状态，不能和高风险混淆。

| 场景 | 橙 | 橙红 | 红 | 灰 |
| --- | --- | --- | --- | --- |
| 风险等级 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jnc_R53GD4sAAAAAAAAAAAAADv3-AQBr/original)<br />低风险 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/JCyYT6IgeL4AAAAAAAAAAAAADv3-AQBr/original)<br />中风险 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/MV87QLHAPEUAAAAAAAAAAAAADv3-AQBr/original)<br />高风险 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/j9dRQbKgg5cAAAAAAAAAAAAADv3-AQBr/original)<br />无结果 |

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qFO1RJNHoTgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">巡检的风险等级需要使用功能色中的高中低风险色</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Z3qNRoiLcBcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">绿色代表提醒但没有风险，不能用于低风险项，紫红色代表非常严重的停服状态，不能用于高风险</div>
  </div>
</div>

### 中性色

常用于文字默认状态，组件未选中状态，及禁用态。

#### 页面标题

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4bsFTY04PPkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">一二级标题色使用 Gray8</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/S8gORLezrH0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">一二级标题色不可使用纯黑色（#000000），该色不在中性色色阶范围内</div>
  </div>
</div>

#### 基础信息

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/rVnUQISkITUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">详情页基础信息标签值使用 Gray7，内容值使用 Gray-8</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Ol1LSKwgY5kAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">详情页基础信息注意标签值不能使用 Gray6，或更浅的颜色</div>
  </div>
</div>

#### 选择框图标

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/nduNTL8unSoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">图标默认色为 Gray7，禁用色为 Gray4</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/L0kGQplgP4YAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">图标默认态避免使用 Gray5，颜色较浅像禁用态，图标禁用态需使用 Gray4</div>
  </div>
</div>

#### 品牌图标

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/JvnTQYD53n4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description" style="margin-top: 16px">品牌图标默认为该品牌定义默认色，禁用色为 Gray 4</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NRInSIVQoPUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description" style="margin-top: 16px">避免直接调整透明度表达禁用状态</div>
  </div>
</div>

#### 菜单

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Cq_cSpkBppgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">下拉菜单悬停态底色需使用 Gray2</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2ovkT4KRjlIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">下拉菜单悬停态底色不可使用 Gray3</div>
  </div>
</div>

#### 页签

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/v_BqRInH3ckAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">页签未选中态需使用 Gray8</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3n3qQouKM6AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">页签未选中态不可使用 Gray7，容易和禁用态混淆</div>
  </div>
</div>

#### 分段控制器

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/L7_YRYFcIv8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">页签与分段控制器属于次级导航，未选中态文字使用 Gray7，页签未选中态填充色使用 Gray1，分段控制器未选中态填充色使用 Gray-2</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KNf0S7GLY6MAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">页签与分段控制器未选中态需和页签做区分，文字色不可使用 Gray8，填充色不可使用 Gray3</div>
  </div>
</div>

<style>
table tr td img {
  max-width: 100%;
  height: 32px;
}
</style>
