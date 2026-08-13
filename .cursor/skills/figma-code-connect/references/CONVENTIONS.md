# Code Connect mapping conventions (OB)

Parser-based React mappings: `packages/**/index.figma.tsx` using `figma.connect()` from `@figma/code-connect`.

## File location

| Package             | Path pattern                                      |
| ------------------- | ------------------------------------------------- |
| `@oceanbase/design` | `packages/design/src/<dir>/index.figma.tsx`       |
| `@oceanbase/ui`     | `packages/ui/src/<ComponentName>/index.figma.tsx` |

One file per component directory. Multiple `figma.connect()` blocks per file are allowed (e.g. Badge ×3, Breadcrumb + BreadcrumbItem).

## Imports

```tsx
import { figma } from '@figma/code-connect';
import { Alert, Button } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { SearchOutlined } from '@oceanbase/icons';
```

Never `antd` / `@ant-design/icons`.

## Figma node binding

Prefer placeholders resolved by `figma.config.json` → `documentUrlSubstitutions`:

```tsx
figma.connect(Alert, '<FIGMA_OCEANBASE_ALERT>', { ... });
```

When adding a new placeholder, add the substitution entry before publish.

Comment above each connect:

```tsx
// Figma: "Alert" · 5025:6647
// https://www.figma.com/design/...?node-id=5025-6647&m=dev
```

## Prop mapping API

| Figma type    | Code Connect                                               |
| ------------- | ---------------------------------------------------------- |
| BOOLEAN       | `figma.boolean('prop', { true: ..., false: ... })`         |
| VARIANT       | `figma.enum('prop', { figmaValue: codeValue })`            |
| TEXT          | `figma.string('Layer')` or `figma.textContent('Layer')`    |
| INSTANCE_SWAP | `figma.instance('Icon')` / `figma.children('Icon')`        |
| Nested        | `figma.enum('outer', { a: figma.enum('inner', { ... }) })` |

Figma typos in the library (e.g. `ture` vs `true`) must be mapped explicitly — match the **Figma property value string**, not ideal spelling.

## Example block

Always provide `example` that uses mapped props:

```tsx
example: ({ closable, type, message }) => (
  <Alert closable={closable} type={type} message={message} />
),
```

For static preview rows (no Figma props), use a wrapper prop + `<div>{row}</div>` (see Badge non-status blocks).

## Hard rules (§3.4 / §3.4c)

- Do **not** put `style`, `styles`, or `className` in `props` / `example` unless the component API requires it.
- Size/visual deltas that are not component props belong in demo docs, not in the connect mapping.
- `figma.connect` first argument must be the **real exported OB component** (`Alert`, `Table`, not a wrapper div).
- Keep `// @ts-nocheck` at file top.

## Resolving component API

Before editing props, confirm OB API:

```bash
ob-design info Alert
ob-design info Table
```

Or oceanbase-design MCP `ob_info`.

## Getting Figma property names

When Figma MCP is available:

1. Parse URL → `fileKey`, `nodeId` (`-` → `:`).
2. `get_context_for_code_connect` with `clientFrameworks: ["react"]`, `clientLanguages: ["typescript"]`.
3. Map returned property definitions to `figma.boolean` / `figma.enum` / etc.

Without MCP: read existing similar component mapping in-repo, or use `figma connect create <url>` as a draft only.

## Incremental validation

After editing **one** file:

```bash
pnpm run figma:parse:file -- packages/design/src/alert/index.figma.tsx
```

Before PR, run full `pnpm run figma:parse`.
