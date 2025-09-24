/**
 * iframe: 600
 */
import React, { useState } from 'react';
import { EllipsisOutlined } from '@oceanbase/icons';
import { Button, Card, Dropdown, Tabs, message } from '@oceanbase/design';
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
    >
      <Tabs
        items={[
          {
            key: '1',
            label: 'Tab 1',
            children: <Card bodyStyle={{ height: '100vh' }}>This is content of Tab 1</Card>,
          },
          {
            key: '2',
            label: 'Tab 2',
            children: <Card bodyStyle={{ height: '100vh' }}>This is content of Tab 2</Card>,
          },
        ]}
        tabBarExtraContent="This is tabBarExtraContent content"
      />
    </PageContainer>
  );
};
