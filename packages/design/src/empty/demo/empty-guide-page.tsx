import React from 'react';
import { Empty, Button } from '@oceanbase/design';
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
      description:
        'This is a description.This is a description.This is a description.This is a description.This is a description.',
    },
  ];

  return (
    <Empty mode="page" image={<EmptyIcon />} title="Your description title" steps={steps}>
      <Button type="primary">操作项</Button>
    </Empty>
  );
};
