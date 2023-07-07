import React, { forwardRef } from 'react';
import type { HistogramConfig as AntHistogramConfig } from '@ant-design/charts';
import { Histogram as AntHistogram } from '@ant-design/charts';
import { theme } from '../theme';

export type HistogramConfig = AntHistogramConfig;

const Histogram: React.FC<HistogramConfig> = forwardRef(
  ({ binWidth, meta, xAxis, legend, ...restConfig }, ref) => {
    const newConfig: HistogramConfig = {
      binWidth,
      meta: {
        ...meta,
        range: {
          // 完整的 tickInterval 自动计算逻辑已给 G2Plot 提 PR: https://github.com/antvis/G2Plot/pull/3486
          // 先简单根据 binWidth 自动设置刻度线间距，PR 合入后就可以去掉当前代码
          tickInterval: binWidth,
          ...meta?.range,
        },
      },
      xAxis: xAxis !== false && {
        ...xAxis,
        // x 方向增加虚线网格
        grid:
          xAxis?.grid === null
            ? null
            : {
                ...xAxis?.grid,
                line: {
                  ...xAxis?.grid?.line,
                  style: {
                    lineWidth: theme.styleSheet.axisGridBorder,
                    stroke: theme.styleSheet.axisGridBorderColor,
                    lineDash: [4, 4],
                    ...xAxis?.grid?.line?.style,
                  },
                },
              },
      },
      legend: legend !== false && {
        position: 'bottom-left',
        offsetX: 30,
        ...legend,
        marker: {
          symbol: 'circle',
          ...legend?.marker,
        },
      },
      theme: 'ob',
      ...restConfig,
    };
    return <AntHistogram {...newConfig} ref={ref} />;
  }
);

export default Histogram;
