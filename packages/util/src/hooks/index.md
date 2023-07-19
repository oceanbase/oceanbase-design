---
title: Hooks
nav:
  title: 工具函数
  path: /components
---

# Hooks

## useQuery

便捷管理 url query 的 hook

```tsx
import { history } from 'react-router-dom';

interface FormValues {
  name: string;
  searchKey: {
    name: string;
  };
}

const C = () => {
  const { values, setValues } = useQuery<FormValues>(history, [
    { key: 'name' },
    {
      key: 'searchKey',
      type: 'string',
      defaultValue: { name: 'hello' },
      search2Query: v => v.name,
      query2Search: v => ({ name: v }),
    },
  ]);

  const handleFormChange = values => {
    setSearchValues({ searchKey: form.getFieldValue('searchKey') });
  };

  return (
    <Form<FormValues> onValuesChange={handleFormChange}>
      <Form.Item name="name" initialValue={values.name}>
        <Input />
      </Form.Item>
      <Form.Item name="searchKey" initialValue={values.searchKey.name}>
        <Input.Search />
      </Form.Item>
    </Form>
  );
};
```

### API

#### Result

| 参数      | 说明                     | 类型                                     |
| --------- | ------------------------ | ---------------------------------------- |
| values    | 序列化的 location.search | {[key: string]: any}[]                   |
| setValues | 更新 query 参数          | (values: {[key: string]: any}[]) => void |

#### Params

| 参数            | 说明                                           | 类型            | 默认值    |
| --------------- | ---------------------------------------------- | --------------- | --------- | --- |
| history         | browser history                                | any             | -         |
| queryParameters | 获取 `values` 和 设置 query 前对数据的处理配置 | (QueryParameter | string)[] | -   |

QueryParameter

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| key | query key | string | - | 是 |
| type | search value 的类型 | 'number' | 'boolean' | 'array' | 'json' | 'string' | 'customize' | 'string' | 否 |
| defaultValue | form value 默认值 | any | - | 否 |
| search2Query | 自定义将 form value 处理为 query 的处理函数 | (value: any) => string | string[] | null | - | 否 |
| query2Search | 自定义 query 处理为 from value 的处理函数 | (query: string \| string[] \| null) => any | - | 否 |

## useTableData(config: Config)

获取表格数据，内置后端分页、筛选和排序的请求逻辑，同时支持条件请求。其中与后端接口的约定如下，业务层不需要手动管理:

- 分页参数: page、size
- 排序参数(只支持根据单个字段排序):
  - 升序排序: {field},asc
  - 降序排序: {field},desc

```jsx
import { useState } from 'react';
import { useTableData } from '@oceanbase/util';

const [name, setName] = useState('');
const [age, setAge] = useState('');

const { tableProps, refresh } = useTableData({
  fn: () => new Promise(resolve => resolve()),
  params: {
    name,
    age,
  },
  deps: [name, age],
});
```

### API

#### Config

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fn | `service` 函数 | Fn | - |
| params | 查询参数对象 | object | {} |
| deps | 请求更新的依赖数组，等同于 `useEffect` 的第二个参数 | any[] | [] |
| conditions | 请求发起的条件数组，当数组中存在空值 `(null、undefined、''、NaN)`，则请求不会发出 | any[] | [] |
| options | 参考 useRequest 的[定义](https://ahooks.js.org/zh-CN/hooks/async#params) | [] | - |

## useScrollToPosition(target, options)

使用 scroll 属性定位页面位置的 hook，支持和请求联动，主要使用场景为路由回退时（配合 scrollToPosition 使用），定位到原先的位置。

```jsx
const List = () => {
  const { data = [], loading } = useRequest(fn, {
    formatResult: formatArrayResult,
  });

  const ref = React.useRef(null);

  useScrollToPosition(ref, {
    ready: !loading,
  });

  const showDetail = () => {
    history.push({
      pathname: `/cluster`,
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => {
        return (
          <a
            onClick={() => {
              showDetail();
            }}
          >
            {text}
          </a>
        );
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  return (
    <div>
      <div style={{ height: '100vh' }}>useScrollToPosition</div>
      <Table ref={ref} columns={columns} dataSource={data} />
    </div>
  );
};
```

```jsx
const Detail = () => {
  const { scrollToPosition } = useScrollToPosition();
  const backToList = () => {
    // 设置返回 list 页面时，进行 scroll 到原先位置
    scrollToPosition();
    history.goBack();
  };
};
```

#### Result

| 参数             | 说明                                             | 类型       |
| ---------------- | ------------------------------------------------ | ---------- |
| scrollToPosition | 调用这个函数，才能触发页面进行 scroll 到原先位置 | () => void |

#### Params

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | DOM 节点，Ref 对象，或者符合 querySelector 查询的字符串 | undefined \| HTMLElement \| (() => HTMLElement) \| Document \| React.MutableRefObject | - |
| options | 设置 scroll 存储的模式，是否启用数据联动 | Options \| undefined | - |

#### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 存储 scroll 数据的模式 | 'query'\| 'sessionStorage' | 'sessionStorage' |
| ready | 与请求联动，当请求完成后触发定位，未设置时直接触发定位 | boolean \| undefined | - |
