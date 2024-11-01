import React from 'react';
import { Button, Dropdown, Space, message } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
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

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    <Dropdown menu={menuProps}>
      <Button type="primary">
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);

export default App;
