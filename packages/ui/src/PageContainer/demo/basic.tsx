/**
 * iframe: 600
 */
import React, { useState } from 'react';
import { EllipsisOutlined } from '@oceanbase/icons';
import { Button, Descriptions, Dropdown, Radio, message } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';

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
  };
  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: '页面标题',
        reload: {
          spin: loading,
          onClick: () => {
            mockRequest();
          },
        },
        breadcrumb: {
          items: [
            {
              href: '',
              title: '一级页面',
            },
            {
              href: '',
              title: '二级页面',
            },
            {
              title: '当前页面',
            },
          ],
        },
        extra: [
          <Radio.Group key="1" defaultValue="option1">
            <Radio.Button value="option1">选项 1</Radio.Button>
            <Radio.Button value="option2">选项 2</Radio.Button>
          </Radio.Group>,
          <Button key="2">次要按钮</Button>,
          <Button key="3" type="primary">
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
            <Button key="4" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      footer={[<Button>重置</Button>, <Button type="primary">提交</Button>]}
    >
      <Descriptions>
        <Descriptions.Item label="创建人">曲丽丽</Descriptions.Item>
        <Descriptions.Item label="电话号码">1810000000</Descriptions.Item>
        <Descriptions.Item label="地址">浙江省杭州市西湖区工专路</Descriptions.Item>
        <Descriptions.Item label="关联表单">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="备注">这是备注</Descriptions.Item>
      </Descriptions>
    </PageContainer>
  );
};
