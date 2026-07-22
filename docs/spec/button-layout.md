---
group: Design Foundation
subGroup: Interaction
title: Button Layout
order: 16
---

Buttons often appear in groups. Button group position and primary/secondary button order should follow the user's reading flow so buttons appear where users need them.

## Design Philosophy

Button group position on the page and primary/secondary button order within the group should follow the user's information browsing flow in each scenario, ensuring the group appears where needed and the most important button (primary) is seen first.

## Design Methods

Design button groups based on two patterns: "Z-pattern" and "F-pattern":

<div style="display: flex">
  <div>
    <strong style="display: block; text-align: center">Z-pattern</strong>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZunWQbbEyZIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">For scenarios with little information or no fixed reading order. User gaze follows Gutenberg principle and ends at the bottom-right of the block</div>
  </div>
  <div>
    <strong style="display: block; text-align: center">F-pattern</strong>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/sCQETqA-iFcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">For scenarios with much information and a fixed reading order. User gaze follows the reading flow and ends at the content end</div>
  </div>
</div>

## Z-pattern

Button group is at the bottom-right of the block; primary button on the right.

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ihJSR5hDsLkAAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>1. Button group</div>
</div>

### Button Group

Buttons ordered by importance from right to left: primary, secondary.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NmutTYD83mgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">Button group can hold multiple buttons; recommend no more than 3</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/v0xuTYim4TwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid placing buttons at the bottom-left of modals</div>
  </div>
</div>

### Application Scenarios

Z-pattern is often used in feedback containers and filter card containers.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/edA3Q479KVwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Modal</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/6ggkQJ2M_IwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Popconfirm</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2mHmTbOkSHUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Filter Card</div>
  </div>
  <div style="visibility: hidden">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2mHmTbOkSHUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Filter Card</div>
  </div>
</div>

## F-pattern

<strong>Place button group in the user's browsing path; primary button on the left.</strong> Order by importance from left to right: primary, secondary, icon button.

<div style="display: flex">
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RecTTLzVFbwAAAAAAAAAAAAADv3-AQBr/original" style="width: 60%" />
  <div>
    1. Title area<br />
    2. Content area<br />
    3. Footer area
  </div>
</div>

### Title Area

Page-level button group for page-level changes, placed to the right of the primary title.

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/n9ziTajJnsQAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center"></div>
</div>

### Content Area

Block-level button group for block-level changes, at the action position.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/QqxeQpARApMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">When user browses left to right, place button group to the right of the target</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/38UbRJPA7VcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">When user browses top to bottom, place button group below the target</div>
  </div>
</div>

### Footer Area

For global change actions.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/vES1SKp1cpMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><strong>Primary button on the left.</strong> When buttons have no logical order, default primary on the left</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WC5UTotcdDsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><strong>Primary button by logical order.</strong> When buttons have logical order, sort by logic; recommended action as primary</div>
  </div>
</div>

### Application Scenarios

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/N45mSoKZ2hEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Empty Page</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3XznTpRBcgsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">List Page</div>
  </div>
</div>

<br />

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Pu_pQqZTni0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Form Page</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ctioS6OVcG4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Drawer</div>
  </div>
</div>
