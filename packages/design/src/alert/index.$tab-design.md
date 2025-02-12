## 何时使用

用于显示重要、简洁的消息，为用户提供处理(或取消)的操作。告警是持久且非模态的，允许用户在任何时候忽略或与其交互，一次只能显示一条告警。

## 组件剖析

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/uWojT6FSMFAAAAAAAAAAAAAADv3-AQBr/original)

1. 容器
2. 图标
3. 标题（可选）
4. 按钮（可选）
5. 关闭（可选）
6. 描述文字

### 容器

告警容器由竖色块+背景色+线框构成，色块与图标颜色一致，与背景色保持统一色系。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/AkJHRo5qq1EAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/AUBqQK8YE1sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
</div>

### 图标

仅支持线性图标，于文字左侧辅助说明当前消息状态；图标颜色与容器左侧竖色块一致。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Wf8pSKgj-IoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">使用线性图标，颜色与背景色对应</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9TWkQ4Ey51MAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">应避免使用面性图标</div>
  </div>
</div>

### 标题

标题为可选项，仅在需要强调场景使用。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4OVsRJwlRrcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">若使用标题，标题需明确表达场景及任务需求</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-P8uRJlFY4QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免用默认信息等文字填充标题</div>
  </div>
</div>

### 按钮

操作按钮不是必须项，可基于使用场景自行调整。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/0AEJRpNcdyQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">按钮需有明确行为描述</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/82-EQ7wiDYUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免在其他位置放置按钮</div>
  </div>
</div>

### 关闭

关闭按钮不是必须项，可基于使用场景自行调整。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/YMq4TKMqvgwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">强制性信息提示不需要提供关闭按钮</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/sDM8Q68VvDMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免使用文字按钮作为关闭行为</div>
  </div>
</div>

### 描述文字

描述应尽量保持简短，清晰。在宽度不够时，支持换行显示全部文字内容。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2WguRqVzI6IAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">文字显示完成</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/_HupQrXrBqoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免由于宽度限制而省略文字</div>
  </div>
</div>

## 告警状态

共有4种告警类型，分别为 `信息`、`警告`、`成功`、`错误`。

### 信息

默认状态下，页面中引导用户查看的额外说明信息。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0bnbS6U9fMcAAAAAAAAAAAAADv3-AQBr/original)

### 警告

页面警告提醒，不采取将对后续操作产生影响

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/svt2QrQ7IbkAAAAAAAAAAAAADv3-AQBr/original)

### 成功

提醒用户某项操作取得成功或已完成。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/eac3R4hR8uQAAAAAAAAAAAAADv3-AQBr/original)

### 错误

页面报错提醒，对下一步操作产生直接影响，必须修复。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/zOkWSaDPx68AAAAAAAAAAAAADv3-AQBr/original)

## 告警类型

共有3种告警类型，分别为 `带标题 VS 无标题`、`按钮 VS 链接`、`可关闭 VS 不可关闭`。

### 带标题 VS 无标题

标题可基于告警场景自行决定，非强制文字。

| 带标题 | 当有明确语意场景需要总结时 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/-6t4TIFulvgAAAAAAAAAAAAADv3-AQBr/original) |
| --- | --- | --- |
| 无标题 | 无明确场景概述，仅行动引导或简单提示时 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/vyB6SqC44xAAAAAAAAAAAAAADv3-AQBr/original) |

### 按钮 VS 链接

按钮为可选项，依据场景决定是否需要。支持「次级按钮」与「链接」，分别服务不同的业务场景与用户交互。

| 按钮 | 点击后告警关闭，行动立刻应用于当前页面。例如，同意某个条款 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/UI-rTaYXEgoAAAAAAAAAAAAADv3-AQBr/original) |
| --- | --- | --- |
| 链接 | 点击后打开新页面，弹窗，抽屉，且告警不自动关闭。例如，查看文档 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/liVERo_VoeMAAAAAAAAAAAAADv3-AQBr/original) |

### 可关闭 VS 不可关闭

可根据告警信息的内容与业务需要，决定是否给予用户关闭功能。

| 可关闭 | 软性提示，关闭后不影响用户任务 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/gW3NSZSzHJcAAAAAAAAAAAAADv3-AQBr/original) |
| --- | --- | --- |
| 不可关闭 | 必要提示，若关闭，用户当前任务无法顺利通过 | ![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZJPCRLaGS2cAAAAAAAAAAAAADv3-AQBr/original) |

## 使用格式

### 按钮自适应

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KDF9Q4KJk6kAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">最多支持2个按钮。在文字多行时，始终与左侧图标保持顶部对齐</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jk_-RbwTD88AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免根据文字行数调整按钮位置</div>
  </div>
</div>

### 容器自适应

默认宽度 600px, 实际宽度应与应用页面规则保持一致，可自行调小、调大。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/vyh_R5lQdPYAAAAAAAAAAAAAev3-AQBr/original" />
    <div class="image-description-center">自适应与表格居中对齐</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/tCbxTY-OjxIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">与表单一致，保持左侧对齐，不需要占满卡片</div>
  </div>
</div>

## 相关资产

- [警告提示 Alert - Ant Design](https://ant.design/components/alert-cn)
