import React from 'react';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse } from '@oceanbase/design';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse accordion items={items} onChange={onChange} />;
};

export default App;
