import React from 'react';
import { ConfigProvider } from '@oceanbase/design';
import { BasicLayout, PageContainer } from '@oceanbase/ui';

const menus = [{ title: 'Home', link: '/' }];

export default function AppBasicLayoutPage() {
  return (
    <ConfigProvider>
      <BasicLayout logoUrl="/logo.svg" topHeader={{ title: 'App' }} menus={menus}>
        <PageContainer title="Dashboard">{/* IMPLEMENT: page content */}</PageContainer>
      </BasicLayout>
    </ConfigProvider>
  );
}
