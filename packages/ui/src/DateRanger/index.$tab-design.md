用于指定日期和时间范围，并可以通过快捷操作向前、向后跳转时段或刷新当前时间。

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hyMcRrWR4j0AAAAAAAAAAAAADv3-AQBr/original)

## 何时使用

当需要快速完成日期范围选择，同时需要高频切换日期范围时使用。

## 组件剖析

![](https://mdn.alipayobjects.com/oceanbase_design/afts/img/trS0Ta2LlOMAAAAAAAAAAAAADv3-AQBr/original)

1. 时长标签
2. 日期范围
3. 快捷跳转
4. 刷新
5. 快捷选择区
6. 精确录入区
7. 年月选择区
8. 日期选择区
9. 操作区

### 时长标签

根据时间跨度N，使用合适的单位：

- 0分钟 < N < 60秒，单位「s」
- 1分钟 ≤ N < 60分钟，单位「m」
- 1小时 ≤ N < 24小时，单位「h」
- 1天 ≤ N < 30天，单位「d」
- 30天 ≤ N < 365天，单位「mo」
- N ≥ 365天，单位「y」

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Qs9JTap1PpwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">根据时间跨度 N，使用合适的时间单位</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/eVjLToSmwwAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免选择不能直观显示时间跨度的时间单位</div>
  </div>
</div>

### 日期范围

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/8bpaRYtGCocAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description" style="margin-top: 8px">
      <div>完整显示年、月、日、时、分、秒</div>
      <div>中文日期格式：yyyy-mm-dd hh:mm:ss</div>
      <div>英文日期格式：mm/dd/yyyy hh:mm:ss</div>
    </div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/XuR6SLWlcLsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免省略显示日期或时间</div>
  </div>
</div>

### 快捷选择区

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ieuySIHcOt4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">快捷选择区不显示选中态</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WDfoTb0KkwoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免将默认时段选项置为选中态</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5FUWQarKEY4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免「自定义」作为默认时段选项</div>
  </div>
  <div style="visibility: hidden">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5FUWQarKEY4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免「自定义」作为默认时段选项</div>
  </div>
</div>

### 精确录入区

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xdJVTKrBwIgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">支持手动输入日期，或在下方日期选择区选择日期</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Q4iiS4RJr2EAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免点击日期选择器后出现日期设置面板</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pB0WRYDuHh8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">时间选择下拉菜单无需提供「确定」按钮，选择完成后点击空白位置或回车后自动确认</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Tr0qQr0qlrgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免在时间选择下拉菜单中放置「确定」按钮，选择完成后需要再次点击「确定」按钮</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-5wPTr4KP2QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">鼠标点击年、月、日区域，即可进行手动输入，仅支持输入数字，完成输入后自动向后选中直到完成输入，“/”不可编辑</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/AdP2Q4QkVCQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">鼠标点击时、分、秒区域，即可进行手动输入，仅支持输入数字，完成输入后自动向后选中直到完成输入，“：”不可编辑</div>
  </div>
</div>

### 日期选择区

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/tCDdS4jIa1oAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">第1次选择的日期同时作为开始日期和结束日期</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/o9lqSJILycwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免开始日期和结束日期为同一天时需要点击两次</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/JN2ATKSqGggAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">第2次选择的日期晚于第1次选择的日期，则第2次选择的日期作为结束日期</div>
    <div class="image-description">第2次选择的日期早于第1次选择的日期，则视为重新开始选择日期</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7oV5QIajg34AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免扩展设置日期范围选择规则，使选择逻辑复杂化</div>
  </div>
</div>

### 操作区

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4riKQLh0VHAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">点击默认时段后日期范围直接生效</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/MgwVR6VO-pAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">录入精确日期范围后，点击「确定」按钮日期范围生效</div>
  </div>
</div>

## 使用格式

### 报错提示

日期选择规则放置到日期选择区下方，提前告知用户。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/fTJNQa34XgEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">业务规则置于日期选择区底部，触发异常后变为警示色</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VhTFR6ht3DYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免不解释错误原因，直接根据业务规则调整日期范围</div>
  </div>
</div>

### 灵活识别，减少报错

两次点击可定义一个日期范围，起止日期的选择顺序不做限制，减少报错。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2nu2RrOYlEkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">首次选择的日期会同时作为起止日期，第二次选择的日期会根据前序日期被判定为开始或结束日期</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Ht8pQpU4VnAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免在选择的结束日期早于开始日期时，直接进行报错</div>
  </div>
</div>
