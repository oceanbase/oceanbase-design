import React from 'react';
import { Space, Switch, Table, Typography } from '@oceanbase/design';
import type { TableProps } from '@oceanbase/design';

interface RecordType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address1: string;
  address2: string;
  address3: string;
}

const columns: TableProps<RecordType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120,
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    width: 120,
  },
  {
    title: 'Group',
    width: 120,
    render: (_, record) => `Group ${Math.floor(record.id / 4)}`,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 100,
  },
  {
    title: 'Address 1',
    dataIndex: 'address1',
  },
  {
    title: 'Address 2',
    dataIndex: 'address2',
  },
  {
    title: 'Address 3',
    dataIndex: 'address3',
  },
  {
    title: 'Action',
    width: 150,
    fixed: 'right',
    render: () => (
      <Space>
        <Typography.Link>Action1</Typography.Link>
        <Typography.Link>Action2</Typography.Link>
      </Space>
    ),
  },
];

const getData = (count: number) => {
  const data: RecordType[] = new Array(count).fill(null).map((_, index) => ({
    id: index,
    firstName: `First_${index.toString(16)}`,
    lastName: `Last_${index.toString(16)}`,
    age: 25 + (index % 10),
    address1: `New York No. ${index} Lake Park`,
    address2: `London No. ${index} Lake Park`,
    address3: `Sydney No. ${index} Lake Park`,
  }));

  return data;
};

const App = () => {
  const [bordered, setBordered] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const data = getData(10000);

  const expandableProps = React.useMemo<TableProps<RecordType>['expandable']>(() => {
    if (!expanded) {
      return undefined;
    }
    return {
      columnWidth: 48,
      expandedRowRender: record => <p style={{ margin: 0 }}>🎉 Expanded {record.address1}</p>,
    };
  }, [expanded]);

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Switch
            checked={bordered}
            onChange={() => setBordered(!bordered)}
            checkedChildren="Bordered"
            unCheckedChildren="Bordered"
          />
          <Switch
            checked={expanded}
            onChange={() => setExpanded(!expanded)}
            checkedChildren="Expandable"
            unCheckedChildren="Expandable"
          />
        </Space>

        <Table
          bordered={bordered}
          virtual
          columns={columns}
          scroll={{ x: 2000, y: 400 }}
          rowKey="id"
          dataSource={data}
          pagination={false}
          rowSelection={
            expanded
              ? undefined
              : {
                  columnWidth: 48,
                }
          }
          expandable={expandableProps}
        />
      </Space>
    </div>
  );
};

export default App;
