---
title: FullscreenBox
nav:
  title: Biz Components
  path: /biz-components
---

Expands the specified container to fullscreen for viewing or interaction, hiding content outside the area and maximizing the visible area.

## When to Use

- When content needs more space for display.
- When part of the page needs an immersive view or interaction with less distraction.

## Code Examples

### Basic

Default fullscreen is viewport-level.

<code src="./demo/ViewportFullscreenDemo.tsx"></code>

### Browser fullscreen

Set `defaultMode` to `browser` for browser fullscreen.

<code src="./demo/BrowserFullscreenDemo.tsx"></code>

### With ListToolbar

Common use case is with table lists. Example with list toolbar for fullscreen control.

<code src="./demo/ListToolbarDemo.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| className | Custom class name | string | - | - |
| style | Fullscreen container style | React.CSSProperties | - | - |
| defaultMode | Default fullscreen mode (immutable) | <code>browser &#124; viewport</code> | viewport | - |
| header | Custom header | <code>false &#124; ReactNode &#124; { title: ReactNode; extra: ReactNode }</code> | - | - |
| onChange | Callback when fullscreen state changes | (fullscreen: boolean) => void | ​- | - |
