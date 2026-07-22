---
group: Design Foundation
subGroup: Interaction
title: Loading
order: 17
---

Loading animation is a visual representation during data loading or operation execution. Appropriate loading effects help alleviate user waiting anxiety.

## Design Philosophy

To embed brand genes in the product, the dynamic Logo is used as the loading symbol. During user waiting, it strengthens brand awareness. The dynamic Logo symbolizes "flowing data," expressing that continuously updated and flowing data in the database is like an evolving story, with each new piece of data adding a new chapter to the story.

<div style="display: flex; justify-content: space-around">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HJTsQYnOQVEAAAAAAAAAAAAADv3-AQBr/original" style="width: 200px" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ufarRLcWy_IAAAAAAAAAAAAADv3-AQBr/original" style="width: 200px" />
  </div>
</div>

## Design Methods

OBUI divides loading into four forms: "Full-screen Loader," "Block Loader," "Skeleton Screen," and "Ring Loader."

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/8-HrSYeePDIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Full-screen Loader</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/DPSbTKjDXyYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Block Loader</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ellTQJ5DYYEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Skeleton Screen</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/_HPrSIVX2pEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Ring Loader</div>
  </div>
</div>

## Full-screen Loader

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/sHiCR4K0aeoAAAAAAAAAAAAADv3-AQBr/original" style="width: 160px; display: block; margin: 0 auto">

### Application Scenarios

Full-screen loader has two scenarios: "Full Page Load" and "Page Container Load." Use "Full Page Load" when opening a new page; use "Page Container Load" when switching navigation menus with cached navigation.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/gGzEQJBIMuoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Full Page Load</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TD2HT7wefFwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Page Container Load</div>
  </div>
</div>

### Usage Guidelines

Full-screen loader size is 60×60px. If there is descriptive text, font size is 14px, text color is Gray8 (#132039), and spacing between text and dynamic Logo is 4px. To prevent Loading from flashing when load time is too fast, add a 500ms delay to Loading.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ECj4SKAcqz4AAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/zXLxRZcIuaAAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

## Block Loader

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xuB1Tbw8klUAAAAAAAAAAAAADv3-AQBr/original" style="width: 160px; display: block; margin: 0 auto">

### Application Scenarios

Block loader has a lower hierarchy than full-screen loader and more application scenarios. Using monochrome avoids visual chaos on the page. Block loader is mainly used in four scenarios: "Modal Load," "Menu Load," "Drawer Load," and "Table Load."

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/fKxpR7Z6Yr8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Modal Load</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZypRSoGtwwcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Menu Load</div>
  </div>
</div>
<br />
<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9S0TQ45NvSUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Drawer Load</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/a19IRqRKcDgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Table Load</div>
  </div>
</div>

### Usage Guidelines

Block loader has 2 sizes: ① Width 48px: for modals, drawers, and tables; ② Width 40px: for dropdown menus. Text guidelines are the same as "Full-screen Loader." To prevent Loading from flashing when load time is too fast, add a 500ms delay to Loading.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KqoLQ4Xxv9gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Width 48px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ILpyTpISMIkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Width 40px</div>
  </div>
</div>

## Skeleton Screen

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HRCPS7GFU38AAAAAAAAAAAAADv3-AQBr/original" style="width: 200px; display: block; margin: 0 auto">

### Application Scenarios

Skeleton screen has two types: "Single Skeleton" and "Group Skeleton." Use "Single Skeleton" for detail modules displaying specific data or information; use "Group Skeleton" for large areas of text or code, e.g., SQL text loading.

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pAtNQqCxYlUAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center">Single Skeleton Load</div>
</div>

<div>
  <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/iQjkSoKLh8UAAAAAAAAAAAAADv3-AQBr/original" />
  <div class="image-description-center">Group Skeleton Load</div>
</div>

### Usage Guidelines

**Single Skeleton:** Width and height should be customized by business designers based on actual scenarios. Recommended size is close to the content to be loaded to avoid jitter; border-radius 2px, color uses neutral Gray3.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/gXV7QIy-GPwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Border-radius 2px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/2j13TofRhFwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Fill Color Gray3</div>
  </div>
</div>

**Group Skeleton:** Width is customized by business designers based on actual scenarios; height and spacing are both 16px; color and border-radius are the same as above.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/IFnuTZPYNa0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Height and spacing both 16px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/kVeUQaDGERoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Fill Color Gray3</div>
  </div>
</div>

## Ring Loader

<img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/_0TFT6rffQgAAAAAAAAAAAAADv3-AQBr/original" style="width: 200px; display: block; margin: 0 auto">

### Application Scenarios

Ring loader has three colors: white is mainly for "Button," blue for Input data validation state, gray mainly for "Cascader," "TreeSelect," and other components.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZtkqQrI7ZSYAAAAAAAAAAAAADv3-AQBr/original" style="height: 70px" />
    <div class="image-description-center">Button</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/3ungRZTEFxIAAAAAAAAAAAAADv3-AQBr/original" style="height: 70px" />
    <div class="image-description-center">Input</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ncx1R71S0c0AAAAAAAAAAAAADv3-AQBr/original" style="height: 70px" />
    <div class="image-description-center">Cascader</div>
  </div>
</div>

### Usage Guidelines

Ring loader size is 16×16px, with three colors: white #FFFFFF, blue #006AFF, gray #8592AD.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/OBjYRY71StcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Size 16×16px</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5GksTrOf2BMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Color values: #FFFFFF, #006AFF, #8592AD</div>
  </div>
</div>

## Usage Examples

System loading rules and best practices.

### Full Page Load

Full-screen loader should be placed in the center of the page or page container.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/uT9tTJIBi2cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Full-screen loader should be placed in the center of the page</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/kDW1SLT-4rkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Avoid top, bottom, or other non-centered positions</div>
  </div>
</div>

During step-by-step loading, it is recommended to appear only once. After full page load completes, go directly to block load. Do not perform page container load after full page load completes, to avoid Loading displacement.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/4h3xTImDwgcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>During step-by-step loading, appear only once; after full page load, go directly to block-level load</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/QU-8RKZG4WEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Do not perform page container load after full page load completes; avoid Loading displacement</div>
  </div>
</div>

### Page Container Load

For page container load, show results only after loading completes. Do not show empty state before loading completes.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/47NBR5bRLPMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>For page container load, show results after loading completes</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/SM03SbHQyEMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Do not show empty state together with loading</div>
  </div>
</div>

### Block-level Load

Block loader is mainly used in four scenarios: "Modal Load," "Menu Load," "Drawer Load," and "Table Load." Do not mix with full-screen loader.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pw3rTKlRJiIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Use block loader for table load</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Fc5KS4rv6zwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Do not use full-screen loader for table load</div>
  </div>
</div>
