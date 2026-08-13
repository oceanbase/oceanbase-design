---
group: Design Foundation
subGroup: Color
title: System Color
order: 9
---

Color in products helps users build brand awareness and plays a role in distinguishing information hierarchy, conveying status, and building consistency.

## Color Principles

### Concept Delivery

OBUI color definitions aim to convey OceanBase's tech-forward, vibrant, focused, and caring brand characteristics and help users build brand awareness. Considering various color application scenarios and accessibility standards, OBUI provides a well-defined, out-of-the-box official palette.

### Design Methods

System colors are divided into theme colors, functional colors, and neutral colors. Theme colors are adjusted from OceanBase brand colors by reducing lightness to meet international contrast standards in scenarios like buttons and text links;

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/5JDrRImHnmYAAAAAAAAAAAAADv3-AQBr/original)

Neutral colors are tinted to align hue with theme colors. Using a quadratic Bézier curve, 8 levels are selected across contrast ranges. Low-contrast colors suit backgrounds, fills, borders, etc.; high-contrast colors suit primary and secondary text.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/9xrlSZ6Ay54AAAAAAAAAAAAADv3-AQBr/original)

## Theme Colors

OBUI theme colors include gradient colors and info colors.

### Gradient Colors

Gradient colors are two-color gradients, used for primary buttons. Default gradient is Gradient1, HEX #002BFF～#0080FF;

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-29 上午10.58.06.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/4v89Q47F968AAAAAAAAAAAAADv3-AQBr/original)-Gradient1 | #002BFF～#0080FF | H：230 S：100 L：50～H：210 S：100 L：50 | default |
| ![截屏2023-03-29 上午11.04.00.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/BM3nS6POGiAAAAAAAAAAAAAADv3-AQBr/original)-Gradient2 | #1AA0FF～#1A53FF | H：205 S：100 L：55～H：225 S：100 L：55 | hover |
| ![截屏2023-03-29 上午11.04.30.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0lI-TbrR0d8AAAAAAAAAAAAADv3-AQBr/original)-Gradient3 | #0060E6～0013E6 | H：215 S：100 L：45～H：235 S：100 L：45 | click |
| ![截屏2023-03-29 上午11.10.56.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jSHoSaU_j6YAAAAAAAAAAAAADv3-AQBr/original)-Gradient4 | #99D5FF～#99B3FF | H：205 S：100 L：80～H：225 S：100 L：80 | loading |

### Info Colors

Info colors are solid and are the most core, high-frequency colors in the product. Used to emphasize information and guide actions, they largely define the product's tone and style. Applied in text buttons, tabs, radio, etc. OBUI default info color is Blue-5, HEX #006AFF.

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-27 下午5.34.23.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/gV39T6JHJFoAAAAAAAAAAAAADv3-AQBr/original)-Blue1 | #EAF1FF | H：220 S：100 L：96 | fill |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/V1q9S4Kx_vUAAAAAAAAAAAAADv3-AQBr/original)-Blue2 | #D6E4FF | H：220 S：100 L：92 | tag border |
| ![截屏2023-03-27 下午5.40.36.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/lm9YTrIetKMAAAAAAAAAAAAADv3-AQBr/original)-Blue3 | #B3CCFF | H：220 S：100 L：85 | border |
| ![截屏2023-03-27 下午5.42.25.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/eIZQQoFisYsAAAAAAAAAAAAADv3-AQBr/original)-Blue4 | #5189FB | H：220 S：95 L：65 | hover |
| ![截屏2023-03-27 下午5.44.06.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/HN5WQLa7PGQAAAAAAAAAAAAADv3-AQBr/original)-Blue5 | #006AFF | H：215 S：100 L：50 | default |
| ![截屏2023-03-27 下午5.45.43.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/zmQYQayfyt8AAAAAAAAAAAAADv3-AQBr/original)-Blue6 | #004CE6 | H：220 S：100 L：45 | click |

## Functional Colors

Functional colors express special semantics and represent clear information and status. For database products, OBUI defines 5 functional colors: success (reminder), warning (low risk), warning (medium risk), error (high risk), and error (critical).

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RTV3T5Yaa5AAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/k9xkTKqpniMAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Xvt2SLmzXLsAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NVpgTLDu82wAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Wup_QZtfpMUAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

### Success Color

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.05.17.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kEjtRp3QpAkAAAAAAAAAAAAADv3-AQBr/original)-Green1 | #EEF8F5 | H：160 S：40 L：95 | fill |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/5RpyQJkbsnQAAAAAAAAAAAAADv3-AQBr/original)-Green2 | #DBF0E9 | H：160 S：40 L：90 | tag border |
| ![截屏2023-03-28 下午4.04.35.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/zixvSbpJNiYAAAAAAAAAAAAADv3-AQBr/original)-Green3 | #B3E6D5 | H：160 S：50 L：80 | border |
| ![截屏2023-03-28 下午3.57.47.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/tjZWRrF5D5wAAAAAAAAAAAAADv3-AQBr/original)-Green4 | #4DCCA2 | H：160 S：55 L：55 | hover |
| ![截屏2023-03-28 下午4.01.23.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZCX-RIdJpW4AAAAAAAAAAAAADv3-AQBr/original)-Green5 | #0AC185 | H：160 S：90 L：40 | default |
| ![截屏2023-03-28 下午4.02.48.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/yDlZToZa2sQAAAAAAAAAAAAADv3-AQBr/original)-Green6 | #00B378 | H：160 S：100 L：35 | click |

### Warning Color - Low Risk

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.13.42.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/LQ1wTZRsNlgAAAAAAAAAAAAADv3-AQBr/original)-Gold 1 | #FFF5E5 | H：36 S：100 L：95 | fill |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/PTaERp_POuMAAAAAAAAAAAAADv3-AQBr/original)-Gold 2 | #FFE7C2 | H：36 S：100 L：88 | tag border |
| ![截屏2023-03-28 下午4.15.44.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/BATrSLwQzvsAAAAAAAAAAAAADv3-AQBr/original)-Gold 3 | #FFD699 | H：36 S：100 L：80 | border |
| ![截屏2023-03-28 下午4.17.01.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/3s4BTY_apzgAAAAAAAAAAAAADv3-AQBr/original)-Gold 4 | #FFC166 | H：36 S：100 L：70 | hover |
| ![截屏2023-03-28 下午4.18.34.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hK3qRK8kjUAAAAAAAAAAAAAADv3-AQBr/original)-Gold 5 | #FFA21A | H：36 S：100 L：55 | default |
| ![截屏2023-03-28 下午4.17.43.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/EQFtS4HeINMAAAAAAAAAAAAADv3-AQBr/original)-Gold 6 | #E68800 | H：36 S：100 L：45 | click |

### Warning Color - Medium Risk

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/pPI0S4_S3REAAAAAAAAAAAAADv3-AQBr/original)-Orange1 | #FFEEE5 | H：20 S：100 L：95 | fill |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/9c1rSYbGxZ8AAAAAAAAAAAAADv3-AQBr/original)-Orange2 | #FFDDCC | H：20 S：100 L：90 | tag border |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QoS-SIvDjaMAAAAAAAAAAAAADv3-AQBr/original)-Orange3 | #FFCCB3 | H：20 S：100 L：85 | border |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/OWgvTIZnceIAAAAAAAAAAAAADv3-AQBr/original)-Orange4 | #FF9866 | H：20 S：100 L：70 | hover |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/xuCeQryvYLIAAAAAAAAAAAAADv3-AQBr/original)-Orange5 | #FF7633 | H：20 S：100 L：60 | default |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jnVGRaE4dm0AAAAAAAAAAAAADv3-AQBr/original)-Orange6 | #E64B00 | H：20 S：100 L：45 | click |

### Error Color - High Risk

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.19.56.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hxHqT77y5X0AAAAAAAAAAAAADv3-AQBr/original)-Red1 | #FFEBEB | H：360 S：100 L：96 | fill |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/0rcXR7MoVqMAAAAAAAAAAAAADv3-AQBr/original)-Red2 | #FFD6D6 | H：360 S：100 L：92 | tag border |
| ![截屏2023-03-28 下午4.20.53.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/PBygRItWOyUAAAAAAAAAAAAADv3-AQBr/original)-Red3 | #FFB3B3 | H：360 S：100 L：85 | border |
| ![截屏2023-03-28 下午4.21.37.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Cuf0ToltiswAAAAAAAAAAAAADv3-AQBr/original)-Red4 | #FF7575 | H：360 S：100 L：73 | hover |
| ![截屏2023-03-28 下午4.23.20.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/E49XQYJEWyoAAAAAAAAAAAAADv3-AQBr/original)-Red5 | #F93939 | H：360 S：94 L：60 | default |
| ![截屏2023-03-28 下午4.22.15.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/qu8ER4fBLPwAAAAAAAAAAAAADv3-AQBr/original)-Red6 | #CC0000 | H：360 S：100 L：40 | click |

### Error Color - Critical

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/_C33RKlNM4EAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia1 | #FAEBEF | H：345 S：58 L：95 | fill |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/J_dyQKh98-cAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia2 | #F4D7DE | H：345 S：58 L：90 | tag border |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/1ZIPQaVk1BsAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia3 | #E9AFBD | H：345 S：58 L：80 | border |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/EmSoTIJ9_J8AAAAAAAAAAAAADv3-AQBr/original)-Fuchsia4 | #CF4A6B | H：345 S：58 L：55 | hover |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/H9ZqS78wL7UAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia5 | #8E2640 | H：345 S：58 L：35 | default |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/qJ83Q7pUkroAAAAAAAAAAAAADv3-AQBr/original)-Fuchsia6 | #501624 | H：345 S：58 L：20 | click |

## Neutral Colors

For a harmonious brand tone and color feel, OBUI neutral colors incorporate brand blue. Mainly used for background fills, component borders, placeholder text, and default text.

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xk5jSr8PcggAAAAAAAAAAAAADv3-AQBr/original" style="width: 350px">

### Text Colors

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.39.05.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/vv79S4DauLIAAAAAAAAAAAAADv3-AQBr/original)-Gray8 | #132039 | H：220 S：50 L：15 | Primary text: page container titles, form titles, body |
| ![截屏2023-03-28 下午4.35.51.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/KaV6TZqf5eQAAAAAAAAAAAAADv3-AQBr/original)-Gray7 | #5C6B8A | H：220 S：20 L：45 | Secondary text: table headers, unselected Tab, basic info titles |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ifTpRrpP4ooAAAAAAAAAAAAADv3-AQBr/original)-Gray6 | #8592AD | H：220 S：20 L：60 | Tertiary text: form hints |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/mDKRTaFYV30AAAAAAAAAAAAADv3-AQBr/original)-Gray5 | #C1CBE0 | H：221 S：33 L：82 | Quaternary text: Input placeholder, disabled text |

### Border Colors

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.34.00.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/1UmESq56mWQAAAAAAAAAAAAADv3-AQBr/original)-Gray4 | #CDD5E4 | H：220 S：30 L：85 | Primary border: button stroke, component border |
| ![截屏2023-03-28 下午4.31.51.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/j8qnRJIYt-0AAAAAAAAAAAAADv3-AQBr/original)-Gray3 | #E2E8F3 | H：220 S：40 L：92 | Secondary border: divider |

### Fill Colors

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.35.51.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/tlrpTKZdXocAAAAAAAAAAAAADv3-AQBr/original)-Gray7 | #5C6B8A | H：220 S：20 L：45 | Linear icon color |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/d1CmQ4x_RWsAAAAAAAAAAAAADv3-AQBr/original)-Gray6 | #8592AD | H：220 S：20 L：60 | Switch off color |
| ![截屏2023-03-28 下午4.31.51.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kotzR7tCCm4AAAAAAAAAAAAADv3-AQBr/original)-Gray3 | #E2E8F3 | H：220 S：40 L：92 | Progress bar, slider, Steps default,<br />Rating default, Skeleton |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/XCLtRqqlBkMAAAAAAAAAAAAADv3-AQBr/original)-Gray2 | #F3F6FC | H：220 S：60 L：97 | Page background, component disabled (except Switch),<br />Dropdown hover, Segmented |
| ![截屏2023-03-28 下午4.26.57.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Gj5hT5AKYAoAAAAAAAAAAAAADv3-AQBr/original)-Gray1 | #F8FAFE | H：220 S：75 L：98 | Table zebra stripe, unselected Tab |

### Background Colors

| Color | HEX | HSL | Application |
| --- | --- | --- | --- |
| ![截屏2023-03-28 下午4.39.05.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/31ySR7XgIjIAAAAAAAAAAAAADv3-AQBr/original)-Gray8 | #132039(60%) | H：220 S：50 L：15 Alpha：60 | Modal, Drawer overlay |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/kb9FR6ginHQAAAAAAAAAAAAADv3-AQBr/original)-Gray2 | #F3F6FC | H：220 S：60 L：97 | Page background |
| <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VtrdSa-pXbIAAAAAAAAAAAAADv3-AQBr/original" style="border: 1px solid #E2E8F3; border-radius: 4px" />-White | #FFFFFF | H：0 S：0 L：100 | Component, container background |

## Usage Examples

Application examples in OceanBase products.

### Gradient Colors

Gradient colors are only for primary buttons. Gradient1 is the default primary button color; Gradient4 is the loading state. Do not use Gradient4 as the disabled primary button. For disabled primary buttons, use neutral Gray2 for fill and Gray4 for stroke.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZnHCRLKKsMsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Primary button disabled: Gray2 fill, Gray4 stroke</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/kC2FTqQbR6sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Do not use Gradient4 for primary button disabled; Gradient4 is loading state</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7KOySZf07NcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Primary button loading uses Gradient4</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ja3QT5Y2gUoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Do not use 65% opacity Gradient1 for primary button loading</div>
  </div>
</div>

### Info Colors

Info colors are used for: key actions, in-progress status, important highlights, links, graphics, etc. Selected states should be highlighted with info colors for quick recognition.

#### Tag

To reduce border interference, use Blue-2 for tag borders to improve signal-to-noise ratio.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/_yugQaxzXLAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Tag border uses Blue2</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/CamfR7cNUoIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Tag border should not use Blue3</div>
  </div>
</div>

#### Segmented

Tabs, Segmented, and similar components should use Blue-5 for selected state.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RsXNRLJVqhkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Selected text uses Blue5, medium font weight</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-qE7TLIL5CIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Selected text should not use Gray8, regular weight</div>
  </div>
</div>

### Functional Colors

Functional colors are used in tags, alerts, status, messages, progress bars, etc.

#### Table Status

Object status in tables can be confused. Blue = in progress, Green = completed, Gray = cancelled.

| Scenario | Blue | Green | Orange | Red | Gray |
| --- | --- | --- | --- | --- | --- |
| Status | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/WgGUQa4f6dAAAAAAAAAAAAAADv3-AQBr/original)<br />In Progress | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/y_7mTL1biHcAAAAAAAAAAAAADv3-AQBr/original)<br />Completed | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/P9MlT6y-fDUAAAAAAAAAAAAADv3-AQBr/original)<br />Preparing | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/gaFhTY-8i7IAAAAAAAAAAAAADv3-AQBr/original)<br />Failed | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/6V2HTqoaOBAAAAAAAAAAAAAADv3-AQBr/original)<br />Cancelled Gray4 |

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/1uzrQIDAVIgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">In progress = blue, completed = green</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/PnidSZW-OVwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Green = completed, blue = in progress</div>
  </div>
</div>

#### Alert Level

Alert tags distinguish 5 severity levels: outage, critical, warning, attention, reminder. Use 5 functional colors.

| Scenario | Green | Orange | Orange-Red | Red | Fuchsia |
| --- | --- | --- | --- | --- | --- |
| Alert Tag | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/G3DzR7SqAoMAAAAAAAAAAAAADv3-AQBr/original)<br />Reminder | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/sxqNQ4YAqHAAAAAAAAAAAAAADv3-AQBr/original)<br />Attention | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/GDZSSrGGEkoAAAAAAAAAAAAADv3-AQBr/original)<br />Warning | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/6DYJQKxwi-YAAAAAAAAAAAAADv3-AQBr/original)<br />Critical | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/w1q7Q7Ucw4YAAAAAAAAAAAAADv3-AQBr/original)<br />Outage |

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Kfv-Q7hAZ7sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Alert levels must use OBUI 5 functional colors</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/zKrMSqzJBxgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Alert levels must not use custom colors</div>
  </div>
</div>

#### Risk Level

Inspection reports show 3 risk levels: low, medium, high. Use medium-risk, low-risk, and high-risk functional colors. Do not mix risk and alert levels. Green = reminder without risk; Fuchsia = critical outage.

| Scenario | Orange | Orange-Red | Red | Gray |
| --- | --- | --- | --- | --- |
| Risk Level | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/jnc_R53GD4sAAAAAAAAAAAAADv3-AQBr/original)<br />Low Risk | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/JCyYT6IgeL4AAAAAAAAAAAAADv3-AQBr/original)<br />Medium Risk | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/MV87QLHAPEUAAAAAAAAAAAAADv3-AQBr/original)<br />High Risk | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/j9dRQbKgg5cAAAAAAAAAAAAADv3-AQBr/original)<br />No Result |

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qFO1RJNHoTgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Inspection risk levels must use functional high/medium/low risk colors</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Z3qNRoiLcBcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Green = reminder without risk; Fuchsia = critical outage; do not confuse with risk levels</div>
  </div>
</div>

### Neutral Colors

Used for default text, unselected components, and disabled states.

#### Page Title

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4bsFTY04PPkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Primary and secondary titles use Gray8</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/S8gORLezrH0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Primary and secondary titles should not use pure black (#000000); it is outside the neutral scale</div>
  </div>
</div>

#### Basic Info

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/rVnUQISkITUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Detail page labels use Gray7, content uses Gray8</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Ol1LSKwgY5kAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Detail page labels should not use Gray6 or lighter</div>
  </div>
</div>

#### Checkbox Icon

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/nduNTL8unSoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Icon default Gray7, disabled Gray4</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/L0kGQplgP4YAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Avoid Gray5 for default icon; too light and looks disabled. Disabled icon uses Gray4</div>
  </div>
</div>

#### Brand Icon

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/JvnTQYD53n4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description" style="margin-top: 16px">Brand icon default uses brand color; disabled uses Gray4</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NRInSIVQoPUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description" style="margin-top: 16px">Avoid using opacity alone for disabled state</div>
  </div>
</div>

#### Menu

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Cq_cSpkBppgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Dropdown hover background uses Gray2</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2ovkT4KRjlIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Dropdown hover background should not use Gray3</div>
  </div>
</div>

#### Tab

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/v_BqRInH3ckAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Unselected Tab uses Gray8</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3n3qQouKM6AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Unselected Tab should not use Gray7; easily confused with disabled</div>
  </div>
</div>

#### Segmented

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/L7_YRYFcIv8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Tabs and Segmented are secondary navigation. Unselected text uses Gray7; Tab unselected fill Gray1; Segmented unselected fill Gray2</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KNf0S7GLY6MAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Unselected state should differ from Tab; text should not use Gray8; fill should not use Gray3</div>
  </div>
</div>

<style>
table tr td img {
  max-width: 100%;
  height: 32px;
}
</style>
