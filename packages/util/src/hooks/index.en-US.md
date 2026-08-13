---
title: Hooks
nav:
  title: Utilities
  path: /components
---

# Hooks

## useQuery

Hook for managing URL query params.

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

| Property  | Description                | Type                                     |
| --------- | -------------------------- | ---------------------------------------- |
| values    | Serialized location.search | {[key: string]: any}[]                   |
| setValues | Update query params        | (values: {[key: string]: any}[]) => void |

#### Params

| Property        | Description                        | Type                         | Default |
| --------------- | ---------------------------------- | ---------------------------- | ------- |
| history         | Browser history                    | any                          | -       |
| queryParameters | Config for processing query params | (QueryParameter \| string)[] | -       |

QueryParameter

| Property | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| key | Query key | string | - | Yes |
| type | Search value type | 'number' \| 'boolean' \| 'array' \| 'json' \| 'string' \| 'customize' | 'string' | No |
| defaultValue | Default form value | any | - | No |
| search2Query | Convert form value to query | (value: any) => string \| string[] \| null | - | No |
| query2Search | Convert query to form value | (query: string \| string[] \| null) => any | - | No |

## useTableData(config: Config)

Fetch table data with built-in pagination, filter, and sort. Supports conditional requests. Backend contract:

- Pagination: page, size
- Sort (single field):
  - Asc: {field},asc
  - Desc: {field},desc

```jsx
import React, { useState } from 'react';
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| fn | Service function | Fn | - |
| params | Query params | object | {} |
| deps | Request deps (same as useEffect) | any[] | [] |
| conditions | Request conditions; no request if any is null/undefined/''/NaN | any[] | [] |
| options | See useRequest [options](https://ahooks.js.org/zh-CN/hooks/async#params) | [] | - |

## useScrollToPosition(target, options)

Scroll to position, supports request sync. Use case: restore scroll position when navigating back (with scrollToPosition).

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
    // Restore scroll when returning to list
    scrollToPosition();
    history.goBack();
  };
};
```

#### Result

| Property         | Description                              | Type       |
| ---------------- | ---------------------------------------- | ---------- |
| scrollToPosition | Call to trigger scroll to saved position | () => void |

#### Params

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| target | DOM node, Ref, or querySelector string | undefined \| HTMLElement \| (() => HTMLElement) \| Document \| React.MutableRefObject | - |
| options | Scroll storage mode, request sync | Options \| undefined | - |

#### Options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Scroll storage mode | 'query' \| 'sessionStorage' | 'sessionStorage' |
| ready | Sync with request; scroll when ready; omit to scroll immediately | boolean \| undefined | - |
