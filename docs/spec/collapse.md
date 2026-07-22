---
group: Design Foundation
subGroup: Interaction
title: Information Collapse
order: 15
---

When space is limited on a page but complex, same-type, collapsible information appears, use Collapse to integrate and collapse information, freeing page space and reducing scrolling.

## Design Principles

- <strong>Clear</strong>: Help users focus on page priorities and provide a clear reading order by collapsing less-used, lower-priority information
- <strong>Expandable</strong>: Provide expand/collapse functionality for information and containers, enhancing page space and capacity, and reducing unnecessary vertical scrolling

## Information Collapse

Use titles as guides to collapse non-essential information. Use cases include: cards, non-default config items, lists, etc.

- Content can be summarized by the title
- When collapsed, title position stays fixed; only content is folded

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/yTaVSKVQ3v8AAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    1. Icon<br />
    2. Title<br />
    3. Content
  </div>
</div>

### Icon

Use a solid arrow (Gray 6) as the collapse icon, placed to the left of the title, indicating expand/collapse state.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/FDqjT4Lz02gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Arrow points right when collapsed</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4z3qS7PO9csAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Arrow points down when expanded</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/SCOEQKiw5CwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid upward arrow when collapsed; avoid using semantic colors</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9zEJRrIieogAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">If config does not require manual start/stop and loads by default, use collapse instead of Switch</div>
  </div>
</div>

### Title

Use nouns as titles to summarize the expanded content. Keep titles short and clear.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/EYWUSbdd224AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Use nouns as titles</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/V0ddRq230jAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid long verb phrases</div>
  </div>
</div>

### Content Area

Collapsed content can be plain text, forms, charts—no restrictions.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TAIVQptdbboAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Collapsed content as text</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2hJTSIDBngUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Collapsed content as config items</div>
  </div>
</div>

## Button Collapse

Use specific actions as guides to collapse text, card containers, etc.

- Button guides by action; no need to summarize content
- Button position adapts with content when collapsed

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HaVwTK-1-nEAAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    1. Icon (optional)<br />
    2. Action text
  </div>
</div>

### Icon (Optional)

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/zsunRa85TQIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">When collapsing plain text, button follows text end; no icon needed</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DNolTK6EwwgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid using icons within text</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jM6pQ7NGVHIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">When collapsing card content, show icon to the left of action text</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9QPRRbaKJqYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid icon to the right of action text; may confuse with dropdown interaction</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Ucf2RKei5SMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Icon direction should match the text</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/vqauSYJkwn4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid icon interaction inconsistent with text</div>
  </div>
</div>

### Action Text

Text should match icon direction and guide by action.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wXcXQY-JYOkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Text, icon direction, and subsequent interaction should be consistent</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aO3sSYVdDCoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid using content summary as text</div>
  </div>
</div>

## Usage Format

Format guidelines for database scenarios.

### Alignment

Expanded content text should be left-aligned with the title.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3JCnS5ZF1B8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OWXERas2h9gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid aligning text with icon</div>
  </div>
</div>

## Usage Examples

Typical scenarios for Collapse in database contexts.

### List

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RuvyR4cAPPUAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

### Table

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OyIsSbaC48IAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>
