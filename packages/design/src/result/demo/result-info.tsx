import React from 'react';
import { Result, Button } from '@oceanbase/design';

export default () => {
  return (
    <Result
      resultStatus="healthy"
      title="任务创建"
      subTitle={
        <div>
          <div>这是一段关于任务创建的描述，这是一段关于任务创建的描述，这是一段关于任务创建</div>
          <div>的描述，这是一段关于任务创建的描述</div>
        </div>
      }
      extra={[
        <Button type="primary" key="console">
          主操作
        </Button>,
        <Button key="buy">次操作</Button>,
      ]}
    />
  );
};
