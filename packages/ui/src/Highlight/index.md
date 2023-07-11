---
title: Highlight 代码高亮
keywords: ['代码', '比对', '对比差异', 'diff', 'compare', '差异']
nav:
  title: 业务组件
  path: /biz-components
---

高亮代码，相较编辑器而言要更轻量，组件封装了 [highlight.js](https://highlightjs.org) 的高亮能力，目前 `highlight.js` 支持 [187 种不同类型的语言](https://highlightjs.org/static/demo/)，为防止打包体积过大，目前我们仅加载了部分语言类型，若有新增的语言需求，请联系我们添加。

## 何时使用

展示代码时使用，不需要编辑代码时使用，如果需要代码编辑，可以考虑采用如下方案：

- 社区方案 monaco-editor：https://microsoft.github.io/monaco-editor/

## 代码演示

### 指定语言

你可以通过 `language` 指定语言高亮，通过 `theme` 指定高亮主题。

<code src="./demo/basic.tsx"></code>

### 不指定语言

若不指定语言，那么 `Highlight` 会自己进行智能识别。

<code src="./demo/auto.tsx"></code>

### 展示代码块行号

你可以通过 `lineNumber` 指定是否需要展示代码块行号。

<code src="./demo/lineNumber.tsx"></code>

### JSON 格式

当格式为 json 时，`children` 支持传入 `object` 对象用于层级收放展示。

<code src="./demo/json.tsx"></code>

### Diff 比较

支持将多个版本的代码进行 diff 比较。

<code src="./demo/diff.tsx"></code>

### 切换语言与主题、行号展示

这里我们演示一下目前支持的所有语言和主题的切换、行号展示与否的效果。

<code src="./demo/theme.tsx"></code>

### 多段代码渲染

组件还支持通过配置 `innerHTML` 属性支持多段代码的渲染，对于用 `cms` 场景获取代码渲染的情况非常有用，注意需自行防止`XSS`代码注入。另外若是 `html/xml` 格式的代码，注意先进行 Escape。

<code src="./demo/innerHTML.tsx"></code>

## API 参数

### Highlight

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| language | 指定语言类型，详见下表，若不指定语言组件会智能探测为可选类型语言中的一种进行渲染 | string | - | - |
| theme | 指定主题，可选 `dark`, `light` | string \| dark \| light | light | - |
| lineNumber | 指定代码块行号是否开启，可选 `true`, `false` | boolean | false | - |
| copyable | 指定代码块是否展示复制按钮，可选 `true`, `false` | boolean | true | - |
| onCopyChange | 点击复制按钮的回掉 | (value) => void | - | - |
| height | 指定代码块高度，用于需要控制代码块高度固定的场景, 非 innerHTML 场景有效 | number | - | - |
| innerHTML | 使用 `dangerouslySetInnerHTML` 来渲染多段代码，代码使用`<pre><code></code></pre>`进行包裹，在从 cms 场景获取代码渲染的情况下非常有用，请自行确保传入的代码内容安全，防止`XSS`代码注入. | boolean | false | - |

### Highlight.Diff

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| language | 指定语言类型，详见下表，若不指定语言组件会智能探测为可选类型语言中的一种进行渲染 | string | - | - |
| theme | 指定主题，可选 `dark`, `light` | string \| dark \| light | light | - |
| source | 对比原始代码 | string | - | - |
| split | 是否拆分成两栏对比 | boolean | false | - |
| startRowIndex | 起始行号，若为数组类型，则分别指定左右两边的起始行号 | number \| number[x,y] | 1 | - |
| target | 对比目标代码 | string | - | - |

### 目前支持的语言列表

- javascript
- typescript
- css
- groovy
- java
- python
- bash
- json
- cpp
- http
- markdown
- nginx
- ruby
- sql
- xml
- dockerfile
- go
- yaml
- solidity
- tsx
- jsx
