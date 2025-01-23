import React, { forwardRef } from 'react';
import type { HistogramConfig as AntHistogramConfig } from '@ant-design/charts';
import { Histogram as AntHistogram } from '@ant-design/charts';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { customMemo } from '../util/custom-memo';

export interface HistogramConfig extends AntHistogramConfig {
  theme?: Theme;
}

const Histogram = forwardRef<unknown, HistogramConfig>(
  ({ binWidth, columnStyle, meta, xAxis, legend, theme, ...restConfig }, ref) => {
    const themeConfig = useTheme(theme);

    const newConfig: HistogramConfig = {
      binWidth,
      columnStyle: {
        stroke: themeConfig.backgroundColor,
        ...columnStyle,
      },
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
                    lineWidth: themeConfig.axis.gridLineWidth,
                    stroke: themeConfig.axis.gridStroke,
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
      theme: themeConfig.theme,
      ...restConfig,
    };
    return <AntHistogram {...newConfig} ref={ref} />;
  }
);

export default customMemo(Histogram);
