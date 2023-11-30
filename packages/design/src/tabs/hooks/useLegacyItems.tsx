import { isNullValue } from '@oceanbase/util';
import { Space, Tag } from 'antd';
import warning from 'antd/es/_util/warning';
import type { Tab } from 'rc-tabs/lib/interface';
import toArray from 'rc-util/lib/Children/toArray';
import * as React from 'react';
import type { TabsProps } from '..';
import type { TabPaneProps } from '../TabPane';

function filter<T>(items: (T | null)[]): T[] {
  return items.filter(item => item) as T[];
}

// ref: https://github.com/ant-design/ant-design/blob/master/components/tabs/hooks/useLegacyItems.ts
export default function useLegacyItems(
  items?: TabsProps['items'],
  children?: React.ReactNode,
  prefixCls?: string
) {
  if (items) {
    return items;
  }

  warning(!children, 'Tabs', 'Tabs.TabPane is deprecated. Please use `items` directly.');

  const childrenItems = toArray(children).map((node: React.ReactElement<TabPaneProps>) => {
    if (React.isValidElement(node)) {
      const { key, props } = node;
      const { tab, tag, ...restProps } = props || {};

      const item: Tab = {
        key,
        ...restProps,
        label: isNullValue(tag) ? (
          tab
        ) : (
          <Space size={4}>
            {tab}
            <Tag bordered={false} className={`${prefixCls}-tab-tag`}>
              {tag}
            </Tag>
          </Space>
        ),
      };
      return item;
    }

    return null;
  });

  return filter(childrenItems);
}
