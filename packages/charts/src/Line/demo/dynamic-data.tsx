import React, { useState } from 'react';
import { Line, LineConfig } from '@oceanbase/charts';
import { useInterval } from 'ahooks';

function getData() {
  // generate an array of random data
  const data = [];
  const time = new Date().getTime();

  for (let i = -19; i <= 0; i += 1) {
    data.push({
      x: time + i * 1000,
      y: Math.random() + 0.2,
    });
  }
  return data;
}

export default () => {
  const [data, setData] = useState(getData());

  useInterval(() => {
    const x = new Date().getTime();
    const y = Math.random() + 0.2;
    const newData = data.slice(1).concat({ x, y });
    setData(newData);
  }, 1000);

  const config: LineConfig = {
    data,
    xField: 'x',
    yField: 'y',
    xAxis: {
      type: 'time',
      mask: 'HH:mm:ss',
    },
    smooth: true,
    point: {},
    appendPadding: [0, 4, 0, 0],
    animation: {
      update: {
        // animation: 'wave-in',
        animation: 'path-slide',
        // animation: 'position-update',
        // easing: 'easeLinear',
      },
    },
  };
  return <Line {...config} />;
};
