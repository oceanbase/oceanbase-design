import React, { useState } from 'react';
import { Button, ConfigProvider, Form, Radio, Table, Typography } from '@oceanbase/design';
import type { ThemeConfig } from '@oceanbase/design';

type PaginationCompactOption = 'unset' | 'true' | 'false';
type SizeOption = 'default' | 'middle' | 'small';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: 120,
    render: () => <Button>Edit</Button>,
  },
];

const dataSource = Array.from({ length: 50 }, (_, index) => ({
  key: index + 1,
  name: `John Brown ${index + 1}`,
  age: 32,
  address: `New York No. ${index + 1} Lake Park`,
}));

export default () => {
  const [paginationCompactOption, setPaginationCompactOption] =
    useState<PaginationCompactOption>('unset');
  const [size, setSize] = useState<SizeOption>('default');

  // An explicit `undefined` is dropped when ConfigProvider merges themes, so only add the key when
  // the option sets it.
  const theme: ThemeConfig | undefined =
    paginationCompactOption === 'unset'
      ? undefined
      : {
          components: {
            Table: {
              paginationCompact: paginationCompactOption === 'true',
            },
          },
        };

  const style = {
    marginBottom: 8,
  };

  return (
    <ConfigProvider theme={theme}>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 16 }}>
        <Form.Item label="paginationCompact" style={style}>
          <Radio.Group
            value={paginationCompactOption}
            onChange={e => setPaginationCompactOption(e.target.value)}
          >
            <Radio.Button value="unset">unset</Radio.Button>
            <Radio.Button value="true">true</Radio.Button>
            <Radio.Button value="false">false</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table size" style={style}>
          <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="middle">middle</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={dataSource}
        size={size === 'default' ? undefined : size}
        pagination={{ pageSize: 5, showSizeChanger: true }}
      />
    </ConfigProvider>
  );
};
