import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      type: 'Furniture',
      sales: 38,
    },
    {
      type: 'Groceries',
      sales: 52,
    },
    {
      type: 'Fresh',
      sales: 61,
    },
    {
      type: 'Beauty',
      sales: 145,
    },
    {
      type: 'Baby',
      sales: 48,
    },
    {
      type: 'Food',
      sales: 38,
    },
    {
      type: 'Beverages',
      sales: 38,
    },
    {
      type: 'Cleaning',
      sales: 38,
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // Position of data labels can be set manually
      position: 'top',
    },
  };
  return <Column {...config} />;
};
