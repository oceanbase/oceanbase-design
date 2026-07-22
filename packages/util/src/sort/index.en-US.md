---
title: Sort
nav:
  title: Utilities
  path: /components
---

# Sort

## sortByNumber(a, b, property)

Sort by numeric value. Often used for table column sort.

### API

| Property | Description         | Type   | Default |
| -------- | ------------------- | ------ | ------- |
| a        | First object        | object | -       |
| b        | Second object       | object | -       |
| property | Property to compare | string | -       |

## sortByString(a, b, property)

Sort by string ASCII. Often used for table column sort.

### API

| Property | Description         | Type   | Default |
| -------- | ------------------- | ------ | ------- |
| a        | First object        | object | -       |
| b        | Second object       | object | -       |
| property | Property to compare | string | -       |

## sortByMoment(a, b, property)

Sort by time. Often used for table column sort.

### API

| Property | Description         | Type   | Default |
| -------- | ------------------- | ------ | ------- |
| a        | First object        | object | -       |
| b        | Second object       | object | -       |
| property | Property to compare | string | -       |

## sortByEnum(a, b, property, arr = [])

Sort by enum array order. Supports object and primitive values. Use with `Array.sort`. When `property` is empty, compare by value (for plain arrays).

### API

| Property | Description          | Type                              | Default |
| -------- | -------------------- | --------------------------------- | ------- |
| a        | First object         | object                            | -       |
| b        | Second object        | object                            | -       |
| property | Property to sort by  | string \| null \| undefined \| '' | -       |
| arr      | Enum array for order | string[]                          | []      |
