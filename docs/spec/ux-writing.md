---
group: Design Foundation
subGroup: Communication
title: UX Writing Best Practices
order: 18
---

Good copy should start from the user's perspective, capture their core needs, effectively communicate product features and workflows, and help users complete tasks faster.

## Design Principles

- **Clarity**: Use familiar language, provide explanations for technical terms, and give concrete action guidance
- **Conciseness**: Use brief and accurate sentences, avoid repeating the same words
- **Consistency**: Keep the same operations, features, and proper nouns consistent across contexts

## Setting User Expectations for Actions

In database products, most operations involve modifying, removing, or updating data, which can significantly impact business. Therefore, compared to other systems, operations require more caution. Providing clear expectations and prompts from the user's perspective is especially important. Clearly stating potential risks helps users reduce errors and avoid unnecessary losses.

### Action Confirmation

In secondary confirmations triggered by button clicks, the copy should focus on explaining the subsequent impact of the action and setting user expectations, rather than merely repeating the operation question.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7yfJRLIie0QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Clearly describe the impact after the action</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xC85TbAWvo4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid only repeating action confirmation without stating risks</div>
  </div>
</div>

## User Value Oriented

When guiding users to take an action, the copy should be user-value oriented, telling users "what you can gain from it" and providing motivation for action—rather than only stating "what we need you to do" or "the current status is...".

### Empty State

When page content is empty and users need to take action to proceed, the copy should:

- Provide motivation for action
- Explain the value users can gain after taking action
- Use vivid language to enhance guidance
- Maintain continuity between title, description, and button copy

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/o31_TLAW3IcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <ul class="image-description">
      <li>Guide users with friendly, clear action prompts</li>
      <li>Emphasize value after use, not current status</li>
    </ul>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/AxlARpSJ4n8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <ul class="image-description">
      <li>Avoid repeating actions multiple times without stating value</li>
      <li>Avoid excessive description of current status</li>
    </ul>
  </div>
</div>

:::info

💡 Button copy guidelines:

- Start with a verb, e.g., Create Database
- Keep copy brief, 1–2 words
- Capitalize the first letter of each word
- Use guiding language
- For prepositions in button copy:
  - Preposition at end: capitalize, e.g., Save As
  - Preposition in middle: lowercase, e.g., Print to File

:::

### Help Documentation

When providing additional documentation for complex configurations, link copy should be oriented toward "what users can gain" rather than only providing the document name.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3TQbRZNM81IAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Use questions to communicate, telling users they can get "create sync task" related info after clicking</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/A7XUQJTdJ7IAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid using document names as link copy</div>
  </div>
</div>

## Avoid Providing "Invalid" Information

When users take action on a page, the system usually provides guidance to indicate the accuracy of the current action.

### Placeholder Text

Placeholder text is an area for default guidance during form input. To improve effectiveness:

- Avoid repeating the label text
- Provide guidance/explanation for the input behavior
- Use sentence case: capitalize only the first word and other words that require capitalization

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2kLkTJZfS9QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Placeholder text should provide input guidance when possible</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/y9HrRKDwjREAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid using the same copy as the label</div>
  </div>
</div>

### Empty Search Results

When user actions (search/click) return empty data, the system provides an explanation. The copy should:

- Clearly describe [what data] is empty and why, e.g., No instances have been created
- Provide action guidance to change the empty state when possible (optional), e.g., Create instance

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/hwfKTLFMg5oAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <ul class="image-description">
      <li>Explain why the returned data is empty</li>
      <li>Provide action guidance to get data</li>
    </ul>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qq-ZRI0bj6cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <ul class="image-description">
      <li>Avoid vague copy</li>
      <li>Avoid not providing guidance on how to improve</li>
    </ul>
  </div>
</div>

## Keep Language Concise and Readable

When designing components and page interactions, the conciseness of component language is especially important. Most components have limited space and cannot accommodate long text. When choosing components, focus on the length of text inside the component, keep it concise and accurate, and avoid unnecessary verbs and descriptions.

### Tags

Tags are often used to communicate status, attributes, or additional information. When using this component:

- Do not add punctuation after tag text
- Avoid repeating known information
- Avoid line breaks
- If the text is too long, do not use the Tag component

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/gt7tQKHtmpsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Tag content should be short and clear</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/yS_ORqGMV4AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid using tags for overly long text</div>
  </div>
</div>

### Table Headers

- Present with short nouns, avoid verb phrases
- Avoid explaining data, format, or terms directly in the header
- Do not add articles or punctuation to headers; use title case

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/v9-GQI85MEoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Use icons to show additional explanation</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pIwLQrQJ_9AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid explaining terms directly in the header</div>
  </div>
</div>

## Globally Consistent Translation Standards

Terminology, similar operation vocabulary, and sentence structure should be unified across product features to minimize user understanding and learning cost.

### System Messages

The system should give timely feedback for user actions. Feedback has failure, success, and warning states. Use the format "verb + noun + success", e.g., [Create data source successfully].

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DoMPQoCKVcwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/6HjrT6SeKkIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid starting with adverbs</div>
  </div>
</div>

## Make "Motivation" Clear

For many new configurations, users do not understand the logic and value. Copy needs to clearly tell users what each option on the product can do and why the new feature is worth trying/using.

### Configuration Description

When the configuration title cannot clearly explain the use case, use help text to describe the user value after configuring the feature.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/lQ5SRqmFo3gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Communicate the functional value of "Project" to users</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/lsIfQ6tsc8cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid using titles that summarize user action rather than action value</div>
  </div>
</div>

## Don't Make Users Read "Essays"

Systems often need to explain terms or logic in detail, and long paragraphs are unavoidable. In copy design, use information categorization, line breaks, and conciseness to reduce reading cost and improve operation efficiency.

### Alert Prompts

When there are more than 2 points and the description is long:

- Use symbols for line breaks
- Explain causes with results in mind
- Be concise, avoid redundant words and sentences

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5oMVQKzYWX4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <ul class="image-description">
      <li>Keep text concise and use line breaks to reduce reading cost</li>
      <li>Simplify repeated nouns</li>
    </ul>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DcfDQ4suVIoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <ul class="image-description">
      <li>Avoid overly long titles</li>
      <li>Avoid repeating the same noun, e.g., Alert template</li>
      <li>Avoid describing multiple pieces of information in one paragraph</li>
    </ul>
  </div>
</div>
