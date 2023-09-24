---
title: TagSelect 标签式单选/多选
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/tagSelect-base.tsx" title="基本"></code> <code src="./demo/tagSelect-group.tsx" title="标签选择器组合"></code> <code src="./demo/tagSelect-radio" title="单选"></code> <code src="./demo/tagSelect-multiple" title="多选"></code> <code src="./demo/tagSelect-img" title="图片标签"></code> <code src="./demo/tagSelect-size" title="尺寸"></code>

## API

### TagSelect.Item

| 参数           | 说明                       | 类型                | 默认值 |
| :------------- | :------------------------- | :------------------ | :----- |
| checked        | 指定当前是否选中           | boolean             | false  |
| defaultChecked | 初始是否选中               | boolean             | false  |
| value          | 选项值                     | string \| number    | -      |
| disabled       | 禁用                       | boolean             | false  |
| cover          | 设置为图片选项或自定义形式 | string \| ReactNode | -      |
| onChange       | 变化时的回调               | function(e: Event)  | -      |

### TagSelect.Group

| 参数         | 说明             | 类型                                     | 默认值 |
| :----------- | :--------------- | :--------------------------------------- | :----- |
| title        | 选项组标题       | string                                   | -      |
| defaultValue | 默认选中的选项   | string \| string[] \| number \| number[] | -      |
| disabled     | 整组禁用         | boolean                                  | false  |
| options      | 指定可选项       | string[] \| number[] \| Option[]         | []     |
| value        | 当前选中的选项   | string \| string[] \| number \| number[] | -      |
| multiple     | 是否为多选       | boolean                                  | false  |
| size         | 设置选项的大小   | large \| middle \| small                 | middle |
| onChange     | 变化时的回调函数 | function(checkedValue)                   | -      |
