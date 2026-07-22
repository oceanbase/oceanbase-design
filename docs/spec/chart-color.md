---
group: Design Foundation
subGroup: Color
title: Chart Color
order: 10
---

Charts are visualization tools for users to communicate with complex data. Charts can use color to distinguish different data types or highlight key information.

## Color Principles

### Concept Delivery

OB Charts color definitions aim to convey OceanBase's tech-forward and vibrant brand tone. Considering various complex data application scenarios and accessibility standards, OB Charts provides a high color distinguishability and out-of-the-box chart palette.

### Design Methods

Palette design considers brand tone, interface harmony, color distinguishability, readability for visually impaired users, and flexibility for complex data scenarios. The palette should satisfy the following principles:

**Color Harmony:** Charts occupy large areas in the interface. Overly saturated chart colors cause user fatigue and are unsuitable for long reading. Chart colors should be soft and balanced.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/8i3OQLam0ygAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Use colors with comfortable lightness and saturation</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/g40jRZMg02QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Avoid colors with overly high lightness and saturation</div>
  </div>
</div>

**Color Distinguishability:** Color distinguishability refers to the difference between colors. It is easy with few colors, but when the number of colors is ≥10, similar colors become hard to distinguish. Improve distinguishability by widening hue gap and light-dark gap.

In CIELab color space, L value is generally between 35–85. Too high L is too bright, too low L is too dark; both are unfavorable for reading.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/00R5SZxZfYoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">L value 35–85, moderate color brightness</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OqwHTpGSP-cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Too high or too low L value is unfavorable for reading</div>
  </div>
</div>

**Accessible Readability:** Visually impaired users cannot accurately identify hue and rely mainly on light-dark contrast. Use tools like ColorLab to simulate visually impaired display and verify palette readability.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/eVN9RZOq5fAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Alternating light and dark; visually impaired users can distinguish</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/LSXfTKi-8WsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Similar lightness; visually impaired users cannot distinguish</div>
  </div>
</div>

In addition to the above principles, OBCharts categorical palette incorporates brand colors. It uses adjacent color and split-complementary color schemes to define the initial palette, then refines lightness and saturation. See [Chart Classification Palette Design Guide](/docs/blog/chart-classification-palette-design-guide). OBCharts semantic palette extends from OBUI functional colors. OBUI functional colors have high saturation and lightness and are unsuitable for charts, so saturation and lightness are adjusted to derive extended colors. A 10-step scale is generated from these extended colors, and a set with saturation similar to the categorical palette is selected as the semantic palette base. See [Chart Semantic Palette Design Guide](/docs/blog/chart-semantic-palette-design-guide).

## Categorical Palette

Categorical palette is used for charts showing different object data. One color represents one value to distinguish types. Commonly used in line charts, bar charts, pie charts, donut charts, etc. Categorical palette incorporates OceanBase brand colors to convey OB's tech-forward and vibrant brand tone.

### Base Palette

Base palette has 10 colors. When legend count ≤10, use the base palette in order. Palette parameters:

| No. | Color | Name | HEX | HSL |
| --- | --- | --- | --- | --- |
| 1 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kYiURIajuBYAAAAAAAAAAAAADv3-AQBr/original) | Azure Blue | #3D88F2 | H:215 S:75 B:95 |
| 2 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/iDTDRpmJo8QAAAAAAAAAAAAADv3-AQBr/original) | Emerald Green | #41D9A6 | H:160 S:70 B:85 |
| 3 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/3LLhRI-vrHEAAAAAAAAAAAAADv3-AQBr/original) | Lemon Yellow | #FAC357 | H:40 S:65 B:98 |
| 4 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/-yH5RZk8d7wAAAAAAAAAAAAADv3-AQBr/original) | Indigo Blue | #547199 | H:215 S:45 B:60 |
| 5 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/c41rTLokp_IAAAAAAAAAAAAADv3-AQBr/original) | Sky Blue | #79BFF2 | H:205 S:50 B:95 |
| 6 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kLjXQZsQPe8AAAAAAAAAAAAADv3-AQBr/original) | Grass Green | #4D997F | H:160 S:50 B:60 |
| 7 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ywWoRoOsYEQAAAAAAAAAAAAADv3-AQBr/original) | Bean Green | #88CC66 | H:100 S:50 B:80 |
| 8 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/658KSJbQz2gAAAAAAAAAAAAADv3-AQBr/original) | Lilac | #B3749E | H:320 S:35 B:70 |
| 9 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/2LrIRKfYwXAAAAAAAAAAAAAADv3-AQBr/original) | Coral | #E6987F | H:15 S:45 B:90 |
| 10 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/41r2TYXZQvoAAAAAAAAAAAAADv3-AQBr/original) | Sandalwood | #8C675B | H:15 S:35 B:55 |

### Extended Palette

For scenarios with >10 legends, use the extended palette. Extended palette has 20 colors: base colors adjusted to 60% opacity, interleaved with base colors for alternating light and dark. When legend count >10, use extended palette in order. Palette parameters:

| No. | Color | Name | HEX | HSL |
| --- | --- | --- | --- | --- |
| 1 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/egkJRL9xU3wAAAAAAAAAAAAADv3-AQBr/original) | Azure Blue | #3D88F2 | H:215 S:75 B:95 |
| 2 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FlaZT5y4R_YAAAAAAAAAAAAADv3-AQBr/original) | Light Azure | #8BB8F7 | H:215 S:44 B:97 |
| 3 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0NNMRZNPsNoAAAAAAAAAAAAADv3-AQBr/original) | Emerald Green | #41D9A6 | H:160 S:70 B:85 |
| 4 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ktgLTo35ik0AAAAAAAAAAAAADv3-AQBr/original) | Light Emerald | #8DE8CA | H:160 S:39 B:91 |
| 5 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FCMWQJ2nGW0AAAAAAAAAAAAADv3-AQBr/original) | Lemon Yellow | #FAC357 | H:40 S:65 B:98 |
| 6 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/1Tu8S4kiTasAAAAAAAAAAAAADv3-AQBr/original) | Light Lemon | #FCDB9A | H:40 S:39 B:99 |
| 7 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Xl3nS7YezLkAAAAAAAAAAAAADv3-AQBr/original) | Indigo Blue | #547199 | H:215 S:45 B:60 |
| 8 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/b02PRZz66BUAAAAAAAAAAAAADv3-AQBr/original) | Light Indigo | #98AAC2 | H:215 S:22 B:76 |
| 9 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kl12SaHxY_QAAAAAAAAAAAAADv3-AQBr/original) | Sky Blue | #79BFF2 | H:205 S:50 B:95 |
| 10 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Igc5QY2Y6x8AAAAAAAAAAAAADv3-AQBr/original) | Light Sky Blue | #AFD9F7 | H:205 S:29 B:97 |
| 11 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/k8vcQa89gFwAAAAAAAAAAAAADv3-AQBr/original) | Grass Green | #4D997F | H:160 S:50 B:60 |
| 12 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/7hoJRqUSddQAAAAAAAAAAAAADv3-AQBr/original) | Light Grass | #94C2B3 | H:160 S:24 B:76 |
| 13 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/dOMQS4n-z88AAAAAAAAAAAAADv3-AQBr/original) | Bean Green | #88CC66 | H:100 S:50 B:80 |
| 14 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/pZrLQ4jJJMwAAAAAAAAAAAAADv3-AQBr/original) | Light Bean Green | #B7E0A3 | H:100 S:27 B:88 |
| 15 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/tdJ0RIScyVwAAAAAAAAAAAAADv3-AQBr/original) | Lilac | #B3749E | H:320 S:35 B:70 |
| 16 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/4YcbQ6w-URoAAAAAAAAAAAAADv3-AQBr/original) | Light Lilac | #D1ACC5 | H:320 S:18 B:82 |
| 17 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QxzCQoEnOdwAAAAAAAAAAAAADv3-AQBr/original) | Coral | #E6987F | H:15 S:45 B:90 |
| 18 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/dzGoR7FDv0cAAAAAAAAAAAAADv3-AQBr/original) | Light Coral | #F0C1B2 | H:15 S:26 B:94 |
| 19 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZktnS6FT68MAAAAAAAAAAAAADv3-AQBr/original) | Sandalwood | #8C675B | H:15 S:35 B:55 |
| 20 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ovRoQoQfIGMAAAAAAAAAAAAADv3-AQBr/original) | Light Sandalwood | #BAA49D | H:15 S:16 B:73 |

## Semantic Palette

Used in charts for status or metric statistics, e.g., backup task status donut, migration task status mini chart, or resource utilization charts with semantic meaning.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/FrxkRJiBiRMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Backup Task Donut</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ECEyT75OVo8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Migration Task Mini Bar</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/J31qSKfylaIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Resource Utilization Chart</div>
  </div>
</div>

Semantic palette shares the same origin as OBUI functional colors. To avoid semantic ambiguity, semantic palette uses similar colors to functional colors so charts and UI components integrate well and stay consistent.

### Base Palette

Gray and blue indicate "neutral" for "default," "normal," "remaining," etc. Green indicates "positive" for "success," "safe," etc. Other colors indicate "negative" for "warning," "failure," "risk," etc.

| Color | Value | Name | No. | Semantic | Meaning |
| --- | --- | --- | --- | --- | --- |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0ojQTK5yz3cAAAAAAAAAAAAADv3-AQBr/original) | #9DAAC6 | Gray | 5 | Neutral | Default, other, remaining, disabled |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/IHG_QLpD1_QAAAAAAAAAAAAADv3-AQBr/original) | #3983ED | Blue | 7 | Neutral | Normal, default |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/_-wlQKl6mLcAAAAAAAAAAAAADv3-AQBr/original) | #42C79B | Green | 7 | Positive | Success, safe, feasible, available |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/220QSbkaJH0AAAAAAAAAAAAADv3-AQBr/original) | #F9B048 | Yellow | 7 | Negative | Reminder, attention, warning, low risk (severity 1) |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FjDZRL2dzQYAAAAAAAAAAAAADv3-AQBr/original) | #F97A3B | Orange | 7 | Negative | Warning, serious, medium risk (severity 2) |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/HgB5Sq3oMl0AAAAAAAAAAAAADv3-AQBr/original) | #E5363B | Red | 7 | Negative | Danger, failure, error (severity 3) |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/xWm_TosZTAYAAAAAAAAAAAAADv3-AQBr/original) | #89273F | Fuchsia | 7 | Negative | Critical, high risk, outage (severity 4) |

### Extended Palette

Extended colors are based on semantic base palette. A 10-step scale is generated and a set with saturation similar to the categorical palette is selected as the semantic palette base.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/lteARLPrI2kAAAAAAAAAAAAADv3-AQBr/original)

## Usage Examples

Best practices and rules for chart colors.

### Categorical Palette

Palette order follows alternating light-dark. Apply by priority; do not use out of order.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jr1cT48tNkYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Categorical base palette should be used by priority</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/B5-jRbYgMJgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Categorical base palette should not be used out of order</div>
  </div>
</div>

### Semantic Palette

Use in charts with clear semantic status or metric statistics. Do not mix with categorical palette. Red, orange, and other error colors should not be used for legends in regular charts.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pd_uQbGP52kAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Charts with clear semantics can use semantic palette</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wFxEQKZSUb8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Do not mix semantic and categorical palettes; red means error or warning, not for regular charts</div>
  </div>
</div>

<style>
table tr td img {
  max-width: 100%;
  height: 32px;
}
</style>
