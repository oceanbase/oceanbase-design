---
group: Design
order: 1
title: Chart Classification Palette Design Guide
---

> Summary: Chart palette design considers many factors: brand tone, interface harmony, color distinguishability, readability for visually impaired users, flexibility for complex data scenarios. Early design uses hue selection to define style, then adjusts lightness and saturation to strengthen contrast for recognition, and finally validates the palette with tools for distinguishability and readability.

## Basic Color Theory

### 24-Hue Color Wheel

The 24-hue color wheel is derived from primary color mixing. Red, yellow, and blue are primaries; red+yellow=orange, yellow+blue=green, blue+red=purple. Orange, green, purple are secondary; intermediate colors are tertiary.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/fitdTouCCBQAAAAAAAAAAAAADv3-AQBr/original)

For palette design, use a primary-value approach. In HSB mode, pick a primary, keep S (saturation) and B (brightness) constant, and vary H (hue) in 15° steps to generate a 24-hue wheel for color selection.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/cGdrS7Xj8RgAAAAAAAAAAAAADv3-AQBr/original)

### Common Color Schemes

Common schemes include: analogous, triadic, complementary, split-complementary, triangular, and tetradic.

- **Analogous:** Colors within 15° on the wheel; within 60° are analogous. Harmonious.
- **Triadic:** Colors 120°–180° apart.
- **Complementary:** Colors 180° apart. Maximum contrast when adjacent.
- **Split-complementary:** Isosceles triangle scheme; colors 15°–60° from complementary.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/5-Z9QIRe6nsAAAAAAAAAAAAADv3-AQBr/original)

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZtKwRZNGQKMAAAAAAAAAAAAADv3-AQBr/original)

Competitors choose schemes based on business and brand. Grafana uses standard analogous; AntV and Tableau lean split-complementary; ECharts leans tetradic.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/DB47SZJbLgkAAAAAAAAAAAAADv3-AQBr/original)

Besides designer experience, tools make palettes more scientific. Recommended: [Adobe Color](https://color.adobe.com/zh/create/color-wheel) and [Paletton](http://paletton.com/#uid=703101kl6lPhAQkk2vSnjcbop3Ykm9lG3nsycJpjuWi1Sde2klzD09LrHgcwwq1NJuaXxkOmeQNQ7rAgfrX0m9T0Cn). Adobe Color supports all schemes above; Paletton has analogous, triadic, and tetradic; split-complementary and triangular can be done manually.

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/n0GjRaGBMuYAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description">Adobe Color color schemes</div>
</div>

## Chart Color Principles

Chart palettes must consider interface harmony, distinguishability, accessibility, and flexibility. Principles:

### Color Harmony

Charts occupy large areas. Overly saturated colors cause fatigue and are unsuitable for long reading. Use soft, balanced colors.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KsS3ToT7LskAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Use colors with comfortable lightness and saturation</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/XWvvTbymBtcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Avoid overly high lightness and saturation</div>
  </div>
</div>

### Color Distinguishability

Distinguishability is the difference between colors. Easy with few colors; when count ≥10, similar colors are hard to tell apart. Improve by widening hue and light-dark gaps.

In CIELab, L is typically 35–85. Too high = too bright; too low = too dark; both hurt readability.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Pxl6TICe_fIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">L 35–85, moderate brightness</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aaNuRJb1OVoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Too high or too low L hurts readability</div>
  </div>
</div>

### Accessible Readability

Visually impaired users rely on light-dark contrast, not hue. Use ColorLab to simulate and verify readability.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mT_PQoF9ZYYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Alternating light and dark; accessible</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/hhscS47j-5AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">Similar lightness; not accessible</div>
  </div>
</div>

## OBCharts Palette Design

Steps: ① Define theme colors; ② Choose hues; ③ Constrain saturation/lightness; ④ Refine palette; ⑤ Validate readability.

### Define Theme Colors

To convey tech, professionalism, and reliability, OceanBase logo uses 3 brand colors: orange, blue, green. Blue = tech; green = life/vitality; orange = hope and future.

![1-最终确定版.jpg](https://mdn.alipayobjects.com/oceanbase_design/afts/img/o9ueQYIDjnkAAAAAAAAAAAAADv3-AQBr/original)

OBUI theme colors are fine-tuned from logo for complex tool scenarios. OBCharts uses OBUI's 3 theme colors for consistency.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/MPtpSLHV15QAAAAAAAAAAAAADv3-AQBr/original)

### Choose Hues

#### Exclude hues that don't fit brand

Users form brand perception through color. Exclude hues that don't fit. Purple suggests mystery, romance, femininity—common in fashion/beauty; avoid for database. Red suggests warning and urgency; databases have many alerts, so red in normal charts can mislead—exclude red.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/nN3LR4swnhIAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/FHbKTKns_3cAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

#### Choose a scheme

##### Option 1: Analogous

Green-centered analogous (roughly half wheel) avoids red and purple, covers all 3 theme hues, and distributes hues evenly (~45° apart).

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mRQqTYS8dYsAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7SHgSqJoA-gAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

##### Option 2: Split-complementary

Complementary gives high contrast. Split-complementary can pick 5 hues with ~30° split, covering the 3 theme hues.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mnU7TJP_5vkAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WqBGR6da4yoAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

Merging both yields an initial palette:

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/wf06SYe126IAAAAAAAAAAAAADv3-AQBr/original)

### Constrain Saturation and Lightness

Palette design must balance hue, saturation, and lightness. Initial hues are pure and bright; constrain saturation and lightness for harmony.

Competitor analysis: ECharts has concentrated lightness/saturation; Tableau is even; AntV and Grafana skew brighter and purer.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WSr8RrvrgAsAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/k9BiQpSjPxEAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/K7NXR7CtKEYAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/22_ySKfZGTkAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

For softer palettes, constrain S to 35–80 and B to 60–95. Refining base colors into this range yields a new palette.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/HPoITqdp9rcAAAAAAAAAAAAADv3-AQBr/original)

### Refine Palette

For complex scenarios, use 10 colors. The above has 7; add 3 using Adobe Color: same hue, different lightness/saturation. Use saturation 60 as baseline; pick orange, green, blue at S=60, L=60.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QhnpRK51iMUAAAAAAAAAAAAADv3-AQBr/original)

There are 2 oranges (Fig 1). Orange is close to alert color—merge into 1, pick hue 35–45 (e.g. 40) (Fig 2).

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7JofT7KW6IQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Fig 1</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/p36BSIBT32sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Fig 2</div>
  </div>
</div>

Orange-red is close to warning—reduce lightness/saturation (Fig 3). Add hue 320 for better distribution (Fig 4) to complete the palette.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/e7CvTocrTR8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Fig 3</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/gBD9SK5xcjAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Fig 4</div>
  </div>
</div>
<br />
<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9_VNRJmASNIAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center">Complete Palette</div>
</div>

### Readability Validation

#### Light-dark alternation

Validated with ColorLab in LAB space; meets light-dark alternation.

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Y2tpTKyEwaIAAAAAAAAAAAAADv3-AQBr/original" style="width: 415px" />

#### Accessible readability

Meets light-dark alternation; accessible for color-blind users.

<div style="display: flex">
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/bpNMSIQMNqMAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div class="image-description" style="width: 130px">
    <div style="margin-bottom: 16px">1. Normal vision</div>
    <div>2. Color-blind simulation</div>
  </div>
</div>

#### Euclidean distance

During validation, adjust until perceptual distance meets standards (range 26–30).

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FcRgToU-QVkAAAAAAAAAAAAADv3-AQBr/original)

### Palette Application

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/d7gGTpRGX6YAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HXrOT6BRa7sAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>
<br />
<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/L4DBTqhAUbAAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/I55rTpNNSDMAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>
<br />
<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Mqy9SqIKnLgAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/QY9mToqPEAUAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

## References

Material Color and Design Science https://material.io/blog/science-of-color-design

Material Color System https://m3.material.io/styles/color/the-color-system/key-colors-tones

JD Color System https://www.uisdc.com/color-system

Adobe Color Palette https://color.adobe.com/zh/explore?page=7

Paletton http://paletton.com/#uid=54e1a0kr0pdobS5pLzuq+enoy6j

Tableau Blog https://www.tableau.com/blog/colors-upgrade-tableau-10-56782

Hue Wheel Comparison http://www.handprint.com/HP/WCL/vismixmap.html#harris

Color Space http://www.handprint.com/HP/WCL/color7.html#CIELAB

Color Experience http://www.handprint.com/CE/book.html
