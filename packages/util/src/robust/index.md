---
title: 健壮性
nav:
  title: 工具函数
  path: /components
---

# 健壮性

## jsonParse(jsonStr, defaultValue)

为了避免解析错误格式的 json 字符串时页面奔溃，需要使用错误处理。

### API

| 参数         | 说明                        | 类型   | 默认值 |
| ------------ | --------------------------- | ------ | ------ |
| jsonStr      | json 字符串                 | string | -      |
| defaultValue | json 解析报错时返回的默认值 | any    | -      |

## protect(value, protectValue)

空保护函数

### API

| 参数         | 说明   | 类型 | 默认值 |
| ------------ | ------ | ---- | ------ |
| value        | 值     | any  | -      |
| protectValue | 保护值 | any  | -      |

## stringProtect(value, protectValue)

空保护函数

### API

| 参数         | 说明   | 类型   | 默认值 |
| ------------ | ------ | ------ | ------ |
| value        | 值     | string | -      |
| protectValue | 保护值 | string | '-'    |
