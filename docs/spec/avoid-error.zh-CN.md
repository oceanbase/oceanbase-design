---
group: Design Principles 设计原则
title: 避免出错
order: 3
---

当用户进行操作时，通过提供合理的约束和前置性检查、操作风险确认等手段，有效避免操作失误的发生，帮助用户顺畅完成任务。

## 合理约束

对操作行为施加必要的约束，来减少错误的可能性。如输入验证码时，通过6位数字输入框，避免用户输入位数出现偏差；禁用或隐藏不可用选项，避免用户点击后没反应或出现异常报错。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/67k6Qo4Loe8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">避免用户输入位数出现偏差</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Fh7QQrYiQH0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">避免用户点击后没反应或出现异常报错</div>
  </div>
</div>

## 合理性检查

对用户输入内容进行验证，及时反馈错误并提供纠错帮助。例如在表单提交时，检查用户输入是否符合要求，如果存在错误及时提示用户修改。

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/JuDiSrreV2oAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

## 风险确认

针对存在风险和不可撤销的危险场景提供操作确认，需要明确说明操作所带来的后续影响，为用户提供预期，同时减少出错几率，避免遭受不必要的损失。

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/C_xVR4qyzeQAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>
