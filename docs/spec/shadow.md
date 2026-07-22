---
group: Design Foundation
title: Shadow
order: 8
---

Shadows provide cues about depth, direction of motion, and surface edges. The shadow of a surface is determined by its elevation and relationship to other surfaces.

## Design Principles

### Design Philosophy

Shadows reveal the edges of module surfaces and their elevation above the background, providing perceivable elevation differences between non-overlapping surfaces, conveying a tech-forward, youthful brand identity.

![截屏2024-08-08 19.46.05.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/dWAoSY69vuMAAAAAAAAAAAAADv3-AQBr/original)

### Design Approach

Shadow size, softness, and spread reflect the distance between two surfaces. We define elevation heights (0dp, 4dp, 18dp) between objects and surfaces, dividing shadows into three layers. Combined with light source direction, blur, and spread, we achieve natural lighting effects.

![截屏2024-08-08 19.32.25.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/zk4RQa0wXNEAAAAAAAAAAAAADv3-AQBr/original)

## Element Anatomy

![截屏2024-08-09 10.21.56.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/iRHFToi6bMMAAAAAAAAAAAAADv3-AQBr/original)

1. Color
2. Direction (X, Y)
3. Blur
4. Spread

### Color

All components use the same shadow color [#132D5E]. Through three layers with different rgba values, direction, blur, and spread, we achieve natural, soft effects.

![截屏2024-08-09 10.47.41.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/T4B3QJ5TPzQAAAAAAAAAAAAADv3-AQBr/original)

### Direction

In addition to the default center alignment, shadows can be oriented upward, downward, left, or right to support information hierarchy in complex module components.

<div style="display: flex">
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/JPSCT4vYxl4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Center</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aBgFRacu2ZMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Upward</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pyyPT6C5wUIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Downward</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/h9qbQIBukrwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Left</div>
  </div>
  <div style="flex: 1">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KmpXQIzmuoMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center">Right</div>
  </div>
</div>

## Shadow Types

OBUI applies two shadow levels: primary shadow and secondary shadow.

| Name | Elevation | Main Light | Ambient Light 1 | Ambient Light 2 |
| --- | --- | --- | --- | --- |
| Primary Shadow | 4dp | 0PX 1PX 2PX 0PX hsla(219,67,22,0.03) | 0PX 1PX 6PX -1PX hsla(219,67,22,0.02) | 0PX 2PX 4PX 0PX hsla(219,67,22,0.02) |
| Secondary Shadow | 18dp | 0PX 6PX 16PX 0PX hsla(219,67,22,0.08) | 0PX 3PX 6PX -4PX hsla(219,67,22,0.12) | 0PX 9PX 28PX 8PX hsla(219,67,22,0.05) |

### Primary Shadow

Page-level modules and Card containers use primary shadow on gray backgrounds.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Jcl8SZYmz-0AAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/GtsXRLYVruYAAAAAAAAAAAAADv3-AQBr/original" style="max-height: 97%" />
  </div>
</div>

### Secondary Shadow

Floating popovers, guide cards, Dropdown menus, and similar elements on primary modules use secondary shadow.

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/GGKTTbor8VQAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/fn9qT7pjglAAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>
