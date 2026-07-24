import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="normal"
      title="Operation completed"
      subTitle="Everything is running as expected."
      extra={<Button type="primary">Back</Button>}
    />
  );
};
