---
title: Design Token
order: 4
group: General
---

OceanBase Design provides a complete set of custom Design Tokens with three consumption methods: CSS variables, hooks, and static objects. They can be used in CSS, Less, Sass, React components, and non-React contexts.

## Quick Start

### 1. Ensure ConfigProvider is Used

CSS variables are automatically injected when `ConfigProvider` renders. Ensure your app root uses `ConfigProvider`:

```tsx | pure
import { ConfigProvider } from '@oceanbase/design';

export default () => {
  return (
    <ConfigProvider>
      {...}
    </ConfigProvider>
  );
};
```

### 2. Choose Usage Method

- **CSS/Less/Sass files**: Use CSS variables `var(--ob-*)`
- **React components**: Use `obToken` object, supporting both hooks and static import.

### 3. Basic Example

**In CSS:**

```css
.my-button {
  background-color: var(--ob-color-bg-selected);
  color: var(--ob-color-text-selected);
  border-radius: var(--ob-radius-sm);
}
```

**In React function components (Hooks):**

```tsx | pure
import { useToken } from '@oceanbase/design';

const MyComponent = () => {
  const { obToken } = useToken();

  return (
    <div
      style={{
        backgroundColor: obToken.colorBgDefault,
        color: obToken.colorTextDefault,
        borderRadius: obToken.radiusSm,
      }}
    >
      {...}
    </div>
  );
};
```

**In React class components (Static import):**

```tsx | pure
import { obToken } from '@oceanbase/design';
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: obToken.colorBgDefault,
          color: obToken.colorTextDefault,
          borderRadius: obToken.radiusSm,
        }}
      >
        {...}
      </div>
    );
  }
}
```

## Core Features

### Out of the Box

CSS variables with the `--ob-` prefix are automatically injected into `:root` when `ConfigProvider` renders. **No CSS variable mode configuration required** — they work as soon as your app includes `ConfigProvider`.

### Difference from Ant Design CSS Variables

| Feature | OceanBase CSS Variables (`--ob-*`) | [Ant Design CSS Variables](https://5x.ant.design/docs/react/css-variables-cn) (`--ant-*`) |
| --- | --- | --- |
| Enable | Auto-injected, out of the box | Requires `theme.cssVar` config |
| Naming | Concise, semantic | One-to-one with Token names |
| Purpose | Quick adoption in business layer | Full exposure of all Tokens |
| Count | Curated common variables | All Design Tokens |

## Usage

### How to Choose: CSS Variables vs obToken?

| Scenario                  | Recommended                   | Reason                            |
| ------------------------- | ----------------------------- | --------------------------------- |
| CSS/Less/Sass files       | CSS variables (`var(--ob-*)`) | Native support, no JavaScript     |
| React function components | `obToken` (useToken)          | Theme-aware, type-safe            |
| React class components    | `obToken` (static import)     | Class components cannot use hooks |
| Non-React context         | `obToken` (static import)     | Utils, config objects, etc.       |

---

## Using CSS Variables in Style Files

### CSS

```css
.my-button {
  background-color: var(--ob-color-bg-selected);
  color: var(--ob-color-text-selected);
  border-radius: var(--ob-radius-sm);
  padding: var(--ob-space-200) var(--ob-space-300);
}
```

### Less

```less
.my-card {
  background-color: var(--ob-color-bg-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
```

### Sass/SCSS

```scss
.my-card {
  background-color: var(--ob-color-bg-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
```

### React inline styles (using CSS variables)

```tsx | pure
<div
  style={{
    backgroundColor: 'var(--ob-color-info-fill)',
    color: 'var(--ob-color-info-text)',
    padding: 'var(--ob-space-400)',
  }}
>
  Info Card
</div>
```

## Using obToken in React Components

Besides CSS variables, OceanBase Design provides the `obToken` object — the JavaScript representation of all CSS variables. It can be used directly in React components for better type support and DX.

### Usage

Two ways to get `obToken`:

1. **Hooks** (recommended): Via `useToken` hook, updates with theme
2. **Static import**: Import the static `obToken` object — only for React class components and non-React contexts

### Hooks (Recommended)

Get `obToken` via `useToken`; it updates with `ConfigProvider` theme:

```tsx | pure
import { useToken } from '@oceanbase/design';
import React from 'react';

const MyComponent: React.FC = () => {
  const { obToken } = useToken();

  return (
    <div
      style={{
        backgroundColor: obToken.colorInfoFill,
        color: obToken.colorInfoText,
        padding: obToken.space400,
        borderRadius: obToken.radiusSm,
      }}
    >
      Info Card
    </div>
  );
};
```

### Static Import

Import the static `obToken` object — **only for React class components and non-React contexts**:

**In React class components:**

```tsx | pure
import { obToken } from '@oceanbase/design';
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: obToken.colorBgDefault,
          color: obToken.colorTextDefault,
          padding: obToken.space400,
          borderRadius: obToken.radiusSm,
        }}
      >
        My Component
      </div>
    );
  }
}
```

**In non-React contexts:**

```tsx | pure
import { obToken } from '@oceanbase/design';

// Use in utils, config objects, etc.
const styleConfig = {
  backgroundColor: obToken.colorBgDefault,
  color: obToken.colorTextDefault,
  padding: obToken.space400,
  borderRadius: obToken.radiusSm,
};
```

### Naming Rules

`obToken` keys map 1:1 to CSS variable names, but drop the `--ob-` prefix and use camelCase:

| CSS Variable                | obToken Key          | Description        |
| --------------------------- | -------------------- | ------------------ |
| `--ob-color-bg-default`     | `colorBgDefault`     | Default background |
| `--ob-color-text-default`   | `colorTextDefault`   | Default text       |
| `--ob-color-border-default` | `colorBorderDefault` | Default border     |
| `--ob-space-400`            | `space400`           | Space 400          |
| `--ob-radius-sm`            | `radiusSm`           | Small radius       |
| `--ob-font-h1`              | `fontH1`             | H1 font            |

### In Components

```tsx | pure
import { useToken, Button } from '@oceanbase/design';
import React from 'react';

const CustomButton: React.FC = () => {
  const { obToken } = useToken();

  return (
    <Button
      style={{
        backgroundColor: obToken.colorBgSelected,
        color: obToken.colorTextSelected,
        borderColor: obToken.colorBorderFocus,
      }}
    >
      Custom Button
    </Button>
  );
};
```

## Best Practices

### 1. Prefer Semantic Variables

Use semantic variable names instead of raw color values:

```tsx
// ✅ Recommended: semantic variables
backgroundColor: obToken.colorBgDefault;
color: obToken.colorTextDefault;

// ❌ Not recommended: base colors
backgroundColor: obToken.blue1;
color: obToken.blue6;
```

### 2. Stay Consistent

Use the same Tokens across the project for visual consistency:

```tsx
// ✅ Recommended: same spacing variables
padding: obToken.space400;
margin: obToken.space400;

// ❌ Not recommended: mixed values
padding: '16px';
margin: obToken.space400;
```

### 3. Use Type Hints

In TypeScript, rely on `obToken` type hints to avoid typos:

```tsx
import { obToken } from '@oceanbase/design';

// ✅ TypeScript provides autocomplete and type checking
const color = obToken.colorBgDefault;

// ❌ Strings are error-prone and unchecked
const color = 'var(--ob-color-bg-default)';
```

### 4. Prefer useToken in Function Components

In React function components, use `useToken` to get `obToken`:

```tsx
// ✅ Recommended: hooks in function components, theme-aware
import { useToken } from '@oceanbase/design';

const MyComponent = () => {
  const { obToken } = useToken();
  return <div style={{ backgroundColor: obToken.colorBgDefault }}>Content</div>;
};

// ⚠️ Use static import only in class components or non-React contexts
import { obToken } from '@oceanbase/design';

// React class component
class MyClassComponent extends React.Component {
  render() {
    return <div style={{ backgroundColor: obToken.colorBgDefault }}>Content</div>;
  }
}

// Non-React context (utils, config, etc.)
const config = { backgroundColor: obToken.colorBgDefault };
```

### 5. Responsive Design

Combine CSS variables with media queries for responsive layouts:

```css
.my-container {
  padding: var(--ob-space-200);
}

@media (min-width: 768px) {
  .my-container {
    padding: var(--ob-space-400);
  }
}
```

## Editor IntelliSense

`--ob-*` variables are injected at runtime by `ConfigProvider`, and no stylesheet in the source declares them, so editors do not suggest them inside `var(--ob-*)` by default. `@oceanbase/design` ships two **tool-agnostic** artifacts, resolved from the default theme (identical to runtime injection). They are for editor hints only — **do not reference them in runtime styles**:

| Artifact | Path | Purpose |
| --- | --- | --- |
| CSS variable declarations | `@oceanbase/design/tokens/ob-css-vars.reference.css` | Plain `:root { --ob-*: … }` declarations, consumable by any tool that scans or indexes CSS variables |
| CSS custom data | `@oceanbase/design/tokens/ob-css-vars.css-data.json` | VS Code custom data (schema v1.1) for `css.customData` and its ecosystem |

Each tool is only a consumer of these artifacts — point it at the one it understands, no regeneration needed.

### Automatic setup

`ob-design setup` writes the VS Code-family config, and the file is meant to be committed so the whole team gets hints after `git clone`. Cursor reads `.vscode/` too.

```bash
ob-design setup                  # MCP + AGENTS.md + .vscode/settings.json (client: all)
ob-design setup --client vscode  # editor hints only
```

It merges `"css.customData": ["node_modules/@oceanbase/design/tokens/ob-css-vars.css-data.json"]` into `.vscode/settings.json` without touching your other keys. If `@oceanbase/design` is not installed yet, or the file already contains comments (JSONC), setup skips it and prints the entry to add by hand.

It also adds an **optional** `vunguyentuan.vscode-css-variables` entry to `.vscode/extensions.json` — that family of extensions is what completes `var()` arguments. This is a prompt, not a dependency: VS Code only asks whether to install it, and you can delete the entry or replace it with another workspace-scanning tool. A commented (JSONC) `extensions.json` is skipped the same way.

### Per-tool wiring

| Setup | How to wire it |
| --- | --- |
| VS Code / Cursor `css.customData` | Written by `ob-design setup`, or add the JSON path by hand. Applies to CSS, SCSS and Less documents; enhances property names and hover on `--ob-*` declarations |
| Workspace-scanning CSS variable extensions (e.g. CSS Variable Autocomplete) | Recommended by `ob-design setup` in `.vscode/extensions.json` (optional, safe to remove). Point `cssVariables.themeFiles` at the packaged `ob-css-vars.reference.css`, or drop the file into your project. Whether a given tool indexes `node_modules` differs, so verify it in your tool |
| WebStorm / IntelliJ | Put reference.css inside the project and confirm that `:root` declarations are picked up — the IDE does not index `node_modules` by default |
| React inline `style={{}}` | Plain strings have no CSS semantics and cannot be completed; prefer `obToken`, which is typed |

### What is and is not automatic

The built-in language service completes `var()` arguments only from `--x:` declarations in the **same document**: it does not scan the workspace and does not merge variables from `@import`ed files (Sass/Less variable navigation is likewise same-file). So a package cannot make `var(--ob-*)` complete on its own — set up `css.customData` for property names and hover, and a workspace-scanning extension for `var()` arguments.

For a guarantee that needs no editor config at all, validate in CI. `ob-design lint` reports unknown `var(--ob-*)` names, `--ob-padding-*` misuse and antd variables in `.css`/`.less`/`.scss` plus inline strings such as `<div style={{ color: 'var(--ob-x)' }} />`, and suggests the correct token:

```json
"scripts": { "lint:ob": "ob-design lint ./src" }
```

`ob-design lint` accepts one target path, so call it once with your source root rather than from a per-file glob.

Suggestions cover documented variables only; deprecated compatibility variables are excluded. Artifacts are generated by `pnpm run generate:ide-tokens` and kept in sync by a test.

## Design Token List

### Base Colors

<ObTokenTable category="color"></ObTokenTable>

### Semantic Colors

#### Fill

<ObTokenTable category="color-bg"></ObTokenTable>

#### Border

<ObTokenTable category="color-border"></ObTokenTable>

#### Text

<ObTokenTable category="color-text"></ObTokenTable>

#### Icon

<ObTokenTable category="color-icon"></ObTokenTable>

#### Status

<ObTokenTable category="color-status"></ObTokenTable>

### Font

<ObTokenTable category="font"></ObTokenTable>

### Radius

<ObTokenTable category="radius"></ObTokenTable>

### Shadow

<ObTokenTable category="shadow"></ObTokenTable>

### Space

<ObTokenTable category="space"></ObTokenTable>

### Component

<ObTokenTable category="component"></ObTokenTable>
