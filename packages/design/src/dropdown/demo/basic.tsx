import React from 'react';
import { Dropdown, Space } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import { DownOutlined, SmileOutlined } from '@oceanbase/icons';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        disabled menu item
      </a>
    ),
    disabled: true,
  },
  {
    key: '5',
    label: 'danger menu item',
    danger: true,
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        menu item with divider
      </a>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        menu item with icon
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: '6',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        menu item with extra
      </a>
    ),
    extra: '⌘S',
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;
