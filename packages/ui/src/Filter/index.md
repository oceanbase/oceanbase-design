---
title: Filter 筛选处理
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本使用" description="一般用于Table组件的Extra作为筛选组件处理"></code> <code src="./demo/search.tsx" title="开启搜索" description="在筛选面板中对选择项进行搜索"></code> <code src="./demo/multiple.tsx" title="开启多选" description="支持选择多个数据"></code>

## Filter.Cascader API

| 参数           | 说明                   | 类型       | 默认值 | 版本 |     |
| :------------- | :--------------------- | :--------- | :----- | :--- | --- |
| label          | 默认展示的文字内容     | String     | -      | -    |
| haveValueLabel | 有值后展示的文字内容   | String     | -      | -    |
| clear          | 点击清除按钮的回调函数 | () => void | -      | -    |
| showSearch     | 是否开启搜索           | boolean    | false  | -    |

- 详见 antd Cascader 文档: https://ant.design/components/cascader-cn/

## Filter.Select API

| 参数       | 说明                   | 类型          | 默认值 | 版本 |     |
| :--------- | :--------------------- | :------------ | :----- | :--- | --- |
| label      | 默认展示的文字内容     | String        | -      | -    |
| value      | 选择的值               | String        | -      | -    |
| setValue   | 设置选择的值           | (val) => void | -      | -    |
| clear      | 点击清除按钮的回调函数 | () => void    | -      | -    |
| showSearch | 是否开启搜索           | boolean       | false  | -    |
