import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
      subTitle="It is recommended to restart to restore the object state."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};
