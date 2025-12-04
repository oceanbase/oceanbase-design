import React, { useState } from 'react';
import { Button, Card, Descriptions, Dropdown, message } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  const [loading, setLoading] = useState(false);

  const mockRequest = () => {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    setLoading(true);
    promise.then(() => {
      setLoading(false);
      message.success('刷新成功');
    });
    return promise;
  };

  return (
    <PageContainer
      ghost={false}
      header={{
        title: '页面标题',
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        extra: [
          <Button key="1">次要按钮</Button>,
          <Button key="2" type="primary">
            主要按钮
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: '下拉菜单',
                  key: '1',
                },
                {
                  label: '下拉菜单2',
                  key: '2',
                },
                {
                  label: '下拉菜单3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="3" icon={<EllipsisOutlined />} />
          </Dropdown>,
        ],
      }}
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
