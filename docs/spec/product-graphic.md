---
group: Design Foundation
subGroup: Iconography
title: Product Empty State Illustration
order: 12
---

Product empty state illustrations are placeholder content when page data or content is missing. They work with text to guide users, convey brand identity, and maintain continuity of user experience.

Built-in illustrations are provided via [Empty](/components/empty) and [Result](/components/result) components. See component docs for usage.

## What's Changed

OBUI 2.0 product empty state illustrations follow the design philosophy of "orderly, efficient, concise, and flexible". Key changes:

1. Upgraded design style and simplified colors for better fit with tool products (OB Cloud, DataStudio...), forming a simple, relaxed visual style with neutral (Gray10) lines as the primary element and blue (Blue3) fill as the accent;
2. Simplified illustration elements to emphasize the semantic subject, guiding user actions and providing emotional value while keeping users focused on interface information;
3. This upgrade covers <u>primary illustrations + tertiary illustrations</u>; secondary illustrations previously used only for user onboarding are now deprecated.

OBUI illustration style evolution:

<div style="display: flex; gap: 16px">
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/oS-7TpMAIeEAAAAAQdAAAAgADuOXAQJr/original" alt="OBUI 1.0" />
    <div class="image-description-center">OBUI 1.0</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/KChFSqXrmv0AAAAAQSAAAAgADuOXAQJr/original" alt="OBUI 1.5" />
    <div class="image-description-center">OBUI 1.5</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/Bh60RYmSoZ0AAAAAQ0AAAAgADuOXAQJr/original" alt="OBUI 2.0 🌟" />
    <div class="image-description-center">OBUI 2.0 🌟</div>
  </div>
</div>

## Primary Empty State Illustration Design (formerly 1.0 colored illustrations)

### Element Anatomy

Illustrations use a 2.5D drawing technique to convey depth. Elements consist of:

1. Semantic subject, composed of neutral-colored lines;
2. Blue fill accents to enhance visual appeal or emphasize specific elements;
3. Neutral dark shadows, uniformly directed from upper-right to lower-left;
4. Icons typically appear only for actions that guide users to create something new.

<div style="display: flex; gap: 16px">
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/WU43RacTxMIAAAAAQ4AAAAgADuOXAQJr/original" alt="Guide creation" />
    <div class="image-description-center">Guide creation</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/kta1RYixRI0AAAAARCAAAAgADuOXAQJr/original" alt="Regular" />
    <div class="image-description-center">Regular</div>
  </div>
</div>

### Color Specification

Primary illustration colors consist of highlight and neutral colors:

- **Highlight color** (10%–30%): commonly used to fill parts that should be emphasized;
- **Neutral color** (30%–90%): main color for lines, shadows, key icons, and other elements.

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/qXrJS6EoJFYAAAAAQZAAAAgADuOXAQJr/original)

## Application Sizes

Illustration application scenarios fall into three types:

- Welcome page: left-right layout, illustrations mainly for atmosphere, recommended size 200\*200;
- Regular page: top-bottom layout, mainly for empty states and status feedback, recommended size 100\*100;
- Component module: top-bottom layout, uses tertiary illustrations, recommended size 48\*48

Size application examples:

- 200\*200

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/W5_YQI5AskUAAAAAT2AAAAgADuOXAQJr/original)

- 100\*100

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/iVLwRLewbIsAAAAASHAAAAgADuOXAQJr/original)

- 48\*48

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/rxd7SJ-k8OIAAAAATBAAAAgADuOXAQJr/original)

## Use Cases

- Error messages

The former <u>"Page not found"</u> state is split into "Resource not found", "Network issue", and "404"

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/OGa7TalzoWgAAAAAUeAAAAgADuOXAQJr/original)<br/>![Page/resource not found](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/E5G9TKj-5kUAAAAARdAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/eQsUS4sGwukAAAAAUBAAAAgADuOXAQJr/original)<br/>![Network issue](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/0E0CSLgM_MAAAAAAQ8AAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/BDWcQ6ryWu0AAAAAZdAAAAgADuOXAQJr/original)<br/>![404](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/pIu5Q5M6eCgAAAAARGAAAAgADuOXAQJr/original) |
| --- | --- | --- |
| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/CytJTpE6KdIAAAAAeXAAAAgADuOXAQJr/original)<br/>![Page crash](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/MrDiSpzLrGgAAAAAQRAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/yhgJTId3znAAAAAAUPAAAAgADuOXAQJr/original)<br/>![No permission](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/JSR1Tbft_AQAAAAAQrAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/WAu8TbwQnc8AAAAAUJAAAAgADuOXAQJr/original)<br/>![Version update](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/8j5UQIwrh8AAAAAAQtAAAAgADuOXAQJr/original) |

</div>

- Empty state, no data

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/larhS5eFOTkAAAAAgBAAAAgADuOXAQJr/original)<br/>![Guide creation](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/Bh60RYmSoZ0AAAAAQ0AAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/9HgMSbtfaw0AAAAAfSAAAAgADuOXAQJr/original)<br/>![Create tenant](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/DuuJSrC2G3MAAAAAQwAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/0U9mTJXJggoAAAAAfrAAAAgADuOXAQJr/original)<br/>![Create private link](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/AEyJQZ0sy_0AAAAARMAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/t_MWQ6FD228AAAAATyAAAAgADuOXAQJr/original)<br/>![No data](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/e8KHT6ItBKAAAAAAQkAAAAgADuOXAQJr/original) |
| --- | --- | --- | --- |

</div>

- Status feedback

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/u3llSIrwPC4AAAAAUoAAAAgADuOXAQJr/original)<br/>![In progress](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/dlt0TY2pnb4AAAAAQrAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/rrXYQ5ODJFkAAAAAUzAAAAgADuOXAQJr/original)<br/>![Success](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/xROcQ66iJloAAAAAQmAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/3xfGQae9lQAAAAAAUuAAAAgADuOXAQJr/original)<br/>![Failed](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/7fyFS7lmNhwAAAAAQ1AAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/wD5pQ6eWmpkAAAAAUaAAAAgADuOXAQJr/original)<br/>![Warning](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/_wqwSI4q2UwAAAAAQ5AAAAgADuOXAQJr/original) |
| :-: | --- | --- | --- |

</div>

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/5LyyRpb-RsMAAAAAeDAAAAgADuOXAQJr/original)<br/>![Normal](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/ckUKQZmBGeAAAAAAQOAAAAgADuOXAQJr/original) |
| :-: |

</div>

- Welcome

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/40MVSIqsqdMAAAAAVfAAAAgADuOXAQJr/original)<br/>![Welcome](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/-p4HT7qrnJUAAAAAROAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/pYubT56M1EUAAAAAVMAAAAgADuOXAQJr/original)<br/>![Welcome login](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/ABUnQpqso04AAAAARLAAAAgADuOXAQJr/original) | ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/D0sDTKq5E1AAAAAAgBAAAAgADuOXAQJr/original)<br/>![Data migration](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/x3etQrIG3pMAAAAAQ3AAAAgADuOXAQJr/original) |
| --- | --- | --- |

</div>

- Tertiary empty state illustrations (uses neutral Gray 7, consistent with description text color)

<div class="product-graphic-spec">

| ![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/wHBTTZahyg8AAAAAS7AAAAgADuOXAQJr/original)<br/><br/>![No data](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/ByqISI41otYAAAAAQDAAAAgADuOXAQJr/original) |
| :-: |

</div>
