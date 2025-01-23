import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

export default () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/indices.json',
    },
    xField: d => new Date(d.Date),
    yField: 'Close',
    colorField: 'Symbol',
    // normalize: { basis: 'first', groupBy: 'color' },
    // scale: {
    //   y: { type: 'log' },
    // },
    // axis: {
    //   y: { title: '↑ Change in price (%)' },
    // },
    // label: {
    //   text: 'Symbol',
    //   selector: 'last',
    //   style: {
    //     fontSize: 10,
    //   },
    // },
    // tooltip: { channel: 'y', valueFormatter: '.1f' },
  };
  return <Line {...config} />;
};
