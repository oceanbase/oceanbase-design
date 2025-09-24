/**
 * iframe: 600
 */
import React from 'react';
import { Button, Card, Descriptions } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

export default () => {
  return (
    <PageContainer
      ghost={false}
      title="页面标题"
      footer={[<Button>重置</Button>, <Button type="primary">提交</Button>]}
    >
      <Card>
        <Descriptions title="基本信息">
          <Descriptions.Item label="创建人">曲丽丽</Descriptions.Item>
          <Descriptions.Item label="电话号码">1810000000</Descriptions.Item>
          <Descriptions.Item label="地址">浙江省杭州市西湖区工专路</Descriptions.Item>
          <Descriptions.Item label="关联表单">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="备注">这是备注</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};
