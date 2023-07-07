---
title: 通用
nav:
  title: 工具函数
  path: /components
---

# Util

## isNullValue(value)

是否为空值，包括 null、undefined、'' 和 NaN

### API

| 参数  | 说明     | 类型 | 默认值 |
| ----- | -------- | ---- | ------ |
| value | 判断的值 | any  | -      |

## findBy(array, key, value)

找到任意属性 key 对应的值和目标值相等的数组对象，相比 `lodash` 的 [find](https://www.lodashjs.com/docs/lodash.find) 函数，该函数的返回值不需要判空，返回一定是一个非空值。

### API

| 参数  | 说明     | 类型                                | 默认值 |
| ----- | -------- | ----------------------------------- | ------ |
| array | 对象数组 | object[]                            | -      |
| key   | 属性 key | string                              | -      |
| value | 目标值   | [FindByValueType](#findbyvaluetype) | -      |

## findByValue(array, value)

找到属性 `value` 对应的值和目标值相等的数组对象，相比 `findBy` 函数，该函数的默认筛选属性是 `value`。

### API

| 参数  | 说明     | 类型                                | 默认值 |
| ----- | -------- | ----------------------------------- | ------ |
| array | 对象数组 | object[]                            | -      |
| value | 目标值   | [FindByValueType](#findbyvaluetype) | -      |

## FindByValueType

`findByXX` 相关函数的 `value` 类型。

```ts
type FindByValueType = string | number | boolean | null | undefined;
```

## directTo(url, blank = true)

页面跳转，不同于 `history.push()` 仅支持同一标签页下跳转，`directTo` 常用于新开标签页跳转。

### API

| 参数  | 说明                             | 类型    | 默认值 |
| ----- | -------------------------------- | ------- | ------ |
| url   | 跳转链接，支持相对链接和绝对链接 | string  | -      |
| blank | 是否新开标签页                   | boolean | true   |

## downloadFile(content, fileName, options?)

文件下载，支持下载格式为 `Blob`、`File`、`ArrayBuffer` 和 `string` 的文件。

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 下载内容 | Blob \| File \| ArrayBuffer \| string | - |
| fileName | 下载后保存的文件名 | string | - |
| options | BlobPropertyBag 字典，可参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/Blob#%E5%8F%82%E6%95%B0) | BlobPropertyBag | - |
