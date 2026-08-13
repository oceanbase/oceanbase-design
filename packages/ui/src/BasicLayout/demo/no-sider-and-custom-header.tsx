/**
 * iframe: 600
 */
import React, { useState } from 'react';
import { Button, Card, Space, Steps } from '@oceanbase/design';
import { BasicLayout, PageContainer } from '@oceanbase/ui';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  ReadOutlined,
} from '@oceanbase/icons';

export default () => {
  const [current, setCurrent] = useState(0);

  const NEW_METADB_OCP_INSTALL = [
    {
      title: 'MetaDB Configuration',
    },
    {
      title: 'Environment Pre-check',
    },
    {
      title: 'MetaDB Deployment',
    },
    {
      title: 'OCP Configuration',
    },
    {
      title: 'OCP Deployment',
    },
  ];
  const getIcon = (key: number) => {
    return current > key ? <CheckCircleOutlined /> : <ClockCircleOutlined />;
  };
  return (
    <BasicLayout
      logoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      simpleLogoUrl="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*x1BtQ5x7_pUAAAAAAAAAAAAADvSFAQ/original"
      menus={null}
      defaultSelectedKeys={['/~demos/basiclayout-basic/overview']}
      topHeader={{
        extra: (
          <Space size={24}>
            <Space style={{ color: '#5C6B8A', cursor: 'pointer' }}>
              <HomeOutlined />
              Visit Website
            </Space>
            <Space style={{ color: '#5C6B8A', cursor: 'pointer' }}>
              <ReadOutlined />
              Help Center
            </Space>
          </Space>
        ),
        showLocale: false,
        showHelp: false,
      }}
    >
      <PageContainer
        ghost={true}
        header={{
          title: 'Page Title',
        }}
        footer={[
          <Button
            key="prev"
            onClick={() => {
              setCurrent(current > 0 ? current - 1 : 0);
            }}
          >
            Previous
          </Button>,
          <Button
            key="next"
            type="primary"
            onClick={() => {
              setCurrent(current >= 4 ? current : current + 1);
            }}
          >
            Next
          </Button>,
        ]}
      >
        <Card bordered={false}>
          <Steps
            style={{ width: 722, margin: '0 auto' }}
            current={current}
            labelPlacement="vertical"
            items={NEW_METADB_OCP_INSTALL.map((item, index: number) => ({
              ...item,
              icon: getIcon(index),
            }))}
          />
        </Card>
      </PageContainer>
    </BasicLayout>
  );
};
