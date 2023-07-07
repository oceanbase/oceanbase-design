import React, { useState, useEffect } from 'react';
import { Histogram } from '@oceanbase/charts';

export default () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
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
    binField: 'depth',
    binWidth: 2,
    stackField: 'cut',
  };

  return <Histogram {...config} />;
};
