import React, { forwardRef } from 'react';
import type { ColumnConfig as AntColumnConfig } from '@ant-design/charts';
import { Column as AntColumn } from '@ant-design/charts';
import { sortByMoment } from '@oceanbase/util';
import { uniq } from 'lodash';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { customMemo } from '../util/custom-memo';

export interface ColumnConfig extends AntColumnConfig {
  theme?: Theme;
}

const Column = forwardRef<unknown, ColumnConfig>(
  (
    {
      data,
      xField,
      isStack,
      isGroup,
      isRange,
      seriesField,
      label,
      xAxis,
      legend,
      theme,
      ...restConfig
    },
    ref
  ) => {
    const themeConfig = useTheme(theme);
    const stackValues =
      (isStack &&
        seriesField &&
        uniq(data?.filter(item => item[seriesField]).map(item => item[seriesField]))) ||
      [];
    // 堆叠柱状图中最后一段对应的值
    const lastStackValue = stackValues?.[0];
    const newConfig: ColumnConfig = {
      // xAxis.type 为时间轴时，需要对 data 进行排序
      data:
        // issue: https://github.com/antvis/G2/issues/3194
        xAxis && (xAxis?.type === 'time' || xAxis?.type === 'timeCat')
          ? data?.sort((a, b) => sortByMoment(a, b, xField || ''))
          : data,
      xField,
      isStack,
      isGroup,
      isRange,
      seriesField,
      // 普通柱状图 label 会展示在顶部，需要留出一定空间，否则 label 会被遮挡
      appendPadding: isStack || isGroup || isRange ? 0 : [16, 0, 0, 0],
      // 分组柱状图组内柱子间距，仅分组柱状图生效
      dodgePadding: 4,
      // 仅基础柱状图默认展示 label，位置为柱状图顶部
      label:
        isStack || isGroup || isRange
          ? label
          : {
              position: 'top',
              offset: 8,
              ...label,
            },
      // 柱子样式
      columnStyle: datum => {
        return {
          radius:
            // 区间柱状图左右两侧均有 2px 圆角
            isRange
              ? 2
              : !isStack ||
                  (isStack &&
                    seriesField &&
                    // 堆叠柱状图仅最后一段末端展示 2px 圆角
                    datum[seriesField] === lastStackValue)
                ? [2, 2, 0, 0]
                : [],
        };
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
      legend: legend !== false && {
        position: 'bottom-left',
        offsetX: 30,
        ...legend,
      },
      theme: themeConfig.theme,
      ...restConfig,
    };
    return <AntColumn {...newConfig} ref={ref} />;
  }
);

export default customMemo(Column);
