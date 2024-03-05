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
        title: '页面标题',
        reload: {
          spin: loading,
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
            <Button key="3" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      footer={[<Button>重置</Button>, <Button type="primary">提交</Button>]}
    />
  );
};
