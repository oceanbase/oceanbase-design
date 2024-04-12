import React from 'react';
import { Bar } from '@oceanbase/charts';
import type { BarConfig } from '@oceanbase/charts';

export default () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1991',
      value: 4.5,
      type: 'Jon',
    },
    {
      year: '1992',
      value: 5,
      type: 'Jon',
    },
    {
      year: '1993',
      value: 3,
      type: 'Jon',
    },
    {
      year: '1994',
      value: 4.9,
      type: 'Jon',
    },
    {
      year: '1995',
      value: 4,
      type: 'Jon',
    },
  ];
  const config: BarConfig = {
    data,
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
  };
  return <Bar {...config} />;
};
