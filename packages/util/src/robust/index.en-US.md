---
title: Robustness
nav:
  title: Utilities
  path: /components
---

# Robustness

## jsonParse(jsonStr, defaultValue)

Parse JSON safely. Returns defaultValue on parse error to avoid crashes.

### API

| Property     | Description              | Type   | Default |
| ------------ | ------------------------ | ------ | ------- |
| jsonStr      | JSON string              | string | -       |
| defaultValue | Default when parse fails | any    | -       |

## protect(value, protectValue)

Null protection.

### API

| Property     | Description    | Type | Default |
| ------------ | -------------- | ---- | ------- |
| value        | Value          | any  | -       |
| protectValue | Fallback value | any  | -       |

## stringProtect(value, protectValue)

String null protection.

### API

| Property     | Description    | Type   | Default |
| ------------ | -------------- | ------ | ------- |
| value        | Value          | string | -       |
| protectValue | Fallback value | string | '-'     |
