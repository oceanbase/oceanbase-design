import React from 'react';
import { Gauge } from '@oceanbase/charts';

export default () => {
  const config = {
    percent: 0.75,
  };
  return <Gauge {...config} />;
};
