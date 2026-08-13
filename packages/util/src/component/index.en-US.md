---
title: Component
nav:
  title: Utilities
  path: /components
---

# Component

## joinComponent(array, render, seperator)

Maps array elements to React components and joins them with a separator. Unlike `Array.join` which only joins primitives, `joinComponent` works with objects and components.

### API

| Property  | Description                      | Type             | Default |
| --------- | -------------------------------- | ---------------- | ------- |
| array     | Array                            | T[]              | -       |
| render    | Render function for each element | (T) => ReactNode | -       |
| seperator | Separator                        | string           | `、`    |
