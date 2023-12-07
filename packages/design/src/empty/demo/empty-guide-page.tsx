import React, { useState } from 'react';
import { Empty, Button, Steps, message } from '@oceanbase/design';

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

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Empty
      mode="page"
      iconType="tenant"
      title="Your description title"
      description={<Steps current={current} items={steps} />}
    >
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Empty>
  );
};
