import React, { forwardRef } from 'react';
import type { PieConfig as AntPieConfig } from '@ant-design/charts';
import { Pie as AntPie } from '@ant-design/charts';
import { isString } from 'lodash';

export const measureTextSize = (text: string, font: any = {}) => {
  const { fontSize, fontFamily = 'sans-serif', fontWeight, fontStyle, fontVariant } = font;
  const ctx = document.createElement('canvas').getContext('2d');
  if (ctx) {
    // @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/font
    ctx.font = [fontStyle, fontWeight, fontVariant, `${fontSize}px`, fontFamily].join(' ');
    const metrics = ctx?.measureText(isString(text) ? text : '');
    return {
      width: metrics.width,
      // ref: https://zhuanlan.zhihu.com/p/455132377
      height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
    };
  }
  return {
    width: 0,
    height: 0,
  };
};

// 渲染统计相关内容
function renderStatistic(containerWidth: number, text: string, style) {
  const { width: textWidth, height: textHeight } = measureTextSize(text, style);
  const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

  let scale = 1;

  if (containerWidth < textWidth) {
    scale = Math.min(
      Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))),
      1
    );
  }

  const textStyleStr = `width:${containerWidth}px;`;
  return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
    scale < 1 ? 1 : 'inherit'
  };">${text}</div>`;
}

export interface PieConfig extends AntPieConfig {
  // 是否为环图
  isDonut?: boolean;
  // 是否为半圆环图
  isHalfDonut?: boolean;
  // 统计标题，仅环图生效
  statisticTitle?: string;
}

const Pie: React.FC<PieConfig> = forwardRef(
  (
    {
      data,
      angleField,
      colorField,
      isDonut: isDonutProp,
      isHalfDonut,
      // 环图内半径默认为 0.6
      innerRadius = isDonutProp || isHalfDonut ? 0.6 : undefined,
      pieStyle,
      label,
      legend,
      interactions,
      statistic,
      statisticTitle = '总数',
      ...restConfig
    },
    ref
  ) => {
    // 是否为环图
    const isDonut = isDonutProp || isHalfDonut || !!innerRadius;

    const titleFontSize = 14;
    const contentFontSize = 32;

    const newConfig: PieConfig = {
      data,
      angleField,
      colorField,
      innerRadius,
      // 半圆环图设置起始角度和结束角度
      ...(isHalfDonut
        ? {
            startAngle: (Math.PI * 11) / 12,
            endAngle: (Math.PI * 1) / 12,
          }
        : {}),
      // 环图默认不展示 label，饼图默认展示 label
      label: label !== false && {
        type: 'inner',
        offset: isDonut ? '-50%' : '-30%',
        autoRotate: false,
        ...label,
        style: {
          fontSize: 14,
          textAlign: 'center',
          ...label?.style,
        },
      },
      pieStyle: {
        // 环图间距为 2，饼图间距为 1
        lineWidth: isDonut ? 2 : 1,
        ...pieStyle,
      },
      legend: legend !== false && {
        // 关闭分页
        flipPage: false,
        ...legend,
      },
      interactions: interactions || [
        {
          type: 'element-active',
        },
      ],
      // 统计内容，仅对环图生效
      statistic: {
        ...statistic,
        // 自定义统计标题
        title: statistic?.title !== false && {
          offsetY: isHalfDonut ? 72 : 36,
          // content 为空时，默认的 customHtml 才生效
          ...(statistic?.title?.content === undefined
            ? {
                customHtml: (container, view, datum) => {
                  const { width, height } = container.getBoundingClientRect();
                  const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                  // 开启 pie-statistic-active 交互时，datum[colorField] 不为空
                  const text = datum ? datum[colorField] : statisticTitle;
                  return renderStatistic(d, text, {
                    // 这里的字体大小仅用于计算文本宽高，不用于实际样式
                    fontSize: titleFontSize,
                  });
                },
              }
            : {}),
          ...statistic?.title,
          style: {
            fontSize: `${titleFontSize}px`,
            fontFamily: 'Avenir-Heavy',
            ...statistic?.title?.style,
          },
        },
        // 自定义统计内容
        content: statistic?.content !== false && {
          offsetY: isHalfDonut ? 18 : -18,
          // content 为空时，默认的 customHtml 才生效
          ...(statistic?.content?.content === undefined
            ? {
                customHtml: (container, view, datum, filterData) => {
                  const { width } = container.getBoundingClientRect();
                  const text = datum
                    ? `${datum[angleField]}`
                    : `${filterData?.reduce((a, b) => a + b[angleField], 0)}`;
                  return renderStatistic(width, text, {
                    // 这里的字体大小仅用于计算文本宽高，不用于实际样式
                    fontSize: contentFontSize,
                  });
                },
              }
            : {}),
          ...statistic?.content,
          style: {
            fontSize: `${contentFontSize}px`,
            fontFamily: 'PingFangSC',
            ...statistic?.content?.style,
          },
        },
      },
      theme: 'ob',
      ...restConfig,
    };
    return <AntPie {...newConfig} ref={ref} />;
  }
);

export default Pie;
