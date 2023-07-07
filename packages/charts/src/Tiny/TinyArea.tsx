import React, { forwardRef } from 'react';
import type { TinyAreaConfig as AntTinyAreaConfig } from '@ant-design/charts';
import { TinyArea as AntTinyArea } from '@ant-design/charts';
import { theme } from '../theme';

export type TinyAreaConfig = AntTinyAreaConfig;

const TinyArea: React.FC<TinyAreaConfig> = forwardRef(
  ({ height = 60, color, line, point, ...restConfig }, ref) => {
    const newConfig: TinyAreaConfig = {
      height,
      line: {
        // line 大小默认为 1
        size: 1,
        ...line,
        style: {
          stroke: typeof color === 'string' ? color : undefined,
          ...line?.style,
        },
      },
      point: point
        ? {
            // point 大小默认为 1.5
            size: 1.5,
            ...point,
            style: {
              fill: typeof color === 'string' ? color : theme.defaultColor,
              // 去掉边框
              lineWidth: 0,
              ...point.style,
            },
          }
        : undefined,
      theme: 'ob',
      ...restConfig,
    };
    return <AntTinyArea {...newConfig} ref={ref} />;
  }
);

export default TinyArea;
