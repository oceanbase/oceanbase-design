import React, { forwardRef } from 'react';
import type { ProgressConfig as AntProgressConfig } from '@ant-design/charts';
import { Progress as AntProgress } from '@ant-design/charts';
import useResizeObserver from 'use-resize-observer';
import { toPercent } from '../util/number';
import { theme } from '../theme';

export interface ProgressConfig extends AntProgressConfig {
  // 是否为紧凑型布局，此时进度条与标签的间距较小，常用于表格等场景
  compact?: boolean;
  // 左侧标题
  title?: React.ReactNode;
  // 警告水位线
  warningPercent?: number;
  // 危险水位线
  dangerPercent?: number;
  // 百分比最多保留的有效小数位数
  decimal?: number;
  // 自定义百分比展示的函数
  formatter?: (percent: number) => React.ReactNode;
  // 百分比标签样式
  percentStyle?: React.CSSProperties;
}

const Progress: React.FC<ProgressConfig> = forwardRef(
  (
    {
      compact = false,
      title,
      percent,
      warningPercent,
      dangerPercent,
      decimal = 2,
      formatter = value => `${toPercent(value, decimal)}%`,
      style,
      percentStyle,
      ...restConfig
    },
    ref
  ) => {
    const { ref: titleRef, width: titleWidth } = useResizeObserver<HTMLDivElement>({
      // 包含 padding 和 border
      box: 'border-box',
    });
    const { ref: percentRef, width: percentWidth } = useResizeObserver<HTMLDivElement>({
      // 包含 padding 和 border
      box: 'border-box',
    });

    let color;
    if (dangerPercent && percent >= dangerPercent) {
      color = theme.semanticRed;
    } else if (warningPercent && percent >= warningPercent) {
      color = theme.semanticYellow;
    }

    const padding = compact ? 8 : 16;

    const newConfig: ProgressConfig = {
      height: 20,
      percent,
      theme: 'ob',
      color: [color || theme.defaultColor, theme.barBackgroundColor],
      ...restConfig,
    };
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {title && (
          <span
            ref={titleRef}
            style={{
              paddingRight: padding,
              // 左对齐
              textAlign: 'left',
              // 避免换行
              whiteSpace: 'nowrap',
              color: color || theme.styleSheet.axisLabelFillColor,
            }}
          >
            {title}
          </span>
        )}
        <AntProgress
          {...newConfig}
          ref={ref}
          style={{
            flex: 1,
            maxWidth: `calc(100% - ${titleWidth}px - ${percentWidth}px)`,
            ...style,
          }}
        />
        <span
          ref={percentRef}
          style={{
            paddingLeft: padding,
            // 避免换行
            whiteSpace: 'nowrap',
            color,
            ...percentStyle,
          }}
        >
          {formatter(percent)}
        </span>
      </div>
    );
  }
);

export default Progress;
