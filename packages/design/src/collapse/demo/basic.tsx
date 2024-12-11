import React from 'react';
import type { CollapseProps } from '@oceanbase/design';
import { Collapse } from '@oceanbase/design';
import { SettingOutlined } from '@oceanbase/icons';

const text =
  'This is long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long panel content.';

const genExtra = () => (
  <SettingOutlined
    onClick={e => {
      // If you don't want click extra trigger collapse, you can prevent this:
      e.stopPropagation();
    }}
  />
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    extra: genExtra(),
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    extra: genExtra(),
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    extra: genExtra(),
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};

export default App;
