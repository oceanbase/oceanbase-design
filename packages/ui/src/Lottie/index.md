---
title: Lottie 动效
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/speed.tsx" title="播放速度"></code>

<code src="./demo/control.tsx" title="播放控制"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |  |
| :-- | :-- | :-- | :-- | :-- | --- |
| path | 动画文件路径，一般为 json 文件 | string | - | - |
| renderer | 渲染器 | `svg` \| `canvas` \| `html` | `svg` | - |
| loop | 是否循环播放 | boolean | true | - |
| autoplay | 是否自动播放 | boolean | true | - |
| speed | 动画播放速度，默认为 1。值小于 1 时，会减缓播放速度；值大于 1 时，会加快播放速度 | number | 1 | - |

- 更多 API 详见 lottie-web 文档: https://github.com/airbnb/lottie-web/blob/master/index.d.ts#L129
