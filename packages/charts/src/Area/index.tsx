import React, { forwardRef } from 'react';
import type { AreaConfig as AntAreaConfig } from '@ant-design/charts';
import { Area as AntArea } from '@ant-design/charts';
import { sortByMoment } from '@oceanbase/util';
import useResizeObserver from 'use-resize-observer';
import type { Tooltip } from '../hooks/useTooltipScrollable';
import useTooltipScrollable from '../hooks/useTooltipScrollable';
import { useTheme } from '../theme';
import type { Theme } from '../theme';

export interface AreaConfig extends AntAreaConfig {
  tooltip?: false | Tooltip;
  theme?: Theme;
}

const Area: React.FC<AreaConfig> = forwardRef(
  (
    { data, line, xField, xAxis, yAxis, tooltip, legend, interactions, theme, ...restConfig },
    ref
  ) => {
    const themeConfig = useTheme(theme);
    const { ref: containerRef, height: containerHeight } = useResizeObserver<HTMLDivElement>({
      // 包含 padding 和 border
      box: 'border-box',
    });
    const tooltipConfig = useTooltipScrollable(tooltip, containerHeight);

    const newConfig: AreaConfig = {
      data:
        // xAxis.type 为时间轴时，需要对 data 进行排序
        // issue: https://github.com/antvis/G2/issues/3194
        xAxis && (xAxis?.type === 'time' || xAxis?.type === 'timeCat')
          ? data?.sort((a, b) => sortByMoment(a, b, xField || ''))
          : data,
      xField,
      line: {
        ...line,
        style: {
          lineWidth: themeConfig.styleSheet.lineBorder,
          ...line?.style,
        },
      },
      xAxis: xAxis !== false && {
        // type 为 time 时需要关闭自动美化，否则 X 轴两侧会留白
        // issue: https://github.com/antvis/G2Plot/issues/1951
        nice: xAxis?.type === 'time' ? false : undefined,
        // 点数 >= 14 时，x 方向展示 7 个刻度线和网格
        tickCount: data?.length >= 14 ? 7 : undefined,
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
                    lineWidth: themeConfig.styleSheet.axisGridBorder,
                    stroke: themeConfig.styleSheet.axisGridBorderColor,
                    lineDash: [4, 4],
                    ...xAxis?.grid?.line?.style,
                  },
                },
              },
      },
      yAxis: yAxis !== false && {
        // 避免超出 Y 轴刻度线
        nice: true,
        // Y 轴方向默认展示 5 个刻度线
        tickCount: 5,
        ...yAxis,
      },
      tooltip: tooltipConfig,
      legend: legend !== false && {
        position: 'bottom-left',
        offsetX: 30,
        ...legend,
        marker: {
          symbol: 'square',
          ...legend?.marker,
        },
      },
      // 默认开启 x 方向框选
      interactions: interactions || [
        {
          type: 'brush-x',
        },
      ],
      theme: themeConfig.theme,
      ...restConfig,
    };
    return (
      <div ref={containerRef}>
        <AntArea {...newConfig} ref={ref} />
      </div>
    );
  }
);

export default Area;
