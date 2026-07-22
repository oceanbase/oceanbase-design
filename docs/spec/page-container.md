---
group: Design Foundation
subGroup: Layout
title: PageContainer
order: 14
---

The page container is the sole content container in the framework, forming the application layout together with Navigation.

## Design Approach

The page container includes three modules: page header, page content area, and footer toolbar. The page content area supports layout via layout components.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/mO61QbOcU_kAAAAAAAAAAAAADv3-AQBr/original)

## Page Header

The page header is at the top of the page and can hold page-level navigation, page overview, and page-level actions.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/bgnxS5QoufkAAAAAAAAAAAAADv3-AQBr/original)

1. Breadcrumb
2. Page title
3. Page tabs
4. Action area

### Breadcrumb

Use Breadcrumb when there are 3 or more hierarchy levels and you need to show hierarchy. L1 and L2 do not show breadcrumbs by default. Show breadcrumbs when drilling down to level 3 or deeper. Keep breadcrumb rules consistent within a product.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Rl5kSZqDL78AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Use breadcrumbs when there are many 3+ level hierarchies</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/1XkRS41yhVQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Caution></Caution>Not recommended when hierarchy is shallow</div>
  </div>
</div>

### Page Title

Can hold page title, page-level shortcuts, and guidance (e.g. refresh, edit title, status). In drill-down pages, add a back arrow before the title for navigation. Except for editor-like scenarios that need strong space or immersive editing, all pages should have a page title.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-FbfRoXHa7cAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Keep page title for clear navigation</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mdpdSJFZKi0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Do not hide the page title area unnecessarily</div>
  </div>
</div>

### Page Tabs

Use page-level tabs when there are multiple sub-pages and sub-pages need different Card blocks. When each tab is a single-card block, prefer content-level Tabs instead of page-level tabs for better cohesion.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VujlQbz8lVsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Use content-level Tabs when each tab is a single-card block</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/QtvqTb_p-TEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Caution></Caution>Page-level tabs not recommended</div>
  </div>
</div>

### Action Area

Can hold data filters and page-level actions. Place actions in either the page-level or sub-page action area based on ownership; do not use both at once. Use Large size components in the page header area.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ERzITJRm8_QAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do>Only one action area in the page header at a time</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/M280SpDCkAsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot>Avoid having both page-level and sub-page action areas</div>
  </div>
</div>

## Page Content Area

The content area is the core of the page. Use layout components to arrange content and use Cards to present it.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hQqPRKEUBoUAAAAAAAAAAAAADv3-AQBr/original)

1. Content container
2. Spacing
3. Card

### Spacing

Keep 16px spacing between content and the page header. Content Cards have 24px spacing on the right, bottom, and left from the content container. Spacing between cards is 16px.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/F0F4RaJe9PIAAAAAAAAAAAAADv3-AQBr/original)

### Card Shadow

Content cards use shadow to create distance from the content container. **Use primary shadow by default.**

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/gwSjR4EccGYAAAAAAAAAAAAADv3-AQBr/original)

## Footer Toolbar

The toolbar mainly holds page-level actions and summary content. It suits global actions on the current page and aligns with top-to-bottom user flow. The footer toolbar sits at the bottom of the viewport, uses secondary shadow, and has 24px horizontal spacing from the content container. Text description area can be configured per business needs.

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/xlwfSbv3w24AAAAAAAAAAAAADv3-AQBr/original)
