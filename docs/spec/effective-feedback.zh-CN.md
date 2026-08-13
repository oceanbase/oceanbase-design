---
group: Design Principles 设计原则
title: 有效反馈
order: 4
---

## 及时恰当的反馈结果

通过恰当的反馈形态、简明扼要的反馈内容，告知用户操作结果，在反馈形态上，能在界面上展示就不用弹窗、能用非模态弹窗就不要用模态弹窗，避免过度反馈给用户带来不必要的干扰。

### 实时成功反馈，原地反馈优于消息通知反馈

实时成功的结果反馈，优先通过界面元素状态的变化进行反馈。如数据库创建成功的反馈，可省略全局性的反馈提示，通过列表新增数据行来告知用户结果。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/dC-UQqBhDZoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/o_ZTR5pjSicAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Caution></Caution></div>
  </div>
</div>

### 异步结果反馈，提供全局通知

当系统执行耗时过长，用户需待其完成并进行后续任务时，在任务完成后提供全局性通知，告知用户结果并邀请用户继续完成后续任务。

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ROP7QpTxokkAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

## 告知任务进度状态

不确定性会引发焦虑，因此在操作过程中应尽可能向用户提供明确的信息。对于操作步骤长的任务，需要清楚告知用户他们当前所处的位置及下一步应进行的操作。 对于系统执行耗时较长的操作，除了提供系统执行状态提示外，还应告知用户预计耗时，以帮助用户建立合理的预期，从而缓解等待期间的焦虑。

### 提供步骤导航

通过分步导航，清晰展示用户当前所处位置和所需完成的步骤。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ei9gT4JPP3QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5Wx3Rbmp45IAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
</div>

### 提供预计耗时提示

当任务执行耗时较长时，应显示预计完成时间，并随着操作的进行动态更新预计时间，以帮助用户建立合理的预期。对于时间特别长的任务，可以分阶段显示进度，并提供阶段性反馈，从而减轻用户的等待焦虑。

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/0MggTJezD38AAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

## 告知异常原因，帮助用户识别、诊断和恢复错误

错误消息应该以通俗易懂的语言（无代码）表达，准确地指出问题，并建设性地提出解决方案。

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jn9iQ5oJprMAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>
