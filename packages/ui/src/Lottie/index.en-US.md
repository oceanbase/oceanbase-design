---
title: Lottie
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/speed.tsx" title="Playback speed"></code>
<code src="./demo/control.tsx" title="Playback control"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| path | Animation file path (usually JSON) | string | - | - |
| renderer | Renderer | svg \| canvas \| html | svg | - |
| loop | Loop playback | boolean | true | - |
| autoplay | Autoplay | boolean | true | - |
| speed | Playback speed (1 = normal, <1 slower, >1 faster) | number | 1 | - |

- More API: https://github.com/airbnb/lottie-web/blob/master/index.d.ts#L129
