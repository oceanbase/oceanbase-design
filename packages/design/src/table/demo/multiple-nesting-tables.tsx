import React, { useState } from 'react';
import { Badge, Button, Dropdown, Space, Table, TableColumnsType } from '@oceanbase/design';
import type { SizeType } from '@oceanbase/design/es/config-provider';
import { DownOutlined } from '@oceanbase/icons';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [middleSelectedRowKeys, setMiddleSelectedRowKeys] = useState<any[]>([]);
  const [smallSelectedRowKeys, setSmallSelectedRowKeys] = useState<any[]>([]);
  const expandedRowRender = (size: SizeType) => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown menu={{ items }}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table size={size} columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  const toolOptionsRender = (size: any) => {
    return [
      <Button size={size}>批量删除</Button>,
      <Button size={size}>批量更新</Button>,
      <Button size={size}>批量重启</Button>,
    ];
  };

  const toolSelectedContent = (selectedRowKeys: any, selectedRows: any) => {
    return <Table columns={columns} dataSource={selectedRows} pagination={false} />;
  };

  return (
    <>
      <Table
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
        dataSource={data}
        toolOptionsRender={() => toolOptionsRender('middle')}
        toolSelectedContent={toolSelectedContent}
        rowSelection={{
          selectedRowKeys: selectedRowKeys,
          onChange: (keys: React.Key[], rows: any[]) => {
            setSelectedRowKeys(keys);
          },
        }}
        pagination={{
          showTotal: total => `共 ${total} 条`,
        }}
      />
      <br />
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: () => expandedRowRender('middle'),
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
        size="middle"
        toolOptionsRender={() => toolOptionsRender('small')}
        toolSelectedContent={toolSelectedContent}
        rowSelection={{
          selectedRowKeys: middleSelectedRowKeys,
          onChange: (keys: React.Key[], rows: any[]) => {
            setMiddleSelectedRowKeys(keys);
          },
        }}
        pagination={{
          showTotal: total => `共 ${total} 条`,
        }}
      />
      <br />
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: () => expandedRowRender('small'),
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
        size="small"
        toolOptionsRender={() => toolOptionsRender('small')}
        toolSelectedContent={toolSelectedContent}
        rowSelection={{
          selectedRowKeys: smallSelectedRowKeys,
          onChange: (keys: React.Key[], rows: any[]) => {
            setSmallSelectedRowKeys(keys);
          },
        }}
        pagination={{
          showTotal: total => `共 ${total} 条`,
        }}
      />
    </>
  );
};

export default App;
