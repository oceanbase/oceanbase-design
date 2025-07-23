import { Tabs as AntTabs } from 'antd';
import type { TabPaneProps as AntTabPaneProps } from 'antd/es/tabs/TabPane';
import type React from 'react';
import type { BadgeProps } from '../badge';

type BadgeType = BadgeProps | BadgeProps['count'];

export interface TabPaneProps extends AntTabPaneProps {
  /** @deprecated please use `badge` instead */
  tag?: React.ReactNode;
  divider?: boolean;
  badge?: BadgeType;
}

export default AntTabs.TabPane as React.FC<TabPaneProps>;
