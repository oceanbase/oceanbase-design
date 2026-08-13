---
title: Boundary
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/Function.tsx" title="Business function fallback"></code>
<code src="./demo/403Code.tsx" title="403 error fallback"></code>
<code src="./demo/404Code.tsx" title="404 error fallback"></code>
<code src="./demo/ErrorException.tsx" title="JS Error fallback" description="Wrap the page with Exception component, errors in children will trigger fallback."></code>
<code src="./demo/CompatibleException.tsx" title="Compatibility error" description="Wrap the page with Exception component, pass value when app detects compatibility issues"></code>

## API

### Boundary.Code

| Property   | Description                            | Type       | Default | Version |
| :--------- | :------------------------------------- | :--------- | :------ | :------ |
| code       | Error status code (403, 404 supported) | number     | -       | -       |
| children   | Children                               | ReactNode  | -       | -       |
| onClick    | Button click callback                  | () => void | -       | -       |
| imageUrl   | Image URL                              | string     | -       | -       |
| title      | Title text                             | string     | -       | -       |
| buttonText | Button text                            | string     | -       | -       |

### Boundary.Function

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| config | Config object for rendered data | Record<string, [ConfigType](boundary#ConfigType)> | - | - |
| state | Current rendered data key | key of config | - | - |
| children | Children | ReactNode | - | - |
| onClick | Button click callback (when same for all types; use config for per-type) | () => void | - | - |

### ConfigType

| Property   | Description           | Type       | Default | Version |
| :--------- | :-------------------- | :--------- | :------ | :------ |
| title      | Title                 | string     | -       | -       |
| imageUrl   | Image URL             | string     | -       | -       |
| buttonText | Button text           | string     | -       | -       |
| onClick    | Button click callback | () => void | -       | -       |

### Boundary.Exception

| Property     | Description                | Type       | Default | Version |
| :----------- | :------------------------- | :--------- | :------ | :------ |
| children     | Children                   | ReactNode  | -       | -       |
| subscription | Content text               | string     | -       | -       |
| onClick      | Button click callback      | () => void | -       | -       |
| imageUrl     | Image URL                  | string     | -       | -       |
| title        | Title text                 | string     | -       | -       |
| buttonText   | Button text                | string     | -       | -       |
| showError    | Whether to show error info | boolean    | false   | -       |
| hasButton    | Whether to show button     | boolean    | true    | -       |
