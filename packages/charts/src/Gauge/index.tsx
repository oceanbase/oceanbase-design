import React, { forwardRef } from 'react';
import type { GaugeConfig as AntGaugeConfig } from '@ant-design/charts';
import { Gauge as AntGauge } from '@ant-design/charts';
import { theme } from '../theme';
import { toPercent } from '../util/number';

export type GaugeConfig = AntGaugeConfig;

const Gauge: React.FC<GaugeConfig> = forwardRef(
  ({ percent, range, axis, indicator, statistic, ...restConfig }, ref) => {
    const newConfig: GaugeConfig = {
      percent,
      startAngle: (Math.PI * 11) / 12,
      endAngle: (Math.PI * 1) / 12,
      range: {
        color: theme.semanticGreen,
        ...range,
      },
      axis: axis !== false && {
        ...axis,
        label: {
          formatter: v => {
            return Number(v) * 100;
          },
          ...axis?.label,
        },
        subTickLine: {
          count: 3,
          ...axis?.subTickLine,
        },
      },
      indicator: indicator !== false && {
        ...indicator,
        pointer: {
          ...indicator?.pointer,
          style: {
            stroke: '#D0D0D0',
            ...indicator?.pointer?.style,
          },
        },
        pin: {
          ...indicator?.pin,
          style: {
            stroke: '#D0D0D0',
            ...indicator?.pin?.style,
          },
        },
      },
      statistic: {
        ...statistic,
        content: statistic?.content !== false && {
          formatter: datum => `${toPercent(datum?.percent)}%`,
          ...statistic?.content,
          style: {
            fontSize: '36px',
            lineHeight: '36px',
            ...statistic?.content?.style,
          },
        },
      },
      theme: 'ob',
      ...restConfig,
    };
    return <AntGauge {...newConfig} ref={ref} />;
  }
);

export default Gauge;
