import React from 'react';
import { Dropdown, Space } from '@oceanbase/design';
import { DownOutlined } from '@oceanbase/icons';

const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

const App: React.FC = () => (
  <Space>
    <Dropdown.Button
      menu={{
        items,
        onClick: e => {
          console.log('click', e);
        },
      }}
    >
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button
      menu={{
        items,
        onClick: e => {
          console.log('click', e);
        },
      }}
      icon={<DownOutlined />}
    >
      Dropdown
    </Dropdown.Button>
  </Space>
);

export default App;
