import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    autoFit: false,
    height: 160,
    width: 400,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    tooltip: {
      scrollable: true,
    },
  };
  return <Line {...config} />;
};
