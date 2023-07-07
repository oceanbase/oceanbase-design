import React, { useState, useEffect } from 'react';
import { Histogram } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json')
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
    binField: 'value',
    binWidth: 2,
  };

  return <Histogram {...config} />;
};
