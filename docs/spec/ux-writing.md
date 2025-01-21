---
group: Design Foundation 设计基础
subGroup: Communication 交流
title: UX Writing 最佳实践
order: 18
---

好的文案，应该从用户视角出发，捕捉用户核心诉求，有效传达产品功能和操作流程，帮助用户更快地完成任务。

## 设计原则

- 清晰：使用用户熟悉的语言，提供专用名词的解释及具体的行动指引
- 简洁：使用精简且准确的语句，避免相同的词汇重复出现
- 一致：相同操作、功能、及专有名词，在上下文中保持一致

## 为用户提供行动预期

数据库产品中，大多数操作涉及数据的修改、移除、及更新，容易对业务产生极大的影响。因此相比其他系统，操作上需要更加谨慎，从用户视角提供清晰的操作预期及提示尤为重要。明确告知可能存在的风险，可帮助用户减少出错的几率，避免遭受不必要的损失。

### 操作确认

点击按钮所触发的二次确认中，文案应注重说明操作所带来的后续影响，为用户提供预期，而非仅是重复的操作询问。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7yfJRLIie0QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">清晰描述行动后所带来的影响</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xC85TbAWvo4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免仅重复行动确认，却并未告知风险</div>
  </div>
</div>

## 以用户价值为导向

在引导用户采取某个行动时，说明文字应该以用户价值为导向，告诉用户“你能从中获取什么”，为用户提供行动的动机；而不是仅说明 “我们需要你做什么” 或 “当前状态为...”。

### 空状态

当页面信息为空，需要用户采取一定行为进入下一步时，文案应：

- 提供行动的动机
- 说明采取行动后用户可获取的价值
- 使用生动的语言增强引导性
- 标题，说明文字，按钮文案间具备继承性

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/o31_TLAW3IcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <ul class="image-description">
      <li>以友好、清晰的行动引导用户</li>
      <li>强调使用后的价值，而非当前的状态</li>
    </ul>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/AxlARpSJ4n8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <ul class="image-description">
      <li>避免多次重复行动，却不提供行动价值</li>
      <li>避免过多描述当前状态</li>
    </ul>
  </div>
</div>

:::info

💡 按钮文案书写说明：

- 以动词为开始，例如 Create Database
- 文案保持精简，控制在1至2个词
- 每个单词均首字母大写
- 用词引导
- 若按钮文案中出现介词，使用以下规范：
  - 介词出现在末尾，介词首字母大写，例如Save As
  - 介词出现在文字中间，介词首字母小写，例如Print to File

:::

### 帮助文档

为复杂配置提供额外文档说明时，链接文案应以“用户能从中获得什么”为导向，而不是仅提供独立的文档名称。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3TQbRZNM81IAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">以问句交流，告知用户点击后能获取“创建同步任务”相关的信息</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/A7XUQJTdJ7IAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免使用文档学名作为链接文案</div>
  </div>
</div>

## 避免提供“无效”信息

当用户在页面中采取行动时，系统通常为用户提供引导信息，告诉用户当前行动的准确性。

### 占位信息

表单输入时，占位信息是一个为用户提供默认引导的区域。为了提升引导的有效性，书写占位引导时应注意：

- 避免使用与标题重复的文字
- 针对输入行为提供引导/说明
- 使用句子大写, 只大写文本中第一个单词的首字母和其他需要大写的单词

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2kLkTJZfS9QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">占位文字尽可能提供一些输入引导</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/y9HrRKDwjREAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免使用与标题相同的文案</div>
  </div>
</div>

### 搜索数据为空

当用户采取一定行为（搜索/ 点击）后，系统返回数据为空值，将对用户提供相关解释，此时文案应注意：

- 清晰描述【什么数据】的为空以及为空的原因，例如：未有实例被创建
- 尽可能提供改变空状态的行动引导（可选），例如：创建实例

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/hwfKTLFMg5oAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <ul class="image-description">
      <li>说明返回数据为空的原因</li>
      <li>提供获取数据的行动指引</li>
    </ul>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qq-ZRI0bj6cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <ul class="image-description">
      <li>避免使用不具体的文案</li>
      <li>避免未提供如何改善的指引或文案描述</li>
    </ul>
  </div>
</div>

## 保持语言简洁与可读性

设计组件及页面交互时，组件中的语言的精简度尤为重要。大多数组件的空间有限，无法适应过长的字符；因此选用组件时，应重点关注组件内语言的长度，保持语言的精简及准确，避免使用过多不必要的动词及描述。

### 标签

产品中常使用标签交流某个信息的状态、属性、或额外信息，当使用此组件时，标签内文案应注意：

- 不要在标签内文字后添加标点符号
- 避免重复已知信息
- 避免换行显示
- 若文案过长，不建议使用标签组件

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/gt7tQKHtmpsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">标签内容应简短清晰</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/yS_ORqGMV4AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免使用标签显示过长的文字</div>
  </div>
</div>

### 表格标题

- 以简短的名词呈现，避免使用动词语句
- 避免在标题直接进行数据、格式、名词的解释
- 标题不添加冠词及标点符号，使用单词大写

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/v9-GQI85MEoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">使用图标显示额外的解释信息</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pIwLQrQJ_9AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免直接在标题解释名词</div>
  </div>
</div>

## 全局一致的翻译规范

页面中的术语、相似操作的词汇，语句结构在各个产品功能中文案表述要统一，尽可能减少用户理解和学习的成本。

### 系统消息

系统对用户在页面中操作应给予及时的反馈，反馈有失败、成功、告警几种状态，书写格式以「动词+名词+成功」书写，例如 【新建数据源成功】。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DoMPQoCKVcwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/6HjrT6SeKkIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免使用副词作为开头</div>
  </div>
</div>

## 把“动机”说清楚

对于许多新增的配置，用户并不了解逻辑及价值，文案需要清楚告诉用户产品上出现的每一个选项可以用来做什么，这个新功能值得去尝试/使用的理由。

### 配置说明

当配置标题无法清晰说明使用场景时，可使用帮助信息，说明该功能配置后所带来的用户价值。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/lQ5SRqmFo3gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">与用户交流「Project」的功能价值</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/lsIfQ6tsc8cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免使用标题概述用户行动，而非行动价值</div>
  </div>
</div>

## 不要让用户阅读“作文”

系统中常需要对一个术语概念或系统逻辑进行详细的解释，大段落的说明无可避免。此时在文案设计上可通过信息分类、分行、精简的方法，降低用户的阅读成本，提升操作效率。

### 告警提示

当说明信息超过 2 点，且描述文字过长时：

- 应使用符号进行分行说明
- 应以结果为导向说明原因
- 尽可能精简，避免过多使用重复的词汇与语句

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5oMVQKzYWX4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <ul class="image-description">
      <li>精简文字并分行说明，降低阅读成本</li>
      <li>精简多次出现且重复的名词</li>
    </ul>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DcfDQ4suVIoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <ul class="image-description">
      <li>避免使用过长的标题</li>
      <li>避免重复出现相同名词，例如 Alert template</li>
      <li>避免在一个段落中描述多段信息</li>
    </ul>
  </div>
</div>
