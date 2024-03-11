import React from 'react';
import { Button, Card, Result } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={true}
      header={{
        title: 'Page Title',
      }}
    >
      <Card
        bordered={false}
        bodyStyle={{
          height: 'calc(100vh - 96px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Result
          status="success"
          title="任务执行成功"
          subTitle="这是一段关于任务执行成功的描述"
          extra={[
            <Button type="primary" key="console">
              主操作
            </Button>,
            <Button key="buy">次操作</Button>,
          ]}
        />
      </Card>
    </PageContainer>
  );
};
