import React from 'react';
import { Result, Button, theme, Typography } from '@oceanbase/design';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      status="error"
      title="任务执行失败"
      subTitle="这是一段关于任务执行失败的描述"
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
