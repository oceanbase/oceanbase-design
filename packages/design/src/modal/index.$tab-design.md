模态对话框是在当前页面上方以遮罩叠加居中浮层的形式显示内容，底层页面内容被遮盖且无法访问，直到用户完成任务或关闭模态对话框。该模式可将用户注意力集中在当前任务上，适用于需用户集中注意力快速完成某任务的场景。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/lI3EQ6WmlxgAAAAAAAAAAAAADv3-AQBr/original)

## 何时使用

- 在需要用户填写表单或输入信息时，弹窗可以提供一个独立的临时界面，从而避免用户分心。
- 当需要用户确认其操作意图为避免误操作时，例如删除某项数据、提交变更操作等。
- 当需要显示少量详细信息或者特定内容时，例如产品详情、图片放大预览等。
- 当需要向用户传达重要的通知或警告时，例如系统错误等。
- 当需要向用户反馈操作的结果时，例如操作成功、失败、上传进度等。

## 组件剖析

模态对话框由标题区、内容区、底部操作区三部分组成。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/TSG7SoaHfYMAAAAAAAAAAAAADv3-AQBr/original)

1. 标题
2. 内容
3. 操作

### 标题

在基础对话框中，标题区主要包括标题和关闭图标按钮，用于显示当前任务名称并提供撤销的操作。标题应该简短明了，准确描述对话框的内容。在<strong>风险操作确认场景中，标题需突出异常问题，让用户一目了然识别问题，快速做决策。</strong>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/bdAqQLFgLLQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">标题中清晰告知用户异常问题</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jYFrSrzHL7oAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免让用户通过正文内容识别异常问题</div>
  </div>
</div>

### 内容区

用于显示对话框的具体内容，例如文本、表单、图像等。主体内容应该清晰地展现对话框所需的信息或交互性组件，从而方便用户正确地进行操作或做出决策，内容区距四周间距为 24px。<strong>风险确认场景中，正文内容应包含操作影响/后果、操作建议，影响和后果需置于句首，文案应保持精炼，避免在正文中重申标题。</strong>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/sfCrQ5ilXPAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">内容精炼，给出风险和操作建议</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4iEcRpkSVJYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">尽量避免仅提示风险无行动建议</div>
  </div>
</div>

### 底部操作区

操作区最多建议不超过三个操作按钮，删除等高危场景主操作使用危险按钮，其它场景使用普通主按钮。底部区域还可提供额外的状态信息或操作文本，例如保存草稿、关闭窗口等。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mWV8QpY7KCgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">高危场景使用危险按钮</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/XkcNSqzYz9AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">高危场景使用普通主按钮</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Aa3BSp86zt0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">主按钮呼应标题</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/m6t6RbAxExwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免使用通用语义按钮</div>
  </div>
</div>

### 布局

默认展示位置为距视窗顶部100px，水平方向居中显示；宽度默认为520px，最小宽度为380px、最大宽度1200px；高度可支持自适应内容高度和定高两种模式。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/M0ArSq4rtskAAAAAAAAAAAAADv3-AQBr/original)

## 数据录入对话框

适用于创建和编辑类场景，任务复杂度不高，可以快速完成且频度不高，如果复杂度较高建议使用页面录入模式。新建表单场景，可设置初始焦点为接受用户输入的第一个位置，该项为可选配置，可根据场景启用。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/UrWKRJJslG4AAAAAAAAAAAAADv3-AQBr/original)

## 长任务反馈对话框

适用于用户提交任务后，系统需要一段时间执行某类任务后，才会反馈任务结果的场景。如数据库实例创建的预检查场景，任务耗时建议不超过1分钟，若任务耗时较长建议采用页面内置步骤或异步任务方式并使用全局同时告知用户任务提交成功和预计耗时等。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/x_qWQJd0CqEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">无进度-循环加载</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9-p2Sabb7MgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">有进度-展示百分比</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/u44nRpNBbGkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">成功</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OBeiSrtQLlMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">失败</div>
  </div>
</div>

## 二次确认对话框

点击某项操作后引导用户进行二次确认，降低操作失误风险。

### 无风险信息操作确认

操作无风险但需要避免用户误操作时，建议使用[ popconfirm 气泡确认框]() 组件，减少阻断。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/vC1JR7wDi3kAAAAAAAAAAAAADv3-AQBr/original)

### 有风险操作确认

当操作存在风险时，需要用户进行二次确认，避免误操作。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/oue0TqlxJ9kAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/X06URaKTj8gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
</div>

### 危险操作确认

用于破坏性或不可逆操作的确认，如意外执行将导致重要数据丢失不可恢复。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/VPkjTb5xiYQAAAAAAAAAAAAADv3-AQBr/original)

## 提示对话框

向用户展示任务执行进度或失败细节。

### 异常提示

任务执行异常，告知用户异常信息并需要用户决策并录入信息，以便系统继续执行。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QUHIRJOyBnYAAAAAAAAAAAAADv3-AQBr/original)

### 失败提示

需要告知用户失败结果和原因，并提供相应的解决方案建议。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Jqr7Salt_d4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">单个对象失败</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ogUtRbJ3v_MAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">批量操作多个对象失败</div>
  </div>
</div>

## 相关资产

[Drawer 抽屉](https://design.oceanbase.com/components/drawer)
