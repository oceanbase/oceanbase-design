---
group: Design Foundation
subGroup: Layout
title: Navigation
order: 13
---

Navigation is the map and signpost of the interface, helping users understand their position in the system and find what they need quickly.

## Design Principles

### Clarity

Clearly communicate users' current location and available content so they do not get lost in complex navigation.

### Efficiency

- Organize information structure well; avoid too many navigation options to improve lookup efficiency.
- Navigation labels should match user mental models for quick understanding.
- Provide efficient shortcuts so users can reach within 3 steps.

### Extensibility

Plan for future growth and leave room for extension to provide a stable experience.

## Navigation Anatomy

Navigation is composed of product brand identifier, icons, text labels, and other elements.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/p0rjSbCCRv4AAAAAAAAAAAAADv3-AQBr/original)

1. Product brand identifier
2. Menu item background container
3. Icon
4. Divider
5. Text label

### Icon

Icons are required for primary side navigation; they are optional for secondary and deeper levels. Icon style must be consistent within the same level.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/o8v_T6FNihkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Keep the number of menu items in the same function group reasonable</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wCzzSJ3_c0MAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Keep icon style consistent within the same level</div>
  </div>
</div>

### Divider

Use dividers to separate different logical groups of product features. When features have multi-level nesting, dividers represent primary groupings. Keep menu items in the same group to 7 or fewer; if more, group further to reduce cognitive load and improve lookup.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DOeESIUB-zMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Keep the number of menu items in the same function group reasonable</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/UDh6Qrxxf_8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Avoid more than 7 menu items in the same function group</div>
  </div>
</div>

### Text Label

Menu text labels should be concise; avoid long or complex wording. Labels should be 1–2 words. Menu items should be mutually exclusive; clearer differences make decisions easier.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/SW_SR6GjFNEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Concise navigation menu labels</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/fIukQZotwSkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Navigation menu labels must not exceed 2 words</div>
  </div>
</div>

### Information Hierarchy

Keep hierarchy depth to 3 levels or less; aim for users to reach the target in 3 steps. For deep but important or frequent actions, provide shortcuts to improve efficiency.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Bxr8Ro4RB4MAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Provide shortcuts for important/frequent features to improve discoverability and convenience</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/NPSxRIuigi0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Deep hierarchy leads to low discoverability and long paths</div>
  </div>
</div>

## Navigation Types

### Top Navigation

Located at the top of the page, it can show global product identity and provide global tools, services, and shortcuts such as notifications, help, language switch, and user info.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/S21-Q6Xo4Y4AAAAAAAAAAAAADv3-AQBr/original)

### Side Navigation

Side navigation is more flexible than top navigation, easier to extend downward, and supports longer text labels. It suits management tasks with deep hierarchy and frequent switching. It can be icon+text, text-only, or icon-only.

Side navigation can have any number of menu items and may use a scrollbar. Group items by function; separate groups with dividers. A product must have at least one function group.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/dk18Q5eO-xcAAAAAAAAAAAAADv3-AQBr/original)

### Back Navigation

Add a back button before the title; clicking returns to the previous page. Suited for flat drill-down flows. When hierarchy is typically ≥3 levels, combine with Breadcrumb for clearer paths. Keep breadcrumb rules consistent within a product.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4JrMQLbIxQYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Standalone</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/P1gxQa7WaRYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Combined with Breadcrumb</div>
  </div>
</div>

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DwU1RLRCrIMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Keep breadcrumb rules consistent within a product</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9Hf6SIyYUpEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Avoid inconsistent breadcrumb display within a product</div>
  </div>
</div>

## Use Cases

Best practices for navigation in products.

### Global Combined Navigation

Combine top and side navigation. Use top navigation for global tools and services, and side navigation for core product structure. This provides a highly extensible navigation framework.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/GnlOTJ89t3YAAAAAAAAAAAAADv3-AQBr/original)

### Sub-site Drill-down Navigation

An embedded sub-site navigation pattern. After entering a sub-site, hovering over the side icon navigation expands it for quick switching. Common scenarios:

- When a type of object has many management capabilities and complex information, and users need global navigation for quick switching, use sub-site drill-down to flatten hierarchy and reduce lookup cost.
- For complex tasks that need a large workspace, use sub-sites to provide an immersive experience, e.g. editors.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/bfp_Q45NtvgAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/73vrTpy-oj8AAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

### Page Drill-down Navigation

Use the page title back button to show current location and provide quick return. Suited for shallow hierarchy.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/PomfRafC3SYAAAAAAAAAAAAADv3-AQBr/original) </think>

<｜tool▁calls▁begin｜><｜tool▁call▁begin｜> StrReplace
