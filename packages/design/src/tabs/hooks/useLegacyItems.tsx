import warning from 'antd/es/_util/warning';
import toArray from 'rc-util/lib/Children/toArray';
import * as React from 'react';
import type { TabsProps, Tab } from '..';
import type { TabPaneProps } from '../TabPane';

function filter<T>(items: (T | null)[]): T[] {
  return items.filter(item => item) as T[];
}

// ref: https://github.com/ant-design/ant-design/blob/master/components/tabs/hooks/useLegacyItems.ts
export default function useLegacyItems(items?: TabsProps['items'], children?: React.ReactNode) {
  if (items) {
    return items;
  }

  warning(!children, 'Tabs', 'Tabs.TabPane is deprecated. Please use `items` directly.');

  const childrenItems = toArray(children).map((node: React.ReactElement<TabPaneProps>) => {
    if (React.isValidElement(node)) {
      const { key, props } = node;
      const { tab, ...restProps } = props || {};

      const item: Tab = {
        key: key as string,
        ...restProps,
        label: tab,
      };
      return item;
    }

    return null;
  });

  return filter(childrenItems);
}
