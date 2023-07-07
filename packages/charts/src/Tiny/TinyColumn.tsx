import React, { forwardRef } from 'react';
import type { TinyColumnConfig as AntTinyColumnConfig } from '@ant-design/charts';
import { TinyColumn as AntTinyColumn } from '@ant-design/charts';
import { theme } from '../theme';

export type TinyColumnConfig = AntTinyColumnConfig;

const TinyColumn: React.FC<TinyColumnConfig> = forwardRef(
  ({ height = 60, columnStyle, label, ...restConfig }, ref) => {
    const newConfig: TinyColumnConfig = {
      height,
      appendPadding: label ? [16, 0, 0, 0] : 0,
      maxColumnWidth: theme.columnWidth,
      minColumnWidth: theme.columnWidth,
      columnStyle: {
        radius: [2, 2, 0, 0],
        ...columnStyle,
      },
      label: label
        ? {
            position: 'top',
            offset: 4,
            ...label,
          }
        : undefined,
      theme: 'ob',
      ...restConfig,
    };
    return <AntTinyColumn {...newConfig} ref={ref} />;
  }
);

export default TinyColumn;
