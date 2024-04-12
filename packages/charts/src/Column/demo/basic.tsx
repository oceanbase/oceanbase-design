import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: '家具',
      sales: 38,
    },
    {
      type: '粮油',
      sales: 52,
    },
    {
      type: '生鲜',
      sales: 61,
    },
    {
      type: '美容',
      sales: 145,
    },
    {
      type: '母婴',
      sales: 48,
    },
    {
      type: '食品',
      sales: 38,
    },
    {
      type: '饮料',
      sales: 38,
    },
    {
      type: '清洁',
      sales: 38,
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'top',
    },
  };
  return <Column {...config} />;
};
