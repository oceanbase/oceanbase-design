---
group: Design Foundation
title: Typography
order: 6
---

Users understand content and complete tasks through text. A well-designed typography system greatly improves reading experience and work efficiency. Font selection should follow principles of aesthetics, clarity, and usability to ensure content readability and page tidiness.

## Principles

OBUI typography principles are mainly divided into three points.

### Clear Details

When choosing fonts, pay attention to distinguishing similar glyphs, such as the letter "I", "l", and the number "1", to avoid affecting readability.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TuH5SJIWFR8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Fonts should clearly distinguish the number 1, letter i, and l</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aQMRRLiM60AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Avoid fonts where 1, i, and l are too similar</div>
  </div>
</div>

### Multiple Weights and Styles

Fonts with multiple weights, styles, and widths give designers more flexibility and help distinguish information hierarchy in practice.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/nhdBQp6uk5UAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Different weights help designers distinguish information hierarchy</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-wKESKe1oDIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Using only one weight makes it hard to distinguish hierarchy</div>
  </div>
</div>

### Monospace Fonts

For data display, use monospace fonts when possible to ensure page tidiness and readability.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/77uUQpRYq7AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Monospace fonts ensure consistent width for same-digit data</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/27lEQqKoI6oAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Variable-width fonts can cause misunderstanding due to inconsistent width</div>
  </div>
</div>

## Font Styles

In the OBUI font family, the primary Chinese font uses the system default; the primary English font uses the open-source Inter. Inter has clean lines and excellent readability, and as a variable font, it adapts to different screen sizes and resolutions.

### Chinese Font Family

Primary font: PingFang (Apple system font)

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ED-FSbpA5-8AAAAAAAAAAAAADv3-AQBr/original)

Fallback fonts (when primary is not supported, use in this order):

    -apple-system, Noto Sans, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

### English Font Family

Primary font: Inter

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Nv0eS7ayZM8AAAAAAAAAAAAADv3-AQBr/original)

Fallback fonts (when primary is not supported, use in this order):

    Inter, Noto sans, sans-serif, Roboto,Open Sans, Segoe UI, Helvetica Neue, Helvetica, Arial, Apple Color Emoji;

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WruIQoYSmOcAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Gb9ATZKXBnUAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/iPW7S6n6SicAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/rnPDSp3pn2sAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9vtmQrFH9gEAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

### Code Font Family

Primary font: Consolas

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ug8JQL9l8s8AAAAAAAAAAAAADv3-AQBr/original)

Fallback fonts (when primary is not supported, use in this order):

    Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;

### Numeric Font

Data tables are the main use case. For easier data comparison, use the monospace font Helvetica Neue.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/J_Q4SYrqk3kAAAAAAAAAAAAADv3-AQBr/original)

## Font Size and Line Height

International web accessibility standards recommend: line-height = font size × 1.5. In OB practice, a fixed 1.5 ratio causes line height to grow with font size. To keep spacing consistent across sizes, OB uses font size + 8 for line height (font + 8 = line-height), maintaining consistent breathing space.

**For convenience, Chinese and English share the same scale, compatible in both display scenarios.**

| Font Size | Line Height | Use Case                          |
| --------- | ----------- | --------------------------------- |
| **32px**  | 40px        | Extra large, for special emphasis |
| **24px**  | 32px        | Page container primary title      |
| **20px**  | 28px        | Page container secondary title    |
| **16px**  | 24px        | Card title, container title       |
| **14px**  | 22px        | Body text, descriptive text       |
| **12px**  | 20px        | Hint, auxiliary text              |

## Font Weight

Font weights differ between Chinese and English.

### Chinese

Use regular and medium, corresponding to 400 and 500 in code.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/y4ZVT5bljk4AAAAAAAAAAAAADv3-AQBr/original)

### English

Use regular and semibold, corresponding to 400 and 600 in code.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/mF9SQbdAMdkAAAAAAAAAAAAADv3-AQBr/original)

### Numbers

Main use case is data tables; no hierarchy distinction. Use only regular (400).

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/iGOOQYSwfo8AAAAAAAAAAAAADv3-AQBr/original)

## Usage Examples

Best practices for font size and weight in products.

### Primary Title

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7lzBRpvAackAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Page container primary title: 24px, Chinese weight 500, English weight 600</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/LsLIQ4YiJwIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Do not use 32px for primary title; the gap with secondary is too large</div>
  </div>
</div>

### Secondary Title

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pIMRTJ3XFDMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Page container secondary title: 20px, Chinese weight 500, English weight 600</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qa3bTI-i3vYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Secondary title should not use the same size as primary; hierarchy would be lost</div>
  </div>
</div>

### Table Header

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/6sBCTrts6GYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Table header: use 400 for both Chinese and English</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TIsiSIQkGxgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Table header should not use 500 or 600</div>
  </div>
</div>
