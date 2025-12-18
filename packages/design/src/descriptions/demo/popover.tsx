import React from 'react';
import { Button, Descriptions, Form, Popover, Radio } from '@oceanbase/design';
import type { DescriptionsProps } from '@oceanbase/design';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Address',
    span: 2,
    children: 'Xihu District, Hangzhou, Zhejiang, China',
  },
  {
    key: '5',
    label: 'Remark',
    children: 'empty',
  },
];

const App: React.FC = () => {
  return (
    <Popover
      content={
        <Descriptions size="small" title="Title" items={items} colon={false} contentAlign="left" />
      }
    >
      <Button type="primary">Hover me</Button>
    </Popover>
  );
};

export default App;
