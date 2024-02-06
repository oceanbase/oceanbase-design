import React from 'react';
import { Empty, Button } from '@oceanbase/design';

export default () => {
  const description = 'This is a long long long long long long description.';
  const steps = [
    {
      title: 'First',
      description,
    },
    {
      title: 'Second',
      description,
    },
    {
      title: 'Third',
      description,
    },
    {
      title: 'Fourth',
      description,
    },
  ];

  return (
    <Empty title="Create Your Cluster" steps={steps}>
      <Button type="primary">Create Cluster</Button>
    </Empty>
  );
};
