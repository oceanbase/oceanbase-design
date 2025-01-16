import React, { useState } from 'react';
import type { TableColumnsType } from '@oceanbase/design';
import { Form, Switch, Table } from '@oceanbase/design';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

const App: React.FC = () => {
  const [expandRowByClick, setExpandRowByClick] = useState(false);

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

  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="expandRowByClick" required={true}>
          <Switch
            size="small"
            value={expandRowByClick}
            onClick={value => {
              setExpandRowByClick(value);
            }}
          />
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        expandable={{
          expandRowByClick,
          expandedRowRender: () => <div>This is expanded content</div>,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
    </>
  );
};

export default App;
