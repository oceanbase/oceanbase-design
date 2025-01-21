用于承载处于同一层级的不同内容，方便用户在同一页面框架下快速切换查看。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jEzrQ5xuvC4AAAAAAAAAAAAADv3-AQBr/original)

## 何时使用

当同一层级不同类型内容平铺展示时。

## 基础选项卡

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/FomSRLaAPikAAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    <div>1. 文案</div>
    <div>2. 火柴棍</div>
  </div>
</div>

### 文案

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/En2kR735NgYAAAAAAAAAAAAADv3-AQBr/original" />
    <ul class="image-description">
      <li>超过 7 个中文字符（ 14 个英文字符）后省略显示</li>
      <li>不加标点符号</li>
    </ul>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/t22SQb58NjAAAAAAAAAAAAAADv3-AQBr/original" />
    <ul class="image-description">
      <li>显示超过 7 个中文字符（ 14 个英文字符）</li>
      <li>加标点符号</li>
    </ul>
  </div>
</div>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/dpS9SLRlg-cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">无特殊情况，建议将第一个选项卡设置为默认选中项</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WpcaSYr8sakAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">随意选中一个选项卡作为默认选中项</div>
  </div>
</div>

### 火柴棍

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qnNgRI6CWOkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">文案宽度小于等于32px时，火柴棍与文案等宽</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VXW9Squ8M-0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">文案宽度大于 32px 时，火柴棍宽度等于文案宽度左右各减 8px</div>
  </div>
</div>

## 卡片式选项卡

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3DhpTYoHBW4AAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    <div>1. 文案</div>
    <div>2. 卡片</div>
    <div>3. 分割线</div>
  </div>
</div>

### 分割线

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NBWOQoFdi3cAAAAAAAAAAAAADv3-AQBr/original" />
    <ul class="image-description">
      <li>选中的卡片底部分割线打开，未选中的卡片底部分割线闭合</li>
      <li>分割线需要延长到与所在容器等宽</li>
    </ul>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/8fJLRpSEY6IAAAAAAAAAAAAADv3-AQBr/original" />
    <ul class="image-description">
      <li>选中的卡片分割线闭合</li>
      <li>分割线没有延长</li>
    </ul>
  </div>
</div>

## 使用格式

### 尺寸

提供有大、小 2 种尺寸。

|  | <strong>用途</strong> | <strong>类型</strong> | <strong>尺寸说明</strong> | <strong>字号</strong> |
| --- | --- | --- | --- | --- |
| <strong>大尺寸</strong> | 用在卡片、抽屉容器中 | 基础选项卡 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/VTDiRqYmCvMAAAAAAAAAAAAADv3-AQBr/original) | 16px |
|  |  | 卡片式选项卡 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/6KaZRoo4iwAAAAAAAAAAAAAADv3-AQBr/original) | 16px |
| <strong>小尺寸</strong> | 用在页容器中 | 基础选项卡 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/N_TTT7pljkgAAAAAAAAAAAAADv3-AQBr/original) | 14px |

### 状态

提供选中、未选中 2 种状态。

| <strong></strong> | <strong>基础选项卡</strong> | <strong>卡片式选项卡</strong> |
| --- | :-: | :-: |
| <strong>选中</strong> | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FkgXQpUigyYAAAAAAAAAAAAADv3-AQBr/original) | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Wo6CRJFrscoAAAAAAAAAAAAADv3-AQBr/original) |
| <strong>未选中</strong> | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/n5nlRqH-xlAAAAAAAAAAAAAADv3-AQBr/original) | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/zvYqT6VeY80AAAAAAAAAAAAADv3-AQBr/original) |

### 层级

基础选项卡层级优先于卡片式选项卡。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ltF5SqiJsKMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4471Trad1cMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
</div>

### 宽度自适应

选项卡数量超过容器最大宽度后可以横向滚动。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0gHKSpaH8eUAAAAAAAAAAAAADv3-AQBr/original)

## 使用案例

### 卡片容器内

当各选项卡中包含的内容均仅有一张卡片时，选项卡包含在卡片内。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/okwcQpKPlHIAAAAAAAAAAAAADv3-AQBr/original)

### 卡片容器外

当选项卡包含的内容为整个页面，且单一页面中存在多张卡片时，选项卡放置在页容器上。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/cXVXQ6HlJkgAAAAAAAAAAAAADv3-AQBr/original)
