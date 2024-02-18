import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="processing"
      title="任务执行中"
      subTitle="这是一段关于任务执行中的描述"
      extra={[
        <Button type="primary" key="console">
          主操作
        </Button>,
        <Button key="buy">次操作</Button>,
      ]}
    />
  );
};
