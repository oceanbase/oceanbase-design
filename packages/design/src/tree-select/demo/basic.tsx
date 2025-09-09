import React, { useState } from 'react';
import { TreeSelect, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              value: 'leaf1',
              title: 'leaf1',
            },
            {
              value: 'leaf2',
              title: 'leaf2',
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'leaf3',
              title: <b style={{ color: token.colorInfo }}>leaf3</b>,
            },
          ],
        },
      ],
    },
  ];

  return (
    <TreeSelect
      showSearch
      allowClear
      treeDefaultExpandAll
      treeData={treeData}
      value={value}
      onChange={onChange}
      style={{ width: '100%' }}
    />
  );
};

export default App;
