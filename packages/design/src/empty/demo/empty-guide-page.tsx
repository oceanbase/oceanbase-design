import React from 'react';
import { Empty, Button, Steps } from '@oceanbase/design';
import EmptyIcon from '../icon/EmptyIcon';

export default () => {
  const description = 'This is a description.';
  const steps = [
    {
      title: '第一步',
      description,
    },
    {
      title: '第二步',
      description,
    },
    {
      title: '第三步',
      description,
    },
    {
      title: '第四步',
      description,
    },
  ];

  return (
    <Empty
      mode="page"
      image={<EmptyIcon />}
      title="Your description title"
      description={<Steps current={0} items={steps} />}
    >
      <Button type="primary">操作项</Button>
    </Empty>
  );
};
