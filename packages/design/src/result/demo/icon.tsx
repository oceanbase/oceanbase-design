import React from 'react';
import { Result, Button, theme } from '@oceanbase/design';
import { CheckCircleFilled } from '@oceanbase/icons';

export default () => {
  const { token } = theme.useToken();
  return (
    <Result
      icon={<CheckCircleFilled style={{ color: token.colorSuccess }} />}
      title="任务执行成功"
      subTitle="这是一段关于任务执行成功的描述"
      extra={[
        <Button type="primary" key="console">
          主操作
        </Button>,
        <Button key="buy">次操作</Button>,
      ]}
    />
  );
};
