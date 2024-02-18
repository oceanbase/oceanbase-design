import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      status="warning"
      title="对象状态异常"
      subTitle="建议进行重启操作，来恢复对象状态"
      extra={[
        <Button type="primary" key="console">
          主操作
        </Button>,
        <Button key="buy">次操作</Button>,
      ]}
    />
  );
};
