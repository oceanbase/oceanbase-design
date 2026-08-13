---
title: Quick Start
order: 2
group: General
---

## Quick Create with CodeSandbox

- Use our [CodeSandbox template](https://codesandbox.io/s/oceanbase-design-reproduction-template-k26fm5) to quickly create and preview.

<iframe src="https://codesandbox.io/embed/oceanbase-design-reproduction-template-k26fm5?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="@oceanbase/design reproduction template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Use in Your Project

### Installation

```bash
$ npm i @oceanbase/design --save
```

### Example

```jsx | pure
import { Table } from '@oceanbase/design';

const App = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Hu Yanbin',
      age: 32,
      address: 'No.1 West Lake Park, Xihu District',
    },
    {
      key: '2',
      name: 'Hu Yanzu',
      age: 42,
      address: 'No.1 West Lake Park, Xihu District',
    },
    {
      key: '3',
      name: 'Hu Yanbin',
      age: 32,
      address: 'No.1 West Lake Park, Xihu District',
    },
    {
      key: '4',
      name: 'Hu Yanzu',
      age: 42,
      address: 'No.1 West Lake Park, Xihu District',
    },
    {
      key: '5',
      name: 'Hu Yanbin',
      age: 32,
      address: 'No.1 West Lake Park, Xihu District',
    },
    {
      key: '6',
      name: 'Hu Yanzu',
      age: 42,
      address: 'No.1 West Lake Park, Xihu District',
    },
    {
      key: '7',
      name: 'Hu Yanbin',
      age: 32,
      address: 'No.1 West Lake Park, Xihu District',
    },
    {
      key: '8',
      name: 'Hu Yanzu',
      age: 42,
      address: 'No.1 West Lake Park, Xihu District',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};
```
