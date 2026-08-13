/**
 * iframe: 600
 */
import React from 'react';
import { Button, Dropdown } from '@oceanbase/design';
import { PageContainer } from '@oceanbase/ui';
import { EllipsisOutlined } from '@oceanbase/icons';

export default () => {
  const loading = true;
  return (
    <PageContainer
      ghost={false}
      loading={loading}
      header={{
        title: 'Page Title',
        reload: {
          spin: loading,
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
      footer={[<Button>Reset</Button>, <Button type="primary">Submit</Button>]}
    />
  );
};
