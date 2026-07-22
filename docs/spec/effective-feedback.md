---
group: Design Principles
title: Effective Feedback
order: 4
---

## Timely and Appropriate Feedback

Inform users of operation results through appropriate feedback forms and concise feedback content. For feedback form: prefer in-page display over modals; prefer non-modal dialogs over modal dialogs when possible. Avoid excessive feedback that causes unnecessary interference.

### Real-time Success Feedback: In-place Feedback Over Message Notification

For real-time success feedback, prioritize feedback through changes in interface element state. For example, database creation success can omit global feedback and inform users through new rows in the list.

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

### Asynchronous Result Feedback: Provide Global Notification

When system execution takes too long and users need to wait for completion before continuing, provide global notification after task completion to inform users of the result and invite them to complete follow-up tasks.

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ROP7QpTxokkAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

## Communicate Task Progress

Uncertainty causes anxiety. Therefore, provide users with clear information during operations. For tasks with many steps, clearly inform users of their current position and next steps. For operations that take a long time, in addition to system execution status, provide estimated duration to help users set reasonable expectations and ease waiting anxiety.

### Provide Step Navigation

Clearly show users' current position and required steps through step navigation.

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

### Provide Estimated Duration

When task execution takes a long time, display estimated completion time and update it dynamically as the operation progresses. For very long tasks, show progress in stages and provide staged feedback to reduce waiting anxiety.

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/0MggTJezD38AAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

## Explain Error Causes and Help Users Identify, Diagnose, and Recover

Error messages should be expressed in plain language (no code), accurately point out the problem, and constructively suggest solutions.

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jn9iQ5oJprMAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>
