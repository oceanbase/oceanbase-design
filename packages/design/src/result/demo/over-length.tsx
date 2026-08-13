import React from 'react';
import { Result, Button, Typography, theme } from '@oceanbase/design';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait. Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    >
      <Typography.Title level={5}>
        The content you submitted has the following error:
      </Typography.Title>
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
