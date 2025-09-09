import React, { useState } from 'react';
import { TreeSelect, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    console.log(newValue);
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
              title: 'my leaf',
            },
            {
              value: 'leaf2',
              title: 'your leaf',
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'sss',
              title: <b style={{ color: token.colorInfo }}>sss</b>,
            },
          ],
        },
      ],
    },
  ];

  return (
    <TreeSelect
      multiple
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
