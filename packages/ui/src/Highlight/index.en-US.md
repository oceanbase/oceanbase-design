---
title: Highlight
keywords: ['code', 'compare', 'diff', 'compare', 'difference']
nav:
  title: Biz Components
  path: /biz-components
---

Highlights code with a lighter footprint than editors. Wraps [highlight.js](https://highlightjs.org) and supports [187+ languages](https://highlightjs.org/static/demo/). Only a subset of languages is loaded to keep bundle size small; contact us to add more.

## When to Use

Use for displaying code when editing is not needed. For editing, consider:

- monaco-editor: https://microsoft.github.io/monaco-editor/

## Code Examples

### Specify language

Use `language` for syntax highlighting and `theme` for theme.

<code src="./demo/basic.tsx"></code>

### Auto-detect language

If not specified, Highlight auto-detects the language.

<code src="./demo/auto.tsx"></code>

### Line numbers

Use `lineNumber` to show line numbers.

<code src="./demo/lineNumber.tsx"></code>

### JSON format

For JSON, `children` can be an object for collapsible display.

<code src="./demo/json.tsx"></code>

### Diff comparison

Compare multiple code versions with diff.

<code src="./demo/diff.tsx"></code>

### Switch language, theme, and line numbers

Demo of supported languages, themes, and line number toggle.

<code src="./demo/theme.tsx"></code>

### Multiple code blocks

Use `innerHTML` for multiple code blocks, useful for CMS-rendered code. Prevent XSS. Escape HTML/XML before use.

<code src="./demo/innerHTML.tsx"></code>

## API

### Highlight

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| language | Language type (see below); auto-detect if omitted | string | - | - |
| theme | Theme: `dark`, `light` | string \| dark \| light | light | - |
| lineNumber | Show line numbers | boolean | false | - |
| copyable | Show copy button | boolean | true | - |
| onCopyChange | Copy button click callback | (value) => void | - | - |
| height | Fixed height for code block (not for innerHTML) | number | - | - |
| innerHTML | Use dangerouslySetInnerHTML for multiple blocks wrapped in `<pre><code></code></pre>`. Ensure content is safe to prevent XSS. | boolean | false | - |

### Highlight.Diff

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| language | Language type | string | - | - |
| theme | Theme: `dark`, `light` | string \| dark \| light | light | - |
| source | Original code | string | - | - |
| split | Split into two columns | boolean | false | - |
| startRowIndex | Start row number; array for left/right | number \| number[x,y] | 1 | - |
| target | Target code | string | - | - |

### Supported languages

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
