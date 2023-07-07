import React, { forwardRef } from 'react';
import type { LiquidConfig as AntLiquidConfig } from '@ant-design/charts';
import { Liquid as AntLiquid } from '@ant-design/charts';
import { toPercent } from '../util/number';
import { theme } from '../theme';

function rectWithRadius(x: number, y: number, width: number, height: number) {
  const GOLDEN_SECTION_RATIO = 0.618;
  const h = height / 2;
  const w = (width / 2) * GOLDEN_SECTION_RATIO;
  const radius = 6;
  return `
      M ${x - w + radius} ${y - h}
      L ${x + w - radius} ${y - h}
      a ${radius}, ${radius} 0 0 1 ${radius}, ${radius}
      L ${x + w} ${y + h - radius}
      a ${radius}, ${radius} 0 0 1 ${-radius}, ${radius}
      L ${x - w + radius} ${y + h}
      a ${radius}, ${radius} 0 0 1 ${-radius}, ${-radius}
      L ${x - w} ${y - h + radius}
      a ${radius}, ${radius} 0 0 1 ${radius}, ${-radius}
    `;
}

export interface LiquidConfig extends AntLiquidConfig {
  // 布局
  layout?: 'horizontal' | 'vertical';
  title?: React.ReactNode;
  // 警告水位线
  warningPercent?: number;
  // 危险水位线
  dangerPercent?: number;
  // 百分比最多保留的有效小数位数
  decimal?: number;
}

const Liquid: React.FC<LiquidConfig> = forwardRef(
  (
    {
      height = 400,
      // 宽度默认与高度一致，才能保证图表内部上下 padding 为 0
      width = height,
      shape = 'circle',
      layout = 'vertical',
      title,
      percent,
      warningPercent,
      dangerPercent,
      decimal = 2,
      liquidStyle,
      shapeStyle,
      outline,
      wave,
      statistic,
      ...restConfig
    },
    ref
  ) => {
    let color;
    if (dangerPercent && percent >= dangerPercent) {
      color = theme.semanticRed;
    } else if (warningPercent && percent >= warningPercent) {
      color = theme.semanticYellow;
    }
    const newConfig: LiquidConfig = {
      height,
      width,
      shape:
        shape === 'rect'
          ? // 自定义带圆角的 rect
            rectWithRadius
          : shape,
      radius: 1.0,
      percent,
      liquidStyle: {
        // 水波背景色
        fill: color || theme.semanticGreen,
        radius: 10,
        ...liquidStyle,
      },
      shapeStyle: {
        // 形状背景色
        fill: '#F5F8FE',
        radius: 10,
        ...shapeStyle,
      },
      outline: {
        // 去掉边框和间距
        border: 0,
        distance: 0,
        ...outline,
      },
      wave: {
        // 水波个数默认为 1
        count: 1,
        // 水波长度为图表宽度
        length: width,
        ...wave,
      },
      // 默认去掉内置的指标文案
      statistic: {
        title: false,
        content: false,
        ...statistic,
      },
      theme: 'ob',
      ...restConfig,
    };
    return layout === 'horizontal' ? (
      // 水平布局
      <div style={{ color, display: 'flex' }}>
        <AntLiquid {...newConfig} ref={ref} />
        <span
          style={{
            marginLeft: shape === 'rect' ? 12 - (width * 3) / 16 : 12,
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height,
          }}
        >
          <span style={{ color: color || theme.styleSheet.axisLabelFillColor, lineHeight: 1 }}>
            {title}
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'end',
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: 'Avenir-Heavy',
                fontSize: height * 0.618,
                lineHeight: 0.618,
                marginRight: 4,
              }}
            >
              {toPercent(percent, decimal)}
            </span>
            <span>%</span>
          </span>
        </span>
      </div>
    ) : (
      // 垂直布局
      <div style={{ color, textAlign: 'center' }}>
        <div
          style={{
            marginBottom: 4,
          }}
        >
          {`${toPercent(percent, decimal)}%`}
        </div>
        <AntLiquid {...newConfig} ref={ref} />
        {title && (
          <div
            style={{
              color: color || theme.styleSheet.axisLabelFillColor,
              marginTop: 4,
            }}
          >
            {title}
          </div>
        )}
      </div>
    );
  }
);

export default Liquid;
