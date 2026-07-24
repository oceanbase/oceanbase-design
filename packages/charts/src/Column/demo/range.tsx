import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: 'Category A',
      values: [76, 100],
    },
    {
      type: 'Category B',
      values: [56, 108],
    },
    {
      type: 'Category C',
      values: [38, 129],
    },
    {
      type: 'Category D',
      values: [58, 155],
    },
    {
      type: 'Category E',
      values: [45, 120],
    },
    {
      type: 'Category F',
      values: [23, 99],
    },
    {
      type: 'Category G',
      values: [18, 56],
    },
    {
      type: 'Category H',
      values: [18, 34],
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'values',
    isRange: true,
  };

  return <Column {...config} />;
};
