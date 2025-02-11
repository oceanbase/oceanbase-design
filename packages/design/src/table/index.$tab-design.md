以二维表格格式呈现数据，以矩形形式按行（每行显示一个行项目）和列排列。行项目可以包含任何类型的数据，也可以包含交互式控件，例如编辑数据、查看详情或触发行项目相关操作。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/H0SVSZSjbisAAAAAAAAAAAAADv3-AQBr/original)

## 何时使用

- 当有大量结构化的数据需要展现
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为

## 标题栏

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/R4QkToRPF_kAAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    <div>1. 标题（必选）</div>
    <div>2. 筛选项</div>
    <div>3. 搜索</div>
    <div>4. 表单操作</div>
    <div>5. 快捷操作</div>
  </div>
</div>

### 标题

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qIYrSKRD2NYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">单张卡片中包含多张表格，或包含列设置、轻量筛选、搜索框时，保留表格标题栏</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/iA5OS6NZvbQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">单张卡片上仅有一张表格，且不包含列设置、轻量筛选、搜索框时，避免保留表格标题栏</div>
  </div>
</div>

## 内容区

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Prc1TJ0FkG0AAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    <div>1. 列标题区</div>
    <div>2. 列功能</div>
    <div>3. 单元格区</div>
    <div>4. 批量操作（可选）</div>
    <div>5. 操作列（可选）</div>
    <div>6. 分割线</div>
  </div>
</div>

### 列功能

适用场景：表格列数较少（可在一屏内展示），且筛选项无需重点突出时使用

列标题：名称尽可能精简，名词为主，需额外解释时使用图标容纳信息

列功能：支持排序、筛选、搜索功能；图标从左到右依次排列，间距4px，居右对齐

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/APwhRalMgsUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">表格列数较少（可在一屏内展示），且筛选项无需重点突出时使用列标题筛选</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/dTFtQ4W7r24AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免在表格列数较多（无法在一屏内展示）时使用列标题筛选</div>
  </div>
</div>

### 表内编辑

表内单元格共支持 3 种编辑方式：

<strong>单字段编辑</strong>

- <strong>默认状态</strong>：使用图标示意单元格可编辑，点击「编辑」图标进入编辑态。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/mPXjSKGy0vcAAAAAAAAAAAAADv3-AQBr/original)

- <strong>编辑状态：</strong>点击<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qurPR422Yg4AAAAAAAAAAAAADv3-AQBr/original" width="22px" />提交生效，点击<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VkoLSpzyFqwAAAAAAAAAAAAADv3-AQBr/original" width="22px" />放弃编辑。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/XLqmSp_s1ukAAAAAAAAAAAAADv3-AQBr/original)

<strong>单行编辑</strong>

- <strong>默认状态：</strong>点击「编辑」，该行所有编辑字段进入编辑态，按钮变为「确定」和「取消」。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/6QQAT52WcZMAAAAAAAAAAAAADv3-AQBr/original)

- <strong>编辑状态：</strong>点击「确定」或「取消」后该行编辑项整体确定或取消，建议同一时间仅一行进入编辑态。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/b5b5T7enOLsAAAAAAAAAAAAADv3-AQBr/original)

<strong>多行编辑</strong>

点击「添加」新增编辑行，支持「删除」；编辑后需统一的「确定」按钮保存编辑内容。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jWqVQYI08FAAAAAAAAAAAAAADv3-AQBr/original)

### 操作列

支持「次按钮」和「文字按钮」两种类型，默认使用次按钮。

<strong>次按钮</strong>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aoagQZ5AJwAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">表格操作列默认使用次按钮</div>
  </div>
  <div style="visibility: hidden">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aoagQZ5AJwAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">表格操作列默认使用次按钮</div>
  </div>
</div>

<strong>文字按钮</strong>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/eABIS5L36GQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">单元格无内容折行（默认行高），或操作数量为3个及以上时，使用文字按钮</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/kPG3T7SDu5sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description" style="margin-top: 4px">表内编辑时使用文字按钮（行编辑、处于编辑态的单元格）</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Fjd5RblQ9tcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">需节约空间，确保高密度信息展示时，使用文字按钮，例如紧凑表格、小尺寸表格</div>
  </div>
  <div style="visibility: hidden">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Fjd5RblQ9tcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">需节约空间，确保高密度信息展示时，使用文字按钮，例如紧凑表格、小尺寸表格</div>
  </div>
</div>

<strong>按钮规则</strong>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Af9yTKktxEIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">高频使用的操作可露出显示，最多3个，超出后显示为“...”</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/0pr-SrLg3fYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">完成操作后无法再次使用的按钮不显示</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/24tlSYHGHA0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">因条件不满足（如权限）而无法操作的按钮不显示</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/oLhYS6x2L-0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">因行项目条件不满足（如状态）而无法操作的按钮置灰</div>
  </div>
</div>

### 批量操作

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2bQ5QqOP9P0AAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    <div>1. 查看已选</div>
    <div>2. 取消选中</div>
    <div>3. 批量操作按钮</div>
  </div>
</div>

<strong>查看已选</strong>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/EvqIRI-pCu0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">无需查看已选项时，已选数量为默认文本</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/A5RFT7I090IAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">需要查看已选项时，已选数量改为文字按钮支持点击</div>
  </div>
</div>

<strong>批量操作按钮</strong>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xyIASLJKdEYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">最多露出3个按钮，超过3个后第三个按钮显示为“...”</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ttyxQ6pHT-kAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">批量操作区与分页器间距小于 24px 时按钮显示为“...”</div>
  </div>
</div>

### 分割线

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/euhkRpuhB0IAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">不论是否存在分页器，表格最后一行都保留分割线</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9jRkRpSgJYUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免去掉表格最后一行的分割线</div>
  </div>
</div>

## 分页器

| 类型 | 何时使用 |  |
| --- | --- | --- |
| 基础分页器 | 行项目少于100条 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/DJsERoh8-k8AAAAAAAAAAAAADv3-AQBr/original) |
| 条目设置分页器 | 行项目多于100条 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/tS1TRZWEfxkAAAAAAAAAAAAADv3-AQBr/original) |
| 迷你分页器 | 行项目少于100条，用于弹窗、页面局部表格等 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/GRYCRZ3o8e4AAAAAAAAAAAAADv3-AQBr/original) |

## 表格类型

### 基础表

表头不带底色，内容区采用斑马纹分隔。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/5_tCSbr2zm8AAAAAAAAAAAAADv3-AQBr/original)

### 网格表

表格内容存在从属关系，需要通过行/列合并来呈现信息构成。

<strong>列标题合并</strong>

表头带背景色，内容区用纵向分割线及斑马纹分隔。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xtdfTJpgvwAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">有标题栏的表格，列标题上方、下方都有分割线</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pWKBQ7DxP8UAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">无标题栏的表格，列标题区仅下方有分割线</div>
  </div>
</div>

<strong>行内容合并</strong>

表头带背景色，表格内容区显示分割线，横向表格组间用斑马纹分隔。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/R5pNRIb3V0EAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">有标题栏的表格列标题上方、下方都有分割线</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7zgKR5WRwYUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">无标题栏的表格列标题仅下方有分割线</div>
  </div>
</div>

### 树表

表格行间存在从属关系，需要分层展示信息时（一张树表中建议不超过两组表格列标题）。

<strong>文本信息</strong>

表头不带背景色，表格不带斑马纹，使用分割线分隔行，子节点带背景色。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VuS9To_iSC4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">表格不带斑马纹，子节点带背景色</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/z56WT74GXM8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免在文本信息展开表中使用斑马纹</div>
  </div>
</div>

<strong></strong>

<strong>嵌套子表格</strong>

父级表头不带背景色，表格不带斑马纹，使用分割线分隔行；子级表格区域整体带背景色，使用分割线分隔行。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/m_edQb4nKlAAAAAAAAAAAAAADv3-AQBr/original)

<strong></strong>

<strong>树形数据</strong>

表头不带背景色，父子表格使用同一套斑马纹分隔行。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/NoLvTp3rwcsAAAAAAAAAAAAADv3-AQBr/original)

## 使用格式

### 表格高度

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/_f5XQZXFZDkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">空状态表格卡片默认高度为360px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ILo9Q4PTq-sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">加载态表格卡片默认高度为360px</div>
  </div>
</div>

### 单元格内容对齐

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/e88xSJ7yzYYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">表格中有内容折行时，该行所有字段上下居中对齐</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ivbNRazmjSgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免表格中有内容折行时，该行所有字段顶部对齐</div>
  </div>
</div>

### 批量操作区适配规则

<strong></strong>表格与页面窗口大小实时适配，批量操作区固定显示在表格底部。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/WjkcSKaIKEsAAAAAAAAAAAAADv3-AQBr/original)
