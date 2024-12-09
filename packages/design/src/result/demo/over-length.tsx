import React from 'react';
import { Result, Button, Typography, theme } from '@oceanbase/design';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      status="success"
      title="任务执行成功"
      subTitle="这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。这是一段关于任务执行成功的描述。"
      extra={[
        <Button type="primary" key="console">
          主操作
        </Button>,
        <Button key="buy">次操作</Button>,
      ]}
    >
      <Typography.Title level={5}>出错原因</Typography.Title>
      <div
        style={{
          color: token.colorTextTertiary,
        }}
      >
        <div>
          {
            'Error1: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error2: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error3: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
        <div>
          {
            'Error4: Failed to load Stripe-js at HTMLScriptElement. sanonymous> (727.93344492.async.is:1:7397)'
          }
        </div>
      </div>
    </Result>
  );
};
