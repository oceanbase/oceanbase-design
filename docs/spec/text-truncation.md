---
group: Design Foundation
subGroup: Communication
title: Text Truncation
order: 21
---

When text exceeds the container and overflows, truncation or shortening is used—typically with an ellipsis (…).

## Design Principles

- **Clarity**: Use familiar symbols to communicate that text cannot be fully displayed
- **Expandable**: Always provide a way for users to view truncated content

## Truncation Methods

Two truncation methods are supported.

### End Truncation

When sentences or text cannot be fully displayed, use "..." at the end to omit characters.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qnswRozhkcAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Ensure all information fits within the container</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/29XZR75lnA0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid text overflowing the container</div>
  </div>
</div>

### Middle Truncation

When emails cannot be fully displayed, use middle truncation to show the full domain to users.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/6-v3SauTLhcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Keep the full email domain when truncating</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/oLOsRaGTO6UAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid truncating the email domain</div>
  </div>
</div>

## Truncation Anatomy

Use 3 ellipsis characters (…) to indicate truncated text.

### Character Limit

<strong>When truncating, keep at least 4 characters</strong>. In any string in the container, if there is not enough space for the full word or hyphenated word, consider abbreviating.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/q1MDTYexsgsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Keep at least 4 characters when truncating</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/q361Q7TioPUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid truncating "demo1.internal-el6.satellite" to "de…"</div>
  </div>
</div>

### Symbol Limit

Avoid truncating directly before or after punctuation when possible.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jEW8QIM5xukAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Truncate after the text</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RoddQq0baRAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid truncating right after punctuation; multiple symbols are hard to split</div>
  </div>
</div>

### Expandability

Ensure at least one way for users to view the full string.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Kuu4TrMjz7gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Show full info in a popover after truncation</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wDDRQrBDsEYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid not providing a way to view full content</div>
  </div>
</div>

## Usage Examples

### Navigation

Navigation text should be fully displayed; avoid abbreviations or truncated text in nav items.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/8lCrRLWhel8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Display navigation text in full</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/uOnlS5AK4mcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid truncating text in navigation</div>
  </div>
</div>

### Headers

When defining table column width, consider text length; do not truncate column headers.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/BL5wSrmq0RgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Header text should be fully displayed, not truncated</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Nb-MQ6UsyjgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid displaying headers with truncation</div>
  </div>
</div>

### Links

If the text is part of a link, the ellipsis should also be part of the link.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TBUYR7BhWzUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HpsIQYlc2EMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>

### Help Text

Help text that guides user behavior should be fully displayed; avoid truncation.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/hrzyRr4M9eEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RAMkTZtLYfkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>
