---
title: Util
nav:
  title: Utilities
  path: /components
---

# Util

## isNullValue(value)

Check for null/undefined/''/NaN.

### API

| Property | Description    | Type | Default |
| -------- | -------------- | ---- | ------- |
| value    | Value to check | any  | -       |

## findBy(array, key, value)

Find object in array where property equals value. Unlike lodash [find](https://www.lodashjs.com/docs/lodash.find), returns a non-null value.

### API

| Property | Description  | Type                                | Default |
| -------- | ------------ | ----------------------------------- | ------- |
| array    | Object array | object[]                            | -       |
| key      | Property key | string                              | -       |
| value    | Target value | [FindByValueType](#findbyvaluetype) | -       |

## findByValue(array, value)

Find object where `value` property equals target. Same as findBy with default key `value`.

### API

| Property | Description  | Type                                | Default |
| -------- | ------------ | ----------------------------------- | ------- |
| array    | Object array | object[]                            | -       |
| value    | Target value | [FindByValueType](#findbyvaluetype) | -       |

## FindByValueType

Value type for findByXX functions.

```ts
type FindByValueType = string | number | boolean | null | undefined;
```

## directTo(url, blank = true)

Navigate to URL. Unlike `history.push()` (same tab), `directTo` opens in new tab by default.

### API

| Property | Description                | Type    | Default |
| -------- | -------------------------- | ------- | ------- |
| url      | URL (relative or absolute) | string  | -       |
| blank    | Open in new tab            | boolean | true    |

## downloadFile(content, fileName, options?)

Download file. Supports Blob, File, ArrayBuffer, string.

### API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Content to download | Blob \| File \| ArrayBuffer \| string | - |
| fileName | File name after download | string | - |
| options | BlobPropertyBag, see [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/Blob#%E5%8F%82%E6%95%B0) | BlobPropertyBag | - |
