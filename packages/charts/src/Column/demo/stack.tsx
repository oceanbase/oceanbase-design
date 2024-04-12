import React from 'react';
import { Column } from '@oceanbase/charts';
import type { ColumnConfig } from '@oceanbase/charts';

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
      year: '1996',
      value: 4.7,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 3.8,
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
      year: '1996',
      value: 4.7,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 3.8,
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
    {
      year: '1996',
      value: 4.7,
      type: 'Jon',
    },
    {
      year: '1997',
      value: 6.1,
      type: 'Jon',
    },
    {
      year: '1998',
      value: 3.8,
      type: 'Jon',
    },
  ];
  const config: ColumnConfig = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
  };

  return <Column {...config} />;
};
