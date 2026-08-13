---
title: 快速上手
order: 8
group: 可视化图表
---

## 使用 CodeSandbox 快速创建

- 可以使用我们提供的 [CodeSandbox 模板](https://codesandbox.io/s/oceanbase-charts-reproduction-template-dlkw72) 快速创建和预览图表。

<iframe src="https://codesandbox.io/embed/oceanbase-charts-reproduction-template-dlkw72?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="@oceanbase/charts reproduction template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 在项目中使用

### 安装

```bash
$ npm i @oceanbase/charts --save
```

### 示例

```jsx | pure
import { Bar } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1951 年',
      value: 38,
    },
    {
      year: '1952 年',
      value: 52,
    },
    {
      year: '1956 年',
      value: 61,
    },
    {
      year: '1957 年',
      value: 138,
    },
    {
      year: '1958 年',
      value: 48,
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'year',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
};
```
