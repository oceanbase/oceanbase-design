---
group: Design
order: 2
title: Chart Semantic Palette Design Guide
---

> OBCharts semantic palette shares the same origin as OBUI functional colors. To avoid semantic ambiguity on the interface, semantic palette and functional colors use similar colors so charts and UI components integrate well.

## Color Definition

Semantic palette colors are adjusted from OBUI functional colors. Since the semantic palette needs a neutral color for "other," "remaining," "invalid," etc., Gray-5 from OBUI neutral palette is chosen for neutral semantic.

| OBUI Functional Color | No. | Value | Preview |
| --- | --- | --- | --- |
| Normal | Blue-5-default | 006AFF | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/J5BhTKQG1UQAAAAAAAAAAAAADv3-AQBr/original) |
| Success | Green-5-default | 0AC185 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hDPUTqp5D0EAAAAAAAAAAAAADv3-AQBr/original) |
| Warning-Low Risk | Gold-5-default | FFA21A | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/na4cSKjgWmYAAAAAAAAAAAAADv3-AQBr/original) |
| Warning-Medium Risk | Orange-5-default | FF7633 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/him2SKtrep0AAAAAAAAAAAAADv3-AQBr/original) |
| Error-High Risk | Red-5-default | FF1A1A | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/I09YQYgyMpsAAAAAAAAAAAAADv3-AQBr/original) |
| Error-Critical | Fuchsia-5-default | 8E2640 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/LPPBTpXKBVYAAAAAAAAAAAAADv3-AQBr/original) |
| Neutral | Grey-6 | 8592AD | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QFz0QpjHDQYAAAAAAAAAAAAADv3-AQBr/original) |

OBUI functional colors have high saturation and lightness and are unsuitable for charts. Saturation is reduced to 65–75 for softer colors. Neutral gray does not need saturation adjustment.

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HjITR6ncSUkAAAAAAAAAAAAADv3-AQBr/original" style="width: 432px" />

## Generate Color Scale

Using the above colors as base, generate a 10-step scale with ColorLab:

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/GbdgQagxaNMAAAAAAAAAAAAADv3-AQBr/original" style="width: 432px" />

## Define Palette

Step 7 lightness and saturation are close to the chart categorical palette and can serve as the semantic base. For neutral gray, step 7 is too harsh in charts; step 4 is chosen as base. Resulting semantic base palette:

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/nXm3TKjjjLgAAAAAAAAAAAAADv3-AQBr/original)

| Semantic Palette | Value | Name | No. | Semantic | Meaning |
| --- | --- | --- | --- | --- | --- |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/A1UUTqdajt0AAAAAAAAAAAAADv3-AQBr/original) | 9DAAC6 | Gray | 4 | Neutral | Default, other, remaining, disabled |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/JF3UQLMU4z4AAAAAAAAAAAAADv3-AQBr/original) | 3983ED | Blue | 7 | Neutral | Normal, default |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/LJwkRqOXqckAAAAAAAAAAAAADv3-AQBr/original) | 42C79B | Green | 7 | Positive | Success, safe, feasible, available |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/pspsSqsFZVwAAAAAAAAAAAAADv3-AQBr/original) | F9B048 | Yellow | 7 | Negative | Reminder, attention, warning, low risk (severity 1) |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/MPigSIef6nEAAAAAAAAAAAAADv3-AQBr/original) | F97A3B | Orange | 7 | Negative | Warning, serious, medium risk (severity 2) |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/xbRkS4Dl-XoAAAAAAAAAAAAADv3-AQBr/original) | E5363B | Red | 7 | Negative | Danger, failure, error (severity 3) |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Q0JxTLe8LyIAAAAAAAAAAAAADv3-AQBr/original) | 89273F | Fuchsia | 7 | Negative | Critical, high risk, outage (severity 4) |

## Application Examples

### Data Status

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VTN5QIxxOBQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Compatibility Overview</div>
  </div>
</div>
<br />
<div style="display: flex;">
  <div style="flex: 48">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9VjQS451mokAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Slow SQL Metrics</div>
  </div>
  <div style="flex: 27">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/UyA2RYne-mwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Resource Utilization</div>
  </div>
</div>
<br />
<div style="display: flex;">
  <div style="flex: 29">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/A0EURoKFHY0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Backup Task Status</div>
  </div>
  <div style="flex: 48">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/AvhzQYaFvGQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Migration Task Status</div>
  </div>
</div>

### Anomaly Marking

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/C58-RbypfJcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Anomaly Data Point Marking</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/MtSZTY-YrLcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Anomaly Detection Marking</div>
  </div>
</div>
<br />
<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KrdvS7IctOoAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center">CPU Usage</div>
</div>
<br />
<div style="width: 50%">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wfgeSJlUTqMAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center">CPU Consumption Ratio</div>
</div>

<style>
table tr td img {
  max-width: 100%;
  height: 32px;
}
</style>
