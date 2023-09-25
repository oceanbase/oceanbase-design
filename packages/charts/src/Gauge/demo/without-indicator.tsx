import React from 'react';
import { Gauge } from '@oceanbase/charts';
import type { GaugeConfig } from '@oceanbase/charts';

export default () => {
  const config: GaugeConfig = {
    percent: 0.75,
    indicator: false,
    innerRadius: 0.75,
  };
  return <Gauge {...config} />;
};
