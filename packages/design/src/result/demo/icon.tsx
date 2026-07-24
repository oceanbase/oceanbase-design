import React from 'react';
import { Result, Button, theme } from '@oceanbase/design';
import { CheckCircleFilled } from '@oceanbase/icons';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      icon={<CheckCircleFilled style={{ color: token.colorSuccess }} />}
      title="Great, we have done all the operations!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};
