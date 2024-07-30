import { Tabs as AntTabs } from 'antd';
import type { TabPaneProps as AntTabPaneProps } from 'antd/es/tabs/TabPane';
import type React from 'react';

export interface TabPaneProps extends AntTabPaneProps {
  tag?: React.ReactNode;
  divider?: boolean;
}

export default AntTabs.TabPane as React.FC<TabPaneProps>;
