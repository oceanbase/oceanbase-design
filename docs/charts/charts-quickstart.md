---
title: Quick Start
order: 8
group: Charts
---

## Quick Create with CodeSandbox

- Use our [CodeSandbox template](https://codesandbox.io/s/oceanbase-charts-reproduction-template-dlkw72) to quickly create and preview charts.

<iframe src="https://codesandbox.io/embed/oceanbase-charts-reproduction-template-dlkw72?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="@oceanbase/charts reproduction template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Use in Your Project

### Installation

```bash
$ npm i @oceanbase/charts --save
```

### Example

```jsx | pure
import { Bar } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1951',
      value: 38,
    },
    {
      year: '1952',
      value: 52,
    },
    {
      year: '1956',
      value: 61,
    },
    {
      year: '1957',
      value: 138,
    },
    {
      year: '1958',
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
