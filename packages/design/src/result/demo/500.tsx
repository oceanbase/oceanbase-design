import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
