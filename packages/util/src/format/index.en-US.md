---
title: Format
nav:
  title: Utilities
  path: /components
---

# Format

## humanSize(bytes, base = 2)

Format bytes to human-readable form.

### API

| Property | Description              | Type             | Default    |
| -------- | ------------------------ | ---------------- | ---------- |
| bytes    | Byte count               | number \| string | -          |
| base     | Base (binary or decimal) | 2 \| 10          | 2 (binary) |

## us2ms(value)

Convert microseconds to milliseconds.

### API

| Property | Description  | Type             | Default |
| -------- | ------------ | ---------------- | ------- |
| value    | Microseconds | number \| string | -       |

## byte2KB(value, base = 2)

Convert bytes to KB, 2 decimal places.

### API

| Property | Description | Type             | Default    |
| -------- | ----------- | ---------------- | ---------- |
| value    | Byte count  | number \| string | -          |
| base     | Base        | 2 \| 10          | 2 (binary) |

## byte2MB(value, base = 2)

Convert bytes to MB, 2 decimal places.

### API

| Property | Description | Type             | Default    |
| -------- | ----------- | ---------------- | ---------- |
| value    | Byte count  | number \| string | -          |
| base     | Base        | 2 \| 10          | 2 (binary) |

## byte2GB(value, base = 2)

Convert bytes to GB, 2 decimal places.

### API

| Property | Description | Type             | Default    |
| -------- | ----------- | ---------------- | ---------- |
| value    | Byte count  | number \| string | -          |
| base     | Base        | 2 \| 10          | 2 (binary) |

## byte2TB(value, base = 2)

Convert bytes to TB, 2 decimal places.

### API

| Property | Description | Type             | Default    |
| -------- | ----------- | ---------------- | ---------- |
| value    | Byte count  | number \| string | -          |
| base     | Base        | 2 \| 10          | 2 (binary) |

## byte2PB(value, base = 2)

Convert bytes to PB, 2 decimal places.

### API

| Property | Description | Type             | Default    |
| -------- | ----------- | ---------------- | ---------- |
| value    | Byte count  | number \| string | -          |
| base     | Base        | 2 \| 10          | 2 (binary) |

## GB2byte(value, base = 2)

Convert GB to bytes.

### API

| Property | Description | Type             | Default    |
| -------- | ----------- | ---------------- | ---------- |
| value    | GB count    | number \| string | -          |
| base     | Base        | 2 \| 10          | 2 (binary) |

## toBoolean(value)

Convert any value to boolean.

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| value    | Any value   | any  | -       |

## toPercent(value)

Convert float to percent. Use `decimal` for decimal places.

### API

| Property | Description   | Type             | Default |
| -------- | ------------- | ---------------- | ------- |
| value    | Float         | number \| string | -       |
| decimal  | Integer (>=0) | number           | 2       |

## formatNumber(value)

Format number with rounding, max 2 decimals. Use `decimal` to customize.

### API

| Property | Description   | Type   | Default |
| -------- | ------------- | ------ | ------- |
| value    | Float         | number | -       |
| decimal  | Integer (>=0) | number | 2       |

## separateNumber(value)

Format number with thousand separator: `1234 => 1,234`, `1234.523 => 1,234.523`

### API

| Property | Description      | Type   | Default |
| -------- | ---------------- | :----- | ------- |
| value    | Integer or float | number | -       |

## formatTime(value, format = 'YYYY-MM-DD HH:mm:ss')

Format time display.

### API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Timestamp (microseconds, milliseconds, seconds) or string like 2018-10-30 14:52:16.0 | number \| string | - |
| format | Display format | string | YYYY-MM-DD HH:mm:ss |
