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
      message.success('Refreshed successfully');
    });
  };
  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: 'Page Title',
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
              title: 'Level 1 Page',
            },
            {
              href: '',
              title: 'Level 2 Page',
            },
            {
              title: 'Current Page',
            },
          ],
        },
        extra: [
          <Button key="1">Secondary</Button>,
          <Button key="2" type="primary">
            Primary
          </Button>,
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Dropdown Menu',
                  key: '1',
                },
                {
                  label: 'Dropdown Menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown Menu 3',
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
