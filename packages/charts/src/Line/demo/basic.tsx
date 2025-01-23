import React, { useState, useEffect } from 'react';
import { Line } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
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
    xField: d => new Date(d.Date),
    yField: 'scales',
  };
  return <Line {...config} />;
};
