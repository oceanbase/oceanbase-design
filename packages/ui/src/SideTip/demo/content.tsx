/**
 * title: 内容展示
 * iframe: 600
 */

import { FileTextOutlined } from '@oceanbase/icons';
import { Badge, Card, Dropdown, Progress, Table } from '@oceanbase/design';
import { SideTip } from '@oceanbase/ui';
import { findByValue } from '@oceanbase/util';
import { useState } from 'react';

export const STATUS_LIST = [
  { label: '全部', badgeStatus: 'default', value: 'all' },
  { label: '关闭', badgeStatus: 'default', value: 'close' },
  { label: '运行中', badgeStatus: 'processing', value: 'running' },
  { label: '已上线', badgeStatus: 'success', value: 'online' },
  { label: '异常', badgeStatus: 'error', value: 'error' },
];
export default () => {
  const [open, setOpen] = useState(false);

  const handleVisbileChange = isVisible => {
    setOpen(isVisible);
  };

  const columns = [
    {
      title: '任务名称',
      dataIndex: 'name',
      width: 80,
    },
    {
      title: '状态',
      dataIndex: 'status',
      initialValue: 'all',
      width: 100,
      render: text => {
        const { label = '全部', badgeStatus = 'default' } = findByValue(STATUS_LIST, text) || {};
        return <Badge status={badgeStatus} text={label} />;
      },
    },

    {
      title: '进度',
      key: 'progress',
      dataIndex: 'progress',
      render: (text, record) => {
        return (
          <Progress
            percent={record.progress}
            status={record.status !== 'error' ? 'active' : 'exception'}
          />
        );
      },
      width: 200,
    },
    {
      title: '更新时间',
      key: 'since2',
      width: 120,
      dataIndex: 'createdAt',
      valueType: 'date',
    },
  ];

  const tableListDataSource = [];

  const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
  };
  // success exception normal active

  for (let i = 0; i < 6; i += 1) {
    tableListDataSource.push({
      key: i,
      name: `TradeCode ${i}`,
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
      updatedAt: Date.now() - Math.floor(Math.random() * 1000),
      createdAt: Date.now() - Math.floor(Math.random() * 2000),
      money: Math.floor(Math.random() * 2000) * i,
      progress: Math.ceil(Math.random() * 100) + 1,
    });
  }

  const table = (
    <Card>
      <p style={{ fontSize: 16, fontWeight: 'bold' }}>当前共有 6 个任务正在进行中</p>
      <Table columns={columns} rowKey="key" dataSource={tableListDataSource} pagination={false} />
    </Card>
  );
  return (
    <Dropdown
      overlay={table}
      open={open}
      placement="topRight"
      trigger={['hover', 'click']}
      onVisibleChange={handleVisbileChange}
      getPopupContainer={() => document.getElementById('content')}
      overlayStyle={{ paddingInlineEnd: 56, width: 720 }}
    >
      <SideTip
        type="primary"
        icon={<FileTextOutlined />}
        badge={{
          count: 3,
        }}
        id="content"
        open={open}
      />
    </Dropdown>
  );
};
