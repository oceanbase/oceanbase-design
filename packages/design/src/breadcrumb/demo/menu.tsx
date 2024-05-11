import React, { useState } from 'react';
import { Breadcrumb } from '@oceanbase/design';

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const menuItems = [
    {
      key: '1',
      label: 'Jackson',
    },
    {
      key: '2',
      label: 'John',
    },
    {
      key: '3',
      label: 'Lucy',
    },
  ];
  return (
    <Breadcrumb
      items={[
        {
          href: '',
          title: 'User',
        },
        {
          title: 'User List',
        },
        {
          title: menuItems.find(item => item.key === selectedKey).label,
          menu: {
            items: menuItems,
            selectedKeys: [selectedKey],
            onClick: ({ key }) => {
              setSelectedKey(key);
            },
          },
        },
      ]}
    />
  );
};

export default App;
