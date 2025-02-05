---
group: Design Foundation 设计基础
subGroup: Interaction 交互
title: Loading 系统加载
order: 17
---

Loading 加载动画是加载数据或执行操作过程中的一种可视化表现方式，合适的加载动效有助于缓解用户的等待焦虑。

## 设计理念

为了在产品中嵌入品牌基因，将动态 Logo 作为 loading 符号，在用户等待的过程中可以加强品牌心智。动态 Logo 寓意为“流动的数据”，表达数据库中不断更新与流动的数据就像是持续演变的故事，每一笔新数据的加入都在为这个故事增添新的篇章。

<div style="display: flex; justify-content: space-around">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HJTsQYnOQVEAAAAAAAAAAAAADv3-AQBr/original" style="width: 200px" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ufarRLcWy_IAAAAAAAAAAAAADv3-AQBr/original" style="width: 200px" />
  </div>
</div>

## 设计方法

OBUI 将加载细分为「全屏加载器」、「区块加载器」、「骨架屏」和「环形加载器」4 种形式。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/8-HrSYeePDIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">全屏加载器</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DPSbTKjDXyYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">区块加载器</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ellTQJ5DYYEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">骨架屏</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/_HPrSIVX2pEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">环形加载器</div>
  </div>
</div>

## 全屏加载器

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/sHiCR4K0aeoAAAAAAAAAAAAADv3-AQBr/original" style="width: 160px; display: block; margin: 0 auto">

### 应用场景

全屏加载器分「全页面加载」和「页容器加载」两种场景。打开一个全新页面时使用「全页面加载」；已有导航缓存，在切换导航菜单时使用「页容器加载」。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/gGzEQJBIMuoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">全页面加载</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TD2HT7wefFwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">页容器加载</div>
  </div>
</div>

### 使用规范

全屏加载器尺寸为 60\*60px。若有说明文案，文字字号为 14px，字色为 Gray8（#132039），文字与动态 Logo 的间距为 4px。为了防止加载时间过快导致 Loading 一闪而过，可以为 Loading 增加 500ms 的延迟。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ECj4SKAcqz4AAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/zXLxRZcIuaAAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

## 区块加载器

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xuB1Tbw8klUAAAAAAAAAAAAADv3-AQBr/original" style="width: 160px; display: block; margin: 0 auto">

### 应用场景

区块加载器相较于全屏加载器层级更低、应用场景更多，色彩采用单色可以避免页面视觉混乱。区块加载器主要应用于「弹窗加载」「菜单加载」「抽屉加载」和「表格加载」四种场景。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/fKxpR7Z6Yr8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">弹窗加载</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZypRSoGtwwcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">菜单加载</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9S0TQ45NvSUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">抽屉加载</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/a19IRqRKcDgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">表格加载</div>
  </div>
</div>

### 使用规范

区块加载器有 2 种尺寸：① 宽 48px：应用于弹窗、抽屉和表格中；② 宽 40px：应用于下拉菜单中；文字规范同「全屏加载器」，为了防止加载时间过快导致 Loading 一闪而过，可以为 Loading 增加 500ms 的延迟。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KqoLQ4Xxv9gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">宽 48px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ILpyTpISMIkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">宽 40px</div>
  </div>
</div>

## 骨架屏

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HRCPS7GFU38AAAAAAAAAAAAADv3-AQBr/original" style="width: 200px; display: block; margin: 0 auto">

### 应用场景

骨架屏分「单条骨架」和「组团骨架」两种类型。在展示具体数据或信息的详情模块可使用「单条骨架」加载；在展示大面积文本或代码时，例如 SQL 文本加载，可以使用“组团骨架”加载。

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pAtNQqCxYlUAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center">单条骨架加载</div>
</div>

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/iQjkSoKLh8UAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center">组团骨架加载</div>
</div>

### 使用规范

**单条骨架：** 宽高尺寸需要业务设计师根据实际场景自定义，建议尺寸和即将加载出的内容相近，避免出现抖动；圆角2px，颜色使用中性色 Gray3。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/gXV7QIy-GPwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">圆角 2px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2j13TofRhFwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">填充色 Gray3</div>
  </div>
</div>

**组团骨架：** 宽度由业务设计师根据实际场景自定义，高度和间距均为16px，颜色和圆角同上。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/IFnuTZPYNa0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">高度和间距均为16px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/kVeUQaDGERoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">填充色 Gray3</div>
  </div>
</div>

## 环形加载器

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/_0TFT6rffQgAAAAAAAAAAAAADv3-AQBr/original" style="width: 200px; display: block; margin: 0 auto">

### 应用场景

环形加载器有三种颜色，白色主要应用于「按钮」，蓝色应用于「输入框」的数据校验状态，灰色主要应用于「级联选择」「树选择」等组件。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZtkqQrI7ZSYAAAAAAAAAAAAADv3-AQBr/original" style="height: 70px" />
    <div class="image-description-center">按钮</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3ungRZTEFxIAAAAAAAAAAAAADv3-AQBr/original" style="height: 70px" />
    <div class="image-description-center">输入框</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ncx1R71S0c0AAAAAAAAAAAAADv3-AQBr/original" style="height: 70px" />
    <div class="image-description-center">级联选择</div>
  </div>
</div>

### 使用规范

环形加载器的尺寸为 16\*16px，有三种颜色，白色色值 #FFFFFF，蓝色色值 #006AFF，灰色色值 #8592AD。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OBjYRY71StcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">尺寸 16*16px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5GksTrOf2BMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">色值分别为 #FFFFFF、#006AFF、 #8592AD</div>
  </div>
</div>

## 使用案例

系统加载的使用规则与最佳实践。

### 全页面加载

全屏加载器需放置在页面或页容器的居中位置。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/uT9tTJIBi2cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>全屏加载器需放置在页面的居中位置</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/kDW1SLT-4rkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>避免在顶部、底部或其他非居中位置</div>
  </div>
</div>

在分步加载的过程中建议只出现一次，全页面加载完成直接进入区块加载，不要在全页面加载完成后又进行页容器加载，避免 Loading 出现位移。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4h3xTImDwgcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>在分步加载的过程中建议只出现一次，全页面加载完直接进入区块级加载</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/QU-8RKZG4WEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>不要在全页面加载完成后又进行页容器加载，避免出现 Loading 的位移</div>
  </div>
</div>

### 页容器加载

在页容器加载时，加载完成后再展示结果，不可以在未加载完成时展示空状态。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/47NBR5bRLPMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>页容器加载时，加载完成后再展示结果</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/SM03SbHQyEMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>不可以将空状态和加载一起展示</div>
  </div>
</div>

### 区块级加载

区块加载器主要应用于「弹窗加载」「菜单加载」「抽屉加载」和「表格加载」四种场景，不可与全屏加载器混用。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pw3rTKlRJiIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>表格加载使用区块加载器</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Fc5KS4rv6zwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>表格加载不可使用全屏加载器</div>
  </div>
</div>
